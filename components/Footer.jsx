"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { PiMapPinBold } from "react-icons/pi";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "NRB", href: "/nrb" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const projectLinks = [
  { name: "Master Plan", href: "/masterplan" },
  { name: "Residences", href: "/#residences" },
  { name: "Amenities", href: "/#amenities" },
  { name: "Location Advantage", href: "/#location" },
  { name: "NRB Support", href: "/nrb" },
];

const legalLinks = [
  { name: "Payment Procedures", href: "/payment-procedures" },
  { name: "Terms and Conditions", href: "/terms-and-conditions" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

const socialLinks = [
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/anondobhuban",
    label: "Facebook",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/company/anondo-bhubon/",
    label: "LinkedIn",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-primary text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-secondary">
              Anondo Bhubon
            </p>

            <h2 className="mt-4 max-w-3xl break-words font-serif italic text-4xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-5xl">
              Eco-friendly urban living near Purbachal.
            </h2>
          </div>

          <div className="min-w-0 rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur">
            <p className="text-sm font-medium leading-7 text-white/75">
              Get brochure updates, site visit information, availability notes,
              and advisor support for the Anondo Bhubon township.
            </p>

            <div className="mt-5 flex overflow-hidden rounded-lg border border-white/20 bg-white">
              <input
                type="email"
                placeholder="email@example.com"
                className="min-w-0 flex-1 bg-white px-4 py-3 text-sm font-medium text-primary outline-none placeholder:text-primary/45"
              />
              <button
                type="button"
                aria-label="Subscribe to updates"
                className="flex w-14 items-center justify-center bg-secondary text-lg text-white transition hover:bg-secondary/90"
              >
                <HiOutlineMail />
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.85fr_0.85fr_1.05fr]">
          <div className="min-w-0">
            <Link href="/" className="inline-flex">
              <Image
                src="/anondo-bhubon-updated-logo.png"
                alt="Anondo Bhubon logo"
                width={220}
                height={170}
                className="h-auto w-full rounded-lg bg-white p-3"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm font-medium leading-7 text-white/72">
              A self-sufficient township vision shaped around green-blue
              infrastructure, secure community living, wellness, and long-term
              investment value.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((item) => (
                <SocialIcon key={item.label} {...item} />
              ))}
            </div>
          </div>

          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Project" links={projectLinks} />

          <div className="min-w-0">
            <FooterTitle title="Get in Touch" />

            <div className="mt-5 space-y-4">
              <ContactItem
                icon={<PiMapPinBold />}
                text="Printers Building, 11-12th Floor, 5 Rajuk Avenue, Motijheel, Dhaka 1000"
              />
              <ContactItem icon={<FiPhoneCall />} text="+880 1313-775333" />
              <ContactItem
                icon={<HiOutlineMail />}
                text="info@anondobhubon.com"
              />
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-secondary/90"
            >
              Contact Advisor
              <FiArrowUpRight className="text-base" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/15 pt-6 text-sm font-medium text-white/65 lg:flex-row lg:items-center lg:justify-between">
          <p>
            Copyright © {year}{" "}
            <span className="font-bold text-white">Anondo Bhubon</span>. All
            rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition hover:text-secondary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="min-w-0">
      <FooterTitle title={title} />

      <ul className="mt-5 space-y-3">
        {links.map((item) => (
          <li key={item.name} className="w-fit">
            <Link
              href={item.href}
              className="group relative inline-flex text-sm font-medium text-white/72 transition hover:text-white"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
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
      <h3 className="text-lg font-bold tracking-[-0.01em] text-white">
        {title}
      </h3>
      <div className="mt-3 h-[2px] w-12 bg-secondary" />
    </div>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-start gap-3 text-sm font-medium leading-7 text-white/72">
      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-base text-secondary">
        {icon}
      </span>
      <span className="min-w-0 break-words">{text}</span>
    </div>
  );
}

function SocialIcon({ icon, href, label }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white transition hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary"
    >
      {icon}
    </Link>
  );
}
