import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import CertificationPageSection from "@/components/CertificationPageSection";
import { noticeData } from "@/data/noticeData";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Certification | Anondo Bhubon Certificates and Official Documents",
  description:
    "Explore Anondo Bhubon certificates and official project documents, including the Non-Encumbrance Certificate and environmental approval documentation.",
  keywords: [
    "Anondo Bhubon certification",
    "Anondo Bhubon official documents",
    "Anondo Bhubon NEC certificate",
    "Anondo Bhubon EIA documentation",
    "Purbachal township certificates",
    "Anondo Bhubon project documents",
  ],
  path: "/certification",
  image: noticeData[0]?.image || finalRenderAssets.masterplan,
  imageAlt: "Anondo Bhubon certificates and official documents",
  pageType: "CollectionPage",
  breadcrumb: [{ name: "Certification", path: "/certification" }],
  jsonLd: {
    "@type": "ItemList",
    "@id": "https://www.anondobhubon.com/certification#certifications",
    name: "Anondo Bhubon Certification",
    itemListElement: noticeData.map((notice, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: notice.title,
      description: notice.description,
      url: `https://www.anondobhubon.com/certification/${notice.slug}`,
      image: `https://www.anondobhubon.com${notice.image}`,
    })),
  },
};

export default function CertificationPage() {
  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "Certification",
          backgroundImage: finalRenderAssets.masterplan,
        }}
      />
      <CertificationPageSection />
    </div>
  );
}
