import Image from "next/image";
import Link from "next/link";
import { FaRegFileAlt } from "react-icons/fa";
import { FiArrowRight, FiCalendar, FiUser } from "react-icons/fi";
import { getSortedNotices } from "@/data/noticeData";

export default function NoticePageSection() {
  const notices = getSortedNotices();

  return (
    <section className="relative overflow-hidden bg-off_white py-20 sm:py-24">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-border_color" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-border_color" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-secondary" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary/70">
                Official Notice Board
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-primary sm:text-5xl">
              Project documents and public notices.
            </h2>
          </div>

          <p className="max-w-3xl text-base font-medium leading-8 text-primary/70 lg:justify-self-end">
            Find official notices, certificates, approval documents, and project
            announcements published for Anondo Bhubon stakeholders.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {notices.map((notice, index) => (
            <Link
              key={notice.slug}
              href={`/notice/${notice.slug}`}
              className="group flex h-full flex-col overflow-hidden border border-border_color bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_70px_rgba(44,58,131,0.14)]"
            >
              <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-primary/5 p-4 sm:min-h-[520px]">
                <Image
                  src={notice.image}
                  alt={notice.title}
                  width={1100}
                  height={1500}
                  priority={index === 0}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="max-h-[480px] w-auto max-w-full object-contain shadow-[0_18px_55px_rgba(44,58,131,0.16)] transition duration-700 group-hover:scale-[1.03] sm:max-h-[620px]"
                />

                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center bg-primary text-sm font-bold text-white shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute bottom-5 left-5 bg-white/95 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary shadow-sm backdrop-blur">
                  {notice.category}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-primary/60">
                  <span className="inline-flex items-center gap-2">
                    <FiUser className="text-secondary" />
                    {notice.author}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FiCalendar className="text-secondary" />
                    {notice.date}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight tracking-[-0.02em] text-primary sm:text-3xl">
                  {notice.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-sm font-medium leading-7 text-primary/70">
                  {notice.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="flex items-center justify-between border-t border-border_color pt-5">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                      <FaRegFileAlt className="text-secondary" />
                      View Notice
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                      <FiArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
