import { describe, it, expect, beforeAll } from "vitest";
import { appRouter } from "./routers";
import { getDb } from "./db";
import { matches } from "../drizzle/schema";

describe("Cricket Router", () => {
  beforeAll(async () => {
    // Ensure database is available
    const db = await getDb();
    expect(db).toBeDefined();
  });

  it("should fetch current matches", async () => {
    const caller = appRouter.createCaller({
      req: {} as any,
      res: {} as any,
      user: null,
    });

    const result = await caller.cricket.getCurrentMatches({
      status: "all",
      limit: 10,
    });

    expect(result).toHaveProperty("matches");
    expect(Array.isArray(result.matches)).toBe(true);
  }, 10000);

  it("should trigger manual sync", async () => {
    const caller = appRouter.createCaller({
      req: {} as any,
      res: {} as any,
      user: null,
    });

    const result = await caller.cricket.syncMatches();

    expect(result).toHaveProperty("success");
    expect(result.success).toBe(true);
    expect(result).toHaveProperty("message");
  }, 20000);

  it("should fetch match squad from API", async () => {
    const db = await getDb();
    if (!db) {
      throw new Error("Database not available");
    }

    // Get a match from database to test squad fetching
    const matchList = await db.select().from(matches).limit(1);

    if (matchList.length > 0 && matchList[0].externalId) {
      const caller = appRouter.createCaller({
        req: {} as any,
        res: {} as any,
        user: null,
      });

      const result = await caller.cricket.getMatchSquad({
        externalId: matchList[0].externalId,
      });

      expect(result).toHaveProperty("squad");
    } else {
      console.log("No matches in database to test squad fetching");
    }
  }, 15000);

  it("should filter matches by status", async () => {
    const caller = appRouter.createCaller({
      req: {} as any,
      res: {} as any,
      user: null,
    });

    const upcomingResult = await caller.cricket.getCurrentMatches({
      status: "upcoming",
      limit: 5,
    });

    expect(upcomingResult).toHaveProperty("matches");
    expect(Array.isArray(upcomingResult.matches)).toBe(true);

    // All matches should have status "upcoming"
    upcomingResult.matches.forEach((match) => {
      expect(match.status).toBe("upcoming");
    });
  }, 10000);
});
