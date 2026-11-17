import { legacyContent as content, legacyItems } from "@/data/homeContent";

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
                {content.eyebrow}
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#17203A] sm:text-5xl lg:text-[3.65rem]">
              {content.title}
            </h2>
          </div>

          <p className="max-w-xl text-[15px] font-medium leading-7 text-[#4A5063] lg:justify-self-end lg:text-right">
            {content.intro}
          </p>
        </div>

        {/* Legacy Columns */}
        <div className="border border-[#2C3A83]/12 border-t-[3px] border-t-[#F48220] bg-white shadow-[0_18px_50px_rgba(27,35,75,0.06)]">
          <div className="divide-y divide-[#2C3A83]/10 md:grid md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {legacyItems.map((item, index) => (
              <article
                key={item.label}
                className={`relative flex flex-col p-7 sm:p-8 ${
                  index < 2 ? "md:border-b md:border-[#2C3A83]/10 lg:border-b-0" : ""
                } ${index % 2 === 0 ? "md:border-r md:border-[#2C3A83]/10 lg:border-r-0" : ""}`}
              >
                <div className="flex items-center justify-between border-b border-[#2C3A83]/10 pb-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center bg-[#202D72] text-sm font-bold tabular-nums text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2C3A83]/45">
                    Legacy
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 bg-[#F48220]"
                  />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F48220]">
                    {item.label}
                  </p>
                </div>

                <p className="mt-4 text-[15px] font-medium leading-7 text-[#20263A] sm:text-base sm:leading-8">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-10 flex flex-col gap-5 border border-[#2C3A83]/10 bg-[#202D72] p-6 text-white shadow-[0_20px_60px_rgba(30,39,91,0.18)] sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#F7A55A]">
              {content.bottomLabel}
            </p>

            <p className="mt-3 max-w-3xl text-lg font-semibold leading-8 text-white sm:text-xl">
              {content.bottomText}
            </p>

            <p className="mt-2 max-w-3xl text-sm font-medium leading-7 text-white/65">
              {content.bottomNote}
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center bg-[#F48220] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-white hover:text-[#202D72]"
          >
            {content.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
