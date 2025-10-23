"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";

export function SignUpForm() {
  return (
    <div className="p-8 space-y-6">
      <form className="space-y-6">
        <div>
          <label htmlFor="name-field">Name</label>
          <Input id="name-field" type="text" />
        </div>

        <div>
          <label htmlFor="email-field">Email</label>
          <Input id="email-field" type="email" />
        </div>

        <div>
          <label htmlFor="password-field">Password</label>
          <Input id="password-field" type="password" />
        </div>
      </form>

      <span>
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </span>
    </div>
  );
}
