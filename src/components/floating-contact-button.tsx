"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FloatingContactButtonProps = {
  className?: string;
};

export function FloatingContactButton({ className }: FloatingContactButtonProps) {
  return (
    <Link href="/contact">
      <Button
        size="lg"
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#0B0B0B] text-white shadow-lg hover:bg-[#0B0B0B]/90 hover:shadow-xl transition-all duration-300 group",
          className
        )}
        aria-label="Contact us"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </Button>
    </Link>
  );
}