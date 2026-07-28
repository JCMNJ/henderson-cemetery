"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setStatus("error");
        setError(result.error || "Unable to send your message.");
        return;
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        website: "",
      });
    } catch {
      setStatus("error");
      setError("Unable to send your message.");
    }
  };

  return (
    <article className="bg-white p-6 shadow-2xl shadow-[#243A2E]/12 ring-1 ring-[#D8D4C8] sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B08A3E]">Association Contact</p>
      <h2 className="mt-4 font-serif text-4xl font-semibold text-[#243A2E]">
        Send a message.
      </h2>
      <p className="mt-3 text-sm leading-6 text-[#514B42]">
        For volunteering, include your preferred contact method, general
        availability, areas of interest, and any skills or resources you may
        wish to contribute. Required fields are name, email, and message.
      </p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-3">
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <input
          name="name"
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          placeholder="Name"
          required
          className="rounded-xl border border-[#D8D4C8] bg-white px-4 py-3 text-base text-[#243A2E] placeholder:text-[#77746C] outline-none focus:border-[#243A2E] focus:ring-2 focus:ring-[#B08A3E]/30"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          placeholder="Email"
          required
          className="rounded-xl border border-[#D8D4C8] bg-white px-4 py-3 text-base text-[#243A2E] placeholder:text-[#77746C] outline-none focus:border-[#243A2E] focus:ring-2 focus:ring-[#B08A3E]/30"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
          placeholder="Phone (optional)"
          className="rounded-xl border border-[#D8D4C8] bg-white px-4 py-3 text-base text-[#243A2E] placeholder:text-[#77746C] outline-none focus:border-[#243A2E] focus:ring-2 focus:ring-[#B08A3E]/30"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          placeholder="Message"
          rows={6}
          required
          className="rounded-xl border border-[#D8D4C8] bg-white px-4 py-3 text-base text-[#243A2E] placeholder:text-[#77746C] outline-none focus:border-[#243A2E] focus:ring-2 focus:ring-[#B08A3E]/30"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="button-soft inline-flex w-full justify-center rounded-full bg-[#243A2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1A2C22] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" ? (
        <p className="mt-4 text-sm text-emerald-700">Your message has been sent.</p>
      ) : null}
      {status === "error" ? <p className="mt-4 text-sm text-rose-700">{error}</p> : null}
    </article>
  );
}
