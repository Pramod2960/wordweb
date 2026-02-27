import prisma from "@/lib/db";
import { createTRPCRouter, publicProcedure } from "@/trpc/init";
import z from "zod";
import { PAGINATION } from "@/config/constants";

export const adminWordsRouter = createTRPCRouter({
  getMany: publicProcedure
    .input(
      z.object({
        page: z.number().default(PAGINATION.DEFAULT_PAGE),
        pageSize: z
          .number()
          .min(PAGINATION.MIN_PAGE_SIZE)
          .max(PAGINATION.MAX_PAGE_SIZE)
          .default(PAGINATION.DEFAULT_PAGE_SIZE),
        search: z.string().default(""),
      })
    )
    .query(async ({ ctx, input }) => {
      const { page, pageSize, search } = input;

      const [items, totalCount] = await Promise.all([
        prisma.words.findMany({
          skip: (page - 1) * pageSize,
          take: pageSize,
          where: search
            ? {
                OR: [
                  {
                    title: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                  {
                    sanskrit: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                  {
                    gloss: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                ],
              }
            : {},
          orderBy: { title: "asc" },
        }),
        prisma.words.count({
          where: search
            ? {
                OR: [
                  {
                    title: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                  {
                    sanskrit: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                  {
                    gloss: {
                      contains: search,
                      mode: "insensitive",
                    },
                  },
                ],
              }
            : {},
        }),
      ]);

      const totalPages = Math.ceil(totalCount / pageSize);
      const hasNextPage = page < totalPages;
      const hasPreviousPage = page > 1;

      return {
        items,
        page,
        pageSize,
        totalCount,
        totalPages,
        hasNextPage,
        hasPreviousPage,
      };
    }),

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
});
