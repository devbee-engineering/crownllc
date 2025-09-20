"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

type HeaderProps = {
  onMenuClick: () => void;
  isHomePage?: boolean;
};

const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/our-projects", label: "OUR PROJECTS" },
    { href: "/services", label: "SERVICES" },
    { href: "/expertise", label: "EXPERTISE" },
    { href: "/contact", label: "CONTACT" },
    { href: "/gallery", label: "GALLERY" },
];


export function Header({ onMenuClick, isHomePage = false }: HeaderProps) {
    const pathname = usePathname();
    const headerClasses = isHomePage
    ? "absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 md:p-8"
    : "relative flex items-center justify-between p-4 md:p-8 bg-white text-black";
    
    const navLinkClasses = isHomePage ? "hover:text-primary" : "hover:text-black/70";
    const activeLinkClasses = isHomePage ? "text-primary" : "text-black font-semibold";
    const iconButtonClasses = isHomePage ? "text-primary hover:bg-primary/10" : "text-black hover:bg-black/10";

  const isProjectsActive = pathname.startsWith('/projects') || pathname === '/our-projects';
  const isServicesActive = pathname.startsWith('/services');
  const isExpertiseActive = pathname.startsWith('/expertise');

  return (
    <header className={headerClasses}>
      <div className="flex items-center gap-4 flex-1">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Menu"
          onClick={onMenuClick}
          className={cn("md:hidden", iconButtonClasses)}
        >
          <Menu className="size-6" />
        </Button>
        <Logo className={isHomePage ? 'border-primary text-primary' : 'border-black text-black'}/>
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className={cn("flex gap-12 text-base font-medium", isHomePage ? "text-primary" : "text-black/80")}>
            {navItems.map((item) => {
              let isActive = pathname === item.href;
              if (item.href === '/our-projects') {
                isActive = isProjectsActive;
              }
              if (item.href === '/services') {
                isActive = isServicesActive;
              }
              if (item.href === '/expertise') {
                isActive = isExpertiseActive;
              }

              return (
                 <li key={item.href}>
                    <Link href={item.href} className={cn(navLinkClasses, isActive && activeLinkClasses)}>
                        {item.label}
                    </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <Button variant="ghost" size="icon" aria-label="Search" className={iconButtonClasses}>
        <Search className="size-6" />
      </Button>
    </header>
  );
}
