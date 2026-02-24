import { HydrateClient } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { prefetchWord } from "@/featurers/home/server/prefetch";
import { Spinner } from "@/components/ui/spinner";
import Word from "@/featurers/home/component/word";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

async function Page({ params }: PageProps) {
  const { id } = await params;
  prefetchWord(id);

  return (
    <div>
      <HydrateClient>
        <ErrorBoundary fallback={"error"}>
          <Suspense
            fallback={
              <div className="w-full h-60 flex items-center justify-center text-muted-foreground  ">
                <Spinner /> loading...
              </div>
            }
          >
            <Word id={id} />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </div>
  );
}

export default Page;
