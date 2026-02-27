import { useTRPC } from "@/trpc/client";
import {
  useQueryClient,
  useSuspenseQuery,
  useQuery,
} from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

// Admin Words Hooks
export const useSuspenseAdminWords = () => {
  const trpc = useTRPC();
  return useSuspenseQuery(trpc.adminWords.getMany.queryOptions({}));
};

export const useAdminWords = () => {
  const trpc = useTRPC();
  return useQuery(trpc.adminWords.getMany.queryOptions({}));
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
