import Image from "next/image";
import { residences } from "@/data/anondoBhubonData";

export default function ResidencesSection() {
  return (
    <section
      id="residences"
      className="relative isolate overflow-hidden bg-[#F4F2ED] py-20 text-[#1F2937] sm:py-24 lg:py-32"
    >
      {/* Premium Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8F6F1_0%,#FFFFFF_48%,#EEF0F7_100%)]" />

        <div className="absolute -left-32 top-20 h-[380px] w-[380px] rounded-full bg-[#F48220]/10 blur-[115px]" />

        <div className="absolute -right-36 bottom-0 h-[500px] w-[500px] rounded-full bg-[#2C3A83]/10 blur-[135px]" />

        {/* Architectural Shapes */}
        <div className="absolute -right-40 top-14 h-[440px] w-[440px] rounded-full border border-[#2C3A83]/[0.06]" />

        <div className="absolute -right-20 top-32 h-[300px] w-[300px] rounded-full border border-[#2C3A83]/[0.07]" />

        <div className="absolute right-8 top-48 h-[150px] w-[150px] rounded-full border border-[#F48220]/10" />

        <div className="absolute left-[7%] top-0 h-full w-px bg-[#2C3A83]/[0.035]" />

        <div className="absolute right-[7%] top-0 h-full w-px bg-[#2C3A83]/[0.035]" />

        <div className="absolute bottom-[18%] left-0 h-px w-full bg-[#2C3A83]/[0.035]" />
      </div>

      <div className="site-shell relative z-10">
        {/* Section Header */}
        <div className="mb-12 grid gap-7 lg:mb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#F48220]" />

              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#F48220]">
                Residential Components
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#17203A] sm:text-5xl lg:text-[3.65rem]">
              Refined homes designed around privacy and modern family life.
            </h2>
          </div>

          <p className="max-w-xl text-[15px] font-medium leading-7 text-[#616779] lg:justify-self-end lg:text-right">
            Luxury villas, mid-rise apartments and condominiums are planned as
            distinct residential neighbourhoods with access to parks, canals,
            civic amenities and connected mobility.
          </p>
        </div>

        {/* Residence Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {residences.map((home, index) => {
            const isFeatured = index === 2;

            return (
              <article
                key={`${home.title}-${index}`}
                className={`group relative overflow-hidden border border-[#2C3A83]/10 bg-white shadow-[0_16px_50px_rgba(27,35,75,0.08)] transition duration-500 hover:-translate-y-1.5 hover:border-[#F48220]/55 hover:shadow-[0_28px_75px_rgba(27,35,75,0.16)] ${
                  isFeatured ? "lg:col-span-2" : ""
                }`}
              >
                {isFeatured ? (
                  /* Featured Third Residence */
                  <div className="flex h-full flex-col">
                    {/* Featured Image */}
                    <div className="relative h-[380px] overflow-hidden bg-[#E8EAF1] sm:h-[480px] lg:h-[560px]">
                      <Image
                        src={home.image}
                        alt={home.title}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover transition duration-1000 group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#17203A]/55 via-transparent to-transparent" />

                      {/* Number */}
                      <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center bg-[#202D72] text-sm font-bold text-white shadow-[0_12px_30px_rgba(22,31,77,0.3)] transition duration-300 group-hover:bg-[#F48220] sm:left-8 sm:top-8">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Category */}
                      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
                        <p className="border border-white/20 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2C3A83] backdrop-blur-md">
                          Signature Residence
                        </p>
                      </div>
                    </div>

                    {/* Featured Content */}
                    <div className="relative overflow-hidden bg-[#202D72] p-7 text-white sm:p-10 lg:p-12">
                      {/* Background Decoration */}
                      <div className="pointer-events-none absolute inset-0">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px]" />

                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

                        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#F48220]/15 blur-3xl" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                          <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-3 border border-white/15 bg-white/[0.06] px-4 py-2.5">
                              <span className="h-2 w-2 rounded-full bg-[#F48220] shadow-[0_0_0_5px_rgba(244,130,32,0.15)]" />

                              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/80">
                                Premium Living
                              </span>
                            </div>

                            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.26em] text-[#F7A55A]">
                              Anondo Bhubon
                            </p>

                            <h3 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.8rem]">
                              {home.title}
                            </h3>

                            <p className="mt-5 max-w-3xl text-[15px] font-medium leading-7 text-white/70">
                              {home.audience}
                            </p>
                          </div>

                          {/* Highlights */}
                          <div className="grid min-w-full grid-cols-2 border-y border-white/15 lg:min-w-[360px]">
                            <div className="border-r border-white/15 py-5 pr-5">
                              <p className="text-xl font-semibold text-white">
                                Private
                              </p>

                              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                                Community
                              </p>
                            </div>

                            <div className="py-5 pl-5">
                              <p className="text-xl font-semibold text-white">
                                Refined
                              </p>

                              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                                Lifestyle
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-9 flex items-center justify-between border-t border-white/15 pt-6">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                            Residential Collection
                          </p>

                          <span className="flex items-center gap-3">
                            <span className="h-px w-9 bg-[#F48220] transition-all duration-300 group-hover:w-14" />

                            <span className="text-lg text-[#F48220] transition duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard Residence Cards */
                  <div className="flex h-full flex-col">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#E8EAF1]">
                      <Image
                        src={home.image}
                        alt={home.title}
                        fill
                        priority={index === 0}
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.05]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#17203A]/60 via-transparent to-transparent" />

                      <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-[#202D72] text-sm font-bold text-white shadow-[0_10px_25px_rgba(22,31,77,0.28)] transition duration-300 group-hover:bg-[#F48220]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="absolute bottom-5 left-5">
                        <p className="border border-white/20 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2C3A83] backdrop-blur-md">
                          Residence Type
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
                          {home.title}
                        </h3>

                        <p className="mt-4 text-sm font-medium leading-7 text-[#616779]">
                          {home.audience}
                        </p>
                      </div>

                      <div className="relative z-10 mt-auto pt-8">
                        <div className="flex items-center justify-between border-t border-[#2C3A83]/10 pt-5">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6F7587]">
                            Residential Collection
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
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
