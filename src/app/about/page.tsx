import Image from 'next/image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/breadcrumb';
import { HamburgerGutter } from '@/components/hamburger-gutter';
import { StatsRow } from '@/components/stats-row';
import { TwoColCopy } from '@/components/two-col-copy';
import { aboutImages, aboutStats, aboutMilestones, aboutServices, aboutAlts } from '@/data/about';
import { ServiceAccordion } from '@/components/service-accordion';
import { MissionVision } from '@/components/mission-vision';
import { HistoryTimeline } from '@/components/history-timeline';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { WhyChooseUs } from '@/components/why-choose-us';

export default function AboutPage() {
  return (
    <div className="bg-white text-[#0B0B0B]">
      {/* <HamburgerGutter /> */}
      <main>
        {/* Hero Section */}
        <section className="bg-[#F5F6F6]">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>HOME</BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>ABOUT US</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-light tracking-tight" style={{ lineHeight: 0.95 }}>
              About Us
            </h1>
          </div>
          <div className="mt-8">
            <Image
              src={aboutImages.hero}
              alt={aboutAlts.hero}
              width={2400}
              height={700}
              priority
              className="w-full h-auto object-cover max-h-[700px]"
            />
          </div>
        </section>

        {/* Who is DCC? Section */}
        <section className="py-12 md:py-20 lg:py-24">
           <div className="relative mb-12 md:mb-20 lg:mb-24">
             <Image 
                src={aboutImages.whoBand}
                alt={aboutAlts.whoBand}
                width={2400}
                height={600}
                className="w-full h-auto object-cover max-h-[600px]"
             />
           </div>
          <TwoColCopy />
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Stats & Milestones Grid Section */}
        <section className="py-12 md:py-20 lg:py-24">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <StatsRow items={aboutStats} className="mb-16 md:mb-24 justify-center" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="flex flex-col">
                <StatsRow items={aboutMilestones} className="mb-8" />
                <Image
                  src={aboutImages.gridLeft}
                  alt={aboutAlts.gridLeft}
                  width={1440}
                  height={900}
                  className="w-full h-auto object-cover rounded-md shadow-md"
                />
              </div>
              <div className="w-full">
                <Image
                  src={aboutImages.gridRight}
                  alt={aboutAlts.gridRight}
                  width={1080}
                  height={1600}
                  className="w-full h-auto object-cover rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Accordion Section */}
        <section className="py-12 md:py-20 lg:py-24 relative">
             <Image 
                src={aboutImages.wood}
                alt={aboutAlts.wood}
                fill
                className="object-cover z-0"
            />
            <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-sm py-16 rounded-md shadow-lg">
                <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">Crown Pillars Does It All And More</h2>
                <ServiceAccordion items={aboutServices} />
            </div>
        </section>

        {/* Mission/Vision Section */}
        <section className="py-12 md:py-20 lg:py-24 bg-white">
            <div className="mb-12 md:mb-20 lg:mb-24">
                <Image
                    src={aboutImages.missionHero}
                    alt={aboutAlts.missionHero}
                    width={2400}
                    height={1200}
                    className="w-full h-auto object-cover max-h-[800px]"
                />
            </div>
            <MissionVision />
        </section>

        {/* History Timeline Section */}
        {/* <section className="py-12 md:py-20 lg:py-24 bg-[#F5F6F6]">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="flex justify-between items-center mb-16">
                    <SectionEyebrow>OUR HISTORY</SectionEyebrow>
                 </div>
                <HistoryTimeline />
            </div>
        </section> */}
      </main>
    </div>
  );
}
