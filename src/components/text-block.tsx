"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const content = [
  {
    title: "",
    paragraph:
      "CROWN PILLARS BUILDING CONTRACTING is a fully licensed building contracting company offering complete construction solutions for residential and commercial projects. Our expertise covers design coordination, civil works, structural works, MEP coordination, and finishing works.",
  },
  {
    title: "Our Mission",
    paragraph:
      "To deliver quality construction services that exceed client expectations through professionalism, innovation, and reliability.",
  },
  {
    title: "Our Vision",
    paragraph: "To be recognized as one of the most trusted and innovative contracting companies in the UAE."
  },
  {
    title: "Our Values",
    paragraph: [
      "Integrity: Transparent and ethical business practices",
      "Quality: Attention to detail and superior workmanship",
      "Safety: Committed to a safe work environment for all",
      "Timely Delivery: Projects completed as promised"
    ]
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
            {Array.isArray(currentContent.paragraph) ? (
              <ul className="mt-4 text-base text-gray-600 max-w-[52ch] list-disc pl-6">
                {currentContent.paragraph.map((value: string, idx: number) => (
                  <li key={idx}>{value}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-base text-gray-600 max-w-[52ch]">
                {currentContent.paragraph}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
