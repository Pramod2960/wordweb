"use client";

import { useTRPC } from "@/trpc/client";
import {
  useQueryClient,
  useSuspenseQuery,
  useQuery,
} from "@tanstack/react-query";
import { useAdminWordsParams } from "./use-admin-words-params";

// Admin Words Hooks with Pagination
export const useSuspenseAdminWords = () => {
  const trpc = useTRPC();
  const [params] = useAdminWordsParams();

  return useSuspenseQuery(trpc.adminWords.getMany.queryOptions(params));
};

export const useAdminWords = () => {
  const trpc = useTRPC();
  const [params] = useAdminWordsParams();

  return useQuery(trpc.adminWords.getMany.queryOptions(params));
};

export const useSuspenseAdminWord = (id: string) => {
  const trpc = useTRPC();
  return useSuspenseQuery(trpc.adminWords.getOne.queryOptions({ id }));
};

export const useAdminWord = (id: string) => {
  const trpc = useTRPC();
  return useQuery(trpc.adminWords.getOne.queryOptions({ id }));
};

export const useSearchAdminWords = (query: string) => {
  const trpc = useTRPC();
  return useQuery(trpc.adminWords.search.queryOptions({ query }));
};

export const useSuspenseAdminAlphabet = (alphabet: string) => {
  const trpc = useTRPC();
  return useSuspenseQuery(trpc.adminWords.byAlphabet.queryOptions({ alphabet }));
};
