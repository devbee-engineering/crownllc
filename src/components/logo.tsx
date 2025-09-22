import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-40 h-20",
        className
      )}
    >
      <Image
        src="/assets/logo.png"
        alt="Crown Pillars Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
