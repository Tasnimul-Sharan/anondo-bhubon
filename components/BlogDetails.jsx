// "use client";

// import Image from "next/image";
// import { AiOutlineTag } from "react-icons/ai";
// import { FaCheckCircle } from "react-icons/fa";

// export default function BlogDetails({ blogsData }) {
//   const { blogPost, sections, socialIcons } = blogsData;

//   const currentUrl = `https://anondocityscapers.com/blogs/${blogsData.slug}`;

//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* 🔥 Main Image */}
//         <div className="rounded-3xl overflow-hidden shadow-lg mb-10">
//           <Image
//             src={blogPost.image}
//             alt={blogPost.title}
//             width={1400}
//             height={800}
//             className="w-full h-[400px] object-cover"
//           />
//         </div>

//         {/* 🔥 Header */}
//         <div className="text-center mb-10">
//           <p className="text-sm text-gray-500 mb-2">
//             <span className="text-primary font-medium">Written by:</span>{" "}
//             {blogPost.author} • {blogPost.date}
//           </p>

//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             {blogPost.title}
//           </h1>

//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {blogPost.description}
//           </p>
//         </div>

//         {/* 🔥 Social Share TOP */}
//         {/* <div className="flex justify-center items-center gap-3 mb-12">
//           {socialIcons?.map(({ icon: Icon, link }, index) => (
//             <a
//               key={index}
//               href={link(currentUrl, blogPost.title)}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300"
//             >
//               <Icon />
//             </a>
//           ))}
//         </div> */}

//         {/* 🔥 Sections (MAIN MERGE PART) */}
//         <div className="space-y-8 mb-12">
//           {sections.map((section, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300"
//             >
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                 {section.title}
//               </h2>

//               {/* Paragraph */}
//               {section.content && (
//                 <p className="text-gray-600 leading-relaxed">
//                   {section.content}
//                 </p>
//               )}

//               {/* List */}
//               {section.list && (
//                 <ul className="mt-4 space-y-2">
//                   {section.list.map((item, i) => (
//                     <li
//                       key={i}
//                       className="flex items-center gap-3 text-gray-600"
//                     >
//                       <FaCheckCircle className="text-primary" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* 🔥 Tags + Bottom Share */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t pt-6">
//           {/* Tags */}
//           <div className="flex flex-wrap items-center gap-2">
//             <AiOutlineTag className="text-primary text-xl" />
//             {blogPost.postTags.map((tag, i) => (
//               <span
//                 key={i}
//                 className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Bottom Share */}
//           <div className="flex items-center gap-2">
//             <span className="text-gray-600">Share:</span>
//             {socialIcons?.map(({ icon: Icon, link }, index) => (
//               <a
//                 key={index}
//                 href={link(currentUrl, blogPost.title)}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-primary hover:text-white transition"
//               >
//                 <Icon className="w-4 h-4" />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import { AiOutlineTag } from "react-icons/ai";
// import {
//   FaCheckCircle,
//   FaUserEdit,
//   FaCalendarAlt,
//   FaShareAlt,
// } from "react-icons/fa";

// export default function BlogDetails({ blogsData }) {
//   const { blogPost, sections, socialIcons } = blogsData;

//   const currentUrl = `https://anondocityscapers.com/blogs/${blogsData.slug}`;

//   return (
//     <section className="bg-[#f8f7f4] py-16 md:py-24">
//       <div className="mx-auto max-w-7xl px-5 md:px-8">
//         {/* Hero Area */}
//         <div className="mb-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
//           {/* Image */}
//           <div className="relative overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
//             <div className="relative h-[320px] overflow-hidden rounded-[22px] md:h-[520px]">
//               <Image
//                 src={blogPost.image}
//                 alt={blogPost.title}
//                 fill
//                 priority
//                 sizes="(max-width: 1024px) 100vw, 55vw"
//                 className="object-cover"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
//             </div>
//           </div>

//           {/* Header Content */}
//           <div>
//             <div className="mb-5 inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
//               Anondo Cityscapers Blog
//             </div>

//             <h1 className="mb-6 text-4xl font-bold leading-tight text-[#111827] md:text-5xl lg:text-6xl">
//               {blogPost.title}
//             </h1>

//             <p className="mb-7 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
//               {blogPost.description}
//             </p>

//             <div className="flex flex-wrap gap-4 text-sm text-gray-600">
//               <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
//                 <FaUserEdit className="text-primary" />
//                 <span>
//                   Written by{" "}
//                   <strong className="font-semibold text-gray-900">
//                     {blogPost.author}
//                   </strong>
//                 </span>
//               </div>

//               <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
//                 <FaCalendarAlt className="text-primary" />
//                 <span>{blogPost.date}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content Layout */}
//         <div className="grid gap-10 lg:grid-cols-[1fr_330px]">
//           {/* Article Content */}
//           <article className="space-y-7">
//             {sections.map((section, index) => (
//               <div
//                 key={index}
//                 className="relative overflow-hidden rounded-[24px] border border-gray-100 bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:shadow-[0_20px_55px_rgba(15,23,42,0.09)] md:p-9"
//               >
//                 <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

//                 <div className="mb-4 flex items-start gap-4">
//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
//                     {String(index + 1).padStart(2, "0")}
//                   </div>

//                   <h2 className="text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
//                     {section.title}
//                   </h2>
//                 </div>

//                 {section.content && (
//                   <p className="pl-0 text-base leading-8 text-gray-600 md:pl-[60px]">
//                     {section.content}
//                   </p>
//                 )}

//                 {section.list && (
//                   <ul className="mt-6 space-y-3 md:pl-[60px]">
//                     {section.list.map((item, i) => (
//                       <li
//                         key={i}
//                         className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#fafafa] px-4 py-3 text-gray-700"
//                       >
//                         <FaCheckCircle className="mt-1 shrink-0 text-primary" />
//                         <span className="leading-relaxed">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}
//           </article>

//           {/* Sidebar */}
//           <aside className="lg:sticky lg:top-24 lg:h-fit">
//             <div className="overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.07)]">
//               {/* Sidebar Header */}
//               <div className="border-b border-gray-100 bg-[#111827] p-6 text-white">
//                 <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
//                   Article Info
//                 </p>

//                 <h3 className="text-xl font-bold leading-snug">
//                   {blogPost.title}
//                 </h3>
//               </div>

//               <div className="space-y-7 p-6">
//                 {/* Author */}
//                 <div>
//                   <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
//                     Author
//                   </p>

//                   <div className="flex items-center gap-3">
//                     <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
//                       <FaUserEdit />
//                     </div>

//                     <div>
//                       <p className="font-semibold text-gray-900">
//                         {blogPost.author}
//                       </p>
//                       <p className="text-sm text-gray-500">{blogPost.date}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Tags */}
//                 {blogPost.postTags?.length > 0 && (
//                   <div>
//                     <div className="mb-3 flex items-center gap-2">
//                       <AiOutlineTag className="text-xl text-primary" />
//                       <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
//                         Tags
//                       </p>
//                     </div>

//                     <div className="flex flex-wrap gap-2">
//                       {blogPost.postTags.map((tag, i) => (
//                         <span
//                           key={i}
//                           className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Share */}
//                 <div>
//                   <div className="mb-3 flex items-center gap-2">
//                     <FaShareAlt className="text-primary" />
//                     <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
//                       Share Article
//                     </p>
//                   </div>

//                   <div className="flex flex-wrap gap-2">
//                     {socialIcons?.map(({ icon: Icon, link }, index) => (
//                       <a
//                         key={index}
//                         href={link(currentUrl, blogPost.title)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label={`Share ${blogPost.title}`}
//                         className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
//                       >
//                         <Icon className="h-4 w-4" />
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import { AiOutlineTag } from "react-icons/ai";
// import { FaCheckCircle } from "react-icons/fa";
// import { FiCalendar, FiShare2, FiUser } from "react-icons/fi";

// export default function BlogDetails({ blogsData }) {
//   const { blogPost, sections = [], socialIcons } = blogsData;

//   const currentUrl = `https://anondocityscapers.com/blogs/${blogsData.slug}`;

//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
//         {/* Main Image First */}
//         <div className="mx-auto max-w-6xl">
//           <div className="relative overflow-hidden rounded-[28px] bg-gray-100 shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
//             <Image
//               src={blogPost.image}
//               alt={blogPost.title}
//               width={1400}
//               height={800}
//               priority
//               className="h-[300px] w-full object-cover md:h-[520px]"
//             />
//           </div>
//         </div>

//         {/* Header Under Image */}
//         <div className="mx-auto mt-10 max-w-4xl text-center">
//           <span className="mb-5 inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
//             Blog Article
//           </span>

//           <h1 className="text-4xl font-bold leading-tight text-gray-950 md:text-5xl lg:text-6xl">
//             {blogPost.title}
//           </h1>

//           <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
//             {blogPost.description}
//           </p>

//           <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
//             <div className="flex items-center gap-2">
//               <FiUser className="text-primary" />
//               <span>
//                 Written by{" "}
//                 <strong className="font-semibold text-gray-900">
//                   {blogPost.author}
//                 </strong>
//               </span>
//             </div>

//             <span className="hidden h-1 w-1 rounded-full bg-gray-300 md:block" />

//             <div className="flex items-center gap-2">
//               <FiCalendar className="text-primary" />
//               <span>{blogPost.date}</span>
//             </div>
//           </div>
//         </div>

//         {/* Article Body */}
//         <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-[1fr_260px]">
//           <article className="max-w-3xl">
//             {sections.map((section, index) => (
//               <div
//                 key={index}
//                 className="border-b border-gray-200 py-10 first:pt-0 last:border-b-0"
//               >
//                 <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
//                   {String(index + 1).padStart(2, "0")}
//                 </p>

//                 <h2 className="mb-5 text-2xl font-bold leading-snug text-gray-950 md:text-3xl">
//                   {section.title}
//                 </h2>

//                 {section.content && (
//                   <p className="text-[17px] leading-9 text-gray-600">
//                     {section.content}
//                   </p>
//                 )}

//                 {section.list && (
//                   <ul className="mt-7 space-y-4">
//                     {section.list.map((item, i) => (
//                       <li
//                         key={i}
//                         className="flex items-start gap-3 text-[16px] leading-8 text-gray-700"
//                       >
//                         <FaCheckCircle className="mt-2 shrink-0 text-primary" />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}
//           </article>

//           {/* Right Info Panel */}
//           <aside className="lg:sticky lg:top-24 lg:h-fit">
//             <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-6">
//               {/* Tags */}
//               {blogPost.postTags?.length > 0 && (
//                 <div>
//                   <div className="mb-4 flex items-center gap-2">
//                     <AiOutlineTag className="text-xl text-primary" />
//                     <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-gray-800">
//                       Tags
//                     </h3>
//                   </div>

//                   <div className="flex flex-wrap gap-2">
//                     {blogPost.postTags.map((tag, i) => (
//                       <span
//                         key={i}
//                         className="rounded-full border border-primary/20 bg-white px-4 py-2 text-xs font-semibold text-primary"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Share */}
//               <div className="mt-8 border-t border-gray-200 pt-6">
//                 <div className="mb-4 flex items-center gap-2">
//                   <FiShare2 className="text-primary" />
//                   <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-gray-800">
//                     Share
//                   </h3>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {socialIcons?.map(({ icon: Icon, link }, index) => (
//                     <a
//                       key={index}
//                       href={link(currentUrl, blogPost.title)}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={`Share ${blogPost.title}`}
//                       className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
//                     >
//                       <Icon className="h-4 w-4" />
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { AiOutlineTag } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { FiCalendar, FiShare2, FiUser } from "react-icons/fi";

export default function BlogDetails({ blogsData }) {
  const { blogPost, sections = [], socialIcons = [] } = blogsData;

  const currentUrl = `https://anondocityscapers.com/blogs/${blogsData.slug}`;

  return (
    <section className="bg-[#f8f7f3]">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
        {/* Main Image */}
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-2 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
            <div className="relative h-[300px] overflow-hidden rounded-[24px] md:h-[600px]">
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Header Under Image */}
        <div className="mx-auto mt-12 max-w-4xl text-center pb-12">
          <span className="mb-5 inline-flex rounded-full border border-primary/20 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-primary shadow-sm">
            Blog Article
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-gray-950 md:text-5xl lg:text-6xl">
            {blogPost.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            {blogPost.description}
          </p>
        </div>

        {/* Article Body */}
        <div className="mx-auto mt-18 grid max-w-6xl gap-10 lg:grid-cols-[1fr_280px]">
          {/* Main Article */}
          <article className="rounded-[30px] border border-gray-100 bg-white px-6 py-4 shadow-[0_22px_70px_rgba(15,23,42,0.06)] md:px-10 md:py-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className=" py-10 first:pt-6 last:pb-6"
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg shadow-primary/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="h-px flex-1 bg-gray-100" />
                </div>

                <h2 className="mb-5 text-2xl font-bold leading-snug tracking-[-0.02em] text-gray-950 md:text-3xl">
                  {section.title}
                </h2>

                {section.content && (
                  <p className="text-[17px] leading-9 text-gray-600">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <ul className="mt-7 space-y-4">
                    {section.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-[#fafafa] px-5 py-4 text-[16px] leading-8 text-gray-700"
                      >
                        <FaCheckCircle className="mt-2 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </article>

          {/* Right Panel */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-[30px] border border-gray-100 bg-white p-6 shadow-[0_22px_70px_rgba(15,23,42,0.07)]">
              {/* Article Info */}
              <div className="border-b border-gray-100 pb-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gray-400">
                  Article Info
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <FiUser />
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">Author</p>
                      <p className="font-semibold text-gray-950">
                        {blogPost.author}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <FiCalendar />
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">Published</p>
                      <p className="font-semibold text-gray-950">
                        {blogPost.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              {blogPost.postTags?.length > 0 && (
                <div className="border-b border-gray-100 py-6">
                  <div className="mb-4 flex items-center gap-2">
                    <AiOutlineTag className="text-xl text-primary" />
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                      Tags
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {blogPost.postTags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share */}
              <div className="pt-6">
                <div className="mb-4 flex items-center gap-2">
                  <FiShare2 className="text-primary" />
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    Share
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {socialIcons?.map(({ icon: Icon, link }, index) => (
                    <a
                      key={index}
                      href={link(currentUrl, blogPost.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Share ${blogPost.title}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
