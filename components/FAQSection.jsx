"use client";

import { useState } from "react";
import { FaCheckCircle, FaQuestionCircle } from "react-icons/fa";
import { IoAdd, IoRemove } from "react-icons/io5";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Where is Anondo Bhubon located?",
      a: "Anondo Bhubon is planned near Purbachal New Town on the east side of the River Sitalakhya, with access through the Dhaka Bypass Expressway and Purbachal Expressway.",
    },
    {
      q: "What is the main vision of the project?",
      a: "The project vision is to create an eco-friendly urban township where modern living, nature, wellness, smart infrastructure, and community life can exist in balance.",
    },
    {
      q: "What residential options are planned?",
      a: "The prospectus includes luxury villas, mid-rise residential apartments, and condominiums arranged across planned blocks and sectors with different lifestyle focuses.",
    },
    {
      q: "How is the township master plan organized?",
      a: "The plan describes every 100 bighas as one block, with four blocks forming a 400-bigha sector. Each sector is planned with its own character, amenities, and lifestyle facilities.",
    },
    {
      q: "What green and water features are included?",
      a: "The township includes an artificial river, canal network, central lake, green corridors, orchard zones, herb gardens, community farming areas, and a 3-kilometer forest walkway.",
    },
    {
      q: "How close is it to major transport points?",
      a: "According to the prospectus, the project is around 30 minutes from Hazrat Shahjalal International Airport and around 10 minutes from the MRT-1 Depot Station.",
    },
    {
      q: "What amenities are planned for residents?",
      a: "Planned amenities include parks, playgrounds, community gathering areas, meditation gardens, sports fields, swimming and wellness facilities, schools, clinics, religious spaces, markets, and civic services.",
    },
    {
      q: "Will there be commercial and work zones?",
      a: "Yes. The plan includes IT and cyber business hubs, co-working spaces, green office towers, sector markets, shopping centers, a mega mall, banking areas, and logistics support.",
    },
    {
      q: "How is security planned?",
      a: "The prospectus describes gated smart-city planning with 24/7 CCTV, visitor management, RFID access for condos, professional security teams, and emergency response networks.",
    },
    {
      q: "What sustainability features are highlighted?",
      a: "The project highlights 40% to 50% land allocation for green, water, and open infrastructure, solar lighting, rainwater harvesting, wastewater recycling, low-carbon material goals, and renewable-ready systems.",
    },
    {
      q: "Why is it attractive for investors?",
      a: "The township targets residential investors, NRBs, institutional partners, commercial operators, IT and co-working partners, and organizations interested in long-term green urban development near Purbachal.",
    },
    {
      q: "What is the expected development timeline?",
      a: "The prospectus outlines Phase 1 for roads, utilities, and canals in 2026; Phase 2 for luxury villas, forest walkway, and lake in 2027; Phase 3 for condos, IT park, and civic facilities in 2028-2029; and Phase 4 from 2030 onward.",
    },
    {
      q: "What legal or regulatory points are mentioned?",
      a: "The document refers to RAJUK and DoE-related approvals, zoning, FAR, EIA, utility permissions, land registration, and mutation matters. Buyers should verify final legal and approval status with the project authority before making a decision.",
    },
  ];

  return (
    <section className="bg-off_white px-6 py-24 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <aside className="rounded-lg border border-primary/10 bg-primary p-8 text-white shadow-lift lg:sticky lg:top-24">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-xl text-secondary">
              <FaQuestionCircle />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.28em] text-secondary">
              FAQ
            </p>

            <h2 className="mt-4  text-4xl font-semibold leading-[1.08] tracking-[-0.02em]">
              Frequently asked questions.
            </h2>

            <p className="mt-5 text-sm font-medium leading-7 text-white/70">
              Key information from the Anondo Bhubon prospectus about location,
              master planning, residences, amenities, sustainability, security,
              investment value, and development timeline.
            </p>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
              <SupportPoint text="Location and transport access" />
              <SupportPoint text="Sector, block, and master plan guidance" />
              <SupportPoint text="Green-blue infrastructure and amenities" />
              <SupportPoint text="Security, sustainability, and timeline details" />
            </div>
          </aside>

          <div className="grid gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-lg border bg-white shadow-soft transition duration-300 ${
                    isOpen
                      ? "border-secondary/50"
                      : "border-border_color hover:border-primary/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-5 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition ${
                          isOpen
                            ? "bg-primary text-white"
                            : "bg-off_white text-primary"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3
                        className={`pt-1 text-base font-bold leading-7 tracking-[-0.01em] transition sm:text-lg ${
                          isOpen ? "text-primary" : "text-primary"
                        }`}
                      >
                        {faq.q}
                      </h3>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition ${
                        isOpen
                          ? "bg-secondary text-white"
                          : "bg-primary/5 text-primary/60"
                      }`}
                    >
                      {isOpen ? <IoRemove /> : <IoAdd />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 sm:px-6">
                        <div className="border-t border-border_color pt-5">
                          <p className="text-sm font-medium leading-8 text-primary/70 sm:text-base">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-primary/20 bg-white p-6 shadow-soft">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-lg text-primary">
              <FaCheckCircle />
            </div>

            <p className="text-sm font-medium leading-7 text-primary/70">
              Prospectus details may change as approvals, design packages,
              payment terms, and development phases progress. Please verify
              final project, legal, and financial information with the
              authorized Anondo Bhubon team before making any decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportPoint({ text }) {
  return (
    <div className="flex items-start gap-3 text-sm font-medium text-white/75">
      <FaCheckCircle className="mt-1 shrink-0 text-secondary" />
      <span>{text}</span>
    </div>
  );
}
