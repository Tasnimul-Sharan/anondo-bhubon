import AdvancedSEO from "@/components/AdvancedSEO";
import LifestyleDocumentSection from "@/components/LifestyleDocumentSection";
import documents from "@/data/whoWeAreDocuments.json";

const documentContent = documents["vision-mission"];

const seo = {
  title: "Our Vision & Mission | Anondo Bhubon",
  description: documentContent.sections[0].blocks[1].text,
  keywords: [
    "Anondo Bhubon vision",
    "Anondo Bhubon mission",
    "sustainable township development Bangladesh",
    "Anondo Real Estate Group",
  ],
  path: "/vision-mission",
  image: documentContent.heroImage,
  imageAlt: "Anondo Bhubon vision and mission for sustainable township living",
  pageType: "AboutPage",
  breadcrumb: [{ name: "Our Vision & Mission", path: "/vision-mission" }],
};

export default function VisionMissionPage() {
  return (
    <div className="relative w-full">
      <AdvancedSEO {...seo} />
      <LifestyleDocumentSection
        slug="vision-mission"
        documentContent={documentContent}
      />
    </div>
  );
}
