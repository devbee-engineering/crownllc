import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { FooterBrandHeader } from "./footer-brand-header";

type HeaderProps = {
  onMenuClick: () => void;
};

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 md:p-8">
      <div className="flex items-center gap-4 flex-1">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Menu"
          onClick={onMenuClick}
          className="text-primary hover:bg-primary/10 md:hidden"
        >
          <Menu className="size-6" />
        </Button>
        <Logo />
        {/* Navbar - only visible on md and up */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-12 text-base font-medium">
            <li><a href="#about" className="hover:text-primary">HOME</a></li>
            <li><a href="#projects" className="hover:text-primary">ABOUT US</a></li>
            <li><a href="#expertise" className="hover:text-primary">SERVICES</a></li>
            <li><a href="#contact" className="hover:text-primary">CONTACT</a></li>
            <li><a href="#careers" className="hover:text-primary">GALLERY</a></li>
          </ul>
        </nav>
      </div>
      <Button variant="ghost" size="icon" aria-label="Search" className="text-primary hover:bg-primary/10">
        <Search className="size-6" />
      </Button>
    </header>
  );
}
