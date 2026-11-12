"use client";

import AdvancedSEO from "@/components/AdvancedSEO";
import CareerPageSection from "@/components/CareerPageSection";
import HeroSection from "@/components/HeroSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Career Opportunities | Join Anondo Group & Anondo Bhubon",
  description:
    "Build your career with Anondo Group on Anondo Bhubon—a complete, green, and sustainable integrated township near Purbachal. Explore openings across urban planning, engineering, real estate development, sales, digital innovation, and community management.",
  keywords: [
    "Anondo Bhubon careers",
    "Anondo Group jobs",
    "integrated township jobs Bangladesh",
    "real estate development careers Dhaka",
    "Purbachal township project jobs",
    "Anondo Digital Valley careers",
  ],
  path: "/career-opportunities",
  image: finalRenderAssets.amenities,
  imageAlt: "Career opportunities at Anondo Bhubon and Anondo Group",
  pageType: "CollectionPage",
  breadcrumb: [{ name: "Career Opportunities", path: "/career-opportunities" }],
  jsonLd: {
    "@type": "ItemList",
    "@id": "https://www.anondobhubon.com/career-opportunities#openings",
    name: "Current Anondo Bhubon career openings",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Sales Executive",
        url: "https://www.anondobhubon.com/career-opportunities#sales-executive",
      },
    ],
  },
};

export default function CareerOpportunitiesPage() {
  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "Career Opportunities",
          backgroundImage: finalRenderAssets.amenities,
        }}
      />
      <CareerPageSection />
    </div>
  );
}
