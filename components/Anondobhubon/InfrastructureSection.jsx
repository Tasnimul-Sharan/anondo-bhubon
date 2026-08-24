import Image from "next/image";
import { infrastructure } from "@/data/anondoBhubonData";

export default function InfrastructureSection() {
  return (
    <section
      id="infrastructure"
      className="relative isolate overflow-hidden bg-[#F5F3EE] py-20 sm:py-24 lg:py-32"
    >
      {/* Premium Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8F6F1_0%,#FFFFFF_50%,#EEF0F7_100%)]" />

        <div className="absolute -left-28 top-20 h-[360px] w-[360px] rounded-full bg-[#F48220]/10 blur-[110px]" />

        <div className="absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full bg-[#2C3A83]/10 blur-[130px]" />

        {/* Architectural Rings */}
        <div className="absolute -right-36 top-16 h-[430px] w-[430px] rounded-full border border-[#2C3A83]/[0.06]" />

        <div className="absolute -right-20 top-28 h-[310px] w-[310px] rounded-full border border-[#2C3A83]/[0.07]" />

        <div className="absolute right-4 top-44 h-[170px] w-[170px] rounded-full border border-[#F48220]/10" />

        {/* Structural Lines */}
        <div className="absolute left-[7%] top-0 h-full w-px bg-[#2C3A83]/[0.035]" />

        <div className="absolute right-[7%] top-0 h-full w-px bg-[#2C3A83]/[0.035]" />

        <div className="absolute left-0 top-[35%] h-px w-full bg-[#2C3A83]/[0.035]" />
      </div>

      <div className="site-shell relative z-10">
        {/* Section Header */}
        <div className="mb-12 grid gap-7 lg:mb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#F48220]" />

              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#F48220]">
                Green and Blue Infrastructure
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#17203A] sm:text-5xl lg:text-[3.65rem]">
              Infrastructure designed around nature, mobility and resilience.
            </h2>
          </div>

          <p className="max-w-xl text-[15px] font-medium leading-7 text-[#616779] lg:justify-self-end lg:text-right">
            Artificial rivers, canals, lakes, shaded walkways and planned road
            networks work together as environmental systems and everyday
            lifestyle amenities.
          </p>
        </div>

        {/* Infrastructure Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {infrastructure.map((item, index) => {
            const isLargeCard = index === 2;

            return (
              <article
                key={`${item.title}-${index}`}
                className={`group flex h-full flex-col overflow-hidden border border-[#2C3A83]/10 bg-white shadow-[0_14px_45px_rgba(27,35,75,0.07)] transition duration-500 hover:-translate-y-1.5 hover:border-[#F48220]/55 hover:shadow-[0_26px_70px_rgba(27,35,75,0.15)] ${
                  isLargeCard ? "md:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-[#E8EAF1] ${
                    isLargeCard
                      ? "aspect-[16/9] sm:aspect-[16/7]"
                      : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={index === 0}
                    sizes={
                      isLargeCard ? "100vw" : "(min-width: 768px) 50vw, 100vw"
                    }
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#17203A]/60 via-[#17203A]/5 to-transparent" />

                  {/* Number */}
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-[#202D72] text-sm font-bold text-white shadow-[0_10px_25px_rgba(22,31,77,0.25)] transition duration-300 group-hover:bg-[#F48220]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-5 left-5">
                    <p className="border border-white/20 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2C3A83] backdrop-blur-md">
                      Infrastructure Layer
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`relative flex flex-1 flex-col p-6 sm:p-7 ${
                    isLargeCard ? "lg:px-9 lg:py-8" : ""
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute -bottom-4 -right-1 select-none font-black leading-none tracking-[-0.08em] text-[#2C3A83]/[0.035] ${
                      isLargeCard ? "text-[130px]" : "text-[100px]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F48220]">
                      Anondo Bhubon
                    </p>

                    <h3
                      className={`mt-3 font-semibold leading-tight tracking-[-0.025em] text-[#20263A] ${
                        isLargeCard
                          ? "text-3xl sm:text-4xl"
                          : "text-2xl sm:text-[1.75rem]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-4 font-medium leading-7 text-[#616779] ${
                        isLargeCard ? "max-w-4xl text-[15px]" : "text-sm"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="relative z-10 mt-auto pt-8">
                    <div className="flex items-center justify-between border-t border-[#2C3A83]/10 pt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6F7587]">
                        Sustainable Planning
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
