import AdvancedSEO from "@/components/AdvancedSEO";
import BlogsPageSection from "@/components/BlogsPageSection";
import HeroSection from "@/components/HeroSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title:
    "Blogs & Insights | Sustainable Integrated Township Living Near Purbachal | Anondo Bhubon",
  description:
    "Read Anondo Bhubon articles and insights on green and sustainable township planning near Purbachal, 50-bigha Forest Walkways, Old Brahmaputra–Shitalakshya river restoration, Anondo Digital Valley, and long-term residential and commercial investment in Bangladesh.",
  keywords: [
    "Anondo Bhubon blogs",
    "Anondo Real Estate Group insights",
    "Purbachal integrated township investment",
    "green sustainable urban planning Bangladesh",
    "Anondo Digital Valley articles",
    "Forest Walkways and eco-conscious living Dhaka",
  ],
  path: "/blogs",
  image: finalRenderAssets.riverside,
  imageAlt:
    "Anondo Bhubon blogs and insights on green, sustainable township living near Purbachal",
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
