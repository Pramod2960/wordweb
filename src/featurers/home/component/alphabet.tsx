"use client";

import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSuspenseAlphabet } from "@/featurers/hooks/use-words";

interface AlphabetWordProps {
  alphabet: string;
}

export default function AlphabetWord({ alphabet }: AlphabetWordProps) {
  const { data } = useSuspenseAlphabet(alphabet);

  return (
    <div className="max-w-full mx-auto px-6 py-10">

      {/* 🔹 WORD GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-3">

        {data.map((word) => (
          <Dialog key={word.id}>

            {/* WORD ITEM */}
            <DialogTrigger asChild>
              <button className="text-left hover:underline hover:text-blue-600 transition font-medium">
                {word.title}
              </button>
            </DialogTrigger>

            {/* 🔹 DIALOG */}
            <DialogContent className="md:min-w-200 p-0 overflow-hidden">

              <div className="md:max-h-[80vh] overflow-y-auto">

                {/* Breadcrumb */}
                {/* <div className="p-4 border-b bg-white sticky top-0 z-10">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md text-sm"
                  >
                    🏠 Home
                  </Link>
                </div> */}

                <div className="p-8 space-y-6">

                  {/* TITLE */}
                  <DialogHeader className="p-0">
                    <DialogTitle className="text-4xl text-blue-600 font-bold">
                      {word.title}
                    </DialogTitle>
                  </DialogHeader>

                  <p className="italic text-gray-500">
                    {word.pos} – S1
                  </p>

                  <div className="space-y-3">

                    <p>
                      <span className="font-semibold">Gloss :</span>{" "}
                      {word.gloss}
                    </p>

                    {word.e_usage && (
                      <p>
                        <span className="font-semibold">Usage :</span>{" "}
                        {word.e_usage}
                      </p>
                    )}

                    {word.reference && (
                      <p>
                        <span className="font-semibold">Reference :</span>{" "}
                        <a
                          href={word.reference}
                          target="_blank"
                          className="text-blue-600 underline break-all"
                        >
                          {word.reference}
                        </a>
                      </p>
                    )}
                  </div>

                  {/* DIVIDER */}
                  <div className="border-t" />

                  {/* SANSKRIT BLOCK */}
                  <div className="space-y-3">

                    <h2 className="text-3xl font-bold text-blue-600 font-serif">
                      {word.sanskrit}
                    </h2>

                    {word.s_usage && (
                      <p>
                        <span className="font-semibold">Usage :</span>{" "}
                        {word.s_usage}
                      </p>
                    )}

                    {word.context && (
                      <p>
                        <span className="font-semibold">Context :</span>{" "}
                        {word.context}
                      </p>
                    )}
                  </div>

                </div>
              </div>

            </DialogContent>
          </Dialog>
        ))}

      </div>
    </div>
  );
}