"use client";

import Image from "next/image";
import {
  FaCalendarCheck,
  FaCheckCircle,
  FaFileAlt,
  FaPlayCircle,
  FaVideo,
} from "react-icons/fa";
import { finalRenderAssets } from "@/data/finalRendersData";

const points = [
  "Project location and masterplan overview",
  "Document and Power of Attorney preparation",
  "Payment references and booking process",
];

export default function VideoSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-border_color bg-off_white shadow-soft">
          <div className="grid lg:grid-cols-[0.58fr_0.42fr]">
            <div className="relative min-h-[340px] lg:min-h-[520px]">
              <Image
                src={finalRenderAssets.masterplanSide}
                alt="Anondo Bhubon remote briefing for NRB buyers"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/55" />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="max-w-md rounded-lg border border-white/20 bg-white/12 p-6 text-center text-white">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-secondary text-3xl">
                    <FaPlayCircle />
                  </div>
                  <h2 className="mt-5 text-3xl font-bold tracking-tight">
                    Remote Project Briefing
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/82">
                    Review location, planning visuals, document steps, and
                    advisor guidance before moving forward.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                Video Consultation
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Speak with an advisor before you decide.
              </h2>
              <p className="mt-4 text-sm leading-8 text-primary/75">
                Instead of relying on scattered information, NRB buyers can
                request a guided call to understand project details, required
                documents, payment references, and family coordination.
              </p>

              <div className="mt-7 space-y-3">
                {points.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-lg border border-border_color bg-white p-4 text-sm font-semibold leading-6 text-primary"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="#nrb-support"
                  className="inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-secondary"
                >
                  <FaVideo />
                  Schedule Call
                </a>
                <a
                  href="#documents"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-border_color bg-white px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-primary transition hover:border-primary"
                >
                  <FaFileAlt />
                  View Documents
                </a>
              </div>

              <div className="mt-6 rounded-lg border border-border_color bg-white p-5">
                <div className="flex items-start gap-3 text-sm leading-7 text-primary/75">
                  <FaCalendarCheck className="mt-1 shrink-0 text-secondary" />
                  <span>
                    Our advisor will confirm time, call format, and the
                    information you should keep ready before the consultation.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
