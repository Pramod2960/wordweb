"use client";

import { WordContainer, WordHeader, WordPagination, WordSearch } from "@/components/entity-components";
import { useSuspenseAdminWords } from "@/featurers/admin/hooks/use-admin-words";
import { useAdminWordsParams } from "@/featurers/admin/hooks/use-admin-words-params";
import { useEntitySearch } from "@/featurers/admin/hooks/use-entity-search";

import Link from "next/link";

// Search Component for Admin Words
export const AdminWordsSearch = () => {
  const [params, setParams] = useAdminWordsParams();
  const { searchValue, onSearchChange } = useEntitySearch({
    params,
    setParams,
  });

  return (
    <WordSearch
      value={searchValue}
      onChange={onSearchChange}
      placeholder="Search words..."
    />
  );
};

// Pagination Component for Admin Words
export const AdminWordsPagination = () => {
  const words = useSuspenseAdminWords();
  const [params, setParams] = useAdminWordsParams();

  return (
    <WordPagination
      disabled={words.isFetching}
      totalPage={words.data.totalPages}
      page={words.data.page}
      onPageChange={(page) => setParams({ ...params, page })}
    />
  );
};

// Main Admin All Words Component
export default function AdminAllWords() {
  const { data: wordsData } = useSuspenseAdminWords();

  return (
    <WordContainer
      header={
        <WordHeader
          title="All Words"
          description={`Total: ${wordsData.totalCount} words`}
        />
      }
      search={<AdminWordsSearch />}
      pagination={<AdminWordsPagination />}
        >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="text-left p-3 font-semibold">ID</th>
              <th className="text-left p-3 font-semibold">Title</th>
              <th className="text-left p-3 font-semibold">Sanskrit</th>
              <th className="text-left p-3 font-semibold">POS</th>
              <th className="text-left p-3 font-semibold">Gloss</th>
              <th className="text-left p-3 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {wordsData.items?.map((word) => (
              <tr key={word.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{word.id}</td>
                <td className="p-3 font-semibold">{word.title}</td>
                <td className="p-3">{word.sanskrit}</td>
                <td className="p-3">{word.pos}</td>
                <td className="p-3 max-w-md truncate">{word.gloss}</td>
                <td className="p-3">
                  <Link
                    href={`/admin/all-words/${word.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </WordContainer>
  );
}
