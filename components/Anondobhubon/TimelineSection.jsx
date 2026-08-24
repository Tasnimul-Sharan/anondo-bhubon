import { timeline } from "@/data/anondoBhubonData";

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative isolate overflow-hidden bg-[#F4F2ED] py-20 sm:py-24 lg:py-32"
    >
      {/* Premium Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8F6F1_0%,#FFFFFF_50%,#EEF0F7_100%)]" />

        <div className="absolute -left-32 top-16 h-[380px] w-[380px] rounded-full bg-[#F48220]/10 blur-[115px]" />

        <div className="absolute -right-36 bottom-0 h-[500px] w-[500px] rounded-full bg-[#2C3A83]/10 blur-[135px]" />

        <div className="absolute -right-40 top-10 h-[440px] w-[440px] rounded-full border border-[#2C3A83]/[0.06]" />

        <div className="absolute -right-20 top-28 h-[300px] w-[300px] rounded-full border border-[#2C3A83]/[0.07]" />

        <div className="absolute left-[7%] top-0 h-full w-px bg-[#2C3A83]/[0.035]" />

        <div className="absolute right-[7%] top-0 h-full w-px bg-[#2C3A83]/[0.035]" />
      </div>

      <div className="site-shell relative z-10">
        {/* Section Header */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#F48220]" />

              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#F48220]">
                Implementation Timeline
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#17203A] sm:text-5xl lg:text-[3.65rem]">
              A structured journey from groundwork to smart-city living.
            </h2>
          </div>

          <p className="max-w-xl text-[15px] font-medium leading-7 text-[#616779] lg:justify-self-end lg:text-right">
            Development progresses through carefully sequenced phases,
            beginning with core infrastructure and moving toward residences,
            business zones, civic facilities and full township integration.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Connector */}
          <div className="absolute left-[7%] right-[7%] top-[38px] hidden h-px bg-[#2C3A83]/15 lg:block">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-[#F48220]/40" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <article
                key={`${item.phase}-${index}`}
                className="group relative flex h-full min-h-[360px] flex-col overflow-hidden border border-[#2C3A83]/10 bg-white p-6 shadow-[0_14px_45px_rgba(27,35,75,0.07)] transition duration-500 hover:-translate-y-1.5 hover:border-[#F48220]/55 hover:shadow-[0_26px_70px_rgba(27,35,75,0.15)] sm:p-7"
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-16 bg-[#F48220] transition-all duration-500 group-hover:w-full" />

                {/* Large Decorative Number */}
                <span className="pointer-events-none absolute -bottom-4 -right-1 select-none text-[110px] font-black leading-none tracking-[-0.08em] text-[#2C3A83]/[0.035]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  {/* Timeline Marker */}
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-[76px] w-[76px] items-center justify-center border-[8px] border-[#F4F2ED] bg-[#202D72] text-lg font-bold text-white shadow-[0_10px_28px_rgba(32,45,114,0.22)] transition duration-300 group-hover:bg-[#F48220]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2C3A83]/35">
                      Phase
                    </span>
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F48220]">
                    {item.phase}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#20263A]">
                    {item.dates}
                  </h3>

                  <p className="mt-5 text-sm font-medium leading-7 text-[#616779]">
                    {item.scope}
                  </p>
                </div>

                {/* Footer */}
                <div className="relative z-10 mt-auto pt-8">
                  <div className="flex items-center justify-between border-t border-[#2C3A83]/10 pt-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6F7587]">
                      Development Phase
                    </p>

                    <span className="flex items-center gap-3">
                      <span className="h-px w-8 bg-[#2C3A83]/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[#F48220]" />

                      <span className="text-lg leading-none text-[#2C3A83]/35 transition duration-300 group-hover:translate-x-1 group-hover:text-[#F48220]">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-10 flex flex-col gap-5 border border-[#2C3A83]/10 bg-[#202D72] p-6 text-white shadow-[0_20px_60px_rgba(30,39,91,0.18)] sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F7A55A]">
              Integrated Development Strategy
            </p>

            <p className="mt-3 max-w-3xl text-lg font-semibold leading-8 text-white">
              Each phase builds upon the previous one, ensuring infrastructure,
              residences and services grow together as one connected township.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center bg-[#F48220] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-white hover:text-[#202D72]"
          >
            Explore Investment
          </a>
        </div>
      </div>
    </section>
  );
}