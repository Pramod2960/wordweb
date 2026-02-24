import prisma from "@/lib/db";
import { createTRPCRouter, publicProcedure } from "@/trpc/init";
import z from "zod";

export const wordsRouter = createTRPCRouter({
  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      const numberId = Number(input.id);
      return prisma.words.findFirst({
        where: {
          id: numberId,
        },
      });
    }),

  byAlphabet: publicProcedure
    .input(z.object({ alphabet: z.string() }))
    .query(({ input }) => {
      return prisma.words.findMany({
        where: {
          title: {
            startsWith: input.alphabet,
            mode: "insensitive",
          },
        },
        orderBy: { title: "asc" },
      });
    }),

  search: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(({ ctx, input }) => {
      return prisma.words.findMany({
        where: {
          OR: [
            {
              title: {
                startsWith: input.query,
                mode: "insensitive",
              },
            },
            {
              sanskrit: {
                startsWith: input.query,
                mode: "insensitive",
              },
            },
          ],
        },
        orderBy: {
          title: "asc",
        },
        take: 10,
      });
    }),

  getMany: publicProcedure.query(({ ctx }) => {
    return prisma.words.findMany({});
  }),

  suggestSanskrit: publicProcedure
    .input(
      z.object({
        wordId: z.number(),
        suggestion: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return prisma.words.update({
        where: { id: input.wordId },
        data: {
          suggestion: {
            push: input.suggestion,
          },
        },
      });
    }),
});
