import { notFound } from "next/navigation";
import { services } from "@/data/services";
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

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
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
                    <BreadcrumbLink href="/services">OUR PROJECTS</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbPage>{service.title.toUpperCase()}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>
        </div>

        <ProjectHero 
            image={service.hero}
            category={service.category}
            title={service.title}
        />

        <ProjectIntro
            intro={service.intro}
        />

        <ProjectFacts
            metrics={service.metrics}
            specs={service.specs}
        />
        
        <ProjectGallery
            gallery={service.gallery}
        />

        {service.next && (
            <NextProject
                next={service.next}
            />
        )}
      </main>
    </div>
  );
}

export async function generateStaticParams() {
    return services.map((service) => ({
      slug: service.slug,
    }));
}
