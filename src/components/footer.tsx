import Image from "next/image";
import data from "@/lib/placeholder-images.json";
import { HamburgerIcon } from "@/components/hamburger-icon";
import { CaptionOverlay } from "@/components/caption-overlay";
import { FooterBrandHeader } from "@/components/footer-brand-header";
import { Locations } from "@/components/locations";
import { LegalBar } from "@/components/legal-bar";

export function Footer() {
  const footerBg = data.placeholderImages.find((p) => p.id === "footerBg");

  return (
    <footer
      id="locations-heading"
      aria-labelledby="locations-heading-title"
      className="bg-white text-black"
    >
      <h2 id="locations-heading-title" className="sr-only">
        Company locations and footer
      </h2>
      <div className="flex flex-col lg:grid lg:grid-cols-2">
        <div className="relative h-[400px] lg:h-auto">
          {footerBg && (
            <Image
              src={footerBg.imageUrl}
              alt={footerBg.description}
              fill
              className="object-cover"
              data-ai-hint={footerBg.imageHint}
            />
          )}
          <div className="absolute top-1/2 left-8 -translate-y-1/2 z-10 hidden lg:block">
            <HamburgerIcon />
          </div>
          {footerBg && <CaptionOverlay caption="Residence 22, Dubai, UAE" />}
        </div>

        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
            <div className="w-full max-w-5xl mx-auto flex flex-col gap-12 md:gap-16 lg:gap-24">
                <FooterBrandHeader />
                <hr className="border-black/10" />
                <Locations />
                <LegalBar />
            </div>
        </div>
      </div>
    </footer>
  );
}
