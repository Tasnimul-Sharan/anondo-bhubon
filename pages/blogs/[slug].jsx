"use client";

import AdvancedSEO, { SITE_URL } from "@/components/AdvancedSEO";
import BlogDetails from "@/components/BlogDetails";
import HeroSection from "@/components/HeroSection";
import { RiLoader2Fill } from "react-icons/ri";
import { blogDetailsData } from "@/data/blogsDetailsData";
import { finalRenderAssets } from "@/data/finalRendersData";
import { useRouter } from "next/router";

function absoluteUrl(value) {
  if (!value) return `${SITE_URL}${finalRenderAssets.hero}`;
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

export default function BlogDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const currentSlug = Array.isArray(slug) ? slug[0] : slug;

  if (!currentSlug) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center min-h-screen text-secondary">
        <RiLoader2Fill className="animate-spin w-6 h-6" />
        <p className="font-medium text-xl">Loading...</p>
      </div>
    );
  }

  const { blogDetails } = blogDetailsData;
  const blog = blogDetails.find((item) => item.slug === currentSlug);

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-secondary font-medium text-xl">
          Blog detail not found.
        </p>
      </div>
    );
  }

  const post = blog.blogPost;
  const tags = post.postTags || [];
  const image = post.image || finalRenderAssets.hero;
  const path = `/blogs/${currentSlug}`;
  const title = `${post.title} | Anondo Bhubon Blog`;
  const description =
    post.description ||
    "Read Anondo Bhubon updates and insights on Purbachal investment, land planning, sustainable township design, and modern residential living in Bangladesh.";

  return (
    <div>
      <AdvancedSEO
        title={title}
        description={description}
        keywords={[
          "Anondo Bhubon",
          "Anondo Bhubon blog",
          "Purbachal real estate",
          "Bangladesh property investment",
          "eco-friendly township",
          ...tags,
        ]}
        path={path}
        image={image}
        imageAlt={post.title}
        type="article"
        pageType="WebPage"
        breadcrumb={[
          { name: "Blogs", path: "/blogs" },
          { name: post.title, path },
        ]}
        tags={tags}
        jsonLd={{
          "@type": "BlogPosting",
          "@id": `${SITE_URL}${path}#article`,
          headline: post.title,
          description,
          image: absoluteUrl(image),
          url: `${SITE_URL}${path}`,
          author: {
            "@type": "Person",
            name: post.author || "Anondo Bhubon",
          },
          publisher: {
            "@id": `${SITE_URL}/#organization`,
          },
          datePublished: post.date,
          mainEntityOfPage: `${SITE_URL}${path}`,
          keywords: tags,
        }}
      />
      <HeroSection
        hero={{
          title: post.title,
          backgroundImage: image,
        }}
      />
      <BlogDetails blogsData={blog} />
    </div>
  );
}
