import { AgostoEventosSchema } from "@/lib/models";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { TRPCError } from "@trpc/server";
import z from 'zod'

export const agostoRouter = router({
  create: publicProcedure
    .input(
      AgostoEventosSchema.omit({
        id: true,
      })
    )
    .mutation(async (opts) => {
      try {
        return await prisma.agostoeventos.create({
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
          const agostoeventos = await prisma.agostoeventos.findMany({
            where: {
              mes: opts.input?.mes
            }
          });
          return agostoeventos;
          
        } else {
          const agostoeventos = await prisma.agostoeventos.findMany();
          return agostoeventos;
        }      
      } catch (error) {
        console.log("🚀 ~ readAll:publicProcedure.query ~ error:", error)
        new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Internal Server Error",
        });
      }
    }),
  update: publicProcedure.input(AgostoEventosSchema).mutation(async (opts) => {
    try {
      return await prisma.agostoeventos.update({
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
  delete: publicProcedure.input(AgostoEventosSchema).mutation(async (opts) => {
    try {
      return await prisma.agostoeventos.delete({
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