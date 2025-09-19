import Image from 'next/image';
import type { Project } from '@/data/projects';

type ProjectGalleryProps = {
  gallery: Project['gallery'];
};

export function ProjectGallery({ gallery }: ProjectGalleryProps) {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Full-width image 1 */}
        {gallery[0] && (
            <div className="relative aspect-[16/9] w-full rounded-md shadow-md overflow-hidden">
                <Image src={gallery[0].src} alt={gallery[0].alt} fill className="object-cover" />
            </div>
        )}

        {/* Full-width image 2 */}
        {gallery[1] && (
            <div className="relative aspect-[16/7] w-full rounded-md shadow-md overflow-hidden">
                <Image src={gallery[1].src} alt={gallery[1].alt} fill className="object-cover" />
            </div>
        )}

        {/* Two-up mosaic 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gallery[2] && (
                <div className="relative aspect-square w-full rounded-md shadow-md overflow-hidden">
                    <Image src={gallery[2].src} alt={gallery[2].alt} fill className="object-cover" />
                </div>
            )}
            {gallery[3] && (
                <div className="relative aspect-square w-full rounded-md shadow-md overflow-hidden">
                    <Image src={gallery[3].src} alt={gallery[3].alt} fill className="object-cover" />
                </div>
            )}
        </div>

        {/* Full-width image 3 */}
        {gallery[4] && (
            <div className="relative aspect-[16/9] w-full rounded-md shadow-md overflow-hidden">
                <Image src={gallery[4].src} alt={gallery[4].alt} fill className="object-cover" />
            </div>
        )}

        {/* Two-up mosaic 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gallery[5] && (
                <div className="relative aspect-[3/4] w-full rounded-md shadow-md overflow-hidden">
                    <Image src={gallery[5].src} alt={gallery[5].alt} fill className="object-cover" />
                </div>
            )}
            {gallery[6] && (
                <div className="relative aspect-[3/4] w-full rounded-md shadow-md overflow-hidden">
                    <Image src={gallery[6].src} alt={gallery[6].alt} fill className="object-cover" />
                </div>
            )}
        </div>

      </div>
    </section>
  );
}
