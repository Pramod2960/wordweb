"use client";

import { useSuspenseWord } from "@/featurers/hooks/use-words";
import Link from "next/link";
import { SanskritSuggestion } from "./suggestion-dailog";

export default function Word({ id }: { id: string }) {
  const { data: word } = useSuspenseWord(id);

  return (
    <div className="max-w-5xl mx-auto p-3 sm:p-6">
      {/* 🔹 Breadcrumb */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md text-sm mb-3 sm:mb-4"
      >
        🏠 Home
      </Link>

      <div className="rounded-xl border bg-gray-50 shadow-sm overflow-hidden">
        {/* 🔹 ENGLISH BLOCK */}
        <div className="p-4 sm:p-8 space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-blue-600">{word?.title}</h1>

          <p className="italic text-gray-500">{word?.pos} – S1</p>

          <p>
            <span className="font-semibold">Gloss :</span> {word?.gloss}
          </p>

          {word?.e_usage && (
            <p>
              <span className="font-semibold">Usage :</span> {word?.e_usage}
            </p>
          )}

          {word?.reference && (
            <p>
              <span className="font-semibold">Reference :</span>{" "}
              <a
                href={word?.reference}
                target="_blank"
                className="text-blue-600 underline break-all"
              >
                {word?.reference}
              </a>
            </p>
          )}
        </div>

        {/* 🔻 DIVIDER */}
        <div className="border-t" />

        {/* 🔹 SANSKRIT BLOCK */}
        <div className="p-4 sm:p-8 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 justify-between flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0">
            <div className="">{word?.sanskrit}</div>
            <div>
              <SanskritSuggestion wordId={word?.id} />
            </div>
          </h2>

          {word?.s_usage && (
            <p>
              <span className="font-semibold">Usage :</span> {word?.s_usage}
            </p>
          )}

          {word?.context && (
            <p>
              <span className="font-semibold">Context :</span> {word?.context}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
