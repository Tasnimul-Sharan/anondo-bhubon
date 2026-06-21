"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function ContactPageSection() {
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactCards = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Office Address",
      text: "Printers Building, 11–14th Floor, Rajuk Avenue, Motijheel, Dhaka",
      href: null,
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone Number",
      text: "01331115500, 01331115511, 01313775333, 01313775334, 01313775335",
      href: "tel:01331115500",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      text: "info@anondocityscapers.com",
      href: "mailto:info@anondocityscapers.com",
    },
  ];

  const phoneNumbers = [
    "01331115500",
    "01331115511",
    "01313775333",
    "01313775334",
    "01313775335",
  ];

  const onSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setResult("");
    setSuccess(false);

    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const res = await response.json();

      if (res.success) {
        setSuccess(true);
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setSuccess(false);
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSuccess(false);
      setResult("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <section className="relative overflow-hidden bg-off_white py-20 sm:py-24">
      {/* Decorative Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-primary" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">
              Contact Us
            </p>
            <span className="h-[2px] w-12 bg-primary" />
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-soft_black sm:text-5xl lg:text-6xl">
            Get In Touch With Us
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            We are here to answer your questions, guide your property journey,
            and help you connect with the right team.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-[1.75rem] border border-border_color bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                {card.icon}
              </div>

              <h3 className="text-xl font-bold text-soft_black">
                {card.title}
              </h3>

              {card.href ? (
                <a
                  href={card.href}
                  className="mt-3 block text-sm leading-7 text-gray-600 transition hover:text-primary"
                >
                  {card.text}
                </a>
              ) : (
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {card.text}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Main Contact Area */}
        <div className="grid overflow-hidden rounded-[2rem] border border-border_color bg-white shadow-lift lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Info Panel */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10" />

            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/70">
                Need Assistance?
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
                Let’s talk about your query today.
              </h3>

              <p className="mt-5 text-sm leading-8 text-white/75">
                Share your message with us. Our team will contact you as soon as
                possible with the right information and support.
              </p>

              <div className="mt-10 space-y-4">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white">
                    <FaPhoneAlt />
                    Call Us
                  </h4>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {phoneNumbers.map((num) => (
                      <a
                        key={num}
                        href={`tel:${num}`}
                        className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/85 transition hover:bg-white hover:text-primary"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href="mailto:info@anondocityscapers.com"
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 p-5 text-sm text-white/85 backdrop-blur transition hover:bg-white hover:text-primary"
                >
                  <span className="flex items-center gap-3">
                    <FaEnvelope />
                    info@anondocityscapers.com
                  </span>
                  <FiArrowRight />
                </a>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                Send Message
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-soft_black">
                Write to us directly
              </h3>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <InputField
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <InputField
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>

              <InputField
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                placeholder="Write your message..."
                className="h-40 w-full resize-none rounded-2xl border border-border_color bg-gray-50 px-5 py-4 text-sm text-soft_black outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-secondary hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
                <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {result && (
                <div
                  className={`flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-center text-sm font-semibold ${
                    success
                      ? "border border-green-200 bg-green-50 text-green-700"
                      : "border border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {success && <FaCheckCircle />}
                  {result}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map */}
        {/* <div className="mt-12 overflow-hidden rounded-[2rem] border border-border_color bg-white p-3 shadow-soft">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4812.923042245769!2d90.41187546190507!3d23.729719178595598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85855d36dcd%3A0xc01cee8905afc935!2sPrinter&#39;s%20Building!5e1!3m2!1sen!2sbd!4v1775975838729!5m2!1sen!2sbd"
            className="h-[420px] w-full rounded-[1.5rem] border-0 md:h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div> */}
      </div>
    </section>
  );
}

function InputField({ type, name, placeholder, required }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-border_color bg-gray-50 px-5 py-4 text-sm text-soft_black outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
      required={required}
    />
  );
}
