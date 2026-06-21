"use client";

import { useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaQuestionCircle,
  FaCheckCircle,
} from "react-icons/fa";

const faqs = [
  {
    q: "Can I buy land from abroad?",
    a: "Yes, the entire process can be completed remotely through online consultation and legal support.",
  },
  {
    q: "Is registration possible without visiting Bangladesh?",
    a: "Yes, you can complete registration using Power of Attorney without physically visiting.",
  },
  {
    q: "Is the land legally safe?",
    a: "All plots are verified with complete documentation and ready for immediate registration.",
  },
  {
    q: "How do I make payment from abroad?",
    a: "We support international bank transfer and guided payment assistance for NRB buyers.",
  },
  {
    q: "Can my family visit the site on my behalf?",
    a: "Yes, your family members in Bangladesh can visit and coordinate with our team.",
  },
  {
    q: "How long does the registration process take?",
    a: "Registration can be completed within a very short time after document verification.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-primary/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 md:text-5xl">
            Questions Before Investing?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Everything you need to know before investing from abroad. Find quick
            answers about land purchase, registration, payment, and legal
            support.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-primary" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          {/* Left Info Card */}
          <div className="rounded-3xl border border-primary/10 bg-white p-7 shadow-sm sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-white">
              <FaQuestionCircle />
            </div>

            <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-gray-900">
              NRB Buyer Support
            </h3>

            <p className="mt-4 text-sm leading-8 text-gray-600">
              Our team assists overseas buyers with consultation, documentation,
              legal guidance, payment support, and site visit coordination.
            </p>

            <div className="mt-7 space-y-4 border-t border-primary/10 pt-6">
              <SupportPoint text="Remote consultation available" />
              <SupportPoint text="Legal documentation guidance" />
              <SupportPoint text="Family site visit coordination" />
              <SupportPoint text="International payment assistance" />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = active === i;

              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 ${
                    isOpen
                      ? "border-primary/30 shadow-sm"
                      : "border-primary/10 hover:border-primary/30"
                  }`}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition ${
                          isOpen
                            ? "bg-primary text-white"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <h3
                        className={`pt-1 text-base font-bold leading-7 transition sm:text-lg ${
                          isOpen ? "text-primary" : "text-gray-900"
                        }`}
                      >
                        {faq.q}
                      </h3>
                    </div>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 sm:px-6">
                        <div className="border-t border-primary/10 pt-5 pl-0 sm:pl-13">
                          <p className="text-sm leading-8 text-gray-600 sm:text-base">
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

        {/* Bottom Note */}
        <div className="mt-10 rounded-3xl border border-primary/10 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
              <FaCheckCircle />
            </div>

            <p className="text-sm leading-7 text-gray-600">
              Need more details? Contact our team for project information,
              appointment scheduling, and documentation support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportPoint({ text }) {
  return (
    <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
      <FaCheckCircle className="shrink-0 text-primary" />
      <span>{text}</span>
    </div>
  );
}
