"use client";

import { AboutSectionHeader } from "@/components/about-section-header";
import { HamburgerIcon } from "@/components/hamburger-icon";
import { ImageCard } from "@/components/image-card";
import { StatBlock } from "@/components/stat-block";
import { TextBlock } from "@/components/text-block";

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-white text-black py-12 md:py-16 lg:py-24"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <AboutSectionHeader />
        <div className="mt-8 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 lg:gap-8 relative">
          <div className="hidden lg:block lg:col-span-1">
            <div className="absolute top-0 -left-4 h-full">
              <HamburgerIcon />
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col">
            <div className="lg:order-1">
              <p className="text-sm uppercase tracking-widest text-gray-500">
                About us
              </p>
              <h2
                id="about-heading"
                className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-none text-[#0B0B0B]"
                style={{ lineHeight: 0.95 }}
              >
                No Two
                <br />
                Solutions Are
                <br />
                The Same
              </h2>
            </div>
            <div className="mt-8 lg:mt-auto lg:order-3">
              <StatBlock number="65+" label="Clients" />
            </div>
            <div className="lg:hidden my-8 lg:order-2">
               <ImageCard />
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4">
             <ImageCard />
          </div>

          <div className="lg:col-span-3 lg:pt-0">
             <TextBlock />
          </div>
        </div>
      </div>
    </section>
  );
}
