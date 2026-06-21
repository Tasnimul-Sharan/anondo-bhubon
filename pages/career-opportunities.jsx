"use client";

import AdvancedSEO from "@/components/AdvancedSEO";
import CareerPageSection from "@/components/CareerPageSection";
import HeroSection from "@/components/HeroSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Career Opportunities | Work With Anondo Bhubon",
  description:
    "Explore career opportunities with Anondo Bhubon across real estate development, planning, sales, marketing, site operations, customer service, and township management.",
  keywords: [
    "Anondo Bhubon careers",
    "real estate jobs Bangladesh",
    "township development careers",
    "sales jobs real estate Bangladesh",
    "construction jobs Bangladesh",
    "Purbachal project jobs",
  ],
  path: "/career-opportunities",
  image: finalRenderAssets.amenities,
  imageAlt: "Career opportunities at Anondo Bhubon",
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
