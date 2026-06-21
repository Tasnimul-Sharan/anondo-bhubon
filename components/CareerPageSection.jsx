"use client";

import { useMemo, useState } from "react";
import {
  FaBriefcase,
  FaClock,
  FaLocationDot,
  FaMagnifyingGlass,
  FaUsers,
} from "react-icons/fa6";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CAREER_EMAIL = "career@anondohousing.com";

const jobs = [
  {
    id: 1,
    slug: "sales-executive",
    title: "Sales Executive",
    department: "Sales and Marketing",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    experience: "1-3 years",
    deadline: "Open until filled",
    description:
      "We are looking for energetic and motivated individuals to join our sales team. Candidates should have strong communication skills, customer handling ability, and a genuine interest in real estate marketing.",
  },
];

const hiringPrinciples = [
  "Customer-first communication",
  "Real estate market understanding",
  "Professional field coordination",
];

export default function CareerPageSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const jobsPerPage = 3;
  const departments = [...new Set(jobs.map((job) => job.department))];
  const jobTypes = ["All", ...new Set(jobs.map((job) => job.type))];
  const locations = ["All", ...new Set(jobs.map((job) => job.location))];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        job.title.toLowerCase().includes(search) ||
        job.department.toLowerCase().includes(search) ||
        job.location.toLowerCase().includes(search) ||
        job.description.toLowerCase().includes(search);

      const matchesType = selectedType === "All" || job.type === selectedType;

      const matchesLocation =
        selectedLocation === "All" || job.location === selectedLocation;

      return matchesSearch && matchesType && matchesLocation;
    });
  }, [searchTerm, selectedType, selectedLocation]);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage) || 1;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleTypeFilter = (value) => {
    setSelectedType(value);
    setCurrentPage(1);
  };

  const handleLocationFilter = (value) => {
    setSelectedLocation(value);
    setCurrentPage(1);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getApplyLink = (jobTitle) => {
    const subject = encodeURIComponent(`Application for ${jobTitle}`);
    const body = encodeURIComponent(
      `Dear HR Team,\n\nI would like to apply for the position of ${jobTitle}.\n\nName:\nPhone:\nExperience:\nPortfolio/CV Link:\n\nThank you.`,
    );

    return `mailto:${CAREER_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-off_white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="min-w-0">
            <p className="inline-flex rounded-lg border border-border_color bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-secondary shadow-soft">
              Career Opportunities
            </p>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Join the team shaping Anondo Bhubon.
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-primary/75">
              Build your career with a township-focused team working across
              real estate development, customer advisory, sales, marketing,
              planning coordination, and long-term community value.
            </p>
          </div>

          <div className="grid min-w-0 gap-4 sm:grid-cols-3">
            <StatCard
              icon={<FaBriefcase />}
              label="Open Positions"
              value={jobs.length}
            />
            <StatCard
              icon={<FaUsers />}
              label="Departments"
              value={departments.length}
            />
            <StatCard
              icon={<FaLocationDot />}
              label="Locations"
              value={locations.length - 1}
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
          <aside className="min-w-0 rounded-lg border border-border_color bg-white p-6 shadow-soft lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              Hiring Focus
            </p>
            <h2 className="mt-3 text-2xl font-bold text-primary">
              What we look for
            </h2>
            <div className="mt-5 space-y-3">
              {hiringPrinciples.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border_color bg-off_white p-4 text-sm font-semibold leading-6 text-primary"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-primary/15 bg-primary p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Send CV
              </p>
              <a
                href={`mailto:${CAREER_EMAIL}`}
                className="mt-3 block break-words text-sm font-semibold leading-6 text-white"
              >
                {CAREER_EMAIL}
              </a>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="rounded-lg border border-border_color bg-white p-5 shadow-soft">
              <div className="grid gap-4 lg:grid-cols-[1fr_200px_220px]">
                <div className="relative">
                  <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/45" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => handleSearch(event.target.value)}
                    placeholder="Search job title, department, or keyword..."
                    className="h-14 w-full rounded-lg border border-border_color bg-off_white pl-11 pr-4 text-sm font-semibold text-primary outline-none transition placeholder:text-primary/45 focus:border-primary focus:bg-white focus:ring-4 focus:ring-secondary/15"
                  />
                </div>

                <select
                  value={selectedType}
                  onChange={(event) => handleTypeFilter(event.target.value)}
                  className="h-14 rounded-lg border border-border_color bg-off_white px-4 text-sm font-semibold text-primary outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-secondary/15"
                >
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>
                      {type === "All" ? "All Job Types" : type}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedLocation}
                  onChange={(event) =>
                    handleLocationFilter(event.target.value)
                  }
                  className="h-14 rounded-lg border border-border_color bg-off_white px-4 text-sm font-semibold text-primary outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-secondary/15"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location === "All" ? "All Locations" : location}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-primary/75">
                Showing{" "}
                <span className="font-bold text-secondary">
                  {filteredJobs.length}
                </span>{" "}
                job opening{filteredJobs.length > 1 ? "s" : ""}
              </p>

              <p className="text-sm font-semibold text-primary/60">
                Page {currentPage} of {totalPages}
              </p>
            </div>

            {currentJobs.length > 0 ? (
              <div className="mt-6 grid gap-6">
                {currentJobs.map((job) => (
                  <article
                    key={job.id}
                    id={job.slug}
                    className="min-w-0 overflow-hidden rounded-lg border border-border_color bg-white shadow-soft transition duration-300 hover:border-primary/30 hover:shadow-lift"
                  >
                    <div className="grid gap-0 lg:grid-cols-[1fr_260px]">
                      <div className="p-6 sm:p-8">
                        <div className="mb-5 flex flex-wrap gap-3">
                          <span className="rounded-lg bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
                            {job.department}
                          </span>

                          <span className="rounded-lg border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-secondary">
                            {job.type}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                          {job.title}
                        </h3>

                        <div className="mt-5 grid gap-3 text-sm font-semibold text-primary/75 sm:grid-cols-3">
                          <JobMeta icon={<FaLocationDot />} text={job.location} />
                          <JobMeta icon={<FaClock />} text={job.experience} />
                          <JobMeta icon={<FaBriefcase />} text={job.deadline} />
                        </div>

                        <p className="mt-5 max-w-3xl text-sm leading-8 text-primary/75">
                          {job.description}
                        </p>
                      </div>

                      <div className="flex flex-col justify-center border-t border-border_color bg-off_white p-6 lg:border-l lg:border-t-0">
                        <a
                          href={getApplyLink(job.title)}
                          className="inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-secondary hover:shadow-lift"
                        >
                          Apply Now
                          <FiArrowRight />
                        </a>

                        <p className="mt-4 text-center text-xs font-semibold leading-6 text-primary/60">
                          Send your CV with the correct job title in the email
                          subject.
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-lg border border-border_color bg-white p-10 text-center shadow-soft">
                <h3 className="text-2xl font-bold text-primary">
                  No job openings found
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-primary/75">
                  Try changing your search keyword, job type, or location
                  filter.
                </p>
              </div>
            )}

            {filteredJobs.length > jobsPerPage && (
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className="flex h-11 items-center gap-2 rounded-lg border border-border_color bg-white px-5 text-sm font-semibold text-primary transition hover:border-primary disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <FiChevronLeft />
                  Prev
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;

                  return (
                    <button
                      type="button"
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-11 w-11 rounded-lg border text-sm font-bold transition ${
                        currentPage === page
                          ? "border-primary bg-primary text-white"
                          : "border-border_color bg-white text-primary hover:border-primary"
                      }`}
                    >
                      {String(page).padStart(2, "0")}
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="flex h-11 items-center gap-2 rounded-lg border border-border_color bg-white px-5 text-sm font-semibold text-primary transition hover:border-primary disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                  <FiChevronRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="min-w-0 rounded-lg border border-border_color bg-white p-5 shadow-soft">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-xl text-white">
        {icon}
      </div>
      <p className="text-3xl font-bold text-primary">{value}</p>
      <p className="mt-1 text-sm font-semibold text-primary/60">{label}</p>
    </div>
  );
}

function JobMeta({ icon, text }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-border_color bg-off_white px-4 py-3">
      <span className="text-secondary">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
