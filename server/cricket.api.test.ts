import { describe, it, expect } from "vitest";
import { ENV } from "./_core/env";

describe("CricketData.org API Integration", () => {
  it("should validate API key by fetching current matches", async () => {
    const apiKey = ENV.cricketApiKey;
    expect(apiKey).toBeDefined();
    expect(apiKey).not.toBe("");

    // Test the API key with a lightweight endpoint
    const response = await fetch(
      `https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}&offset=0`
    );

    expect(response.ok).toBe(true);
    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toHaveProperty("apikey");
    expect(data).toHaveProperty("data");
    expect(Array.isArray(data.data)).toBe(true);
  }, 15000); // 15 second timeout for API call

  it("should fetch match squad data", async () => {
    const apiKey = ENV.cricketApiKey;

    // First get a match ID from current matches
    const matchesResponse = await fetch(
      `https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}&offset=0`
    );
    const matchesData = await matchesResponse.json();

    if (matchesData.data && matchesData.data.length > 0) {
      const matchId = matchesData.data[0].id;

      // Test squad endpoint
      const squadResponse = await fetch(
        `https://api.cricapi.com/v1/match_squad?apikey=${apiKey}&id=${matchId}`
      );

      expect(squadResponse.ok).toBe(true);
      const squadData = await squadResponse.json();
      expect(squadData).toHaveProperty("data");
    }
  }, 20000); // 20 second timeout for multiple API calls
});
