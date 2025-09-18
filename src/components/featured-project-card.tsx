import Image from "next/image";

type FeaturedProjectCardProps = {
  project: {
    title: string;
    category: string;
    location: string;
    imageUrl: string;
    imageHint: string;
  };
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="bg-white p-2 shadow-md rounded-sm">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.imageHint}
          />
        </div>
      </div>
      <div className="mt-6 px-2 text-black">
        <h3 className="text-3xl md:text-4xl font-light">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-500">
          {project.category} / {project.location}
        </p>
      </div>
    </div>
  );
}
