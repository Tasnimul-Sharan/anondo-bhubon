"use client";

import LeadForm from "./LeadForm";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

export default function LeadCaptureCard() {
  const trustPoints = [
    "Free Consultation",
    "No Hidden Charges",
    "Full Legal Support",
  ];

  return (
    <section className="bg-primary/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Content */}
          <div className="relative bg-primary p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-white/10" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-tr-full bg-white/10" />

            <div className="relative">
              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                Limited Slots
              </span>

              <h3 className="mt-6 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
                Book Your Site Visit
              </h3>

              <p className="mt-5 text-sm leading-8 text-white/80 sm:text-base">
                Visit the project physically or connect via video call from
                abroad. Our team will guide you with project details,
                appointment support, and legal information.
              </p>

              <div className="mt-8 space-y-4">
                {trustPoints.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                      <FiCheckCircle className="text-lg" />
                    </span>
                    <span className="text-sm font-medium text-white/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-3 border-t border-white/15 pt-6">
                <a
                  href="tel:+8801313775333"
                  className="flex items-center gap-3 text-sm text-white/85 transition hover:text-white"
                >
                  <FaPhoneAlt />
                  +880 1313-775333
                </a>

                <a
                  href="mailto:info@anondocityscapers.com"
                  className="flex items-center gap-3 text-sm text-white/85 transition hover:text-white"
                >
                  <FaEnvelope />
                  info@anondocityscapers.com
                </a>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Site Visit Request
              </p>

              <h4 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Submit Your Information
              </h4>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                Fill up the form below. Our representative will contact you
                shortly.
              </p>
            </div>

            <LeadForm />

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm text-gray-400">or</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <a
              href="https://wa.me/8801313775333?text=Hello%20Anondo%20Cityscapers%2C%20I%20would%20like%20to%20inquire%20about%20your%20projects."
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-green-500 bg-white px-5 py-4 text-sm font-bold text-green-600 transition hover:bg-green-50"
            >
              <FaWhatsapp className="text-lg" />
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
