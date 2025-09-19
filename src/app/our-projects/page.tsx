import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from '@/components/breadcrumb';

export default function OurProjectsPage() {
  return (
    <div className="bg-white text-[#0B0B0B]">
      <main>
        <section className="bg-[#F5F6F6]">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>HOME</BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbPage>PROJECTS</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
                </Breadcrumb>
                <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-light tracking-tight" style={{ lineHeight: 0.95 }}>
                Our Projects
                </h1>
            </div>
        </section>
        <section className="py-12 md:py-20 lg:py-24">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {projects.map((project) => (
                <Link href={`/projects/${project.slug}`} key={project.slug} className="group">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md shadow-md">
                        <Image
                            src={project.hero}
                            alt={`Hero image for ${project.title}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="mt-6">
                        <h2 className="text-2xl font-medium">{project.title}</h2>
                        <p className="text-gray-500">{project.category}</p>
                    </div>
                </Link>
                ))}
            </div>
            </div>
        </section>
      </main>
    </div>
  );
}
