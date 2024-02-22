import { OctubreEventosSchema } from "@/lib/models";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { TRPCError } from "@trpc/server";
import z from 'zod'

export const octubreRouter = router({
  create: publicProcedure
    .input(
      OctubreEventosSchema.omit({
        id: true,
      })
    )
    .mutation(async (opts) => {
      try {
        return await prisma.octubreeventos.create({
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
          const octubreeventos = await prisma.octubreeventos.findMany({
            where: {
              mes: opts.input?.mes
            }
          });
          return octubreeventos;
          
        } else {
          const octubreeventos = await prisma.octubreeventos.findMany();
          return octubreeventos;
        }      
      } catch (error) {
        console.log("🚀 ~ readAll:publicProcedure.query ~ error:", error)
        new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Internal Server Error",
        });
      }
    }),
  update: publicProcedure.input(OctubreEventosSchema).mutation(async (opts) => {
    try {
      return await prisma.octubreeventos.update({
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
  delete: publicProcedure.input(OctubreEventosSchema).mutation(async (opts) => {
    try {
      return await prisma.octubreeventos.delete({
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