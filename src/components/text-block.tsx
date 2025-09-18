"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const content = [
  {
    title: "Honest And Honourable People",
    paragraph:
      "These values are extremly important to us. When we handshake, we’re making a promise – and we stick to it.",
  },
  {
    title: "Meticulous in the Middle East",
    paragraph:
      "DCC is the pinnacle of detail, drive and a desire for design. Our innovative techniques continually raise the bar in construction expertise and excellence.",
  },
  {
    title: "Building a Better Future",
    paragraph: "We are committed to sustainable practices that protect our planet for future generations. Our projects are built to last and to inspire."
  }
];

export function TextBlock() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % content.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + content.length) % content.length);
  };

  const currentContent = content[index];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={handlePrev}
          aria-label="Previous item"
          className="text-black/40 hover:text-black transition-colors"
        >
          <ArrowLeft className="size-6" />
        </button>
        <div className="w-8 h-px bg-black/20"></div>
        <button
          onClick={handleNext}
          aria-label="Next item"
          className="text-black/40 hover:text-black transition-colors"
        >
          <ArrowRight className="size-6" />
        </button>
      </div>
      
      <div className="relative flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <h3 className="text-3xl font-light text-[#0B0B0B]">
              {currentContent.title}
            </h3>
            <p className="mt-4 text-base text-gray-600 max-w-[52ch]">
              {currentContent.paragraph}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
