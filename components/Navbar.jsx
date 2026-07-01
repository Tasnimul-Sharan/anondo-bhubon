"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiClock, FiMail, FiPhoneCall } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Masterplan", path: "/masterplan" },
  { name: "NRB", path: "/nrb" },
  {
    name: "Corporate",
    path: "#",
    submenu: [
      { name: "Career Opportunities", path: "/career-opportunities" },
      { name: "Payment Procedures", path: "/payment-procedures" },
      { name: "Terms And Condition", path: "/terms-and-conditions" },
      { name: "Privacy Policy", path: "/privacy-policy" },
    ],
  },
  { name: "Gallery", path: "/gallery" },
];

let googleTranslatePromise;

function loadGoogleTranslate() {
  if (typeof window === "undefined") return Promise.resolve();

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

    const addScript = document.createElement("script");
    addScript.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    addScript.onerror = reject;
    document.body.appendChild(addScript);
  });

  return googleTranslatePromise;
}

async function handleLanguageChange(event) {
  const selectedLang = event.target.value;
  if (!selectedLang) return;

  await loadGoogleTranslate();

  const combo = document.querySelector(".goog-te-combo");
  if (combo) {
    combo.value = selectedLang;
    combo.dispatchEvent(new Event("change"));
  }
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky left-0 top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-inner" : "shadow-none"
      }`}
    >
      <div
        className={`hidden overflow-hidden bg-primary text-white transition-all duration-500 lg:block ${
          isScrolled ? "max-h-0 py-0 opacity-0" : "max-h-[80px] py-4 opacity-100"
        }`}
      >
        <div className="custom-container mx-auto flex items-center justify-between gap-6 whitespace-nowrap text-base">
          <div className="flex flex-wrap items-center gap-6 text-base text-off_white">
            <div className="flex items-center gap-2 transition hover:text-white">
              <FiPhoneCall aria-hidden="true" />
              <span className="tracking-wide">+880 1331-115500</span>
            </div>

            <span className="h-4 w-px bg-white/30" />

            <div className="flex items-center gap-2 transition hover:text-off_white">
              <FiMail aria-hidden="true" />
              <span className="tracking-wide">info@anondobhubon.com</span>
            </div>

            <span className="h-4 w-px bg-white/30" />

            <div className="flex items-center gap-2 text-white">
              <FiClock aria-hidden="true" />
              <span>Sat - Thu, 10 AM - 6 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xl">
            <Link
              href="https://www.facebook.com/anondobhuban"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Anondo Bhubon Facebook page"
            >
              <FaFacebookF className="cursor-pointer transition-all duration-500 hover:text-off_white" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/anondo-bhubon/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Anondo Bhubon LinkedIn page"
            >
              <FaLinkedinIn className="cursor-pointer transition-all duration-500 hover:text-off_white" />
            </Link>

            <select
              aria-label="Select website language"
              className="ml-3 rounded border border-border_color bg-white px-2 py-1 text-base text-primary"
              onChange={handleLanguageChange}
            >
              <option value="">Choose language</option>
              <option value="en">English</option>
              <option value="bn">Bangla</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border-b bg-white">
        <div className="custom-container mx-auto flex items-center justify-between">
          <Link
            href="/"
            aria-label="Anondo Bhubon home"
            className="flex h-24 items-center gap-3 overflow-hidden"
          >
            <Image
              src="/anondo-bhubon-updated-logo.png"
              alt="Anondo Bhubon logo"
              width={180}
              height={120}
              sizes="180px"
              className="h-20 w-auto object-contain"
            />
          </Link>

          <ul className="relative hidden gap-8 font-semibold lg:flex">
            {menuItems.map((item) => (
              <li key={item.name} className="group relative">
                <Link href={item.path} className="transition hover:text-primary">
                  {item.name}
                </Link>

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />

                {item.submenu && (
                  <ul className="invisible absolute left-0 top-full z-50 mt-6 w-72 translate-y-4 overflow-hidden rounded-lg border border-border_color bg-white/90 opacity-0 shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.submenu.map((sub) => (
                      <li key={sub.name} className="group/item">
                        <Link
                          href={sub.path}
                          className="flex items-center justify-between px-6 py-3 text-primary/75 transition-all duration-300 hover:text-primary"
                        >
                          <span className="relative">
                            {sub.name}
                            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover/item:w-full" />
                          </span>
                          <FiChevronRight className="translate-x-[-8px] text-lg opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex rounded bg-primary px-6 py-2 font-bold text-white transition-all duration-500 hover:bg-secondary"
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            className="z-50 text-3xl text-primary lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`fixed left-0 top-0 z-40 flex max-w-full flex-col overflow-y-auto overflow-x-hidden bg-white px-8 py-12 shadow-xl transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? "h-screen w-screen opacity-100"
            : "pointer-events-none h-0 w-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-8 text-xl font-semibold">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.submenu ? (
                <span className="block text-primary">{item.name}</span>
              ) : (
                <Link
                  href={item.path}
                  className="transition hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}

              {item.submenu && (
                <ul className="ml-4 mt-2 text-base text-primary/70">
                  {item.submenu.map((sub) => (
                    <li key={sub.name}>
                      <Link
                        href={sub.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-1 hover:text-primary"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex w-full justify-center rounded-lg bg-primary py-3 font-bold text-white"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-12 space-y-5 border-t border-border_color pt-6 text-base font-medium">
          <div className="space-y-3 text-primary/80">
            <div className="flex items-start gap-3">
              <FiPhoneCall className="mt-1 shrink-0 text-primary" aria-hidden="true" />
              <span className="min-w-0 break-words">+880 1331-115500</span>
            </div>
            <div className="flex items-start gap-3">
              <FiMail className="mt-1 shrink-0 text-primary" aria-hidden="true" />
              <span className="min-w-0 break-all">info@anondobhubon.com</span>
            </div>
            <div className="flex items-start gap-3">
              <FiClock className="mt-1 shrink-0 text-primary" aria-hidden="true" />
              <span>Sat - Thu, 10 AM - 6 PM</span>
            </div>
          </div>

          <div className="flex justify-center gap-5 pt-4 text-xl">
            <Link
              href="https://www.facebook.com/anondobhuban"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Anondo Bhubon Facebook page"
            >
              <FaFacebookF className="text-primary/70 transition hover:text-secondary" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/anondo-bhubon/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Anondo Bhubon LinkedIn page"
            >
              <FaLinkedinIn className="text-primary/70 transition hover:text-secondary" />
            </Link>
          </div>
        </div>
      </div>

      <div id="google_translate_element" className="hidden" />
    </header>
  );
}
