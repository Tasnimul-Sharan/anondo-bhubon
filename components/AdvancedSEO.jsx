import Head from "next/head";
import { finalRenderAssets } from "@/data/finalRendersData";

export const SITE_URL = "https://www.anondobhubon.com";
export const SITE_NAME = "Anondo Bhubon";
export const DEFAULT_IMAGE = `${SITE_URL}${finalRenderAssets.hero}`;
export const DEFAULT_LOGO = `${SITE_URL}/bhubon-logo.jpeg`;

function toAbsoluteUrl(value) {
  if (!value) return DEFAULT_IMAGE;
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

function toCanonical(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function normalizeKeywords(keywords) {
  if (Array.isArray(keywords)) return keywords.filter(Boolean).join(", ");
  return keywords || "";
}

function buildSchema({
  title,
  description,
  url,
  image,
  pageType,
  breadcrumb = [],
  jsonLd,
}) {
  const breadcrumbItems = [
    { name: "Home", item: `${SITE_URL}/` },
    ...breadcrumb.map((item) => ({
      name: item.name,
      item: toCanonical(item.path || item.item || "/"),
    })),
  ];

  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_LOGO,
      },
      image,
      description:
        "Anondo Bhubon is an eco-conscious township concept near Purbachal New Town with green infrastructure, residential planning, and smart urban amenities.",
      areaServed: {
        "@type": "Country",
        name: "Bangladesh",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-BD",
    },
    {
      "@type": pageType || "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      image,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#organization`,
      },
      breadcrumb: {
        "@id": `${url}#breadcrumb`,
      },
      inLanguage: "en-BD",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.item,
      })),
    },
  ];

  if (jsonLd) {
    if (Array.isArray(jsonLd)) graph.push(...jsonLd);
    else graph.push(jsonLd);
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export default function AdvancedSEO({
  title,
  description,
  keywords,
  path = "/",
  image = DEFAULT_IMAGE,
  imageAlt,
  type = "website",
  pageType = "WebPage",
  noindex = false,
  breadcrumb = [],
  jsonLd,
  publishedTime,
  modifiedTime,
  tags = [],
}) {
  const url = toCanonical(path);
  const imageUrl = toAbsoluteUrl(image);
  const keywordString = normalizeKeywords(keywords);
  const robots = noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const safeImageAlt =
    imageAlt || `${SITE_NAME} eco-conscious township in Bangladesh`;

  const schema = buildSchema({
    title,
    description,
    url,
    image: imageUrl,
    pageType,
    breadcrumb,
    jsonLd,
  });

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywordString ? <meta name="keywords" content={keywordString} /> : null}
      <meta name="author" content={SITE_NAME} />
      <meta name="publisher" content={SITE_NAME} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="theme-color" content="#2C3A83" />
      <link rel="canonical" href={url} />
      <link rel="alternate" href={url} hrefLang="en-BD" />
      <link rel="alternate" href={url} hrefLang="x-default" />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_BD" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:alt" content={safeImageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={safeImageAlt} />

      {publishedTime ? (
        <meta property="article:published_time" content={publishedTime} />
      ) : null}
      {modifiedTime ? (
        <meta property="article:modified_time" content={modifiedTime} />
      ) : null}
      {tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </Head>
  );
}
