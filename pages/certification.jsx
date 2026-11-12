import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import CertificationPageSection from "@/components/CertificationPageSection";
import { noticeData } from "@/data/noticeData";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title:
    "Certifications & Official Documents | Regulatory & Environmental Approvals | Anondo Bhubon",
  description:
    "Review Anondo Bhubon's official certificates, Non-Encumbrance Certificate (NEC), and environmental assessment documentation—reflecting Anondo Group's commitment to trust, integrity, regulatory compliance, and responsible township development near Purbachal.",
  keywords: [
    "Anondo Bhubon certification",
    "Anondo Group official documents",
    "Anondo Bhubon NEC certificate",
    "Anondo Bhubon EIA environmental documentation",
    "Purbachal integrated township approvals",
    "verified real estate project Bangladesh",
  ],
  path: "/certification",
  image: noticeData[0]?.image || finalRenderAssets.masterplan,
  imageAlt:
    "Anondo Bhubon official certifications, regulatory approvals, and environmental documents",
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
