"use client";

import { FaCogs, FaGlobeAsia, FaHome } from "react-icons/fa";

export default function CoreValuesSection() {
  const values = [
    {
      icon: <FaGlobeAsia />,
      label: "01",
      title: "Nature-Led Vision",
      desc: "Anondo Bhubon is planned around the belief that nature should be nurtured, not displaced. Green corridors, water systems, open spaces, and walkable neighborhoods shape the township experience.",
    },
    {
      icon: <FaHome />,
      label: "02",
      title: "Community Well-Being",
      desc: "Every sector is designed to support everyday life through parks, playgrounds, gathering spaces, religious and cultural facilities, schools, clinics, sports areas, and wellness zones.",
    },
    {
      icon: <FaCogs />,
      label: "03",
      title: "Smart Sustainable Growth",
      desc: "Future-ready roads, utility corridors, surveillance, renewable-ready infrastructure, IT and commercial zones, and phased development planning support long-term value and resilience.",
    },
  ];

  return (
    <section className="bg-primary px-6 py-24 text-white sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">
              Our Foundation
            </p>

            <h2 className="mt-5  text-4xl font-semibold leading-[1.06] tracking-[-0.02em] sm:text-5xl">
              Guided by health, harmony, and sustainability.
            </h2>
          </div>

          <p className="max-w-3xl text-base font-medium leading-8 text-white/70 sm:text-lg">
            The prospectus positions Anondo Bhubon as a model township where
            modern infrastructure, environmental stewardship, social
            integration, and safe living are designed together from day one.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {values.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-7 shadow-lift transition duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:bg-white/[0.08]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-xl text-secondary">
                  {item.icon}
                </div>

                <span className=" text-5xl font-semibold leading-none text-white/10 transition duration-300 group-hover:text-secondary/25">
                  {item.label}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.02em]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm font-medium leading-7 text-white/70">
                {item.desc}
              </p>

              <div className="mt-8 h-[2px] w-14 bg-secondary transition-all duration-300 group-hover:w-24" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
