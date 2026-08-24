"use client";

import { pillars } from "@/data/anondoBhubonData";
import { finalRenderAssets } from "@/data/finalRendersData";
import FramedImage from "./FramedImage";

const locationStats = [
  {
    value: "5 min",
    label: "From Kanchan Bridge",
  },
  {
    value: "30 min",
    label: "From Hazrat Shahjalal International Airport",
  },
  {
    value: "10 min",
    label: "From MRT-1 Depot Station",
  },
];

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

      <div className="max-w-7xl mx-auto px-6 md:px-0 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center xl:gap-16">
          {/* Content */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-[#F48220]" />

              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#F48220]">
                About Anondo Bhubon
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#17203A] sm:text-5xl lg:text-[3.5rem]">
              Sustainable living, inspired by nature.
            </h2>

            <p className="mt-6 max-w-2xl text-[15px] font-medium leading-8 text-[#616779]">
              Anondo Bhubon is more than a residential project. It is a
              thoughtfully planned lifestyle destination where green
              infrastructure, wellness, security and modern urban access come
              together.
            </p>

            {/* Corporate Statement */}
            <div className="relative mt-8 overflow-hidden border border-[#2C3A83]/10 bg-white p-6 shadow-[0_14px_40px_rgba(27,35,75,0.07)] sm:p-7">
              <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#F48220]" />

              <div className="pl-3">
                <p className="inline-flex bg-[#F48220]/10 px-3 py-1.5 text-sm font-bold uppercase tracking-[0.2em] text-[#F48220]">
                  Our Vision
                </p>

                <p className="mt-3 text-xl font-semibold leading-8 tracking-[-0.02em] text-[#20263A] sm:text-2xl">
                  We are not just offering homes. We are shaping a healthier
                  way to live, connect, move and grow.
                </p>
              </div>
            </div>

            {/* Pillars */}
            <div className="mt-8 space-y-4">
              {pillars.map((pillar, index) => (
                <article
                  key={`${pillar.title}-${index}`}
                  className="group relative overflow-hidden border border-[#2C3A83]/10 bg-white p-5 shadow-[0_10px_30px_rgba(27,35,75,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#F48220]/45 hover:shadow-[0_18px_45px_rgba(27,35,75,0.11)] sm:p-6"
                >
                  {/* <div className="absolute right-0 top-0 h-1 w-12 bg-[#F48220] transition-all duration-300 group-hover:w-full" /> */}

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#EEF0F8] text-xs font-bold text-[#2C3A83] transition duration-300 group-hover:bg-[#202D72] group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold leading-tight tracking-[-0.015em] text-[#20263A]">
                        {pillar.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-7 text-[#616779]">
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
            {/* Two Image Layout */}
            <div className="grid gap-5 sm:grid-cols-2">
              {/* First Image */}
              <div className="group overflow-hidden border border-[#2C3A83]/10 bg-white p-3 shadow-[0_18px_50px_rgba(27,35,75,0.1)]">
                <div className="relative overflow-hidden">
                  <FramedImage
                    src={finalRenderAssets.courtyardPremiumPlus}
                    alt="Courtyard green residential living at Anondo Bhubon"
                    className="aspect-[4/5]"
                    imageClassName="object-cover transition duration-700 group-hover:scale-[1.04]"
                    style={{ aspectRatio: "4 / 5" }}
                    imageStyle={{ objectFit: "cover" }}
                    sizes="(min-width: 1024px) 28vw, 100vw"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17203A]/70 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 border border-white/20 bg-white/90 px-3 py-2 backdrop-blur-md">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#2C3A83]">
                      Courtyard Living
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#F7A55A]">
                      Green Community
                    </p>

                    <p className="mt-2 text-xl font-semibold leading-tight text-white">
                      Open spaces for everyday wellbeing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Second Image */}
              <div className="group overflow-hidden border border-[#2C3A83]/10 bg-white p-3 shadow-[0_18px_50px_rgba(27,35,75,0.1)] sm:translate-y-8">
                <div className="relative overflow-hidden">
                  <FramedImage
                    src={finalRenderAssets.riverPremiumPlus}
                    alt="River view residential landscape at Anondo Bhubon"
                    className="aspect-[4/5]"
                    imageClassName="object-cover transition duration-700 group-hover:scale-[1.04]"
                    style={{ aspectRatio: "4 / 5" }}
                    imageStyle={{ objectFit: "cover" }}
                    sizes="(min-width: 1024px) 28vw, 100vw"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17203A]/70 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 border border-white/20 bg-white/90 px-3 py-2 backdrop-blur-md">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#2C3A83]">
                      River-Edge Living
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#F7A55A]">
                      Nature-Led Lifestyle
                    </p>

                    <p className="mt-2 text-xl font-semibold leading-tight text-white">
                      Calm views within a connected township.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="mt-7 overflow-hidden border border-[#2C3A83]/10 bg-white shadow-[0_16px_50px_rgba(27,35,75,0.08)] sm:mt-12">
              <div className="flex flex-col gap-5 border-b border-[#2C3A83]/10 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#F48220]">
                    Location Advantage
                  </p>

                  <p className="mt-3 max-w-md text-sm font-medium leading-7 text-[#616779]">
                    Minutes from key access points, yet surrounded by water,
                    greenery and the calm edge of Purbachal.
                  </p>
                </div>

                <a
                  href="#location"
                  className="group inline-flex shrink-0 items-center justify-center gap-3 bg-[#202D72] px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[#F48220]"
                >
                  <span>Explore Location</span>

                  <span className="transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* Location Stats */}
              <div className="grid sm:grid-cols-3">
                {locationStats.map((item, index) => (
                  <article
                    key={item.label}
                    className={`group relative p-5 transition duration-300 hover:bg-[#F7F7FA] sm:p-6 ${
                      index !== locationStats.length - 1
                        ? "border-b border-[#2C3A83]/10 sm:border-b-0 sm:border-r"
                        : ""
                    }`}
                  >
                    {/* <div className="absolute left-0 top-0 h-1 w-10 bg-[#F48220] transition-all duration-300 group-hover:w-full" /> */}

                    <p className="text-2xl font-semibold tracking-[-0.04em] text-[#20263A]">
                      {item.value}
                    </p>

                    <p className="mt-2 text-xs font-medium leading-6 text-[#616779]">
                      {item.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}