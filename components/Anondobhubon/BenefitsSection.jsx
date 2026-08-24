import {
  FaArrowRight,
  FaBuilding,
  FaChartLine,
  FaHome,
  FaLeaf,
  FaRoad,
  FaShieldAlt,
  FaTree,
} from "react-icons/fa";

import { benefits } from "@/data/anondoBhubonData";

const benefitIcons = [
  FaLeaf,
  FaShieldAlt,
  FaRoad,
  FaBuilding,
  FaChartLine,
  FaTree,
  FaHome,
];

export default function BenefitsSection() {
  return (
    <section
      id="pricing"
      className="relative isolate overflow-hidden bg-[#F3F1EC] py-20 sm:py-24 lg:py-32"
    >
      {/* Architectural Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,58,131,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,58,131,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* Soft Ambient Shapes */}
        <div className="absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-[#F48220]/10 blur-[110px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#2C3A83]/10 blur-[130px]" />

        {/* Structural Lines */}
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2C3A83]/5" />

        <div className="absolute right-[8%] top-0 h-full w-px bg-[#2C3A83]/5" />

        <div className="absolute left-0 top-[27%] h-px w-full bg-[#2C3A83]/5" />

        {/* Large Background Text */}
        <div className="absolute -bottom-14 right-0 select-none text-[150px] font-black uppercase leading-none tracking-[-0.08em] text-[#2C3A83]/[0.035] sm:text-[220px] lg:text-[310px]">
          Value
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 grid gap-7 lg:mb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#F48220]" />

              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#F48220]">
                Core Features and Benefits
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#17203A] sm:text-5xl lg:text-[3.65rem]">
              Designed for sustainable living and enduring value.
            </h2>
          </div>

          <p className="max-w-xl text-[15px] font-medium leading-7 text-[#616779] lg:justify-self-end lg:text-right">
            An integrated township combining environmental planning,
            infrastructure, security, mobility and community facilities within
            one thoughtfully developed destination.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          {/* Left Advisory Panel */}
          <aside className="relative overflow-hidden bg-[#202D72] p-7 text-white shadow-[0_30px_90px_rgba(30,39,91,0.24)] sm:p-9 lg:sticky lg:top-28 lg:p-10">
            {/* Panel Decoration */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px]" />

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

              <div className="absolute -right-6 -top-6 h-36 w-36 rounded-full border border-white/10" />

              <div className="absolute bottom-0 left-0 h-40 w-40 border-r border-t border-white/[0.07]" />

              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#F48220]/15 blur-3xl" />
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 border border-white/15 bg-white/[0.07] px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#F48220] shadow-[0_0_0_5px_rgba(244,130,32,0.15)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                  Advisory Support
                </span>
              </div>

              <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-[#F7A55A]">
                Invest With Confidence
              </p>

              <h3 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl">
                Explore availability, pricing and investment potential.
              </h3>

              <p className="mt-5 text-[15px] font-medium leading-7 text-white/65">
                Speak with a dedicated advisor to understand residence options,
                development phases, sector planning and long-term ownership
                opportunities.
              </p>

              {/* Statistics */}
              <div className="mt-9 grid grid-cols-2 border-y border-white/15">
                <div className="border-r border-white/15 py-5 pr-5">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    {String(benefits.length).padStart(2, "0")}
                  </p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Core Benefits
                  </p>
                </div>

                <div className="py-5 pl-5">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    24/7
                  </p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Client Support
                  </p>
                </div>
              </div>

              {/* Advisory Features */}
              <div className="mt-8 space-y-4">
                {[
                  "Project pricing and availability",
                  "Residence and investment options",
                  "Private consultation and site visit",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#F48220]/35 bg-[#F48220]/10">
                      <span className="h-1.5 w-1.5 bg-[#F48220]" />
                    </span>

                    <p className="text-sm font-semibold text-white/75">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="group mt-9 flex w-full items-center justify-between bg-[#F48220] px-5 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-white hover:text-[#2C3A83]"
              >
                <span>Request Advisor Pricing</span>

                <span className="flex h-9 w-9 items-center justify-center bg-white/15 transition duration-300 group-hover:bg-[#2C3A83]/10">
                  <FaArrowRight className="text-xs transition duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </aside>

          {/* Benefits Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = benefitIcons[index % benefitIcons.length];

              return (
                <article
                  key={`${benefit}-${index}`}
                  className="group relative min-h-[230px] overflow-hidden border border-[#2C3A83]/10 bg-white p-6 shadow-[0_14px_45px_rgba(27,35,75,0.07)] transition duration-500 hover:-translate-y-1.5 hover:border-[#F48220]/55 hover:shadow-[0_24px_65px_rgba(27,35,75,0.14)] sm:p-7"
                >
                  {/* Card Accent */}
                  <div className="absolute right-0 top-0 h-1 w-16 bg-[#F48220] transition-all duration-500 group-hover:w-full" />

                  {/* Decorative Number */}
                  <span className="pointer-events-none absolute -bottom-5 -right-1 select-none text-[100px] font-black leading-none tracking-[-0.08em] text-[#2C3A83]/[0.035]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Top Row */}
                    <div className="flex items-start justify-between gap-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#EEF0F8] text-[#2C3A83] transition duration-300 group-hover:bg-[#2C3A83] group-hover:text-white">
                        <Icon className="text-lg" />
                      </span>

                      <span className="text-xs font-bold tracking-[0.18em] text-[#2C3A83]/30 transition duration-300 group-hover:text-[#F48220]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Benefit Content */}
                    <div className="mt-7">
                      <p className="text-base font-semibold leading-7 text-[#20263A]">
                        {benefit}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-8">
                      <div className="flex items-center justify-between border-t border-[#2C3A83]/10 pt-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6F7587]">
                          Anondo Bhubon
                        </p>

                        <FaArrowRight className="text-xs text-[#2C3A83]/30 transition duration-300 group-hover:translate-x-1 group-hover:text-[#F48220]" />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
