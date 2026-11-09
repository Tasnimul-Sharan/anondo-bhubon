"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiChevronDown,
  FiChevronRight,
  FiClock,
  FiGlobe,
  FiMail,
  FiPhoneCall,
  FiUser,
} from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import {
  lifestyleOverview,
  lifestylePreviews,
} from "@/data/lifestylePreviewData";
import { masterplanPreviews } from "@/data/masterplanPreviewData";

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    id: "who-we-are",
    name: "Who We Are",
    submenu: [
      // { name: "Our Company", path: "/about#our-company" },
      { name: "Brand Story", path: "/brand-story" },
      // { name: "Our Vision & Mission", path: "/vision-mission" },
      // { name: "Our Core Values", path: "/core-values" },
    ],
  },
  {
    id: "master-plan",
    name: "Master Plan",
    submenu: [
      ...masterplanPreviews.map(({ slug, title }) => ({
        name: title,
        path: `/masterplan/${slug}`,
      })),
      // { name: "Master Plan Overview", path: "/masterplan" },
    ],
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    wide: true,
    submenu: [
      // {
      //   name: lifestyleOverview.title,
      //   path: lifestyleOverview.path,
      //   featured: "top",
      // },
      ...lifestylePreviews.map(({ slug, number, title }) => ({
        number,
        name: title,
        path: `/lifestyle/${slug}`,
      })),
      {
        name: "Lifestyle Amenities",
        path: "/lifestyle-amenities",
        featured: "bottom",
      },
    ],
  },
  // {
  //   name: "NRB Services",
  //   path: "/nrb",
  // },
  {
    name: "Certifications",
    path: "/certification",
  },
  {
    name: "Policies",
    submenu: [
      // {
      //   name: "Client Portal",
      //   path: "/login",
      // },
      // {
      //   name: "Career Opportunities",
      //   path: "/career-opportunities",
      // },
      {
        name: "Payment Procedures",
        path: "/payment-procedures",
      },
      {
        name: "Terms and Conditions",
        path: "/terms-and-conditions",
      },
      {
        name: "Privacy Policy",
        path: "/privacy-policy",
      },
    ],
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/anondobhuban",
    label: "Facebook",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/anondo-bhubon/",
    label: "LinkedIn",
  },
];

let googleTranslatePromise;

function loadGoogleTranslate() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.google?.translate?.TranslateElement) {
    return Promise.resolve();
  }

  if (googleTranslatePromise) {
    return googleTranslatePromise;
  }

  googleTranslatePromise = new Promise((resolve, reject) => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,bn",
          autoDisplay: false,
        },
        "google_translate_element",
      );

      resolve();
    };

    const existingScript = document.querySelector(
      'script[src*="translate.google.com/translate_a/element.js"]',
    );

    if (existingScript) {
      existingScript.addEventListener("load", resolve, {
        once: true,
      });

      existingScript.addEventListener("error", reject, {
        once: true,
      });

      return;
    }

    const script = document.createElement("script");

    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = reject;

    document.body.appendChild(script);
  });

  return googleTranslatePromise;
}

async function handleLanguageChange(event) {
  const selectedLanguage = event.target.value;

  if (!selectedLanguage) return;

  try {
    await loadGoogleTranslate();

    const translateSelect = document.querySelector(".goog-te-combo");

    if (!translateSelect) return;

    translateSelect.value = selectedLanguage;

    translateSelect.dispatchEvent(
      new Event("change", {
        bubbles: true,
      }),
    );
  } catch (error) {
    console.error("Google Translate could not be loaded:", error);
  }
}

function DesktopDropdown({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const submenuRef = useRef(null);
  const submenuId = `desktop-${item.id}`;

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setIsOpen(true);
      }}
      onPointerLeave={(event) => {
        if (
          event.pointerType === "mouse" &&
          !event.currentTarget.contains(document.activeElement)
        ) {
          setIsOpen(false);
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setIsOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          setIsOpen(false);
          buttonRef.current?.focus();
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={submenuId}
        onClick={() => setIsOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setIsOpen(true);
            requestAnimationFrame(() =>
              submenuRef.current?.querySelector("a")?.focus(),
            );
          }
        }}
        className="flex items-center gap-1.5 whitespace-nowrap py-7 text-sm font-semibold text-primary transition-colors hover:text-secondary focus-visible:ring-2 focus-visible:ring-secondary 2xl:text-base"
      >
        <span>{item.name}</span>
        <FiChevronDown
          aria-hidden="true"
          className={`text-xs transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        ref={submenuRef}
        id={submenuId}
        hidden={!isOpen}
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 ${
          item.wide ? "w-[660px] 2xl:w-[720px]" : "w-72"
        }`}
      >
        {item.wide ? (
          <div className="max-h-[calc(100svh-150px)] overflow-y-auto border border-border_color border-t-2 border-t-secondary bg-white p-3 shadow-[0_24px_65px_rgba(44,58,131,0.16)]">
            {item.submenu
              .filter((subItem) => subItem.featured === "top")
              .map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.path}
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="group/item mb-2 flex items-center justify-between gap-4 border-b border-border_color bg-off_white/70 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-off_white hover:text-secondary focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  <span>{subItem.name}</span>
                  <FiChevronRight
                    aria-hidden="true"
                    className="shrink-0 text-secondary transition-transform group-hover/item:translate-x-1"
                  />
                </Link>
              ))}

            <ul className="grid grid-flow-col grid-rows-5 gap-x-2 gap-y-0.5">
              {item.submenu
                .filter((subItem) => !subItem.featured)
                .map((subItem) => (
                  <li key={subItem.name} className="min-w-0">
                    <Link
                      href={subItem.path}
                      onClick={(event) => {
                        event.stopPropagation();
                        setIsOpen(false);
                      }}
                      className="group/item flex h-full items-start justify-between gap-3 px-3.5 py-2.5 text-sm font-semibold leading-snug text-primary transition-colors hover:bg-off_white focus-visible:bg-off_white focus-visible:ring-2 focus-visible:ring-secondary"
                    >
                      <span className="flex min-w-0 items-start gap-2.5">
                        {subItem.number && (
                          <span className="mt-0.5 shrink-0 text-[11px] font-bold tabular-nums tracking-[0.12em] text-secondary">
                            {subItem.number}
                          </span>
                        )}
                        <span className="min-w-0">{subItem.name}</span>
                      </span>
                      <FiChevronRight
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-secondary transition-transform group-hover/item:translate-x-1"
                      />
                    </Link>
                  </li>
                ))}
            </ul>

            {item.submenu
              .filter((subItem) => subItem.featured === "bottom")
              .map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.path}
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="group/item mt-2 flex items-center justify-between gap-4 border-t border-border_color px-4 pt-3 pb-1 text-sm font-semibold text-primary transition-colors hover:text-secondary focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  <span>{subItem.name}</span>
                  <FiChevronRight
                    aria-hidden="true"
                    className="shrink-0 text-secondary transition-transform group-hover/item:translate-x-1"
                  />
                </Link>
              ))}
          </div>
        ) : (
          <ul className="border border-border_color border-t-2 border-t-secondary bg-white p-2 shadow-[0_24px_65px_rgba(44,58,131,0.16)]">
            {item.submenu.map((subItem) => (
              <li key={subItem.name}>
                <Link
                  href={subItem.path}
                  onClick={(event) => {
                    // Let Next handle the hash without a second Lenis anchor scroll.
                    event.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="group/item flex items-center justify-between gap-4 px-4 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-off_white focus-visible:bg-off_white focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  <span>{subItem.name}</span>
                  <FiChevronRight
                    aria-hidden="true"
                    className="shrink-0 text-secondary transition-transform group-hover/item:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  /*
   * Same scrolling effect as the old navbar.
   * Top bar hides after scrolling 60px.
   */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /*
   * Prevent background scrolling while mobile menu is open.
   */
  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setOpenMobileSubmenu(null);
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileSubmenu(null);
  };

  return (
    <>
      <header
        className={`sticky left-0 top-0 z-[60] w-full bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-inner" : "shadow-none"
        }`}
      >
        {/* Desktop Top Bar */}
        <div
          className={`relative hidden overflow-hidden bg-[#202D72] text-white transition-all duration-500 xl:block ${
            isScrolled
              ? "max-h-0 py-0 opacity-0"
              : "max-h-[90px] py-3 opacity-100"
          }`}
        >
          {/* Bottom Accent */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F48220]/55 to-transparent" />

          <div className="custom-container mx-auto flex items-center justify-between gap-8">
            {/* Contact Information */}
            <div className="flex items-center gap-7">
              <a
                href="tel:+8801331115500"
                className="group flex items-center gap-3 text-sm font-semibold tracking-[0.01em] text-white/80 transition duration-300 hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.06] text-[#F7A55A] transition duration-300 group-hover:border-[#F48220] group-hover:bg-[#F48220] group-hover:text-white">
                  <FiPhoneCall className="text-base" />
                </span>

                <span>+880 1331-115500</span>
              </a>

              <span className="h-6 w-px bg-white/15" />

              <a
                href="mailto:info@anondobhubon.com"
                className="group flex items-center gap-3 text-sm font-semibold tracking-[0.01em] text-white/80 transition duration-300 hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.06] text-[#F7A55A] transition duration-300 group-hover:border-[#F48220] group-hover:bg-[#F48220] group-hover:text-white">
                  <FiMail className="text-base" />
                </span>

                <span>info@anondobhubon.com</span>
              </a>

              <span className="h-6 w-px bg-white/15" />

              <div className="flex items-center gap-3 text-sm font-semibold text-white/80">
                <span className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.06] text-[#F7A55A]">
                  <FiClock className="text-base" />
                </span>

                <span>Sat – Thu, 10 AM – 6 PM</span>
              </div>
            </div>

            {/* Social and Language */}
            <div className="flex items-center gap-4">
              {/* <Link
                href="/login"
                className="flex items-center gap-2 text-sm font-semibold text-white hover:underline"
              >
                <FiUser aria-hidden="true" /> Client Portal   
              </Link> */}
              <div className="flex items-center gap-2.5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Anondo Bhubon ${label}`}
                    className="flex h-9 w-9 items-center justify-center border border-white/15 bg-white/[0.05] text-sm text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-[#F48220] hover:bg-[#F48220] hover:text-white"
                  >
                    <Icon />
                  </a>
                ))}
              </div>

              <span className="h-6 w-px bg-white/15" />

              {/* <label className="relative flex items-center">
                <FiGlobe className="pointer-events-none absolute left-3.5 text-base text-[#F7A55A]" />

                <select
                  aria-label="Select website language"
                  defaultValue=""
                  onChange={handleLanguageChange}
                  className="h-9 min-w-[158px] cursor-pointer appearance-none border border-white/15 bg-white/[0.07] pl-10 pr-9 text-sm font-semibold text-white outline-none transition duration-300 hover:border-white/35 focus:border-[#F48220]"
                >
                  <option
                    value=""
                    className="text-[#202D72]"
                  >
                    Choose Language
                  </option>

                  <option
                    value="en"
                    className="text-[#202D72]"
                  >
                    English
                  </option>

                  <option
                    value="bn"
                    className="text-[#202D72]"
                  >
                    বাংলা
                  </option>
                </select>

                <FiChevronDown className="pointer-events-none absolute right-3 text-sm text-white/60" />
              </label> */}
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="border-b border-[#2C3A83]/10 bg-white">
          <div className="custom-container mx-auto flex h-[102px] items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Anondo Bhubon homepage"
              className="relative z-10 flex h-[96px] w-[225px] shrink-0 items-center justify-center overflow-hidden"
            >
              <Image
                src="/anondo-bhubon-updated-logo.png"
                alt="Anondo Bhubon logo"
                width={250}
                height={160}
                priority
                sizes="225px"
                className="h-[128px] w-auto max-w-none scale-[1.1] object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:block" aria-label="Primary navigation">
              <ul className="flex items-center gap-4 2xl:gap-7">
                {menuItems.map((item) => (
                  <li key={item.name} className="group relative">
                    {item.submenu ? (
                      <DesktopDropdown item={item} />
                    ) : (
                      <Link
                        href={item.path}
                        className="relative block whitespace-nowrap py-7 text-sm font-semibold text-[#202D72] transition duration-300 hover:text-[#F48220] 2xl:text-base"
                      >
                        {item.name}

                        <span className="absolute bottom-5 left-0 h-0.5 w-0 bg-[#F48220] transition-all duration-300 group-hover:w-full" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden xl:block">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#202D72] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(32,45,114,0.18)] transition duration-300 hover:bg-[#F48220]"
              >
                <span>Get in Touch</span>

                <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen((currentState) => {
                  return !currentState;
                });
              }}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="relative z-[80] flex h-11 w-11 items-center justify-center border border-[#2C3A83]/15 text-2xl text-[#202D72] transition hover:border-[#F48220] hover:bg-[#F48220] hover:text-white xl:hidden"
            >
              {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-[70] bg-[#F7F5F0] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden ${
          isMenuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        {/* Mobile Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#2C3A83]/10" />

          <div className="absolute -right-16 top-36 h-52 w-52 rounded-full border border-[#F48220]/10" />

          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#2C3A83]/10 blur-[100px]" />
        </div>

        <div className="relative z-10 flex h-full flex-col overflow-y-auto">
          {/* Mobile Header */}
          <div className="flex h-[88px] shrink-0 items-center justify-between overflow-hidden border-b border-[#2C3A83]/10 bg-white px-5 sm:px-7">
            <Link
              href="/"
              onClick={closeMobileMenu}
              aria-label="Anondo Bhubon homepage"
              className="flex h-[78px] w-[180px] items-center justify-center overflow-hidden"
            >
              <Image
                src="/anondo-bhubon-updated-logo.png"
                alt="Anondo Bhubon logo"
                width={200}
                height={125}
                className="h-[102px] w-auto max-w-none scale-[1.08] object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="Close navigation menu"
              className="flex h-11 w-11 items-center justify-center bg-[#202D72] text-2xl text-white transition hover:bg-[#F48220]"
            >
              <HiOutlineX />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex flex-1 flex-col px-5 py-8 sm:px-7">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[#F48220]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#F48220]">
                Explore Anondo Bhubon
              </p>
            </div>

            <nav aria-label="Mobile navigation">
              <ul className="divide-y divide-[#2C3A83]/10 border-y border-[#2C3A83]/10">
                {menuItems.map((item, index) => (
                  <li key={item.name}>
                    {item.submenu ? (
                      <>
                        <button
                          type="button"
                          onClick={() => {
                            setOpenMobileSubmenu((current) =>
                              current === item.id ? null : item.id,
                            );
                          }}
                          aria-expanded={openMobileSubmenu === item.id}
                          aria-controls={`mobile-${item.id}`}
                          className="flex w-full items-center justify-between py-5 text-left focus-visible:ring-2 focus-visible:ring-secondary"
                        >
                          <span className="flex items-center gap-4">
                            <span className="text-[10px] font-bold tracking-[0.15em] text-[#F48220]">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="text-xl font-semibold tracking-[-0.02em] text-[#202D72]">
                              {item.name}
                            </span>
                          </span>

                          <FiChevronDown
                            aria-hidden="true"
                            className={`text-lg text-[#202D72] transition-transform duration-300 ${
                              openMobileSubmenu === item.id ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          id={`mobile-${item.id}`}
                          hidden={openMobileSubmenu !== item.id}
                          className="pb-5"
                        >
                          <ul className="ml-10 border-l border-[#F48220]/30 pl-5">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.path}
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    closeMobileMenu();
                                  }}
                                  className="flex items-start justify-between gap-3 py-2.5 text-sm font-semibold text-primary transition hover:text-secondary focus-visible:ring-2 focus-visible:ring-secondary"
                                >
                                  <span className="flex min-w-0 items-start gap-2.5">
                                    {subItem.number && (
                                      <span className="mt-0.5 shrink-0 text-[11px] font-bold tabular-nums tracking-[0.12em] text-secondary">
                                        {subItem.number}
                                      </span>
                                    )}
                                    <span className="min-w-0">
                                      {subItem.name}
                                    </span>
                                  </span>

                                  <FiChevronRight
                                    aria-hidden="true"
                                    className="mt-0.5 shrink-0"
                                  />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={closeMobileMenu}
                        className="group flex items-center justify-between py-5"
                      >
                        <span className="flex items-center gap-4">
                          <span className="text-[10px] font-bold tracking-[0.15em] text-[#F48220]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-xl font-semibold tracking-[-0.02em] text-[#202D72] transition group-hover:text-[#F48220]">
                            {item.name}
                          </span>
                        </span>

                        <FiArrowUpRight className="text-lg text-[#202D72]/30 transition group-hover:text-[#F48220]" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="mt-8 flex items-center justify-between bg-[#202D72] px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#F48220]"
            >
              <span>Get in Touch</span>

              <FiArrowUpRight className="text-lg" />
            </Link>

            {/* Mobile Contact Information */}
            <div className="mt-8 border border-[#2C3A83]/10 bg-white p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F48220]">
                Contact Information
              </p>

              <div className="mt-5 space-y-4">
                <a
                  href="tel:+8801331115500"
                  className="flex items-start gap-3 text-sm font-semibold text-[#202D72]/70"
                >
                  <FiPhoneCall className="mt-0.5 shrink-0 text-[#F48220]" />

                  <span>+880 1331-115500</span>
                </a>

                <a
                  href="mailto:info@anondobhubon.com"
                  className="flex items-start gap-3 text-sm font-semibold text-[#202D72]/70"
                >
                  <FiMail className="mt-0.5 shrink-0 text-[#F48220]" />

                  <span className="break-all">info@anondobhubon.com</span>
                </a>

                <div className="flex items-start gap-3 text-sm font-semibold text-[#202D72]/70">
                  <FiClock className="mt-0.5 shrink-0 text-[#F48220]" />

                  <span>Sat – Thu, 10 AM – 6 PM</span>
                </div>
              </div>

              {/* Mobile Social and Language */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#2C3A83]/10 pt-5">
                <div className="flex gap-2">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Anondo Bhubon ${label}`}
                      className="flex h-10 w-10 items-center justify-center border border-[#2C3A83]/10 text-sm text-[#202D72] transition hover:border-[#F48220] hover:bg-[#F48220] hover:text-white"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>

                {/* <label className="relative flex items-center">
                  <FiGlobe className="pointer-events-none absolute left-3 text-sm text-[#F48220]" />

                  <select
                    aria-label="Select website language"
                    defaultValue=""
                    onChange={handleLanguageChange}
                    className="h-10 cursor-pointer appearance-none border border-[#2C3A83]/10 bg-white pl-9 pr-8 text-xs font-bold text-[#202D72] outline-none"
                  >
                    <option value="">Language</option>

                    <option value="en">English</option>

                    <option value="bn">বাংলা</option>
                  </select>

                  <FiChevronDown className="pointer-events-none absolute right-2.5 text-xs text-[#202D72]/50" />
                </label> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="google_translate_element" className="hidden" />
    </>
  );
}
