"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { ANIMATIONS_ENABLED, useNoMotion } from "@/Hooks/useNoMotion";
import { finalRenderAssets } from "@/data/finalRendersData";

// Visual only (no words): full-width image bands placed between chapters, per page.
// `ratio` is the desktop width/height, `mobileRatio` the phone one. Parallax overscan
// crops vertically, so plans/maps keep `parallax: false` to stay fully visible.
const band = (src, ratio = 1.6, extra = {}) => ({ src, ratio, mobileRatio: 1.2, parallax: true, ...extra });
const pageBands = {
  "residential-development": [
    band(finalRenderAssets.premiumBlock, 1.6),
    band(finalRenderAssets.exclusiveBlock, 1.6),
    band(finalRenderAssets.riverPremiumPlus, 1.6),
  ],
  "development-phasing": [
    band(finalRenderAssets.masterplan, 2.14, { parallax: false, mobileRatio: 1.3, position: "70% 50%" }),
    band(finalRenderAssets.amenities, 1.6),
    band(finalRenderAssets.location, 1.6),
  ],
  "transportation-utilities": [
    band("/road/road-network-plan.jpg", 1.6, { parallax: false }),
    band("/road/pedestrian-network-plan.jpg", 1.6, { parallax: false }),
    band("/road/road.jpg", 1.78),
  ],
  "education-healthcare": [
    band(finalRenderAssets.university, 1.6),
    band(finalRenderAssets.stadium, 1.6),
    band(finalRenderAssets.mosque, 1.6),
  ],
  "commercial-development": [
    band(finalRenderAssets.megaMall_Hub, 1.6),
    band(finalRenderAssets.shopping, 1.6),
    band(finalRenderAssets.billboard, 2.07, { mobileRatio: 1.4 }),
  ],
  "green-blue-master-plan": [
    band(finalRenderAssets.forestWalk, 1.6),
    band(finalRenderAssets.lake, 1.6),
    band(finalRenderAssets.farming, 1.6),
  ],
};
const BAND_AFTER = [1, 3, 5];

const ease = [0.22, 1, 0.36, 1];

function SourceText({ block, as: Tag = "p", className = "", ...props }) {
  return (
    <Tag {...props} data-source-text={block.index} className={`whitespace-pre-line ${className}`}>
      {block.runs
        ? block.runs.map((run, index) => {
            let text = run.text;
            if (run.italic) text = <em>{text}</em>;
            return run.bold ? (
              <strong key={index} className="font-semibold">
                {text}
              </strong>
            ) : (
              <span key={index}>{text}</span>
            );
          })
        : block.text}
    </Tag>
  );
}

// Motion owns text, rules, hero entrance, badges and the progress bar.
function Reveal({ children, className = "", delay = 0, as = "div", ...rest }) {
  const reduce = useNoMotion();
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
  const reduce = useNoMotion();
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

// GSAP owns every [data-plan-reveal] element, so Motion never touches the same node.
function Paragraph({ block }) {
  return (
    <SourceText
      block={block}
      data-plan-reveal
      className="text-base leading-8 text-[#4A5063] sm:text-[17px] sm:leading-9"
    />
  );
}

function Allocation({ block }) {
  return (
    <div data-plan-reveal className="relative overflow-hidden border border-secondary/30 bg-white shadow-[0_14px_40px_rgba(27,35,75,0.08)]">
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-secondary" />
      <SourceText
        block={block}
        className="px-7 py-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-primary sm:text-4xl"
      />
    </div>
  );
}

function ListBlock({ blocks }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {blocks.map((block) => (
        <li
          key={block.index}
          data-plan-reveal
          className="group relative flex gap-4 border border-primary/10 bg-white p-5 shadow-[0_10px_30px_rgba(27,35,75,0.05)] transition duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-[0_18px_45px_rgba(27,35,75,0.11)]"
        >
          <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 bg-secondary transition duration-300 group-hover:scale-150" />
          <SourceText block={block} as="span" className="block text-base font-medium leading-7 text-[#20263A]" />
        </li>
      ))}
    </ul>
  );
}

// Subheading + the blocks that follow it become one card; DOM order is unchanged.
function SubGroup({ heading, blocks }) {
  return (
    <div data-plan-reveal className="border border-primary/10 bg-white p-6 shadow-[0_14px_40px_rgba(27,35,75,0.07)] sm:p-8">
      <span aria-hidden="true" className="mb-5 block h-[3px] w-10 bg-secondary" />
      <SourceText
        block={heading}
        as="h4"
        className="text-xl font-semibold leading-snug tracking-[-0.02em] text-primary sm:text-2xl"
      />
      <div className="mt-5 space-y-5">
        <DocumentBlocks blocks={blocks} nested />
      </div>
    </div>
  );
}

function DocumentBlocks({ blocks, nested = false }) {
  const items = [];
  let group = null;
  for (const block of blocks) {
    if (!nested && block.kind === "subheading") {
      group = { kind: "sub", heading: block, blocks: [] };
      items.push(group);
    } else if (group && !nested) {
      group.blocks.push(block);
    } else if (block.kind === "list-item") {
      if (items.at(-1)?.kind === "list") items.at(-1).blocks.push(block);
      else items.push({ kind: "list", blocks: [block] });
    } else {
      items.push({ kind: "block", block });
    }
  }

  return (
    <>
      {items.map((item) => {
        if (item.kind === "sub") return <SubGroup key={item.heading.index} heading={item.heading} blocks={item.blocks} />;
        if (item.kind === "list") return <ListBlock key={item.blocks[0].index} blocks={item.blocks} />;
        const { block } = item;
        if (block.kind === "subheading") {
          return (
            <SourceText
              key={block.index}
              block={block}
              as="h4"
              data-plan-reveal
              className="text-xl font-semibold leading-snug tracking-[-0.02em] text-primary sm:text-2xl"
            />
          );
        }
        if (block.kind === "allocation") return <Allocation key={block.index} block={block} />;
        return <Paragraph key={block.index} block={block} />;
      })}
    </>
  );
}

function SectionHeading({ block }) {
  const reduce = useNoMotion();
  const numbered = block.text.match(/^(\d+\.)(\s+)(.*)$/);
  const headingClass =
    "text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-[#17203A] sm:text-4xl lg:text-[2.35rem]";
  if (!numbered) {
    return <SourceText block={block} as="h2" id={`plan-section-${block.index}`} className={headingClass} />;
  }
  return (
    <h2 id={`plan-section-${block.index}`} data-source-text={block.index} className={`${headingClass} flex items-start gap-4 lg:block`}>
      <motion.span
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
        whileHover={reduce ? undefined : { y: -3, scale: 1.05 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="inline-flex h-14 w-14 shrink-0 items-center justify-center border border-secondary bg-white text-xl font-semibold leading-none tabular-nums text-primary shadow-[0_10px_26px_rgba(244,130,32,0.18)] lg:mb-6 lg:flex lg:h-16 lg:w-16 lg:text-2xl"
      >
        {numbered[1]}
      </motion.span>
      {numbered[2]}
      <span className="block min-w-0 pt-1 lg:pt-0">{numbered[3]}</span>
    </h2>
  );
}

function ImageBand({ item, flip }) {
  return (
    <div className="bg-white py-6 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-[1440px] sm:px-6 lg:px-8">
        <div className="relative">
          <div
            data-image-outline
            aria-hidden="true"
            className={`pointer-events-none absolute -bottom-4 hidden h-full w-full border border-secondary/60 lg:block ${
              flip ? "-left-4" : "-right-4"
            }`}
          />
          <div
            data-plan-image
            className="group relative aspect-[var(--ar-m)] w-full overflow-hidden bg-slate-200 shadow-[0_28px_70px_rgba(27,35,75,0.22)] sm:aspect-[var(--ar)]"
            style={{ "--ar": item.ratio, "--ar-m": item.mobileRatio }}
          >
            <div
              data-parallax={item.parallax ? "" : undefined}
              className={`absolute inset-x-0 ${item.parallax ? "-inset-y-[7%]" : "inset-y-0"}`}
            >
              <Image
                src={item.src}
                alt=""
                fill
                quality={85}
                sizes="(min-width: 1536px) 1376px, 100vw"
                className="object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.04]"
                style={{ objectPosition: item.position || "center" }}
              />
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1330]/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MasterplanDocumentSection({ documentContent, slug }) {
  const { introduction, sections, closing } = documentContent;
  const articleRef = useRef(null);
  const reduce = useNoMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });
  const heroImage = finalRenderAssets[documentContent.image];
  const bands = pageBands[slug] || [];

  const eyebrows = introduction.filter((b) => b.kind !== "title" && (b.text === "ANONDO BHUBON" || b.text.startsWith("CHAPTER ")));
  const title = introduction.find((b) => b.kind === "title");
  const leads = introduction.filter((b) => b.kind !== "title" && !eyebrows.includes(b));

  // GSAP owns images (clip-path reveal, parallax, outline), hero parallax and the staggered content.
  useEffect(() => {
    if (!ANIMATIONS_ENABLED) return;
    let cancelled = false;
    let media;

    async function setupAnimations() {
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([
          import("gsap"),
          import("gsap/dist/ScrollTrigger"),
          document.fonts.ready,
        ]);
        if (cancelled || !articleRef.current) return;

        gsap.registerPlugin(ScrollTrigger);
        const root = articleRef.current;
        media = gsap.matchMedia(root);
        media.add("(prefers-reduced-motion: no-preference)", () => {
          gsap.fromTo(
            root.querySelector("[data-hero-bg]"),
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: { trigger: root.querySelector("[data-hero]"), start: "top top", end: "bottom top", scrub: true },
            },
          );

          // Elements already on screen (including restored scroll positions) stay still.
          root.querySelectorAll("[data-plan-reveal]").forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
            gsap.fromTo(
              el,
              { opacity: 0, y: 24 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                clearProps: "opacity,transform",
                scrollTrigger: { trigger: el, start: "top 90%", once: true },
              },
            );
          });

          root.querySelectorAll("[data-plan-image]").forEach((frame) => {
            gsap.fromTo(
              frame,
              { clipPath: "inset(12% 8% 12% 8%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                scrollTrigger: { trigger: frame, start: "top 92%", end: "top 35%", scrub: 0.6 },
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
                  scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: 0.5 },
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

          root.querySelectorAll("[data-plan-progress]").forEach((bar) => {
            gsap.fromTo(
              bar,
              { scaleX: 0 },
              {
                scaleX: 1,
                ease: "none",
                scrollTrigger: { trigger: bar.closest("[data-plan-chapter]"), start: "top 35%", end: "bottom 60%", scrub: 0.3 },
              },
            );
          });
        });
        ScrollTrigger.refresh();
      } catch {
        // Animation chunks are optional; the complete document stays visible if they fail.
        media?.revert();
      }
    }

    setupAnimations();
    return () => {
      cancelled = true;
      media?.revert();
    };
  }, [documentContent.sourceFile]);

  return (
    <article
      ref={articleRef}
      data-source-document={documentContent.sourceFile}
      className="relative bg-white tracking-normal text-primary"
    >
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
          <Image src={heroImage} alt="" fill priority quality={80} sizes="100vw" className="object-cover object-center" />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,15,40,0.92)_0%,rgba(8,15,40,0.74)_48%,rgba(8,15,40,0.3)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,15,40,0.1)_0%,rgba(8,15,40,0.05)_40%,rgba(8,15,40,0.85)_100%)]" />
        <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[360px] w-[360px] rounded-full bg-secondary/15 blur-[130px]" />
        <div className="pointer-events-none absolute inset-x-5 bottom-5 top-5 -z-10 hidden border border-white/10 lg:block" />

        <div className="site-shell flex min-h-[560px] flex-col justify-end py-14 sm:min-h-[600px] sm:py-16 lg:min-h-[calc(100svh-200px)] lg:py-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span aria-hidden="true" className="h-px w-14 bg-[#F7A55A]" />
              {eyebrows.map((block) => (
                <SourceText key={block.index} block={block} className="text-sm font-bold tracking-[0.3em] text-[#F7A55A]" />
              ))}
            </div>
            {title && (
              <SourceText
                block={title}
                as="h1"
                className="mt-7 max-w-5xl text-[clamp(2.2rem,5.4vw,5rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-white"
              />
            )}
            {leads.length > 0 && (
              <div className="mt-10 grid gap-6 border-t border-white/20 pt-7 md:grid-cols-2 md:gap-14 lg:mt-14">
                {leads.map((block, index) => (
                  <SourceText
                    key={block.index}
                    block={block}
                    className={
                      index === 0
                        ? "max-w-xl text-lg font-medium leading-8 text-white/90 sm:text-xl sm:leading-9"
                        : "max-w-md text-base leading-8 text-white/70 sm:text-lg md:justify-self-end"
                    }
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </header>

      {/* Chapters */}
      {sections.map((section, sectionIndex) => {
        const flip = sectionIndex % 2 === 1;
        const bandIndex = BAND_AFTER.indexOf(sectionIndex);
        const bandItem = bandIndex >= 0 ? bands[bandIndex] : null;
        const metrics = section.layout === "metrics";
        return (
          <div key={section.heading.index}>
            <section
              data-plan-chapter
              aria-labelledby={`plan-section-${section.heading.index}`}
              className={`relative overflow-x-clip py-16 sm:py-20 lg:py-24 ${
                section.notes ? "bg-[#EEF0F8]" : flip ? "bg-[#F7F5F0]" : "bg-white"
              }`}
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute top-16 hidden h-[420px] w-[420px] rounded-full border border-primary/[0.06] lg:block ${
                  flip ? "-left-40" : "-right-40"
                }`}
              />
              <div
                className={`site-shell relative ${
                  metrics ? "" : "grid gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-24"
                }`}
              >
                <div className={metrics ? "max-w-3xl" : "lg:col-span-5"}>
                  <div className={metrics ? "" : "lg:sticky lg:top-44"}>
                    <Reveal>
                      <Rule />
                      <div className="mt-6">
                        <SectionHeading block={section.heading} />
                      </div>
                    </Reveal>
                    <span aria-hidden="true" className="mt-6 hidden h-0.5 w-24 overflow-hidden bg-primary/10 lg:block">
                      <span data-plan-progress className="block h-full w-full origin-left bg-secondary" />
                    </span>
                  </div>
                </div>

                <div className={metrics ? "mt-12" : "space-y-6 lg:col-span-7 lg:pt-2"}>
                  {metrics ? (
                    <>
                      <div className="grid gap-5 sm:grid-cols-3">
                        {[0, 2, 4].map((index) => (
                          <div
                            key={index}
                            data-plan-reveal
                            className="relative border border-primary/10 bg-white p-7 shadow-[0_14px_40px_rgba(27,35,75,0.07)]"
                          >
                            <SourceText block={section.blocks[index]} className="text-5xl font-semibold leading-tight tracking-[-0.03em] text-primary" />
                            <span aria-hidden="true" className="mt-5 block h-[3px] w-8 bg-secondary" />
                            <SourceText block={section.blocks[index + 1]} className="mt-4 text-base leading-7 text-[#4A5063]" />
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 max-w-4xl space-y-6">
                        <DocumentBlocks blocks={section.blocks.slice(6)} />
                      </div>
                    </>
                  ) : (
                    <DocumentBlocks blocks={section.blocks} />
                  )}
                </div>
              </div>
            </section>
            {bandItem && <ImageBand item={bandItem} flip={flip} />}
          </div>
        );
      })}

      {/* Closing */}
      {closing.length > 0 && (
        <footer className="relative isolate overflow-hidden bg-[#0B1330] py-20 text-white sm:py-24 lg:py-32">
          <Image src={heroImage} alt="" fill sizes="100vw" className="-z-10 object-cover object-center opacity-25" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(11,19,48,0.95)_0%,rgba(44,58,131,0.78)_100%)]" />
          <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-secondary/15 blur-[130px]" />

          <div className="site-shell">
            <Reveal>
              <Rule light />
            </Reveal>
            <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.6fr)] lg:items-end lg:gap-20">
              <div className="space-y-6">
                {closing.slice(0, -1).map((block, index) => (
                  <Reveal
                    key={block.index}
                    delay={index * 0.08}
                    className={
                      index === 1 || closing.length === 2
                        ? "max-w-4xl text-3xl font-semibold leading-[1.15] tracking-[-0.035em] sm:text-5xl"
                        : "text-base font-semibold tracking-[0.2em] text-[#F7A55A] sm:text-lg"
                    }
                  >
                    <SourceText block={block} />
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.2} className="border-t border-white/25 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <SourceText block={closing.at(-1)} className="text-xl font-semibold leading-8 tracking-[-0.01em] text-white" />
              </Reveal>
            </div>
          </div>
        </footer>
      )}
    </article>
  );
}
