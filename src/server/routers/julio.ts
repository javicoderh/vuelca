import { JulioEventosSchema } from "@/lib/models";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { TRPCError } from "@trpc/server";
import z from 'zod'

export const julioRouter = router({
  create: publicProcedure
    .input(
      JulioEventosSchema.omit({
        id: true,
      })
    )
    .mutation(async (opts) => {
      try {
        return await prisma.julioeventos.create({
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
          const julioeventos = await prisma.julioeventos.findMany({
            where: {
              mes: opts.input?.mes
            }
          });
          return julioeventos;
          
        } else {
          const julioeventos = await prisma.julioeventos.findMany();
          return julioeventos;
        }      
      } catch (error) {
        console.log("🚀 ~ readAll:publicProcedure.query ~ error:", error)
        new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Internal Server Error",
        });
      }
    }),
  update: publicProcedure.input(JulioEventosSchema).mutation(async (opts) => {
    try {
      return await prisma.julioeventos.update({
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
  delete: publicProcedure.input(JulioEventosSchema).mutation(async (opts) => {
    try {
      return await prisma.julioeventos.delete({
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