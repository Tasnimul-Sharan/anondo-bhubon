import brandStory from "@/data/brandStoryData.json";

export default function BrandStorySection() {
  const { introduction, sections, closing } = brandStory;

  return (
    <article aria-labelledby="brand-story-heading" className="bg-white text-primary">
      <header className="bg-off_white px-6 py-16 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-normal">{introduction[0]}</p>
          <span aria-hidden="true" className="mx-auto mt-5 block h-0.5 w-12 bg-secondary" />
          <h2
            id="brand-story-heading"
            className="mt-6 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl lg:text-5xl"
          >
            {introduction[1]}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8">
            {introduction[2]}
          </p>
          <p className="mt-4 text-sm leading-7 text-primary/80 sm:text-base">
            {introduction[3]}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {sections.map((section, index) => (
          <section
            key={section.title}
            aria-labelledby={`story-chapter-${index + 1}`}
            className="grid gap-7 border-b border-border_color py-12 last:border-b-0 sm:py-16 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16"
          >
            <div>
              <span
                aria-hidden="true"
                className="inline-flex h-12 w-12 items-center justify-center rounded border border-secondary/60 text-base font-semibold leading-none tabular-nums text-primary"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                id={`story-chapter-${index + 1}`}
                className="mt-4 text-2xl font-semibold leading-snug tracking-normal lg:text-[28px]"
              >
                {section.title}
              </h3>
            </div>

            <div className="min-w-0 space-y-5 text-base leading-8 text-primary/85">
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className={section.emphasis.includes(paragraphIndex) ? "font-semibold text-primary" : ""}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="bg-primary px-6 py-14 text-white sm:py-16 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold text-white/85">{closing[0]}</p>
          <p className="mt-5 max-w-3xl text-2xl font-semibold leading-snug sm:text-3xl">
            {closing[1]}
          </p>
          <p className="mt-5 text-base leading-8 text-white/85">{closing[2]}</p>
          <div className="mt-9 border-t border-white/20 pt-7">
            <span aria-hidden="true" className="mb-5 block h-0.5 w-12 bg-secondary" />
            <p className="whitespace-pre-line text-base font-medium leading-8">{closing[3]}</p>
          </div>
        </div>
      </footer>
    </article>
  );
}
