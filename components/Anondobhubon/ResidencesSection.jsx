import Image from "next/image";
import { residences } from "@/data/anondoBhubonData";

export default function ResidencesSection() {
  return (
    <section
      id="residences"
      className="bg-gradient-to-br from-[#F8F6F0] via-[#FFFFFF] to-[#EEF2F7] py-20 text-[#1F2937] sm:py-24 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-[#F48220]" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#2C3A83]/75">
              Residential Components
            </p>

            <span className="h-[2px] w-12 bg-[#F48220]" />
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-5xl">
            Homes designed for privacy, family growth and efficient city living.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-[#1F2937]/70">
            Luxury villas, mid-rise apartments and condominiums are placed as
            distinct neighborhoods with shared access to parks, canals, civic
            amenities and transit.
          </p>
        </div>

        {/* Residence Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {residences.map((home, index) => {
            const isThirdCard = index === 2;

            return (
              <article
                key={home.title}
                className={`group flex h-full flex-col overflow-hidden border border-[#E5E7EB] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isThirdCard ? "lg:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-[#F3F4F8] ${
                    isThirdCard
                      ? "h-[380px] sm:h-[460px] lg:h-[560px]"
                      : "h-[320px] sm:h-[360px] lg:h-[380px]"
                  }`}
                >
                  <Image
                    src={home.image}
                    alt={home.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes={
                      isThirdCard
                        ? "(min-width: 1024px) 100vw, 100vw"
                        : "(min-width: 1024px) 50vw, 100vw"
                    }
                    priority={index < 3}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/55 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-[#2C3A83] text-sm font-bold text-white shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="inline-flex bg-[#F48220] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                      Residence Type
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isThirdCard ? "p-8 lg:p-10" : "p-6"}`}>
                  <h3
                    className={`font-bold leading-tight tracking-[-0.02em] text-gray-700 ${
                      isThirdCard ? "text-3xl lg:text-4xl" : "text-2xl"
                    }`}
                  >
                    {home.title}
                  </h3>

                  <p
                    className={`mt-3 font-medium text-[#1F2937]/75 ${
                      isThirdCard
                        ? "max-w-4xl text-base leading-8"
                        : "text-sm leading-7"
                    }`}
                  >
                    {home.audience}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#5F6AA2]/20 pt-5">
                    <span className="h-[3px] w-12 bg-[#F48220] transition-all duration-300 group-hover:w-20" />
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
