import AdvancedSEO from "@/components/AdvancedSEO";
import LifestyleDocumentSection from "@/components/LifestyleDocumentSection";
import documents from "@/data/whoWeAreDocuments.json";

const documentContent = documents["vision-mission"];

const seo = {
  title:
    "Our Vision & Mission | Building a Sustainable Integrated Township | Anondo Bhubon",
  description:
    "Explore the vision and mission of Anondo Bhubon by Anondo Group: establishing a benchmark for comprehensive, green, and economically vibrant township development near Purbachal where residential life, Anondo Digital Valley, commerce, education, healthcare, sports, and nature coexist in harmony.",
  keywords: [
    "Anondo Bhubon vision and mission",
    "Anondo Group vision",
    "sustainable integrated township Bangladesh",
    "green township near Purbachal",
    "Anondo Digital Valley vision",
    "Old Brahmaputra Shitalakshya ecological restoration",
    "future-ready urban planning Bangladesh",
  ],
  path: "/vision-mission",
  image: documentContent.heroImage,
  imageAlt:
    "Anondo Bhubon vision and mission for a complete, green, and sustainable integrated township",
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
