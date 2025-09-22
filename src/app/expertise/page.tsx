import Image from 'next/image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/breadcrumb';
import { HamburgerGutter } from '@/components/hamburger-gutter';
import { ExpertiseIntro } from '@/components/expertise-intro';
import { ExpertiseBlock } from '@/components/expertise-block';
import { ImageBand } from '@/components/image-band';
import { TwoUpImages } from '@/components/two-up-images';
import { Separator } from '@/components/ui/separator';
import { expertiseImages, expertiseAlts, expertiseDetails } from '@/data/expertise';

export default function ExpertisePage() {
  return (
    <div className="bg-white text-[#0B0B0B]">
      {/* <HamburgerGutter /> */}
      <main>
        {/* Hero Section */}
        <section className="bg-[#F5F6F6]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">HOME</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>SERVICES</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-light tracking-tight" style={{ lineHeight: 0.95 }}>
              Services
            </h1>
          </div>
          <div className="mt-8">
            <Image
              src={expertiseImages.hero}
              alt={expertiseAlts.hero}
              width={2400}
              height={900}
              priority
              className="w-full h-auto object-cover max-h-[700px]"
            />
          </div>
        </section>

        <ExpertiseIntro />

        <ExpertiseBlock
          index="01"
          title="Residential Building"
          col1="Our Residential Buildings Division focuses on delivering high-quality villa construction, townhouses, and low-rise residential projects tailored to our clients’ unique needs. We handle the entire process — from planning and design coordination to structural works, MEP installations, and premium finishing — ensuring every home we build is beautiful, durable, and compliant with UAE building codes."
          col2="Our team works closely with homeowners, architects, and consultants to create custom-designed living spaces that combine functionality, modern aesthetics, and long-term value. Whether it’s a luxury villa or a small residential complex, we prioritize quality workmanship, on-time delivery, and cost-efficient solutions."
        />

        <section className="py-12 md:py-20 lg:py-24">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                {expertiseDetails.map((detail, index) => (
                    <div key={index}>
                        <Separator className="bg-[#E4E6E7] mb-8" />
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-1">
                                <h3 className="text-2xl md:text-3xl font-medium">{detail.title}</h3>
                            </div>
                            <div className="lg:col-span-2">
                                <p className="text-base text-gray-700 leading-relaxed max-w-prose">{detail.body}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <ImageBand
          src={expertiseImages.lobby}
          alt={expertiseAlts.lobby}
        />

        <ExpertiseBlock
          index="02"
          title="Commercial & Industrial Buildings "
          col1="Our Commercial & Industrial Buildings Division specializes in delivering high-performance spaces that support business operations and drive efficiency. From office buildings and retail outlets to warehouses, factories, and showrooms, we offer complete turnkey solutions that include design coordination, structural works, MEP installations, and interior finishing."
          col2="We work closely with consultants and business owners to ensure that every facility is functional, compliant with UAE regulations, and optimized for productivity. Whether you need a single warehouse or a full-scale industrial facility, we provide robust, durable, and cost-efficient solutions that meet your business goals."
        />

        <TwoUpImages
          image1={{ src: expertiseImages.detail, alt: expertiseAlts.detail }}
          image2={{ src: expertiseImages.tower, alt: expertiseAlts.tower }}
        />
      </main>
    </div>
  );
}
