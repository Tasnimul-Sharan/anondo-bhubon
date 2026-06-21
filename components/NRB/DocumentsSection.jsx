"use client";

import {
  FaCamera,
  FaCheckCircle,
  FaFileSignature,
  FaFolderOpen,
  FaIdCard,
  FaPassport,
} from "react-icons/fa";

const docs = [
  {
    title: "Passport Copy",
    desc: "Clear copy of a valid passport for buyer identification and record preparation.",
    icon: <FaPassport />,
    status: "Mandatory",
  },
  {
    title: "NID Copy",
    desc: "National ID copy is recommended when available for local verification support.",
    icon: <FaIdCard />,
    status: "Recommended",
  },
  {
    title: "Photographs",
    desc: "Recent passport-size photographs prepared according to registration requirements.",
    icon: <FaCamera />,
    status: "Mandatory",
  },
  {
    title: "Power of Attorney",
    desc: "Required if a family member or representative signs or coordinates on your behalf.",
    icon: <FaFileSignature />,
    status: "If Applicable",
  },
];

const supportItems = [
  "Document checklist review",
  "Power of Attorney guidance",
  "Family representative coordination",
  "Registration preparation support",
];

export default function DocumentsSection() {
  return (
    <section id="documents" className="bg-off_white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <aside className="min-w-0 rounded-lg border border-border_color bg-white p-6 shadow-soft lg:sticky lg:top-28 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-xl text-white">
              <FaFolderOpen />
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              Required Documents
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary">
              Prepare documents before registration steps begin.
            </h2>
            <p className="mt-4 text-sm leading-7 text-primary/75">
              The exact document list may vary by buyer profile and process
              stage. Our team helps you prepare the common essentials first.
            </p>

            <div className="mt-6 space-y-3">
              {supportItems.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-lg border border-border_color bg-off_white p-4 text-sm font-semibold leading-6 text-primary"
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
                Document Checklist
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Keep these ready for smoother processing.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/82">
                These documents help the advisor team prepare verification,
                registration, and communication steps for overseas buyers.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {docs.map((doc, index) => (
                <article
                  key={doc.title}
                  className="rounded-lg border border-border_color bg-white p-6 shadow-soft transition duration-300 hover:border-primary/30 hover:shadow-lift"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-xl text-secondary">
                      {doc.icon}
                    </div>
                    <span className="rounded-lg border border-border_color bg-off_white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                      {doc.status}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-primary">
                    {doc.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-primary/75">
                    {doc.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-border_color pt-4 text-sm font-bold text-secondary">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    Ready for review
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
