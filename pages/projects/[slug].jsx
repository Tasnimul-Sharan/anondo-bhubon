"use client";

import AdvancedSEO, { SITE_NAME, SITE_URL } from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import ProjectDetails from "@/components/ProjectDetails";
import { RiLoader2Fill } from "react-icons/ri";
import { projectDetailsData } from "@/data/projectDetailsData";
import { finalRenderAssets } from "@/data/finalRendersData";
import { useRouter } from "next/router";

function absoluteUrl(value) {
  if (!value) return `${SITE_URL}${finalRenderAssets.hero}`;
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

export default function ProjectDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const currentSlug = Array.isArray(slug) ? slug[0] : slug;

  if (!currentSlug) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-2 text-secondary">
        <RiLoader2Fill className="h-6 w-6 animate-spin" />
        <p className="text-xl font-medium">Loading...</p>
      </div>
    );
  }

  const { projects } = projectDetailsData;
  const project = projects.find((item) => item.slug === currentSlug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl font-medium text-secondary">
          Project details not found.
        </p>
      </div>
    );
  }

  const projectData = project?.projectData || {};
  const projectTitle = project.title || projectData.title || "Project Details";
  const projectDescription =
    typeof project.description === "string"
      ? project.description
      : projectData.description ||
        `${projectTitle} by ${SITE_NAME}. Explore project overview, master plan, amenities, location advantages, gallery, and investment opportunities.`;
  const heroImage = project.banner || projectData.image || finalRenderAssets.hero;
  const path = `/projects/${project.slug}`;
  const tags = [
    projectTitle,
    "Anondo Bhubon",
    "real estate project Bangladesh",
    "housing project Bangladesh",
    "township project Bangladesh",
    "Purbachal real estate",
    "eco-friendly township",
    "property investment Bangladesh",
    ...(projectData.postTags || []),
    ...(project.keywords || []),
  ];

  return (
    <div>
      <AdvancedSEO
        title={`${projectTitle} | ${SITE_NAME} Project`}
        description={projectDescription}
        keywords={tags}
        path={path}
        image={heroImage}
        imageAlt={projectTitle}
        pageType="WebPage"
        breadcrumb={[
          { name: "Projects", path: "/projects" },
          { name: projectTitle, path },
        ]}
        tags={projectData.postTags || []}
        jsonLd={{
          "@type": "Product",
          "@id": `${SITE_URL}${path}#project`,
          name: projectTitle,
          description: projectDescription,
          image: absoluteUrl(heroImage),
          url: `${SITE_URL}${path}`,
          brand: {
            "@id": `${SITE_URL}/#organization`,
          },
          category: "Residential real estate project",
          offers: {
            "@type": "Offer",
            url: `${SITE_URL}${path}`,
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
          },
        }}
      />

      <HeroSection
        hero={{
          title: projectTitle,
          backgroundImage: heroImage,
        }}
      />

      <ProjectDetails project={project} />
    </div>
  );
}
