// import { benefits } from "@/data/anondoBhubonData";

// export default function BenefitsSection() {
//   return (
//     <section
//       id="pricing"
//       className="relative overflow-hidden bg-[#2C3A83] py-20 text-[#FFFFFF] sm:py-24 lg:py-28"
//     >
//       <div className="site-shell relative">
//         {/* Section Header */}
//         <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
//           <div>
//             <div className="flex items-center gap-4">
//               <span className="h-[2px] w-12 bg-[#F48220]" />
//               <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#FFFFFF]/75">
//                 Core Features and Benefits
//               </p>
//             </div>

//             <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#FFFFFF] sm:text-5xl">
//               Designed for sustainability, security and long-term value.
//             </h2>
//           </div>

//           <p className="max-w-2xl text-base font-medium leading-8 text-[#FFFFFF]/70 lg:justify-self-end">
//             The township combines environmental systems, private security, civic
//             services, mobility links and community amenities into one integrated
//             development model.
//           </p>
//         </div>

//         {/* Main Layout */}
//         <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
//           {/* Left CTA Card */}
//           <div className="flex flex-col justify-between border border-[#FFFFFF]/15 bg-[#FFFFFF]/8 p-7 backdrop-blur-sm sm:p-8">
//             <div>
//               <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F48220]">
//                 Advisory Support
//               </p>

//               <h3 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#FFFFFF]">
//                 Explore pricing, availability and investment opportunities.
//               </h3>

//               <p className="mt-4 text-sm font-medium leading-7 text-[#FFFFFF]/70">
//                 Connect with an advisor to understand residence options,
//                 development phases, sector planning and long-term value
//                 potential.
//               </p>
//             </div>

//             <div className="mt-8">
//               <a
//                 href="#contact"
//                 className="inline-flex items-center justify-center bg-[#F48220] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#FFFFFF] transition duration-300 hover:bg-[#FFFFFF] hover:text-[#2C3A83]"
//               >
//                 Request Advisor Pricing
//               </a>
//             </div>
//           </div>

//           {/* Benefits Grid */}
//           <div className="grid gap-5 sm:grid-cols-2">
//             {benefits.map((benefit, index) => (
//               <article
//                 key={benefit}
//                 className="group border border-[#FFFFFF]/15 bg-[#FFFFFF] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#F48220]/60 hover:shadow-lg"
//               >
//                 <div className="flex items-start gap-4">
//                   <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#2C3A83] text-sm font-bold text-[#FFFFFF] transition duration-300 group-hover:bg-[#F48220]">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <div>
//                     <p className="mt-3 text-sm font-semibold leading-7 text-[#1F2937]/80">
//                       {benefit}
//                     </p>

//                     <span className="mt-5 block h-[3px] w-10 bg-[#F48220] transition-all duration-300 group-hover:w-20" />
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { benefits } from "@/data/anondoBhubonData";

export default function BenefitsSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#253176] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#F48220]/15 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-4 border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
              <span className="h-[2px] w-10 bg-[#F48220]" />

              <p className="text-xs font-bold uppercase tracking-[0.26em] text-white/75">
                Core Features and Benefits
              </p>
            </div>

            <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.06] tracking-[-0.04em] text-white md:text-5xl">
              Designed for sustainability, security and long-term value.
            </h2>
          </div>

          <p className="max-w-2xl text-base font-medium leading-8 text-white/70 lg:justify-self-end">
            The township combines environmental systems, private security, civic
            services, mobility links and community amenities into one integrated
            development model.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
          {/* Left CTA Card */}
          <div className="group relative flex min-h-[460px] flex-col justify-between overflow-hidden border border-white/15 bg-white/10 p-7 shadow-[0_24px_70px_rgba(0,0,0,0.20)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-[#F48220]/60 sm:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-[#F48220]/25 blur-2xl transition duration-500 group-hover:bg-[#F48220]/35" />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F48220]">
                Advisory Support
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
                Explore pricing, availability and investment opportunities.
              </h3>

              <p className="mt-5 text-sm font-medium leading-7 text-white/70">
                Connect with an advisor to understand residence options,
                development phases, sector planning and long-term value
                potential.
              </p>
            </div>

            <div className="relative z-10 mt-10">
              <div className="mb-6 grid grid-cols-2 border border-white/15 bg-white/10">
                <div className="border-r border-white/15 p-4">
                  <p className="text-2xl font-bold text-white">24/7</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/55">
                    Support
                  </p>
                </div>

                <div className="p-4">
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/55">
                    Planned
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center bg-[#F48220] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-white hover:text-[#2C3A83]"
              >
                Request Advisor Pricing
              </a>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article
                key={benefit}
                className="group flex min-h-[170px] flex-col justify-between border border-white/15 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-[#F48220]/70 hover:shadow-[0_24px_70px_rgba(0,0,0,0.20)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#2C3A83] text-sm font-bold text-white transition duration-300 group-hover:bg-[#F48220]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="pt-2 text-sm font-semibold leading-7 text-[#1F2937]/80">
                    {benefit}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#5F6AA2]/20 pt-5">
                  <div className="relative h-[3px] w-24 overflow-hidden">
                    <span className="absolute left-0 top-0 h-full w-10 bg-[#F48220] transition-all duration-500 ease-out group-hover:w-full" />
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
