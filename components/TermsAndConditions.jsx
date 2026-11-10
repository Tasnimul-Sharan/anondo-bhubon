"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useNoMotion } from "@/Hooks/useNoMotion";

const ease = [0.22, 1, 0.36, 1];

const paymentMethodItems = [
  {
    label: "The prices of the plot:",
    value: "As per price list.",
  },
  {
    label: "Booking Amount:",
    value: "BDT 1,00,000 (One lac only) per plot.",
  },
  {
    label: "Down Payment:",
    value: "20% of the total price must be paid within 30 days of booking.",
  },
  {
    label: "Remaining Balance:",
    value: "Can be paid in monthly installments as per the payment schedule.",
  },
  {
    label: "Full Payment Discount:",
    value: "5% discount will be given for one time payment.",
  },
];

const costAndUsageSections = [
  {
    heading: "Inclusive Costs:",
    body: "The price of the plot includes land cost, earthfilling charges, and road construction expenses.",
  },
  {
    heading: "Exclusive Costs:",
    body: "Utility charges, registration charges and boundary charges.",
  },
  {
    heading: "Land Usage Ratio:",
    body: "As per housing policy, 37.5% of the project area is allocated for roads, drainage, social, and commercial facilities. However, in Anondo Bhuban 40% of the land is allocated for infrastructure and amenities.",
  },
];

const numberedTerms = [
  {
    num: "1.",
    text: "Once price is fixed, it will not be changed.",
  },
  {
    num: "2.",
    text: "Booking Money/Application Money BDT 1,00,000/-(One Lac) Per Plot, To be paid with application.",
  },
  {
    num: "3.",
    text: "Every application will be verified by the authority.",
  },
  {
    num: "4.",
    text: "Down payment (20% of Total Price) to be paid within 30 days. Rest amount will be paid by 48/60/84 EMI (Equal Monthly Installments).",
  },
  {
    num: "5.",
    text: "5% discount will be given for one time payment.",
  },
  {
    num: "6.",
    text: "Payment will be made in favour of “Anondo Cityscapers Ltd”.",
  },
  {
    num: "7.",
    text: "Failing to pay down-payment within 30 days, Allotment will be cancelled automatically (Without Prior Notice).",
  },
  {
    num: "8.",
    text: "Failing to pay Consecutive 03 installments, Allotment maybe cancelled automatically (Without Prior Notice).",
  },
];

function Rule({ light = false }) {
  const reduce = useNoMotion();
  return (
    <motion.span
      aria-hidden="true"
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={reduce ? undefined : { scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease }}
      className={`block h-[3px] w-12 origin-left ${light ? "bg-[#F7A55A]" : "bg-secondary"}`}
    />
  );
}

export default function TermsAndConditions() {
  const reduce = useNoMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
  });

  return (
    <article
      data-terms-page
      className="relative bg-[#F7F5F0] tracking-normal text-primary"
    >
      {!reduce && (
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="fixed inset-x-0 top-0 z-[65] h-[3px] origin-left bg-secondary"
        />
      )}

      {/* Main Readable Document Sheet */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div className="border border-primary/12 border-t-[3px] border-t-secondary bg-white shadow-[0_18px_50px_rgba(23,32,58,0.06)]">
          {/* Part 1: Plot Prices & Payment Method */}
          <section
            aria-labelledby="terms-plot-prices"
            className="p-6 sm:p-10 lg:p-12"
          >
            <Rule />
            <h2
              id="terms-plot-prices"
              className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-[#17203A] sm:text-3xl"
            >
              Plot Prices &amp; Payment Method:
            </h2>

            <dl className="mt-7 divide-y divide-primary/10 border-y border-primary/10">
              {paymentMethodItems.map((item) => (
                <div
                  key={item.label}
                  data-terms-reveal
                  className="grid gap-1.5 py-4 sm:grid-cols-[260px_1fr] sm:items-baseline sm:gap-6 sm:py-5"
                >
                  <dt className="flex items-center gap-3 text-base font-semibold text-[#17203A] sm:text-[17px]">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0 bg-secondary"
                    />
                    <span>{item.label}</span>
                  </dt>
                  <dd className="pl-5 text-base leading-7 text-[#374151] sm:pl-0 sm:text-[17px] sm:leading-8">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Part 2: Inclusive Costs, Exclusive Costs, Land Usage Ratio */}
          <section
            aria-label="Costs and land usage"
            className="border-t border-primary/10 bg-[#FAF9F6] p-6 sm:p-10 lg:p-12"
          >
            <div className="divide-y divide-primary/10">
              {costAndUsageSections.map((section, idx) => (
                <div
                  key={section.heading}
                  data-terms-reveal
                  className={`grid gap-2.5 ${
                    idx === 0
                      ? "pb-6 sm:pb-7"
                      : idx === costAndUsageSections.length - 1
                        ? "pt-6 sm:pt-7"
                        : "py-6 sm:py-7"
                  } sm:grid-cols-[260px_1fr] sm:items-baseline sm:gap-6`}
                >
                  <h2 className="flex items-center gap-3 text-lg font-semibold tracking-[-0.015em] text-[#17203A] sm:text-xl">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 shrink-0 bg-secondary"
                    />
                    <span>{section.heading}</span>
                  </h2>
                  <p className="pl-5 text-base leading-8 text-[#2C3347] sm:pl-0 sm:text-[17px] sm:leading-8">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Part 3: Numbered TERMS AND CONDITIONS (1-8) */}
          <section
            aria-labelledby="terms-numbered-list"
            className="border-t border-primary/10 p-6 sm:p-10 lg:p-12"
          >
            <Rule />
            <h2
              id="terms-numbered-list"
              className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-[#17203A] sm:text-3xl"
            >
              TERMS AND CONDITIONS
            </h2>

            <ol className="mt-7 divide-y divide-primary/10 border-y border-primary/10">
              {numberedTerms.map((item) => (
                <li
                  key={item.num}
                  data-terms-reveal
                  className="flex items-baseline gap-4 py-4.5 sm:gap-6 sm:py-5"
                >
                  <span className="w-7 shrink-0 text-base font-bold tabular-nums text-secondary sm:w-8 sm:text-lg">
                    {item.num}
                  </span>
                  <p className="min-w-0 text-base leading-8 text-[#20263A] sm:text-[17px] sm:leading-8">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </article>
  );
}
