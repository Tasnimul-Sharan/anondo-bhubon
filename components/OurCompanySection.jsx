"use client";

import Image from "next/image";
import {
  FaBuilding,
  FaCapsules,
  FaLeaf,
  FaShieldAlt,
} from "react-icons/fa";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhoneCall,
} from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const businessSectors = [
  { icon: FaBuilding, title: "Real Estate Development" },
  { icon: FaLeaf, title: "Agriculture & Research" },
  { icon: FaShieldAlt, title: "Security Services" },
  { icon: FaCapsules, title: "Pharmaceuticals" },
];

const coreStrengths = [
  "Integrated multi-industry business ecosystem",
  "Sustainable and future-focused investments",
  "Strong ethical governance & leadership",
  "Community-driven development model",
];

const companies = [
  {
    name: "Anondo Housing Society",
    link: "https://www.anondohousing.com/",
    email: "info@anondohousing.com",
    phone: ["+8801313775333", "+8801313775334", "+8801313775335"],
    projectAddress:
      "Anondo Housing Society, Purbachal New Town, Rupganj, Narayanganj, Bangladesh",
    corporateAddress:
      "Printers Building, 11–14th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka, Bangladesh",
    image: "/companies/housing.png",
  },
  {
    name: "Anondo Bhubon.",
    link: "https://www.anondobhubon.com/",
    email: "info@anondobhubon.com",
    phone: ["+8801313775333", "+8801313775334", "+8801313775335"],
    projectAddress: "VH2R+7Q, Anondo Bhuban Site Office, Bholabo Union",
    corporateAddress:
      "Printers Building, 11–14th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka, Bangladesh",
    image: "/companies/bhubon-logo.png",
    imageFit: "cover",
  },
  {
    name: "Anondo Rosemontestate.",
    link: "https://www.anondorosemontestate.com/",
    email: "info@anondorosemontestate.com",
    phone: ["+8801313775333", "+8801313775334", "+8801313775335"],
    projectAddress: "VH2R+7Q, Anondo Bhuban Site Office, Bholabo Union",
    corporateAddress:
      "Printers Building, 11–14th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka, Bangladesh",
    image: "/companies/rosemont-logo-1.png",
    imageFit: "cover",
  },
  {
    name: "Anondo Baari",
    link: "https://www.anondobari.com/",
    email: "info@anondobari.com",
    phone: ["+8801313775333", "+8801313775334", "+8801313775335"],
    projectAddress:
      "Anondo Baari, Ulukhola, Nagari Union, Kaliganj Upazila, Gazipur District (near Powran Bridge).",
    corporateAddress:
      "Printers Building, 11–14th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka, Bangladesh",
    image: "/companies/baari.png",
  },
  {
    name: "Pranto ARDI",
    link: "https://www.prantoardi.com/",
    email: "info@prantoardi.com",
    phone: ["+8801324711849"],
    projectAddress:
      "Horipur Village, Meghna Upazila, Comilla District, Bangladesh",
    corporateAddress:
      "Printers Building, 11–14th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka, Bangladesh",
    image: "/companies/pranto.png",
  },
  {
    name: "Anondo Universal Services Ltd.",
    link: "https://www.anondouniversalserviceslimited.com/",
    email: "anondo.ausl@gmail.com",
    phone: ["+8801313775333", "+8801313775334", "+8801313775335"],
    projectAddress:
      "Anondo Housing Society, Purbachal New Town, Rupganj, Narayanganj, Bangladesh",
    corporateAddress:
      "Printers Building, 14th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka, Bangladesh",
    image: "/companies/security.jpg",
  },
  {
    name: "Bridge Pharmaceuticals Ltd.",
    link: "https://bridgepharmabd.com/",
    email: "info@bridgepharmabd.com",
    phone: ["+8801762627611"],
    projectAddress: "West Tengra, Sarulia, Demra, Dhaka, Bangladesh",
    corporateAddress:
      "Printers Building, 13th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka, Bangladesh",
    image: "/companies/bridge.jpg",
  },
];

export default function OurCompanySection() {
  return (
    <div className="bg-[#F7F5F0] text-primary">
      {/* Section 1: About Anondo Group */}
      <section className="border-b border-primary/10 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
            {/* Left Overview */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-10 bg-secondary" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                  About Anondo Group
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#17203A] sm:text-4xl lg:text-[42px]">
                Empowering Communities Through{" "}
                <span className="text-secondary">Diverse &amp; Sustainable</span>{" "}
                Businesses
              </h2>

              <p className="mt-6 text-base leading-8 text-[#2C3347] sm:text-lg">
                Anondo Group is a diversified business conglomerate operating
                across Real Estate Development, Senior Living, Agriculture &amp;
                Research, Security Services, and Pharmaceuticals.
              </p>

              <p className="mt-4 text-base leading-8 text-[#4B5563] sm:text-[17px]">
                With a strong commitment to integrity, innovation, and long-term
                value creation, we build impactful ventures that contribute to
                economic growth while enhancing quality of life across
                Bangladesh.
              </p>

              {/* Business Sectors Strip */}
              <div className="mt-9 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
                {businessSectors.map((sector) => {
                  const Icon = sector.icon;
                  return (
                    <div
                      key={sector.title}
                      className="border border-primary/10 bg-[#FAF9F6] p-4"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center bg-secondary/12 text-secondary">
                        <Icon className="text-lg" />
                      </span>
                      <p className="mt-3 text-sm font-semibold leading-snug text-[#17203A]">
                        {sector.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Group Identity & Core Strength Card */}
            <div className="border border-primary/12 border-t-[3px] border-t-secondary bg-[#FAF9F6] p-7 shadow-[0_18px_50px_rgba(23,32,58,0.06)] sm:p-10">
              <div className="flex items-center justify-center border border-primary/10 bg-white px-6 py-6">
                <div className="relative h-36 w-56 sm:h-40 sm:w-64">
                  <Image
                    src="/companies/anondo-group-logo-1.png"
                    alt="Anondo Group"
                    fill
                    className="object-contain"
                    sizes="260px"
                  />
                </div>
              </div>

              <div className="mt-7">
                <h3 className="text-xl font-semibold tracking-[-0.015em] text-[#17203A]">
                  Our Core Strength
                </h3>

                <ul className="mt-4 divide-y divide-primary/10 border-y border-primary/10">
                  {coreStrengths.map((strength) => (
                    <li
                      key={strength}
                      className="flex items-center gap-3.5 py-3.5 text-sm font-medium text-[#2C3347] sm:text-base"
                    >
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 shrink-0 bg-secondary"
                      />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm font-medium text-[#6B7280]">
                  Building trusted brands under one unified vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Companies under Anondo Group */}
      <section id="our-company" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-10 bg-secondary" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                Our Business Portfolio
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#17203A] sm:text-4xl lg:text-5xl">
              Our Companies
            </h2>
          </div>

          <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
            {companies.map((company, index) => (
              <article
                key={company.name}
                className="group border border-primary/12 border-l-[3px] border-l-secondary bg-white p-6 shadow-[0_14px_40px_rgba(23,32,58,0.05)] transition duration-300 hover:border-primary/25 hover:shadow-[0_20px_50px_rgba(23,32,58,0.09)] sm:p-8 lg:p-10"
              >
                <div className="grid gap-7 lg:grid-cols-[260px_1fr] lg:items-center lg:gap-10">
                  {/* Company Logo Box */}
                  <a
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${company.name} website`}
                    className="flex h-44 w-full items-center justify-center border border-primary/10 bg-[#FAF9F6] p-5 transition duration-300 group-hover:border-secondary/40 sm:h-48"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={company.image}
                        alt={company.name}
                        fill
                        sizes="260px"
                        className={`transition duration-300 group-hover:scale-105 ${
                          company.imageFit === "cover"
                            ? "object-cover"
                            : "object-contain"
                        }`}
                      />
                    </div>
                  </a>

                  {/* Company Details */}
                  <div className="min-w-0">
                    <div className="flex flex-col gap-4 border-b border-primary/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-baseline gap-3.5">
                        <span className="text-sm font-bold tabular-nums tracking-[0.18em] text-secondary">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#17203A] sm:text-[26px]">
                          {company.name}
                        </h3>
                      </div>

                      <a
                        href={company.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 self-start bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-secondary sm:self-auto"
                      >
                        <span>View Website</span>
                        <FiArrowUpRight className="text-base" />
                      </a>
                    </div>

                    {/* Contact & Address Grid */}
                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      {/* Email */}
                      <div className="flex items-start gap-3.5">
                        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center bg-secondary/12 text-secondary">
                          <FiMail className="text-sm" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6B7280]">
                            Email
                          </p>
                          <a
                            href={`mailto:${company.email}`}
                            className="mt-1 block break-all text-base font-medium text-[#17203A] transition hover:text-secondary"
                          >
                            {company.email}
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-3.5">
                        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center bg-secondary/12 text-secondary">
                          <FiPhoneCall className="text-sm" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6B7280]">
                            Phone
                          </p>
                          <div className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-base font-medium text-[#17203A]">
                            {company.phone.map((num, idx) => (
                              <a
                                key={num}
                                href={`tel:${num}`}
                                className="transition hover:text-secondary"
                              >
                                {num}
                                {idx !== company.phone.length - 1 ? "," : ""}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Project Address */}
                      <div className="flex items-start gap-3.5">
                        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center bg-secondary/12 text-secondary">
                          <FiMapPin className="text-sm" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6B7280]">
                            Project Address
                          </p>
                          <p className="mt-1 text-base leading-7 text-[#2C3347]">
                            {company.projectAddress}
                          </p>
                        </div>
                      </div>

                      {/* Corporate Office */}
                      <div className="flex items-start gap-3.5">
                        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center bg-secondary/12 text-secondary">
                          <HiOutlineOfficeBuilding className="text-base" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6B7280]">
                            Corporate Office
                          </p>
                          <p className="mt-1 text-base leading-7 text-[#2C3347]">
                            {company.corporateAddress}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
