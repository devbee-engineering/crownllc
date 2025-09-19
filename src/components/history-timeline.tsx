"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { aboutImages, aboutAlts } from "@/data/about";

export function HistoryTimeline() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % aboutImages.timeline.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + aboutImages.timeline.length) % aboutImages.timeline.length);
  };

  const currentItem = aboutImages.timeline[index];
  const prevItem = aboutImages.timeline[(index - 1 + aboutImages.timeline.length) % aboutImages.timeline.length];

  return (
    <div className="relative">
      <div className="flex justify-end items-center mb-8">
        <div className="flex items-center gap-4">
            <button onClick={handlePrev} aria-label="Previous history item" className="text-black/40 hover:text-black transition-colors">
                <ArrowLeft />
            </button>
            <div className="w-8 h-px bg-black/20"></div>
            <button onClick={handleNext} aria-label="Next history item" className="text-black/40 hover:text-black transition-colors">
                <ArrowRight />
            </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        <div className="text-center md:text-left order-2 md:order-1">
          <div className="inline-block relative">
            <span className="absolute top-1/2 -left-4 -translate-y-1/2 h-16 w-px bg-black/20"></span>
            <p className="text-5xl md:text-7xl font-light">{prevItem.year}</p>
          </div>
        </div>
        <div className="relative aspect-[6/7] order-1 md:order-2">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={currentItem.image}
                        alt={currentItem.title || aboutAlts.h1967}
                        fill
                        className="object-cover rounded-md shadow-lg"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
        <div className="text-center md:text-right order-3">
          <div className="inline-block relative">
            <span className="absolute top-1/2 -right-4 -translate-y-1/2 h-16 w-px bg-black/20"></span>
            <p className="text-5xl md:text-7xl font-light">{currentItem.year}</p>
          </div>
        </div>
      </div>
       <div className="mt-8 text-center md:max-w-xl mx-auto">
            <AnimatePresence mode="wait">
                 <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                 >
                    {currentItem.title && <h3 className="text-2xl font-medium">{currentItem.title} - {currentItem.city}</h3>}
                    {currentItem.body && <p className="mt-2 text-gray-600">{currentItem.body}</p>}
                 </motion.div>
            </AnimatePresence>
       </div>
    </div>
  );
}
