"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowRight, FiImage, FiMaximize2, FiX } from "react-icons/fi";
import { finalRenderHighlights, finalRenderImages } from "@/data/finalRendersData";

const homepageRenders = finalRenderHighlights.slice(0, 12);

export default function FinalRendersSection() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  return (
    <section className="bg-off_white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-12 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-secondary" />

              <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary/75">
                Final Renders
              </p>
            </div>

            <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-primary sm:text-5xl">
              The latest township visuals, masterplans and lifestyle renders.
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-2xl text-base font-medium leading-8 text-primary/75">
              A curated view of the final render library now used across Anondo
              Bhubon pages, with all {finalRenderImages.length} images available
              in the gallery.
            </p>

            <Link
              href="/gallery"
              className="mt-6 inline-flex items-center justify-center gap-3 bg-primary px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-secondary"
            >
              <FiImage className="text-base" />
              View Full Gallery
              <FiArrowRight className="text-base" />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {homepageRenders.map((image, index) => {
            const isFullWidth = index % 3 === 0;

            return (
              <article
                key={image.src}
                className={`group overflow-hidden border border-border_color bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_70px_rgba(44,58,131,0.14)] ${
                  isFullWidth ? "md:col-span-2" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className="block w-full text-left"
                  aria-label={`View ${image.title}`}
                >
                  <div
                    className={`relative overflow-hidden bg-border_color ${
                      isFullWidth ? "aspect-[16/7]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      sizes={
                        isFullWidth
                          ? "(max-width: 768px) 100vw, 1200px"
                          : "(max-width: 768px) 100vw, 50vw"
                      }
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />

                    <div className="absolute left-5 top-5 bg-primary px-3 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center bg-white/95 text-lg text-primary shadow-sm transition duration-300 group-hover:bg-secondary group-hover:text-white">
                      <FiMaximize2 />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
                        {image.label}
                      </p>

                      <h3 className="mt-1 text-xl font-bold leading-tight text-white sm:text-2xl">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary/95 p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close image preview"
              className="absolute -right-1 -top-14 z-10 flex h-11 w-11 items-center justify-center bg-white text-xl text-primary shadow-lg transition hover:bg-secondary hover:text-white sm:right-0"
            >
              <FiX />
            </button>

            <div className="relative h-[72vh] overflow-hidden border border-white/20 bg-white/5 shadow-[0_30px_90px_rgba(44,58,131,0.35)] sm:h-[78vh]">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 flex flex-col gap-2 text-white sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                  {activeImage.label}
                </p>
                <h3 className="mt-1 text-xl font-bold leading-tight sm:text-2xl">
                  {activeImage.title}
                </h3>
              </div>

              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                Click outside or press Esc to close
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
