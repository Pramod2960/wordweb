import { HydrateClient } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { prefetchAdminWords } from "@/featurers/admin/server/prefetch";
import { adminWordsParamsLoader } from "@/featurers/admin/server/params-loader";
import AdminAllWords from "@/featurers/admin/component/all-words";
import type { SearchParams } from "nuqs/server";

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function AdminAllWordsPage({ searchParams }: Props) {
  const params = await adminWordsParamsLoader(searchParams);
  prefetchAdminWords(params);

  return (
    <div>
      <HydrateClient>
        <ErrorBoundary fallback={<p className="text-red-500">Error loading admin words!</p>}>
          <Suspense fallback={<p className="text-gray-400">Loading words...</p>}>
            <AdminAllWords />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </div>
  );
}
