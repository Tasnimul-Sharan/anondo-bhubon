"use client";

import { FaEye, FaShieldAlt, FaBullseye } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

function InfoCard({ icon, title, desc, points }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all transform duration-500 hover:-translate-y-1 hover:shadow-lg md:p-7"
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-60"
        style={{
          background:
            "radial-gradient(120px 80px at 10% 10%, rgba(0,150,136,.12), transparent 60%), radial-gradient(120px 80px at 90% 90%, rgba(33,150,243,.12), transparent 60%)",
        }}
      />

      <div className="flex items-start gap-4">
        <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-primary bg-opacity-80 text-white shadow-md">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold leading-tight text-secondary md:text-xl">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
            {desc}
          </p>
        </div>
      </div>

      {points && points.length > 0 && (
        <ul className="mt-4 list-disc space-y-1 pl-6 text-sm text-gray-700 md:text-base">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default function VisionMissionGoals() {
  const items = [
    {
      title: "Our Vision",
      desc: "To become the leading security service provider in Bangladesh, recognized nationwide for professionalism, trustworthiness, and excellence — setting the benchmark for training and service quality.",
      icon: <FaEye className="size-12" aria-hidden />,
    },
    {
      title: "Our Mission",
      desc: "To safeguard people, property, and assets by deploying highly trained professionals who embody integrity, loyalty, discipline, and responsibility — backed by uncompromising training and ethical practices.",
      icon: <FaShieldAlt className="size-12" aria-hidden />,
    },
    {
      title: "Our Goals",
      desc: "To translate our mission into measurable action by achieving excellence in client satisfaction, operational efficiency, and modern security innovation, while continuously raising industry standards.",
      icon: <FaBullseye className="size-12" aria-hidden />,
    },
  ];

  return (
    <section className="relative custom-container mx-auto py-14 md:px-6 md:py-20">
      <SectionHeader
        subtitle="Anondo Housing Society"
        title="Vision Mission & Goals"
        details="Safeguarding your tomorrow, today—with world-class security solutions, highly trained professionals, and cutting-edge technology."
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:gap-6 lg:grid-cols-3">
        {items.map((it) => (
          <InfoCard
            key={it.title}
            icon={it.icon}
            title={it.title}
            desc={it.desc}
            points={it.points}
          />
        ))}
      </div>
    </section>
  );
}
