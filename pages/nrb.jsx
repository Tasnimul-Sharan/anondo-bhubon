"use client";

import AdvancedSEO from "@/components/AdvancedSEO";
import BuyingProcessSection from "@/components/NRB/BuyingProcessSection";
import DocumentsSection from "@/components/NRB/DocumentsSection";
import FAQSection from "@/components/NRB/FAQSection";
import HeroSection from "@/components/HeroSection";
import LeadCaptureCard from "@/components/NRB/LeadCaptureCard";
import NRBHeroSection from "@/components/NRB/NRBHeroSection";
import NRBSupportSection from "@/components/NRB/NRBSupportSection";
import NRBTrustSection from "@/components/NRB/NRBTrustSection";
import VideoSection from "@/components/NRB/VideoSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "NRB Property Support | Anondo Bhubon for Non-Resident Bangladeshis",
  description:
    "Anondo Bhubon supports NRB buyers and investors with property guidance, document assistance, booking support, remote communication, and secure township investment information.",
  keywords: [
    "NRB property Bangladesh",
    "Anondo Bhubon NRB",
    "Non Resident Bangladeshi real estate",
    "Purbachal property investment",
    "Bangladesh township investment",
    "NRB housing support",
  ],
  path: "/nrb",
  image: finalRenderAssets.billboard,
  imageAlt: "NRB property support for Anondo Bhubon",
  pageType: "WebPage",
  breadcrumb: [{ name: "NRB", path: "/nrb" }],
  jsonLd: {
    "@type": "Service",
    "@id": "https://www.anondobhubon.com/nrb#service",
    name: "NRB Property Support",
    provider: {
      "@id": "https://www.anondobhubon.com/#organization",
    },
    areaServed: "Bangladesh",
    serviceType: "Real estate guidance for Non-Resident Bangladeshis",
  },
};

export default function NRBPage() {
  return (
    <div className="w-full">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "NRB - Non-Resident Bangladeshi",
          backgroundImage: finalRenderAssets.billboard,
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
