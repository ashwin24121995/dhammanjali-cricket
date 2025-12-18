import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import { createUser, getUserByEmail, updateLastSignIn, updateUserPassword, createPasswordResetToken, getPasswordResetToken, markTokenAsUsed } from "./db";
import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "fallback-secret-key");

const RESTRICTED_STATES = [
  "Andhra Pradesh",
  "Assam",
  "Nagaland",
  "Odisha",
  "Sikkim",
  "Telangana"
];

function calculateAge(dateOfBirth: Date): number {
  const today = new Date();
  let age = today.getFullYear() - dateOfBirth.getFullYear();
  const monthDiff = today.getMonth() - dateOfBirth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
    age--;
  }
  return age;
}

async function createSessionToken(userId: number): Promise<string> {
  return await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(JWT_SECRET);
}

export const authRouter = router({
  register: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
        name: z.string().min(2),
        dateOfBirth: z.string(),
        state: z.string(),
        phone: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Check if user already exists
      const existingUser = await getUserByEmail(input.email);
      if (existingUser) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Email already registered",
        });
      }

      // Validate age (18+)
      const dob = new Date(input.dateOfBirth);
      const age = calculateAge(dob);
      if (age < 18) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You must be 18 years or older to register",
        });
      }

      // Check restricted states
      if (RESTRICTED_STATES.includes(input.state)) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: `Registration is not available in ${input.state} due to government compliance`,
        });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(input.password, 10);

      // Create user
      await createUser({
        email: input.email,
        password: hashedPassword,
        name: input.name,
        dateOfBirth: dob,
        state: input.state,
        phone: input.phone || null,
      });

      return { success: true, message: "Registration successful! Please login." };
    }),

  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Find user
      const user = await getUserByEmail(input.email);
      if (!user) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password",
        });
      }

      // Verify password
      const isValidPassword = await bcrypt.compare(input.password, user.password);
      if (!isValidPassword) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password",
        });
      }

      // Update last sign in
      await updateLastSignIn(user.id);

      // Create session token
      const token = await createSessionToken(user.id);

      // Set cookie
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.cookie(COOKIE_NAME, token, {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      };
    }),

  logout: publicProcedure.mutation(({ ctx }) => {
    const cookieOptions = getSessionCookieOptions(ctx.req);
    ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
    return { success: true };
  }),

  me: publicProcedure.query(({ ctx }) => {
    return ctx.user || null;
  }),

  forgotPassword: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      })
    )
    .mutation(async ({ input }) => {
      const user = await getUserByEmail(input.email);
      if (!user) {
        // Don't reveal if email exists - security best practice
        return { success: true, message: "If the email exists, a reset link has been sent" };
      }

      // Generate secure random token
      const token = crypto.randomUUID();
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now

      // Store token in database
      await createPasswordResetToken({
        userId: user.id,
        token,
        expiresAt,
      });

      // TODO: In production, send email with reset link
      // For now, log the token (in production, this would be sent via email)
      console.log(`Password reset token for ${input.email}: ${token}`);
      console.log(`Reset link: http://localhost:3000/reset-password?token=${token}`);

      return { success: true, message: "If the email exists, a reset link has been sent" };
    }),

  resetPassword: publicProcedure
    .input(
      z.object({
        token: z.string(),
        newPassword: z.string().min(8),
      })
    )
    .mutation(async ({ input }) => {
      // Verify token
      const resetToken = await getPasswordResetToken(input.token);
      if (!resetToken) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid or expired reset token",
        });
      }

      // Check if token is expired
      if (new Date() > resetToken.expiresAt) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Reset token has expired. Please request a new one.",
        });
      }

      // Check if token was already used
      if (resetToken.used) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "This reset token has already been used",
        });
      }

      // Get user
      const user = await getUserByEmail(resetToken.userId.toString());
      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      // Hash new password
      const hashedPassword = await bcrypt.hash(input.newPassword, 10);
      await updateUserPassword(user.email, hashedPassword);

      // Mark token as used
      await markTokenAsUsed(input.token);

      return { success: true, message: "Password reset successful! You can now login with your new password." };
    }),
});
