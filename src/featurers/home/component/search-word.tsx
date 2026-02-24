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
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchWord() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWord, setSelectedWord] = useState<any>(null);

  const { data: searchResults = [] } = useSearchWords(searchQuery);

  const router = useRouter();

  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
      <Dialog
        open={open}
        onOpenChange={(v) => {
          setOpen(v);
          if (!v) setSearchQuery(""); // optional reset
        }}
      >
        <DialogTrigger asChild>
          <Button  variant="outline" className="w-full">
            <Search className="mr-2 size-4" />
            Search Words</Button>
        </DialogTrigger>

        <DialogContent className="p-0 overflow-hidden min-h-2xl">
          
          {/* ✅ TITLE */}
          <DialogHeader className="px-4 pt-4">
            <DialogTitle>Search Words</DialogTitle>
          </DialogHeader>

          <Command className="rounded-none border-t shadow-md">
            <CommandInput
              placeholder="Type a word..."
              value={searchQuery}
              onValueChange={setSearchQuery}
            />

            <CommandList className="min-h-25">
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
                        setSelectedWord(w);
                        setOpen(false);
                        router.push(`/word/${w.id}`);
                      }}
                      className="cursor-pointer"
                    >
                      {w.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  );
}