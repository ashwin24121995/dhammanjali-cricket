import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import { createUser, getUserByEmail, updateLastSignIn, updateUserPassword } from "./db";
import { 
  hashPassword, 
  comparePassword, 
  generateToken, 
  verifyToken, 
  extractTokenFromHeader 
} from "./jwtAuth";

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

export const authRouter = router({
  /**
   * Register new user with email/password
   * Returns JWT token on success
   */
  register: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
        name: z.string().min(2),
        dateOfBirth: z.string(),
        state: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      console.log("[REGISTER] Starting registration for:", input.email);

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
      const hashedPassword = await hashPassword(input.password);

      // Create user
      await createUser({
        email: input.email,
        password: hashedPassword,
        name: input.name,
        dateOfBirth: dob,
        state: input.state,
        isVerified: 1, // Auto-verify for now (can add OTP later)
      });

      // Get created user
      const user = await getUserByEmail(input.email);
      if (!user) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create user",
        });
      }

      // Generate JWT token
      const token = generateToken({
        userId: user.id,
        email: user.email,
        role: user.role,
      });

      console.log("[REGISTER] Registration successful for:", input.email);

      return {
        success: true,
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      };
    }),

  /**
   * Login with email/password
   * Returns JWT token on success
   */
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      console.log("[LOGIN] Login attempt for:", input.email);

      // Get user by email
      const user = await getUserByEmail(input.email);
      if (!user) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password",
        });
      }

      // Verify password
      const isValidPassword = await comparePassword(input.password, user.password);
      if (!isValidPassword) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Invalid email or password",
        });
      }

      // Update last signed in
      await updateLastSignIn(user.id);

      // Generate JWT token
      const token = generateToken({
        userId: user.id,
        email: user.email,
        role: user.role,
      });

      console.log("[LOGIN] Login successful for:", input.email);

      return {
        success: true,
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      };
    }),

  /**
   * Get current user from JWT token
   * Token should be in Authorization header: "Bearer <token>"
   */
  me: publicProcedure.query(async ({ ctx }) => {
    // Extract token from Authorization header
    const authHeader = ctx.req.headers.authorization;
    const token = extractTokenFromHeader(authHeader);

    if (!token) {
      return { user: null };
    }

    // Verify token
    const payload = verifyToken(token);
    if (!payload) {
      return { user: null };
    }

    // Get user from database
    const user = await getUserByEmail(payload.email);
    if (!user) {
      return { user: null };
    }

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        state: user.state,
        phone: user.phone,
        dateOfBirth: user.dateOfBirth,
        isVerified: user.isVerified,
      },
    };
  }),

  /**
   * Logout (client-side only - just clear localStorage)
   * This endpoint exists for consistency but doesn't do anything server-side
   */
  logout: publicProcedure.mutation(async () => {
    return { success: true };
  }),

  /**
   * Validate email exists (for forgot password flow)
   */
  validateEmail: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      const user = await getUserByEmail(input.email);
      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No account found with this email address",
        });
      }
      return { success: true, email: input.email };
    }),

  /**
   * Reset password (simplified - no OTP for now)
   */
  resetPassword: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        newPassword: z.string().min(8),
      })
    )
    .mutation(async ({ input }) => {
      const user = await getUserByEmail(input.email);
      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No account found with this email address",
        });
      }

      // Hash new password
      const hashedPassword = await hashPassword(input.newPassword);

      // Update password
      await updateUserPassword(user.id, hashedPassword);

      console.log("[PASSWORD RESET] Password reset successful for:", input.email);

      return { success: true };
    }),
});
