"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import brandStory from "@/data/brandStoryData.json";
import { finalRenderAssets } from "@/data/finalRendersData";

// Visual only: one render per chapter, in the same order as brandStory.sections.
// `ratio` is the frame's width/height. Parallax overscan crops the image vertically,
// so it is switched off for the masterplan to keep the whole plan visible.
// `mobileRatio` makes the frame taller on phones; `position` keeps the focal point in view.
const chapterImages = [
  { src: finalRenderAssets.forestWalk, ratio: 1.6, mobileRatio: 1.2, parallax: true },
  { src: finalRenderAssets.masterplan, ratio: 2.14, mobileRatio: 1.3, parallax: false, position: "70% 50%" },
  { src: finalRenderAssets.riverside, ratio: 1.6, mobileRatio: 1.2, parallax: true },
  { src: finalRenderAssets.megaMall_Hub, ratio: 1.6, mobileRatio: 1.2, parallax: true },
  { src: finalRenderAssets.amenities, ratio: 1.6, mobileRatio: 1.2, parallax: true },
  { src: finalRenderAssets.courtyardPremiumPlus, ratio: 1.6, mobileRatio: 1.2, parallax: true },
];

const ease = [0.22, 1, 0.36, 1];

// Motion owns text, rules, hero entrance and the progress bar.
function Reveal({ children, className = "", delay = 0, as = "div", ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Rule({ light = false }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden="true"
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={reduce ? undefined : { scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease }}
      className={`block h-[3px] w-14 origin-left ${light ? "bg-[#F7A55A]" : "bg-secondary"}`}
    />
  );
}

function ChapterParagraph({ text, kind }) {
  const reduce = useReducedMotion();
  if (kind === "quote") {
    return (
      <Reveal
        as="p"
        whileHover={reduce ? undefined : { x: 6 }}
        className="relative border-l-[3px] border-secondary bg-white py-5 pl-6 pr-4 text-2xl font-semibold leading-[1.35] tracking-[-0.02em] text-primary shadow-[0_16px_44px_rgba(27,35,75,0.07)] sm:pl-8 sm:text-[1.7rem] lg:py-6"
      >
        {text}
      </Reveal>
    );
  }
  if (kind === "lead") {
    return (
      <Reveal
        as="p"
        className="text-xl font-medium leading-9 tracking-[-0.01em] text-[#20263A] sm:text-[1.4rem] sm:leading-10"
      >
        {text}
      </Reveal>
    );
  }
  return (
    <Reveal as="p" className="text-base leading-8 text-[#4A5063] sm:text-[17px] sm:leading-9">
      {text}
    </Reveal>
  );
}

export default function BrandStorySection() {
  const { introduction, sections, closing } = brandStory;
  const articleRef = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
  const [signatory, ...signatoryRoles] = closing[3].split("\n");

  // GSAP owns the images: clip-path reveal, parallax, offset frame and hero background.
  useEffect(() => {
    let cancelled = false;
    let media;

    async function setupImageAnimations() {
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import("gsap"),
          import("gsap/dist/ScrollTrigger"),
          document.fonts.ready,
        ]);
        if (cancelled || !articleRef.current) return;

        gsap.registerPlugin(ScrollTrigger);
        media = gsap.matchMedia(articleRef.current);
        media.add("(prefers-reduced-motion: no-preference)", () => {
          const root = articleRef.current;

          gsap.fromTo(
            root.querySelector("[data-hero-bg]"),
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: {
                trigger: root.querySelector("[data-hero]"),
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            },
          );

          root.querySelectorAll("[data-chapter-image]").forEach((frame) => {
            gsap.fromTo(
              frame,
              { clipPath: "inset(12% 8% 12% 8%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                scrollTrigger: {
                  trigger: frame,
                  start: "top 92%",
                  end: "top 35%",
                  scrub: 0.6,
                },
              },
            );

            const parallax = frame.querySelector("[data-parallax]");
            if (parallax) {
              gsap.fromTo(
                parallax,
                { yPercent: -5 },
                {
                  yPercent: 5,
                  ease: "none",
                  scrollTrigger: {
                    trigger: frame,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                  },
                },
              );
            }

            const outline = frame.parentElement.querySelector("[data-image-outline]");
            if (outline) {
              gsap.fromTo(
                outline,
                { opacity: 0, x: -18, y: -18 },
                {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: { trigger: frame, start: "top 75%", once: true },
                },
              );
            }
          });
        });
        ScrollTrigger.refresh();
      } catch {
        // Animation chunks are optional; the images stay visible if loading fails.
        media?.revert();
      }
    }

    setupImageAnimations();
    return () => {
      cancelled = true;
      media?.revert();
    };
  }, []);

  return (
    <article ref={articleRef} aria-labelledby="brand-story-heading" className="relative bg-white text-primary">
      {!reduce && (
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="fixed inset-x-0 top-0 z-[65] h-[3px] origin-left bg-secondary"
        />
      )}

      {/* Hero */}
      <header data-hero className="relative isolate overflow-hidden bg-[#0B1330] text-white">
        <div data-hero-bg aria-hidden="true" className="absolute inset-x-0 -inset-y-[12%] -z-10">
          <Image
            src={finalRenderAssets.lake}
            alt=""
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,15,40,0.92)_0%,rgba(8,15,40,0.72)_45%,rgba(8,15,40,0.25)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,15,40,0.1)_0%,rgba(8,15,40,0.05)_40%,rgba(8,15,40,0.85)_100%)]" />
        <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[360px] w-[360px] rounded-full bg-secondary/15 blur-[130px]" />
        <div className="pointer-events-none absolute inset-x-5 bottom-5 top-5 -z-10 hidden border border-white/10 lg:block" />

        <div className="site-shell flex min-h-[600px] flex-col justify-end py-14 sm:min-h-[640px] sm:py-16 lg:min-h-[calc(100svh-152px)] lg:py-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-14 bg-[#F7A55A]" />
              <p className="text-sm font-bold tracking-[0.32em] text-[#F7A55A]">{introduction[0]}</p>
            </div>
            <h1
              id="brand-story-heading"
              className="mt-7 max-w-5xl text-[clamp(2.4rem,6vw,5.6rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white"
            >
              {introduction[1]}
            </h1>
            <div className="mt-10 grid gap-6 border-t border-white/20 pt-7 md:grid-cols-2 md:gap-14 lg:mt-14">
              <p className="max-w-xl text-lg font-medium leading-8 text-white/90 sm:text-xl sm:leading-9">
                {introduction[2]}
              </p>
              <p className="max-w-md text-base leading-8 text-white/70 sm:text-lg md:justify-self-end">
                {introduction[3]}
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Chapters: title, large full-width image, then the text */}
      {sections.map((section, index) => {
        const flip = index % 2 === 1;
        const image = chapterImages[index];
        return (
          <section
            key={section.title}
            aria-labelledby={`story-chapter-${index + 1}`}
            className={`relative overflow-hidden py-16 sm:py-20 lg:py-28 ${
              flip ? "bg-[#F7F5F0]" : "bg-white"
            }`}
          >
            <div className="site-shell">
              <Reveal>
                <Rule />
                <h2
                  id={`story-chapter-${index + 1}`}
                  className="mt-6 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-[#17203A] sm:text-4xl lg:text-5xl"
                >
                  {section.title}
                </h2>
              </Reveal>
            </div>

            <div className="mx-auto mt-10 max-w-[1440px] sm:px-6 lg:mt-14 lg:px-8">
              <div className="relative">
                <div
                  data-image-outline
                  aria-hidden="true"
                  className={`pointer-events-none absolute -bottom-4 hidden h-full w-full border border-secondary/60 lg:block ${
                    flip ? "-left-4" : "-right-4"
                  }`}
                />
                <div
                  data-chapter-image
                  className="group relative aspect-[var(--ar-m)] w-full overflow-hidden bg-slate-200 shadow-[0_28px_70px_rgba(27,35,75,0.22)] sm:aspect-[var(--ar)]"
                  style={{ "--ar": image.ratio, "--ar-m": image.mobileRatio }}
                >
                  <div
                    data-parallax={image.parallax ? "" : undefined}
                    className={`absolute inset-x-0 ${image.parallax ? "-inset-y-[7%]" : "inset-y-0"}`}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      quality={85}
                      sizes="(min-width: 1536px) 1376px, 100vw"
                      className="object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.04]"
                      style={{ objectPosition: image.position || "center" }}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1330]/35 via-transparent to-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="site-shell mt-12 grid lg:mt-16 lg:grid-cols-12">
              <div
                className={`space-y-7 lg:col-span-8 ${flip ? "lg:col-start-1" : "lg:col-start-5"}`}
              >
                {section.paragraphs.map((paragraph, paragraphIndex) => {
                  const isQuote = section.emphasis.includes(paragraphIndex);
                  const kind = isQuote ? "quote" : paragraphIndex === 0 ? "lead" : "body";
                  return <ChapterParagraph key={paragraphIndex} text={paragraph} kind={kind} />;
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Closing */}
      <footer className="relative isolate overflow-hidden bg-[#0B1330] py-20 text-white sm:py-24 lg:py-32">
        <Image
          src={finalRenderAssets.forestWalkAlternate}
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(11,19,48,0.95)_0%,rgba(44,58,131,0.78)_100%)]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-secondary/15 blur-[130px]" />

        <div className="site-shell">
          <Reveal>
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-14 bg-[#F7A55A]" />
              <p className="text-sm font-bold tracking-[0.32em] text-[#F7A55A]">{closing[0]}</p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.7fr)] lg:items-end lg:gap-20">
            <div>
              <Reveal
                as="p"
                delay={0.05}
                className="max-w-4xl text-3xl font-semibold leading-[1.15] tracking-[-0.035em] sm:text-5xl lg:text-[3.4rem]"
              >
                {closing[1]}
              </Reveal>
              <Reveal
                as="p"
                delay={0.15}
                className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9"
              >
                {closing[2]}
              </Reveal>
            </div>

            <Reveal delay={0.2} className="border-t border-white/25 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <Rule light />
              <p className="mt-6 text-2xl font-semibold tracking-[-0.02em]">{signatory}</p>
              {signatoryRoles.map((role) => (
                <p key={role} className="mt-2 text-base leading-7 text-white/70">
                  {role}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </footer>
    </article>
  );
}
