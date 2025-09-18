import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HamburgerMenu() {
  return (
    <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-20">
      <Button variant="ghost" size="icon" aria-label="Menu" className="text-primary hover:bg-primary/10">
        <Menu className="size-8" />
      </Button>
    </div>
  );
}
