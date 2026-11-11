"use client";

import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import BuyingProcessSection from "@/components/NRB/BuyingProcessSection";
import DocumentsSection from "@/components/NRB/DocumentsSection";
import FAQSection from "@/components/NRB/FAQSection";
import LeadCaptureCard from "@/components/NRB/LeadCaptureCard";
import NRBHeroSection from "@/components/NRB/NRBHeroSection";
import NRBSupportSection from "@/components/NRB/NRBSupportSection";
import NRBTrustSection from "@/components/NRB/NRBTrustSection";
import VideoSection from "@/components/NRB/VideoSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title:
    "NRB Property & Investment Support | Green Integrated Township Near Purbachal | Anondo Bhubon",
  description:
    "Anondo Bhubon by Anondo Real Estate Group supports Non-Resident Bangladeshis (NRBs) looking to invest in a complete, green, and sustainable integrated township near Purbachal—offering 5 residential categories, villas, condominiums, transparent documentation, and dedicated remote booking assistance.",
  keywords: [
    "NRB property investment Bangladesh",
    "Anondo Bhubon NRB support",
    "Anondo Real Estate Group NRB",
    "Non Resident Bangladeshi real estate Purbachal",
    "green sustainable township investment Dhaka",
    "villas and residential plots for NRBs",
  ],
  path: "/nrb",
  image: finalRenderAssets.billboard,
  imageAlt:
    "NRB property investment and dedicated support at Anondo Bhubon Integrated Township",
  pageType: "WebPage",
  breadcrumb: [{ name: "NRB", path: "/nrb" }],
  jsonLd: {
    "@type": "Service",
    "@id": "https://www.anondobhubon.com/nrb",
    name: "NRB Property & Township Investment Support",
    provider: {
      "@id": "https://www.anondobhubon.com/#organization",
    },
    areaServed: "Bangladesh",
    serviceType:
      "Dedicated real estate guidance and booking support for Non-Resident Bangladeshis at Anondo Bhubon integrated township",
  },
};

export default function NRBPage() {
  return (
    <div className="w-full">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "NRB - Non-Resident Bangladeshi Support",
          backgroundImage: finalRenderAssets.premiumBlock,
        }}
      />
      <NRBHeroSection />
      <NRBTrustSection />
      <BuyingProcessSection />
      <DocumentsSection />
      <VideoSection />
      <NRBSupportSection />
      <FAQSection />
      <LeadCaptureCard />
    </div>
  );
}
