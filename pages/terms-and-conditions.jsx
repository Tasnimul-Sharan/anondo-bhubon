"use client";

import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import TermsAndConditions from "@/components/TermsAndConditions";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title:
    "Terms and Conditions | Plot Allotment & Ownership Guidelines | Anondo Bhubon",
  description:
    "Read the official Anondo Bhubon terms and conditions by Anondo Group covering residential plot and villa allotment across our five residential categories, payment schedules, inclusive and exclusive charges, and integrated township governance near Purbachal.",
  keywords: [
    "Anondo Bhubon terms and conditions",
    "Anondo Group allotment terms",
    "property booking terms Purbachal",
    "integrated township ownership rules Bangladesh",
    "residential plot terms Dhaka",
  ],
  path: "/terms-and-conditions",
  image: finalRenderAssets.amenities,
  imageAlt:
    "Anondo Bhubon terms and conditions for residential allotment and ownership",
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
