"use client";

import React from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaExchangeAlt,
  FaFileContract,
  FaGlobe,
  FaLandmark,
  FaMoneyCheckAlt,
  FaShieldAlt,
} from "react-icons/fa";

const termSections = [
  {
    icon: <FaGlobe />,
    title: "Website Use",
    text: "By using this website, you agree to use it responsibly and only for lawful project inquiry, information, communication, or application-related purposes.",
    items: [
      "You should provide accurate information when submitting forms or contacting the Anondo Bhubon team.",
      "You must not misuse the website, attempt unauthorized access, or disrupt website operation.",
      "Website content is provided for general information and may be updated without prior notice.",
    ],
  },
  {
    icon: <FaLandmark />,
    title: "Project Information",
    text: "Project images, masterplans, amenities, residence information, pricing references, and availability notes are shared to support customer understanding.",
    items: [
      "Visuals, layouts, specifications, and amenity descriptions may be refined as planning, approvals, engineering, and development work progresses.",
      "Customers should confirm current availability, size, pricing, payment schedule, and documentation with an authorized representative.",
      "No website content should be treated as a final allotment, sale deed, or binding ownership document.",
    ],
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Booking and Payment",
    text: "All booking, installment, and payment activity must follow the official procedures communicated by the authorized Anondo Bhubon team.",
    items: [
      "Payments should be made only through approved bank accounts or officially confirmed channels.",
      "Customers are responsible for keeping payment receipts, bank slips, and written confirmations for future reference.",
      "A failed, delayed, incomplete, or incorrectly referenced payment may delay verification, booking, or application processing.",
    ],
  },
  {
    icon: <FaFileContract />,
    title: "Documents and Ownership",
    text: "Ownership, allotment, and transfer processes depend on verification, payment status, required documentation, and applicable law.",
    items: [
      "Application review, document submission, and identity verification may be required before final processing.",
      "Any final commitment must be confirmed through official written documents issued by the authorized company representative.",
      "Customers should read all official documents carefully before signing or making a financial decision.",
    ],
  },
  {
    icon: <FaShieldAlt />,
    title: "Intellectual Property",
    text: "The website design, text, images, logo, project visuals, layouts, and brand materials belong to Anondo Bhubon or its authorized partners.",
    items: [
      "You may not copy, reproduce, publish, sell, modify, or reuse website content without written permission.",
      "Sharing website links for personal information or inquiry purposes is allowed.",
    ],
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Limitation of Liability",
    text: "We work to keep information accurate and useful, but Anondo Bhubon is not liable for loss resulting from reliance on outdated, incomplete, or incorrectly interpreted website content.",
    items: [
      "Customers should verify current project, payment, and ownership information before taking any decision.",
      "The website may be temporarily unavailable due to maintenance, hosting, or technical issues.",
    ],
  },
  {
    icon: <FaExchangeAlt />,
    title: "Governing Law and Updates",
    text: "These terms are governed by the laws of Bangladesh. We may update this page when policies, procedures, or website services change.",
    items: [
      "Continued website use after an update means you accept the revised terms.",
      "Any dispute will be handled under applicable laws and competent courts of Bangladesh.",
    ],
  },
];

const summaryItems = [
  "Confirm all project details before decision",
  "Use only approved payment channels",
  "Keep receipts and written confirmations",
];

export default function TermsAndConditions() {
  return (
    <section className="bg-off_white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <aside className="min-w-0 space-y-6 lg:sticky lg:top-28">
            <div className="rounded-lg border border-border_color bg-white p-6 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                Terms Summary
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary">
                Clear conditions for inquiry, booking, and website use.
              </h2>
              <p className="mt-4 text-sm leading-7 text-primary/75">
                Please review these terms before relying on project information,
                submitting an inquiry, or starting an ownership-related process.
              </p>

              <div className="mt-6 space-y-3">
                {summaryItems.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-lg border border-border_color bg-off_white p-4 text-sm font-semibold leading-6 text-primary"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-border_color bg-primary shadow-soft">
              <div className="p-6 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-xl text-primary">
                  <FaFileContract />
                </div>
                <h3 className="mt-5 text-2xl font-bold">Binding Notice</h3>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  Website information supports discovery and inquiry. Final
                  decisions should be based on verified project documents and
                  authorized communication.
                </p>
              </div>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mb-6 rounded-lg border border-border_color bg-white p-6 shadow-soft sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                Legal Information
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Terms and Conditions for Anondo Bhubon.
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-primary/75">
                These terms explain how this website, project information,
                inquiry communication, booking references, payment procedures,
                and ownership-related documentation should be understood and
                used.
              </p>
            </div>

            <div className="space-y-5">
              {termSections.map((section, index) => (
                <TermCard
                  key={section.title}
                  index={index + 1}
                  icon={section.icon}
                  title={section.title}
                  text={section.text}
                  items={section.items}
                />
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-secondary/30 bg-white p-6 shadow-soft sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                Final Note
              </p>
              <p className="mt-3 text-sm leading-7 text-primary/80">
                If anything on this page conflicts with an official written
                agreement, allotment document, payment receipt, or signed
                company document, the official written document will take
                priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TermCard({ index, icon, title, text, items }) {
  return (
    <article className="rounded-lg border border-border_color bg-white p-6 shadow-soft transition duration-300 hover:border-primary/30 hover:shadow-lift sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex shrink-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
            {String(index).padStart(2, "0")}
          </span>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-xl text-secondary">
            {icon}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold tracking-tight text-primary">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-primary/75">{text}</p>

          <ul className="mt-5 space-y-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-lg border border-border_color bg-off_white p-4 text-sm leading-7 text-primary/80"
              >
                <FaCheckCircle className="mt-1 shrink-0 text-secondary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
