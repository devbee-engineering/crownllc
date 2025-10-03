
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from '@/components/breadcrumb';
import { ContactForm } from '@/components/contact-form';
import { HeadOfficeCard } from '@/components/head-office-card';
import { BannerCarousel } from '@/components/banner-carousel';
import Image from 'next/image';
  
export default function ContactPage() {
    return (
        <div className="bg-white text-[#0B0B0B]">
        <main className="min-h-screen">
          <BannerCarousel>
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
          </BannerCarousel>

           <section className="py-12 md:py-20 lg:py-24 bg-[#F5F6F6]">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-light text-blue-900">Connect With Us</h2>
                <p className="mt-2 text-gray-600">Fill in your details and we’ll get back to you.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7">
                    <ContactForm />
                </div>
                <div className="lg:col-span-5">
                    <HeadOfficeCard />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
}
