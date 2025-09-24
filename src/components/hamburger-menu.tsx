
"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

type HamburgerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/expertise", label: "Services" },
    { href: "/services", label: "Our Projects" },
    { href: "/contact", label: "Contact" },
    // { href: "/careers", label: "Careers" },
];

export function HamburgerMenu({className, isOpen, onClose }: HamburgerMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex transition-transform duration-500 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="w-full md:w-1/2 h-full bg-white text-black p-4 md:p-8 flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <div
            className={cn(
              "relative flex items-start justify-start w-52 h-16 ml-0",
              className
            )}
          >
            <Image
              src="/assets/Crown_Web-Logo_big.jpg"
              alt="Crown Pillars Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
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
        <nav className="flex-grow">
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
      </div>
      <div
        className="w-1/2 h-full bg-black/20 hidden md:block"
        onClick={onClose}
      />
    </div>
  );
}
