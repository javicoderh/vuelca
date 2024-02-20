import { UserSchema } from "@/lib/models";
import { publicProcedure, router } from "../trpc";
import { prisma } from "@/lib/prisma";
import { TRPCError } from "@trpc/server";
import { error } from "console";
import { z } from "zod";
import bcrypt  from "bcrypt"


export const userRouter = router({
  create: publicProcedure
    .input(
      UserSchema.omit({
        id: true,
      })
    )
    .mutation(async (opts) => {
      try {
        return await prisma.user.create({
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
      return await prisma.user.findMany();
    } catch (error) {
      new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Internal Server Error",
      });
    }
  }),
  update: publicProcedure.input(UserSchema).mutation(async (opts) => {
    try {
      return await prisma.user.update({
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
  delete: publicProcedure.input(UserSchema).mutation(async (opts) => {
    try {
      return await prisma.user.delete({
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
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string(),
      }),
    )
    .query(async (opts) => {
      try {
        const user = await prisma.user.findUnique({
          where: {
            email: opts.input.email,
          },
          include: {
            userRole: true,
          },
        });

        if (!user) {
          new Error("NOT_FOUND");
        }

        if (
          user &&
          (await bcrypt.compare(opts.input.password, user.password ?? ""))
        ) {
          return user;
        } else {
          new Error("UNAUTHORIZED");
        }
      } catch (error) {
        new Error('error');
      }
    }),
});
