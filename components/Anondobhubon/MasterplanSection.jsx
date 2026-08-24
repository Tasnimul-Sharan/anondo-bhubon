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

  if (!featuredPlan) return null;

  return (
    <section
      id="masterplan"
      className="relative isolate overflow-hidden bg-[#F4F2ED] py-20 sm:py-24 lg:py-32"
    >
      {/* Premium Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8F6F1_0%,#FFFFFF_48%,#EEF0F7_100%)]" />

        <div className="absolute -left-32 top-16 h-[380px] w-[380px] rounded-full bg-[#F48220]/10 blur-[115px]" />

        <div className="absolute -right-36 bottom-0 h-[500px] w-[500px] rounded-full bg-[#2C3A83]/10 blur-[135px]" />

        <div className="absolute -right-40 top-10 h-[440px] w-[440px] rounded-full border border-[#2C3A83]/[0.06]" />

        <div className="absolute -right-20 top-28 h-[300px] w-[300px] rounded-full border border-[#2C3A83]/[0.07]" />

        <div className="absolute right-8 top-44 h-[150px] w-[150px] rounded-full border border-[#F48220]/10" />

        <div className="absolute left-[7%] top-0 h-full w-px bg-[#2C3A83]/[0.035]" />

        <div className="absolute right-[7%] top-0 h-full w-px bg-[#2C3A83]/[0.035]" />
      </div>

      <div className="site-shell relative z-10">
        {/* Section Header */}
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#F48220]" />

              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#F48220]">
                Master Plan Framework
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#17203A] sm:text-5xl lg:text-[3.65rem]">
              A smart township structured around water, nature and civic life.
            </h2>
          </div>

          <p className="max-w-xl text-[15px] font-medium leading-7 text-[#616779] lg:justify-self-end lg:text-right">
            Every 100 bighas form a block, while four blocks create a sector.
            This modular planning approach allows the township to grow through
            connected lifestyle zones.
          </p>
        </div>

        {/* Featured Masterplan */}
        <article className="overflow-hidden border border-[#2C3A83]/10 bg-white shadow-[0_28px_80px_rgba(27,35,75,0.12)]">
          {/* Image Area */}
          <div className="relative min-h-[420px] overflow-hidden bg-[#F5F6F9] sm:min-h-[560px] lg:min-h-[680px]">
            <Image
              src={featuredPlan.image}
              alt={featuredPlan.title}
              fill
              priority
              sizes="100vw"
              className="object-contain p-4 transition duration-700 hover:scale-[1.015] sm:p-7 lg:p-10"
            />

            {/* Top Label */}
            <div className="absolute left-5 top-5 border border-[#2C3A83]/10 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-md sm:left-7 sm:top-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F48220]">
                Primary Layout
              </p>

              <p className="mt-1 text-sm font-semibold text-[#20263A]">
                Overall Township Plan
              </p>
            </div>

            {/* Number */}
            <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center bg-[#202D72] text-sm font-bold text-white shadow-[0_10px_25px_rgba(22,31,77,0.25)] sm:right-7 sm:top-7">
              01
            </div>
          </div>

          {/* Featured Content */}
          <div className="grid border-t border-[#2C3A83]/10 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F48220]">
                Masterplan Overview
              </p>

              <h3 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#20263A] sm:text-4xl">
                {featuredPlan.title}
              </h3>

              <p className="mt-5 max-w-3xl text-[15px] font-medium leading-7 text-[#616779]">
                {featuredPlan.text}
              </p>
            </div>

            {/* Planning Stats */}
            {/* <div className="grid border-t border-[#2C3A83]/10 bg-[#202D72] text-white sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-t-0">
              {planningStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-6 sm:p-7 ${
                    index !== planningStats.length - 1
                      ? "border-b border-white/15 sm:border-b-0 sm:border-r lg:border-b lg:border-r-0"
                      : ""
                  }`}
                >
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div> */}
          </div>
        </article>

        {/* Planning Layers Header */}
        <div className="mb-7 mt-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F48220]">
              Connected Planning Layers
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[#20263A] sm:text-3xl">
              The systems shaping the township.
            </h3>
          </div>

          <p className="max-w-lg text-sm font-medium leading-7 text-[#616779] sm:text-right">
            Each planning layer supports mobility, environment, services and
            everyday community life.
          </p>
        </div>

        {/* Other Plans */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {otherPlans.map((item, index) => {
            const isWide = index < 2;

            return (
              <article
                key={`${item.title}-${index}`}
                className={`group flex h-full flex-col overflow-hidden border border-[#2C3A83]/10 bg-white shadow-[0_14px_45px_rgba(27,35,75,0.07)] transition duration-500 hover:-translate-y-1.5 hover:border-[#F48220]/55 hover:shadow-[0_26px_70px_rgba(27,35,75,0.14)] ${
                  isWide
                    ? "md:col-span-1 lg:col-span-3"
                    : "md:col-span-1 lg:col-span-2"
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[#2C3A83]/10 bg-[#F5F6F9]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={
                      isWide
                        ? "(min-width: 1024px) 50vw, 100vw"
                        : "(min-width: 1024px) 33vw, 100vw"
                    }
                    className="object-contain p-4 transition duration-700 group-hover:scale-[1.035] sm:p-5"
                  />

                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center bg-[#202D72] text-xs font-bold text-white shadow-[0_10px_25px_rgba(22,31,77,0.2)] transition duration-300 group-hover:bg-[#F48220]">
                    {String(index + 2).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col p-6">
                  <span className="pointer-events-none absolute -bottom-3 -right-1 select-none text-[90px] font-black leading-none tracking-[-0.08em] text-[#2C3A83]/[0.035]">
                    {String(index + 2).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F48220]">
                      Planning Layer
                    </p>

                    <h3 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.025em] text-[#20263A] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm font-medium leading-7 text-[#616779]">
                      {item.text}
                    </p>
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