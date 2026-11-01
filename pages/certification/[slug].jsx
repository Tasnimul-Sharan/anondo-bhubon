import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import CertificationDetailsSection from "@/components/CertificationDetailsSection";
import { getNoticeBySlug, noticeData } from "@/data/noticeData";
import { finalRenderAssets } from "@/data/finalRendersData";

export default function CertificationDetailsPage({ notice }) {
  const seo = {
    title: `${notice.title} | Anondo Bhubon Certification`,
    description: notice.description,
    keywords: [
      "Anondo Bhubon certification",
      notice.title,
      notice.category,
      "Anondo Bhubon official document",
      "Purbachal township certification documents",
    ],
    path: `/certification/${notice.slug}`,
    image: notice.image,
    imageAlt: `${notice.title} official document`,
    pageType: "Article",
    breadcrumb: [
      { name: "Certification", path: "/certification" },
      { name: notice.title, path: `/certification/${notice.slug}` },
    ],
    publishedTime: notice.isoDate,
    jsonLd: {
      "@type": "Article",
      "@id": `https://www.anondobhubon.com/certification/${notice.slug}#article`,
      headline: notice.title,
      description: notice.description,
      image: notice.images.map((image) => `https://www.anondobhubon.com${image}`),
      datePublished: notice.isoDate,
      dateModified: notice.isoDate,
      author: {
        "@type": "Organization",
        name: notice.author,
      },
      publisher: {
        "@id": "https://www.anondobhubon.com/#organization",
      },
      mainEntityOfPage: {
        "@id": `https://www.anondobhubon.com/certification/${notice.slug}#webpage`,
      },
    },
  };

  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "Certification Details",
          backgroundImage: finalRenderAssets.masterplan,
        }}
      />
      <CertificationDetailsSection notice={notice} />
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: noticeData.map((notice) => ({
      params: { slug: notice.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const notice = getNoticeBySlug(params.slug);

  if (!notice) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      notice,
    },
  };
}
