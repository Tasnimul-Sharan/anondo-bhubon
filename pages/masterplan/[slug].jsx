import AdvancedSEO from "@/components/AdvancedSEO";
import MasterplanDocumentSection from "@/components/MasterplanDocumentSection";
import { finalRenderAssets } from "@/data/finalRendersData";
import { masterplanPreviews } from "@/data/masterplanPreviewData";

const masterplanSeoBySlug = {
  "residential-development": {
    title:
      "Residential Development | 5 Categories, Villas & Condominiums | Anondo Bhubon Master Plan",
    description:
      "Explore Anondo Bhubon's residential master plan near Purbachal featuring five categories (Premium Plus, Premium, Executive, General, Economy) across five principal sectors, dedicated small and large villa communities, a modern high-rise condominium district, block-level elementary schools, high schools, colleges, playgrounds, and greenery.",
    keywords: [
      "Anondo Bhubon residential development",
      "Premium Plus Premium Executive General Economy plots",
      "villa communities near Purbachal",
      "condominium district Purbachal",
      "residential sectors Anondo Bhubon",
      "integrated township housing Bangladesh",
    ],
  },
  "green-blue-master-plan": {
    title:
      "Green & Blue Master Plan | River Corridor, Lakes & Forest Walkways | Anondo Bhubon",
    description:
      "Discover how nature sits at the heart of Anondo Bhubon: dedicated ecological zones for the proposed revival of the historic Old Brahmaputra River reconnecting to the Shitalakshya River, two large lakes, and shaded Forest Walkways connecting communities, business districts, and parks.",
    keywords: [
      "Anondo Bhubon Green and Blue Master Plan",
      "Old Brahmaputra River revival Shitalakshya",
      "Forest Walkways Bangladesh",
      "river corridor and lakes Purbachal",
      "eco-friendly sustainable township Purbachal",
      "green corridors urban biodiversity Dhaka",
    ],
  },
  "commercial-development": {
    title:
      "Commercial Development | Economic Zone, Digital Valley & Mega Mall | Anondo Bhubon",
    description:
      "Anondo Bhubon brings together commercial, digital, and industrial growth—including a general commercial district, Anondo Digital Valley for freelancers and tech enterprises, a landmark Iconic Mega Commercial Centre, and an environmentally compatible technology industrial zone.",
    keywords: [
      "Anondo Bhubon commercial development",
      "Anondo Digital Valley",
      "Mega Commercial Centre Purbachal",
      "commercial and industrial zone Bangladesh",
      "IT and semiconductor industrial zone Bangladesh",
      "employment and enterprise township Dhaka",
    ],
  },
  "education-healthcare": {
    title:
      "Education, Healthcare & Sports | Schools, University, Hospitals & Sports Complexes | Anondo Bhubon",
    description:
      "Anondo Bhubon integrates lifelong learning, healthcare, and active living with block-level elementary schools, sector high schools and colleges, an international school-and-college campus, a university site, two hospitals, and two major international-standard cricket and football sports complexes.",
    keywords: [
      "Anondo Bhubon education and healthcare",
      "township university and international school Purbachal",
      "Anondo Bhubon hospitals",
      "sports complex cricket football",
      "block-level elementary schools township",
      "human development integrated township Bangladesh",
    ],
  },
  "transportation-utilities": {
    title:
      "Transportation & Utilities | Principal Avenues, Bus Terminals & Smart Utilities | Anondo Bhubon",
    description:
      "Explore Anondo Bhubon's coordinated infrastructure: three principal avenues with wide planned road corridors, two bus terminals, helipad provisions, and reliable electricity, water supply, drainage, wastewater management, telecommunications, and safety systems.",
    keywords: [
      "Anondo Bhubon transportation and utilities",
      "principal avenues Purbachal",
      "planned township road network",
      "bus terminals and helipad Anondo Bhubon",
      "smart township utilities and drainage Bangladesh",
      "sustainable urban infrastructure Dhaka",
    ],
  },
  "development-phasing": {
    title:
      "Development Phasing | Progressive Implementation & Long-Term Stewardship | Anondo Bhubon",
    description:
      "Learn how Anondo Group is implementing Anondo Bhubon through disciplined, progressive development phases—guided by trust, integrity, sincerity, dedication, and accountability to build a lasting green and sustainable township legacy for generations.",
    keywords: [
      "Anondo Bhubon development phasing",
      "Anondo Group implementation",
      "phased township development Bangladesh",
      "sustainable real estate stewardship Purbachal",
      "integrated master plan execution",
    ],
  },
};

export default function MasterplanPreviewPage({ preview, documentContent }) {
  const image = finalRenderAssets[documentContent.image];
  const customSeo = masterplanSeoBySlug[preview.slug] || {};
  const seo = {
    title: customSeo.title || `${preview.title} | Anondo Bhubon Master Plan`,
    description:
      customSeo.description || documentContent.sections[0].blocks[0].text,
    keywords: customSeo.keywords || [
      "Anondo Bhubon master plan",
      preview.title,
      "Anondo Group",
      "integrated township near Purbachal",
    ],
    path: `/masterplan/${preview.slug}`,
    image,
    imageAlt: `${preview.title} — Anondo Bhubon Integrated Township Master Plan`,
    breadcrumb: [
      { name: "Master Plan", path: "/masterplan" },
      { name: preview.title, path: `/masterplan/${preview.slug}` },
    ],
  };

  return (
    <div className="relative w-full">
      <AdvancedSEO {...seo} />
      <MasterplanDocumentSection
        key={documentContent.sourceFile}
        slug={preview.slug}
        documentContent={documentContent}
      />
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: masterplanPreviews.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const preview = masterplanPreviews.find(({ slug }) => slug === params.slug);
  if (!preview) return { notFound: true };
  const { default: documents } =
    await import("@/data/masterplanDocuments.json");
  return { props: { preview, documentContent: documents[preview.slug] } };
}
