import { HydrateClient } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";
import React, { Suspense } from "react";
import { prefetchWords } from "@/featurers/home/server/prefetch";
import AllWords from "@/featurers/home/component/all-words";

export default async function Page() {
  prefetchWords();

  return (
    <div>
      <HydrateClient>
        <ErrorBoundary fallback={<p>Error!</p>}>
          <Suspense fallback={"Loading"}>
            <AllWords />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </div>
  );
}
