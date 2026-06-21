"use client";

import {
  FaCheckCircle,
  FaEnvelope,
  FaExclamationTriangle,
  FaInfoCircle,
  FaPhoneAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const contactNumbers = [
  "01324412961",
  "01324412954",
  "01750180096",
  "01750180093",
];

const instructions = [
  "All installment payments must be made on time.",
  "Ensure the correct payment amount is deposited.",
  "After making a payment, collect and preserve the receipt for future reference.",
];

export default function PaymentInstructions() {
  return (
    <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="min-w-0 rounded-lg border border-border_color bg-white p-6 shadow-soft transition duration-300 hover:border-primary/30 hover:shadow-lift sm:p-7">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-xl text-white">
            <FaExclamationTriangle />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
              Important Notice
            </p>
            <h3 className="mt-2 break-words text-xl font-bold leading-tight text-primary sm:text-2xl">
              Payment identification details
            </h3>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-primary/15 bg-off_white p-5">
          <p className="flex items-start gap-3 text-sm leading-7 text-primary/80">
            <FaInfoCircle className="mt-1 shrink-0 text-secondary" />
            <span>
              During remittance, your full name, member number, and project
              name must be clearly mentioned so the subscriber can be identified
              correctly.
            </span>
          </p>
        </div>

        <div className="mt-7">
          <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-primary">
            <FaEnvelope className="text-secondary" />
            Email Address
          </h4>

          <a
            href="mailto:info@anondobhubon.com"
            className="mt-3 inline-flex max-w-full break-all rounded-lg border border-border_color bg-off_white px-5 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-white"
          >
            info@anondobhubon.com
          </a>
        </div>

        <div className="mt-7">
          <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-primary">
            <FaPhoneAlt className="text-secondary" />
            Contact Numbers
          </h4>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {contactNumbers.map((num) => (
              <a
                key={num}
                href={`tel:${num}`}
                className="group flex items-center gap-3 rounded-lg border border-border_color bg-off_white px-4 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-primary transition group-hover:text-secondary">
                  <FiPhone />
                </span>
                {num}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative min-w-0 overflow-hidden rounded-lg border border-border_color bg-white p-6 shadow-soft transition duration-300 hover:border-primary/30 hover:shadow-lift sm:p-7">
        <div className="absolute inset-x-0 top-0 h-2 bg-secondary" />

        <div className="relative">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-xl text-secondary">
              <FaShieldAlt />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                New Member Guideline
              </p>
              <h2 className="mt-2 break-words text-xl font-bold leading-tight text-primary sm:text-2xl">
                Payment and installment process
              </h2>
            </div>
          </div>

          <p className="mt-6 text-sm leading-8 text-primary/80">
            Before accepting a new membership application, a verification
            process is conducted. After successful verification, members are
            required to deposit a security amount along with the initial
            installment. Regular installment payments should then be made on
            schedule to support continued membership and completion of the
            allocated property payment.
          </p>

          <div className="mt-7">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
              Important Instructions
            </h3>

            <ul className="mt-5 space-y-4">
              {instructions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-border_color bg-off_white px-4 py-4 text-sm leading-7 text-primary/80"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
