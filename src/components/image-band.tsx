import Image from 'next/image';

type ImageBandProps = {
    src: string;
    alt: string;
};

export function ImageBand({ src, alt }: ImageBandProps) {
    return (
        <section className="py-12 md:py-20 lg:py-24">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative aspect-[3/2] w-full rounded-md shadow-md overflow-hidden">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 1280px, 100vw"
                    />
                </div>
            </div>
        </section>
    );
}
