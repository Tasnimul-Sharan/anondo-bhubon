import AdvancedSEO from "@/components/AdvancedSEO";
import AttachmentTable from "@/components/AttachmentTable";
import HeroSection from "@/components/HeroSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title:
    "Application Form | Residential & Commercial Booking Documents | Anondo Bhubon",
  description:
    "Download official Anondo Bhubon application forms and booking documents for residential plots across our five categories (Premium Plus, Premium, Executive, General, Economy), villas, condominiums, and commercial spaces in our green integrated township near Purbachal.",
  keywords: [
    "Anondo Bhubon application form",
    "Anondo Bhubon booking form",
    "Anondo Group application",
    "Purbachal integrated township booking",
    "residential plot and villa application Bangladesh",
  ],
  path: "/form",
  image: finalRenderAssets.masterplan,
  imageAlt: "Anondo Bhubon official application and booking forms",
  pageType: "WebPage",
  breadcrumb: [{ name: "Application Form", path: "/form" }],
};

export default function FormPage() {
  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "Application Form",
          backgroundImage: finalRenderAssets.masterplan,
        }}
      />
      <AttachmentTable />
    </div>
  );
}
