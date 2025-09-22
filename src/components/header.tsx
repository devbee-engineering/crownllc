
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type HeaderProps = {
  onMenuClick: () => void;
  isHomePage?: boolean;
};

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/expertise", label: "SERVICES" },
  { href: "/services", label: "OUR PROJECTS" },
  { href: "/contact", label: "CONTACT" },
];


export function Header({ onMenuClick, isHomePage = false }: HeaderProps) {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerClasses = cn(
        "sticky top-0 z-50 flex items-center justify-between p-4 md:p-8 transition-colors duration-300",
        isHomePage && !isScrolled
            ? "bg-transparent text-white"
            : "bg-white text-black shadow-md"
    );
    
    const navLinkClasses = cn(
        "transition-colors",
        isHomePage && !isScrolled ? "hover:text-primary/80" : "hover:text-black/70"
    );

    const activeLinkClasses = isHomePage && !isScrolled ? "text-primary font-semibold" : "text-black font-semibold";
    
    const iconButtonClasses = cn(
        "transition-colors",
        isHomePage && !isScrolled ? "text-primary hover:bg-primary/10" : "text-black hover:bg-black/10"
    );

  const isProjectsActive = pathname.startsWith('/projects') || pathname === '/our-projects' || pathname.startsWith('/services');
  const isExpertiseActive = pathname.startsWith('/expertise');
  const isContactActive = pathname.startsWith('/contact');
  const isAboutActive = pathname.startsWith('/about');


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
        <Logo className="hidden md:block" isScrolled={isScrolled} isHomePage={isHomePage} />
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className={cn("flex gap-12 text-sm font-medium tracking-wider", isHomePage && !isScrolled ? "text-primary" : "text-black/80")}>
            {navItems.map((item) => {
              let isActive = pathname === item.href;
              if (item.href === '/') isActive = pathname === '/';
              if (item.href === '/about') isActive = isAboutActive;
              if (item.href === '/services') isActive = isProjectsActive;
              if (item.href === '/expertise') isActive = isExpertiseActive;
              if (item.href === '/contact') isActive = isContactActive;

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
        <Search className="size-5" />
      </Button>
    </header>
  );
}
