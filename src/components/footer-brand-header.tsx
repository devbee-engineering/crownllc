import { Search } from "lucide-react";
import { Logo } from "@/components/logo";

const navItems = ["Home", "About", "Service", "Contact", "Our Works"];

function DccLogoFooter() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-11 w-11"
    >
      <rect
        x="0.5"
        y="0.5"
        width="43"
        height="43"
        rx="8.5"
        stroke="#111111"
        strokeOpacity="0.4"
      />
      <path
        d="M17.6 13V31H15.4V15.2H13V13H17.6ZM25.4 31H23.2V13H25.4V31ZM31 31H28.8V13H31V31Z"
        fill="#0B0B0B"
      />
    </svg>
  );
}


export function FooterBrandHeader() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
      <div className="flex-shrink-0">
        <DccLogoFooter />
      </div>
      <nav aria-label="Footer" className="flex-grow">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-sm uppercase tracking-wider text-black/80 hover:text-black hover:underline"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-shrink-0">
        <button
          aria-label="Search"
          className="size-11 flex items-center justify-center rounded-md border border-black/20 text-black/60 hover:border-black/50 hover:text-black transition-colors"
        >
          <Search className="size-5" />
        </button>
      </div>
    </header>
  );
}
