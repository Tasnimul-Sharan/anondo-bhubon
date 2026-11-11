import AdvancedSEO from "@/components/AdvancedSEO";
import LifestyleDocumentSection from "@/components/LifestyleDocumentSection";
import documents from "@/data/lifestyleDocuments.json";
import { lifestyleOverview } from "@/data/lifestylePreviewData";

const documentContent = documents.philosophy;

const seo = {
  title: `${lifestyleOverview.title} | Green, Sustainable & People-Centred Living | Anondo Bhubon`,
  description:
    "Discover the Anondo Bhubon lifestyle philosophy near Purbachal: a people-centred, green, and sustainable integrated township featuring 50-bigha Forest Walkways, a 125-bigha river and lake network, 70-bigha sports complexes, schools, hospitals, and Anondo Digital Valley so families can live, work, learn, and thrive together.",
  keywords: [
    "Anondo Bhubon lifestyle",
    "Anondo Bhubon lifestyle philosophy",
    "healthy sustainable township Bangladesh",
    "green living near Purbachal",
    "50-bigha Forest Walkways lifestyle",
    "integrated community living Dhaka",
  ],
  path: "/lifestyle",
  image: documentContent.heroImage,
  imageAlt:
    "Anondo Bhubon lifestyle philosophy — green, healthy, and community-centred living near Purbachal",
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
