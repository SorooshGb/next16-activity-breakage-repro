"use client";

import { useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";

export function EntryDialog() {
  const searchParams = useSearchParams();
  const shouldOpen = searchParams.get("newEntry") === "true";

  return (
    <Dialog defaultOpen={shouldOpen}>
      <DialogTrigger asChild>
        <Button>
          New Item <PlusIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">New Item From</DialogTitle>
          <DialogDescription className="min-h-80 flex items-center justify-center text-xl">
            New Item Form Would go here
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
