"use client";

import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import OurCompanySection from "@/components/OurCompanySection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Our Company | Anondo Group & Business Portfolio | Anondo Bhubon",
  description:
    "Learn about Anondo Group and the Anondo Group portfolio—guided by trust, integrity, sincerity, dedication, and accountability across integrated township development at Anondo Bhubon near Purbachal, senior living, agriculture & research, security services, and pharmaceuticals.",
  keywords: [
    "Anondo Group",
    "Anondo Group",
    "Anondo Group companies",
    "Anondo Bhubon",
    "Anondo Housing Society",
    "Anondo Rosemontestate",
    "Anondo Baari",
    "Pranto ARDI",
    "Anondo Universal Services Ltd.",
    "Bridge Pharmaceuticals Ltd.",
    "integrated township developer Bangladesh",
  ],
  path: "/our-company",
  image: finalRenderAssets.lake,
  imageAlt: "Anondo Group and Anondo Group diversified business portfolio",
  pageType: "AboutPage",
  breadcrumb: [{ name: "Our Company", path: "/our-company" }],
};

export default function OurCompanyPage() {
  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "Our Company",
          backgroundImage: finalRenderAssets.lake,
        }}
      />
      <OurCompanySection />
    </div>
  );
}
