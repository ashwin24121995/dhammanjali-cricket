import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  name: text("name").notNull(),
  dateOfBirth: timestamp("dateOfBirth").notNull(),
  state: varchar("state", { length: 100 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  isVerified: int("isVerified").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn"),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Contact form submissions table
 */
export const contactSubmissions = mysqlTable("contact_submissions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  subject: varchar("subject", { length: 500 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;

/**
 * Password reset tokens table
 */
export const passwordResetTokens = mysqlTable("password_reset_tokens", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  token: varchar("token", { length: 255 }).notNull().unique(),
  expiresAt: timestamp("expiresAt").notNull(),
  used: int("used").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type PasswordResetToken = typeof passwordResetTokens.$inferSelect;
export type InsertPasswordResetToken = typeof passwordResetTokens.$inferInsert;

/**
 * Cricket matches table
 */
export const matches = mysqlTable("matches", {
  id: int("id").autoincrement().primaryKey(),
  team1: varchar("team1", { length: 100 }).notNull(),
  team2: varchar("team2", { length: 100 }).notNull(),
  venue: varchar("venue", { length: 255 }).notNull(),
  matchDate: timestamp("matchDate").notNull(),
  matchTime: varchar("matchTime", { length: 50 }).notNull(),
  matchType: varchar("matchType", { length: 50 }).notNull(), // IPL, T20, ODI, Test
  status: mysqlEnum("status", ["upcoming", "live", "completed"]).default("upcoming").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Match = typeof matches.$inferSelect;
export type InsertMatch = typeof matches.$inferInsert;

/**
 * Cricket players table
 */
export const players = mysqlTable("players", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  team: varchar("team", { length: 100 }).notNull(),
  role: mysqlEnum("role", ["batsman", "bowler", "all-rounder", "wicket-keeper"]).notNull(),
  credits: int("credits").notNull(), // 7-12 credits
  points: int("points").default(0).notNull(),
  matchesPlayed: int("matchesPlayed").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Player = typeof players.$inferSelect;
export type InsertPlayer = typeof players.$inferInsert;

/**
 * User teams table
 */
export const userTeams = mysqlTable("user_teams", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  matchId: int("matchId").notNull(),
  teamName: varchar("teamName", { length: 255 }).notNull(),
  totalCredits: int("totalCredits").default(100).notNull(),
  creditsUsed: int("creditsUsed").notNull(),
  points: int("points").default(0).notNull(),
  rank: int("rank"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type UserTeam = typeof userTeams.$inferSelect;
export type InsertUserTeam = typeof userTeams.$inferInsert;

/**
 * Team players junction table
 */
export const teamPlayers = mysqlTable("team_players", {
  id: int("id").autoincrement().primaryKey(),
  teamId: int("teamId").notNull(),
  playerId: int("playerId").notNull(),
  isCaptain: int("isCaptain").default(0).notNull(),
  isViceCaptain: int("isViceCaptain").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type TeamPlayer = typeof teamPlayers.$inferSelect;
export type InsertTeamPlayer = typeof teamPlayers.$inferInsert;

/**
 * User statistics for leaderboard
 */
export const userStats = mysqlTable("user_stats", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().unique(),
  totalPoints: int("totalPoints").default(0).notNull(),
  teamsCreated: int("teamsCreated").default(0).notNull(),
  contestsWon: int("contestsWon").default(0).notNull(),
  contestsJoined: int("contestsJoined").default(0).notNull(),
  bestRank: int("bestRank"),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type UserStats = typeof userStats.$inferSelect;
export type InsertUserStats = typeof userStats.$inferInsert;