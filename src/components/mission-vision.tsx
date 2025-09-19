"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const content = {
    mission: "Our mission is to deliver high-quality, cost-effective projects on schedule by employing and supporting motivated, flexible, and focused teams. We value the importance of our relationships and will continue to remain fair and true in our dealings with all employees, clients, vendors, and partners.",
    vision: "Our vision is to be the leading construction company in our chosen markets, sought after by potential clients and employees for our track record in delivering excellence, and for our commitment to safety, employee development, and community involvement."
};

type Tab = "mission" | "vision";

export function MissionVision() {
    const [activeTab, setActiveTab] = useState<Tab>("mission");

    return (
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
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
                    </div>
                </div>
                <div className="md:col-span-2">
                    <AnimatePresence mode="wait">
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
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
