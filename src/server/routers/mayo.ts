import { MayoEventosSchema } from "@/lib/models";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { TRPCError } from "@trpc/server";
import z from 'zod'

export const mayoRouter = router({
  create: publicProcedure
    .input(
      MayoEventosSchema.omit({
        id: true,
      })
    )
    .mutation(async (opts) => {
      try {
        return await prisma.mayoeventos.create({
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
          const mayoeventos = await prisma.mayoeventos.findMany({
            where: {
              mes: opts.input?.mes
            }
          });
          return mayoeventos
          
        } else {
          const mayoeventos = await prisma.mayoeventos.findMany();
          return mayoeventos;
        }      
      } catch (error) {
        console.log("🚀 ~ readAll:publicProcedure.query ~ error:", error)
        new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Internal Server Error",
        });
      }
    }),
  update: publicProcedure.input(MayoEventosSchema).mutation(async (opts) => {
    try {
      return await prisma.mayoeventos.update({
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
  delete: publicProcedure.input(MayoEventosSchema).mutation(async (opts) => {
    try {
      return await prisma.mayoeventos.delete({
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