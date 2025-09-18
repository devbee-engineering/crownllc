import { FeaturedProjectCard } from "@/components/featured-project-card";

const projects = [
  {
    title: "Rolex Tower",
    category: "Mixed-use",
    location: "Dubai - Sheikh Zayed Road",
    imageUrl: "https://picsum.photos/seed/rolex/600/800",
    imageHint: "city skyscraper",
  },
  {
    title: "Seddiqi Holding HQ",
    category: "Offices",
    location: "Dubai - Sheikh Zayed Road",
    imageUrl: "https://picsum.photos/seed/seddiqi/600/800",
    imageHint: "modern office building",
  },
  {
    title: "O14",
    category: "Offices",
    location: "Dubai - Business Bay",
    imageUrl: "https://picsum.photos/seed/o14/600/800",
    imageHint: "unique architecture",
  },
];

export function OurProjects() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <FeaturedProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
