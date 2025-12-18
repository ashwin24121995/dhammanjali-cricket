import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, User, users, 
  passwordResetTokens, InsertPasswordResetToken, PasswordResetToken,
  matches, Match, InsertMatch,
  players, Player, InsertPlayer,
  userTeams, UserTeam, InsertUserTeam,
  teamPlayers, TeamPlayer, InsertTeamPlayer,
  userStats, UserStats, InsertUserStats
} from "../drizzle/schema";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function createUser(user: InsertUser): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create user: database not available");
    return;
  }

  try {
    await db.insert(users).values(user);
  } catch (error) {
    console.error("[Database] Failed to create user:", error);
    throw error;
  }
}

export async function getUserByEmail(email: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function updateUserPassword(email: string, newPassword: string): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update password: database not available");
    return;
  }

  try {
    await db.update(users).set({ password: newPassword }).where(eq(users.email, email));
  } catch (error) {
    console.error("[Database] Failed to update password:", error);
    throw error;
  }
}

export async function updateLastSignIn(id: number): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update last sign in: database not available");
    return;
  }

  try {
    await db.update(users).set({ lastSignedIn: new Date() }).where(eq(users.id, id));
  } catch (error) {
    console.error("[Database] Failed to update last sign in:", error);
    throw error;
  }
}

// Stub functions for Manus OAuth compatibility (not used in custom auth)
export async function getUserByOpenId(openId: string): Promise<(User & { openId?: string }) | undefined> {
  console.warn("[Database] getUserByOpenId called but Manus OAuth is disabled");
  return undefined;
}

export async function upsertUser(user: Partial<InsertUser> & { openId?: string; name?: string | null; email?: string | null; loginMethod?: string | null; lastSignedIn?: Date }): Promise<void> {
  console.warn("[Database] upsertUser called but Manus OAuth is disabled");
  return;
}

// Password reset token functions
export async function createPasswordResetToken(token: { userId: number; token: string; expiresAt: Date }): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create password reset token: database not available");
    return;
  }

  try {
    await db.insert(passwordResetTokens).values(token);
  } catch (error) {
    console.error("[Database] Failed to create password reset token:", error);
    throw error;
  }
}

export async function getPasswordResetToken(token: string): Promise<PasswordResetToken | undefined> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get password reset token: database not available");
    return undefined;
  }

  const result = await db.select().from(passwordResetTokens).where(eq(passwordResetTokens.token, token)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function markTokenAsUsed(token: string): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot mark token as used: database not available");
    return;
  }

  try {
    await db.update(passwordResetTokens).set({ used: 1 }).where(eq(passwordResetTokens.token, token));
  } catch (error) {
    console.error("[Database] Failed to mark token as used:", error);
    throw error;
  }
}

// Fantasy Cricket Functions

// Matches
export async function getAllMatches(): Promise<Match[]> {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(matches).where(eq(matches.status, "upcoming"));
}

export async function getMatchById(id: number): Promise<Match | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(matches).where(eq(matches.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createMatch(match: InsertMatch): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.insert(matches).values(match);
}

// Players
export async function getAllPlayers(): Promise<Player[]> {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(players);
}

export async function getPlayersByTeam(team: string): Promise<Player[]> {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(players).where(eq(players.team, team));
}

export async function createPlayer(player: InsertPlayer): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.insert(players).values(player);
}

// User Teams
export async function createUserTeam(team: InsertUserTeam): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(userTeams).values(team);
  return result[0].insertId;
}

export async function getUserTeamsByUserId(userId: number): Promise<UserTeam[]> {
  const db = await getDb();
  if (!db) return [];
  return await db.select().from(userTeams).where(eq(userTeams.userId, userId));
}

// Team Players
export async function addPlayerToTeam(teamPlayer: InsertTeamPlayer): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.insert(teamPlayers).values(teamPlayer);
}

// User Stats
export async function getLeaderboard(limit: number = 10): Promise<(UserStats & { username: string })[]> {
  const db = await getDb();
  if (!db) return [];
  
  const result = await db
    .select({
      id: userStats.id,
      userId: userStats.userId,
      totalPoints: userStats.totalPoints,
      teamsCreated: userStats.teamsCreated,
      contestsWon: userStats.contestsWon,
      contestsJoined: userStats.contestsJoined,
      bestRank: userStats.bestRank,
      updatedAt: userStats.updatedAt,
      username: users.name,
    })
    .from(userStats)
    .leftJoin(users, eq(userStats.userId, users.id))
    .orderBy(desc(userStats.totalPoints))
    .limit(limit);

  return result.map(row => ({
    ...row,
    username: row.username || "Unknown",
  }));
}

export async function getUserStats(userId: number): Promise<UserStats | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(userStats).where(eq(userStats.userId, userId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createOrUpdateUserStats(userId: number, stats: Partial<InsertUserStats>): Promise<void> {
  const db = await getDb();
  if (!db) return;
  
  const existing = await getUserStats(userId);
  if (existing) {
    await db.update(userStats).set(stats).where(eq(userStats.userId, userId));
  } else {
    await db.insert(userStats).values({ userId, ...stats });
  }
}
