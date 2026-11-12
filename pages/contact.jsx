"use client";

import AdvancedSEO from "@/components/AdvancedSEO";
import ContactPageSection from "@/components/ContactPageSection";
import EventMap from "@/components/EventMap";
import HeroSection from "@/components/HeroSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title:
    "Contact Anondo Bhubon | Brochure, Master Plan & Site Visit Inquiry Near Purbachal",
  description:
    "Contact Anondo Bhubon by Anondo Group for master plan consultations, pricing across our five residential categories (Premium Plus, Premium, Executive, General, Economy), villas, condominiums, commercial spaces in Anondo Digital Valley, and site visits near Purbachal.",
  keywords: [
    "Contact Anondo Bhubon",
    "Anondo Group contact",
    "Anondo Bhubon brochure and pricing",
    "Purbachal integrated township site visit",
    "villas and residential plots inquiry Dhaka",
    "Anondo Digital Valley commercial inquiry",
  ],
  path: "/contact",
  image: finalRenderAssets.forestWalk,
  imageAlt:
    "Contact Anondo Bhubon for integrated township consultations and site visits near Purbachal",
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
