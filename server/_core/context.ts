import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";
import { jwtVerify } from "jose";
import { COOKIE_NAME } from "@shared/const";
import { getUserById } from "../db";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "fallback-secret-key");

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  let user: User | null = null;

  try {
    const token = opts.req.cookies?.[COOKIE_NAME];
    if (token) {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      if (payload.userId && typeof payload.userId === "number") {
        const foundUser = await getUserById(payload.userId);
        if (foundUser) {
          user = foundUser;
        }
      }
    }
  } catch (error) {
    // Authentication is optional for public procedures.
    user = null;
  }

  return {
    req: opts.req,
    res: opts.res,
    user,
  };
}
