import AdvancedSEO from "@/components/AdvancedSEO";
import LifestyleDocumentSection from "@/components/LifestyleDocumentSection";
import documents from "@/data/whoWeAreDocuments.json";
import { withLifestyleVisuals } from "@/data/lifestyleVisuals";

const documentContent = withLifestyleVisuals(
  "core-values",
  documents["core-values"],
);

const seo = {
  title:
    "Our Core Values | Trust, Integrity & Responsible Development | Anondo Bhubon",
  description:
    "At Anondo Group, trust, integrity, sincerity, dedication, and accountability are our capital. Learn how these core values guide the planning, environmental stewardship, and progressive implementation of the Anondo Bhubon integrated township near Purbachal.",
  keywords: [
    "Anondo Bhubon core values",
    "Anondo Group values",
    "trust integrity sincerity dedication accountability",
    "responsible real estate development Bangladesh",
    "sustainable township governance Purbachal",
    "people-centred township planning",
  ],
  path: "/core-values",
  image: documentContent.heroImage,
  imageAlt:
    "Anondo Bhubon core values — trust, integrity, sincerity, dedication, and accountability",
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
