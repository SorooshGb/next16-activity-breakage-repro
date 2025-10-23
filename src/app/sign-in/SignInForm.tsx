"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";

export function SignInForm() {
  return (
    <div className="p-8 space-y-6">
      <form className="space-y-6">
        <div>
          <label htmlFor="email-field1">Email</label>
          <Input id="email-field1" type="email" />
        </div>

        <div>
          <label htmlFor="password-field1">Password</label>
          <Input id="password-field1" type="password" />
        </div>
      </form>

      <span>
        Don't have an account? <Link href="/sign-up">Sign up</Link>
      </span>
    </div>
  );
}
