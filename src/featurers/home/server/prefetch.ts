import { prefetch, trpc } from "@/trpc/server";

export const prefetchWord = (id: string) => {
  return prefetch(trpc.words.getOne.queryOptions({id}));
};

export const prefetchWords = () => {
  return prefetch(trpc.words.getMany.queryOptions());
};

export const prefetchByAlphabet = (alphabet: string) => {
  return prefetch(trpc.words.byAlphabet.queryOptions({ alphabet }));
};