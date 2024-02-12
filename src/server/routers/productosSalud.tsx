import { ProductosSaludSchema } from "@/lib/models";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const productosSaludRouter = router({
  create: publicProcedure
    .input(
      ProductosSaludSchema.omit({
        id: true,
      })
    )
    .mutation(async (opts) => {
      try {
        return await prisma.productossalud.create({
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
    .object({empresa: z.string().optional()}).optional()
  ).query(async (opts) => {
    try {

      if (opts.input?.empresa != '') {
        const productossalud = await prisma.productossalud.findMany({where:{empresa: opts.input?.empresa}});
        return productossalud;
        
      } else {
        const productossalud = await prisma.productossalud.findMany()
        return productossalud;
      }      
    } catch (error) {
      console.log("🚀 ~ readAll:publicProcedure.query ~ error:", error)
      new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Internal Server Error",
      });
    }
  }),
  update: publicProcedure.input(ProductosSaludSchema).mutation(async (opts) => {
    try {
      return await prisma.productossalud.update({
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
  delete: publicProcedure.input(ProductosSaludSchema).mutation(async (opts) => {
    try {
      return await prisma.productossalud.delete({
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