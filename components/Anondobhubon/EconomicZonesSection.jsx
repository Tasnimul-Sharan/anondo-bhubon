import Image from "next/image";
import { economyContent as content, economyItems } from "@/data/homeContent";
import { finalRenderAssets } from "@/data/finalRendersData";

export default function EconomicZonesSection() {
  return (
    <section
      id="economic-zones"
      className="relative isolate overflow-hidden bg-[#F3F1EC] py-20 sm:py-24 lg:py-32"
    >
      {/* Architectural Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,58,131,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,58,131,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="absolute -left-40 top-16 h-[420px] w-[420px] rounded-full bg-[#F48220]/10 blur-[110px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#2C3A83]/10 blur-[130px]" />

        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2C3A83]/5" />

        <div className="absolute right-[8%] top-0 h-full w-px bg-[#2C3A83]/5" />

        <div className="absolute -bottom-10 right-0 select-none text-[140px] font-black uppercase leading-none tracking-[-0.08em] text-[#2C3A83]/[0.035] sm:text-[210px] lg:text-[300px]">
          Economy
        </div>
      </div>

      <div className="site-shell relative z-10">
        {/* Section Header */}
        <div className="mb-12 grid gap-7 lg:mb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#F48220]" />

              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#F48220]">
                {content.eyebrow}
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#17203A] sm:text-5xl lg:text-[3.65rem]">
              {content.title}
            </h2>
          </div>

          <p className="max-w-xl text-[15px] font-medium leading-7 text-[#616779] lg:justify-self-end lg:text-right">
            {content.intro}
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-7 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
          {/* Main Feature Card */}
          <article className="group relative min-h-[610px] overflow-hidden bg-[#202D72] shadow-[0_32px_90px_rgba(28,36,82,0.24)]">
            <Image
              src={finalRenderAssets.megaMall_Hub}
              alt="Commercial and economic hub at Anondo Bhubon"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition duration-1000 group-hover:scale-[1.035]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,60,0.1)_0%,rgba(15,23,60,0.38)_42%,rgba(15,23,60,0.97)_100%)]" />

            <div className="absolute inset-0 bg-[#2C3A83]/10 mix-blend-multiply" />

            {/* Top Badge */}
            <div className="absolute left-6 top-6 z-10 sm:left-8 sm:top-8">
              <div className="inline-flex items-center gap-3 border border-white/20 bg-[#17203A]/35 px-4 py-2.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#F48220] shadow-[0_0_0_5px_rgba(244,130,32,0.16)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/90">
                  {content.featureBadge}
                </span>
              </div>
            </div>

            {/* Large Number */}
            <span className="absolute right-6 top-5 z-10 text-5xl font-semibold tracking-[-0.06em] text-white/20 sm:right-8 sm:top-7 sm:text-6xl">
              01
            </span>

            {/* Bottom Content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#F7A55A]">
                {content.featureKicker}
              </p>

              <h3 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.35rem]">
                {content.featureTitle}
              </h3>

              <p className="mt-5 max-w-2xl text-[15px] font-medium leading-7 text-white/70">
                {content.featureText}
              </p>

              {/* Feature Footer */}
              <div className="mt-8 grid border-y border-white/15 sm:grid-cols-3">
                <div className="py-4 sm:pr-5">
                  <p className="text-lg font-semibold text-white">{content.featureHighlights[0].top}</p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                    {content.featureHighlights[0].bottom}
                  </p>
                </div>

                <div className="border-t border-white/15 py-4 sm:border-l sm:border-t-0 sm:px-5">
                  <p className="text-lg font-semibold text-white">{content.featureHighlights[1].top}</p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                    {content.featureHighlights[1].bottom}
                  </p>
                </div>

                <div className="border-t border-white/15 py-4 sm:border-l sm:border-t-0 sm:pl-5">
                  <p className="text-lg font-semibold text-white">{content.featureHighlights[2].top}</p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                    {content.featureHighlights[2].bottom}
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Investment Path Cards */}
          <div className="grid gap-5">
            {economyItems.map((item, index) => (
              <article
                key={item.name}
                className="group relative overflow-hidden border border-[#2C3A83]/10 bg-white p-6 shadow-[0_14px_45px_rgba(27,35,75,0.07)] transition duration-500 hover:-translate-y-1.5 hover:border-[#F48220]/55 hover:shadow-[0_24px_65px_rgba(27,35,75,0.14)] sm:p-7"
              >
                {/* Top Accent */}
                <div className="absolute right-0 top-0 h-1 w-16 bg-[#F48220] transition-all duration-500 group-hover:w-full" />

                {/* Background Number */}
                <span className="pointer-events-none absolute -bottom-5 -right-1 select-none text-[105px] font-black leading-none tracking-[-0.08em] text-[#2C3A83]/[0.035]">
                  {String(index + 2).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#EEF0F8] text-sm font-bold text-[#2C3A83] transition duration-300 group-hover:bg-[#2C3A83] group-hover:text-white">
                      {String(index + 2).padStart(2, "0")}
                    </span>

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F48220]">
                      {item.tag}
                    </span>
                  </div>

                  <div className="mt-7">
                    <h3 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#20263A]">
                      {item.name}
                    </h3>

                    <p className="mt-4 text-sm font-medium leading-7 text-[#616779]">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="flex items-center justify-between border-t border-[#2C3A83]/10 pt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6F7587]">
                        Anondo Bhubon
                      </p>

                      <span className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#2C3A83]/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[#F48220]" />

                        <span className="text-lg leading-none text-[#2C3A83]/40 transition duration-300 group-hover:translate-x-1 group-hover:text-[#F48220]">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
