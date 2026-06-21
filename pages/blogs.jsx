import AdvancedSEO from "@/components/AdvancedSEO";
import BlogsPageSection from "@/components/BlogsPageSection";
import HeroSection from "@/components/HeroSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Blogs and Updates | Anondo Bhubon Real Estate Insights",
  description:
    "Read Anondo Bhubon blogs and updates about Purbachal investment, land verification, sustainable township planning, modern living, and eco-friendly residential development in Bangladesh.",
  keywords: [
    "Anondo Bhubon blogs",
    "Purbachal investment",
    "Bangladesh real estate updates",
    "land verification Bangladesh",
    "eco-friendly township blog",
    "modern living Bangladesh",
  ],
  path: "/blogs",
  image: finalRenderAssets.riverside,
  imageAlt: "Anondo Bhubon blog and real estate updates",
  pageType: "CollectionPage",
  breadcrumb: [{ name: "Blogs", path: "/blogs" }],
  jsonLd: {
    "@type": "Blog",
    "@id": "https://www.anondobhubon.com/blogs#blog",
    name: "Anondo Bhubon Blogs and Updates",
    url: "https://www.anondobhubon.com/blogs",
  },
};

export default function BlogsPage() {
  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "Blogs & Updates",
          backgroundImage: finalRenderAssets.riverside,
        }}
      />
      <BlogsPageSection />
    </div>
  );
}
