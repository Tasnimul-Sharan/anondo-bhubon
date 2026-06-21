import { timeline } from "@/data/anondoBhubonData";

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-[#F8F9FC] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#F48220]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-16 h-96 w-96 rounded-full bg-[#2C3A83]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-5xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-[#F48220]" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#5F6AA2]">
              Implementation Timeline
            </p>

            <span className="h-[2px] w-12 bg-[#F48220]" />
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-5xl">
            A phased path from infrastructure to full smart integration.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-[#1F2937]/75">
            Development is organized to establish the ground systems first, then
            bring homes, water landscapes, business zones, civic facilities and
            full township services online.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Desktop Connector Line */}
          <div className="absolute left-0 right-0 top-[42px] hidden h-[2px] bg-[#5F6AA2]/20 lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <article
                key={item.phase}
                className="group relative flex h-full flex-col overflow-hidden border border-[#5F6AA2]/20 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-[#2C3A83]/35 hover:shadow-[0_24px_70px_rgba(31,41,55,0.14)]"
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-[#F48220]/20">
                  <span className="block h-full w-0 bg-[#F48220] transition-all duration-500 ease-out group-hover:w-full" />
                </div>

                {/* Number */}
                <div className="relative z-10 mb-7 flex h-20 w-20 items-center justify-center border-[6px] border-[#F8F9FC] bg-[#2C3A83] text-xl font-bold text-white shadow-sm transition duration-300 group-hover:bg-[#F48220]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F48220]">
                  {item.phase}
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.02em] text-[#2C3A83]">
                  {item.dates}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-[#1F2937]/75">
                  {item.scope}
                </p>

                <div className="mt-auto pt-7">
                  <div className="flex items-center justify-between border-t border-[#5F6AA2]/20 pt-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5F6AA2]/70">
                      Development Phase
                    </p>

                    <div className="relative h-[3px] w-24 overflow-hidden ">
                      <span className="absolute left-0 top-0 h-full w-10 bg-[#F48220] transition-all duration-500 ease-out group-hover:w-full" />
                    </div>
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
