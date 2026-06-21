"use client";

import LeadForm from "./LeadForm";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

const trustPoints = [
  "Advisor-led response",
  "Document checklist support",
  "Family visit coordination",
];

export default function LeadCaptureCard() {
  return (
    <section id="lead-form" className="bg-off_white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg border border-border_color bg-white shadow-soft lg:grid-cols-[0.42fr_0.58fr]">
          <div className="bg-primary p-6 text-white sm:p-8 lg:p-10">
            <span className="inline-flex rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              NRB Inquiry
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Request dedicated support from the Anondo Bhubon team.
            </h2>

            <p className="mt-5 text-sm leading-8 text-white/82 sm:text-base">
              Share your contact information and our representative will follow
              up for project details, call scheduling, site visit coordination,
              and document guidance.
            </p>

            <div className="mt-8 space-y-4">
              {trustPoints.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/12">
                    <FiCheckCircle className="text-lg text-secondary" />
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-3 border-t border-white/15 pt-6">
              <a
                href="tel:+8801313775333"
                className="flex items-center gap-3 text-sm font-semibold text-white/85 transition hover:text-secondary"
              >
                <FaPhoneAlt />
                +880 1313-775333
              </a>

              <a
                href="mailto:info@anondobhubon.com"
                className="flex items-center gap-3 break-all text-sm font-semibold text-white/85 transition hover:text-secondary"
              >
                <FaEnvelope />
                info@anondobhubon.com
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                Site Visit and Consultation
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-primary">
                Submit your information.
              </h3>

              <p className="mt-2 text-sm leading-7 text-primary/75">
                Our team will contact you with the next recommended step.
              </p>
            </div>

            <LeadForm />

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-border_color" />
              <span className="text-sm font-semibold text-primary/55">or</span>
              <div className="h-px flex-1 bg-border_color" />
            </div>

            <a
              href="https://wa.me/8801313775333?text=Hello%20Anondo%20Bhubon%2C%20I%20would%20like%20to%20inquire%20about%20NRB%20property%20support."
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-border_color bg-off_white px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-primary transition hover:border-primary hover:bg-white"
            >
              <FaWhatsapp className="text-secondary" />
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
