
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbLink,
} from '@/components/breadcrumb';
import { GalleryGrid } from '@/components/gallery-grid';
import { galleryImages } from '@/data/gallery';

export default function GalleryPage() {
  return (
    <div className="bg-white text-[#0B0B0B]">
      <main>
        <section className="bg-[#F5F6F6]">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">HOME</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>OUR WORKS</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
                </Breadcrumb>
                <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-light tracking-tight" style={{ lineHeight: 0.95 }}>
                    Our Works
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                    A selection of our finest work, from ongoing projects to completed landmarks.
                </p>
            </div>
        </section>
        <section className="py-12 md:py-20 lg:py-24">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
                <GalleryGrid images={galleryImages} />
            </div>
        </section>
      </main>
    </div>
  );
}
