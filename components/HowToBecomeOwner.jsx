"use client";

import { FiPhoneCall } from "react-icons/fi";
import {
  FaCheckCircle,
  FaClipboardList,
  FaFileSignature,
  FaMoneyCheckAlt,
  FaUserCheck,
} from "react-icons/fa";

export default function HowToBecomeOwner() {
  const steps = [
    {
      icon: <FiPhoneCall />,
      title: "Book a Consultation",
      desc: "Connect with the Anondo Bhubon team to understand the township vision, location access, sector plan, and available residential options.",
    },
    {
      icon: <FaClipboardList />,
      title: "Explore the Master Plan",
      desc: "Review the sector-based plan, block layout, green-blue infrastructure, amenities, and preferred villa, apartment, or condominium options.",
    },
    {
      icon: <FaUserCheck />,
      title: "Verify Documents",
      desc: "Complete buyer information, identity documents, payment profile, and any required verification before booking confirmation.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Confirm Booking",
      desc: "Select your preferred product and complete the agreed booking or installment payment process through the authorized channel.",
    },
    {
      icon: <FaFileSignature />,
      title: "Registration Support",
      desc: "Receive guidance for formal documentation, registration, and future handover steps according to project progress and payment status.",
    },
  ];

  return (
    <section className="bg-off_white px-6 py-24 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">
              Ownership Process
            </p>

            <h2 className="mt-5  text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-primary sm:text-5xl">
              A guided path toward your Anondo Bhubon address.
            </h2>
          </div>

          <p className="max-w-3xl text-base font-medium leading-8 text-primary/70 sm:text-lg">
            A clear and guided process for families, NRBs, professionals, and
            investors to understand the township, select a preferred option, and
            move toward secure ownership.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="group relative rounded-lg border border-border_color bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <span className=" text-4xl font-semibold leading-none text-primary/10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-lg text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                  {step.icon}
                </div>
              </div>

              <h3 className="mt-8 text-xl font-bold tracking-[-0.02em] text-primary">
                {step.title}
              </h3>

              <p className="mt-4 text-sm font-medium leading-7 text-primary/70">
                {step.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-primary/20 bg-primary p-7 text-white shadow-lift">
          <div className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-xl text-secondary">
              <FaCheckCircle />
            </div>

            <p className="text-sm font-medium leading-7 text-white/75 sm:text-base">
              Our team supports you through every stage - from first contact and
              master plan review to document verification, booking, payment,
              registration, and future handover guidance.
            </p>

            <div className="h-[2px] w-24 bg-secondary md:w-32" />
          </div>
        </div>
      </div>
    </section>
  );
}
