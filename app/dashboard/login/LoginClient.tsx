"use client";

import { useState } from "react";
import { getHendersonSupabaseBrowser } from "@/lib/henderson-dashboard/supabaseBrowser";

export function LoginClient() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const supabase = getHendersonSupabaseBrowser();
      const redirectTo = `${window.location.origin}/dashboard/login/callback`;
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectTo,
        },
      });

      if (error) throw error;
      setStatus("sent");
      setMessage("Check your email for a secure dashboard login link.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send login link.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4">
      <label className="block">
        <span className="text-sm font-semibold text-[#243A2E]">Email address</span>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="mt-2 w-full border border-[#D8D4C8] bg-white px-4 py-3 text-base text-[#243A2E] outline-none focus:border-[#B08A3E] focus:ring-2 focus:ring-[#B08A3E]/30"
          autoComplete="email"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-[#243A2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send login link"}
      </button>
      {message ? (
        <p className={status === "error" ? "text-sm text-[#702F35]" : "text-sm text-[#514B42]"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
