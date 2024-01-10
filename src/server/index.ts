import { marzoRouter } from "./routers/marzo";
import { publicProcedure, router } from "./trpc";
import { createHTTPServer } from '@trpc/server/adapters/standalone';


export const appRouter = router({
  greeting: publicProcedure.query(() => "Hello from tRPC"),
  marzo: marzoRouter,
});


 
server.listen(3000);

export type AppRouter = typeof appRouter;
