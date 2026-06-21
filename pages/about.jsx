import AboutUsSection from "@/components/AboutUsSection";
import AdvancedSEO from "@/components/AdvancedSEO";
import CoreValuesSection from "@/components/CoreValuesSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import HowToBecomeOwner from "@/components/HowToBecomeOwner";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "About Anondo Bhubon | Eco-Friendly Township Near Purbachal",
  description:
    "Discover Anondo Bhubon, an eco-friendly planned township near Purbachal and the River Sitalakhya with green-blue infrastructure, smart amenities, wellness spaces, and secure community living.",
  keywords: [
    "About Anondo Bhubon",
    "Anondo Bhubon prospectus",
    "eco-conscious township Bangladesh",
    "eco-friendly urban living",
    "sustainable urban planning",
    "Purbachal township",
    "River Sitalakhya township",
    "forest walkway Bangladesh",
    "green residential community Bangladesh",
    "Anondo Bhubon vision",
  ],
  path: "/about",
  image: finalRenderAssets.lake,
  imageAlt: "About Anondo Bhubon sustainable township vision",
  pageType: "AboutPage",
  breadcrumb: [{ name: "About", path: "/about" }],
};

export default function AboutPage() {
  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "About Anondo Bhubon",
          backgroundImage: finalRenderAssets.lake,
        }}
      />
      <AboutUsSection />
      <CoreValuesSection />
      <StatsSection />
      <HowToBecomeOwner />
      <WhyChooseUs />
      <FAQSection />
    </div>
  );
}
