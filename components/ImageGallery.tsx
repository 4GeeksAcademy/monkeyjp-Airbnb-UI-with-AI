"use client";

import Image from "next/image";
import { useState } from "react";

type ImageGalleryProps = {
  images: string[];
  alt: string;
};

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imageCount = images.length;

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? imageCount - 1 : currentIndex - 1,
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === imageCount - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <div className="space-y-3">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100">
        <Image
          src={images[activeImageIndex]}
          alt={`${alt} - imagen ${activeImageIndex + 1}`}
          fill
          priority
          sizes="(min-width: 768px) 65vw, 100vw"
          className="object-cover"
        />
        <button
          type="button"
          aria-label="Imagen anterior"
          onClick={showPreviousImage}
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg text-zinc-900 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/30"
        >
          &#8592;
        </button>
        <button
          type="button"
          aria-label="Imagen siguiente"
          onClick={showNextImage}
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg text-zinc-900 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/30"
        >
          &#8594;
        </button>
        <span className="absolute bottom-3 right-3 rounded-full bg-zinc-950/75 px-3 py-1 text-xs font-medium text-white">
          {activeImageIndex + 1} / {imageCount}
        </span>
      </div>
    </div>
  );
}
