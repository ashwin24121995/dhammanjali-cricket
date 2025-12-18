import { systemRouter } from "./_core/systemRouter";
import { router } from "./_core/trpc";
import { authRouter } from "./authRouter";
import { contactRouter } from "./contactRouter";
import { fantasyRouter } from "./fantasyRouter";

export const appRouter = router({
  system: systemRouter,
  auth: authRouter,
  contact: contactRouter,
  fantasy: fantasyRouter,
});

export type AppRouter = typeof appRouter;
