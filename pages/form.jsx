import AdvancedSEO from "@/components/AdvancedSEO";
import AttachmentTable from "@/components/AttachmentTable";
import HeroSection from "@/components/HeroSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Application Form | Anondo Bhubon Booking and Ownership Documents",
  description:
    "Access Anondo Bhubon application forms and required documents for residence booking, ownership inquiry, and advisor-assisted submission for the eco-conscious township near Purbachal.",
  keywords: [
    "Anondo Bhubon application form",
    "Anondo Bhubon booking form",
    "residential application Bangladesh",
    "Purbachal township booking",
    "real estate application form",
  ],
  path: "/form",
  image: finalRenderAssets.masterplan,
  imageAlt: "Anondo Bhubon application and booking form",
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
