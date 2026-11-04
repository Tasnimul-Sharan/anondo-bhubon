import AdvancedSEO from "@/components/AdvancedSEO";
import BrandStorySection from "@/components/BrandStorySection";
import HeroSection from "@/components/HeroSection";
import brandStory from "@/data/brandStoryData.json";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Brand Story | Anondo Bhubon",
  description: brandStory.sections[0].paragraphs[0],
  keywords: [
    "Anondo Bhubon brand story",
    "Anondo Bhubon founder",
    "Anondo Real Estate Group",
    "sustainable township near Purbachal",
  ],
  path: "/brand-story",
  image: finalRenderAssets.lake,
  imageAlt: "Anondo Bhubon planned township and community lake",
  pageType: "AboutPage",
  breadcrumb: [{ name: "Brand Story", path: "/brand-story" }],
};

export default function BrandStoryPage() {
  return (
    <div className="relative w-full">
      <AdvancedSEO {...seo} />
      <HeroSection hero={{ title: "Brand Story", backgroundImage: finalRenderAssets.lake }} />
      <BrandStorySection />
    </div>
  );
}
