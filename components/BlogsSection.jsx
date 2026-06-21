"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaRegCalendarAlt,
  FaRegUser,
  FaRegNewspaper,
} from "react-icons/fa";
import { blogsData } from "@/data/blogsData";

export default function BlogsSection() {
  const blogs = (blogsData || []).slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-primary/5 py-20 sm:py-24">
      {/* Soft Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
              Our Blog
            </p>

            <h2 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 md:text-5xl">
              Latest Real Estate Insights
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Stay informed with expert advice, investment guidance, project
              updates, and property-related insights from Anondo Cityscapers.
            </p>

            <div className="mt-6 h-[3px] w-24 rounded-full bg-primary" />
          </div>

          <Link
            href="/blogs"
            className="inline-flex w-fit items-center justify-center gap-3 rounded-2xl bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-secondary"
          >
            View All Blogs
            <FaArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="group block h-full"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                      <FaRegNewspaper />
                      Article
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2 text-xs font-semibold text-white">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-md">
                      <FaRegCalendarAlt />
                      {blog.date}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-md">
                      <FaRegUser />
                      {blog.author}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="line-clamp-2 text-xl font-bold leading-snug tracking-[-0.02em] text-gray-900 transition group-hover:text-primary">
                    {blog.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-600">
                    {blog.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="flex items-center justify-between border-t border-primary/10 pt-5">
                      <span className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
                        Read More
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                        <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
