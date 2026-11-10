"use client";

import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import TermsAndConditions from "@/components/TermsAndConditions";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Terms and Conditions | Anondo Bhubon",
  description:
    "Read the Anondo Bhubon terms and conditions for plot prices, payment method, inclusive and exclusive costs, land usage ratio, and allotment terms.",
  keywords: [
    "Anondo Bhubon terms and conditions",
    "property booking terms Bangladesh",
    "housing project terms",
    "real estate ownership terms Bangladesh",
  ],
  path: "/terms-and-conditions",
  image: finalRenderAssets.amenities,
  imageAlt: "Anondo Bhubon terms and conditions",
  pageType: "WebPage",
  breadcrumb: [{ name: "Terms and Conditions", path: "/terms-and-conditions" }],
};

export default function TermsAndConditionPage() {
  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "Terms and Conditions",
          backgroundImage: finalRenderAssets.amenities,
        }}
      />
      <TermsAndConditions />
    </div>
  );
}
