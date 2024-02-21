import { EneroEventosSchema } from "@/lib/models";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { TRPCError } from "@trpc/server";
import z from 'zod'

export const eneroRouter = router({
  create: publicProcedure
    .input(
      EneroEventosSchema.omit({
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
    readAll: publicProcedure
  .input(
    z
      .object({
        mes: z.string().optional(),
      }).optional()
  ).query(async (opts) => {
    try {
      if (opts.input?.mes !== '') {
        const eneroeventos = await prisma.eneroeventos.findMany({
          where: {
            mes: opts.input?.mes
          }
        });
        return eneroeventos;
        
      } else {
        const eneroeventos = await prisma.eneroeventos.findMany();
        return eneroeventos;
      }      
    } catch (error) {
      console.log("🚀 ~ readAll:publicProcedure.query ~ error:", error)
      new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Internal Server Error",
      });
    }
  }),
  update: publicProcedure.input(EneroEventosSchema).mutation(async (opts) => {
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
  delete: publicProcedure.input(EneroEventosSchema).mutation(async (opts) => {
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
