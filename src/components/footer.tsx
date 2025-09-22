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
            </section>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-neutral-200/70 dark:border-white/10" />


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
