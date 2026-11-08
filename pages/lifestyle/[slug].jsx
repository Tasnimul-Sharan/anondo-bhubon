import AdvancedSEO from "@/components/AdvancedSEO";
import LifestyleDocumentSection from "@/components/LifestyleDocumentSection";
import { lifestylePreviews } from "@/data/lifestylePreviewData";

export default function LifestyleSubPage({ preview, documentContent }) {
  const seo = {
    title: `${preview.title} | Anondo Bhubon Lifestyle`,
    description: documentContent.sections[0].blocks[0].text,
    path: `/lifestyle/${preview.slug}`,
    image: documentContent.heroImage,
    imageAlt: preview.title,
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
