import AdvancedSEO from "@/components/AdvancedSEO";
import LifestyleDocumentSection from "@/components/LifestyleDocumentSection";
import documents from "@/data/lifestyleDocuments.json";
import { lifestyleOverview } from "@/data/lifestylePreviewData";

const documentContent = documents.philosophy;

const seo = {
  title: `${lifestyleOverview.title} | Anondo Bhubon Lifestyle`,
  description: documentContent.sections[0].blocks[0].text,
  keywords: [
    "Anondo Bhubon lifestyle",
    "Anondo Bhubon lifestyle philosophy",
    "healthy sustainable township Bangladesh",
    "green living near Purbachal",
  ],
  path: "/lifestyle",
  image: documentContent.heroImage,
  imageAlt: "Anondo Bhubon eco-conscious township lifestyle",
  breadcrumb: [{ name: lifestyleOverview.title, path: "/lifestyle" }],
};

export default function LifestylePhilosophyPage() {
  return (
    <div className="relative w-full">
      <AdvancedSEO {...seo} />
      <LifestyleDocumentSection
        slug={lifestyleOverview.slug}
        documentContent={documentContent}
      />
    </div>
  );
}
