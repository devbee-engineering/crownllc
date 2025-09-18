import Image from "next/image";

export function ImageCard() {
  return (
    <div className="aspect-[3/4] w-full h-auto relative rounded-md shadow-md overflow-hidden">
      <Image
        src="https://picsum.photos/seed/about-us/600/800"
        alt="Modern building with trees and water feature"
        fill
        className="object-cover"
        data-ai-hint="modern architecture"
      />
    </div>
  );
}
