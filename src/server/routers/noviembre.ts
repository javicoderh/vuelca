import { NoviembreEventosSchema } from "@/lib/models";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { TRPCError } from "@trpc/server";
import z from 'zod'

export const noviembreRouter = router({
  create: publicProcedure
    .input(
      NoviembreEventosSchema.omit({
        id: true,
      })
    )
    .mutation(async (opts) => {
      try {
        return await prisma.noviembreeventos.create({
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
          const noviembreeventos = await prisma.noviembreeventos.findMany({
            where: {
              mes: opts.input?.mes
            }
          });
          return noviembreeventos;
          
        } else {
          const noviembreeventos = await prisma.noviembreeventos.findMany();
          return noviembreeventos;
        }      
      } catch (error) {
        console.log("🚀 ~ readAll:publicProcedure.query ~ error:", error)
        new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Internal Server Error",
        });
      }
    }),
  update: publicProcedure.input(NoviembreEventosSchema).mutation(async (opts) => {
    try {
      return await prisma.noviembreeventos.update({
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
  delete: publicProcedure.input(NoviembreEventosSchema).mutation(async (opts) => {
    try {
      return await prisma.noviembreeventos.delete({
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