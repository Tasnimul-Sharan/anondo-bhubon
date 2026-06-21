import Image from "next/image";
import { investmentPaths } from "@/data/anondoBhubonData";
import { finalRenderAssets } from "@/data/finalRendersData";

export default function EconomicZonesSection() {
  return (
    <section className="bg-[#FFFFFF] py-20 md:py-24">
      <div className="site-shell">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-[#F48220]" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#5F6AA2]">
              Commercial and Economic Zones
            </p>
            <span className="h-[2px] w-12 bg-[#F48220]" />
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-5xl">
            A self-sufficient lifestyle ecosystem with its own knowledge
            economy.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-[#1F2937]/75">
            Anondo Bhubon integrates IT parks, green-certified offices, daily
            markets, civic services, logistics and transit support into the same
            township framework.
          </p>
        </div>

        {/* Main Layout: Left 1 Card + Right 3 Cards */}
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          {/* Left Big Card */}
          <article className="group flex h-full flex-col overflow-hidden border border-[#5F6AA2]/20 bg-[#FFFFFF] shadow-sm transition duration-300 hover:border-[#2C3A83]/30 hover:shadow-md">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#5F6AA2]/10 lg:flex-1">
              <Image
                src={finalRenderAssets.megaMall}
                alt="IT and cyber business hub"
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/60 via-[#1F2937]/10 to-transparent" />

              <div className="absolute left-5 top-5 border border-[#5F6AA2]/20 bg-[#FFFFFF]/95 px-4 py-3 shadow-sm backdrop-blur">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F48220]">
                  Economic Anchor
                </p>
                <p className="mt-1 text-sm font-bold text-gray-700">
                  IT & Cyber Business Hub
                </p>
              </div>
            </div>

            <div className="border-t border-[#5F6AA2]/20 p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F48220]">
                Knowledge Economy
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-gray-700">
                A future-ready commercial ecosystem within the township.
              </h3>

              <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-[#1F2937]/75">
                Planned business zones, innovation spaces, civic services and
                essential commercial support are integrated to create long-term
                lifestyle value and economic opportunity.
              </p>

              <span className="mt-6 block h-[3px] w-16 bg-[#F48220]" />
            </div>
          </article>

          {/* Right 3 Cards */}
          <div className="grid h-full gap-5">
            {investmentPaths.map((item, index) => (
              <article
                key={item.name}
                className="group flex border border-[#5F6AA2]/20 bg-[#FFFFFF] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2C3A83]/35 hover:shadow-md"
              >
                <div className="w-[3px] bg-[#2C3A83] transition duration-300 group-hover:bg-[#F48220]" />

                <div className="flex flex-1 gap-5 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#2C3A83] text-sm font-bold text-[#FFFFFF] transition duration-300 group-hover:bg-[#F48220]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>

                    <h3 className="mt-2 text-2xl font-bold leading-tight tracking-[-0.02em] text-gray-700">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-[#1F2937]/75">
                      {item.text}
                    </p>

                    <span className="mt-5 block h-[3px] w-12 bg-[#F48220] transition-all duration-300 group-hover:w-20" />
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
