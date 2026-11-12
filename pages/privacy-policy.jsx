"use client";

import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import PrivacyPolicyPageSection from "@/components/PrivacyPolicyPageSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Privacy Policy | Data Protection & Transparency | Anondo Bhubon",
  description:
    "Read the Anondo Bhubon privacy policy by Anondo Group to understand how client inquiries, booking applications, contact details, and website interactions are securely handled with trust, integrity, and accountability.",
  keywords: [
    "Anondo Bhubon privacy policy",
    "Anondo Group data protection",
    "real estate privacy policy Bangladesh",
    "property inquiry confidentiality",
  ],
  path: "/privacy-policy",
  image: finalRenderAssets.masterplanSide,
  imageAlt: "Anondo Bhubon privacy policy and data protection standards",
  pageType: "WebPage",
  breadcrumb: [{ name: "Privacy Policy", path: "/privacy-policy" }],
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "Privacy Policy",
          backgroundImage: finalRenderAssets.masterplanSide,
        }}
      />
      <PrivacyPolicyPageSection />
    </div>
  );
}
