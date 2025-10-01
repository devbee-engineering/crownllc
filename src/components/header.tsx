
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import * as Popover from '@radix-ui/react-popover';

type HeaderProps = {
  onMenuClick: () => void;
};

const leftNav = [
  { href: '/about', label: 'ABOUT US' },
  { 
    label: 'PRODUCTS',
    subItems: [
      { href: '#', label: 'Pulses & Beans' },
      { href: '#', label: 'Staples' },
      { href: '#', label: 'Coffee Beans' },
      { href: '#', label: 'Nuts & Dry Fruits' },
      { href: '#', label: 'Seeds' },
      { href: '#', label: 'Spices' },
      { href: '#', label: 'Fruits & Vegetables' },
      { href: '#', label: 'Other Commodities' },
    ]
  },
  { href: '/services', label: 'SERVICES' },
];

const rightNav = [{ href: '/contact', label: 'CONTACT US' }];

export function Header({ onMenuClick }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
  );
  
  const navLinkClasses = cn(
      "text-sm font-medium tracking-wider transition-colors",
      isScrolled ? "text-ink hover:text-brand" : "text-white hover:text-white/80"
  );

  return (
    <header className={headerClasses}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className={cn(navLinkClasses, "hover:bg-black/10")}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {leftNav.map(item => (
            item.subItems ? (
              <Popover.Root key={item.label}>
                <Popover.Trigger className={cn(navLinkClasses, 'flex items-center gap-1 group outline-none')}>
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:-rotate-180" />
                </Popover.Trigger>
                <Popover.Content sideOffset={20} align="start" className="w-56 bg-white p-2 rounded-md shadow-lg border border-line">
                  {item.subItems.map(sub => (
                    <Link key={sub.label} href={sub.href} className="block px-4 py-2 text-sm text-ink hover:bg-gray-100 rounded">
                      {sub.label}
                    </Link>
                  ))}
                </Popover.Content>
              </Popover.Root>
            ) : (
              <Link key={item.label} href={item.href!} className={navLinkClasses}>
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Logo className={cn("w-36 h-auto transition-colors", isScrolled ? 'text-ink' : 'text-white')} />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {rightNav.map(item => (
             <Link key={item.label} href={item.href} className={navLinkClasses}>
               {item.label}
             </Link>
          ))}
        </nav>

        <div className="lg:hidden w-8" />
      </div>
    </header>
  );
}
