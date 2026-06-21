"use client";

import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import PrivacyPolicyPageSection from "@/components/PrivacyPolicyPageSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Privacy Policy | Anondo Bhubon",
  description:
    "Read the Anondo Bhubon privacy policy to understand how inquiry details, contact information, application data, and website usage information may be collected, used, and protected.",
  keywords: [
    "Anondo Bhubon privacy policy",
    "real estate privacy policy Bangladesh",
    "property inquiry data policy",
    "Anondo Bhubon data protection",
  ],
  path: "/privacy-policy",
  image: finalRenderAssets.masterplanSide,
  imageAlt: "Anondo Bhubon privacy policy",
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
