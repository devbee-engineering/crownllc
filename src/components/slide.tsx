"use client";
import type { SlideContent } from "@/lib/slides";
import Image from "next/image";

export function Slide({ slide }: { slide: SlideContent }) {
  return (
    <div className="absolute inset-0 z-0 animate-fade-in">
      <Image
        src={slide.imageUrl}
        alt={slide.description}
        fill
        className="object-cover"
        data-ai-hint={slide.imageHint}
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="w-full max-w-7xl px-4 md:px-8">
          <h1 className="text-5xl font-bold leading-tight text-left md:text-7xl lg:text-8xl max-w-4xl text-primary animate-slide-up [animation-delay:500ms]">
            {slide.headline}
          </h1>
        </div>
      </div>
    </div>
  );
}
