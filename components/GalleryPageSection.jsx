"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { FiEye } from "react-icons/fi";
import { finalRenderImages } from "@/data/finalRendersData";

export default function GalleryPageSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (idx) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  return (
    <section className="custom-container mx-auto py-16">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">
            Final Render Gallery
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-gray-900 md:text-4xl">
            {finalRenderImages.length} curated visuals from the final renders.
          </h2>
        </div>

        <p className="max-w-lg text-sm leading-7 text-gray-600">
          Explore the latest township renders, masterplan visuals, amenities,
          commercial zones, education anchors and billboard visuals.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {finalRenderImages.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => handleOpen(idx)}
            className="group relative overflow-hidden rounded-md bg-white text-left shadow-sm"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="aspect-[16/10] w-full object-cover transition-all duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute left-4 top-4 rounded bg-primary px-3 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              {item.label}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-base font-bold leading-tight text-white">
                {item.title}
              </h3>
            </div>

            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
              <span className="flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg">
                <FiEye className="text-lg" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={currentIndex}
          slides={finalRenderImages.map((image) => ({
            src: image.src,
            title: image.title,
            description: image.label,
          }))}
          plugins={[Thumbnails, Captions, Zoom, Fullscreen, Slideshow]}
          captions={{ titleTextAlign: "center", descriptionTextAlign: "center" }}
          thumbnails={{ position: "bottom", width: 100, height: 70 }}
        />
      )}
    </section>
  );
}
