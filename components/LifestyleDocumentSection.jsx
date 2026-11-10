"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { ANIMATIONS_ENABLED, useNoMotion } from "@/Hooks/useNoMotion";

const ease = [0.22, 1, 0.36, 1];

function SourceText({ block, as: Tag = "p", className = "", ...props }) {
  return (
    <Tag
      {...props}
      data-source-text={block.index}
      className={`whitespace-pre-line ${className}`}
    >
      {block.runs
        ? block.runs.map((run, index) => {
            if (run.bold && run.italic) {
              return (
                <strong key={index} className="font-semibold italic">
                  {run.text}
                </strong>
              );
            }
            if (run.bold) {
              return (
                <strong key={index} className="font-semibold text-primary">
                  {run.text}
                </strong>
              );
            }
            if (run.italic) {
              return (
                <em key={index} className="italic">
                  {run.text}
                </em>
              );
            }
            return <span key={index}>{run.text}</span>;
          })
        : block.text}
    </Tag>
  );
}

// Motion owns headings, rules, badges, hero entrance, closing text and the top progress bar.
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

function ChapterBadge({ label }) {
  const reduce = useNoMotion();
  return (
    <motion.span
      aria-hidden="true"
      initial={reduce ? false : { opacity: 0, scale: 0.85 }}
      whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
      whileHover={reduce ? undefined : { y: -3, scale: 1.05 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease }}
      className="inline-flex h-14 w-14 shrink-0 items-center justify-center border border-secondary bg-white text-xl font-semibold leading-none tabular-nums text-primary shadow-[0_10px_26px_rgba(244,130,32,0.18)] lg:h-16 lg:w-16 lg:text-2xl"
    >
      {label}
    </motion.span>
  );
}

function ImageBand({ item, flip = false }) {
  return (
    <div className="py-6 sm:py-10 lg:py-14">
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
            data-lifestyle-image
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
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1330]/30 via-transparent to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// GSAP owns every [data-lifestyle-reveal] node so Motion never touches the same element.
function DocumentBlocks({ blocks }) {
  const groups = [];
  let seenLead = false;

  for (const block of blocks) {
    if (block.kind === "card-item") {
      if (groups.at(-1)?.kind === "cards") groups.at(-1).blocks.push(block);
      else groups.push({ kind: "cards", blocks: [block] });
    } else if (block.kind === "commit-heading") {
      if (groups.at(-1)?.kind !== "commitments") {
        groups.push({ kind: "commitments", items: [] });
      }
      groups.at(-1).items.push({ heading: block, bodies: [] });
    } else if (block.kind === "commit-body") {
      groups.at(-1).items.at(-1).bodies.push(block);
    } else if (block.kind === "card-heading") {
      if (groups.at(-1)?.kind !== "card-groups") {
        groups.push({ kind: "card-groups", cards: [] });
      }
      groups.at(-1).cards.push({ heading: block, bodies: [] });
    } else if (block.kind === "card-body") {
      if (
        groups.at(-1)?.kind === "card-groups" &&
        groups.at(-1).cards.length > 0
      ) {
        groups.at(-1).cards.at(-1).bodies.push(block);
      } else {
        groups.push({ kind: "single", block, isLead: false });
      }
    } else if (block.kind === "list-item") {
      if (groups.at(-1)?.kind === "list") groups.at(-1).blocks.push(block);
      else groups.push({ kind: "list", blocks: [block] });
    } else {
      const isLead = !seenLead && block.kind === "paragraph";
      if (isLead) seenLead = true;
      groups.push({ kind: "single", block, isLead });
    }
  }

  return (
    <div className="space-y-6">
      {groups.map((group) => {
        if (group.kind === "commitments") {
          return (
            <div
              key={group.items[0].heading.index}
              className="divide-y divide-primary/10 border-y border-primary/10"
            >
              {group.items.map((item) => {
                const numbered = item.heading.text.match(/^(\d+\.)(\s+)(.*)$/);
                return (
                  <div
                    key={item.heading.index}
                    data-lifestyle-reveal
                    className="flex gap-5 py-7 sm:gap-6 sm:py-8"
                  >
                    {numbered ? (
                      <span
                        aria-hidden="true"
                        className="w-10 shrink-0 text-2xl font-semibold leading-none tabular-nums text-secondary sm:w-12 sm:text-3xl"
                      >
                        {numbered[1]}
                      </span>
                    ) : (
                      <span
                        aria-hidden="true"
                        className="mt-[0.65rem] h-2.5 w-2.5 shrink-0 bg-secondary sm:mt-3"
                      />
                    )}
                    <div className="min-w-0">
                      {numbered ? (
                        <h4
                          data-source-text={item.heading.index}
                          className="text-xl font-semibold leading-snug tracking-[-0.02em] text-primary sm:text-[1.65rem]"
                        >
                          <span className="sr-only">{numbered[1]} </span>
                          {numbered[3]}
                        </h4>
                      ) : (
                        <SourceText
                          block={item.heading}
                          as="h4"
                          className="text-xl font-semibold leading-snug tracking-[-0.02em] text-primary sm:text-[1.65rem]"
                        />
                      )}
                      {item.bodies.map((body, bodyIndex) => (
                        <SourceText
                          key={body.index}
                          block={body}
                          className={`${bodyIndex === 0 ? "mt-3" : "mt-4"} text-base leading-8 text-[#4A5063] sm:text-[17px] sm:leading-9`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }

        if (group.kind === "card-groups") {
          const isOddTotal = group.cards.length % 2 === 1;
          return (
            <div
              key={group.cards[0].heading.index}
              className="grid gap-5 pt-2 sm:grid-cols-2"
            >
              {group.cards.map((card, idx) => {
                const spanFull = isOddTotal && idx === group.cards.length - 1;
                const numbered = card.heading.text.match(/^(\d+\.)(\s+)(.*)$/);
                return (
                  <div
                    key={card.heading.index}
                    data-lifestyle-reveal
                    className={`group relative flex flex-col overflow-hidden border border-primary/10 bg-white p-6 shadow-[0_12px_34px_rgba(27,35,75,0.06)] transition duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-[0_20px_48px_rgba(27,35,75,0.12)] sm:p-7 ${
                      spanFull ? "sm:col-span-2" : ""
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-[3px] w-12 bg-secondary transition-all duration-300 group-hover:w-full"
                    />
                    {numbered ? (
                      <h4
                        data-source-text={card.heading.index}
                        className="flex items-start gap-3.5 text-xl font-semibold leading-snug tracking-[-0.02em] text-primary"
                      >
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-secondary/60 bg-[#F7F5F0] text-xs font-bold tabular-nums text-primary transition-colors duration-300 group-hover:border-secondary group-hover:bg-secondary group-hover:text-white">
                          {numbered[1]}
                        </span>
                        {numbered[2]}
                        <span className="min-w-0 pt-0.5">{numbered[3]}</span>
                      </h4>
                    ) : (
                      <SourceText
                        block={card.heading}
                        as="h4"
                        className="text-xl font-semibold leading-snug tracking-[-0.02em] text-primary"
                      />
                    )}
                    <div className="mt-4 space-y-3 border-t border-primary/10 pt-4">
                      {card.bodies.map((body) => (
                        <SourceText
                          key={body.index}
                          block={body}
                          className="text-base leading-8 text-[#4A5063] sm:text-[16.5px]"
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }

        if (group.kind === "cards") {
          return (
            <div
              key={group.blocks[0].index}
              className="divide-y divide-primary/10 border-y border-primary/10"
            >
              {group.blocks.map((block) => (
                <div
                  key={block.index}
                  data-lifestyle-reveal
                  className="flex items-start gap-5 py-5 sm:gap-6 sm:py-6"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-2.5 w-2.5 shrink-0 bg-secondary sm:mt-3"
                  />
                  <SourceText
                    block={block}
                    className="min-w-0 text-base font-medium leading-8 text-[#20263A] sm:text-lg sm:leading-8"
                  />
                </div>
              ))}
            </div>
          );
        }

        if (group.kind === "list") {
          return (
            <ul
              key={group.blocks[0].index}
              className="divide-y divide-primary/10 border-y border-primary/10"
            >
              {group.blocks.map((block) => (
                <li
                  key={block.index}
                  data-lifestyle-reveal
                  className="flex items-start gap-5 py-5 sm:gap-6 sm:py-6"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-2.5 w-2.5 shrink-0 bg-secondary sm:mt-3"
                  />
                  <SourceText
                    block={block}
                    as="span"
                    className="block min-w-0 text-base font-medium leading-8 text-[#20263A] sm:text-lg sm:leading-8"
                  />
                </li>
              ))}
            </ul>
          );
        }

        const { block, isLead } = group;

        if (block.kind === "subheading") {
          return (
            <div
              key={block.index}
              data-lifestyle-reveal
              className="border-b border-primary/10 pb-4"
            >
              <SourceText
                block={block}
                as="h3"
                className="text-xl font-semibold leading-snug tracking-[-0.02em] text-primary sm:text-2xl"
              />
            </div>
          );
        }

        if (block.kind === "emphasis") {
          return (
            <div
              key={block.index}
              data-lifestyle-reveal
              className="relative border-l-[3px] border-secondary bg-white py-5 pl-6 pr-5 shadow-[0_16px_44px_rgba(27,35,75,0.07)] sm:pl-8 lg:py-6"
            >
              <SourceText
                block={block}
                className="text-xl font-semibold leading-[1.4] tracking-[-0.02em] text-primary sm:text-2xl"
              />
            </div>
          );
        }

        return (
          <SourceText
            key={block.index}
            block={block}
            data-lifestyle-reveal
            className={
              isLead
                ? "text-xl font-medium leading-9 tracking-[-0.01em] text-[#20263A] sm:text-[1.35rem] sm:leading-10"
                : "text-base leading-8 text-[#4A5063] sm:text-[17px] sm:leading-9"
            }
          />
        );
      })}
    </div>
  );
}

export default function LifestyleDocumentSection({ documentContent, slug }) {
  const { heroImage, introduction, sections, closing } = documentContent;
  const articleRef = useRef(null);
  const reduce = useNoMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
  });

  const eyebrows = introduction.filter((b) => b.kind === "eyebrow");
  const title = introduction.find((b) => b.kind === "title");
  const leads = introduction.filter((b) => b.kind === "lead");

  // GSAP owns hero parallax, image clip-path reveals, image inner parallax, outlines and body reveals.
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
          const heroBg = root.querySelector("[data-hero-bg]");
          const hero = root.querySelector("[data-hero]");
          if (heroBg && hero) {
            gsap.fromTo(
              heroBg,
              { yPercent: -5 },
              {
                yPercent: 5,
                ease: "none",
                scrollTrigger: {
                  trigger: hero,
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          }

          root.querySelectorAll("[data-lifestyle-reveal]").forEach((el) => {
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

          root.querySelectorAll("[data-lifestyle-image]").forEach((frame) => {
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

            const outline = frame.parentElement?.querySelector(
              "[data-image-outline]",
            );
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
                  scrollTrigger: {
                    trigger: frame,
                    start: "top 75%",
                    once: true,
                  },
                },
              );
            }
          });

          root.querySelectorAll("[data-lifestyle-progress]").forEach((bar) => {
            const chapter = bar.closest("[data-lifestyle-chapter]");
            if (!chapter) return;
            gsap.fromTo(
              bar,
              { scaleX: 0 },
              {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: chapter,
                  start: "top 35%",
                  end: "bottom 60%",
                  scrub: 0.3,
                },
              },
            );
          });
        });
        ScrollTrigger.refresh();
      } catch {
        media?.revert();
      }
    }

    setupAnimations();
    return () => {
      cancelled = true;
      media?.revert();
    };
  }, [slug]);

  return (
    <article
      ref={articleRef}
      data-lifestyle-slug={slug}
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
      <header
        data-hero
        className="relative isolate overflow-hidden bg-[#0B1330] text-white"
      >
        <div
          data-hero-bg
          aria-hidden="true"
          className="absolute inset-x-0 -inset-y-[12%] -z-10"
        >
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,15,40,0.92)_0%,rgba(8,15,40,0.74)_48%,rgba(8,15,40,0.28)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,15,40,0.1)_0%,rgba(8,15,40,0.05)_40%,rgba(8,15,40,0.86)_100%)]" />
        <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[360px] w-[360px] rounded-full bg-secondary/15 blur-[130px]" />
        <div className="pointer-events-none absolute inset-x-5 bottom-5 top-5 -z-10 hidden border border-white/10 lg:block" />

        <div className="site-shell flex min-h-[540px] flex-col justify-end py-14 sm:min-h-[580px] sm:py-16 lg:min-h-[calc(100svh-200px)] lg:py-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span aria-hidden="true" className="h-px w-14 bg-[#F7A55A]" />
              {eyebrows.map((block) => (
                <SourceText
                  key={block.index}
                  block={block}
                  className="text-sm font-bold tracking-[0.3em] text-[#F7A55A] [&_strong]:text-current"
                />
              ))}
            </div>

            {title && (
              <SourceText
                block={title}
                as="h1"
                className="mt-7 max-w-5xl text-[clamp(2.2rem,5.2vw,4.85rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-white [&_strong]:text-current"
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
                        ? "max-w-xl text-lg font-medium leading-8 text-white/90 sm:text-xl sm:leading-9 [&_strong]:text-current"
                        : "max-w-md text-base leading-8 text-white/75 sm:text-lg md:justify-self-end [&_strong]:text-current"
                    }
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </header>

      {/* Sections */}
      {sections.map((section, sectionIndex) => {
        const flip = sectionIndex % 2 === 1;
        const badgeLabel = section.heading?.badge || section.badge;
        const hasHeading = Boolean(section.heading);
        const headingId = hasHeading
          ? `lifestyle-section-${section.heading.index}`
          : undefined;
        const numberedHeading =
          !badgeLabel && hasHeading
            ? section.heading.text.match(/^(\d+\.)(\s+)(.*)$/)
            : null;

        return (
          <div
            key={hasHeading ? section.heading.index : `sec-${sectionIndex}`}
            className={flip ? "bg-[#F7F5F0]" : "bg-white"}
          >
            {section.topBand && <ImageBand item={section.topBand} flip={flip} />}

            <section
              data-lifestyle-chapter
              aria-labelledby={headingId}
              className="relative overflow-x-clip py-14 sm:py-18 lg:py-24"
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute top-16 hidden h-[420px] w-[420px] rounded-full border border-primary/[0.06] lg:block ${
                  flip ? "-left-40" : "-right-40"
                }`}
              />

              <div className="site-shell relative grid gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-24">
                <div className={hasHeading ? "lg:col-span-5" : "lg:col-span-3"}>
                  <div className="lg:sticky lg:top-44">
                    <Reveal>
                      <Rule />
                      {numberedHeading ? (
                        <h2
                          id={headingId}
                          data-source-text={section.heading.index}
                          className="mt-6 flex items-start gap-4 text-3xl font-semibold leading-[1.12] tracking-[-0.035em] text-[#17203A] sm:text-4xl lg:block lg:text-[2.35rem]"
                        >
                          <span className="lg:mb-6 lg:block">
                            <ChapterBadge label={numberedHeading[1]} />
                          </span>
                          {numberedHeading[2]}
                          <span className="block min-w-0 pt-1 lg:pt-0">
                            {numberedHeading[3]}
                          </span>
                        </h2>
                      ) : (
                        <div className="mt-6 flex items-start gap-4 lg:block">
                          {badgeLabel && (
                            <div className="lg:mb-6">
                              <ChapterBadge label={badgeLabel} />
                            </div>
                          )}
                          {hasHeading && (
                            <SourceText
                              block={section.heading}
                              as="h2"
                              id={headingId}
                              className="min-w-0 pt-1 text-3xl font-semibold leading-[1.12] tracking-[-0.035em] text-[#17203A] sm:text-4xl lg:pt-0 lg:text-[2.35rem]"
                            />
                          )}
                        </div>
                      )}
                    </Reveal>

                    <span
                      aria-hidden="true"
                      className="mt-6 hidden h-0.5 w-24 overflow-hidden bg-primary/10 lg:block"
                    >
                      <span
                        data-lifestyle-progress
                        className="block h-full w-full origin-left bg-secondary"
                      />
                    </span>
                  </div>
                </div>

                <div
                  className={
                    hasHeading
                      ? "lg:col-span-7 lg:pt-2"
                      : "lg:col-span-9 lg:pt-2"
                  }
                >
                  <DocumentBlocks blocks={section.blocks} />
                </div>
              </div>
            </section>

            {section.bottomBand && (
              <ImageBand item={section.bottomBand} flip={!flip} />
            )}
          </div>
        );
      })}

      {/* Closing */}
      {closing.length > 0 && (
        <footer className="relative isolate overflow-hidden bg-[#0B1330] py-20 text-white sm:py-24 lg:py-32">
          <Image
            src={heroImage}
            alt=""
            fill
            sizes="100vw"
            className="-z-10 object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(11,19,48,0.95)_0%,rgba(44,58,131,0.78)_100%)]" />
          <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-secondary/15 blur-[130px]" />

          <div className="site-shell">
            {closing[0]?.kind === "closing-manifesto" ? (
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.65fr)] lg:items-end lg:gap-20">
                <Reveal>
                  <Rule light />
                  <SourceText
                    block={closing[0]}
                    className="mt-7 max-w-4xl text-xl leading-8 text-white/85 sm:text-2xl sm:leading-9 [&_strong]:mb-3 [&_strong]:block [&_strong]:text-3xl [&_strong]:font-semibold [&_strong]:not-italic [&_strong]:tracking-[0.08em] [&_strong]:text-[#F7A55A] sm:[&_strong]:text-4xl"
                  />
                </Reveal>
                {closing[1] && (
                  <Reveal
                    delay={0.14}
                    className="border-t border-white/25 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
                  >
                    <Rule light />
                    <SourceText
                      block={closing[1]}
                      className="mt-6 text-xl font-semibold tracking-[0.06em] text-white sm:text-2xl [&_strong]:text-white"
                    />
                  </Reveal>
                )}
              </div>
            ) : (
              <>
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span aria-hidden="true" className="h-px w-14 bg-[#F7A55A]" />
                    {closing[0] && (
                      <SourceText
                        block={closing[0]}
                        className="text-sm font-bold tracking-[0.32em] text-[#F7A55A] [&_strong]:text-current"
                      />
                    )}
                  </div>
                </Reveal>

                <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.65fr)] lg:items-end lg:gap-20">
                  <div className="space-y-6">
                    {closing.slice(1, 4).map((block, index) => {
                      const classMap = {
                        "closing-title":
                          "max-w-4xl text-3xl font-semibold leading-[1.15] tracking-[-0.035em] text-white sm:text-5xl [&_strong]:text-white",
                        "closing-italic":
                          "max-w-2xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9",
                        "closing-bold":
                          "text-xl font-semibold tracking-[-0.01em] text-[#F7A55A] sm:text-2xl [&_strong]:text-[#F7A55A]",
                      };
                      return (
                        <Reveal key={block.index} delay={0.05 + index * 0.07}>
                          <SourceText
                            block={block}
                            className={
                              classMap[block.kind] || "text-lg text-white/85"
                            }
                          />
                        </Reveal>
                      );
                    })}
                  </div>

                  {closing.length > 4 && (
                    <Reveal
                      delay={0.22}
                      className="border-t border-white/25 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
                    >
                      <Rule light />
                      <div className="mt-6 space-y-3">
                        {closing.slice(4).map((block) => (
                          <SourceText
                            key={block.index}
                            block={block}
                            className={
                              block.kind === "closing-org"
                                ? "text-xl font-semibold tracking-[0.06em] text-white [&_strong]:text-white"
                                : "text-base leading-7 text-white/75"
                            }
                          />
                        ))}
                      </div>
                    </Reveal>
                  )}
                </div>
              </>
            )}
          </div>
        </footer>
      )}
    </article>
  );
}