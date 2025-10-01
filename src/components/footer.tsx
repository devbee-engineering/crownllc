
'use client';

import Link from "next/link";
import { Logo } from "@/components/logo";

const productLinks = [
  { href: "#", label: "Pulses & Beans" },
  { href: "#", label: "Staples" },
  { href: "#", label: "Coffee Beans" },
  { href: "#", label: "Nuts & Dry Fruits" },
  { href: "#", label: "Seeds" },
  { href: "#", label: "Spices" },
  { href: "#", label: "Fruits & Vegetables" },
  { href: "#", label: "Other Commodities" },
];

const aboutLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
  { href: "#", label: "Inside Stories" },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 text-ink border-t border-line">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <Logo className="w-40 h-auto mb-4" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Leading Agro-Commodity Brokerage & Trade House Since 1992
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-brand hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-brand hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="md:col-span-3">
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+97145281999" className="text-sm text-muted-foreground hover:text-brand hover:underline">
                  +971 45281999
                </a>
              </li>
              <li>
                <a href="mailto:trade@emco.ae" className="text-sm text-muted-foreground hover:text-brand hover:underline">
                  trade@emco.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-line pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EMCO Group. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Designed & Developed by <a href="#" className="hover:text-brand hover:underline">emQube</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
