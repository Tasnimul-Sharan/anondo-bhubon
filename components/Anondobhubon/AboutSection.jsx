"use client";

import { aboutContent } from "@/data/homeContent";
import { finalRenderAssets } from "@/data/finalRendersData";
import FramedImage from "./FramedImage";

const { pillars, cardPoints } = aboutContent;

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#F7F5F0] py-20 sm:py-24 lg:py-32"
    >
{/* About Section Background */}
<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
  {/* Base Background */}
  <div className="absolute inset-0 bg-[linear-gradient(135deg,#FAF8F3_0%,#FFFFFF_52%,#F1F3F8_100%)]" />

  {/* Soft Brand Glows */}
  <div className="absolute -left-32 top-24 h-[360px] w-[360px] rounded-full bg-[#F48220]/10 blur-[110px]" />

  <div className="absolute -right-36 bottom-0 h-[460px] w-[460px] rounded-full bg-[#2C3A83]/10 blur-[130px]" />

  {/* Architectural Frame */}
  <div className="absolute left-[6%] top-[12%] h-[76%] w-[88%] border border-[#2C3A83]/[0.045]" />

  <div className="absolute left-[8%] top-[16%] h-[68%] w-[84%] border border-[#F48220]/[0.045]" />

  {/* Decorative Curves */}
  <div className="absolute -right-36 top-10 h-[430px] w-[430px] rounded-full border border-[#2C3A83]/[0.06]" />

  <div className="absolute -right-20 top-24 h-[300px] w-[300px] rounded-full border border-[#2C3A83]/[0.07]" />

  <div className="absolute right-8 top-40 h-[160px] w-[160px] rounded-full border border-[#F48220]/10" />

  {/* Subtle Dot Pattern */}
  <div className="absolute bottom-[10%] left-[5%] h-[220px] w-[220px] opacity-40 [background-image:radial-gradient(rgba(44,58,131,0.16)_1px,transparent_1px)] [background-size:18px_18px]" />

  {/* Minimal Accent Lines */}
  <div className="absolute left-[7%] top-0 h-28 w-px bg-[#F48220]/20" />

  <div className="absolute bottom-0 right-[9%] h-32 w-px bg-[#2C3A83]/10" />

  {/* Large Background Word */}
  <div className="absolute -bottom-8 right-4 select-none text-[110px] font-black uppercase leading-none tracking-[-0.08em] text-[#2C3A83]/[0.025] sm:text-[170px] lg:text-[240px]">
    About
  </div>
</div>

      <div className="relative z-10 mx-auto w-full max-w-[1380px] px-6 xl:px-0">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center xl:gap-14">
          {/* Content */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-[#F48220]" />

              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#F48220]">
                {aboutContent.eyebrow}
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#17203A] sm:text-5xl lg:text-[3.5rem]">
              {aboutContent.title}
            </h2>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#4A5063] sm:text-[17px] sm:leading-9">
              {aboutContent.lead}
            </p>

            {/* Corporate Statement */}
            <div className="relative mt-8 overflow-hidden border border-[#2C3A83]/10 bg-white p-6 shadow-[0_14px_40px_rgba(27,35,75,0.07)] sm:p-7">
              <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#F48220]" />

              <div className="pl-3">
                <p className="inline-flex bg-[#F48220]/10 px-3 py-1.5 text-sm font-bold uppercase tracking-[0.2em] text-[#F48220]">
                  {aboutContent.visionLabel}
                </p>

                <p className="mt-3 text-xl font-semibold leading-8 tracking-[-0.02em] text-[#20263A] sm:text-2xl">
                  {aboutContent.vision}
                </p>
              </div>
            </div>

            {/* Pillars */}
            <div className="mt-8 divide-y divide-[#2C3A83]/10 border border-[#2C3A83]/12 border-l-[3px] border-l-[#F48220] bg-white shadow-[0_14px_40px_rgba(27,35,75,0.06)]">
              {pillars.map((pillar, index) => (
                <article
                  key={`${pillar.title}-${index}`}
                  className="p-5 sm:p-6"
                >
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#202D72] text-xs font-bold tabular-nums text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-lg font-semibold leading-tight tracking-[-0.015em] text-[#20263A]">
                        {pillar.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-7 text-[#4A5063]">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Visual Area */}
          <div>
            {/* Single Featured Image */}
            <div className="group overflow-hidden border border-[#2C3A83]/12 bg-white p-3 shadow-[0_18px_50px_rgba(27,35,75,0.08)]">
              <div className="relative overflow-hidden">
                <FramedImage
                  src="/anondo bhubon New/PREMIUM PLUS/RIVER VIEW PREMIUM PLUS (1)x.jpg"
                  alt="River view residential landscape at Anondo Bhubon"
                  className="aspect-[16/10]"
                  imageClassName="object-cover transition duration-700 group-hover:scale-[1.03]"
                  style={{ aspectRatio: "16 / 10" }}
                  imageStyle={{ objectFit: "cover" }}
                  sizes="(min-width: 1024px) 52vw, 100vw"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17203A]/80 via-[#17203A]/15 to-transparent" />

                <div className="absolute left-4 top-4 border border-white/20 bg-white/95 px-3.5 py-2 backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2C3A83]">
                    River-Edge Living
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F7A55A]">
                    A Better Tomorrow
                  </p>

                  <p className="mt-2 max-w-2xl text-xl font-semibold leading-snug text-white sm:text-2xl">
                    We want greenery and water to become defining features of
                    everyday township life.
                  </p>
                </div>
              </div>
            </div>

            {/* Everyday Life Card */}
            <div className="mt-6 overflow-hidden border border-[#2C3A83]/12 bg-white shadow-[0_16px_50px_rgba(27,35,75,0.06)]">
              <div className="flex flex-col gap-5 border-b border-[#2C3A83]/10 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#F48220]">
                    {aboutContent.cardLabel}
                  </p>

                  <p className="mt-3 max-w-md text-sm font-medium leading-7 text-[#4A5063]">
                    {aboutContent.cardIntro}
                  </p>
                </div>

                <a
                  href="#masterplan"
                  className="group inline-flex shrink-0 items-center justify-center gap-3 bg-[#202D72] px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#F48220]"
                >
                  <span>Explore Township</span>

                  <span className="transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* Who the township serves */}
              <div className="divide-y divide-[#2C3A83]/10 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {cardPoints.map((item, index) => (
                  <article
                    key={item.label}
                    className="p-5 sm:p-6"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 shrink-0 bg-[#F48220]"
                      />
                      <span className="text-xs font-bold tabular-nums tracking-[0.16em] text-[#F48220]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="mt-3 text-base font-semibold leading-6 tracking-[-0.02em] text-[#20263A]">
                      {item.label}
                    </p>

                    <p className="mt-2 text-sm font-medium leading-6 text-[#4A5063]">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Bottom Statement Card (from unused first image) */}
            <div className="relative mt-6 overflow-hidden border border-[#2C3A83]/12 border-l-[3px] border-l-[#F48220] bg-white p-6 shadow-[0_14px_40px_rgba(27,35,75,0.06)] sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="inline-flex items-center gap-2 bg-[#F48220]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F48220]">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 bg-[#F48220]"
                  />
                  Nature at the Heart
                </p>

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2C3A83]/45">
                  Courtyard Living
                </span>
              </div>

              <p className="mt-4 text-lg font-semibold leading-8 tracking-[-0.015em] text-[#20263A] sm:text-xl">
                Wherever people live, work or travel, they should feel
                connected to nature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}