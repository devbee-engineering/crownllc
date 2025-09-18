import data from './placeholder-images.json';

type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export type SlideContent = ImagePlaceholder & {
    headline: string;
};

const headlines = [
    "Clients Become Loyalty For Life",
    "Building the Future, Restoring the Past",
    "Where Vision Meets Concrete Reality",
];

export const slides: SlideContent[] = data.placeholderImages.map((image, index) => ({
    ...image,
    headline: headlines[index % headlines.length],
}));
