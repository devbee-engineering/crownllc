export type GalleryImage = {
    id: string;
    src: string;
    alt: string;
    title: string;
    category: string;
    projectSlug?: string;
    tags?: string[];
    featured?: boolean;
};

export const galleryImages: GalleryImage[] = [
    // Capricorn Tower Images
    {
        id: "capricorn-1",
        src: "/assets/gallery/gallery_image-1.jpg",
        alt: "Interior view of the roof truss structure",
        title: "",
        category: "",
        projectSlug: "capricorn-tower",
        tags: ["interior", "structure", "modern"],
        featured: true
    },
    {
        id: "capricorn-2",
        src: "/assets/gallery/gallery_image-2.jpg",
        alt: "Dusk cityscape view featuring Capricorn Tower",
        title: "",
        category: "",
        projectSlug: "capricorn-tower",
        tags: ["exterior", "cityscape", "dusk"],
        featured: true
    },
    {
        id: "capricorn-3",
        src: "/assets/gallery/gallery_image-3.jpg",
        alt: "Close-up of the building's facade",
        title: "",
        category: "",
        projectSlug: "capricorn-tower",
        tags: ["facade", "architecture", "detail"]
    },
    {
        id: "capricorn-4",
        src: "/assets/gallery/gallery_image-4.jpg",
        alt: "Another close-up view of the facade detailing",
        title: "",
        category: "",
        projectSlug: "capricorn-tower",
        tags: ["facade", "detail", "architecture"]
    },
    {
        id: "capricorn-5",
        src: "/assets/gallery/gallery_image-5.jpg",
        alt: "Modern interior with white ceiling and HVAC systems",
        title: "",
        category: "",
        projectSlug: "capricorn-tower",
        tags: ["interior", "modern", "hvac"]
    },
    {
        id: "capricorn-6",
        src: "/assets/gallery/gallery_image-6.jpg",
        alt: "View of the slim profile of Capricorn Tower",
        title: "",
        category: "",
        projectSlug: "capricorn-tower",
        tags: ["exterior", "profile", "tower"]
    },
    {
        id: "capricorn-7",
        src: "/assets/gallery/gallery_image-7.jpg",
        alt: "Angled shot of the tower's facade",
        title: "",
        category: "",
        projectSlug: "capricorn-tower",
        tags: ["facade", "angle", "architecture"]
    },
    
    // Rolex Tower Images
    {
        id: "rolex-1",
        src: "/assets/gallery/gallery_image-8.jpg",
        alt: "Exterior of Rolex Tower",
        title: "",
        category: "",
        projectSlug: "rolex-tower",
        tags: ["exterior", "luxury", "tower"],
        featured: true
    },
    {
        id: "rolex-2",
        src: "/assets/gallery/gallery_image-9.jpg",
        alt: "High-rise tower at dusk with warm interior lighting",
        title: "",
        category: "",
        projectSlug: "rolex-tower",
        tags: ["dusk", "lighting", "high-rise"]
    },
    
    // Seddiqi Holding HQ Images
    {
        id: "seddiqi-1",
        src: "/assets/gallery/gallery_image-10.jpg",
        alt: "Exterior of Seddiqi Holding HQ",
        title: "",
        category: "",
        projectSlug: "seddiqi-holding-hq",
        tags: ["exterior", "corporate", "modern"]
    },
    {
        id: "seddiqi-2",
        src: "/assets/gallery/gallery_image-11.jpg",
        alt: "Seddiqi Holding HQ facade at dusk",
        title: "",
        category: "",
        projectSlug: "seddiqi-holding-hq",
        tags: ["facade", "dusk", "corporate"]
    },
     {
        id: "seddiqi-3",
        src: "/assets/gallery/gallery_image-12.jpg",
        alt: "Exterior of Seddiqi Holding HQ",
        title: "",
        category: "",
        projectSlug: "seddiqi-holding-hq",
        tags: ["exterior", "corporate", "modern"]
    },
    {
        id: "seddiqi-4",
        src: "/assets/gallery/gallery_image-13.jpg",
        alt: "Seddiqi Holding HQ facade at dusk",
        title: "",
        category: "",
        projectSlug: "seddiqi-holding-hq",
        tags: ["facade", "dusk", "corporate"]
    },
     {
        id: "seddiqi-5",
        src: "/assets/gallery/gallery_image-14.jpg",
        alt: "Exterior of Seddiqi Holding HQ",
        title: "",
        category: "",
        projectSlug: "seddiqi-holding-hq",
        tags: ["exterior", "corporate", "modern"]
    },
    {
        id: "seddiqi-6",
        src: "/assets/gallery/gallery_image-15.jpg",
        alt: "Seddiqi Holding HQ facade at dusk",
        title: "",
        category: "",
        projectSlug: "seddiqi-holding-hq",
        tags: ["facade", "dusk", "corporate"]
    },
     {
        id: "seddiqi-7",
        src: "/assets/gallery/gallery_image-16.jpg",
        alt: "Exterior of Seddiqi Holding HQ",
        title: "",
        category: "",
        projectSlug: "seddiqi-holding-hq",
        tags: ["exterior", "corporate", "modern"]
    },
    {
        id: "seddiqi-8",
        src: "/assets/gallery/gallery_image-17.jpg",
        alt: "Seddiqi Holding HQ facade at dusk",
        title: "",
        category: "",
        projectSlug: "seddiqi-holding-hq",
        tags: ["facade", "dusk", "corporate"]
    },
     {
        id: "seddiqi-9",
        src: "/assets/gallery/gallery_image-18.jpg",
        alt: "Exterior of Seddiqi Holding HQ",
        title: "",
        category: "",
        projectSlug: "seddiqi-holding-hq",
        tags: ["exterior", "corporate", "modern"]
    }
];

// Utility functions for filtering gallery images
export const getFeaturedImages = () => galleryImages.filter(img => img.featured);

export const getImagesByCategory = (category: string) => 
    galleryImages.filter(img => img.category.toLowerCase() === category.toLowerCase());

export const getImagesByProject = (projectSlug: string) => 
    galleryImages.filter(img => img.projectSlug === projectSlug);

export const getImagesByTag = (tag: string) => 
    galleryImages.filter(img => img.tags?.includes(tag));

export const getAllCategories = () => 
    [...new Set(galleryImages.map(img => img.category))];

export const getAllTags = () => 
    [...new Set(galleryImages.flatMap(img => img.tags || []))];