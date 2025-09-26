
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GalleryImage } from '@/data/gallery';

type GalleryGridProps = {
    images: GalleryImage[];
    showProjectInfo?: boolean;
    className?: string;
};

export function GalleryGrid({ images, showProjectInfo = true, className = "" }: GalleryGridProps) {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 ${className}`}>
            {images.map((image, index) => (
                <motion.div
                    key={image.id || `${image.src}-${index}`}
                    className="relative group overflow-hidden rounded-md shadow-md cursor-pointer aspect-square"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        loading={index < 8 ? "eager" : "lazy"}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {showProjectInfo && (
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="font-semibold text-lg">{image.title}</h3>
                            <p className="text-sm opacity-90">{image.category}</p>
                            {image.tags && image.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {image.tags.slice(0, 3).map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-2 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                    {image.featured && (
                        <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                            Featured
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
