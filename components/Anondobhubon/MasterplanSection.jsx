import Image from "next/image";
import { planItems } from "@/data/anondoBhubonData";

const planningStats = [
  { value: "100", label: "Bigha per block" },
  { value: "400", label: "Bigha per sector" },
  { value: "6", label: "Planning layers" },
];

export default function MasterplanSection() {
  const featuredPlan = planItems[0];
  const otherPlans = planItems.slice(1);

  return (
    <section
      id="masterplan"
      className="border-y border-[#E5E7EB] bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="site-shell">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#F48220]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-600">
              Master Plan Framework
            </p>

            <span className="h-[2px] w-10 bg-[#F48220]" />
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-[1.12] tracking-[-0.03em] text-gray-900 sm:text-5xl">
            A sector-based smart community organized around water, shade, and
            civic life.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#1F2937]/70">
            Every 100 bighas form a block. Four blocks form a sector, allowing
            the township to grow in distinct lifestyle zones while staying
            connected by a unified green and blue network.
          </p>
        </div>

        {/* Featured Area */}
        <div className="grid gap-6 lg:grid-cols-1">
          {/* Featured Masterplan */}
          <article className="border border-[#E5E7EB] bg-white">
            <div className="relative aspect-[16/10] overflow-hidden bg-white">
              <Image
                src={featuredPlan.image}
                alt={featuredPlan.title}
                fill
                priority
                sizes="(min-width: 1024px) 1120px, 100vw"
                className="object-contain p-3 sm:p-5"
              />

              <div className="absolute left-4 top-4 border border-[#E5E7EB] bg-white/95 px-4 py-3 shadow-sm backdrop-blur">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F48220]">
                  Primary Layout
                </p>

                <p className="mt-1 text-sm font-bold text-gray-900">
                  Overall Township Plan
                </p>
              </div>
            </div>

            <div className="border-t border-[#E5E7EB] px-6 py-5 sm:px-7 sm:py-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F48220]">
                01 / Masterplan
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-tight tracking-[-0.02em] text-gray-900 sm:text-3xl">
                {featuredPlan.title}
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#1F2937]/70">
                {featuredPlan.text}
              </p>
            </div>
          </article>

          {/* Planning Intelligence */}
          {/* <aside className="border border-[#E5E7EB] bg-[#F8F9FC] p-6 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F48220]">
              Planning Intelligence
            </p>

            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.02em] text-gray-900 sm:text-3xl">
              A complete township logic built around land use, movement, and
              green-blue infrastructure.
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#1F2937]/70">
              Residential zones, civic anchors, water bodies, road networks,
              pedestrian corridors, and ecological buffers are planned as one
              connected development framework.
            </p>

            <div className="mt-7 grid gap-3">
              {planningStats.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border border-[#E5E7EB] bg-white p-4"
                >
                  <p className="text-sm font-medium leading-6 text-[#1F2937]/65">
                    {item.label}
                  </p>

                  <p className="text-3xl font-bold tracking-[-0.03em] text-gray-900">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-l-2 border-[#F48220] bg-white px-5 py-4">
              <p className="text-sm font-semibold leading-7 text-[#1F2937]/75">
                Designed for long-term value through controlled density,
                environmental balance, future mobility, and planned civic
                access.
              </p>
            </div>
          </aside> */}
        </div>

        {/* Other Plans */}
        <div className="mt-6 grid gap-5 lg:grid-cols-6">
          {otherPlans.map((item, index) => (
            <article
              key={item.title}
              className={`group border border-[#E5E7EB] bg-white transition duration-300 hover:border-gray-900/25 hover:bg-[#F8F9FC] ${
                index < 2 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-[#E5E7EB] bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-contain p-3 sm:p-4"
                />

                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-gray-900 text-sm font-bold text-white">
                  {String(index + 2).padStart(2, "0")}
                </div>
              </div>

              <div className="p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F48220]">
                  Planning Layer
                </p>

                <h3 className="mt-2 text-xl font-bold leading-tight tracking-[-0.02em] text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#1F2937]/70">
                  {item.text}
                </p>

                <span className="mt-5 block h-[2px] w-12 bg-[#F48220] transition-all duration-300 group-hover:w-20" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
