"use client";

import { useState, useMemo, useEffect } from "react";
import { slides } from "@/lib/slides";
import { Slide } from "@/components/slide";
import { Navigation } from "@/components/navigation";
import { SlideIndicator } from "@/components/slide-indicator";
import { AboutSection } from "@/components/about-section";
import { PortfolioIntro } from "@/components/portfolio-intro";
import { OurProjects } from "@/components/our-projects";
import { ExpertiseSection } from "@/components/expertise-section";
import { FloatingContactButton } from "@/components/floating-contact-button";

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const currentSlide = useMemo(() => slides[currentSlideIndex], [currentSlideIndex]);

  return (
    <div className="bg-white">
      <main className="relative min-h-screen w-full bg-background overflow-hidden">
        <div className="relative w-full h-screen">
          <Slide key={currentSlide.id} slide={currentSlide} />
        </div>

        <Navigation
          onNext={handleNext}
          onPrev={handlePrev}
          canGoNext={true}
          canGoPrev={true}
        />
        <SlideIndicator
          current={currentSlideIndex + 1}
          total={slides.length}
        />
      </main>
      <AboutSection />
      <PortfolioIntro />
      <OurProjects />
      <ExpertiseSection />
      <FloatingContactButton />
    </div>
  );
}
