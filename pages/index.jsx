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
  title:
    "Anondo Bhubon | Complete, Green & Sustainable Integrated Township Near Purbachal",
  description:
    "Anondo Bhubon by Anondo Real Estate Group is a complete, green, and sustainable integrated township near Purbachal featuring five residential categories, villas, condominiums, 50-bigha Forest Walkways, a 125-bigha river and lake corridor, Anondo Digital Valley, a 55-bigha Mega Commercial Centre, educational institutions, hospitals, and sports complexes.",
  keywords: [
    "Anondo Bhubon",
    "Anondo Real Estate Group",
    "integrated township near Purbachal",
    "green and sustainable township Bangladesh",
    "Anondo Digital Valley",
    "Mega Commercial Centre Purbachal",
    "Forest Walkways township Dhaka",
    "Old Brahmaputra Shitalakshya river corridor",
    "luxury villas and condominiums Purbachal",
    "Premium Plus Executive residential plots Bangladesh",
    "complete township for life enterprise and future generations",
  ],
  path: "/",
  image: finalRenderAssets.hero,
  imageAlt:
    "Anondo Bhubon — A Complete, Green and Sustainable Integrated Township Near Purbachal with Forest Walkways and Waterfront",
};

const homepageSchema = [
  {
    "@type": "Place",
    "@id": "https://www.anondobhubon.com/#place",
    name: "Anondo Bhubon",
    alternateName:
      "Anondo Bhubon — A Complete, Green and Sustainable Integrated Township for Generations",
    slogan: "Where Nature, Opportunity and Modern Living Come Together.",
    url: "https://www.anondobhubon.com/",
    image: `https://www.anondobhubon.com${finalRenderAssets.hero}`,
    description:
      "A comprehensive, green, and economically vibrant integrated township near Purbachal developed by Anondo Real Estate Group, bringing together diverse residential communities, commercial centres, Anondo Digital Valley, technology-based industries, educational institutions, healthcare facilities, sports complexes, and ecological infrastructure.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Near Purbachal, Shitalakshya & Old Brahmaputra Corridor",
      addressRegion: "Dhaka",
      addressCountry: "BD",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "50-bigha Forest Walkways and landscaped green corridors",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "125-bigha Old Brahmaputra–Shitalakshya river corridor and two large lakes",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Five residential categories (Premium Plus, Premium, Executive, General, Economy), villas, and condominium district",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "230-bigha Anondo Digital Valley and 210-bigha technology-based industrial zone",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "55-bigha Iconic Mega Commercial Centre and 296-bigha general commercial district",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Block-level elementary schools, high schools, colleges, international school-and-college campus, and university site",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Two hospitals and 70-bigha international-standard sports complexes",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "255.56-bigha principal avenues (120-ft, 80-ft, and 60-ft road hierarchy), two bus terminals (12 bighas), and helipad provisions",
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
        name: "What is the vision behind Anondo Bhubon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Envisioned by Anondo Real Estate Group, Anondo Bhubon is designed not merely as a housing project, but as a complete, green, and sustainable integrated township near Purbachal where residential life, enterprise, technology, education, healthcare, sports, and nature coexist in harmony.",
        },
      },
      {
        "@type": "Question",
        name: "What residential communities and housing categories are planned at Anondo Bhubon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The residential master plan includes five distinct categories—Premium Plus, Premium, Executive, General, and Economy—across five principal residential sectors, alongside dedicated small and large villa communities and a modern high-rise condominium district.",
        },
      },
      {
        "@type": "Question",
        name: "How is nature and environmental sustainability integrated into Anondo Bhubon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Environmental sustainability is the foremost priority of Anondo Bhubon. The master plan allocates approximately 125 bighas for the proposed revival of the historic Old Brahmaputra River reconnecting to the Shitalakshya River, together with two large lakes, and approximately 50 bighas for a network of Forest Walkways connecting communities, business districts, and parks.",
        },
      },
      {
        "@type": "Question",
        name: "What commercial, digital, and industrial facilities are included in the township?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The master plan allocates approximately 791 bighas to economic activities, including a 296-bigha general commercial district, a 230-bigha Anondo Digital Valley for freelancers, startups, and IT enterprises, a landmark 55-bigha Mega Commercial Centre, and a 210-bigha technology-focused industrial zone.",
        },
      },
      {
        "@type": "Question",
        name: "What educational, healthcare, sports, and transport facilities are planned?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Anondo Bhubon incorporates block-level elementary schools, sector-level high schools and colleges, an international school-and-college campus, a university site, two hospitals, and 70 bighas for two major sports complexes. Connectivity is supported by three principal avenues (255.56 bighas) with 120-foot, 80-foot, and 60-foot corridors, plus two bus terminals across 12 bighas.",
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
        {/* <LifestyleSection /> */}
        <ContactSection />
      </main>
    </>
  );
}