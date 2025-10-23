"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-4 px-8 py-4 border-b">
      <Button variant="outline" asChild>
        <Link className="border p-2" href="/">
          Home
        </Link>
      </Button>
      <Button asChild>
        <Link className="border p-2" href="/sign-in">
          Sign In
        </Link>
      </Button>
    </nav>
  );
}
