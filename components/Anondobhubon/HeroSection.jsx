import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import { FiArrowRight, FiDownload } from "react-icons/fi";

import { finalRenderAssets } from "@/data/finalRendersData";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#17203A] text-white lg:h-[calc(100svh-152px)] lg:min-h-[620px]"
    >
      {/* Background Image */}
      <Image
        src={finalRenderAssets.hero}
        alt="Anondo Bhubon eco-conscious township"
        fill
        priority
        fetchPriority="high"
        quality={82}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,15,40,0.94)_0%,rgba(8,15,40,0.82)_28%,rgba(8,15,40,0.38)_58%,rgba(8,15,40,0.1)_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,40,0.16)_0%,rgba(8,15,40,0.02)_45%,rgba(8,15,40,0.78)_100%)]" />

      <div className="absolute inset-0 bg-[#2C3A83]/10 mix-blend-multiply" />

      {/* Soft Brand Glow */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[340px] w-[340px] rounded-full bg-[#F48220]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-white/[0.05] blur-[140px]" />

      {/* Architectural Border */}
      <div className="pointer-events-none absolute inset-x-5 bottom-5 top-5 hidden border border-white/10 lg:block" />

      <div className="pointer-events-none absolute bottom-5 left-[8%] top-5 hidden w-px bg-white/10 lg:block" />

      <div className="pointer-events-none absolute bottom-5 right-[8%] top-5 hidden w-px bg-white/10 lg:block" />

      {/* Main Container */}
      <div className="site-shell relative z-10 flex min-h-[720px] flex-col py-8 sm:min-h-[760px] sm:py-10 lg:h-full lg:min-h-0 lg:py-8">
        {/* Top Information */}
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#F48220] shadow-[0_0_0_5px_rgba(244,130,32,0.16)]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/70 sm:text-[11px]">
              Future Smart City
            </p>
          </div>

          <p className="hidden text-right text-[10px] font-bold uppercase tracking-[0.24em] text-white/45 sm:block">
            Near Purbachal New Town
          </p>
        </div>

        {/* Hero Content */}
        <div className="flex flex-1 items-center py-8 sm:py-10 lg:py-6">
          <div className="w-full max-w-[1100px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 border border-white/15 bg-white/[0.08] px-4 py-2.5 backdrop-blur-md">
              <FaLeaf className="shrink-0 text-sm text-[#F7A55A]" />

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/85 sm:text-[11px] sm:tracking-[0.24em]">
                Bangladesh&apos;s Eco-Conscious Township
              </p>
            </div>

            {/* One-Line Heading */}
            <h1 className="mt-6 whitespace-nowrap text-[clamp(2.65rem,6.2vw,6.9rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-white">
              Anondo{" "}
              <span className="text-[#F7A55A]">
                Bhubon
              </span>
            </h1>

            {/* Tagline */}
            <h2 className="mt-5 max-w-4xl text-xl font-medium leading-[1.2] tracking-[-0.025em] text-white/95 sm:text-2xl lg:text-[2.15rem]">
              A new horizon in eco-friendly urban living.
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/70 sm:text-base sm:leading-8">
              Discover a thoughtfully planned township where nature, wellness,
              connectivity and modern living come together in harmony.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="/Anondo%20Bhubon%20brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#F48220] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-[0_16px_40px_rgba(244,130,32,0.22)] transition duration-300 hover:bg-white hover:text-[#2C3A83] sm:text-sm"
              >
                <FiDownload className="text-base" />

                <span>Download Brochure</span>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 border border-white/25 bg-white/[0.08] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md transition duration-300 hover:border-white hover:bg-white hover:text-[#2C3A83] sm:text-sm"
              >
                <span>Request Consultation</span>

                <FiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Caption */}
        <div className="flex flex-col gap-3 border-t border-white/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#F7A55A]">
              Strategic Location
            </p>

            <p className="mt-1 text-sm font-semibold text-white/85">
              East of River Sitalakhya · Near Purbachal New Town
            </p>
          </div>

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            Nature · Wellness · Connectivity
          </p>
        </div>
      </div>
    </section>
  );
}