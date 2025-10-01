
'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Location } from '@/data/locations';

type LocationsScrollerProps = {
  locations: Location[];
};

export function LocationsScroller({ locations }: LocationsScrollerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth / 2; // Adjust for 2 cards view
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="absolute -top-12 right-1/2 translate-x-1/2 flex items-center gap-2">
        <button onClick={() => scroll('left')} aria-label="Previous Location" className="p-2 rounded-full border border-line hover:bg-gray-100 transition-colors">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button onClick={() => scroll('right')} aria-label="Next Location" className="p-2 rounded-full border border-line hover:bg-gray-100 transition-colors">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-3"
        style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
      >
        {[...locations, ...locations].map((location, index) => ( // Duplicate for looping effect
          <div key={index} className="flex-shrink-0 w-full md:w-1/2 snap-center px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-line">
              <div className={`relative aspect-square w-full ${index % 2 === 0 ? 'md:order-last' : ''}`}>
                <Image src={location.image} alt={location.title} fill className="object-cover rounded-lg" />
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-2xl">{location.title}</h3>
                <p className="text-sm text-muted-foreground">{location.address}</p>
                <p className="text-sm text-muted-foreground">PO Box: {location.pobox}</p>
                <p className="text-sm text-muted-foreground">
                  Phone: <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="hover:text-brand">{location.phone}</a>
                </p>
                <p className="text-sm text-muted-foreground">
                  Email: <a href={`mailto:${location.email}`} className="hover:text-brand">{location.email}</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
