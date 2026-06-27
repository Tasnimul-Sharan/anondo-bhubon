"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMaximize2, FiX } from "react-icons/fi";

const masterplanImages = [
  "/FINAL RENDERS/Masterplan/bhubon leaflet inner bg new HR.jpg",
  "/FINAL RENDERS/Masterplan/Block 1 PREMIUM PLUS.jpg",
  "/FINAL RENDERS/Masterplan/Block 2 PREMIUM PLUS.jpg",
  "/FINAL RENDERS/Masterplan/Block 3 PREMIUM PLUS.jpg",
  "/FINAL RENDERS/Masterplan/Block 4 PREMIUM PLUS.jpg",
  "/FINAL RENDERS/Masterplan/FULL TOP MAP V2 SIDE.jpg",
  "/FINAL RENDERS/Masterplan/PREMIUM 1 BLOCK A.jpg",
  "/FINAL RENDERS/Masterplan/PREMIUM 1 BLOCK B.jpg",
  "/FINAL RENDERS/Masterplan/PREMIUM 1 BLOCK C.jpg",
  "/FINAL RENDERS/Masterplan/PREMIUM 1 BLOCK CENTER.jpg",
  "/FINAL RENDERS/Masterplan/TOP PREMIUM.jpg",
  "/FINAL RENDERS/Masterplan/EXCLUSIVE 1 BLOCK A.jpg",
  "/FINAL RENDERS/Masterplan/EXCLUSIVE 1 BLOCK B.jpg",
  "/FINAL RENDERS/Masterplan/center PREMIUM PLUS.jpg",
  "/FINAL RENDERS/Masterplan/EXCLUSIVE 1 BLOCK C.jpg",
  "/FINAL RENDERS/Masterplan/EXCLUSIVE 1 BLOCK D.jpg",
  "/FINAL RENDERS/Masterplan/EXCLUSIVE 2 CENTER.jpg",
  "/FINAL RENDERS/Masterplan/EXCLUSIVE 2 BLOCK D.jpg",
  "/FINAL RENDERS/Masterplan/EXCLUSIVE 2 CENTER P.jpg",
  "/FINAL RENDERS/Masterplan/PREMIUM PLUS.jpg",
  "/FINAL RENDERS/Masterplan/FOREST WALK 2.jpg",
  "/FINAL RENDERS/Masterplan/FOREST WALK TOP.jpg",
  "/FINAL RENDERS/Masterplan/stadium PREMIUM PLUS 3.jpg",
].map((src) => ({
  src,
  title: formatMasterplanTitle(src),
}));

const fullWidthTitles = new Set(["Full Top Map V2", "Full Top Map V2 Side"]);

function formatMasterplanTitle(src) {
  const acronymWords = new Set(["BG", "HR", "V2"]);

  return (src.split("/").pop() || "Masterplan")
    .replace(/\.(png|jpe?g|webp)$/i, "")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word) => {
      const upper = word.toUpperCase();

      if (acronymWords.has(upper)) return upper;
      if (/^\d+$/.test(word)) return word;
      if (/^[A-Z]$/.test(upper)) return upper;

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

function getCardLayout(image, index) {
  const isFullWidth =
    index === 0 ||
    fullWidthTitles.has(image.title) ||
    (index > 5 && (index - 8) % 3 === 0);
  const isTwoColumn = index > 5 && !isFullWidth;

  return {
    cardClass: isFullWidth
      ? "md:col-span-2"
      : isTwoColumn
        ? ""
        : "",
    aspectClass: isFullWidth
      ? "aspect-[16/7]"
      : isTwoColumn
        ? "aspect-[16/10]"
        : "aspect-[4/3]",
    sizes: isFullWidth
        ? "(max-width: 768px) 100vw, 1400px"
      : isTwoColumn
        ? "(max-width: 768px) 100vw, 50vw"
        : "(max-width: 768px) 100vw, 50vw",
  };
}

export default function MasterplanPageSection() {
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
    <section className="bg-off_white px-6 py-20 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 overflow-hidden border border-border_color bg-white shadow-soft">
          <div className="grid lg:grid-cols-[0.58fr_0.42fr]">
            <div className="p-7 sm:p-9 lg:p-10">
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-12 bg-secondary" />

                <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary/75">
                  Masterplan Visual Library
                </p>
              </div>

              <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-primary sm:text-5xl">
                Full maps, sector blocks and planning visuals in one organized
                view.
              </h2>
            </div>

            <div className="border-t border-border_color bg-primary p-7 text-white sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
              <p className="text-base font-medium leading-8 text-white/78">
                Start with the complete top maps, then review premium blocks,
                exclusive blocks, forest walk visuals and sector centers with
                full-screen image preview.
              </p>

              <div className="mt-7 grid grid-cols-3 gap-3">
                <div className="border border-white/15 bg-white/10 p-4">
                  <p className="text-2xl font-bold text-secondary">
                    {masterplanImages.length}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                    Images
                  </p>
                </div>

                <div className="border border-white/15 bg-white/10 p-4">
                  <p className="text-2xl font-bold text-secondary">2</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                    Full Maps
                  </p>
                </div>

                <div className="border border-white/15 bg-white/10 p-4">
                  <p className="text-2xl font-bold text-secondary">Click</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                    To View
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {masterplanImages.map((image, index) => {
            const layout = getCardLayout(image, index);

            return (
              <article
                key={image.src}
                className={`group overflow-hidden border border-border_color bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_70px_rgba(44,58,131,0.14)] ${
                  layout.cardClass
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveImage({ ...image, index })}
                  className="block w-full text-left"
                  aria-label={`View ${image.title}`}
                >
                  <div
                    className={`relative overflow-hidden bg-border_color ${
                      layout.aspectClass
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      sizes={layout.sizes}
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
                        Masterplan
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
          className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-white/92 px-4 pb-4 pt-16 backdrop-blur-md sm:px-6 sm:pb-6 sm:pt-16"
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
              className="absolute -right-1 -top-12 z-10 flex h-11 w-11 items-center justify-center border border-border_color bg-white text-xl text-primary shadow-sm transition hover:bg-secondary hover:text-white sm:right-0"
            >
              <FiX />
            </button>

            <div className="relative h-[72vh] overflow-hidden border border-border_color bg-white shadow-[0_30px_90px_rgba(44,58,131,0.18)] sm:h-[78vh]">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 border border-border_color bg-white p-4 text-primary shadow-[0_18px_50px_rgba(44,58,131,0.10)] sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div className="flex min-w-0 items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary text-sm font-bold text-white">
                  {String(activeImage.index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <p className="inline-flex bg-secondary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-secondary">
                    Masterplan Preview
                  </p>
                  <h3 className="mt-2 break-words text-xl font-bold leading-tight tracking-[-0.01em] text-primary sm:text-2xl">
                    {activeImage.title}
                  </h3>
                </div>
              </div>

              <p className="mt-4 shrink-0 border-t border-border_color pt-4 text-xs font-bold uppercase tracking-[0.18em] text-primary/55 sm:mt-0 sm:border-l sm:border-t-0 sm:py-3 sm:pl-5">
                Click outside or press Esc to close
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
