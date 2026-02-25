"use client";

import { useState } from "react";
import { useSuggestSanskrit } from "@/featurers/hooks/use-words";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function SanskritSuggestion({ wordId }: { wordId: number | undefined }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const mutation = useSuggestSanskrit();

  const submit = async () => {
    if (wordId === undefined) {
      toast.error("Word ID is missing");
      return;
    }
    if (text.trim().length === 0) {
      toast.error("Please enter at least 1 character");
      return;
    }
    await mutation.mutateAsync({
      wordId,
      suggestion: text,
    });

    toast.success("Suggestion submitted");
    setText("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Suggest Sanskrit Word
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Suggest Sanskrit Word</DialogTitle>
        </DialogHeader>

        <Textarea
          placeholder="Enter your suggestion..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button onClick={submit} disabled={mutation.isPending || text.trim().length === 0}>
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
}
