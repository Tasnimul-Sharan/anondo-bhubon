import AdvancedSEO from "@/components/AdvancedSEO";
import BrandStorySection from "@/components/BrandStorySection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title:
    "Brand Story | The Dream That Inspired Anondo Bhubon Integrated Township",
  description:
    "Discover the story behind Anondo Bhubon—born from a dream to build a better way of living in Bangladesh. Inspired by global urban planning in Singapore, Japan, the USA, and Australia, Anondo Real Estate Group is creating a complete, green, and sustainable integrated township near Purbachal for generations.",
  keywords: [
    "Anondo Bhubon brand story",
    "The Dream That Inspired Anondo Bhubon",
    "Anondo Real Estate Group",
    "complete green sustainable township Bangladesh",
    "integrated township near Purbachal",
    "people-centred urban planning Bangladesh",
    "Forest Walkways and Old Brahmaputra revival",
    "Anondo Digital Valley",
  ],
  path: "/brand-story",
  image: finalRenderAssets.lake,
  imageAlt:
    "Anondo Bhubon — A Dream to Build a Better Way of Living in a Green Integrated Township",
  pageType: "AboutPage",
  breadcrumb: [{ name: "Brand Story", path: "/brand-story" }],
};

export default function BrandStoryPage() {
  return (
    <div className="relative w-full">
      <AdvancedSEO {...seo} />
      <BrandStorySection />
    </div>
  );
}
