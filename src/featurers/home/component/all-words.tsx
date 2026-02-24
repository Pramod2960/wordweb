"use client"

import { useSuspenseWords } from "@/featurers/hooks/use-words";


function AllWords() {
  const words = useSuspenseWords();
  return <div>{JSON.stringify(words.data, null, 2)}</div>;
}

export default AllWords;