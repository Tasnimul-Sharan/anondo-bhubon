import AdvancedSEO from "@/components/AdvancedSEO";
import GalleryPageSection from "@/components/GalleryPageSection";
import HeroSection from "@/components/HeroSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Gallery | Anondo Bhubon Masterplan, Lifestyle and Township Visuals",
  description:
    "Explore the Anondo Bhubon gallery featuring masterplan visuals, green infrastructure, residential lifestyle, park amenities, water systems, and township design references.",
  keywords: [
    "Anondo Bhubon gallery",
    "Anondo Bhubon images",
    "township masterplan gallery",
    "Purbachal project photos",
    "eco-friendly township visuals",
    "green infrastructure images",
  ],
  path: "/gallery",
  image: finalRenderAssets.riverside,
  imageAlt: "Anondo Bhubon township gallery",
  pageType: "ImageGallery",
  breadcrumb: [{ name: "Gallery", path: "/gallery" }],
};

export default function GalleryPage() {
  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "Gallery",
          backgroundImage: finalRenderAssets.riverside,
        }}
      />
      <GalleryPageSection />
    </div>
  );
}
