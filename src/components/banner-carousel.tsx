"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const carouselImages = [
  {
    src: "/assets/images/project-1.jpeg",
    alt: "Contact Banner 1"
  },
  {
    src: "/assets/images/project-2.jpeg", 
    alt: "Contact Banner 2"
  },
  {
    src: "/assets/images/project-3.jpeg",
    alt: "Contact Banner 3"
  },
//   {
//     src: "/assets/images/header_courosel-5.png",
//     alt: "Contact Banner 4"
//   },
//   {
//     src: "/assets/images/header_courosel-6.png",
//     alt: "Contact Banner 5"
//   }
];

interface BannerCarouselProps {
  children: React.ReactNode;
}

export function BannerCarousel({ children }: BannerCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds for more dynamic feel

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[45vh] md:h-[56vh] w-full overflow-hidden">
      {/* Carousel Images */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center">
        {children}
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentImageIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}