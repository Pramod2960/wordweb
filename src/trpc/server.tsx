import 'server-only';

import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import { cache } from 'react';
import {
  HydrationBoundary,
  dehydrate,
  type QueryClient,
} from '@tanstack/react-query';

import { createTRPCContext } from './init';
import { makeQueryClient } from './query-client';
import { appRouter } from './routers/_app';

const queryClientCache = cache(makeQueryClient);

export function getQueryClient() {
  return queryClientCache();
}

export const trpc = createTRPCOptionsProxy({
  ctx: createTRPCContext,
  router: appRouter,
  queryClient: getQueryClient,
});

export async function getCaller() {
  return appRouter.createCaller(await createTRPCContext());
}

export function HydrateClient(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {props.children}
    </HydrationBoundary>
  );
}

export function prefetch<T extends any>(...args: any[]) {
  const queryClient = getQueryClient();
  const queryOptions = args[0];
  if (queryOptions.queryKey?.[1]?.type === 'infinite') {
    void queryClient.prefetchInfiniteQuery(queryOptions as any);
  } else {
    void queryClient.prefetchQuery(queryOptions);
  }
}
