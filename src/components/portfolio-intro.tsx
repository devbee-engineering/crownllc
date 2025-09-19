import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { HamburgerIcon } from "@/components/hamburger-icon";
import { FeaturedProjectCard } from "@/components/featured-project-card";
import data from "@/lib/placeholder-images.json";

const featuredProject = {
  title: "Rolex Tower",
  category: "Mixed-use",
  location: "Dubai - Sheikh Zayed Road",
  imageUrl: "https://picsum.photos/seed/rolex/600/800",
  imageHint: "city skyscraper",
};

export function PortfolioIntro() {
  const portfolioBg = data.placeholderImages.find(p => p.id === 'portfolioBg');

  return (
    <section className="bg-white text-black">
      <div className="hidden lg:grid lg:grid-cols-[2fr_1fr_2.5fr] min-h-screen">
        {/* Left Band: Background Image */}
        <div className="relative">
          {portfolioBg && (
            <Image
              src={portfolioBg.imageUrl}
              alt={portfolioBg.description}
              fill
              className="object-cover"
              data-ai-hint={portfolioBg.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 p-8">
            {/* <Logo className="border-gray-800 text-gray-800" /> */}
          </div>
          {portfolioBg && (
             <div className="absolute bottom-8 left-8 z-10 text-white text-sm">
                <p>Four Seasons DIFC, Dubai, UAE</p>
            </div>
          )}
        </div>

        {/* Middle Band: Eyebrow and CTA */}
        <div className="relative flex flex-col justify-center items-center px-4">
          <div className="absolute top-1/4 -translate-y-1/2">
            <p
              className="transform -rotate-90 origin-center whitespace-nowrap text-sm tracking-[0.2em] text-gray-400 font-medium"
            >
              PORTFOLIO
            </p>
          </div>
          <div className="absolute bottom-1/4 right-0 flex flex-col items-end gap-4 -translate-x-1/4">
            <button className="text-sm uppercase tracking-widest text-black font-medium">
              All Projects
            </button>
            <button
              aria-label="View all projects"
              className="bg-gray-800 text-white size-9 flex items-center justify-center rounded-md hover:opacity-80 transition-opacity"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Right Band: Featured Project */}
        <div className="flex items-center justify-center p-8 xl:p-16">
          <FeaturedProjectCard project={featuredProject} />
        </div>
      </div>

      {/* Responsive Layout for Tablet and Mobile */}
      <div className="lg:hidden px-4 sm:px-6 py-12 md:py-16">
        <p className="text-sm tracking-[0.2em] text-gray-400 font-medium mb-8">PORTFOLIO</p>
        <FeaturedProjectCard project={featuredProject} />
         <div className="mt-8 flex justify-center">
            <button className="flex items-center gap-4 group">
              <span className="text-sm uppercase tracking-widest text-black font-medium group-hover:underline">All Projects</span>
              <div
                aria-hidden="true"
                className="bg-gray-800 text-white size-9 flex items-center justify-center rounded-md group-hover:opacity-80 transition-opacity"
              >
                <ArrowRight className="size-5" />
              </div>
            </button>
          </div>
      </div>
    </section>
  );
}
