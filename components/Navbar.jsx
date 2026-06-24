"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import {
  FiClock,
  FiPhoneCall,
  FiMail,
  FiArrowRight,
  FiChevronRight,
} from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Masterplan", path: "/masterplan" },

  // { name: "Blogs", path: "/blogs" },
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
  // { name: "Form", path: "/form" },
  { name: "Gallery", path: "/gallery" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Scroll detector
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu GSAP
  useEffect(() => {
    const menu = menuRef.current;
    const items = menu?.querySelectorAll("li");

    if (isMenuOpen) {
      gsap.to(menu, {
        width: "100vw",
        height: "100vh",
        opacity: 1,
        duration: 0.7,
        ease: "power4.out",
      });

      gsap.fromTo(
        items,
        { x: "-30px", opacity: 0 },
        { x: "0px", opacity: 1, duration: 0.5, stagger: 0.1 },
      );
    } else {
      gsap.to(menu, {
        width: 0,
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power4.inOut",
      });
    }
  }, [isMenuOpen]);

  // Add at top of Navbar.js
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,bn",
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-inner" : "shadow-none"
      }`}
    >
      <div
        className={`
    hidden lg:block
    bg-primary text-white overflow-hidden transition-all duration-500
    ${isScrolled ? "max-h-0 opacity-0 py-0" : "max-h-[80px] opacity-100 py-4"}
  `}
      >
        <div className="custom-container mx-auto flex items-center justify-between text-base whitespace-nowrap gap-6">
          <div className="flex flex-wrap items-center gap-6 text-base text-off_white">
            <div className="flex items-center gap-2 hover:text-white transition">
              <FiPhoneCall />
              <span className="tracking-wide">+880 1331-115500</span>
            </div>

            <span className="h-4 w-px bg-white/30" />

            <div className="flex items-center gap-2 hover:text-off_white transition">
              <FiMail />
              <span className="tracking-wide">info@anondobhubon.com</span>
            </div>

            <span className="h-4 w-px bg-white/30" />

            <div className="flex items-center gap-2 text-white">
              <FiClock />
              <span>Sat – Thu · 10 AM – 6 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xl">
            <Link
              href="https://www.linkedin.com/company/anondo-bhubon/"
              target="_blank"
            >
              <FaFacebookF className="hover:text-off_white transition-all transform duration-500 cursor-pointer" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/anondo-bhubon/"
              target="_blank"
            >
              <FaLinkedinIn className="hover:text-primary transition-all transform duration-500 cursor-pointer" />
            </Link>

            {/* <Link href="https://instagram.com/aphs_bd/" target="_blank">
              <FaInstagram className="hover:text-primary transition-all transform duration-500 cursor-pointer" />
            </Link> */}

            {/* <Link
              href="https://youtube.com/@AnondoHousingSocietyOfficial"
              target="_blank"
            >
              <FaYoutube className="hover:text-primary transition-all transform duration-500 cursor-pointer" />
            </Link> */}

            <select
              className="ml-3 rounded border border-border_color bg-white px-2 py-1 text-base text-primary"
              onChange={(e) => {
                const selectedLang = e.target.value;
                const googleTranslateCombo =
                  document.querySelector(".goog-te-combo");

                if (googleTranslateCombo) {
                  googleTranslateCombo.value = selectedLang;
                  googleTranslateCombo.dispatchEvent(new Event("change"));
                  return;
                }

                const waitForTranslate = setInterval(() => {
                  const combo = document.querySelector(".goog-te-combo");
                  if (combo) {
                    combo.value = selectedLang;
                    combo.dispatchEvent(new Event("change"));
                    clearInterval(waitForTranslate);
                  }
                }, 300);
              }}
            >
              <option value="">ভাষা বেছে নিন</option>
              <option value="en">English</option>
              <option value="bn">Bangla</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="custom-container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-3 h-24 overflow-hidden"
          >
            <Image
              src="/anondo-bhubon-updated-logo.png"
              alt="Logo"
              width={1200}
              height={1200}
              priority
              className="w-full h-36 object-cover"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 font-semibold relative">
            {menuItems.map((item, i) => (
              <li key={i} className="relative group">
                <Link
                  href={item.path}
                  className="hover:text-primary transition"
                >
                  {item.name}
                </Link>

                {/* Line underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>

                {/* Dropdown */}
                {/* {item.submenu && (
                  <ul className="absolute left-0 top-full mt-6 w-60 bg-white shadow-lg border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {item.submenu.map((sub, j) => (
                      <li key={j}>
                        <Link
                          href={sub.path}
                          className="block px-5 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )} */}
                {/* {item.submenu && (
                  <ul className="absolute left-0 top-full mt-6 w-64 bg-white shadow-xl border rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform duration-500 z-50 overflow-hidden">
                    {item.submenu.map((sub, j) => (
                      <li key={j}>
                        <Link
                          href={sub.path}
                          className="block px-5 py-3 text-gray-700 hover:bg-primary hover:text-white transition-all transform duration-500"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )} */}
                {item.submenu && (
                  <ul className="absolute left-0 top-full z-50 mt-6 w-72 overflow-hidden rounded-lg border border-border_color bg-white/90 shadow-2xl backdrop-blur-md opacity-0 invisible transition-all duration-500 translate-y-4 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.submenu.map((sub, j) => (
                      <li key={j} className="group/item">
                        <Link
                          href={sub.path}
                          className="flex items-center justify-between px-6 py-3 text-primary/75 transition-all duration-300 hover:text-primary"
                        >
                          {/* Text */}
                          <span className="relative">
                            {sub.name}

                            {/* underline hover */}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover/item:w-full"></span>
                          </span>

                          {/* React Icon Arrow */}
                          <FiChevronRight className="text-lg opacity-0 translate-x-[-8px] group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="bg-primary text-white px-6 py-2 font-bold hover:bg-secondary transition-all rounded transform duration-500">
                Contact Us
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden text-3xl text-primary z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className="fixed left-0 top-0 z-40 flex max-w-full flex-col overflow-y-auto overflow-x-hidden bg-white px-8 py-12 shadow-xl lg:hidden"
        style={{ width: 0, height: 0, opacity: 0 }}
      >
        <ul className="flex flex-col gap-8 text-xl font-semibold">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.path}
                className="hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>

              {item.submenu && (
                <ul className="ml-4 mt-2 text-base text-primary/70">
                  {item.submenu.map((sub, j) => (
                    <li key={j}>
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
          <Link href="/contact">
            <button className="w-full bg-primary text-white py-3 font-bold rounded-lg">
              Contact Us
            </button>
          </Link>
        </div>
        {/* ===== Mobile Bottom Info Section ===== */}
        <div className="mt-12 space-y-5 border-t border-border_color pt-6 text-base font-medium">
          {/* Contact Info */}
          <div className="space-y-3 text-primary/80">
            <div className="flex items-start gap-3">
              <FiPhoneCall className="mt-1 shrink-0 text-primary" />
              <span className="min-w-0 break-words">+880 1331-115500</span>
            </div>
            <div className="flex items-start gap-3">
              <FiMail className="mt-1 shrink-0 text-primary" />
              <span className="min-w-0 break-all">
                anondohousings@gmail.com
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FiClock className="mt-1 shrink-0 text-primary" />
              <span>Sat – Thu · 10 AM – 6 PM</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 text-xl pt-4">
            <Link href="https://www.facebook.com/anondobhuban" target="_blank">
              <FaFacebookF className="text-primary/70 transition hover:text-secondary" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/anondo-bhubon/"
              target="_blank"
            >
              <FaLinkedinIn className="text-primary/70 transition hover:text-secondary" />
            </Link>
          </div>

          {/* Language Selector */}
          {/* <div className="pt-4">
            <select
              className="w-full border rounded-md px-3 py-2 text-sm"
              onChange={(e) => {
                const selectedLang = e.target.value;
                const combo = document.querySelector(".goog-te-combo");
                if (combo) {
                  combo.value = selectedLang;
                  combo.dispatchEvent(new Event("change"));
                }
              }}
            >
              <option value="">ভাষা বেছে নিন</option>
              <option value="en">English</option>
              <option value="bn">Bangla</option>
            </select>
          </div> */}
        </div>
      </div>
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </header>
  );
}
