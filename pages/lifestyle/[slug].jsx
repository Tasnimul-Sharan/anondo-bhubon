import AdvancedSEO from "@/components/AdvancedSEO";
import LifestyleDocumentSection from "@/components/LifestyleDocumentSection";
import { lifestylePreviews } from "@/data/lifestylePreviewData";

const lifestyleSeoBySlug = {
  "a-day-in-the-life": {
    description:
      "Experience a day in the life at Anondo Bhubon near Purbachal—from peaceful morning walks along 50 bighas of shaded Forest Walkways and block-level schools to working at Anondo Digital Valley, shopping at the 55-bigha Mega Commercial Centre, and evening recreation by the 125-bigha river and lake waterfront.",
    keywords: [
      "A Day in the Life Anondo Bhubon",
      "Forest Walkways morning walk Purbachal",
      "Anondo Digital Valley work-life balance",
      "integrated township daily life Bangladesh",
    ],
  },
  "our-commitment": {
    description:
      "Explore Anondo Bhubon's commitment to healthy people, healthy nature, and happy communities—preserving ecological heritage through a 125-bigha Old Brahmaputra–Shitalakshya river corridor, two lakes, 50-bigha Forest Walkways, and people-first urban planning by Anondo Real Estate Group.",
    keywords: [
      "Anondo Bhubon commitment",
      "healthy people healthy nature happy communities",
      "Anondo Real Estate Group sustainability",
      "green township near Purbachal",
    ],
  },
  "healthy-lifestyle-for-every-generation": {
    description:
      "Anondo Bhubon is planned to support every generation across five inclusive residential categories (Premium Plus, Premium, Executive, General, Economy), offering safe playgrounds and schools for children, career opportunities for young professionals, and dignified, peaceful surroundings for senior citizens.",
    keywords: [
      "multi-generational living Anondo Bhubon",
      "senior citizen friendly township Bangladesh",
      "child-friendly residential community Purbachal",
      "five residential categories Anondo Bhubon",
    ],
  },
  "green-township-at-every-level": {
    description:
      "At Anondo Bhubon, greenery is woven into every level of the township—combining 50 bighas of interconnected Forest Walkways, neighbourhood parks, landscaped avenues, and a 125-bigha river and lake system so residents always feel connected to nature.",
    keywords: [
      "green township Bangladesh",
      "50-bigha Forest Walkways Anondo Bhubon",
      "landscaped parks and avenues Purbachal",
      "sustainable urban microclimate Dhaka",
    ],
  },
  "living-and-working": {
    description:
      "Fulfil everyday life and career ambitions within the same community at Anondo Bhubon—supported by a 791-bigha economic zone including the 230-bigha Anondo Digital Valley, 296-bigha commercial district, 55-bigha Mega Commercial Centre, and 210-bigha eco-compatible technology industrial zone.",
    keywords: [
      "live and work township Bangladesh",
      "Anondo Digital Valley freelancers startups",
      "791-bigha economic zone Purbachal",
      "walk-to-work community Dhaka",
    ],
  },
  "living-in-harmony-with-nature": {
    description:
      "Discover how Anondo Bhubon harmonizes modern development with ecological stewardship through the proposed 125-bigha revival of the Old Brahmaputra River reconnecting to the Shitalakshya River, two large lakes, and 50 bighas of biodiversity-supporting Forest Walkways.",
    keywords: [
      "living in harmony with nature Anondo Bhubon",
      "Old Brahmaputra Shitalakshya river restoration",
      "ecological township near Purbachal",
      "waterfront living Dhaka",
    ],
  },
  "physical-and-mental-well-being": {
    description:
      "From neighbourhood playgrounds in every residential block to 70 bighas allocated for two major sports complexes featuring envisioned international-standard cricket and football facilities, plus two hospitals and serene Forest Walkways, Anondo Bhubon celebrates active, healthy living.",
    keywords: [
      "70-bigha sports complex Anondo Bhubon",
      "cricket and football facilities Purbachal",
      "physical and mental wellness township",
      "hospitals and healthcare Anondo Bhubon",
    ],
  },
  "education-and-lifelong-learning": {
    description:
      "Anondo Bhubon provides the foundations for lifelong learning with block-level elementary schools, sector high schools and colleges with playgrounds, an international school-and-college campus, a university site, and technology training connected to Anondo Digital Valley.",
    keywords: [
      "education in Anondo Bhubon",
      "international school and university Purbachal",
      "IT and digital skills training Bangladesh",
      "block-level schools township Dhaka",
    ],
  },
  "vision-for-generations": {
    description:
      "Built on trust, integrity, sincerity, dedication, and accountability, Anondo Bhubon by Anondo Real Estate Group is a lasting legacy of green, sustainable living, economic opportunity, and community well-being near Purbachal for generations to come.",
    keywords: [
      "Anondo Bhubon legacy for generations",
      "Anondo Real Estate Group sustainable township",
      "future-ready integrated township Bangladesh",
      "green living legacy Purbachal",
    ],
  },
};

export default function LifestyleSubPage({ preview, documentContent }) {
  const customSeo = lifestyleSeoBySlug[preview.slug] || {};
  const seo = {
    title: `${preview.title} | Anondo Bhubon Lifestyle`,
    description:
      customSeo.description || documentContent.sections[0].blocks[0].text,
    keywords: customSeo.keywords || [
      "Anondo Bhubon lifestyle",
      preview.title,
      "Anondo Real Estate Group",
      "green sustainable township near Purbachal",
    ],
    path: `/lifestyle/${preview.slug}`,
    image: documentContent.heroImage,
    imageAlt: `${preview.title} — Anondo Bhubon Green & Sustainable Integrated Township`,
    breadcrumb: [
      { name: "Lifestyle", path: "/lifestyle" },
      { name: preview.title, path: `/lifestyle/${preview.slug}` },
    ],
  };

  return (
    <div className="relative w-full">
      <AdvancedSEO {...seo} />
      <LifestyleDocumentSection
        key={preview.slug}
        slug={preview.slug}
        documentContent={documentContent}
      />
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: lifestylePreviews.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const preview = lifestylePreviews.find(({ slug }) => slug === params.slug);
  if (!preview) return { notFound: true };
  const { default: documents } = await import("@/data/lifestyleDocuments.json");
  return {
    props: {
      preview,
      documentContent: documents[preview.slug],
    },
  };
}
