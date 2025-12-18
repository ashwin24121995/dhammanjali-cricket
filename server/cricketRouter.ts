/**
 * Cricket Data Router
 * tRPC endpoints for fetching cricket matches, players, and live scores
 */

import { router, publicProcedure } from "./_core/trpc";
import { z } from "zod";
import { getDb } from "./db";
import { matches, players } from "../drizzle/schema";
import { eq, desc, and } from "drizzle-orm";
import { ENV } from "./_core/env";

const CRICKET_API_BASE_URL = "https://api.cricapi.com/v1";

/**
 * Cricket Data Router
 */
export const cricketRouter = router({
  /**
   * Get all current and upcoming matches
   */
  getCurrentMatches: publicProcedure
    .input(
      z.object({
        status: z.enum(["all", "upcoming", "live", "completed"]).optional().default("all"),
        limit: z.number().min(1).max(100).optional().default(20),
      })
    )
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      let query = db.select().from(matches).orderBy(desc(matches.matchDate));

      if (input.status !== "all") {
        query = query.where(eq(matches.status, input.status)) as any;
      }

      const matchList = await query.limit(input.limit);

      return {
        matches: matchList.map((match) => ({
          ...match,
          score: match.score ? JSON.parse(match.score) : null,
        })),
      };
    }),

  /**
   * Get match details by ID
   */
  getMatchById: publicProcedure
    .input(z.object({ matchId: z.number() }))
    .query(async ({ input }) => {
      const db = await getDb();
      if (!db) {
        throw new Error("Database not available");
      }

      const matchList = await db
        .select()
        .from(matches)
        .where(eq(matches.id, input.matchId))
        .limit(1);

      if (matchList.length === 0) {
        throw new Error("Match not found");
      }

      const match = matchList[0];

      return {
        match: {
          ...match,
          score: match.score ? JSON.parse(match.score) : null,
        },
      };
    }),

  /**
   * Get match squad (players) from Cricket API
   */
  getMatchSquad: publicProcedure
    .input(z.object({ externalId: z.string() }))
    .query(async ({ input }) => {
      try {
        const url = `${CRICKET_API_BASE_URL}/match_squad?apikey=${ENV.cricketApiKey}&id=${input.externalId}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.status !== "success" || !result.data) {
          throw new Error("Failed to fetch match squad");
        }
        
        return {
          squad: result.data,
        };
      } catch (error) {
        console.error("[Cricket API] Error fetching match squad:", error);
        throw new Error("Failed to fetch match squad");
      }
    }),

  /**
   * Get live match scorecard
   */
  getMatchScorecard: publicProcedure
    .input(z.object({ externalId: z.string() }))
    .query(async ({ input }) => {
      try {
        const url = `${CRICKET_API_BASE_URL}/match_scorecard?apikey=${ENV.cricketApiKey}&id=${input.externalId}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.status !== "success" || !result.data) {
          throw new Error("Failed to fetch match scorecard");
        }
        
        return {
          scorecard: result.data,
        };
      } catch (error) {
        console.error("[Cricket API] Error fetching match scorecard:", error);
        throw new Error("Failed to fetch match scorecard");
      }
    }),

  /**
   * Get fantasy points for a match
   */
  getMatchPoints: publicProcedure
    .input(
      z.object({
        externalId: z.string(),
        ruleset: z.number().optional().default(0),
      })
    )
    .query(async ({ input }) => {
      try {
        const url = `${CRICKET_API_BASE_URL}/match_points?apikey=${ENV.cricketApiKey}&id=${input.externalId}&ruleset=${input.ruleset}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.status !== "success" || !result.data) {
          throw new Error("Failed to fetch match points");
        }
        
        return {
          points: result.data,
        };
      } catch (error) {
        console.error("[Cricket API] Error fetching match points:", error);
        throw new Error("Failed to fetch match points");
      }
    }),

  /**
   * Sync matches from Cricket API (admin/manual trigger)
   */
  syncMatches: publicProcedure.mutation(async () => {
    try {
      const { syncCurrentMatches } = await import("./cricketDataSync");
      await syncCurrentMatches();
      
      return {
        success: true,
        message: "Match data sync initiated",
      };
    } catch (error) {
      console.error("[Cricket Sync] Manual sync failed:", error);
      throw new Error("Failed to sync match data");
    }
  }),
});
