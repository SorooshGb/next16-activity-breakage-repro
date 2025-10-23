"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ChevronDownIcon, EyeIcon, PlusCircleIcon } from "lucide-react";

export function ItemDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Items
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-54">
        {Array.from({ length: 2 }).map((_, i) => (
          <DropdownMenuItem
            className="focus:bg-popover focus:text-accent-foreground"
            key={i}
            onSelect={(e) => e.preventDefault()}
          >
            <span className="flex-1 font-medium truncate">Item {i}</span>

            <div className="flex gap-2">
              <Button
                asChild
                title="View Item"
                variant="ghost"
                size="icon"
                className="size-7"
              >
                <Link href={`/item/${i}`}>
                  <EyeIcon />
                </Link>
              </Button>

              <Button
                asChild
                title="Add Item"
                variant="ghost"
                size="icon"
                className="size-7"
              >
                <Link href={`/item/${i}?newEntry=true`}>
                  <PlusCircleIcon />
                </Link>
              </Button>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
