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
                  <BreadcrumbPage>EXPERTISE</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-light tracking-tight" style={{ lineHeight: 0.95 }}>
              Expertise
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
          title="Full Design & Build"
          col1="Clients appreciate the value of our all-inclusive approach that covers design, production, planning, installation and delivery. A fully-integrated service and strong partnerships with principal contractors, developers, and architects place quality and style at the forefront of forward-thinking design."
          col2="From budgeting and timeline management to architectural and engineering details, we make it happen."
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
          title="General / Contracting & / Construction / Management"
          col1="DCC has a long and proven track record of successful projects in the Middle East. Our team of experienced professionals provides comprehensive construction management services, ensuring that projects are completed on time, within budget, and to the highest standards of quality."
          col2="We are committed to building long-term relationships with our clients based on trust, integrity, and mutual respect."
        />

        <TwoUpImages
          image1={{ src: expertiseImages.detail, alt: expertiseAlts.detail }}
          image2={{ src: expertiseImages.tower, alt: expertiseAlts.tower }}
        />
      </main>
    </div>
  );
}
