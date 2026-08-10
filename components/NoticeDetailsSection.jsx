import Image from "next/image";
import Link from "next/link";
import { FaRegFileAlt } from "react-icons/fa";
import { FiArrowLeft, FiCalendar, FiExternalLink, FiUser } from "react-icons/fi";

export default function NoticeDetailsSection({ notice }) {
  return (
    <section className="relative overflow-hidden bg-off_white py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <Link
              href="/notice"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-primary transition hover:text-secondary"
            >
              <FiArrowLeft />
              Back to Notices
            </Link>

            <div className="mt-6 w-fit bg-secondary/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">
              {notice.category}
            </div>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.03em] text-primary sm:text-5xl">
              {notice.title}
            </h2>

            <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-primary/70">
              {notice.description}
            </p>
          </div>

          <div className="grid gap-3 border border-border_color bg-white p-5 text-sm font-semibold text-primary/70 sm:grid-cols-3 lg:min-w-[480px]">
            <InfoItem icon={<FiUser />} label="Published By" value={notice.author} />
            <InfoItem icon={<FiCalendar />} label="Date" value={notice.date} />
            <InfoItem
              icon={<FaRegFileAlt />}
              label="Document"
              value={`${notice.images.length} page${
                notice.images.length > 1 ? "s" : ""
              }`}
            />
          </div>
        </div>

        <div className="space-y-8">
          {notice.images.map((image, index) => (
            <article
              key={image}
              className="overflow-hidden border border-border_color bg-white shadow-sm"
            >
              <div className="flex flex-col gap-4 border-b border-border_color p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                    Notice Preview
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-primary">
                    Page {String(index + 1).padStart(2, "0")}
                  </h3>
                </div>

                <a
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-secondary"
                >
                  Open Original
                  <FiExternalLink />
                </a>
              </div>

              <a
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary/5 p-3 sm:p-6"
              >
                <Image
                  src={image}
                  alt={`${notice.title} page ${index + 1}`}
                  width={1600}
                  height={2200}
                  priority={index === 0}
                  sizes="(min-width: 1400px) 1280px, 100vw"
                  className="mx-auto h-auto max-h-none w-full max-w-6xl object-contain shadow-[0_20px_70px_rgba(44,58,131,0.16)]"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <div className="min-w-0 border-border_color sm:border-r sm:pr-4 sm:last:border-r-0">
      <div className="mb-2 flex items-center gap-2 text-secondary">
        {icon}
        <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
          {label}
        </span>
      </div>
      <p className="break-words text-primary">{value}</p>
    </div>
  );
}
