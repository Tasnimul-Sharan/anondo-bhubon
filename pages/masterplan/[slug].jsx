import AdvancedSEO from "@/components/AdvancedSEO";
import MasterplanDocumentSection from "@/components/MasterplanDocumentSection";
import { finalRenderAssets } from "@/data/finalRendersData";
import { masterplanPreviews } from "@/data/masterplanPreviewData";

export default function MasterplanPreviewPage({ preview, documentContent }) {
  const image = finalRenderAssets[documentContent.image];
  const seo = {
    title: `${preview.title} | Anondo Bhubon Master Plan`,
    description: documentContent.sections[0].blocks[0].text,
    path: `/masterplan/${preview.slug}`,
    image,
    imageAlt: "Anondo Bhubon master plan",
    noindex: true,
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
  const { default: documents } = await import("@/data/masterplanDocuments.json");
  return { props: { preview, documentContent: documents[preview.slug] } };
}
