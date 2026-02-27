import { wordsRouter } from '@/featurers/home/server/route';
import { adminWordsRouter } from '@/featurers/admin/server/route';
import { createTRPCRouter } from '../init';

export const appRouter = createTRPCRouter({
  words: wordsRouter,
  adminWords: adminWordsRouter,
});

export type AppRouter = typeof appRouter;
