"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiLoader,
  FiMaximize2,
  FiRefreshCw,
  FiX,
} from "react-icons/fi";
import { ANIMATIONS_ENABLED, useNoMotion } from "@/Hooks/useNoMotion";
import { finalRenderAssets } from "@/data/finalRendersData";

// Visual gallery mapping for sub-sections inside Master Plan documents.
// Keyed by subheading prefix so additional folders can be plugged in seamlessly.
const SUBGROUP_GALLERIES = {
  "Premium Plus": {
    eyebrow: "Premium Plus Sector",
    images: [
      {
        src: "/anondo bhubon New/PREMIUM PLUS/premium-plus-sector.jpg",
        label: "Sector Master Plan",
        title: "Premium Plus Sector — Master Plan",
        isMap: true,
      },
      {
        src: "/anondo bhubon New/PREMIUM PLUS/COURTYARD PLOT (3)x.jpg",
        label: "Courtyard Living",
        title: "Courtyard Plot — Perspective 03",
      },
      {
        src: "/anondo bhubon New/PREMIUM PLUS/COURTYARD PLOT (4)x.jpg",
        label: "Courtyard Living",
        title: "Courtyard Plot — Perspective 04",
      },
      {
        src: "/anondo bhubon New/PREMIUM PLUS/RIVER VIEW PREMIUM PLUS (1)x.jpg",
        label: "Waterfront Living",
        title: "River View Premium Plus — View 01",
      },
      {
        src: "/anondo bhubon New/PREMIUM PLUS/RIVER VIEW PREMIUM PLUS (2)x.jpg",
        label: "Waterfront Living",
        title: "River View Premium Plus — View 02",
      },
      {
        src: "/anondo bhubon New/PREMIUM PLUS/premium-plus-sports-field-community-gardens.jpeg",
        label: "Sports & Green Spaces",
        title: "Sports Field & Community Gardens",
      },
      {
        src: "/anondo bhubon New/PREMIUM PLUS/premium-plus-community-facilities-aerial-layout.jpeg",
        label: "Community Amenities",
        title: "Community Facilities — Aerial Layout",
      },
      {
        src: "/anondo bhubon New/PREMIUM PLUS/STADIUM PREMIUM PLUSx.jpg",
        label: "Sports & Recreation",
        title: "Stadium — Premium Plus Sector",
        wide: true,
      },
    ],
  },
  Premium: {
    eyebrow: "Premium Sector",
    images: [
      {
        src: "/anondo bhubon New/PREMIUM 1/premium-sector-1.jpg",
        label: "Sector Master Plan",
        title: "Premium Sector 1",
        isMap: true,
      },
      {
        src: "/anondo bhubon New/PREMIUM 1/premium-sector-2.png",
        label: "Sector Master Plan",
        title: "Premium Sector 2",
        isMap: true,
      },
      {
        src: "/anondo bhubon New/PREMIUM 1/TOP PREMIUM.jpg",
        label: "Sector Master Plan",
        title: "Premium Sector — Complete Top Layout",
      },
      {
        src: "/anondo bhubon New/PREMIUM 1/PREMIUM 1 CENTER.jpg",
        label: "Sector Center",
        title: "Premium 1 — Sector Central Hub",
      },
      {
        src: "/anondo bhubon New/PREMIUM 1/PREMIUM 1 BLOCK A-1.jpeg",
        label: "Residential Block",
        title: "Premium 1 — Block A",
      },
      {
        src: "/anondo bhubon New/PREMIUM 1/PREMIUM 1 BLOCK A-2.jpeg",
        label: "Residential Block",
        title: "Premium 1 — Block B",
      },
      {
        src: "/anondo bhubon New/2- 20 BIGHA CENTRAL AMENITIES/FOREST WALK PREMIUM 1  (1)xx.jpg",
        label: "Green Corridor",
        title: "Forest Walk — Premium Sector",
      },
      {
        src: "/anondo bhubon New/2- 20 BIGHA CENTRAL AMENITIES/Community Space.jpg",
        label: "Sports & Recreation",
        title: "Community Space — Premium Sector",
      },
    ],
  },
  Executive: {
    eyebrow: "Executive Sector",
    images: [
      {
        src: "/anondo bhubon New/EXCLUSIVE/Exclusive-Sector-1.jpg",
        label: "Sector Master Plan",
        title: "Exclusive Sector 1",
        isMap: true,
      },
      {
        src: "/anondo bhubon New/EXCLUSIVE/Exclusive-Sector-2.jpg",
        label: "Sector Master Plan",
        title: "Exclusive Sector 2",
        isMap: true,
      },
      {
        src: "/anondo bhubon New/2- 20 BIGHA CENTRAL AMENITIES/STADIUM EXCLUSIVE 1 (1)x.jpg",
        label: "Sports & Recreation",
        title: "Stadium — Executive Sector",
      },
      {
        src: "/anondo bhubon New/2- 20 BIGHA CENTRAL AMENITIES/HIGH SCHOOL (2)x.jpg",
        label: "Education",
        title: "High School — Campus View",
      },
    ],
  },
  General: {
    eyebrow: "General Sector",
    images: [
      {
        src: "/anondo bhubon New/GENERAL/General-Sector-1.png",
        label: "Sector Master Plan",
        title: "General Sector 1",
        isMap: true,
      },
      {
        src: "/anondo bhubon New/GENERAL/General-Sector-2.png",
        label: "Sector Master Plan",
        title: "General Sector 2",
        isMap: true,
      },
      {
        src: "/anondo bhubon New/GENERAL/general-sector-central-hub-aerial-layout.jpg",
        label: "Sector Central Hub",
        title: "General Sector — Central Hub & Community Amenities",
      },
    ],
  },
};

function getSubgroupGallery(headingText = "") {
  for (const [prefix, gallery] of Object.entries(SUBGROUP_GALLERIES)) {
    if (
      headingText === prefix ||
      headingText.startsWith(`${prefix} —`) ||
      headingText.startsWith(`${prefix} -`)
    ) {
      return gallery;
    }
  }
  return null;
}

// Visual only (no words): full-width image bands placed between chapters, per page.
// `ratio` is the desktop width/height, `mobileRatio` the phone one. Parallax overscan
// crops vertically, so plans/maps keep `parallax: false` to stay fully visible.
const band = (src, ratio = 1.6, extra = {}) => ({ src, ratio, mobileRatio: 1.2, parallax: true, ...extra });
const pageBands = {
  "residential-development": [],
  "development-phasing": [
    band(finalRenderAssets.masterplan, 2.14, { parallax: false, mobileRatio: 1.3, position: "70% 50%" }),
    band(finalRenderAssets.amenities, 1.6),
    band(finalRenderAssets.location, 1.6),
  ],
  "transportation-utilities": [
    band("/road/road-network-plan.jpg", 1.6, { parallax: false }),
    band("/road/pedestrian-network-plan.jpg", 1.6, { parallax: false }),
    band("/road/road.jpg", 1.78),
  ],
  "education-healthcare": [
    band("/anondo bhubon New/CBD FACILITIES/CBD DOWNTOWN (2)x.jpg", 5773 / 2790, {
      afterSection: 4,
      mobileRatio: 5773 / 2790,
      parallax: false,
      alt: "Connected township streets, pedestrian paths and public transport facilities",
    }),
    band("/anondo bhubon New/BLOCK- COMMUNITY GATHERING AMENITIES/COMMUNITY LAKE 3x.jpg", 4883 / 3299, {
      afterSection: 5,
      mobileRatio: 4883 / 3299,
      parallax: false,
      alt: "Families enjoying the landscaped community lake",
    }),
    band("/anondo bhubon New/CBD FACILITIES/RIVER SIDE 1x.jpg", 4749 / 3392, {
      afterSection: 6,
      mobileRatio: 4749 / 3392,
      parallax: false,
      alt: "Riverside walking and leisure spaces beside the township's commercial centre",
    }),
    band("/anondo bhubon New/PREMIUM PLUS/COURTYARD PLOT (5)x.jpg", 5841 / 5645, {
      afterSection: 7,
      mobileRatio: 5841 / 5645,
      parallax: false,
      alt: "Families gathering in a green residential courtyard",
    }),
  ],
  "commercial-development": [
    band("/anondo bhubon New/Commercial/Commercial-Sector.png", 2440 / 2747, {
      afterSection: 0,
      mobileRatio: 2440 / 2747,
      parallax: false,
      alt: "Anondo Bhubon Commercial Sector master layout",
    }),
    band("/anondo bhubon New/Commercial/Commercial-IT-Sector.png", 1162 / 1197, {
      afterSection: 0,
      mobileRatio: 1162 / 1197,
      parallax: false,
      alt: "Anondo Bhubon Commercial IT Sector master layout",
    }),
    band("/anondo bhubon New/2- 20 BIGHA CENTRAL AMENITIES/CENTRAL AMENITIES PREMIUM 1 (4)x.jpg", 4749 / 3392, {
      afterSection: 1,
      mobileRatio: 4749 / 3392,
      parallax: false,
      alt: "Premium Sector corner mall with shops and landscaped public spaces",
    }),
    band("/anondo bhubon New/CBD FACILITIES/CBD DOWNTOWN (2)x.jpg", 5773 / 2790, {
      afterSection: 2,
      mobileRatio: 5773 / 2790,
      parallax: false,
      alt: "CBD office towers and connected commercial streets for Anondo Digital Valley",
    }),
    band("/anondo bhubon New/CBD FACILITIES/MEGA MALL 6x.jpg", 4749 / 3392, {
      afterSection: 3,
      mobileRatio: 4749 / 3392,
      parallax: false,
      alt: "Anondo Bhubon Mega Mall and surrounding commercial towers at dusk",
    }),
    band("/anondo bhubon New/CBD FACILITIES/CBD DOWNTOWN (1)x (1).jpg", 5808 / 4147, {
      afterSection: 4,
      mobileRatio: 5808 / 4147,
      parallax: false,
      alt: "CBD waterfront development with office towers and landscaped connections",
    }),
    band("/anondo bhubon New/CBD FACILITIES/CBD DOWNTOWN (3)x.jpg", 5808 / 4147, {
      afterSection: 5,
      mobileRatio: 5808 / 4147,
      parallax: false,
      alt: "Aerial view of the CBD with connected towers and waterfront spaces",
    }),
    band("/anondo bhubon New/CBD FACILITIES/MEGA MALL 4x.jpg", 4749 / 3392, {
      afterSection: 6,
      mobileRatio: 4749 / 3392,
      parallax: false,
      alt: "Anondo Bhubon Mega Mall beside the waterfront and commercial district",
    }),
  ],
  "green-blue-master-plan": [
    band("/anondo bhubon New/PREMIUM PLUS/RIVER VIEW PREMIUM PLUS (1)x.jpg", 4155 / 2968, {
      afterSection: 1,
      mobileRatio: 4155 / 2968,
      parallax: false,
      alt: "Premium Plus riverfront with landscaped banks and pedestrian bridges",
    }),
    band("/anondo bhubon New/2- 20 BIGHA CENTRAL AMENITIES/FOREST WALK PREMIUM 1  (1)xx.jpg", 4749 / 3392, {
      afterSection: 2,
      mobileRatio: 4749 / 3392,
      parallax: false,
      alt: "Shaded forest walkway in the Premium Sector",
    }),
    band("/bhubon-old/Lake.jpg", 1192 / 756, {
      afterSection: 3,
      mobileRatio: 1192 / 756,
      parallax: false,
      alt: "Lake with landscaped walking paths and waterfront neighbourhoods",
    }),
    band("/anondo bhubon New/CBD FACILITIES/CBD DOWNTOWN (1)x (1).jpg", 5808 / 4147, {
      afterSection: 4,
      mobileRatio: 5808 / 4147,
      parallax: false,
      alt: "CBD waterfront with landscaped public spaces and green corridors",
    }),
    band("/anondo bhubon New/PREMIUM PLUS/RIVER VIEW PREMIUM PLUS (2)x.jpg", 4155 / 2968, {
      afterSection: 5,
      mobileRatio: 4155 / 2968,
      parallax: false,
      alt: "Integrated waterway and pedestrian connections in Premium Plus",
    }),
    band("/anondo bhubon New/PREMIUM PLUS/COURTYARD PLOT (5)x.jpg", 5841 / 5645, {
      afterSection: 6,
      mobileRatio: 5841 / 5645,
      parallax: false,
      alt: "Families enjoying a landscaped residential courtyard in Premium Plus",
    }),
    band("/anondo bhubon New/PREMIUM PLUS/COURTYARD PLOT (3)x.jpg", 6776 / 4838, {
      afterSection: 7,
      mobileRatio: 6776 / 4838,
      parallax: false,
      alt: "Premium Plus courtyard homes with green roofs and landscaped open spaces",
    }),
  ],
};
const BAND_AFTER = [1, 3, 5];

const pageSubgroupImages = {
  "education-healthcare": {
    "Elementary Schools Within Residential Blocks": {
      src: "/anondo bhubon New/2- 20 BIGHA CENTRAL AMENITIES/STADIUM PREMIUM 1 (1)x.jpg",
      width: 4749,
      height: 3392,
      alt: "Premium Sector neighbourhood with a stadium and central amenities",
    },
    "High Schools and Colleges Within Residential Sectors": {
      src: "/anondo bhubon New/2- 20 BIGHA CENTRAL AMENITIES/HIGH SCHOOL (1)x.jpg",
      width: 4749,
      height: 3392,
      alt: "Anondo Bhubon high school with landscaped grounds and pedestrian access",
    },
    "Dedicated School and College Campus": {
      src: "/anondo bhubon New/2- 20 BIGHA CENTRAL AMENITIES/HIGH SCHOOL (2)x.jpg",
      width: 4912,
      height: 3277,
      alt: "School campus with learning buildings, sports grounds and rooftop play areas",
    },
    University: {
      src: "/anondo bhubon New/CBD FACILITIES/UNIVERSITY 3x.jpg",
      width: 4749,
      height: 3392,
      alt: "Anondo Bhubon university building and landscaped campus",
    },
    "Technology and Professional Skills Development": {
      src: "/anondo bhubon New/CBD FACILITIES/UNIVERSITY 2x.jpg",
      width: 4749,
      height: 3392,
      alt: "University campus entrance and learning facilities",
    },
    "Sports Within Residential Communities": {
      src: "/anondo bhubon New/2- 20 BIGHA CENTRAL AMENITIES/STADIUM EXCLUSIVE 1 (1)x.jpg",
      width: 4525,
      height: 2954,
      alt: "Football stadium and spectator seating within a residential neighbourhood",
    },
  },
};

const ease = [0.22, 1, 0.36, 1];

function SourceText({ block, as: Tag = "p", className = "", ...props }) {
  return (
    <Tag {...props} data-source-text={block.index} className={`whitespace-pre-line ${className}`}>
      {block.runs
        ? block.runs.map((run, index) => {
            let text = run.text;
            if (run.italic) text = <em>{text}</em>;
            return run.bold ? (
              <strong key={index} className="font-semibold">
                {text}
              </strong>
            ) : (
              <span key={index}>{text}</span>
            );
          })
        : block.text}
    </Tag>
  );
}

// Motion owns text, rules, hero entrance, badges and the progress bar.
function Reveal({ children, className = "", delay = 0, as = "div", ...rest }) {
  const reduce = useNoMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Rule({ light = false }) {
  const reduce = useNoMotion();
  return (
    <motion.span
      aria-hidden="true"
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={reduce ? undefined : { scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease }}
      className={`block h-[3px] w-14 origin-left ${light ? "bg-[#F7A55A]" : "bg-secondary"}`}
    />
  );
}

// GSAP owns every [data-plan-reveal] element, so Motion never touches the same node.
function Paragraph({ block, reveal = true }) {
  return (
    <SourceText
      block={block}
      data-plan-reveal={reveal ? "" : undefined}
      className="text-base leading-8 text-[#4A5063] sm:text-[17px] sm:leading-9"
    />
  );
}

function Allocation({ block, reveal = true }) {
  return (
    <div
      data-plan-reveal={reveal ? "" : undefined}
      className="relative overflow-hidden border border-secondary/30 bg-white shadow-[0_14px_40px_rgba(27,35,75,0.08)]"
    >
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-secondary" />
      <SourceText
        block={block}
        className="px-7 py-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-primary sm:text-4xl"
      />
    </div>
  );
}

function ListBlock({ blocks, reveal = true }) {
  return (
    <ul className="divide-y divide-primary/10 border-y border-primary/10">
      {blocks.map((block) => (
        <li
          key={block.index}
          data-plan-reveal={reveal ? "" : undefined}
          className="flex items-start gap-5 py-5 sm:gap-6 sm:py-6"
        >
          <span
            aria-hidden="true"
            className="mt-2.5 h-2.5 w-2.5 shrink-0 bg-secondary sm:mt-3"
          />
          <SourceText
            block={block}
            as="span"
            className="block text-base font-medium leading-8 text-[#20263A] sm:text-lg sm:leading-8"
          />
        </li>
      ))}
    </ul>
  );
}

// Compute responsive column span for a large 2-column gallery grid so every row is full and balanced.
function getLargeGridSpanClass(index, total) {
  // When there is an odd number of cards, the last card spans all 2 columns as a panoramic banner.
  if (total % 2 === 1 && index === total - 1) {
    return "md:col-span-2";
  }
  return "";
}

// Subheading + the blocks that follow it become one card; DOM order is unchanged.
function SubGroup({ heading, blocks, onOpenLightbox }) {
  const gallery = heading.gallery || getSubgroupGallery(heading.text);
  const images = gallery?.images || [];

  if (images.length === 0) {
    return (
      <div
        data-plan-reveal
        className="border border-primary/10 bg-white p-6 shadow-[0_14px_40px_rgba(27,35,75,0.07)] transition duration-300 hover:border-secondary/40 sm:p-8"
      >
        <span aria-hidden="true" className="mb-5 block h-[3px] w-10 bg-secondary" />
        <SourceText
          block={heading}
          as="h4"
          className="text-xl font-semibold leading-snug tracking-[-0.02em] text-primary sm:text-2xl"
        />
        <div className="mt-5 space-y-5">
          <DocumentBlocks blocks={blocks} nested onOpenLightbox={onOpenLightbox} />
        </div>
      </div>
    );
  }

  const mapImages = images
    .map((img, idx) => ({ ...img, originalIndex: idx }))
    .filter((img) => img.isMap);
  const topImages =
    mapImages.length > 0 ? mapImages : [{ ...images[0], originalIndex: 0 }];
  const topIndices = new Set(topImages.map((img) => img.originalIndex));
  const remainingImages = images
    .map((img, idx) => ({ ...img, originalIndex: idx }))
    .filter((img) => !topIndices.has(img.originalIndex));

  const titleParts = heading.text.split(/\s+[—–-]\s+/);
  const mainTitle = titleParts[0];
  const subTitle = titleParts.slice(1).join(" — ");

  return (
    <div
      data-plan-reveal
      className="overflow-hidden border border-primary/12 bg-white shadow-[0_24px_70px_rgba(27,35,75,0.10)]"
    >
      {/* Top Accent Bar */}
      <div className="h-1.5 w-full bg-[linear-gradient(90deg,#202D72_0%,#2C3A83_55%,#F48220_100%)]" />

      <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
        {/* Top Row: Editorial Content + Sector Masterplan Map(s) / Featured Render */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          {/* Left Column: Sector Story */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-[2px] w-10 bg-secondary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-secondary">
                  {gallery.eyebrow || mainTitle}
                </span>
              </div>

              <h4
                data-source-text={heading.index}
                className="mt-4 text-2xl font-semibold leading-[1.15] tracking-[-0.03em] text-[#17203A] sm:text-3xl lg:text-[2.15rem]"
              >
                {mainTitle}
                {subTitle && (
                  <span className="mt-2 block text-lg font-medium leading-snug tracking-[-0.015em] text-[#4A5063] sm:text-xl">
                    {subTitle}
                  </span>
                )}
              </h4>

              <div className="mt-6 space-y-4">
                {blocks.map((block) => {
                  const isIdentity =
                    block.kind === "paragraph" &&
                    block.text.toLowerCase().startsWith("lifestyle identity:");
                  if (isIdentity) {
                    return (
                      <div
                        key={block.index}
                        className="mt-6 border-l-[3px] border-secondary bg-[#F8F6F1] px-5 py-4"
                      >
                        <SourceText
                          block={block}
                          className="text-[15px] font-medium leading-7 text-[#17203A] sm:text-base"
                        />
                      </div>
                    );
                  }
                  return <Paragraph key={block.index} block={block} reveal={false} />;
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Sector Masterplan Map(s) or Featured Visual */}
          <div className="lg:col-span-7">
            <div
              className={`grid h-full gap-5 ${
                topImages.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"
              }`}
            >
              {topImages.map((topImg) => {
                const isMap = Boolean(topImg.isMap);
                return (
                  <button
                    key={topImg.src}
                    type="button"
                    onClick={() =>
                      onOpenLightbox?.({
                        groupTitle: heading.text,
                        images,
                        index: topImg.originalIndex,
                      })
                    }
                    aria-label={`View ${topImg.title}`}
                    className={`group relative block h-full w-full overflow-hidden border border-primary/10 text-left shadow-[0_18px_50px_rgba(27,35,75,0.12)] ${
                      isMap
                        ? "min-h-[420px] bg-[#F8F6F1] sm:min-h-[540px] lg:min-h-[600px]"
                        : "min-h-[340px] bg-[#0B1330] sm:min-h-[440px] lg:min-h-[500px]"
                    }`}
                  >
                    <Image
                      src={topImg.src}
                      alt={topImg.title}
                      fill
                      sizes={
                        topImages.length > 1
                          ? "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                          : "(min-width: 1024px) 60vw, 100vw"
                      }
                      className={
                        isMap
                          ? "object-contain p-3 transition duration-700 ease-out group-hover:scale-[1.02] sm:p-5"
                          : "object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                      }
                    />

                    {!isMap && (
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,19,48,0.02)_30%,rgba(11,19,48,0.18)_62%,rgba(11,19,48,0.88)_100%)]"
                      />
                    )}

                    {/* Top-left Number Badge */}
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center bg-[#202D72] text-xs font-bold text-white shadow-[0_10px_25px_rgba(22,31,77,0.28)] transition duration-300 group-hover:bg-secondary sm:left-5 sm:top-5 sm:h-12 sm:w-12 sm:text-sm">
                      {String(topImg.originalIndex + 1).padStart(2, "0")}
                    </div>

                    {/* Top-right Maximize Button */}
                    <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-primary/15 bg-white/95 text-lg text-[#202D72] shadow-sm backdrop-blur-md transition duration-300 group-hover:bg-secondary group-hover:text-white sm:right-5 sm:top-5 sm:h-12 sm:w-12 sm:text-xl">
                      <FiMaximize2 />
                    </div>

                    {!isMap && (
                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F7A55A]">
                              {topImg.label}
                            </p>
                            <h5 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-3xl">
                              {topImg.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Large 2-Column Gallery Grid for Remaining Images */}
        {remainingImages.length > 0 && (
          <div className="mt-10 border-t border-primary/10 pt-9 sm:mt-12 sm:pt-11">
            <div className="mb-7 flex items-center gap-3">
              <span aria-hidden="true" className="h-2.5 w-2.5 bg-secondary" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary sm:text-sm">
                {mainTitle} Visual Showcase
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-7">
              {remainingImages.map((image, idx) => {
                const actualIndex = image.originalIndex;
                const spanClass = getLargeGridSpanClass(
                  idx,
                  remainingImages.length
                );
                const isFullRow = spanClass.includes("md:col-span-2");

                return (
                  <article
                    key={image.src}
                    className={`group overflow-hidden border border-primary/10 bg-[#0B1330] shadow-[0_16px_45px_rgba(27,35,75,0.09)] transition duration-500 hover:-translate-y-1.5 hover:border-secondary/65 hover:shadow-[0_26px_65px_rgba(27,35,75,0.18)] ${spanClass}`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox?.({
                          groupTitle: heading.text,
                          images,
                          index: actualIndex,
                        })
                      }
                      aria-label={`View ${image.title}`}
                      className="block h-full w-full text-left"
                    >
                      <div
                        className={`relative h-full w-full overflow-hidden bg-[#17203A] ${
                          isFullRow
                            ? "aspect-[16/10] sm:aspect-[16/7.5]"
                            : "aspect-[16/10]"
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          sizes={
                            isFullRow
                              ? "100vw"
                              : "(min-width: 768px) 50vw, 100vw"
                          }
                          className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                        />

                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,19,48,0.01)_35%,rgba(11,19,48,0.16)_65%,rgba(11,19,48,0.88)_100%)]"
                        />

                        {/* Number Badge */}
                        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-[#202D72] text-xs font-bold text-white shadow-[0_10px_25px_rgba(22,31,77,0.28)] transition duration-300 group-hover:bg-secondary sm:h-12 sm:w-12 sm:text-sm">
                          {String(actualIndex + 1).padStart(2, "0")}
                        </div>

                        {/* Expand Icon */}
                        <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/90 text-lg text-[#202D72] backdrop-blur-md transition duration-300 group-hover:bg-secondary group-hover:text-white sm:h-12 sm:w-12 sm:text-xl">
                          <FiMaximize2 />
                        </div>

                        {/* Caption */}
                        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F7A55A] sm:text-[11px]">
                            {image.label}
                          </p>
                          <h5
                            className={`mt-1.5 font-semibold leading-snug tracking-[-0.02em] text-white ${
                              isFullRow
                                ? "text-xl sm:text-2xl lg:text-3xl"
                                : "text-lg sm:text-xl lg:text-2xl"
                            }`}
                          >
                            {image.title}
                          </h5>
                        </div>
                      </div>
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function IllustratedSubGroup({ heading, blocks, image }) {
  return (
    <section
      data-plan-subsection={heading.index}
      aria-labelledby={`plan-subsection-${heading.index}`}
      className="border-t border-border_color pt-8 sm:pt-10 lg:pt-12"
    >
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
        <Reveal className="min-w-0 lg:col-span-4">
          <Rule />
          <SourceText
            block={heading}
            as="h3"
            id={`plan-subsection-${heading.index}`}
            className="mt-5 text-2xl font-semibold leading-tight text-primary sm:text-3xl"
          />
        </Reveal>
        <div data-plan-reveal className="min-w-0 space-y-5 lg:col-span-8">
          <DocumentBlocks blocks={blocks} nested />
        </div>
      </div>
      <div
        data-plan-image
        className="relative mt-8 w-full overflow-hidden bg-off_white sm:mt-10"
        style={{ aspectRatio: `${image.width} / ${image.height}` }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1536px) 1280px, (min-width: 1024px) calc(100vw - 96px), calc(100vw - 48px)"
          className="object-contain"
        />
      </div>
    </section>
  );
}

function DocumentBlocks({
  blocks,
  nested = false,
  onOpenLightbox,
  compactSubgroups = false,
  subgroupImages,
}) {
  const items = [];
  let group = null;
  for (const block of blocks) {
    if (!nested && block.kind === "subheading") {
      group = { kind: "sub", heading: block, blocks: [] };
      items.push(group);
    } else if (group && !nested) {
      group.blocks.push(block);
    } else if (block.kind === "list-item") {
      if (items.at(-1)?.kind === "list") items.at(-1).blocks.push(block);
      else items.push({ kind: "list", blocks: [block] });
    } else {
      items.push({ kind: "block", block });
    }
  }

  // Group consecutive no-gallery subgroups into a 2-column grid when inside a full-width gallery chapter.
  const renderedGroups = [];
  for (const item of items) {
    if (
      compactSubgroups &&
      item.kind === "sub" &&
      !subgroupImages?.[item.heading.text] &&
      !(item.heading.gallery || getSubgroupGallery(item.heading.text))
    ) {
      if (renderedGroups.at(-1)?.kind === "sub-grid") {
        renderedGroups.at(-1).subs.push(item);
      } else {
        renderedGroups.push({ kind: "sub-grid", subs: [item] });
      }
    } else {
      renderedGroups.push(item);
    }
  }

  return (
    <>
      {renderedGroups.map((item) => {
        if (item.kind === "sub-grid") {
          if (item.subs.length === 1) {
            const single = item.subs[0];
            return (
              <SubGroup
                key={single.heading.index}
                heading={single.heading}
                blocks={single.blocks}
                onOpenLightbox={onOpenLightbox}
              />
            );
          }
          return (
            <div
              key={item.subs[0].heading.index}
              className="grid gap-6 md:grid-cols-2"
            >
              {item.subs.map((sub) => (
                <SubGroup
                  key={sub.heading.index}
                  heading={sub.heading}
                  blocks={sub.blocks}
                  onOpenLightbox={onOpenLightbox}
                />
              ))}
            </div>
          );
        }
        if (item.kind === "sub") {
          const image = subgroupImages?.[item.heading.text];
          if (image) {
            return (
              <IllustratedSubGroup
                key={item.heading.index}
                heading={item.heading}
                blocks={item.blocks}
                image={image}
              />
            );
          }
          return (
            <SubGroup
              key={item.heading.index}
              heading={item.heading}
              blocks={item.blocks}
              onOpenLightbox={onOpenLightbox}
            />
          );
        }
        if (item.kind === "list")
          return (
            <ListBlock
              key={item.blocks[0].index}
              blocks={item.blocks}
              reveal={!nested}
            />
          );
        const { block } = item;
        if (block.kind === "subheading") {
          return (
            <SourceText
              key={block.index}
              block={block}
              as="h4"
              data-plan-reveal={nested ? undefined : ""}
              className="text-xl font-semibold leading-snug tracking-[-0.02em] text-primary sm:text-2xl"
            />
          );
        }
        if (block.kind === "allocation")
          return <Allocation key={block.index} block={block} reveal={!nested} />;
        return <Paragraph key={block.index} block={block} reveal={!nested} />;
      })}
    </>
  );
}

function SectionHeading({ block }) {
  const reduce = useNoMotion();
  const numbered = block.text.match(/^(\d+\.)(\s+)(.*)$/);
  const headingClass =
    "text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-[#17203A] sm:text-4xl lg:text-[2.35rem]";
  if (!numbered) {
    return <SourceText block={block} as="h2" id={`plan-section-${block.index}`} className={headingClass} />;
  }
  return (
    <h2 id={`plan-section-${block.index}`} data-source-text={block.index} className={`${headingClass} flex items-start gap-4 lg:block`}>
      <motion.span
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
        whileHover={reduce ? undefined : { y: -3, scale: 1.05 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="inline-flex h-14 w-14 shrink-0 items-center justify-center border border-secondary bg-white text-xl font-semibold leading-none tabular-nums text-primary shadow-[0_10px_26px_rgba(244,130,32,0.18)] lg:mb-6 lg:flex lg:h-16 lg:w-16 lg:text-2xl"
      >
        {numbered[1]}
      </motion.span>
      {numbered[2]}
      <span className="block min-w-0 pt-1 lg:pt-0">{numbered[3]}</span>
    </h2>
  );
}

function ImageBand({ items, flip }) {
  const list = Array.isArray(items) ? items : [items];
  const isSideBySide = list.length > 1;

  return (
    <div className="bg-white py-6 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-[1440px] sm:px-6 lg:px-8">
        <div
          className={
            isSideBySide
              ? "grid gap-6 md:grid-cols-2 lg:gap-8"
              : ""
          }
        >
          {list.map((item, idx) => {
            const outlineLeft = isSideBySide ? idx % 2 === 0 : flip;
            return (
              <div key={item.src} className="relative h-full">
                <div
                  data-image-outline
                  aria-hidden="true"
                  className={`pointer-events-none absolute -bottom-4 hidden h-full w-full border border-secondary/60 lg:block ${
                    outlineLeft ? "-left-4" : "-right-4"
                  }`}
                />
                <div
                  data-plan-image
                  className={`group relative aspect-[var(--ar-m)] w-full overflow-hidden bg-slate-200 shadow-[0_28px_70px_rgba(27,35,75,0.22)] sm:aspect-[var(--ar)] ${
                    isSideBySide ? "md:h-full" : ""
                  }`}
                  style={{ "--ar": item.ratio, "--ar-m": item.mobileRatio }}
                >
                  <div
                    data-parallax={item.parallax ? "" : undefined}
                    className={`absolute inset-x-0 ${item.parallax ? "-inset-y-[7%]" : "inset-y-0"}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt || ""}
                      fill
                      quality={85}
                      sizes={
                        isSideBySide
                          ? "(min-width: 1536px) 672px, (min-width: 768px) 50vw, 100vw"
                          : "(min-width: 1536px) 1376px, 100vw"
                      }
                      className="object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.04]"
                      style={{ objectPosition: item.position || "center" }}
                    />
                  </div>
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1330]/30 via-transparent to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function LightboxPreview({ images, index, reduce }) {
  const activeSrc = images[index].src;
  const [imageStatus, setImageStatus] = useState({});
  const [retries, setRetries] = useState({});
  const [presentation, setPresentation] = useState({ current: null, previous: null });
  const ready = imageStatus[activeSrc] === "ready";
  const failed = imageStatus[activeSrc] === "error";
  const mountedSources = new Set([
    activeSrc,
    images[(index + images.length - 1) % images.length].src,
    images[(index + 1) % images.length].src,
    ...Object.keys(imageStatus),
  ]);

  useEffect(() => {
    if (!ready) return;
    setPresentation((current) =>
      current.current === activeSrc
        ? current
        : { current: activeSrc, previous: current.current },
    );
  }, [activeSrc, ready]);

  const retryImage = () => {
    setImageStatus((current) => ({ ...current, [activeSrc]: "loading" }));
    setRetries((current) => ({ ...current, [activeSrc]: (current[activeSrc] || 0) + 1 }));
  };

  return (
    <div className="absolute inset-0" aria-busy={!ready && !failed}>
      {/* Keep decoded slides mounted until close; preload only adjacent new slides. */}
      {images.filter((item) => mountedSources.has(item.src)).map((item) => {
        const visible = item.src === presentation.current;
        const previous = item.src === presentation.previous;
        return (
          <motion.div
            key={item.src}
            aria-hidden={!visible}
            className="pointer-events-none absolute inset-0"
            style={{ zIndex: visible ? 2 : previous ? 1 : 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: reduce ? 0 : 0.18, ease: "easeOut" }}
          >
            <Image
              key={retries[item.src] || 0}
              src={item.src}
              alt={item.title}
              fill
              loading="eager"
              fetchPriority={item.src === activeSrc ? "high" : "low"}
              sizes="(min-width: 1328px) 1280px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
              className="object-contain"
              onLoad={() => setImageStatus((current) => ({ ...current, [item.src]: "ready" }))}
              onError={() => setImageStatus((current) => ({ ...current, [item.src]: "error" }))}
            />
          </motion.div>
        );
      })}
      {!ready && !failed && (
        <div role="status" className="pointer-events-none absolute inset-x-0 top-4 z-10 flex justify-center text-white">
          <FiLoader aria-hidden="true" className="h-5 w-5 animate-spin motion-reduce:animate-none" />
          <span className="sr-only">Loading image</span>
        </div>
      )}
      {failed && (
        <div role="alert" className="absolute inset-x-4 bottom-4 z-10 flex items-center justify-center gap-3 bg-primary/95 p-3 text-sm text-white">
          <span>This image could not be loaded.</span>
          <button type="button" onClick={retryImage} aria-label="Retry image" title="Retry image" className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/30 transition hover:bg-white/15">
            <FiRefreshCw aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function MasterplanDocumentSection({ documentContent, slug }) {
  const { introduction, sections, closing } = documentContent;
  const articleRef = useRef(null);
  const reduce = useNoMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
  const heroImage = finalRenderAssets[documentContent.image];
  const bands = pageBands[slug] || [];
  const subgroupImages = pageSubgroupImages[slug];
  const [lightbox, setLightbox] = useState(null);
  const isLightboxOpen = Boolean(lightbox);

  const activeLightboxImage =
    lightbox && lightbox.images[lightbox.index]
      ? lightbox.images[lightbox.index]
      : null;

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event) => {
      if (["Escape", "ArrowLeft", "ArrowRight"].includes(event.key)) {
        event.preventDefault();
      }
      if (event.key === "Escape") {
        setLightbox(null);
      } else if (event.key === "ArrowLeft") {
        setLightbox((current) => {
          if (!current) return null;
          return {
            ...current,
            index:
              current.index === 0
                ? current.images.length - 1
                : current.index - 1,
          };
        });
      } else if (event.key === "ArrowRight") {
        setLightbox((current) => {
          if (!current) return null;
          return {
            ...current,
            index:
              current.index === current.images.length - 1
                ? 0
                : current.index + 1,
          };
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
  }, [isLightboxOpen]);

  const showPrevLightboxImage = () => {
    setLightbox((current) => {
      if (!current) return null;
      return {
        ...current,
        index:
          current.index === 0 ? current.images.length - 1 : current.index - 1,
      };
    });
  };

  const showNextLightboxImage = () => {
    setLightbox((current) => {
      if (!current) return null;
      return {
        ...current,
        index:
          current.index === current.images.length - 1 ? 0 : current.index + 1,
      };
    });
  };

  const eyebrows = introduction.filter((b) => b.kind !== "title" && (b.text === "ANONDO BHUBON" || b.text.startsWith("CHAPTER ")));
  const title = introduction.find((b) => b.kind === "title");
  const leads = introduction.filter((b) => b.kind !== "title" && !eyebrows.includes(b));

  // GSAP owns images (clip-path reveal, parallax, outline), hero parallax and the staggered content.
  useEffect(() => {
    if (!ANIMATIONS_ENABLED) return;
    let cancelled = false;
    let media;

    async function setupAnimations() {
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import("gsap"),
          import("gsap/dist/ScrollTrigger"),
          document.fonts.ready,
        ]);
        if (cancelled || !articleRef.current) return;

        gsap.registerPlugin(ScrollTrigger);
        const root = articleRef.current;
        media = gsap.matchMedia(root);
        media.add("(prefers-reduced-motion: no-preference)", () => {
          gsap.fromTo(
            root.querySelector("[data-hero-bg]"),
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: { trigger: root.querySelector("[data-hero]"), start: "top top", end: "bottom top", scrub: true },
            },
          );

          // Elements already on screen (including restored scroll positions) stay still.
          root.querySelectorAll("[data-plan-reveal]").forEach((el) => {
            if (el.parentElement?.closest("[data-plan-reveal]")) return;
            if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
            gsap.fromTo(
              el,
              { opacity: 0, y: 24 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                clearProps: "opacity,transform",
                scrollTrigger: { trigger: el, start: "top 90%", once: true },
              },
            );
          });

          root.querySelectorAll("[data-plan-image]").forEach((frame) => {
            gsap.fromTo(
              frame,
              { clipPath: "inset(12% 8% 12% 8%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                scrollTrigger: { trigger: frame, start: "top 92%", end: "top 35%", scrub: 0.6 },
              },
            );

            const parallax = frame.querySelector("[data-parallax]");
            if (parallax) {
              gsap.fromTo(
                parallax,
                { yPercent: -5 },
                {
                  yPercent: 5,
                  ease: "none",
                  scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: 0.5 },
                },
              );
            }

            const outline = frame.parentElement.querySelector("[data-image-outline]");
            if (outline) {
              gsap.fromTo(
                outline,
                { opacity: 0, x: -18, y: -18 },
                {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: { trigger: frame, start: "top 75%", once: true },
                },
              );
            }
          });

          root.querySelectorAll("[data-plan-progress]").forEach((bar) => {
            gsap.fromTo(
              bar,
              { scaleX: 0 },
              {
                scaleX: 1,
                ease: "none",
                scrollTrigger: { trigger: bar.closest("[data-plan-chapter]"), start: "top 35%", end: "bottom 60%", scrub: 0.3 },
              },
            );
          });
        });
        ScrollTrigger.refresh();
      } catch {
        // Animation chunks are optional; the complete document stays visible if they fail.
        media?.revert();
      }
    }

    setupAnimations();
    return () => {
      cancelled = true;
      media?.revert();
    };
  }, [documentContent.sourceFile]);

  return (
    <article
      ref={articleRef}
      data-source-document={documentContent.sourceFile}
      className="relative bg-white tracking-normal text-primary"
    >
      {!reduce && (
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="fixed inset-x-0 top-0 z-[65] h-[3px] origin-left bg-secondary"
        />
      )}

      {/* Hero */}
      <header data-hero className="relative isolate overflow-hidden bg-[#0B1330] text-white">
        <div data-hero-bg aria-hidden="true" className="absolute inset-x-0 -inset-y-[12%] -z-10">
          <Image src={heroImage} alt="" fill priority quality={80} sizes="100vw" className="object-cover object-center" />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,15,40,0.92)_0%,rgba(8,15,40,0.74)_48%,rgba(8,15,40,0.3)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,15,40,0.1)_0%,rgba(8,15,40,0.05)_40%,rgba(8,15,40,0.85)_100%)]" />
        <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[360px] w-[360px] rounded-full bg-secondary/15 blur-[130px]" />
        <div className="pointer-events-none absolute inset-x-5 bottom-5 top-5 -z-10 hidden border border-white/10 lg:block" />

        <div className="site-shell flex min-h-[560px] flex-col justify-end py-14 sm:min-h-[600px] sm:py-16 lg:min-h-[calc(100svh-200px)] lg:py-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span aria-hidden="true" className="h-px w-14 bg-[#F7A55A]" />
              {eyebrows.map((block) => (
                <SourceText key={block.index} block={block} className="text-sm font-bold tracking-[0.3em] text-[#F7A55A]" />
              ))}
            </div>
            {title && (
              <SourceText
                block={title}
                as="h1"
                className="mt-7 max-w-5xl text-[clamp(2.2rem,5.4vw,5rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-white"
              />
            )}
            {leads.length > 0 && (
              <div className="mt-10 grid gap-6 border-t border-white/20 pt-7 md:grid-cols-2 md:gap-14 lg:mt-14">
                {leads.map((block, index) => (
                  <SourceText
                    key={block.index}
                    block={block}
                    className={
                      index === 0
                        ? "max-w-xl text-lg font-medium leading-8 text-white/90 sm:text-xl sm:leading-9"
                        : "max-w-md text-base leading-8 text-white/70 sm:text-lg md:justify-self-end"
                    }
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </header>

      {/* Chapters */}
      {sections.map((section, sectionIndex) => {
        const flip = sectionIndex % 2 === 1;
        const sectionBands = bands.filter(
          (item, index) => (item?.afterSection ?? BAND_AFTER[index]) === sectionIndex,
        );
        const metrics = section.layout === "metrics";
        const hasGallerySubgroup = section.blocks.some(
          (b) =>
            b.kind === "subheading" &&
            Boolean(b.gallery || getSubgroupGallery(b.text))
        );
        const hasIllustratedSubgroup = section.blocks.some(
          (block) => block.kind === "subheading" && subgroupImages?.[block.text],
        );
        const fullWidthSection = metrics || hasGallerySubgroup || hasIllustratedSubgroup;

        return (
          <div key={section.heading.index}>
            <section
              data-plan-chapter
              aria-labelledby={`plan-section-${section.heading.index}`}
              className={`relative overflow-x-clip py-16 sm:py-20 lg:py-24 ${
                section.notes ? "bg-[#EEF0F8]" : flip ? "bg-[#F7F5F0]" : "bg-white"
              }`}
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute top-16 hidden h-[420px] w-[420px] rounded-full border border-primary/[0.06] lg:block ${
                  flip ? "-left-40" : "-right-40"
                }`}
              />
              <div
                className={`site-shell relative ${
                  fullWidthSection
                    ? ""
                    : "grid gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-24"
                }`}
              >
                <div className={fullWidthSection ? "max-w-3xl" : "lg:col-span-5"}>
                  <div className={fullWidthSection ? "" : "lg:sticky lg:top-44"}>
                    <Reveal>
                      <Rule />
                      <div className="mt-6">
                        <SectionHeading block={section.heading} />
                      </div>
                    </Reveal>
                    <span aria-hidden="true" className="mt-6 hidden h-0.5 w-24 overflow-hidden bg-primary/10 lg:block">
                      <span data-plan-progress className="block h-full w-full origin-left bg-secondary" />
                    </span>
                  </div>
                </div>

                <div
                  className={
                    fullWidthSection
                      ? `mt-12 space-y-10 ${hasIllustratedSubgroup ? "[&>p]:max-w-4xl" : ""}`
                      : "space-y-6 lg:col-span-7 lg:pt-2"
                  }
                >
                  {metrics ? (
                    <>
                      <div className="grid gap-5 sm:grid-cols-3">
                        {[0, 2, 4].map((index) => (
                          <div
                            key={index}
                            data-plan-reveal
                            className="relative border border-primary/10 bg-white p-7 shadow-[0_14px_40px_rgba(27,35,75,0.07)]"
                          >
                            <SourceText block={section.blocks[index]} className="text-5xl font-semibold leading-tight tracking-[-0.03em] text-primary" />
                            <span aria-hidden="true" className="mt-5 block h-[3px] w-8 bg-secondary" />
                            <SourceText block={section.blocks[index + 1]} className="mt-4 text-base leading-7 text-[#4A5063]" />
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 max-w-4xl space-y-6">
                        <DocumentBlocks
                          blocks={section.blocks.slice(6)}
                          onOpenLightbox={setLightbox}
                          subgroupImages={subgroupImages}
                        />
                      </div>
                    </>
                  ) : (
                    <DocumentBlocks
                      blocks={section.blocks}
                      onOpenLightbox={setLightbox}
                      compactSubgroups={hasGallerySubgroup}
                      subgroupImages={subgroupImages}
                    />
                  )}
                </div>
              </div>
            </section>
            {sectionBands.length > 0 && (
              <ImageBand items={sectionBands} flip={flip} />
            )}
          </div>
        );
      })}

      {/* Lightbox Modal for Subgroup Galleries */}
      {lightbox && activeLightboxImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B1330]/95 p-4 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxImage.title}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F7A55A]">
                  {activeLightboxImage.label} · {lightbox.groupTitle.split(/\s+[—–-]\s+/)[0]}
                </p>
                <h3 className="mt-1 truncate text-lg font-semibold text-white sm:text-2xl">
                  {activeLightboxImage.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Close image preview"
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-white/10 text-xl text-white transition hover:border-secondary hover:bg-secondary"
              >
                <FiX />
              </button>
            </div>

            {/* Main Preview Image */}
            <div className="relative h-[60vh] overflow-hidden border border-white/10 bg-black/30 shadow-[0_35px_100px_rgba(0,0,0,0.45)] sm:h-[70vh]">
              <LightboxPreview
                key={lightbox.groupTitle}
                images={lightbox.images}
                index={lightbox.index}
                reduce={reduce}
              />

              {lightbox.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrevLightboxImage}
                    aria-label="View previous image"
                    className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/90 text-2xl text-[#202D72] shadow-lg transition hover:bg-secondary hover:text-white sm:left-5 sm:h-14 sm:w-14"
                  >
                    <FiChevronLeft />
                  </button>

                  <button
                    type="button"
                    onClick={showNextLightboxImage}
                    aria-label="View next image"
                    className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/90 text-2xl text-[#202D72] shadow-lg transition hover:bg-secondary hover:text-white sm:right-5 sm:h-14 sm:w-14"
                  >
                    <FiChevronRight />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer with Thumbnails & Controls */}
            <div className="mt-4 flex flex-col gap-4 border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-secondary text-xs font-bold text-white">
                  {String(lightbox.index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                    Sector Visual Gallery
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {lightbox.index + 1} of {lightbox.images.length}
                  </p>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {lightbox.images.map((thumb, idx) => (
                  <button
                    key={thumb.src}
                    type="button"
                    onClick={() =>
                      setLightbox((current) =>
                        current ? { ...current, index: idx } : null
                      )
                    }
                    aria-label={`Select ${thumb.title}`}
                    className={`relative h-12 w-16 shrink-0 overflow-hidden border transition ${
                      idx === lightbox.index
                        ? "border-secondary ring-2 ring-secondary/60"
                        : "border-white/20 opacity-55 hover:opacity-90"
                    }`}
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.title}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={showPrevLightboxImage}
                  className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white hover:text-[#202D72]"
                >
                  <FiArrowLeft />
                  Prev
                </button>

                <button
                  type="button"
                  onClick={showNextLightboxImage}
                  className="inline-flex items-center gap-2 bg-secondary px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#202D72]"
                >
                  Next
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Closing */}
      {closing.length > 0 && (
        <footer className="relative isolate overflow-hidden bg-[#0B1330] py-20 text-white sm:py-24 lg:py-32">
          <Image src={heroImage} alt="" fill sizes="100vw" className="-z-10 object-cover object-center opacity-25" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(11,19,48,0.95)_0%,rgba(44,58,131,0.78)_100%)]" />
          <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-secondary/15 blur-[130px]" />

          <div className="site-shell">
            <Reveal>
              <Rule light />
            </Reveal>
            <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.6fr)] lg:items-end lg:gap-20">
              <div className="space-y-6">
                {closing.slice(0, -1).map((block, index) => (
                  <Reveal
                    key={block.index}
                    delay={index * 0.08}
                    className={
                      index === 1 || closing.length === 2
                        ? "max-w-4xl text-3xl font-semibold leading-[1.15] tracking-[-0.035em] sm:text-5xl"
                        : "text-base font-semibold tracking-[0.2em] text-[#F7A55A] sm:text-lg"
                    }
                  >
                    <SourceText block={block} />
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.2} className="border-t border-white/25 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <SourceText block={closing.at(-1)} className="text-xl font-semibold leading-8 tracking-[-0.01em] text-white" />
              </Reveal>
            </div>
          </div>
        </footer>
      )}
    </article>
  );
}
