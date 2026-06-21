"use client";
import { SlideshowLightbox } from "lightbox.js-react";
import SectionHeader from "./SectionHeader";
// import "lightbox.js-react/style.css";

export default function Gallery() {
  const gallery = [
    { img: "/gallery/gallery1.jpg", date: "12 January 2025" },
    { img: "/gallery/gallery2.jpg", date: "18 January 2025" },
    { img: "/gallery/gallery3.jpg", date: "02 February 2025" },
    { img: "/gallery/gallery4.jpg", date: "05 February 2025" },
    { img: "/gallery/gallery5.jpg", date: "10 February 2025" },
    { img: "/gallery/gallery6.jpg", date: "15 February 2025" },
    { img: "/gallery/gallery7.jpg", date: "18 February 2025" },
    { img: "/gallery/gallery8.jpg", date: "20 February 2025" },
    { img: "/gallery/gallery9.jpg", date: "22 February 2025" },
    { img: "/gallery/gallery10.jpg", date: "25 February 2025" },
    { img: "/gallery/gallery11.jpg", date: "28 February 2025" },
    { img: "/gallery/gallery12.jpg", date: "12 March 2025" },
    { img: "/gallery/gallery13.jpg", date: "20 March 2025" },
    { img: "/gallery/gallery14.jpg", date: "25 March 2025" },
  ];
  return (
    <div className="custom-container mx-auto py-16">
      <SectionHeader
        subtitle="Our Works"
        title="Explore Our Gallery"
        details="Take a look at our security operations, events, and on-field activities that highlight our commitment to safety and protection."
      />

      <SlideshowLightbox
        modalClose="clickOutside"
        showThumbnails={true}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {gallery.map((item, idx) => (
          <img
            key={idx}
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover rounded-md hover:scale-105 transition-all duration-500"
          />
        ))}
      </SlideshowLightbox>
    </div>
  );
}
