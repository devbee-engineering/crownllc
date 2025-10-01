
'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 600) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/971554588850"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-brand text-white shadow-lg flex items-center justify-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Back to Top */}
      <Button
        variant="secondary"
        size="icon"
        className={cn(
          "fixed bottom-24 right-6 z-50 h-10 w-10 rounded-full shadow-md transition-opacity duration-300",
          showBackToTop ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </>
  );
}
