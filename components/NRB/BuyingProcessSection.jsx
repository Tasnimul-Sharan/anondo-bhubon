"use client";

import {
  FaCheckCircle,
  FaFileAlt,
  FaLaptop,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaStamp,
} from "react-icons/fa";

const steps = [
  {
    title: "Consultation",
    desc: "Discuss goals, budget, timeline, and residence preference through WhatsApp or video call.",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Project Review",
    desc: "Review location, masterplan, block options, amenities, access roads, and available information.",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Document Check",
    desc: "Prepare identity documents, nominee information, and Power of Attorney support if needed.",
    icon: <FaFileAlt />,
  },
  {
    title: "Remote Booking",
    desc: "Proceed with advisor-led booking references and official payment guidance.",
    icon: <FaLaptop />,
  },
  {
    title: "Registration Prep",
    desc: "Coordinate paperwork, local representative support, and registration-related steps.",
    icon: <FaStamp />,
  },
  {
    title: "Ownership Support",
    desc: "Receive final follow-up for receipts, records, communication, and next ownership steps.",
    icon: <FaCheckCircle />,
  },
];

export default function BuyingProcessSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
              Buying Process
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              A guided path from inquiry to ownership.
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-primary/75">
            NRB buyers can move step by step with a clear advisor-led process.
            The flow is designed for overseas decision-making, local family
            coordination, and careful document preparation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="group rounded-lg border border-border_color bg-off_white p-6 transition duration-300 hover:border-primary/30 hover:bg-white hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-xl text-white">
                  {step.icon}
                </div>
                <span className="text-sm font-bold tracking-[0.18em] text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-primary/75">
                {step.desc}
              </p>

              <div className="mt-6 h-[2px] w-12 bg-secondary transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-border_color bg-primary p-6 text-white shadow-soft sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-xl text-primary">
              <FaCheckCircle />
            </div>
            <p className="text-sm leading-7 text-white/82">
              Final purchase decisions should always be made after reviewing
              official information, verified documents, payment references, and
              authorized communication from the Anondo Bhubon team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
