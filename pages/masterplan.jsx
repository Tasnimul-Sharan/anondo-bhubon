import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import MasterplanPageSection from "@/components/MasterplanPageSection";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title:
    "Masterplan | Anondo Bhubon Integrated Township Master Plan Near Purbachal",
  description:
    "Explore the Anondo Bhubon master plan near Purbachal: 5 residential categories (Premium Plus, Premium, Executive, General, Economy), villas, condominiums, an Old Brahmaputra–Shitalakshya river corridor and two lakes, Forest Walkways, a commercial/digital/industrial zone with Anondo Digital Valley and a Mega Commercial Centre, schools, hospitals, sports complexes, and wide principal avenues.",
  keywords: [
    "Anondo Bhubon masterplan",
    "integrated township master plan Purbachal",
    "Premium Plus Executive residential sectors",
    "Forest Walkways masterplan",
    "Old Brahmaputra river corridor",
    "Anondo Digital Valley",
    "Mega Commercial Centre",
    "sports complex Purbachal",
  ],
  path: "/masterplan",
  image: finalRenderAssets.masterplan,
  imageAlt:
    "Anondo Bhubon integrated township master plan near Purbachal showing residential sectors, river corridor, lakes, and commercial zones",
  pageType: "ImageGallery",
  breadcrumb: [{ name: "Masterplan", path: "/masterplan" }],
};

export default function MasterplanPage() {
  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "Masterplan",
          backgroundImage: finalRenderAssets.masterplan,
        }}
      />
      <MasterplanPageSection />
    </div>
  );
}
