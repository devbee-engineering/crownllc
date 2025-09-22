// app/components/footer.tsx (or wherever you keep it)
"use client";

import { useId, useState } from "react";
import Image from "next/image";
import data from "@/lib/placeholder-images.json";
import { CaptionOverlay } from "@/components/caption-overlay";
import { Locations } from "@/components/locations";
import { LegalBar } from "@/components/legal-bar";

export function Footer() {
  const footerBg = data.placeholderImages.find((p) => p.id === "footerBg");

  // simple client-side validation
  const formId = useId();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "err">(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(null);
    setSending(true);

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const nextErrors: typeof errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter a valid email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "That doesn’t look like a valid email.";
    if (!message) nextErrors.message = "Please include a short message.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setSending(false);
      return;
    }

    // Simulate success – hook up to your API here
    setTimeout(() => {
      setSending(false);
      setSent("ok");
      e.currentTarget.reset();
    }, 600);
  }

  return (
    <footer
      id="locations-heading"
      aria-labelledby="locations-heading-title"
      className="relative isolate overflow-hidden bg-white text-black dark:bg-neutral-950 dark:text-neutral-100"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Background image with overlay */}
      <div className="relative">
        {footerBg && (
          <>
            <div className="absolute inset-0 -z-10">
              <Image
                src={footerBg.imageUrl}
                alt={footerBg.description}
                fill
                priority
                className="object-cover"
                data-ai-hint={footerBg.imageHint}
              />
              {/* soft gradient wash for contrast */}
              <div className="absolute inset-0 bg-white/70 dark:bg-black/60 backdrop-blur-[2px]" />
            </div>
            <CaptionOverlay caption="Residence 22, Dubai, UAE" />
          </>
        )}

        {/* Content */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* spacer to give the hero image some breathing room */}
          <div className="h-10 sm:h-12" />

          {/* heading (sr only for landmark nav) */}
          <h2 id="locations-heading-title" className="sr-only">
            Company locations and footer
          </h2>

          {/* Top: Locations + Contact */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-12">
            {/* Locations */}
            <section aria-labelledby="locations-title" className="md:col-span-3">
              <h3 id="locations-title" className="text-2xl font-semibold tracking-tight">
                Our Locations
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Visit us across the region or reach out below.
              </p>
              <div className="mt-6 rounded-2xl border border-neutral-200/70 bg-white/80 p-4 shadow-sm ring-1 ring-black/5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                <Locations />
              </div>
            </section>

            {/* Contact details */}
            <section aria-labelledby="contact-title" className="md:col-span-2">
              <h3 id="contact-title" className="text-2xl font-semibold tracking-tight">
                Contact Us
              </h3>
              <ul className="mt-4 space-y-3 text-[15px]">
                <li>
                  Phone:{" "}
                  <a
                    itemProp="telephone"
                    href="tel:+9711234567"
                    className="underline decoration-neutral-400 underline-offset-4 hover:decoration-current"
                  >
                    +971-123-4567
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    itemProp="email"
                    href="mailto:info@crownpillars.com"
                    className="underline decoration-neutral-400 underline-offset-4 hover:decoration-current"
                  >
                    info@crownpillars.com
                  </a>
                </li>
              </ul>

              {/* Quick links (optional) */}
              {/* <div className="mt-6">
                <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                  Quick Links
                </h4>
                <nav aria-label="Footer quick links" className="mt-3">
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    <li>
                      <a className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30 rounded px-1 py-0.5" href="/about">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30 rounded px-1 py-0.5" href="/projects">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30 rounded px-1 py-0.5" href="/careers">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/30 rounded px-1 py-0.5" href="/contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </section>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-neutral-200/70 dark:border-white/10" />

          {/* Inquiry form */}
          <section aria-labelledby={`${formId}-inquiry`} className="mx-auto max-w-3xl">
            <h3 id={`${formId}-inquiry`} className="text-2xl font-semibold tracking-tight text-center">
              Send an Inquiry
            </h3>
            <p className="mt-2 text-center text-sm text-neutral-600 dark:text-neutral-400">
              Tell us briefly what you’re looking for. We’ll get back within one business day.
            </p>

            <form
              noValidate
              onSubmit={onSubmit}
              className="mt-6 rounded-2xl border border-neutral-200/70 bg-white/80 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${formId}-name`} className="mb-1 block text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="block w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-base shadow-sm outline-none transition focus:border-neutral-500 focus:ring-4 focus:ring-neutral-500/10 dark:border-white/15 dark:bg-white/5 dark:placeholder:text-neutral-400"
                    aria-invalid={Boolean(errors.name) || undefined}
                    aria-describedby={errors.name ? `${formId}-name-err` : undefined}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p id={`${formId}-name-err`} className="mt-1 text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor={`${formId}-email`} className="mb-1 block text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-base shadow-sm outline-none transition focus:border-neutral-500 focus:ring-4 focus:ring-neutral-500/10 dark:border-white/15 dark:bg-white/5 dark:placeholder:text-neutral-400"
                    aria-invalid={Boolean(errors.email) || undefined}
                    aria-describedby={errors.email ? `${formId}-email-err` : undefined}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p id={`${formId}-email-err`} className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor={`${formId}-message`} className="mb-1 block text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    rows={4}
                    className="block w-full resize-y rounded-lg border border-neutral-300 bg-white px-3 py-2 text-base shadow-sm outline-none transition focus:border-neutral-500 focus:ring-4 focus:ring-neutral-500/10 dark:border-white/15 dark:bg-white/5 dark:placeholder:text-neutral-400"
                    aria-invalid={Boolean(errors.message) || undefined}
                    aria-describedby={errors.message ? `${formId}-message-err` : undefined}
                    placeholder="How can we help?"
                  />
                  {errors.message && (
                    <p id={`${formId}-message-err`} className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {/* form footer */}
              <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  By sending, you agree to our{" "}
                  <a href="/privacy" className="underline underline-offset-4 hover:opacity-80">
                    Privacy Policy
                  </a>
                  .
                </p>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-black/20 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:focus:ring-white/25"
                >
                  {sending ? "Sending…" : "Send Inquiry"}
                </button>
              </div>

              {sent === "ok" && (
                <div
                  role="status"
                  className="mt-4 rounded-md border border-emerald-300/60 bg-emerald-50 px-3 py-2 text-sm text-emerald-900 dark:border-emerald-400/30 dark:bg-emerald-900/20 dark:text-emerald-200"
                >
                  Thanks! Your message has been sent.
                </div>
              )}
              {sent === "err" && (
                <div
                  role="alert"
                  className="mt-4 rounded-md border border-red-300/60 bg-red-50 px-3 py-2 text-sm text-red-900 dark:border-red-400/30 dark:bg-red-900/20 dark:text-red-200"
                >
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </section>

          {/* Bottom legal / brand bar */}
          <div className="mt-10">
            <LegalBar />
          </div>

          {/* spacer to keep bg image peeking */}
          <div className="h-10 sm:h-12" />
        </div>
      </div>
    </footer>
  );
}
