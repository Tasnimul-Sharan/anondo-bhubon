import AdvancedSEO from "@/components/AdvancedSEO";
import LifestyleDocumentSection from "@/components/LifestyleDocumentSection";
import documents from "@/data/whoWeAreDocuments.json";

const documentContent = documents["core-values"];

const seo = {
  title: "Our Core Values | Anondo Bhubon",
  description: documentContent.sections[0].blocks[0].text,
  keywords: [
    "Anondo Bhubon core values",
    "Anondo Real Estate Group values",
    "trust and integrity real estate Bangladesh",
    "sustainable township principles",
  ],
  path: "/core-values",
  image: documentContent.heroImage,
  imageAlt: "Anondo Bhubon core values and guiding principles",
  pageType: "AboutPage",
  breadcrumb: [{ name: "Our Core Values", path: "/core-values" }],
};

export default function CoreValuesPage() {
  return (
    <div className="relative w-full">
      <AdvancedSEO {...seo} />
      <LifestyleDocumentSection
        slug="core-values"
        documentContent={documentContent}
      />
    </div>
  );
}
