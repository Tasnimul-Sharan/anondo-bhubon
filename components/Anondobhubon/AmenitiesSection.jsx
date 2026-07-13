import Image from "next/image";
import { amenities } from "@/data/anondoBhubonData";

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="relative isolate overflow-hidden bg-[#F3F1EC] py-20 sm:py-24 lg:py-32"
    >
      {/* Premium Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#F7F5F0_0%,#FFFFFF_48%,#EEF0F7_100%)]" />

        {/* Soft Orange Glow */}
        <div className="absolute -left-24 top-16 h-[340px] w-[340px] rounded-full bg-[#F48220]/10 blur-[100px]" />

        {/* Soft Navy Glow */}
        <div className="absolute -right-28 bottom-0 h-[440px] w-[440px] rounded-full bg-[#2C3A83]/10 blur-[120px]" />

        {/* Architectural Rings */}
        <div className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full border border-[#2C3A83]/[0.07]" />

        <div className="absolute -right-16 top-24 h-[290px] w-[290px] rounded-full border border-[#2C3A83]/[0.08]" />

        <div className="absolute right-8 top-40 h-[160px] w-[160px] rounded-full border border-[#F48220]/10" />

        {/* Bottom Flow Shape */}
        <div className="absolute -bottom-40 left-[10%] h-[260px] w-[80%] rotate-[-4deg] rounded-[50%] bg-[#2C3A83]/[0.035] blur-sm" />

        {/* Minimal Accent Lines */}
        <div className="absolute left-[6%] top-0 h-full w-px bg-[#2C3A83]/[0.04]" />

        <div className="absolute right-[6%] top-0 h-full w-px bg-[#2C3A83]/[0.04]" />

        <div className="absolute left-0 top-[32%] h-px w-full bg-[#2C3A83]/[0.04]" />
      </div>

      <div className="site-shell relative z-10">
        {/* Section Header */}
        <div className="mb-12 grid gap-7 lg:mb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#F48220]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F48220]">
                Urban Amenities and Facilities
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#17203A] sm:text-5xl lg:text-[3.65rem]">
              Everyday spaces shaped around wellness and community.
            </h2>
          </div>

          <p className="max-w-xl text-[15px] font-medium leading-7 text-[#616779] lg:justify-self-end lg:text-right">
            From clubhouses and sports courts to riverside walks, meditation
            decks, landscaped gardens and family spaces, every facility is
            designed to enrich daily life.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {amenities.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="group flex h-full flex-col overflow-hidden border border-[#2C3A83]/10 bg-white shadow-[0_14px_45px_rgba(27,35,75,0.07)] transition duration-500 hover:-translate-y-1.5 hover:border-[#F48220]/55 hover:shadow-[0_24px_65px_rgba(27,35,75,0.14)]"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E8EAF1]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#17203A]/55 via-transparent to-transparent" />

                {/* Number */}
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-[#202D72] text-sm font-bold text-white shadow-[0_10px_25px_rgba(22,31,77,0.25)] transition duration-300 group-hover:bg-[#F48220]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Category */}
                <div className="absolute bottom-5 left-5">
                  <p className="border border-white/20 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2C3A83] backdrop-blur-md">
                    Lifestyle Facility
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                <span className="pointer-events-none absolute -bottom-4 -right-1 select-none text-[100px] font-black leading-none tracking-[-0.08em] text-[#2C3A83]/[0.035]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F48220]">
                    Anondo Bhubon
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#20263A] sm:text-[1.75rem]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-[#616779]">
                    {item.description ||
                      "A planned township facility designed to support comfort, convenience, recreation and community life."}
                  </p>
                </div>

                {/* Footer */}
                <div className="relative z-10 mt-auto pt-8">
                  <div className="flex items-center justify-between border-t border-[#2C3A83]/10 pt-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6F7587]">
                      Community Lifestyle
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
    </section>
  );
}
