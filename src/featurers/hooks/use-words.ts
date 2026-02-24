import { useTRPC } from "@/trpc/client";
import {
  useQueryClient,
  useSuspenseQuery,
  useQuery,
} from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

export const useSuspenseWord = (id: string) => {
  const trpc = useTRPC();
  return useSuspenseQuery(trpc.words.getOne.queryOptions({ id }));
};

export const useSearchWords = (query: string) => {
  const trpc = useTRPC();
  return useQuery(trpc.words.search.queryOptions({ query }));
};

export const useSuspenseWords = () => {
  const trpc = useTRPC();
  return useSuspenseQuery(trpc.words.getMany.queryOptions());
};

export const useSuspenseAlphabet = (alphabet: string) => {
  const trpc = useTRPC();
  return useSuspenseQuery(trpc.words.byAlphabet.queryOptions({ alphabet }));
};

export const useSuggestSanskrit = () => {
  const trpc = useTRPC();

  return useMutation(
    trpc.words.suggestSanskrit.mutationOptions()
  );
};
