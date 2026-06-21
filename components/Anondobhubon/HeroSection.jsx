import Image from "next/image";
import { finalRenderAssets } from "@/data/finalRendersData";
import { FaLeaf } from "react-icons/fa";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] overflow-hidden bg-[#2C3A83] pt-16 text-white"
    >
      <Image
        src={finalRenderAssets.hero}
        alt="Anondo Bhubon hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,24,34,0.88),rgba(6,24,34,0.62)_10%,rgba(6,24,34,0.18)_50%,rgba(6,24,34,0.08)),linear-gradient(180deg,rgba(6,24,34,0.18),rgba(6,24,34,0.72))]" />

      {/* <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-r from-sky-700/50 via-cyan-500/20 to-white/10" /> */}
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(44,58,131,0.92),rgba(44,58,131,0.72)_32%,rgba(44,58,131,0.28)_64%,rgba(44,58,131,0.08)),linear-gradient(180deg,rgba(31,41,55,0.18),rgba(31,41,55,0.78))]" /> */}
      <div className="site-shell relative z-10 flex min-h-[calc(92vh-4rem)] items-center">
        <div className="max-w-4xl py-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
            <FaLeaf className="text-[#F48220]" />
            Bangladesh&apos;s eco-conscious township
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Anondo Bhubon
          </h1>

          <p className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-white/95 sm:text-3xl lg:text-4xl">
            A New Horizon in Eco-Friendly Urban Living
          </p>

          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/75 sm:text-lg">
            Discover Bangladesh&apos;s first eco-conscious township — where
            nature, wellness, and modern living exist in harmony.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-3 bg-[#F48220] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-white hover:text-[#2C3A83]"
              href="#contact"
            >
              <FiDownload className="text-base" />
              Download Brochure
            </a>

            <a
              className="inline-flex items-center justify-center gap-3 border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur transition duration-300 hover:bg-white hover:text-[#2C3A83]"
              href="#pricing"
            >
              View Pricing
              <FiArrowRight className="text-base" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
