import AdvancedSEO from "@/components/AdvancedSEO";
import AboutSection from "@/components/Anondobhubon/AboutSection";
import AmenitiesSection from "@/components/Anondobhubon/AmenitiesSection";
import BenefitsSection from "@/components/Anondobhubon/BenefitsSection";
import ContactSection from "@/components/Anondobhubon/ContactSection";
import EconomicZonesSection from "@/components/Anondobhubon/EconomicZonesSection";
import FinalRendersSection from "@/components/Anondobhubon/FinalRendersSection";
import HeroSection from "@/components/Anondobhubon/HeroSection";
import InfrastructureSection from "@/components/Anondobhubon/InfrastructureSection";
import LifestyleSection from "@/components/Anondobhubon/LifestyleSection";
import LocationAdvantageSection from "@/components/Anondobhubon/LocationAdvantageSection";
import MasterplanSection from "@/components/Anondobhubon/MasterplanSection";
import ResidencesSection from "@/components/Anondobhubon/ResidencesSection";
import TimelineSection from "@/components/Anondobhubon/TimelineSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Anondo Bhubon | Eco-Friendly Township Near Purbachal, Dhaka",
  description:
    "Anondo Bhubon is a premium eco-conscious township near Purbachal New Town, planned with villas, apartments, canals, lake, forest walkways, wellness spaces, civic facilities, and smart urban infrastructure.",
  keywords: [
    "Anondo Bhubon",
    "eco friendly township Bangladesh",
    "Purbachal housing project",
    "Anondo Cityscapers",
    "sustainable township Dhaka",
    "residential plots near Purbachal",
    "luxury villas Bangladesh",
    "smart city Bangladesh",
    "green housing project Bangladesh",
  ],
  path: "/",
  image: finalRenderAssets.hero,
  imageAlt:
    "Anondo Bhubon eco-friendly township with forest walkway and green landscape",
};

const homepageSchema = [
  {
    "@type": "Place",
    "@id": "https://www.anondobhubon.com/#place",
    name: "Anondo Bhubon",
    url: "https://www.anondobhubon.com/",
    image: `https://www.anondobhubon.com${finalRenderAssets.hero}`,
    description:
      "A planned eco-conscious township near Purbachal New Town and the River Sitalakhya in Bangladesh.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Near Purbachal New Town",
      addressCountry: "BD",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Forest walkway",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Lake and canal system",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Residential villas and apartments",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "IT and cyber business hub",
        value: true,
      },
    ],
  },
  {
    "@type": "FAQPage",
    "@id": "https://www.anondobhubon.com/#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Anondo Bhubon located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Anondo Bhubon is positioned near Purbachal New Town, east of the River Sitalakhya, with access to Dhaka Bypass Expressway and Purbachal Expressway.",
        },
      },
      {
        "@type": "Question",
        name: "What types of residences are planned at Anondo Bhubon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The township plan includes luxury villas, mid-rise apartments, condominiums, and supporting community facilities.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Anondo Bhubon eco-conscious?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The masterplan includes green open spaces, lake and canal systems, forest walkways, water-sensitive planning, wellness areas, and renewable-ready infrastructure.",
        },
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <AdvancedSEO {...seo} jsonLd={homepageSchema} />

      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <LocationAdvantageSection />
        <MasterplanSection />
        <FinalRendersSection />
        <ResidencesSection />
        <InfrastructureSection />
        <AmenitiesSection />
        <EconomicZonesSection />
        <BenefitsSection />
        <TimelineSection />
        <LifestyleSection />
        <ContactSection />
      </main>
    </>
  );
}
