"use client";

import Image from "next/image";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaImages,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";
import ProjectLocation from "./ProjectLocation";
import { finalRenderAssets } from "@/data/finalRendersData";

function normalizeImage(item, index) {
  if (!item) return null;

  if (typeof item === "string") {
    return {
      src: item,
      title: `Project Visual ${index + 1}`,
      label: "Gallery",
    };
  }

  return {
    src: item.src || item.image || item.url,
    title: item.title || `Project Visual ${index + 1}`,
    label: item.label || "Gallery",
  };
}

function getGalleryImages(project, projectData) {
  const rawImages = [
    project?.banner || projectData?.image,
    ...(project?.images || []),
    ...(projectData?.images || []),
    ...(projectData?.gallery || []),
  ];

  const seen = new Set();

  return rawImages
    .map((item, index) => normalizeImage(item, index))
    .filter((item) => {
      if (!item?.src || seen.has(item.src)) return false;
      seen.add(item.src);
      return true;
    });
}

export default function ProjectDetails({ project }) {
  const { title, description, notes } = project;

  const projectData = project?.projectData;
  const sections = project?.sections || [];

  const projectTitle = title || projectData?.title || "Project Details";
  const projectDescription =
    projectData?.description ||
    "A thoughtfully planned real estate project designed for modern lifestyle, long-term value, and sustainable community living.";

  const galleryImages = getGalleryImages(project, projectData);
  const heroImage =
    galleryImages[0]?.src || finalRenderAssets.hero;
  const showcaseImages = galleryImages.slice(1, 5);
  const allGalleryImages = galleryImages.slice(0, 12);

  return (
    <div className="w-full overflow-hidden bg-[#F7F8FC]">
      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#07111F] shadow-[0_35px_100px_rgba(8,17,31,0.22)] sm:rounded-[2.8rem]">
            <div className="relative h-[520px] w-full md:h-[660px]">
              <Image
                src={heroImage}
                alt={projectTitle}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/95 via-[#07111F]/55 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/90 via-transparent to-[#07111F]/20" />

              {/* Hero Content */}
              <div className="absolute inset-0 flex items-end">
                <div className="w-full p-6 sm:p-10 lg:p-14">
                  <div className="max-w-3xl">
                    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl">
                      <span className="h-2 w-2 rounded-full bg-[#F48220]" />
                      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/80">
                        Premium Project Showcase
                      </p>
                    </div>

                    <h1 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                      {projectTitle}
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                      {projectDescription}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {projectData?.date && (
                        <div className="inline-flex items-center gap-3 rounded-full bg-white/12 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                          <FaCalendarAlt className="text-[#F48220]" />
                          {projectData.date}
                        </div>
                      )}

                      {projectData?.author && (
                        <div className="inline-flex items-center gap-3 rounded-full bg-white/12 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                          <FaUser className="text-[#F48220]" />
                          {projectData.author}
                        </div>
                      )}

                      <div className="inline-flex items-center gap-3 rounded-full bg-white/12 px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                        <FaImages className="text-[#F48220]" />
                        {galleryImages.length} Visuals
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Showcase */}
              {showcaseImages.length > 0 && (
                <div className="absolute bottom-8 right-8 hidden w-[380px] grid-cols-2 gap-3 lg:grid">
                  {showcaseImages.map((img, index) => (
                    <div
                      key={img.src}
                      className={`group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-[0_20px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl ${
                        index === 0 ? "col-span-2 h-36" : "h-28"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        sizes="380px"
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMAGE SHOWCASE ================= */}
      {allGalleryImages.length > 1 && (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#F48220]">
                Visual Gallery
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#111827] sm:text-4xl">
                Explore the project through curated visuals.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#1F2937]/65">
              A premium image showcase designed to highlight masterplan,
              lifestyle, location, landscape, and development vision.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4 md:grid-rows-[260px_260px]">
            {allGalleryImages.slice(0, 7).map((img, index) => {
              const isLarge = index === 0;
              const isWide = index === 3;

              return (
                <div
                  key={img.src}
                  className={`group relative overflow-hidden rounded-[1.6rem] bg-white shadow-[0_22px_65px_rgba(15,23,42,0.1)] ${
                    isLarge
                      ? "md:col-span-2 md:row-span-2"
                      : isWide
                        ? "md:col-span-2"
                        : ""
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes={
                      isLarge
                        ? "(max-width: 768px) 100vw, 640px"
                        : "(max-width: 768px) 100vw, 320px"
                    }
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/72 via-[#07111F]/10 to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F48220]">
                      {img.label}
                    </p>

                    <h3 className="mt-1 text-base font-bold text-white">
                      {img.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {allGalleryImages.length > 7 && (
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {allGalleryImages.slice(7, 12).map((img) => (
                <div
                  key={img.src}
                  className="group relative h-56 overflow-hidden rounded-[1.4rem] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.09)]"
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 240px"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-sm font-bold text-white">
                      {img.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          {/* Left Sticky Panel */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="overflow-hidden rounded-[2rem] bg-[#07111F] p-8 text-white shadow-[0_28px_80px_rgba(8,17,31,0.18)]">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#F48220]">
                Project Overview
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em]">
                Designed for future-focused living.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/65">
                Explore the key planning, lifestyle, infrastructure, investment,
                and location advantages of this project.
              </p>

              {projectData?.postTags?.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-2">
                  {projectData.postTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold text-white/85"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F48220] text-white">
                    <FaMapMarkerAlt />
                  </span>

                  <div>
                    <h4 className="font-bold">Location Advantage</h4>
                    <p className="mt-1 text-sm leading-6 text-white/60">
                      Strategic project location with strong connectivity and
                      long-term growth potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Details */}
          <div>
            {/* Old Description Support */}
            {description && description.length > 0 && (
              <div className="mb-8 rounded-[2rem] border border-white bg-white p-7 shadow-[0_22px_65px_rgba(15,23,42,0.08)]">
                <h2 className="text-2xl font-bold text-[#111827]">
                  Key Highlights
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {description.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 rounded-2xl bg-[#F8F9FC] p-4"
                    >
                      <FaCheckCircle className="mt-1 shrink-0 text-primary" />
                      <span className="text-sm leading-7 text-[#1F2937]/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* New Sections */}
            {sections.length > 0 && (
              <div className="grid gap-6">
                {sections.map((section, index) => (
                  <article
                    key={index}
                    className="group relative overflow-hidden rounded-[2rem] border border-white bg-white p-7 shadow-[0_22px_65px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.13)] sm:p-8"
                  >
                    <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-primary/[0.04] transition duration-300 group-hover:bg-[#F48220]/10" />

                    <div className="relative">
                      <div className="mb-5 flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white shadow-[0_14px_35px_rgba(44,58,131,0.25)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F48220]">
                          Project Detail
                        </p>
                      </div>

                      <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#111827] sm:text-3xl">
                        {section.title}
                      </h2>

                      {section.content && (
                        <p className="mt-4 text-base leading-8 text-[#1F2937]/68">
                          {section.content}
                        </p>
                      )}

                      {section.list && (
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {section.list.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 rounded-2xl bg-[#F8F9FC] p-4 transition duration-300 group-hover:bg-[#F4F6FB]"
                            >
                              <FaCheckCircle className="mt-1 shrink-0 text-primary" />

                              <span className="text-sm leading-7 text-[#1F2937]/75">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Notes */}
            {notes && notes.length > 0 && (
              <div className="mt-8 rounded-[2rem] border border-[#F48220]/20 bg-[#FFF7ED] p-7 shadow-[0_22px_65px_rgba(15,23,42,0.06)]">
                <h3 className="text-xl font-bold text-[#111827]">
                  Important Notes
                </h3>

                <ul className="mt-5 space-y-3">
                  {notes.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm leading-7 text-[#1F2937]/75"
                    >
                      <FaCheckCircle className="mt-1 shrink-0 text-[#F48220]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <ProjectLocation />
      </section>
    </div>
  );
}
