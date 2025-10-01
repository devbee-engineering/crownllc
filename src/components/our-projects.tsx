import { FeaturedProjectCard } from "@/components/featured-project-card";

const projects = [
  {
    title: "",
    category: "Mixed-use",
    location: "",
    imageUrl: "/assets/images/header_courosel-2.png",
    imageHint: "city skyscraper",
  },
  {
    title: "",
    category: "Mixed-use",
    location: "",
    imageUrl: "/assets/images/header_courosel-9.png",
    imageHint: "modern office building",
  },
  {
    title: "O14",
    category: "Offices",
    location: "Dubai - Business Bay",
    imageUrl: "/assets/images/header_courosel-10.png",
    imageHint: "unique architecture",
  },
];

export function OurProjects() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FeaturedProjectCard key={`${project.imageUrl}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
