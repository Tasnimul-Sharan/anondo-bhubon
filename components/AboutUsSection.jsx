"use client";

import Image from "next/image";
import { FaCogs, FaGlobeAsia, FaHome } from "react-icons/fa";
import { finalRenderAssets } from "@/data/finalRendersData";

export default function AboutUsSection() {
  const highlights = [
    {
      icon: <FaGlobeAsia />,
      title: "Eco-Friendly Vision",
      desc: "A township planned around green land, water systems, wellness, and long-term environmental balance.",
    },
    {
      icon: <FaHome />,
      title: "Complete Urban Living",
      desc: "Luxury villas, mid-rise homes, condominiums, parks, civic services, and daily lifestyle facilities.",
    },
    {
      icon: <FaCogs />,
      title: "Future-Ready Systems",
      desc: "Wide roads, smart security, connected utilities, IT zones, commercial hubs, and transit-ready planning.",
    },
  ];

  const stats = [
    { number: "30 min", label: "Airport Access" },
    { number: "10 min", label: "MRT-1 Depot" },
    { number: "3 km", label: "Forest Walkway" },
  ];

  return (
    <section className="bg-off_white px-6 py-24 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">
              About Anondo Bhubon
            </p>

            <h2 className="mt-5 max-w-4xl  text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              A new horizon in eco-friendly urban living.
            </h2>
          </div>

          <p className="max-w-3xl text-base font-medium leading-8 text-primary/70 sm:text-lg">
            Anondo Bhubon is envisioned as a self-sufficient planned township
            near Purbachal and the River Sitalakhya, blending sustainable land
            planning, smart infrastructure, community wellness, and nature-led
            urban living.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.58fr_0.42fr]">
          <div className="relative min-h-[460px] overflow-hidden rounded-lg bg-primary shadow-lift">
            <Image
              src={finalRenderAssets.riverside}
              alt="Anondo Bhubon riverside green township"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-primary/75 p-6 text-white backdrop-blur-md sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                Project Philosophy
              </p>
              <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight sm:text-3xl">
                Homes shaped around health, harmony, sustainability, and
                everyday community life.
              </h3>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-lg border border-border_color bg-white p-7 shadow-soft">
              <h3 className=" text-3xl font-semibold leading-tight text-primary">
                Nature, mobility, investment, and community in one planned
                address.
              </h3>

              <div className="mt-6 space-y-5 text-sm font-medium leading-7 text-primary/70 sm:text-base">
                <p>
                  Anondo Bhubon is not only offering homes; it is shaping a
                  lifestyle rooted in health, harmony, and sustainability
                  through structured sectors, residential blocks, green
                  corridors, and civic facilities.
                </p>

                <p>
                  The master plan combines artificial river and canal networks,
                  a central lake, forest walkway, wide roads, pedestrian
                  promenades, bicycle lanes, parks, sports zones, schools,
                  clinics, religious spaces, and commercial services.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 overflow-hidden rounded-lg border border-border_color bg-white shadow-soft">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="border-r border-border_color p-5 last:border-r-0"
                >
                  <p className=" text-2xl font-semibold text-primary sm:text-3xl">
                    {item.number}
                  </p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-primary/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-lg border border-border_color bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-xl text-primary transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                {item.icon}
              </div>

              <h4 className="mt-6 text-xl font-bold tracking-[-0.01em] text-primary">
                {item.title}
              </h4>

              <p className="mt-3 text-sm font-medium leading-7 text-primary/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
