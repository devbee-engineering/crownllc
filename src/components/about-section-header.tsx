import { ArrowRight } from "lucide-react";

function DccLogo() {
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

export function AboutSectionHeader() {
  return (
    <header className="flex justify-between items-center">
      {/* <DccLogo /> */}
      <div className="flex items-center gap-4">
        <button className="text-sm uppercase tracking-widest text-[#111] font-medium">
          More About Us
        </button>
        <button
          aria-label="More about us"
          className="bg-gray-800 text-white size-9 flex items-center justify-center rounded-md hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>
    </header>
  );
}
