import type { Request, Response } from "express";
import { jwtVerify } from "jose";
import { COOKIE_NAME } from "@shared/const";
import { getUserById } from "./db";
import type { User } from "../drizzle/schema";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "fallback-secret-key");

export async function createCustomContext({ req, res }: { req: Request; res: Response }) {
  let user: User | undefined = undefined;

  try {
    const token = req.cookies?.[COOKIE_NAME];
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
    // Invalid token, user remains undefined
    console.warn("[Auth] Invalid token:", error);
  }

  return {
    req,
    res,
    user,
  };
}

export type CustomContext = Awaited<ReturnType<typeof createCustomContext>>;
