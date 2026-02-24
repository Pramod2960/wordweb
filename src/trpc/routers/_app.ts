import { wordsRouter } from '@/featurers/home/server/route';
import { createTRPCRouter } from '../init';

export const appRouter = createTRPCRouter({
  words: wordsRouter,
});

export type AppRouter = typeof appRouter;
