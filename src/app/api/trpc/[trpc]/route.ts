import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/server";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({
      session: {
        user: {
          email: "",
        },
        expires: "",
      },
    }),
  });

export { handler as GET, handler as POST };
