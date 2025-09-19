import Image from 'next/image';

type ProjectHeroProps = {
    image: string;
    category: string;
    title: string;
};

export function ProjectHero({ image, category, title }: ProjectHeroProps) {
  return (
    <section className="relative h-[45vh] md:h-[70vh] w-full">
      <Image
        src={image}
        alt={`Hero image for ${title}`}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 h-full flex items-end p-4 md:p-12">
        <div className="text-white w-full max-w-[1320px] mx-auto">
          <p className="text-sm uppercase tracking-widest">{category}</p>
          <h1 className="mt-2 text-5xl md:text-7xl font-light tracking-tight text-white" style={{ lineHeight: 0.95 }}>
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
