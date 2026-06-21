"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaVideo,
  FaFileAlt,
  FaUsers,
  FaCheckCircle,
  FaGlobeAsia,
} from "react-icons/fa";

export default function NRBSupportSection() {
  const WHATSAPP_NUMBER = "8801318252050";

  // Replace this with your real Zoom booking page link
  const ZOOM_BOOKING_URL = "https://scheduler.zoom.us/YOUR_BOOKING_PAGE_LINK";

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    date: "",
    time: "",
  });

  const supports = [
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp Support",
      desc: "Instant communication from anywhere in the world.",
    },
    {
      icon: <FaVideo />,
      title: "Zoom Video Consultation",
      desc: "Discuss project details through a scheduled video meeting.",
    },
    {
      icon: <FaFileAlt />,
      title: "Document Assistance",
      desc: "Guidance for legal documents, verification, and processing.",
    },
    {
      icon: <FaUsers />,
      title: "Family Coordination",
      desc: "We coordinate with your family members in Bangladesh.",
    },
  ];

  const benefits = [
    "Remote consultation for overseas buyers",
    "Step-by-step land purchase guidance",
    "Legal and documentation support",
    "Family site visit coordination",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const message = `
Hello Anondo Cityscapers,

I would like to book a Zoom video call for NRB buyer support.

Name: ${formData.name}
WhatsApp Number: ${formData.whatsapp}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}

Please confirm my Zoom consultation schedule.
    `;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-primary/5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Global Buyer Support
          </p>

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 md:text-5xl">
            Complete Support for NRB Buyers
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            From consultation to registration — our team helps overseas buyers
            complete the process smoothly through WhatsApp, Zoom, documentation
            support, and family coordination.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-primary" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.58fr_0.42fr] lg:items-start">
          {/* Left Content */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {supports.map((item, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                    {item.icon}
                  </div>

                  <h4 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-primary/10 bg-white p-7 shadow-sm">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-2xl text-white">
                  <FaGlobeAsia />
                </div>

                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.02em] text-gray-900">
                    Buy Land from Abroad with Confidence
                  </h3>

                  <p className="mt-3 text-sm leading-8 text-gray-600">
                    Our NRB support team assists you with project information,
                    payment guidance, document preparation, and communication
                    with your local representative in Bangladesh.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {benefits.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm font-medium text-gray-700"
                      >
                        <FaCheckCircle className="mt-1 shrink-0 text-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Booking Card */}
          <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-xl sm:p-8">
            <span className="mb-5 inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              NRB Dedicated Support
            </span>

            <h3 className="text-2xl font-bold tracking-[-0.02em] text-gray-900 md:text-3xl">
              Talk to Our Expert
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Book a Zoom consultation or contact us directly through WhatsApp
              for project and investment guidance.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello Anondo Cityscapers, I would like to inquire about your NRB buyer support.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-4 text-sm font-bold text-white transition hover:bg-green-600"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href={ZOOM_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-sm font-bold text-white transition hover:bg-primary/90"
              >
                <FaVideo />
                Schedule Zoom
              </a>
            </div>

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-sm text-gray-400">or request schedule</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <form onSubmit={handleBooking} className="space-y-4">
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
                className="w-full rounded-2xl bg-gray-900 px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-primary"
              >
                Confirm Zoom Booking
              </button>
            </form>

            <p className="mt-5 text-center text-xs leading-6 text-gray-500">
              After submission, your booking request will open in WhatsApp for
              confirmation.
            </p>
          </div>
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
      className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm text-gray-900 outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
    />
  );
}