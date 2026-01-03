import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import {
  getAllMatches,
  getMatchById,
  getAllPlayers,
  getLeaderboard,
  getUserStats,
  getUserTeamsByUserId,
  createUserTeam,
  addPlayerToTeam,
  createOrUpdateUserStats,
} from "./db";

export const fantasyRouter = router({
  // Get all upcoming matches
  getMatches: publicProcedure.query(async () => {
    const matches = await getAllMatches();
    return matches;
  }),

  // Get match by ID
  getMatchById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const match = await getMatchById(input.id);
      return match;
    }),

  // Get all players
  getPlayers: publicProcedure.query(async () => {
    const players = await getAllPlayers();
    return players;
  }),

  // Get leaderboard
  getLeaderboard: publicProcedure
    .input(z.object({ limit: z.number().optional().default(10) }))
    .query(async ({ input }) => {
      const leaderboard = await getLeaderboard(input.limit);
      return leaderboard;
    }),

  // Get user's teams
  getMyTeams: protectedProcedure.query(async ({ ctx }) => {
    const teams = await getUserTeamsByUserId(ctx.user.id);
    return teams;
  }),

  // Get user's stats
  getMyStats: protectedProcedure.query(async ({ ctx }) => {
    const stats = await getUserStats(ctx.user.id);
    return stats;
  }),

  // Create a new team
  createTeam: protectedProcedure
    .input(
      z.object({
        matchId: z.number(),
        teamName: z.string(),
        playerIds: z.array(z.number()).min(11).max(11),
        captainId: z.number(),
        viceCaptainId: z.number(),
        creditsUsed: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Create the team
      const teamId = await createUserTeam({
        userId: ctx.user.id,
        matchId: input.matchId,
        teamName: input.teamName,
        creditsUsed: input.creditsUsed,
      });

      // Add players to the team
      for (const playerId of input.playerIds) {
        await addPlayerToTeam({
          teamId,
          playerId,
          isCaptain: playerId === input.captainId ? 1 : 0,
          isViceCaptain: playerId === input.viceCaptainId ? 1 : 0,
        });
      }

      // Update user stats
      const currentStats = await getUserStats(ctx.user.id);
      await createOrUpdateUserStats(ctx.user.id, {
        teamsCreated: (currentStats?.teamsCreated || 0) + 1,
        contestsJoined: (currentStats?.contestsJoined || 0) + 1,
      });

      return { success: true, teamId };
    }),
});
