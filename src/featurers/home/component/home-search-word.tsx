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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomeSearchWord() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { data: searchResults = [] } = useSearchWords(searchQuery);
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

        <CommandList className="max-h-[200px] overflow-y-auto">
          {searchQuery && searchResults.length === 0 && (
            <CommandEmpty>No words found.</CommandEmpty>
          )}

          {searchResults.length > 0 && (
            <CommandGroup heading="Words">
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
            </CommandGroup>
          )}
        </CommandList>
      </Command>
    </div>
  );
}
