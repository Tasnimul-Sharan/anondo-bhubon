import AdvancedSEO from "@/components/AdvancedSEO";
import GalleryPageSection from "@/components/GalleryPageSection";
import HeroSection from "@/components/HeroSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title:
    "Gallery | Master Plan, Forest Walkways, Villas & Waterfront Visuals | Anondo Bhubon",
  description:
    "Explore the Anondo Bhubon visual gallery showcasing our complete, green, and sustainable integrated township near Purbachal—featuring 50-bigha Forest Walkways, the 125-bigha Old Brahmaputra–Shitalakshya river corridor and lakes, villa communities, condominiums, Anondo Digital Valley, and the 55-bigha Mega Commercial Centre.",
  keywords: [
    "Anondo Bhubon gallery",
    "Anondo Bhubon masterplan visuals",
    "Forest Walkways township images",
    "Old Brahmaputra waterfront visuals",
    "villas and condominiums Purbachal photos",
    "green sustainable township Bangladesh",
  ],
  path: "/gallery",
  image: finalRenderAssets.riverside,
  imageAlt:
    "Anondo Bhubon integrated township gallery featuring waterfront, Forest Walkways, and residential communities",
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
