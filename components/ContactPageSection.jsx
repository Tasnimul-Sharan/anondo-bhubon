"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const WEB3FORMS_ACCESS_KEY = "bb771512-cc14-49a0-8b55-1c41f949153b";

const phoneNumbers = [
  "01331115500",
  "01331115511",
  "01313775333",
  "01313775334",
  "01313775335",
];

const contactCards = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Corporate Office",
    text: "Printers Building, 11-14th Floor, Rajuk Avenue, Motijheel, Dhaka",
    href: null,
  },
  {
    icon: <FaPhoneAlt />,
    title: "Support Team",
    text: "01331115500, 01331115511, 01313775333, 01313775334, 01313775335",
    href: "tel:01331115500",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Support",
    text: "info@anondocityscapers.com",
    href: "mailto:info@anondocityscapers.com",
  },
];

export default function ContactPageSection() {
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setResult("");
    setSuccess(false);

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const res = await response.json();

      if (res.success) {
        setSuccess(true);
        setResult(
          "Thank you for reaching out. Our team has received your message and will contact you shortly.",
        );
        event.target.reset();
      } else {
        setSuccess(false);
        setResult(
          "We could not submit your message at the moment. Please try again shortly.",
        );
      }
    } catch (error) {
      setSuccess(false);
      setResult(
        "We could not submit your message at the moment. Please try again shortly.",
      );
    } finally {
      setLoading(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <section className="bg-off_white py-20 sm:py-24">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_0.58fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-11 bg-secondary" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                Contact Desk
              </p>
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-primary sm:text-5xl lg:text-6xl">
              Speak with an Anondo Bhubon Support Team.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-primary/75">
              Request brochure support, pricing guidance, site visit
              coordination, residence availability, or investment information
              from our customer Support Teamy team.
            </p>
          </div>

          <div className="border border-border_color bg-white p-6 shadow-soft">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-secondary text-lg text-white">
                <FaClock />
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                  Office Hours
                </p>
                <p className="mt-2 text-lg font-bold text-primary">
                  Sat - Thu, 10 AM - 6 PM
                </p>
                <p className="mt-2 text-sm leading-6 text-primary/65">
                  Our team usually responds within one business day.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {contactCards.map((card) => (
            <ContactCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-12 grid overflow-hidden border border-border_color bg-white shadow-lift lg:grid-cols-[0.42fr_0.58fr]">
          <aside className="relative bg-primary p-7 text-white sm:p-9 lg:p-11">
            <div className="border-l-2 border-secondary pl-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">
                Support Team Support
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.02em] text-white sm:text-4xl">
                Tell us what you want to explore.
              </h3>

              <p className="mt-5 text-sm leading-8 text-white/75">
                Share your inquiry and the right member of our team will follow
                up with relevant project information, visit details, and next
                steps.
              </p>
            </div>

            <div className="mt-9 border border-white/15 bg-white/10 p-5">
              <h4 className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-white">
                <FaPhoneAlt />
                Call Directly
              </h4>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {phoneNumbers.map((num) => (
                  <a
                    key={num}
                    href={`tel:${num}`}
                    className="border border-white/15 px-4 py-3 text-sm font-semibold text-white/85 transition hover:border-white hover:bg-white hover:text-primary"
                  >
                    {num}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="mailto:info@anondobhubon.com"
              className="mt-5 flex items-center justify-between border border-white/15 bg-white/10 p-5 text-sm font-semibold text-white/85 transition hover:border-white hover:bg-white hover:text-primary"
            >
              <span className="flex min-w-0 items-center gap-3">
                <FaEnvelope className="shrink-0" />
                <span className="break-all">info@anondobhubon.com</span>
              </span>
              <FiArrowRight className="shrink-0" />
            </a>
          </aside>

          <div className="p-6 sm:p-8 lg:p-11">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                Send Message
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-primary">
                Write to us directly
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-primary/65">
                Fill out the form below and we will route your request to the
                right Support Team.
              </p>
            </div>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={onSubmit}
              className="space-y-5"
            >
              <input
                type="hidden"
                name="access_key"
                value={WEB3FORMS_ACCESS_KEY}
              />
              <input
                type="hidden"
                name="from_name"
                value="Anondo Bhubon Website"
              />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <InputField
                  label="Full Name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                />

                <InputField
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <InputField
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  placeholder="01XXXXXXXXX"
                />

                <InputField
                  label="Subject"
                  type="text"
                  name="subject"
                  placeholder="Pricing, brochure, site visit..."
                  required
                />
              </div>

              <label className="block">
                <span className="text-sm font-bold text-primary">Message</span>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  className="mt-2 h-40 w-full resize-none border border-border_color bg-off_white px-5 py-4 text-sm text-primary outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                  required
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-secondary hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
                <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {result && (
                <div
                  className={`flex items-center justify-center gap-2 border px-5 py-4 text-center text-sm font-semibold ${
                    success
                      ? "border-secondary/30 bg-secondary/10 text-primary"
                      : "border-primary/25 bg-primary/5 text-primary"
                  }`}
                >
                  {success && <FaCheckCircle className="shrink-0" />}
                  {result}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, text, href }) {
  const content = (
    <article className="group h-full border border-border_color bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
      <div className="flex h-12 w-12 items-center justify-center bg-primary text-xl text-white transition duration-300 group-hover:bg-secondary">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold text-primary">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-primary/70">{text}</p>
    </article>
  );

  return href ? (
    <a href={href} className="block h-full">
      {content}
    </a>
  ) : (
    content
  );
}

function InputField({ label, type, name, placeholder, required }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-primary">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full border border-border_color bg-off_white px-5 py-4 text-sm text-primary outline-none transition placeholder:text-primary/45 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
        required={required}
      />
    </label>
  );
}
