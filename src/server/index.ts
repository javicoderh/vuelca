import { marzoRouter } from "./routers/marzo";
import { publicProcedure, router } from "./trpc";


export const appRouter = router({
  greeting: publicProcedure.query(() => "Hello from tRPC"),
  marzo: marzoRouter,
});

export type AppRouter = typeof appRouter;
