import { MarzoEventosSchema } from "@/lib/models";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { TRPCError } from "@trpc/server";

export const eneroRouter = router({
  create: publicProcedure
    .input(
      MarzoEventosSchema.omit({
        id: true,
      })
    )
    .mutation(async (opts) => {
      try {
        return await prisma.eneroeventos.create({
          data: opts.input,
        });
      } catch (error) {
        new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Internal Server Error",
        });
      }
    }),
  readAll: publicProcedure.query(async () => {
    try {
      const enero = await prisma.eneroeventos.findMany();
      console.log("🚀 ~ readAll:publicProcedure.query ~ marzo:", enero)
      return enero;
    } catch (error) {
      console.log("🚀 ~ readAll:publicProcedure.query ~ error:", error)
      new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Internal Server Error",
      });
    }
  }),
  update: publicProcedure.input(MarzoEventosSchema).mutation(async (opts) => {
    try {
      return await prisma.eneroeventos.update({
        where: {
          id: opts.input.id,
        },
        data: opts.input,
      });
    } catch (error) {
      new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Internal Server Error",
      });
    }
  }),
  delete: publicProcedure.input(MarzoEventosSchema).mutation(async (opts) => {
    try {
      return await prisma.eneroeventos.delete({
        where: {
          id: opts.input.id,
        },
      });
    } catch (error) {
      new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Internal Server Error",
      });
    }
  }),
});
