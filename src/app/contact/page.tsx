
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from '@/components/breadcrumb';
import { LocationsScroller } from '@/components/locations-scroller';
import { locations } from '@/data/locations';
  
export default function ContactPage() {
    return (
        <div className="bg-white text-[#0B0B0B]">
        <main className="min-h-screen">
          <section className="bg-[#F5F6F6] py-8 md:py-12">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>HOME</BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>CONTACT</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-light tracking-tight" style={{ lineHeight: 0.95 }}>
                Contact
              </h1>
            </div>
          </section>
  
          <section className="py-12 md:py-20 lg:py-24">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <LocationsScroller locations={locations} />
            </div>
          </section>
        </main>
      </div>
    );
}
