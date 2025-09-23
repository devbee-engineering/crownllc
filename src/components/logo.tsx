import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className, isScrolled, isHomePage }: { className?: string; isScrolled?: boolean; isHomePage?: boolean; }) {
  const showWhiteLogo = isHomePage && !isScrolled;
  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-72 h-16",
        className
      )}
    >
      <Image
        src={showWhiteLogo ? "/assets/Crown_Web-Logo_big.png" : "/assets/Crown_Web-Logo_big.png"}
        alt="Crown Pillars Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
