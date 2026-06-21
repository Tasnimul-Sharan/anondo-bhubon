"use client";

import React from "react";
import {
  FaCheckCircle,
  FaCogs,
  FaDatabase,
  FaEnvelope,
  FaLock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShareAlt,
  FaUserShield,
} from "react-icons/fa";

const policySections = [
  {
    icon: <FaDatabase />,
    title: "Information We Collect",
    text: "We may collect the details you share when you request project information, submit an inquiry, book a visit, or communicate with the Anondo Bhubon team.",
    items: [
      "Name, phone number, email address, address, and preferred communication method.",
      "Inquiry details such as residence interest, budget range, site visit request, and application references.",
      "Payment or booking references needed for customer support, verification, and receipt coordination.",
      "Basic website usage information such as browser, device type, page visits, and form activity.",
    ],
  },
  {
    icon: <FaCogs />,
    title: "How We Use Information",
    text: "Your information helps us provide accurate, timely, and advisor-led support for the township inquiry and ownership process.",
    items: [
      "Respond to brochure, pricing, booking, and project information requests.",
      "Coordinate site visits, application support, payment confirmation, and document follow-up.",
      "Send service updates, availability notes, and important communication connected to your inquiry.",
      "Improve website performance, customer service quality, and internal record accuracy.",
    ],
  },
  {
    icon: <FaShareAlt />,
    title: "Information Sharing",
    text: "We treat inquiry data with care and share it only when it is needed to serve the customer or meet legal obligations.",
    items: [
      "We do not sell personal information to third parties.",
      "Necessary information may be shared with authorized team members, banking support, payment partners, legal advisers, or service providers.",
      "Information may be disclosed when required by applicable law, court order, regulator, or official authority in Bangladesh.",
    ],
  },
  {
    icon: <FaLock />,
    title: "Security and Retention",
    text: "We use reasonable technical and organizational safeguards to protect customer information from unauthorized access, misuse, loss, or disclosure.",
    items: [
      "Access is limited to authorized personnel who need the information for support or administration.",
      "Records are retained only as long as needed for inquiry service, booking administration, legal compliance, or business records.",
      "No online system can be guaranteed completely secure, but we work to maintain responsible protection standards.",
    ],
  },
  {
    icon: <FaUserShield />,
    title: "Your Choices",
    text: "You may contact us to update, correct, or request review of information you have shared with Anondo Bhubon.",
    items: [
      "You can request correction of inaccurate contact or inquiry information.",
      "You can ask to stop receiving optional promotional communication.",
      "You can manage browser cookies and local website preferences through your device or browser settings.",
    ],
  },
];

const quickFacts = [
  "Inquiry-first data collection",
  "No sale of customer information",
  "Authorized team access only",
];

export default function PrivacyPolicyPageSection() {
  return (
    <section className="bg-off_white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
          <aside className="min-w-0 space-y-6 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-lg border border-border_color bg-white shadow-soft">
              <div className="bg-primary p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                  Privacy Policy
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  Responsible data care for every inquiry.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  This policy explains how Anondo Bhubon collects, uses,
                  protects, and manages information shared by website visitors,
                  applicants, and prospective owners.
                </p>
              </div>

              <div className="space-y-3 p-6">
                {quickFacts.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-border_color bg-off_white p-4 text-sm font-semibold leading-6 text-primary"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border_color bg-white p-6 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Privacy Contact
              </p>
              <div className="mt-5 space-y-3">
                <ContactItem
                  icon={<FaPhoneAlt />}
                  label="Phone"
                  value="+880 1313-775333"
                  href="tel:+8801313775333"
                />
                <ContactItem
                  icon={<FaEnvelope />}
                  label="Email"
                  value="info@anondobhubon.com"
                  href="mailto:info@anondobhubon.com"
                />
                <ContactItem
                  icon={<FaMapMarkerAlt />}
                  label="Office"
                  value="Printers Building, 11-12th Floor, 5 Rajuk Avenue, Motijheel, Dhaka 1000"
                />
              </div>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mb-6 rounded-lg border border-border_color bg-white p-6 shadow-soft sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                Privacy and Data Protection
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Clear, careful, and customer-focused information handling.
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-primary/75">
                Anondo Bhubon respects your privacy. We collect only the
                information needed to communicate with you, support project
                inquiries, coordinate ownership-related steps, and improve the
                digital experience.
              </p>
            </div>

            <div className="space-y-5">
              {policySections.map((section, index) => (
                <PolicyCard
                  key={section.title}
                  index={index + 1}
                  icon={section.icon}
                  title={section.title}
                  text={section.text}
                  items={section.items}
                />
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-primary/20 bg-primary p-6 text-white shadow-soft sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-xl text-primary">
                  <FaUserShield />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Privacy Commitment</h3>
                  <p className="mt-2 text-sm leading-7 text-white/80">
                    We review customer information practices with transparency,
                    responsibility, and care so every inquiry is handled with
                    the trust it deserves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PolicyCard({ index, icon, title, text, items }) {
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

function ContactItem({ icon, label, value, href }) {
  const content = (
    <div className="flex gap-3 rounded-lg border border-border_color bg-off_white p-4 transition hover:border-primary/30 hover:bg-white">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-secondary">
          {label}
        </span>
        <span className="mt-1 block break-words text-sm font-semibold leading-6 text-primary">
          {value}
        </span>
      </span>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
