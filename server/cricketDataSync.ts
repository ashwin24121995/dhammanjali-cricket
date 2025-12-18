/**
 * Cricket Data Sync Service
 * Auto-updates cricket data from API every 30 minutes
 * Implements smart caching to stay within 100 API calls/24hr limit
 */

import { getDb } from "./db";
import { matches, apiCache } from "../drizzle/schema";
import { 
  fetchCurrentMatchesFromApi, 
  formatMatchForDatabase,
  isCacheValid,
  CACHE_DURATION_MS 
} from "./cricketApi";
import { eq } from "drizzle-orm";

// Track if sync is currently running to prevent overlapping executions
let isSyncing = false;

/**
 * Sync current matches from Cricket API to database
 * Only fetches from API if cache is older than 30 minutes
 */
export async function syncCurrentMatches(): Promise<void> {
  if (isSyncing) {
    console.log("[Cricket Sync] Sync already in progress, skipping...");
    return;
  }

  const db = await getDb();
  if (!db) {
    console.error("[Cricket Sync] Database not available");
    return;
  }

  try {
    isSyncing = true;
    console.log("[Cricket Sync] Starting match data sync...");

    // Check if we need to fetch from API
    const cacheEntry = await db.query.apiCache.findFirst({
      where: eq(apiCache.endpoint, "currentMatches"),
    });

    const needsUpdate = !cacheEntry || !isCacheValid(cacheEntry.lastFetched);

    if (!needsUpdate) {
      console.log("[Cricket Sync] Cache is still valid, skipping API call");
      return;
    }

    // Fetch fresh data from API
    const apiMatches = await fetchCurrentMatchesFromApi();
    console.log(`[Cricket Sync] Fetched ${apiMatches.length} matches from API`);

    // Update or insert matches in database
    for (const apiMatch of apiMatches) {
      const matchData = formatMatchForDatabase(apiMatch);

      // Check if match already exists
      const existingMatch = await db.query.matches.findFirst({
        where: eq(matches.externalId, apiMatch.id),
      });

      if (existingMatch) {
        // Update existing match
        await db.update(matches)
          .set(matchData)
          .where(eq(matches.externalId, apiMatch.id));
        console.log(`[Cricket Sync] Updated match: ${apiMatch.name}`);
      } else {
        // Insert new match
        await db.insert(matches).values(matchData);
        console.log(`[Cricket Sync] Inserted new match: ${apiMatch.name}`);
      }
    }

    // Update API cache tracking
    await db.insert(apiCache).values({
      endpoint: "currentMatches",
      lastFetched: new Date(),
      hitsToday: 0, // Will be updated based on API response
      hitsLimit: 100,
      status: "success",
    });

    console.log("[Cricket Sync] Match data sync completed successfully");
  } catch (error) {
    console.error("[Cricket Sync] Error syncing match data:", error);
    
    // Log failed attempt
    try {
      await db.insert(apiCache).values({
        endpoint: "currentMatches",
        lastFetched: new Date(),
        hitsToday: 0,
        hitsLimit: 100,
        status: "failure",
      });
    } catch (e) {
      console.error("[Cricket Sync] Failed to log error:", e);
    }
  } finally {
    isSyncing = false;
  }
}

/**
 * Start the background sync job
 * Runs every 30 minutes (1,800,000 milliseconds)
 */
export function startCricketDataSync(): void {
  console.log("[Cricket Sync] Starting background sync job (every 30 minutes)...");

  // Run immediately on startup
  syncCurrentMatches().catch(console.error);

  // Then run every 30 minutes
  const THIRTY_MINUTES_MS = 30 * 60 * 1000;
  setInterval(() => {
    syncCurrentMatches().catch(console.error);
  }, THIRTY_MINUTES_MS);

  console.log("[Cricket Sync] Background sync job started");
}

/**
 * Get API usage statistics
 */
export async function getApiUsageStats() {
  const db = await getDb();
  if (!db) {
    return { 
      totalCallsLast24Hours: 0, 
      limit: 100, 
      remaining: 100, 
      lastSync: null, 
      nextSyncIn: 0 
    };
  }

  const recentCalls = await db.query.apiCache.findMany({
    limit: 100,
  });

  const last24Hours = recentCalls.filter((call: any) => {
    const timeDiff = new Date().getTime() - new Date(call.lastFetched).getTime();
    return timeDiff < 24 * 60 * 60 * 1000; // 24 hours
  });

  return {
    totalCallsLast24Hours: last24Hours.length,
    limit: 100,
    remaining: 100 - last24Hours.length,
    lastSync: recentCalls[0]?.lastFetched || null,
    nextSyncIn: recentCalls[0] 
      ? Math.max(0, CACHE_DURATION_MS - (new Date().getTime() - new Date(recentCalls[0].lastFetched).getTime()))
      : 0,
  };
}
