"use client";

import { useState } from "react";
import { useSearchWords } from "@/featurers/hooks/use-words";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";

export default function HomeSearchWord() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { data } = useSearchWords(searchQuery);
  const searchResults = data?.slice(0, 3) ?? [];

  const router = useRouter();

  return (
    <div className="animate-slidein [--slidein-delay:500ms] opacity-0 w-full items-center justify-center flex">
      <Command
        shouldFilter={false}
        className="border rounded-lg  min-w-50 max-w-lg "
      >
        <CommandInput
          autoFocus
          placeholder="Search a word..."
          value={searchQuery}
          onValueChange={setSearchQuery}
        />

        <CommandList className="overflow-visible max-h-none">
          {searchQuery && searchResults.length === 0 && (
            <CommandEmpty>No words found.</CommandEmpty>
          )}

          {searchResults.length > 0 && (
            // <CommandGroup heading="Words">
            <div>
              {searchResults.map((w: any) => (
                <CommandItem
                  key={w.id}
                  value={w.title}
                  onSelect={() => {
                    setOpen(false);
                    router.push(`/word/${w.id}`);
                  }}
                >
                  {w.title}
                </CommandItem>
              ))}
            </div>
            // </CommandGroup>
          )}
        </CommandList>
      </Command>
    </div>
  );
}
