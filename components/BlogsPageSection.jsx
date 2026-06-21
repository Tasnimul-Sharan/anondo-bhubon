"use client";

import { blogsData } from "@/data/blogsData";
import Image from "next/image";
import Link from "next/link";
import { FaRegNewspaper, FaUser } from "react-icons/fa";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

export default function BlogsPageSection() {
  const featuredBlog = blogsData?.[0];
  const otherBlogs = blogsData?.slice(1);

  return (
    <section className="relative overflow-hidden bg-[#F8F9FC] py-20 sm:py-24">
      {/* Background Decorative Shape */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-primary" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">
              Articles & Insights
            </p>
            <span className="h-[2px] w-12 bg-primary" />
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-soft_black sm:text-5xl">
            Latest Blogs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Explore our latest insights, stories, project updates, and helpful
            information.
          </p>
        </div>

        {/* Featured Blog */}
        {featuredBlog && (
          <Link
            href={`/blogs/${featuredBlog.slug}`}
            className="group mb-12 grid overflow-hidden rounded-[2rem] border border-border_color bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift lg:grid-cols-[1.08fr_0.92fr]"
          >
            {/* Featured Image */}
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[500px]">
              <Image
                src={featuredBlog.image}
                alt={featuredBlog.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute left-6 top-6 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                Featured
              </div>
            </div>

            {/* Featured Content */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <FaUser className="text-primary" />
                  {featuredBlog.author}
                </span>

                <span className="h-1 w-1 rounded-full bg-gray-300" />

                <span className="flex items-center gap-2">
                  <FiCalendar className="text-primary" />
                  {featuredBlog.date}
                </span>
              </div>

              <h3 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-soft_black transition group-hover:text-primary sm:text-4xl">
                {featuredBlog.title}
              </h3>

              <p className="mt-5 line-clamp-4 text-base leading-8 text-gray-600">
                {featuredBlog.description}
              </p>

              <div className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition duration-300 group-hover:bg-secondary">
                Read Featured Article
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        )}

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {otherBlogs.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ item }) {
  return (
    <Link
      href={`/blogs/${item.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border_color bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-primary shadow-md backdrop-blur">
          <FaRegNewspaper />
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center gap-3 text-xs font-medium text-white">
          <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-md">
            <FaUser />
            {item.author}
          </span>

          <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-md">
            <FiCalendar />
            {item.date}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="line-clamp-2 text-xl font-bold leading-snug tracking-[-0.02em] text-soft_black transition group-hover:text-primary">
          {item.title}
        </h3>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-600">
          {item.description}
        </p>

        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between border-t border-border_color pt-5">
            <span className="text-sm font-semibold text-primary">
              Read More
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
