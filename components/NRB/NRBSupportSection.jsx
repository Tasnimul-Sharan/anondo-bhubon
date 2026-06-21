"use client";

import { useState } from "react";
import {
  FaCheckCircle,
  FaFileAlt,
  FaGlobeAsia,
  FaUsers,
  FaVideo,
  FaWhatsapp,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "8801313775333";

const supports = [
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp Desk",
    desc: "Quick project communication for buyers living outside Bangladesh.",
  },
  {
    icon: <FaVideo />,
    title: "Video Consultation",
    desc: "Advisor-led call for project, document, and booking process review.",
  },
  {
    icon: <FaFileAlt />,
    title: "Document Assistance",
    desc: "Guidance for identity, Power of Attorney, and registration preparation.",
  },
  {
    icon: <FaUsers />,
    title: "Family Coordination",
    desc: "Support for site visits and communication with local family members.",
  },
];

const benefits = [
  "Remote consultation",
  "Step-by-step process guidance",
  "Document preparation support",
  "Family site visit coordination",
];

export default function NRBSupportSection() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    date: "",
    time: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = (event) => {
    event.preventDefault();

    const message = `Hello Anondo Bhubon,

I would like to request an NRB buyer consultation.

Name: ${formData.name}
WhatsApp Number: ${formData.whatsapp}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}

Please confirm my consultation schedule.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="nrb-support" className="bg-off_white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.44fr_0.56fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
              Global Buyer Support
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Complete support for NRB buyers.
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-primary/75">
            From the first call to document preparation, our support desk helps
            overseas buyers stay informed, organized, and connected with local
            representatives.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-start">
          <div className="min-w-0">
            <div className="grid gap-5 sm:grid-cols-2">
              {supports.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-border_color bg-white p-6 shadow-soft transition duration-300 hover:border-primary/30 hover:shadow-lift"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-xl text-secondary">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-primary/75">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-border_color bg-primary p-6 text-white shadow-soft sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-xl text-primary">
                  <FaGlobeAsia />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold tracking-tight">
                    Buy from abroad with a clear support path.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/82">
                    Our team assists with project information, payment
                    references, document preparation, and communication with
                    your local representative in Bangladesh.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {benefits.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 text-sm font-semibold leading-6"
                      >
                        <FaCheckCircle className="mt-1 shrink-0 text-secondary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="min-w-0 rounded-lg border border-border_color bg-white p-6 shadow-soft sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              Dedicated Support
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-primary">
              Request a consultation.
            </h3>
            <p className="mt-3 text-sm leading-7 text-primary/75">
              Pick a preferred date and time. Your request will open in
              WhatsApp for advisor confirmation.
            </p>

            <form onSubmit={handleBooking} className="mt-6 space-y-4">
              <InputField
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <InputField
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="WhatsApp Number"
                required
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <InputField
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
                <InputField
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-primary px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-secondary"
              >
                <FaVideo />
                Confirm Request
              </button>
            </form>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello Anondo Bhubon, I would like to inquire about NRB buyer support.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-lg border border-border_color bg-off_white px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-primary transition hover:border-primary hover:bg-white"
            >
              <FaWhatsapp className="text-secondary" />
              WhatsApp Now
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function InputField({ type, name, value, onChange, placeholder, required }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-lg border border-border_color bg-off_white px-4 py-4 text-sm font-semibold text-primary outline-none transition placeholder:text-primary/45 focus:border-primary focus:bg-white focus:ring-4 focus:ring-secondary/15"
    />
  );
}
