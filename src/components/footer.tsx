// app/components/footer.tsx (or wherever you keep it)
"use client";

import { LegalBar } from "@/components/legal-bar";

export function Footer() {
  return (
    <footer
      id="locations-heading"
      aria-labelledby="locations-heading-title"
      className="bg-[#F5F6F6] text-black dark:bg-neutral-950 dark:text-neutral-100 py-12 md:py-16"
      itemScope
      itemType="https://schema.org/Organization"
    >
        {/* Content */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* heading (sr only for landmark nav) */}
          <h2 id="locations-heading-title" className="sr-only">
            Company locations and footer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-[15px]">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-black/60 mb-4">
                Location
              </h3>
              <address className="not-italic text-black/80 leading-relaxed">
                  <p>Office no 302, Makateb Building</p>
                  <p>Maktoum road,</p>
                  <p>Deira - Dubai, UAE</p>
              </address>
            </div>
            <div>
                <h3 className="text-sm uppercase tracking-widest text-black/60 mb-4">
                    Contact Us
                </h3>
                <ul className="space-y-2 text-black/80">
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
            </div>
          </div>
          

          {/* Divider */}
          <div className="my-10 border-t border-neutral-200/70 dark:border-white/10" />


          {/* Bottom legal / brand bar */}
          <div className="mt-10">
            <LegalBar />
          </div>
        </div>
    </footer>
  );
}
