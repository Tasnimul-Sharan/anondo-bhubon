"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCity, FaRocket, FaShieldAlt, FaUsers } from "react-icons/fa";
import { finalRenderAssets } from "@/data/finalRendersData";

const features = [
  {
    icon: <FaRocket />,
    title: "Strategic Location",
    desc: "Near Purbachal, the River Sitalakhya, Dhaka Bypass Expressway, Purbachal Expressway, airport access, and the MRT-1 Depot Station.",
  },
  {
    icon: <FaCity />,
    title: "Complete Township",
    desc: "Luxury villas, mid-rise apartments, condominiums, schools, clinics, civic services, markets, parks, and everyday lifestyle facilities.",
  },
  {
    icon: <FaUsers />,
    title: "Green-Blue Lifestyle",
    desc: "Artificial river, canal network, central lake, forest walkway, green buffers, community farming, and wellness-focused open spaces.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Smart Secure Living",
    desc: "Gated smart-city planning with 24/7 CCTV, visitor management, professional security, emergency support, and organized utilities.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-6 py-24 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
        <div className="relative min-h-[520px] overflow-hidden rounded-lg bg-primary shadow-lift">
          <Image
            src={finalRenderAssets.lakeAlternate}
            alt="Anondo Bhubon lake and green township lifestyle"
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
              Why Choose Us
            </p>
            <h2 className="mt-4  text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
              Built for a better urban future.
            </h2>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">
            Township Advantage
          </p>

          <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-primary/70 sm:text-lg">
            Anondo Bhubon brings together location advantage, sustainable master
            planning, wellness amenities, civic infrastructure, and long-term
            investment potential.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group rounded-lg border border-border_color bg-off_white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-white text-lg text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-primary/70">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
