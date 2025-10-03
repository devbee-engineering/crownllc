import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/breadcrumb";
import { ProjectHero } from "@/components/project-hero";
import { ProjectIntro } from "@/components/project-intro";
import { ProjectFacts } from "@/components/project-facts";
import { ProjectGallery } from "@/components/project-gallery";
import { NextProject } from "@/components/next-project";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white text-[#0B0B0B]">
      <main>
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
            <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">HOME</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/our-projects">PROJECTS</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbPage>{project.title.toUpperCase()}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>
        </div>

        <ProjectHero 
            image={project.hero}
            category={project.category}
            title={project.title}
        />

        <ProjectIntro
            intro={project.intro}
        />

        <ProjectFacts
            metrics={project.metrics}
            specs={project.specs}
        />
        
        <ProjectGallery
            gallery={project.gallery}
        />

        {project.next && (
            <NextProject
                next={project.next}
            />
        )}
      </main>
    </div>
  );
}

export async function generateStaticParams() {
    return projects.map((project) => ({
      slug: project.slug,
    }));
}
