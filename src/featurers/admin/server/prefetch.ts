import { prefetch, trpc } from "@/trpc/server";

export const prefetchAdminWords = (params: {
  page?: number;
  pageSize?: number;
  search?: string;
}) => {
  return prefetch(trpc.adminWords.getMany.queryOptions(params));
};

export const prefetchAdminWord = (id: string) => {
  return prefetch(trpc.adminWords.getOne.queryOptions({ id }));
};

export const prefetchAdminByAlphabet = (alphabet: string) => {
  return prefetch(trpc.adminWords.byAlphabet.queryOptions({ alphabet }));
};
