"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const content = {
    mission: "To deliver quality construction services that exceed client expectations through professionalism, innovation, and reliability.",
    vision: "To be recognized as one of the most trusted and innovative contracting companies in the UAE.",
    values: [
        "Integrity: Transparent and ethical business practices",
        "Quality: Attention to detail and superior workmanship",
        "Safety: Committed to a safe work environment for all",
        "Timely Delivery: Projects completed as promised",
    ],
};

type Tab = "mission" | "vision" | "values";

export function MissionVision() {
    const [activeTab, setActiveTab] = useState<Tab>("mission");

    return (
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Accordion View */}
            <div className="block md:hidden">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="mission" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="text-2xl font-light px-6 py-4 hover:no-underline">
                            Mission
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                            <p className="text-base text-gray-700 leading-relaxed">
                                {content.mission}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="vision" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="text-2xl font-light px-6 py-4 hover:no-underline">
                            Vision
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                            <p className="text-base text-gray-700 leading-relaxed">
                                {content.vision}
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="values" className="border border-gray-200 rounded-lg">
                        <AccordionTrigger className="text-2xl font-light px-6 py-4 hover:no-underline">
                            Our Values
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                            <ul className="list-disc pl-6 text-base text-gray-700 leading-relaxed">
                                {content.values.map((value, idx) => (
                                    <li key={idx}>{value}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Desktop Tab View */}
            <div className="hidden md:block">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                    <div className="md:col-span-1">
                        <div className="flex md:flex-col gap-8">
                            <button 
                                onClick={() => setActiveTab("mission")}
                                className={cn(
                                    "text-3xl md:text-4xl font-light transition-colors",
                                    activeTab === 'mission' ? 'text-[#0B0B0B]' : 'text-gray-300 hover:text-gray-500'
                                )}
                            >
                                Mission
                            </button>
                            <button 
                                onClick={() => setActiveTab("vision")}
                                className={cn(
                                    "text-3xl md:text-4xl font-light transition-colors",
                                    activeTab === 'vision' ? 'text-[#0B0B0B]' : 'text-gray-300 hover:text-gray-500'
                                )}
                            >
                                Vision
                            </button>
                            <button 
                                onClick={() => setActiveTab("values")}
                                className={cn(
                                    "text-3xl md:text-4xl font-light transition-colors",
                                    activeTab === 'values' ? 'text-[#0B0B0B]' : 'text-gray-300 hover:text-gray-500'
                                )}
                            >
                                Our Values
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <AnimatePresence mode="wait">
                            {activeTab !== "values" ? (
                                <motion.p
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-base md:text-lg text-gray-700 leading-relaxed max-w-prose"
                                >
                                    {content[activeTab]}
                                </motion.p>
                            ) : (
                                <motion.ul
                                    key="values"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="list-disc pl-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-prose"
                                >
                                    {content.values.map((value, idx) => (
                                        <li key={idx}>{value}</li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
