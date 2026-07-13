"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiImage,
  FiMaximize2,
  FiX,
} from "react-icons/fi";

import {
  finalRenderHighlights,
  finalRenderImages,
} from "@/data/finalRendersData";

const homepageRenders = finalRenderHighlights.slice(0, 12);

export default function FinalRendersSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeImage =
    activeIndex !== null ? homepageRenders[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((currentIndex) => {
          if (currentIndex === null) return null;

          return currentIndex === 0
            ? homepageRenders.length - 1
            : currentIndex - 1;
        });
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((currentIndex) => {
          if (currentIndex === null) return null;

          return currentIndex === homepageRenders.length - 1
            ? 0
            : currentIndex + 1;
        });
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const showPreviousImage = () => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return currentIndex === 0
        ? homepageRenders.length - 1
        : currentIndex - 1;
    });
  };

  const showNextImage = () => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return currentIndex === homepageRenders.length - 1
        ? 0
        : currentIndex + 1;
    });
  };

  return (
    <section
      id="final-renders"
      className="relative isolate overflow-hidden bg-[#F4F2ED] py-20 sm:py-24 lg:py-32"
    >
      {/* Premium Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8F6F1_0%,#FFFFFF_48%,#EEF0F7_100%)]" />

        <div className="absolute -left-32 top-20 h-[380px] w-[380px] rounded-full bg-[#F48220]/10 blur-[115px]" />

        <div className="absolute -right-36 bottom-0 h-[500px] w-[500px] rounded-full bg-[#2C3A83]/10 blur-[135px]" />

        <div className="absolute -right-40 top-12 h-[440px] w-[440px] rounded-full border border-[#2C3A83]/[0.06]" />

        <div className="absolute -right-20 top-28 h-[300px] w-[300px] rounded-full border border-[#2C3A83]/[0.07]" />

        <div className="absolute right-8 top-44 h-[150px] w-[150px] rounded-full border border-[#F48220]/10" />

        <div className="absolute left-[7%] top-0 h-full w-px bg-[#2C3A83]/[0.035]" />

        <div className="absolute right-[7%] top-0 h-full w-px bg-[#2C3A83]/[0.035]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#F48220]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F48220]">
                Township Visual Gallery
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#17203A] sm:text-5xl lg:text-[3.65rem]">
              A closer look at the vision of Anondo Bhubon.
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-[15px] font-medium leading-7 text-[#616779] lg:text-right">
              Explore selected township renders, masterplans, landscaped
              environments and lifestyle visuals from our complete collection
              of {finalRenderImages.length} images.
            </p>

            <div className="mt-6 flex lg:justify-end">
              <Link
                href="/gallery"
                className="group inline-flex items-center justify-center gap-3 bg-[#202D72] px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_14px_35px_rgba(44,58,131,0.2)] transition duration-300 hover:bg-[#F48220] hover:shadow-[0_18px_45px_rgba(44,58,131,0.25)]"
              >
                <FiImage className="text-base" />

                <span>View Full Gallery</span>

                <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
{/* Gallery Grid */}
<div className="grid gap-6 md:grid-cols-2">
  {homepageRenders.map((image, index) => {
    // 01, 04, 07, 10 নম্বর image full width হবে
    const isFullWidth = index % 3 === 0;

    return (
      <article
        key={`${image.title}-${index}`}
        className={`group overflow-hidden border border-[#2C3A83]/10 bg-white shadow-[0_14px_45px_rgba(27,35,75,0.07)] transition duration-500 hover:-translate-y-1.5 hover:border-[#F48220]/55 hover:shadow-[0_26px_70px_rgba(27,35,75,0.15)] ${
          isFullWidth ? "md:col-span-2" : ""
        }`}
      >
        <button
          type="button"
          onClick={() => setActiveIndex(index)}
          className="block w-full text-left"
          aria-label={`View ${image.title}`}
        >
          <div
            className={`relative overflow-hidden bg-[#E8EAF1] ${
              isFullWidth
                ? "aspect-[16/9] sm:aspect-[16/7]"
                : "aspect-[4/3]"
            }`}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              priority={index < 3}
              sizes={
                isFullWidth
                  ? "(min-width: 768px) 100vw, 100vw"
                  : "(min-width: 768px) 50vw, 100vw"
              }
              className="object-cover transition duration-700 group-hover:scale-[1.045]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,32,58,0.02)_20%,rgba(23,32,58,0.18)_55%,rgba(23,32,58,0.9)_100%)]" />

            {/* Number */}
            <div
              className={`absolute left-5 top-5 flex items-center justify-center bg-[#202D72] font-bold text-white shadow-[0_10px_25px_rgba(22,31,77,0.28)] transition duration-300 group-hover:bg-[#F48220] ${
                isFullWidth
                  ? "h-12 w-12 text-sm sm:left-7 sm:top-7"
                  : "h-11 w-11 text-xs"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Expand Icon */}
            <div
              className={`absolute right-5 top-5 flex items-center justify-center border border-white/20 bg-white/90 text-[#202D72] backdrop-blur-md transition duration-300 group-hover:bg-[#F48220] group-hover:text-white ${
                isFullWidth
                  ? "h-12 w-12 text-xl sm:right-7 sm:top-7"
                  : "h-11 w-11 text-lg"
              }`}
            >
              <FiMaximize2 />
            </div>

            {/* Content */}
            <div
              className={`absolute inset-x-0 bottom-0 ${
                isFullWidth ? "p-6 sm:p-8 lg:p-10" : "p-6"
              }`}
            >
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F7A55A]">
                    {image.label}
                  </p>

                  <h3
                    className={`mt-2 font-semibold leading-tight tracking-[-0.025em] text-white ${
                      isFullWidth
                        ? "max-w-3xl text-2xl sm:text-3xl lg:text-4xl"
                        : "text-xl sm:text-2xl"
                    }`}
                  >
                    {image.title}
                  </h3>
                </div>

                {isFullWidth && (
                  <div className="hidden items-center gap-3 sm:flex">
                    <span className="h-px w-12 bg-[#F48220]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                      Featured Visual
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </button>
      </article>
    );
  })}
</div>

        {/* Bottom Gallery CTA */}
        <div className="mt-10 flex flex-col gap-5 border border-[#2C3A83]/10 bg-white p-6 shadow-[0_14px_45px_rgba(27,35,75,0.06)] sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F48220]">
              Complete Visual Library
            </p>

            <p className="mt-2 text-base font-semibold text-[#20263A]">
              Discover all masterplans, residences and lifestyle renders.
            </p>
          </div>

          <Link
            href="/gallery"
            className="group inline-flex shrink-0 items-center justify-center gap-3 border border-[#2C3A83]/15 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[#2C3A83] transition duration-300 hover:border-[#2C3A83] hover:bg-[#2C3A83] hover:text-white"
          >
            <span>Explore Gallery</span>

            <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Image Preview Modal */}
      {activeImage && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#10162D]/95 p-4 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F7A55A]">
                  {activeImage.label}
                </p>

                <h3 className="mt-1 truncate text-lg font-semibold text-white sm:text-2xl">
                  {activeImage.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close image preview"
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-white/10 text-xl text-white transition hover:border-[#F48220] hover:bg-[#F48220]"
              >
                <FiX />
              </button>
            </div>

            {/* Preview Image */}
            <div className="relative h-[65vh] overflow-hidden border border-white/10 bg-black/20 shadow-[0_35px_100px_rgba(0,0,0,0.4)] sm:h-[75vh]">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />

              {/* Previous Button */}
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label="View previous image"
                className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/90 text-2xl text-[#202D72] shadow-lg transition hover:bg-[#F48220] hover:text-white sm:left-5 sm:h-14 sm:w-14"
              >
                <FiChevronLeft />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={showNextImage}
                aria-label="View next image"
                className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/90 text-2xl text-[#202D72] shadow-lg transition hover:bg-[#F48220] hover:text-white sm:right-5 sm:h-14 sm:w-14"
              >
                <FiChevronRight />
              </button>
            </div>

            {/* Modal Footer */}
            <div className="mt-4 flex flex-col gap-4 border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center bg-[#F48220] text-xs font-bold text-white">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                    Gallery Preview
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    {activeIndex + 1} of {homepageRenders.length}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={showPreviousImage}
                  className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white hover:text-[#202D72]"
                >
                  <FiArrowLeft />
                  Previous
                </button>

                <button
                  type="button"
                  onClick={showNextImage}
                  className="inline-flex items-center gap-2 bg-[#F48220] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#202D72]"
                >
                  Next
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}