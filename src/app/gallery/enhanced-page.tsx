"use client";

import { useState } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbLink,
} from '@/components/breadcrumb';
import { GalleryGrid } from '@/components/gallery-grid';
import { 
    galleryImages, 
    getFeaturedImages, 
    getImagesByCategory, 
    getAllCategories 
} from '@/data/gallery';

export default function EnhancedGalleryPage() {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [filteredImages, setFilteredImages] = useState(galleryImages);
    
    const categories = ['all', 'featured', ...getAllCategories()];
    
    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
        
        switch (filter) {
            case 'all':
                setFilteredImages(galleryImages);
                break;
            case 'featured':
                setFilteredImages(getFeaturedImages());
                break;
            default:
                setFilteredImages(getImagesByCategory(filter));
                break;
        }
    };
    
    return (
        <div className="bg-white text-[#0B0B0B]">
            <main>
                <section className="bg-[#F5F6F6]">
                    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">HOME</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>GALLERY</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-light tracking-tight" style={{ lineHeight: 0.95 }}>
                            Gallery
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                            A selection of our finest work, from ongoing projects to completed landmarks.
                        </p>
                    </div>
                </section>
                
                {/* Filter Section */}
                <section className="py-8 border-b">
                    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap gap-2 md:gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleFilterChange(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize ${
                                        activeFilter === category
                                            ? 'bg-[#0B0B0B] text-white shadow-md'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {category === 'all' ? 'All Projects' : category}
                                    <span className="ml-2 text-xs opacity-75">
                                        ({category === 'all' 
                                            ? galleryImages.length 
                                            : category === 'featured' 
                                                ? getFeaturedImages().length
                                                : getImagesByCategory(category).length
                                        })
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section className="py-12 md:py-20 lg:py-24">
                    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-6">
                            <p className="text-gray-600">
                                Showing {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
                                {activeFilter !== 'all' && ` in ${activeFilter}`}
                            </p>
                        </div>
                        <GalleryGrid images={filteredImages} />
                        {filteredImages.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No images found for the selected filter.</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}