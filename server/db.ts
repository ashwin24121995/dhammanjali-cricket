import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, User, users, passwordResetTokens, InsertPasswordResetToken, PasswordResetToken } from "../drizzle/schema";

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
