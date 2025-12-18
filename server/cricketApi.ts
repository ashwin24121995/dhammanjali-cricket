/**
 * Cricket API Service
 * Handles all interactions with CricketData.org API
 * Implements smart caching and rate limiting to stay within 100 API calls/24hr
 */

import { ENV } from "./_core/env";

const CRICKET_API_BASE_URL = "https://api.cricapi.com/v1";
const CRICKET_API_KEY = ENV.cricketApiKey;

// Cache duration: 30 minutes (in milliseconds)
export const CACHE_DURATION_MS = 30 * 60 * 1000;

interface ApiResponse<T> {
  apikey: string;
  status: "success" | "failure";
  data: T;
  info: {
    hitsToday: number;
    hitsLimit: number;
    credits?: number;
    server: number;
    offsetRows?: number;
    totalRows?: number;
    queryTime: number;
  };
}

interface CurrentMatch {
  id: string;
  name: string;
  matchType: "odi" | "t20" | "test";
  status: string;
  venue: string;
  date: string;
  dateTimeGMT: string;
  teams: string[];
  teamInfo?: Array<{
    name: string;
    shortname: string;
    img: string;
  }>;
  score?: Array<{
    r: number;
    w: number;
    o: number;
    inning: string;
  }>;
  series_id: string;
  fantasyEnabled: boolean;
  bbbEnabled?: boolean;
  hasSquad?: boolean;
  matchStarted: boolean;
  matchEnded: boolean;
}

interface MatchInfo extends CurrentMatch {
  // Additional fields from match_info endpoint
}

interface Player {
  id: string;
  name: string;
  country?: string;
}

/**
 * Fetch current/live matches from Cricket API
 */
export async function fetchCurrentMatchesFromApi(): Promise<CurrentMatch[]> {
  try {
    const url = `${CRICKET_API_BASE_URL}/currentMatches?apikey=${CRICKET_API_KEY}&offset=0`;
    
    console.log("[Cricket API] Fetching current matches...");
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }
    
    const result: ApiResponse<CurrentMatch[]> = await response.json();
    
    if (result.status !== "success") {
      throw new Error("API returned failure status");
    }
    
    console.log(`[Cricket API] Fetched ${result.data.length} matches`);
    console.log(`[Cricket API] Usage: ${result.info.hitsToday}/${result.info.hitsLimit} hits today`);
    
    return result.data;
  } catch (error) {
    console.error("[Cricket API] Error fetching current matches:", error);
    throw error;
  }
}

/**
 * Fetch detailed match information
 */
export async function fetchMatchInfoFromApi(matchId: string): Promise<MatchInfo> {
  try {
    const url = `${CRICKET_API_BASE_URL}/match_info?apikey=${CRICKET_API_KEY}&id=${matchId}`;
    
    console.log(`[Cricket API] Fetching match info for ${matchId}...`);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }
    
    const result: ApiResponse<MatchInfo> = await response.json();
    
    if (result.status !== "success") {
      throw new Error("API returned failure status");
    }
    
    console.log(`[Cricket API] Fetched match info for ${matchId}`);
    console.log(`[Cricket API] Usage: ${result.info.hitsToday}/${result.info.hitsLimit} hits today`);
    
    return result.data;
  } catch (error) {
    console.error(`[Cricket API] Error fetching match info for ${matchId}:`, error);
    throw error;
  }
}

/**
 * Fetch all players from Cricket API
 */
export async function fetchPlayersFromApi(offset: number = 0): Promise<Player[]> {
  try {
    const url = `${CRICKET_API_BASE_URL}/players?apikey=${CRICKET_API_KEY}&offset=${offset}`;
    
    console.log(`[Cricket API] Fetching players (offset: ${offset})...`);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }
    
    const result: ApiResponse<Player[]> = await response.json();
    
    if (result.status !== "success") {
      throw new Error("API returned failure status");
    }
    
    console.log(`[Cricket API] Fetched ${result.data.length} players`);
    console.log(`[Cricket API] Usage: ${result.info.hitsToday}/${result.info.hitsLimit} hits today`);
    
    return result.data;
  } catch (error) {
    console.error("[Cricket API] Error fetching players:", error);
    throw error;
  }
}

/**
 * Check if cached data is still valid (less than 30 minutes old)
 */
export function isCacheValid(lastUpdated: Date | null): boolean {
  if (!lastUpdated) return false;
  
  const now = new Date();
  const timeDiff = now.getTime() - new Date(lastUpdated).getTime();
  
  return timeDiff < CACHE_DURATION_MS;
}

/**
 * Format Cricket API match data to our database schema
 */
export function formatMatchForDatabase(apiMatch: CurrentMatch) {
  const status: "completed" | "live" | "upcoming" = apiMatch.matchEnded 
    ? "completed" 
    : apiMatch.matchStarted 
    ? "live" 
    : "upcoming";

  return {
    externalId: apiMatch.id,
    team1: apiMatch.teams[0] || "TBD",
    team2: apiMatch.teams[1] || "TBD",
    venue: apiMatch.venue,
    matchDate: new Date(apiMatch.dateTimeGMT),
    matchTime: new Date(apiMatch.dateTimeGMT).toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZone: 'Asia/Kolkata'
    }),
    matchType: apiMatch.matchType.toUpperCase(),
    status,
    score: apiMatch.score ? JSON.stringify(apiMatch.score) : null,
    lastUpdated: new Date(),
  };
}
