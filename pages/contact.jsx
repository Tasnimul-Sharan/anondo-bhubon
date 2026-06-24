"use client";

import AdvancedSEO from "@/components/AdvancedSEO";
import ContactPageSection from "@/components/ContactPageSection";
import EventMap from "@/components/EventMap";
import HeroSection from "@/components/HeroSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Contact Anondo Bhubon | Brochure, Pricing and Site Visit Inquiry",
  description:
    "Contact Anondo Bhubon for brochure access, pricing, site visit scheduling, residence availability, investment information, and advisor support for the eco-conscious township near Purbachal.",
  keywords: [
    "Contact Anondo Bhubon",
    "Anondo Bhubon pricing",
    "Anondo Bhubon brochure",
    "Purbachal township inquiry",
    "Bangladesh real estate contact",
    "site visit Anondo Bhubon",
  ],
  path: "/contact",
  image: finalRenderAssets.forestWalk,
  imageAlt: "Contact Anondo Bhubon for township information",
  pageType: "ContactPage",
  breadcrumb: [{ name: "Contact", path: "/contact" }],
  jsonLd: {
    "@type": "ContactPage",
    "@id": "https://www.anondobhubon.com/contact#contact",
    name: "Contact Anondo Bhubon",
    url: "https://www.anondobhubon.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative w-full bg-off_white">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "Contact",
          backgroundImage: finalRenderAssets.forestWalk,
        }}
      />
      <ContactPageSection />
      <EventMap />
    </div>
  );
}
