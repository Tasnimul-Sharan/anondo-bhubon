import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import NoticeDetailsSection from "@/components/NoticeDetailsSection";
import { getNoticeBySlug, noticeData } from "@/data/noticeData";
import { finalRenderAssets } from "@/data/finalRendersData";

export default function NoticeDetailsPage({ notice }) {
  const seo = {
    title: `${notice.title} | Anondo Bhubon Notice`,
    description: notice.description,
    keywords: [
      "Anondo Bhubon notice",
      notice.title,
      notice.category,
      "Anondo Bhubon official document",
      "Purbachal township update",
    ],
    path: `/notice/${notice.slug}`,
    image: notice.image,
    imageAlt: `${notice.title} official notice document`,
    pageType: "Article",
    breadcrumb: [
      { name: "Notice", path: "/notice" },
      { name: notice.title, path: `/notice/${notice.slug}` },
    ],
    publishedTime: notice.isoDate,
    jsonLd: {
      "@type": "Article",
      "@id": `https://www.anondobhubon.com/notice/${notice.slug}#article`,
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
        "@id": `https://www.anondobhubon.com/notice/${notice.slug}#webpage`,
      },
    },
  };

  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: notice.title,
          backgroundImage: finalRenderAssets.masterplan,
        }}
      />
      <NoticeDetailsSection notice={notice} />
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
