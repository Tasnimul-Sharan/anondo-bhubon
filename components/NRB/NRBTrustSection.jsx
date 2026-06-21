"use client";

import {
  FaCheckCircle,
  FaFileSignature,
  FaGlobeAsia,
  FaMapMarkedAlt,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMapMarkedAlt />,
    title: "Project Clarity",
    desc: "Understand location, access, masterplan visuals, amenities, and residence options before making a decision.",
  },
  {
    icon: <FaFileSignature />,
    title: "Document Guidance",
    desc: "Receive guidance for passport, NID, Power of Attorney, payment references, and registration preparation.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Assisted Process",
    desc: "Move through inquiry, site visit, booking, payment, and ownership steps with advisor support.",
  },
];

const badges = [
  "Remote buyer desk",
  "Family coordination",
  "Document assistance",
  "Payment guidance",
];

export default function NRBTrustSection() {
  return (
    <section className="bg-off_white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <aside className="min-w-0 rounded-lg border border-border_color bg-primary p-6 text-white shadow-soft lg:sticky lg:top-28 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-xl text-primary">
              <FaGlobeAsia />
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              Why NRB Buyers Trust Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Designed for decisions made from abroad.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/80">
              Every NRB inquiry needs clear communication, transparent
              documents, and a team that can coordinate with both the buyer and
              family members in Bangladesh.
            </p>

            <div className="mt-6 grid gap-3">
              {badges.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/10 p-4 text-sm font-semibold"
                >
                  <FaCheckCircle className="text-secondary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mb-6 rounded-lg border border-border_color bg-white p-6 shadow-soft sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                NRB Buyer Assurance
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Clear support at every serious step.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-primary/75">
                Anondo Bhubon helps overseas Bangladeshis review information,
                prepare documents, speak with advisors, coordinate with family,
                and move through the ownership process with confidence.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {features.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-border_color bg-white p-6 shadow-soft transition duration-300 hover:border-primary/30 hover:shadow-lift"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10 text-xl text-secondary">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-primary/75">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
