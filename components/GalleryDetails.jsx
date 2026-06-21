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

export default function GalleryDetails({ photo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (idx) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  return (
    <div className="custom-container mx-auto py-24">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="col-span-2 row-span-2 relative overflow-hidden cursor-pointer rounded-md">
          <Image
            src={photo.images[0]}
            alt={`gallery-0`}
            width={800}
            height={600}
            className="w-full h-full object-cover rounded-md transition-all transform duration-700 hover:scale-110"
            onClick={() => handleImageClick(0)}
          />
        </div>

        {photo.images.slice(1).map((img, idx) => (
          <div
            key={idx + 1}
            className="relative overflow-hidden cursor-pointer rounded-md"
          >
            <Image
              src={img}
              alt={`gallery-${idx + 1}`}
              width={400}
              height={300}
              className="w-full h-full object-cover rounded-md transition-all transform duration-700 hover:scale-110"
              onClick={() => handleImageClick(idx + 1)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={photo.images.map((src) => ({ src }))}
          index={currentIndex}
          plugins={[Thumbnails, Captions, Zoom, Fullscreen, Slideshow]}
          thumbnails={{ position: "bottom" }}
          captions={{ position: "below" }}
          zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
          slideshow={{ autoplay: false }}
        />
      )}
    </div>
  );
}
