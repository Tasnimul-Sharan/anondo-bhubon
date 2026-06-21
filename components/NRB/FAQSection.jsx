"use client";

import { useState } from "react";
import {
  FaCheckCircle,
  FaMinus,
  FaPlus,
  FaQuestionCircle,
} from "react-icons/fa";

const faqs = [
  {
    q: "Can I start the process from abroad?",
    a: "Yes. You can request project information, advisor consultation, document guidance, and family coordination while living outside Bangladesh.",
  },
  {
    q: "Can my family visit the site on my behalf?",
    a: "Yes. Your family members or trusted representative can coordinate a site visit with our team in Bangladesh.",
  },
  {
    q: "Do I need Power of Attorney?",
    a: "Power of Attorney may be required if someone else signs or completes documentation on your behalf. Our team can guide you on preparation steps.",
  },
  {
    q: "How do I make payment from abroad?",
    a: "Payment should follow official company guidance, approved bank details, and proper reference information. Always preserve receipts and written confirmations.",
  },
  {
    q: "What documents should I prepare first?",
    a: "Common documents include passport copy, recent photographs, NID if available, and Power of Attorney if a representative is acting for you.",
  },
  {
    q: "Will I receive advisor support after inquiry?",
    a: "Yes. The NRB support desk can help with consultation, project information, document preparation, and follow-up communication.",
  },
];

const supportPoints = [
  "Remote consultation",
  "Document guidance",
  "Family site visit support",
  "Payment reference assistance",
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <aside className="min-w-0 rounded-lg border border-border_color bg-off_white p-6 shadow-soft lg:sticky lg:top-28 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-xl text-white">
              <FaQuestionCircle />
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              NRB FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary">
              Questions before moving forward?
            </h2>
            <p className="mt-4 text-sm leading-7 text-primary/75">
              Quick answers about remote inquiry, documents, family
              coordination, payment references, and advisor support.
            </p>

            <div className="mt-6 space-y-3">
              {supportPoints.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-lg border border-border_color bg-white p-4 text-sm font-semibold leading-6 text-primary"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-secondary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mb-6 rounded-lg border border-border_color bg-primary p-6 text-white shadow-soft sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                Frequently Asked Questions
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Answers for overseas buyers.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/82">
                If you need more detail, request a consultation and our advisor
                will explain the next step based on your situation.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = active === index;

                return (
                  <article
                    key={faq.q}
                    className={`overflow-hidden rounded-lg border bg-white shadow-soft transition duration-300 ${
                      isOpen
                        ? "border-primary/30"
                        : "border-border_color hover:border-primary/30"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(isOpen ? null : index)}
                      className="flex w-full items-start justify-between gap-5 p-5 text-left sm:p-6"
                      aria-expanded={isOpen}
                    >
                      <span className="flex gap-4">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition ${
                            isOpen
                              ? "bg-primary text-white"
                              : "bg-off_white text-primary"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="pt-1 text-base font-bold leading-7 text-primary sm:text-lg">
                          {faq.q}
                        </span>
                      </span>

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition ${
                          isOpen
                            ? "bg-secondary text-white"
                            : "bg-off_white text-primary"
                        }`}
                      >
                        {isOpen ? <FaMinus /> : <FaPlus />}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-6 sm:px-6">
                          <div className="border-t border-border_color pt-5 sm:ml-14">
                            <p className="text-sm leading-8 text-primary/75">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
