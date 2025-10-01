
export type Project = {
    slug: string;
    title: string;
    category: string;   // e.g., Mixed-use
    hero: string;       // /assets/projects/capricorn-tower/hero.jpg
    intro: { left: string; right1: string; right2?: string };
    metrics: { year: string; area: string; floors: string };
    specs: {
      location: string; type: string; project: string;
      details: string; client: string; architect: string;
      scope: string[]; // chip labels
    };
    gallery: Array<{ src: string; alt: string }>;
    next?: { title: string; slug: string; thumbs: string[] };
};

export const projects: Project[] = [
    {
        slug: "capricorn-tower",
        title: "",
        category: "Mixed-use",
        hero: "/assets/services/services_image-1.png",
        intro: {
            left: "The Capricorn Tower, a 46-story mixed-use building, is a significant landmark on Sheikh Zayed Road. Its design integrates residential, commercial, and retail spaces, offering a vibrant urban living experience. The tower's unique architectural form, characterized by its curved facade and distinctive crown, sets it apart in the Dubai skyline.",
            right1: "Our involvement in this project spanned from concept design to final construction management. We implemented innovative engineering solutions to address the complexities of the site and the ambitious design, ensuring the timely delivery of a high-quality, iconic structure that has become synonymous with Dubai's architectural prowess.",
            right2: "The project showcases our ability to handle large-scale, complex developments that combine functionality with aesthetic excellence."
        },
        metrics: {
            year: "2003",
            area: "46,000 m²",
            floors: "B+G+47",
        },
        specs: {
            location: "",
            type: "Mixed-use",
            project: "Capricorn Tower",
            details: "A 46-story mixed-use tower featuring residential apartments, office spaces, and retail outlets, with a distinctive architectural design.",
            client: "Arenco Real Estate LLC",
            architect: "Architects Design / Interiors",
            scope: [
                "Concept design / Interiors", "Architecture", "Exterior/Facade/Fitout", "Technology",
                "Electrical/Plumbing", "MEP", "MEP coordination", "Project management", "Construction management"
            ],
        },
        gallery: [
            { src: "/assets/services/services_image-1.png", alt: "Interior view of the roof truss structure" },
            { src: "/assets/services/services_image-2.png", alt: "Dusk cityscape view featuring Capricorn Tower" },
            { src: "/assets/services/services_image-3.png", alt: "Close-up of the building's facade" },
            { src: "/assets/services/services_image-4.png", alt: "Another close-up view of the facade detailing" },
            { src: "/assets/projects/capricorn-tower/g-05-interior-white.jpg", alt: "Modern interior with white ceiling and HVAC systems" },
            { src: "/assets/projects/capricorn-tower/g-06-slim-tower.jpg", alt: "View of the slim profile of Capricorn Tower" },
            { src: "/assets/projects/capricorn-tower/g-07-facade-angle.jpg", alt: "Angled shot of the tower's facade" },
        ],
        next: {
            title: "Burj Al Salam – Sheraton Grand",
            slug: "burj-al-salam-sheraton-grand",
            thumbs: ["/assets/projects/next-thumb-1.jpg", "/assets/projects/next-thumb-2.jpg"],
        },
    },
    {
        slug: "rolex-tower",
        title: "",
        category: "Mixed-use",
        hero: "/assets/images/header_courosel-2.png",
        intro: {
            left: "The Rolex Tower is another masterpiece on Sheikh Zayed Road, known for its elegant and timeless design. This project required meticulous attention to detail to meet the highest standards of luxury and quality.",
            right1: "As the main contractor, we managed all aspects of construction, delivering a building that is both a commercial success and an architectural icon.",
        },
        metrics: { year: "2010", area: "100,000 m²", floors: "G+59" },
        specs: {
            location: "Dubai – Sheikh Zayed Road",
            type: "Mixed-use",
            project: "Rolex Tower",
            details: "A luxury mixed-use tower with premium apartments and office spaces.",
            client: "Seddiqi & Sons Investment",
            architect: "Skidmore, Owings & Merrill (SOM)",
            scope: ["General Contracting", "Construction Management"],
        },
        gallery: [
            { src: "/assets/images/header_courosel-2.png", alt: "Exterior of Rolex Tower" },
            { src: "/assets/expertise/expertise_image-4.png", alt: "High-rise tower at dusk with warm interior lighting"},
        ],
        next: {
            title: "Capricorn Tower",
            slug: "capricorn-tower",
            thumbs: [],
        },
    },
    {
        slug: "seddiqi-holding-hq",
        title: "",
        category: "Offices",
        hero: "/assets/images/header_courosel-9.png",
        intro: {
            left: "The headquarters for Seddiqi Holding is a state-of-the-art office building designed for a modern workforce.",
            right1: "We provided a full design and build service, creating a collaborative and inspiring work environment.",
        },
        metrics: { year: "2019", area: "25,000 m²", floors: "G+7" },
        specs: {
            location: "Dubai – Sheikh Zayed Road",
            type: "Offices",
            project: "Seddiqi Holding HQ",
            details: "Corporate headquarters with modern amenities.",
            client: "Seddiqi Holding",
            architect: "Internal Design Team",
            scope: ["Full Design & Build"],
        },
        gallery: [
             { src: "/assets/images/header_courosel-9.png", alt: "Exterior of Seddiqi Holding HQ" },
             { src: "/assets/about/about-img-2.png", alt: "Seddiqi Holding HQ facade at dusk" },
        ],
    },
];
