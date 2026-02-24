
import { HydrateClient } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { prefetchByAlphabet } from "@/featurers/home/server/prefetch";
import { Spinner } from "@/components/ui/spinner";
import AlphabetWord from "@/featurers/home/component/alphabet";

interface PageProps {
  params: Promise<{
    alphabet: string;
  }>;
}

async function Page({ params }: PageProps) {
  const { alphabet } = await params;
  prefetchByAlphabet(alphabet);

  return (
    <div>
      <HydrateClient>
        <ErrorBoundary fallback={"error"}>
          <Suspense fallback={<Loader />}>
            <AlphabetWord alphabet={alphabet} />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </div>
  );
}

export default Page;


export const Loader = () => {
return (
    <div className="flex items-center justify-center h-screen">
    <Spinner />
    </div>
)
}