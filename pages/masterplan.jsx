import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import MasterplanPageSection from "@/components/MasterplanPageSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Masterplan | Anondo Bhubon Township Plan and Block Visuals",
  description:
    "Explore the Anondo Bhubon masterplan gallery with full map views, premium blocks, exclusive blocks, forest walk visuals, sector center plans, and township planning renders.",
  keywords: [
    "Anondo Bhubon masterplan",
    "Anondo Bhubon block plan",
    "township masterplan Bangladesh",
    "Purbachal masterplan project",
    "premium block masterplan",
    "exclusive block masterplan",
  ],
  path: "/masterplan",
  image: finalRenderAssets.masterplan,
  imageAlt: "Anondo Bhubon masterplan full top map",
  pageType: "ImageGallery",
  breadcrumb: [{ name: "Masterplan", path: "/masterplan" }],
};

export default function MasterplanPage() {
  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "Masterplan",
          backgroundImage: finalRenderAssets.masterplan,
        }}
      />
      <MasterplanPageSection />
    </div>
  );
}
