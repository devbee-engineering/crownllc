import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

type NextProjectProps = {
  next: NonNullable<Project['next']>;
};

export function NextProject({ next }: NextProjectProps) {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-[#F5F6F6]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          Next Project
        </p>

        <div className="flex justify-center gap-4 md:gap-8 mb-8">
            {next.thumbs.map((thumb, index) => (
                <div key={index} className="relative w-24 h-32 md:w-40 md:h-52 rounded-md shadow-md overflow-hidden">
                    <Image src={thumb} alt={`Thumbnail ${index+1} for ${next.title}`} fill className="object-cover" />
                </div>
            ))}
        </div>

        <Link href={`/projects/${next.slug}`} className="inline-flex items-center gap-4 group">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#0B0B0B] group-hover:underline">
                {next.title}
            </h2>
            <div className="bg-gray-800 text-white size-9 flex items-center justify-center rounded-md group-hover:opacity-80 transition-opacity">
                <ArrowRight className="size-5" />
            </div>
        </Link>
      </div>
    </section>
  );
}
