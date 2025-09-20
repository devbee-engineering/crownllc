export type Service = {
    slug: string;
    title: string;
    category: string;
    hero: string;
    intro: { left: string; right1: string; right2?: string };
    metrics: { year: string; area: string; floors: string };
    specs: {
      location: string; type: string; project: string;
      details: string; client: string; architect: string;
      scope: string[];
    };
    gallery: Array<{ src: string; alt: string }>;
    next?: { title: string; slug: string; thumbs: string[] };
};

export const services: Service[] = [
    {
        slug: "capricorn-tower",
        title: "Capricorn Tower",
        category: "Mixed-use",
        hero: "/assets/services/services_image-5.png",
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
            location: "Dubai – Sheikh Zayed Road",
            type: "Mixed-use",
            project: "Capricorn Tower",
            details: "A 46-story mixed-use tower featuring residential apartments, office spaces, and retail outlets, with a distinctive architectural design.",
            client: "Arenco Real Estate LLC",
            architect: "Architects Design / Interiors",
            scope: [
                "Concept design / Architecture","Structure","Mechanical",
                "Electrical & Plumbing","Technology","ID design / Fitout / FF&E",
                "MEP","MEP coordination","Project management","Construction management"
            ],
        },
        gallery: [
            { src: "/assets/services/services_image-1.png", alt: "Interior view of the roof truss structure" },
            { src: "/assets/services/services_image-2.png", alt: "Dusk cityscape view featuring Capricorn Tower" },
            { src: "/assets/services/services_image-3.png", alt: "Close-up of the building's facade" },
            { src: "/assets/services/services_image-4.png", alt: "Another close-up view of the facade detailing" },
            { src: "/assets/services/services_image-5.png", alt: "Modern interior with white ceiling and HVAC systems" },
            { src: "/assets/services/services_image-6.png", alt: "View of the slim profile of Capricorn Tower" },
            { src: "/assets/services/services_image-7.png", alt: "Angled shot of the tower's facade" },
        ],
        next: {
            title: "Burj Al Salam – Sheraton Grand",
            slug: "burj-al-salam-sheraton-grand",
            thumbs: ["/assets/services/services_image-9.png", "/assets/services/services_image-8.png"],
        },
    },
];
