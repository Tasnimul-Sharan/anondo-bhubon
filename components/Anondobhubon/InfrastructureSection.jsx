import Image from "next/image";
import { infrastructure } from "@/data/anondoBhubonData";

export default function InfrastructureSection() {
  const featuredItem = infrastructure[0];
  const otherItems = infrastructure.slice(1);

  return (
    <section className="bg-[#FFFFFF] py-20 sm:py-24 lg:py-28">
      <div className="site-shell">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-[#F48220]" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#5F6AA2]">
              Green and Blue Infrastructure
            </p>
            <span className="h-[2px] w-12 bg-[#F48220]" />
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-5xl">
            Water systems, forest routes and calm streets form the township
            backbone.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-[#1F2937]/75">
            The plan uses artificial rivers, canals, lakes, shaded walkways and
            road architecture as daily amenities and as practical environmental
            systems.
          </p>
        </div>

        {/* Featured Full Width Card */}
        <article className="overflow-hidden border border-[#5F6AA2]/20 bg-white shadow-sm transition duration-300 hover:shadow-md">
          <div className="relative aspect-[16/8] overflow-hidden bg-[#5F6AA2]/10">
            <Image
              src={featuredItem.image}
              alt={featuredItem.title}
              fill
              priority
              sizes="100vw"
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />
            <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-[#2C3A83] text-sm font-bold text-white">
              {String(1 + 0).padStart(1, "0")}
            </div>
          </div>

          <div className="border-t border-[#5F6AA2]/20 p-6 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F48220]">
              01 / Core Infrastructure
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-gray-700 sm:text-4xl">
              {featuredItem.title}
            </h3>

            <p className="mt-4 max-w-4xl text-sm font-medium leading-7 text-[#1F2937]/75">
              {featuredItem.text}
            </p>

            <span className="mt-6 block h-[3px] w-16 bg-[#F48220]" />
          </div>
        </article>

        {/* Other Items Grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherItems.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden border border-[#5F6AA2]/20 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2C3A83]/30 hover:shadow-md"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#5F6AA2]/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-[#2C3A83] text-sm font-bold text-white">
                  {String(index + 2).padStart(2, "0")}
                </div>
              </div>

              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F48220]">
                  Infrastructure Layer
                </p>

                <h3 className="mt-2 text-2xl font-bold leading-tight tracking-[-0.02em] text-gray-700">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-[#1F2937]/75">
                  {item.text}
                </p>

                <span className="mt-5 block h-[3px] w-12 bg-[#F48220] transition-all duration-300 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
