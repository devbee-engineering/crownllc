
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

type GalleryImage = {
    src: string;
    alt: string;
    title: string;
    category: string;
};

type GalleryGridProps = {
    images: GalleryImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
    return (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 lg:gap-8">
            {images.map((image, index) => (
                <motion.div
                    key={`${image.src}-${index}`}
                    className="mb-4 sm:mb-6 lg:mb-8 break-inside-avoid relative group overflow-hidden rounded-md shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-semibold text-lg">{image.title}</h3>
                        <p className="text-sm">{image.category}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
