

"use client";

import React, { useRef, useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Location } from '@/data/locations';
import { LocationCard } from './location-card';
import { cn } from '@/lib/utils';

type LocationsScrollerProps = {
  locations: Location[];
};

export function LocationsScroller({ locations }: LocationsScrollerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      // A little buffer to account for subpixel rendering
      const scrollEnd = el.scrollWidth - el.clientWidth - 1;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < scrollEnd);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = el.clientWidth; 
      el.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  
  React.useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScrollability();
      const debouncedCheck = () => setTimeout(checkScrollability, 100);
      el.addEventListener('scroll', debouncedCheck);
      window.addEventListener('resize', debouncedCheck);
      
      // Also check on mount and after a short delay for initial render
      setTimeout(checkScrollability, 100);

      return () => {
        el.removeEventListener('scroll', debouncedCheck);
        window.removeEventListener('resize', debouncedCheck);
      };
    }
  }, [checkScrollability, locations]);


  return (
    <div>
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-light">Our Locations</h2>
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => scroll('left')} 
                    aria-label="Scroll left" 
                    disabled={!canScrollLeft}
                    className={cn(
                        "text-black/40 hover:text-black transition-colors",
                        !canScrollLeft && "opacity-50 cursor-not-allowed"
                    )}
                >
                    <ArrowLeft />
                </button>
                <div className="w-8 h-px bg-black/20"></div>
                <button 
                    onClick={() => scroll('right')} 
                    aria-label="Scroll right" 
                    disabled={!canScrollRight}
                    className={cn(
                        "text-black/40 hover:text-black transition-colors",
                        !canScrollRight && "opacity-50 cursor-not-allowed"
                    )}
                >
                    <ArrowRight />
                </button>
            </div>
        </div>

        <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 -mb-6 -ml-4"
            style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
        >
            {locations.map((location, index) => (
            <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 snap-center px-4 first:pl-4 last:pr-4"
            >
                <LocationCard location={location} />
            </div>
            ))}
        </div>
    </div>
  );
}
