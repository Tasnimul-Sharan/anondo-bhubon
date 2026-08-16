import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import NoticePageSection from "@/components/NoticePageSection";
import { noticeData } from "@/data/noticeData";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Notice | Anondo Bhubon Official Documents and Updates",
  description:
    "Read official Anondo Bhubon notices, project documents, certificates, environmental approval documents, and important stakeholder updates.",
  keywords: [
    "Anondo Bhubon notice",
    "Anondo Bhubon official documents",
    "Anondo Bhubon NEC certificate",
    "Anondo Bhubon EIA notice",
    "Purbachal township notice",
    "Anondo Bhubon updates",
  ],
  path: "/notice",
  image: noticeData[0]?.image || finalRenderAssets.masterplan,
  imageAlt: "Anondo Bhubon official notice documents",
  pageType: "CollectionPage",
  breadcrumb: [{ name: "Notice", path: "/notice" }],
  jsonLd: {
    "@type": "ItemList",
    "@id": "https://www.anondobhubon.com/notice#notices",
    name: "Anondo Bhubon Official Notices",
    itemListElement: noticeData.map((notice, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: notice.title,
      description: notice.description,
      url: `https://www.anondobhubon.com/notice/${notice.slug}`,
      image: `https://www.anondobhubon.com${notice.image}`,
    })),
  },
};

export default function NoticePage() {
  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "Notice",
          backgroundImage: finalRenderAssets.masterplan,
        }}
      />
      <NoticePageSection />
    </div>
  );
}