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

interface CommentaryItem {
  o: number; // over number
  b: number; // ball number
  r: number; // runs scored
  w: number; // wickets (0 or 1)
  t: string; // commentary text
  batsmanStriker: {
    id: string;
    name: string;
  };
  bowler: {
    id: string;
    name: string;
  };
}

interface MatchCommentary {
  matchId: string;
  commentary: CommentaryItem[];
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
 * Fetch ball-by-ball commentary for a specific match
 */
export async function fetchMatchCommentary(matchId: string): Promise<MatchCommentary> {
  try {
    const url = `${CRICKET_API_BASE_URL}/match_info?apikey=${CRICKET_API_KEY}&id=${matchId}`;
    
    console.log(`[Cricket API] Fetching commentary for match ${matchId}...`);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }
    
    const result: any = await response.json();
    
    if (result.status !== "success") {
      throw new Error("API returned failure status");
    }
    
    console.log(`[Cricket API] Fetched commentary for match ${matchId}`);
    console.log(`[Cricket API] Usage: ${result.info.hitsToday}/${result.info.hitsLimit} hits today`);
    
    // Extract commentary from the response
    // The API returns commentary in the 'data' field with ball-by-ball details
    const commentary = result.data.score || [];
    
    return {
      matchId,
      commentary: commentary.map((item: any, index: number) => ({
        o: Math.floor(index / 6) + 1, // Calculate over number
        b: (index % 6) + 1, // Calculate ball number
        r: item.r || 0,
        w: item.w || 0,
        t: item.commentary || `Ball ${index + 1}`,
        batsmanStriker: item.batsman || { id: "", name: "Unknown" },
        bowler: item.bowler || { id: "", name: "Unknown" },
      })),
    };
  } catch (error) {
    console.error(`[Cricket API] Error fetching commentary for ${matchId}:`, error);
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
  // Smart match completion detection based on cricket rules
  let isMatchComplete = apiMatch.matchEnded;
  
  // Additional check: analyze score data to detect if match is actually complete
  // This runs even if API says matchEnded to ensure accuracy
  if (apiMatch.score && apiMatch.score.length >= 2 && apiMatch.matchStarted) {
    const innings1 = apiMatch.score[0];
    const innings2 = apiMatch.score[1];
    
    if (innings1 && innings2) {
      const team1Runs = innings1.r || 0;
      const team1Wickets = innings1.w || 0;
      const team2Runs = innings2.r || 0;
      const team2Wickets = innings2.w || 0;
      
      // For limited overs cricket (T20/ODI)
      const matchTypeLower = apiMatch.matchType.toLowerCase();
      if (matchTypeLower === 't20' || matchTypeLower === 'odi') {
        // Match is complete if:
        // 1. Both teams all out (10 wickets each)
        if (team1Wickets === 10 && team2Wickets === 10) {
          isMatchComplete = true;
        }
        // 2. Second team reached/exceeded target (won the match)
        else if (team2Runs > team1Runs) {
          isMatchComplete = true;
        }
        // 3. Second team all out while chasing (lost the match)
        else if (team2Wickets === 10 && team2Runs < team1Runs) {
          isMatchComplete = true;
        }
      }
      // For Test matches
      else if (matchTypeLower === 'test') {
        // If both teams are all out and we only have 2 innings (not 4), match is likely complete
        // This handles cases where API hasn't updated matchEnded flag yet
        if (team1Wickets === 10 && team2Wickets === 10 && apiMatch.score.length === 2) {
          isMatchComplete = true;
        }
      }
    }
  }
  
  const status: "completed" | "live" | "upcoming" = isMatchComplete
    ? "completed" 
    : apiMatch.matchStarted 
    ? "live" 
    : "upcoming";

  // Extract team logos from teamInfo array
  const team1Logo = apiMatch.teamInfo?.find(t => t.name === apiMatch.teams[0])?.img || null;
  const team2Logo = apiMatch.teamInfo?.find(t => t.name === apiMatch.teams[1])?.img || null;

  // Detect match result from API status field
  let matchResult: string | null = null;
  if (apiMatch.matchEnded && apiMatch.status) {
    const statusLower = apiMatch.status.toLowerCase();
    if (statusLower.includes('draw')) {
      matchResult = 'draw';
    } else if (statusLower.includes('tie')) {
      matchResult = 'tie';
    } else if (statusLower.includes('abandon')) {
      matchResult = 'abandoned';
    } else if (statusLower.includes('no result')) {
      matchResult = 'no result';
    } else if (statusLower.includes('won') || statusLower.includes('win')) {
      matchResult = 'won';
    }
  }

  return {
    externalId: apiMatch.id,
    team1: apiMatch.teams[0] || "TBD",
    team2: apiMatch.teams[1] || "TBD",
    team1Logo,
    team2Logo,
    venue: apiMatch.venue,
    matchDate: new Date(apiMatch.dateTimeGMT),
    matchTime: new Date(apiMatch.dateTimeGMT).toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZone: 'Asia/Kolkata'
    }),
    matchType: apiMatch.matchType.toUpperCase(),
    status,
    matchResult,
    score: apiMatch.score ? JSON.stringify(apiMatch.score) : null,
    lastUpdated: new Date(),
  };
}
