import { EmpresasSaludSchema, FebreroEventosSchema } from "@/lib/models";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const empresasSaludRouter = router({
  create: publicProcedure
    .input(
      EmpresasSaludSchema.omit({
        id: true,
      })
    )
    .mutation(async (opts) => {
      try {
        return await prisma.saludempresas.create({
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
    .object({categoria: z.string().optional()}).optional()
  ).query(async (opts) => {
    try {

      if (opts.input?.categoria != '') {
        const empresassalud = await prisma.saludempresas.findMany({where:{categoria: opts.input?.categoria}});
        return empresassalud;
        
      } else {
        const empresassalud = await prisma.saludempresas.findMany()
        return empresassalud;
      }      
    } catch (error) {
      console.log("🚀 ~ readAll:publicProcedure.query ~ error:", error)
      new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Internal Server Error",
      });
    }
  }),
  update: publicProcedure.input(EmpresasSaludSchema).mutation(async (opts) => {
    try {
      return await prisma.saludempresas.update({
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
  delete: publicProcedure.input(EmpresasSaludSchema).mutation(async (opts) => {
    try {
      return await prisma.saludempresas.delete({
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