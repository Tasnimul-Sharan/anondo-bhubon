"use client";

import { useState } from "react";
import { FaBuildingColumns, FaCheck, FaRegCopy } from "react-icons/fa6";
import PaymentInstructions from "./PaymentInstructions";

const cityscapersBanks = [
  {
    sl: "01",
    bank: "Sonali Bank PLC",
    branch: "Nagar Bhaban Branch, Dhaka",
    accountName: "Anondo Cityscapers Ltd.",
    accountNo: "1623803000066",
    swift: "BSONBDDH",
    routing: "200274573",
  },
  {
    sl: "02",
    bank: "Janata Bank PLC",
    branch: "Nagar Bhaban Branch, Dhaka",
    accountName: "Anondo Cityscapers Ltd.",
    accountNo: "0100281648840",
    swift: "JANBBDDHKRN",
    routing: "135274572",
  },
];

const paymentChecks = [
  "Use approved company bank accounts only",
  "Mention full name, member number, and project name",
  "Preserve the deposit slip or transfer receipt",
];

export default function PaymentInfo() {
  const [copied, setCopied] = useState("");

  const handleCopy = async (text) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(text);
    }

    setCopied(text);
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <section className="bg-off_white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-lg border border-border_color bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-primary shadow-soft">
              <FaBuildingColumns className="text-secondary" />
              Payment Procedures
            </span>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Bank account details for Anondo Cityscapers Ltd.
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-primary/75">
              Payments may be made through bank-to-bank transfer or authorized
              money exchange support. Please verify the account details,
              reference information, and receipt preservation requirements
              before sending any payment.
            </p>
          </div>

          <div className="min-w-0 rounded-lg border border-border_color bg-white p-5 shadow-soft sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              Payment Checklist
            </p>
            <div className="mt-4 grid gap-3">
              {paymentChecks.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-lg border border-border_color bg-off_white p-4 text-sm font-semibold leading-6 text-primary"
                >
                  <FaCheck className="mt-1 shrink-0 text-secondary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {cityscapersBanks.map((bank) => (
            <article
              key={bank.sl}
              className="min-w-0 overflow-hidden rounded-lg border border-border_color bg-white shadow-soft transition duration-300 hover:border-primary/30 hover:shadow-lift"
            >
              <div className="border-b border-secondary/30 bg-primary p-6 text-white">
                <div className="flex items-start justify-between gap-5">
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                      Bank Account {bank.sl}
                    </p>
                    <h2 className="mt-3 text-2xl font-bold">{bank.bank}</h2>
                    <p className="mt-2 text-sm font-semibold text-white/75">
                      {bank.branch}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-xl text-primary">
                    <FaBuildingColumns />
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-6">
                <InfoRow label="Account Name" value={bank.accountName} />

                <CopyRow
                  label="Account No"
                  value={bank.accountNo}
                  copied={copied}
                  onCopy={handleCopy}
                />

                <CopyRow
                  label="Swift Code"
                  value={bank.swift}
                  copied={copied}
                  onCopy={handleCopy}
                />

                <CopyRow
                  label="Routing No"
                  value={bank.routing}
                  copied={copied}
                  onCopy={handleCopy}
                />
              </div>
            </article>
          ))}
        </div>

        <PaymentInstructions />
      </div>
    </section>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="rounded-lg border border-border_color bg-off_white px-4 py-3">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
        {label}
      </p>
      <p className="mt-1 break-words text-sm font-semibold text-primary">
        {value}
      </p>
    </div>
  );
}

function CopyRow({ label, value, copied, onCopy }) {
  const isCopied = copied === value;

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-border_color bg-off_white px-4 py-3">
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
          {label}
        </p>
        <p className="mt-1 break-words text-sm font-semibold text-primary">
          {value}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onCopy(value)}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-white text-primary transition hover:bg-primary hover:text-white"
        aria-label={`Copy ${label}`}
      >
        {isCopied ? <FaCheck /> : <FaRegCopy />}
      </button>
    </div>
  );
}
