import Image from 'next/image';

type ImageProps = {
    src: string;
    alt: string;
}

type TwoUpImagesProps = {
    image1: ImageProps;
    image2: ImageProps;
};

export function TwoUpImages({ image1, image2 }: TwoUpImagesProps) {
    return (
        <section className="py-12 md:py-20 lg:py-24">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <div className="relative aspect-square w-full rounded-md shadow-md overflow-hidden">
                        <Image
                            src={image1.src}
                            alt={image1.alt}
                            fill
                            className="object-cover"
                            sizes="(min-width: 768px) 50vw, 100vw"
                        />
                    </div>
                    <div className="relative aspect-[2/3] w-full rounded-md shadow-md overflow-hidden">
                        <Image
                            src={image2.src}
                            alt={image2.alt}
                            fill
                            className="object-cover"
                            sizes="(min-width: 768px) 50vw, 100vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
