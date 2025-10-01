'use client';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/breadcrumb';
import { ContactForm } from '@/components/contact-form';
import { HeadOfficeCard } from '@/components/head-office-card';
import { LocationsScroller } from '@/components/locations-scroller';
import { locations } from '@/data/locations';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[56vh] md:h-[44vh] w-full flex items-center justify-center text-white">
        <Image
          src="/assets/hero/hero-contact.jpg"
          alt="EMCO head office facade"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full max-w-[1240px] px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList className="text-white/80">
              <BreadcrumbItem>
                <span className="hover:text-white">HOME</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">CONTACT</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mt-4 text-5xl lg:text-7xl font-display tracking-tight text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="py-12 md:py-20">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <HeadOfficeCard />
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-12 md:py-20 bg-gray-50">
         <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-display text-center mb-12">Our Locations</h2>
            <LocationsScroller locations={locations} />
        </div>
      </section>
    </main>
  );
}
