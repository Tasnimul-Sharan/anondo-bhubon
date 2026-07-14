"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiPhoneCall,
} from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { PiMapPinBold } from "react-icons/pi";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "NRB", href: "/nrb" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const projectLinks = [
  { name: "Master Plan", href: "/masterplan" },
  { name: "Residences", href: "/#residences" },
  {
    name: "Lifestyle Amenities",
    href: "/lifestyle-amenities",
  },
  {
    name: "Location Advantage",
    href: "/#location",
  },
  { name: "NRB Support", href: "/nrb" },
];

const legalLinks = [
  {
    name: "Payment Procedures",
    href: "/payment-procedures",
  },
  {
    name: "Terms and Conditions",
    href: "/terms-and-conditions",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/anondobhuban",
    label: "Facebook",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/anondo-bhubon/",
    label: "LinkedIn",
  },
];

const WEB3FORMS_ACCESS_KEY =
  "bb771512-cc14-49a0-8b55-1c41f949153b";

export default function Footer() {
  const year = new Date().getFullYear();

  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    setResult("");
    setSuccess(false);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Subscription failed.",
        );
      }

      setSuccess(true);
      setResult(
        "Thank you. You are now subscribed to Anondo Bhubon updates.",
      );

      form.reset();
    } catch (error) {
      console.error("Footer subscription error:", error);

      setSuccess(false);
      setResult(
        "We could not submit your email right now. Please try again.",
      );
    } finally {
      setLoading(false);

      window.setTimeout(() => {
        setResult("");
      }, 6000);
    }
  };

  return (
    <footer className="relative isolate overflow-hidden bg-[#111A46] text-white">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#111A46_0%,#202D72_55%,#172057_100%)]" />

        <div className="absolute -left-36 top-12 h-[420px] w-[420px] rounded-full bg-[#F48220]/10 blur-[130px]" />

        <div className="absolute -right-44 bottom-0 h-[540px] w-[540px] rounded-full bg-white/[0.05] blur-[150px]" />

        <div className="absolute -right-48 top-10 h-[480px] w-[480px] rounded-full border border-white/[0.06]" />

        <div className="absolute -right-24 top-32 h-[320px] w-[320px] rounded-full border border-white/[0.07]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Top Consultation Banner */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-6 py-9 sm:flex-row sm:items-center sm:justify-between lg:py-11">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#F48220]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#F7A55A]">
                  Begin Your Ownership Journey
                </p>
              </div>

              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-3xl lg:text-4xl">
                Discover a distinguished address near
                Purbachal.
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-between gap-8 bg-[#F48220] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_rgba(244,130,32,0.2)] transition duration-300 hover:bg-white hover:text-[#202D72]"
            >
              <span>Request Consultation</span>

              <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        {/* Main Footer */}
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.25fr_0.7fr_0.85fr_1.2fr] lg:gap-10 lg:py-20">
          {/* Brand Column */}
          <div className="min-w-0">
            <Link
              href="/"
              aria-label="Anondo Bhubon home"
              className="inline-flex bg-white p-3 shadow-[0_16px_40px_rgba(0,0,0,0.15)]"
            >
              <Image
                src="/anondo-bhubon-updated-logo.png"
                alt="Anondo Bhubon logo"
                width={190}
                height={120}
                className="h-auto w-[150px] object-contain sm:w-[170px]"
              />
            </Link>

            <p className="mt-7 max-w-sm text-sm font-medium leading-7 text-white/62">
              A future-focused township shaped around
              green-blue infrastructure, secure community
              living, wellness and long-term investment value.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((item) => (
                <SocialIcon
                  key={item.label}
                  {...item}
                />
              ))}
            </div>

            <div className="mt-8 border-l-2 border-[#F48220] pl-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                Project Location
              </p>

              <p className="mt-2 text-sm font-semibold leading-6 text-white">
                East of River Sitalakhya
              </p>

              <p className="mt-1 text-xs font-medium text-white/50">
                Near Purbachal New Town
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn
            title="Quick Links"
            links={quickLinks}
          />

          {/* Project Links */}
          <FooterColumn
            title="Explore Project"
            links={projectLinks}
          />

          {/* Contact and Newsletter */}
          <div className="min-w-0">
            <FooterTitle title="Get in Touch" />

            <div className="mt-6 space-y-4">
              <ContactItem
                icon={<PiMapPinBold />}
                text="Printers Building, 11–12th Floor, 5 Rajuk Avenue, Motijheel, Dhaka 1000"
              />

              <ContactItem
                icon={<FiPhoneCall />}
                text="+880 1313-775333"
                href="tel:+8801313775333"
              />

              <ContactItem
                icon={<HiOutlineMail />}
                text="info@anondobhubon.com"
                href="mailto:info@anondobhubon.com"
              />
            </div>

            {/* Newsletter */}
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={onSubmit}
              className="mt-8 border border-white/12 bg-white/[0.06] p-5 backdrop-blur-md sm:p-6"
            >
              <input
                type="hidden"
                name="access_key"
                value={WEB3FORMS_ACCESS_KEY}
              />

              <input
                type="hidden"
                name="from_name"
                value="Anondo Bhubon Footer Updates"
              />

              <input
                type="hidden"
                name="subject"
                value="New Anondo Bhubon footer subscription"
              />

              <input
                type="hidden"
                name="message"
                value="Please send brochure updates, site visit information, availability notes and advisor support."
              />

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F7A55A]">
                Project Updates
              </p>

              <p className="mt-3 text-sm font-medium leading-6 text-white/62">
                Receive brochure updates, availability
                information and site-visit announcements.
              </p>

              <div className="mt-5 flex border border-white/15 bg-white">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-1 bg-white px-4 py-3.5 text-sm font-medium text-[#202D72] outline-none placeholder:text-[#202D72]/40"
                />

                <button
                  type="submit"
                  disabled={loading}
                  aria-label="Subscribe to project updates"
                  className="group flex w-14 shrink-0 items-center justify-center bg-[#F48220] text-lg text-white transition duration-300 hover:bg-[#202D72] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />
                  ) : (
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>
              </div>

              {result && (
                <p
                  aria-live="polite"
                  role="status"
                  className={`mt-3 text-xs font-semibold leading-5 ${
                    success
                      ? "text-emerald-300"
                      : "text-[#F7A55A]"
                  }`}
                >
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 text-xs font-medium text-white/50 lg:flex-row lg:items-center lg:justify-between">
          <p>
            Copyright © {year}{" "}
            <span className="font-semibold text-white/85">
              Anondo Bhubon
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative transition duration-300 hover:text-[#F7A55A]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
            Future Smart City
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="min-w-0">
      <FooterTitle title={title} />

      <ul className="mt-6 space-y-4">
        {links.map((item) => (
          <li key={item.name} className="w-fit">
            <Link
              href={item.href}
              className="group flex items-center gap-3 text-sm font-medium text-white/60 transition duration-300 hover:text-white"
            >
              <span className="h-px w-0 bg-[#F48220] transition-all duration-300 group-hover:w-5" />

              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterTitle({ title }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#F7A55A]">
        {title}
      </p>

      <div className="mt-4 flex items-center gap-2">
        <span className="h-0.5 w-9 bg-[#F48220]" />
      </div>
    </div>
  );
}

function ContactItem({ icon, text, href }) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/12 bg-white/[0.06] text-base text-[#F7A55A] transition duration-300 group-hover:border-[#F48220] group-hover:bg-[#F48220] group-hover:text-white">
        {icon}
      </span>

      <span className="min-w-0 break-words text-sm font-medium leading-6 text-white/62 transition duration-300 group-hover:text-white">
        {text}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group flex items-start gap-3"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group flex items-start gap-3">
      {content}
    </div>
  );
}

function SocialIcon({ icon: Icon, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex h-11 w-11 items-center justify-center border border-white/12 bg-white/[0.06] text-sm text-white transition duration-300 hover:-translate-y-1 hover:border-[#F48220] hover:bg-[#F48220]"
    >
      <Icon className="transition-transform duration-300 group-hover:scale-110" />
    </a>
  );
}