import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 md:p-8">
      <Logo />
      <Button variant="ghost" size="icon" aria-label="Search" className="text-primary hover:bg-primary/10">
        <Search className="size-6" />
      </Button>
    </header>
  );
}
