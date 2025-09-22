
"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import Link from "next/link";

type HamburgerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navItems = [
    { href: "/about", label: "About us" },
    { href: "/our-projects", label: "Our Projects" },
    { href: "/expertise", label: "Expertise" },
    { href: "/contact", label: "Contact" },
    { href: "/careers", label: "Careers" },
];

export function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex transition-transform duration-500 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="w-full md:w-1/2 h-full bg-white text-black p-4 md:p-8 flex flex-col">
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <nav className="flex-grow flex items-center">
          <ul>
            {navItems.map((item) => (
              <li key={item.label} className="my-4">
                <Link
                  href={item.href}
                  className="text-4xl text-gray-400 hover:text-gray-800 transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-shrink-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close menu"
            className="text-gray-500 hover:text-gray-800"
          >
            <X className="size-8" />
          </Button>
        </div>
      </div>
      <div
        className="w-1/2 h-full bg-black/20 hidden md:block"
        onClick={onClose}
      />
    </div>
  );
}
