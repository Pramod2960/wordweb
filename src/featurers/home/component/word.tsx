"use client";

import { useSuspenseWord } from "@/featurers/hooks/use-words";
import Link from "next/link";

export default function Word({ id }: { id: string }) {
  const { data: word } = useSuspenseWord(id);

  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* 🔹 Breadcrumb */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md text-sm mb-4"
      >
        🏠 Home
      </Link>

      <div className="rounded-xl border bg-gray-50 shadow-sm overflow-hidden">

        {/* 🔹 ENGLISH BLOCK */}
        <div className="p-8 space-y-4">

          <h1 className="text-4xl font-bold text-blue-600">
            {word?.title}
          </h1>

          <p className="italic text-gray-500">
            {word?.pos} – S1
          </p>

          <p>
            <span className="font-semibold">Gloss :</span>{" "}
            {word?.gloss}
          </p>

          {word?.e_usage && (
            <p>
              <span className="font-semibold">Usage :</span>{" "}
              {word?.e_usage}
            </p>
          )}

          {word?.reference && (
            <p>
              <span className="font-semibold">Reference :</span>{" "}
              <a
                href={word?.reference}
                target="_blank"
                className="text-blue-600 underline"
              >
                {word?.reference}
              </a>
            </p>
          )}
        </div>

        {/* 🔻 DIVIDER */}
        <div className="border-t" />

        {/* 🔹 SANSKRIT BLOCK */}
        <div className="p-8 space-y-4">

          <h2 className="text-3xl font-bold text-blue-600">
            {word?.sanskrit}
          </h2>

          {word?.s_usage && (
            <p>
              <span className="font-semibold">Usage :</span>{" "}
              {word?.s_usage}
            </p>
          )}

          {word?.context && (
            <p>
              <span className="font-semibold">Context :</span>{" "}
              {word?.context}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}