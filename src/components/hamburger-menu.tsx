
'use client';

import { X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import * as Collapsible from '@radix-ui/react-collapsible';

type HamburgerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
};

const navItems = [
    { href: "/about", label: "ABOUT US" },
    { 
      label: "PRODUCTS", 
      subItems: [
        { href: "#", label: "Pulses & Beans" },
        { href: "#", label: "Staples" },
        { href: "#", label: "Coffee Beans" },
        { href: "#", label: "Nuts & Dry Fruits" },
        { href: "#", label: "Seeds" },
        { href: "#", label: "Spices" },
        { href: "#", label: "Fruits & Vegetables" },
        { href: "#", label: "Other Commodities" },
      ]
    },
    { href: "/services", label: "SERVICES" },
    { href: "/contact", label: "CONTACT US" },
];

export function HamburgerMenu({ className, isOpen, onClose }: HamburgerMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="w-full sm:w-80 h-full bg-white text-ink p-6 flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" onClick={onClose}>
            <Logo className="w-32" />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="size-6" />
          </Button>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.subItems ? (
                   <Collapsible.Root>
                    <Collapsible.Trigger className="w-full flex justify-between items-center text-lg py-2 font-medium text-left">
                      {item.label}
                      <ChevronDown className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:-rotate-180" />
                    </Collapsible.Trigger>
                    <Collapsible.Content>
                      <ul className="pl-4 pt-2 space-y-2">
                        {item.subItems.map(subItem => (
                           <li key={subItem.label}>
                            <Link href={subItem.href} onClick={onClose} className="block py-1 text-muted-foreground hover:text-brand">
                              {subItem.label}
                            </Link>
                           </li>
                        ))}
                      </ul>
                    </Collapsible.Content>
                   </Collapsible.Root>
                ) : (
                  <Link href={item.href!} onClick={onClose} className="block text-lg py-2 font-medium hover:text-brand">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className="flex-grow h-full bg-black/30"
        onClick={onClose}
      />
    </div>
  );
}
