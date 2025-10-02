
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from '@/components/breadcrumb';
import { LocationsScroller } from '@/components/locations-scroller';
import { ContactForm } from '@/components/contact-form';
import { locations } from '@/data/locations';
import Image from 'next/image';
  
export default function ContactPage() {
    return (
        <div className="bg-white text-[#0B0B0B]">
        <main className="min-h-screen">
          <section className="relative h-[45vh] md:h-[56vh] w-full">
            <Image
                src="/assets/contact/hero-contact.jpg"
                alt="Contact Us Hero Image"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <Breadcrumb>
                        <BreadcrumbList className="text-white/80">
                        <BreadcrumbItem>
                            <span className="text-white/80">HOME</span>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white/80" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-white">CONTACT</BreadcrumbPage>
                        </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white" style={{ lineHeight: 0.95 }}>
                        Contact Us
                    </h1>
                </div>
            </div>
          </section>

          <section className="py-12 md:py-20 lg:py-24">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <LocationsScroller locations={locations} />
            </div>
          </section>

           <section className="py-12 md:py-20 lg:py-24 bg-[#F5F6F6]">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
              <ContactForm />
            </div>
          </section>
        </main>
      </div>
    );
}
