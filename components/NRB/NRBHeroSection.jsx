"use client";

import Image from "next/image";
import {
  FaArrowRight,
  FaCheckCircle,
  FaFileSignature,
  FaGlobeAsia,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { finalRenderAssets } from "@/data/finalRendersData";

const WHATSAPP_NUMBER = "8801313775333";

const trustPoints = [
  "Remote consultation from abroad",
  "Document and Power of Attorney guidance",
  "Family site visit coordination",
  "Payment and registration support",
];

const markets = [
  "Saudi Arabia",
  "UAE",
  "Qatar",
  "Kuwait",
  "Oman",
  "UK",
  "USA",
  "Malaysia",
  "Japan",
  "South Africa",
  "South Korea",
];

export default function NRBHeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0">
        <Image
          src={finalRenderAssets.billboard}
          alt="Anondo Bhubon NRB buyer support"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              <FaGlobeAsia />
              NRB Property Support
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Own your Anondo Bhubon address from anywhere in the world.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              A dedicated support path for Non-Resident Bangladeshis covering
              project guidance, document preparation, family coordination,
              payment references, and registration assistance.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-white/15 bg-white/10 p-4 text-sm font-semibold leading-6 text-white"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-secondary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-secondary px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-primary"
              >
                Request NRB Support
                <FaArrowRight />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello Anondo Bhubon, I would like to know more about NRB property support.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-secondary hover:text-secondary"
              >
                <FaWhatsapp />
                WhatsApp Advisor
              </a>
            </div>
          </div>

          <aside className="min-w-0 rounded-lg border border-white/20 bg-white p-6 text-primary shadow-soft sm:p-7">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                  Overseas Desk
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  Confidence before commitment.
                </h2>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-xl text-white">
                <FaShieldAlt />
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-primary/75">
              We help NRB buyers understand the project, verify required
              documentation, coordinate with local family members, and move
              through the purchase process with clear communication.
            </p>

            <div className="mt-6 grid gap-3">
              <MiniPoint icon={<FaFileSignature />} title="Documents" />
              <MiniPoint icon={<FaShieldAlt />} title="Verification support" />
              <MiniPoint icon={<FaGlobeAsia />} title="Remote coordination" />
            </div>

            <div className="mt-6 border-t border-border_color pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Supporting NRB buyers from
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {markets.map((market) => (
                  <span
                    key={market}
                    className="rounded-lg border border-border_color bg-off_white px-3 py-2 text-xs font-bold text-primary"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function MiniPoint({ icon, title }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border_color bg-off_white p-4 text-sm font-semibold text-primary">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-secondary">
        {icon}
      </span>
      <span>{title}</span>
    </div>
  );
}
