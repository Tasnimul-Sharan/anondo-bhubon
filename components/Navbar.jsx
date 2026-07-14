// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   FiChevronRight,
//   FiClock,
//   FiMail,
//   FiPhoneCall,
// } from "react-icons/fi";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
// } from "react-icons/fa";

// const menuItems = [
//   { name: "Home", path: "/" },
//   { name: "About Us", path: "/about" },
//   { name: "Masterplan", path: "/masterplan" },
//   {
//     name: "Amenities",
//     path: "/lifestyle-amenities",
//   },
//   { name: "NRB", path: "/nrb" },
//   {
//     name: "Corporate",
//     path: "#",
//     submenu: [
//       {
//         name: "Career Opportunities",
//         path: "/career-opportunities",
//       },
//       {
//         name: "Payment Procedures",
//         path: "/payment-procedures",
//       },
//       {
//         name: "Terms And Condition",
//         path: "/terms-and-conditions",
//       },
//       {
//         name: "Privacy Policy",
//         path: "/privacy-policy",
//       },
//     ],
//   },
//   { name: "Gallery", path: "/gallery" },
// ];

// let googleTranslatePromise;

// function loadGoogleTranslate() {
//   if (typeof window === "undefined") {
//     return Promise.resolve();
//   }

//   if (window.google?.translate?.TranslateElement) {
//     return Promise.resolve();
//   }

//   if (googleTranslatePromise) {
//     return googleTranslatePromise;
//   }

//   googleTranslatePromise = new Promise(
//     (resolve, reject) => {
//       window.googleTranslateElementInit = () => {
//         new window.google.translate.TranslateElement(
//           {
//             pageLanguage: "en",
//             includedLanguages: "en,bn",
//             autoDisplay: false,
//           },
//           "google_translate_element",
//         );

//         resolve();
//       };

//       const addScript =
//         document.createElement("script");

//       addScript.src =
//         "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

//       addScript.async = true;
//       addScript.onerror = reject;

//       document.body.appendChild(addScript);
//     },
//   );

//   return googleTranslatePromise;
// }

// async function handleLanguageChange(event) {
//   const selectedLang = event.target.value;

//   if (!selectedLang) return;

//   await loadGoogleTranslate();

//   const combo =
//     document.querySelector(".goog-te-combo");

//   if (combo) {
//     combo.value = selectedLang;

//     combo.dispatchEvent(
//       new Event("change"),
//     );
//   }
// }

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] =
//     useState(false);

//   const [isScrolled, setIsScrolled] =
//     useState(false);

//   useEffect(() => {
//     const onScroll = () =>
//       setIsScrolled(window.scrollY > 60);

//     window.addEventListener("scroll", onScroll, {
//       passive: true,
//     });

//     return () =>
//       window.removeEventListener(
//         "scroll",
//         onScroll,
//       );
//   }, []);

//   return (
//     <header
//       className={`sticky left-0 top-0 z-50 w-full bg-white transition-shadow duration-300 ${
//         isScrolled
//           ? "shadow-inner"
//           : "shadow-none"
//       }`}
//     >
//       {/* Top Bar */}
//       <div
//         className={`hidden overflow-hidden bg-primary text-white transition-all duration-500 lg:block ${
//           isScrolled
//             ? "max-h-0 py-0 opacity-0"
//             : "max-h-[80px] py-4 opacity-100"
//         }`}
//       >
//         <div className="custom-container mx-auto flex items-center justify-between gap-6 whitespace-nowrap text-base">
//           <div className="flex flex-wrap items-center gap-6 text-base text-off_white">
//             <div className="flex items-center gap-2 transition hover:text-white">
//               <FiPhoneCall aria-hidden="true" />

//               <span className="tracking-wide">
//                 +880 1331-115500
//               </span>
//             </div>

//             <span className="h-4 w-px bg-white/30" />

//             <div className="flex items-center gap-2 transition hover:text-off_white">
//               <FiMail aria-hidden="true" />

//               <span className="tracking-wide">
//                 info@anondobhubon.com
//               </span>
//             </div>

//             <span className="h-4 w-px bg-white/30" />

//             <div className="flex items-center gap-2 text-white">
//               <FiClock aria-hidden="true" />

//               <span>
//                 Sat - Thu, 10 AM - 6 PM
//               </span>
//             </div>
//           </div>

//           <div className="flex items-center gap-4 text-xl">
//             <Link
//               href="https://www.facebook.com/anondobhuban"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Anondo Bhubon Facebook page"
//             >
//               <FaFacebookF className="cursor-pointer transition-all duration-500 hover:text-off_white" />
//             </Link>

//             <Link
//               href="https://www.linkedin.com/company/anondo-bhubon/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Anondo Bhubon LinkedIn page"
//             >
//               <FaLinkedinIn className="cursor-pointer transition-all duration-500 hover:text-off_white" />
//             </Link>

//             <select
//               aria-label="Select website language"
//               className="ml-3 rounded border border-border_color bg-white px-2 py-1 text-base text-primary"
//               onChange={handleLanguageChange}
//             >
//               <option value="">
//                 Choose language
//               </option>

//               <option value="en">
//                 English
//               </option>

//               <option value="bn">
//                 Bangla
//               </option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="border-b bg-white">
//         <div className="custom-container mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <Link
//             href="/"
//             aria-label="Anondo Bhubon home"
//             className="flex h-24 items-center gap-3 overflow-hidden"
//           >
//             <Image
//               src="/anondo-bhubon-updated-logo.png"
//               alt="Anondo Bhubon logo"
//               width={180}
//               height={120}
//               sizes="180px"
//               className="h-32 w-full object-cover"
//             />
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="relative hidden gap-6 font-semibold lg:flex xl:gap-8">
//             {menuItems.map((item) => (
//               <li
//                 key={item.name}
//                 className="group relative"
//               >
//                 <Link
//                   href={item.path}
//                   className="transition hover:text-primary"
//                 >
//                   {item.name}
//                 </Link>

//                 <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />

//                 {item.submenu && (
//                   <ul className="invisible absolute left-0 top-full z-50 mt-6 w-72 translate-y-4 overflow-hidden rounded-lg border border-border_color bg-white/90 opacity-0 shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
//                     {item.submenu.map((sub) => (
//                       <li
//                         key={sub.name}
//                         className="group/item"
//                       >
//                         <Link
//                           href={sub.path}
//                           className="flex items-center justify-between px-6 py-3 text-primary/75 transition-all duration-300 hover:text-primary"
//                         >
//                           <span className="relative">
//                             {sub.name}

//                             <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover/item:w-full" />
//                           </span>

//                           <FiChevronRight className="translate-x-[-8px] text-lg opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/* Desktop CTA */}
//           <div className="hidden lg:block">
//             <Link
//               href="/contact"
//               className="inline-flex rounded bg-primary px-6 py-2 font-bold text-white transition-all duration-500 hover:bg-secondary"
//             >
//               Contact Us
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             type="button"
//             className="z-50 text-3xl text-primary lg:hidden"
//             onClick={() =>
//               setIsMenuOpen(!isMenuOpen)
//             }
//             aria-label={
//               isMenuOpen
//                 ? "Close navigation menu"
//                 : "Open navigation menu"
//             }
//             aria-expanded={isMenuOpen}
//             aria-controls="mobile-navigation"
//           >
//             {isMenuOpen ? (
//               <HiOutlineX />
//             ) : (
//               <HiOutlineMenu />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div
//         id="mobile-navigation"
//         aria-hidden={!isMenuOpen}
//         className={`fixed left-0 top-0 z-40 flex max-w-full flex-col overflow-y-auto overflow-x-hidden bg-white px-8 py-12 shadow-xl transition-all duration-500 lg:hidden ${
//           isMenuOpen
//             ? "h-screen w-screen opacity-100"
//             : "pointer-events-none h-0 w-0 opacity-0"
//         }`}
//       >
//         <ul className="flex flex-col gap-8 text-xl font-semibold">
//           {menuItems.map((item) => (
//             <li key={item.name}>
//               {item.submenu ? (
//                 <span className="block text-primary">
//                   {item.name}
//                 </span>
//               ) : (
//                 <Link
//                   href={item.path}
//                   className="transition hover:text-primary"
//                   onClick={() =>
//                     setIsMenuOpen(false)
//                   }
//                 >
//                   {item.name}
//                 </Link>
//               )}

//               {item.submenu && (
//                 <ul className="ml-4 mt-2 text-base text-primary/70">
//                   {item.submenu.map((sub) => (
//                     <li key={sub.name}>
//                       <Link
//                         href={sub.path}
//                         onClick={() =>
//                           setIsMenuOpen(false)
//                         }
//                         className="block py-1 hover:text-primary"
//                       >
//                         {sub.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>

//         <div className="mt-10">
//           <Link
//             href="/contact"
//             onClick={() =>
//               setIsMenuOpen(false)
//             }
//             className="inline-flex w-full justify-center rounded-lg bg-primary py-3 font-bold text-white"
//           >
//             Contact Us
//           </Link>
//         </div>

//         <div className="mt-12 space-y-5 border-t border-border_color pt-6 text-base font-medium">
//           <div className="space-y-3 text-primary/80">
//             <div className="flex items-start gap-3">
//               <FiPhoneCall
//                 className="mt-1 shrink-0 text-primary"
//                 aria-hidden="true"
//               />

//               <span className="min-w-0 break-words">
//                 +880 1331-115500
//               </span>
//             </div>

//             <div className="flex items-start gap-3">
//               <FiMail
//                 className="mt-1 shrink-0 text-primary"
//                 aria-hidden="true"
//               />

//               <span className="min-w-0 break-all">
//                 info@anondobhubon.com
//               </span>
//             </div>

//             <div className="flex items-start gap-3">
//               <FiClock
//                 className="mt-1 shrink-0 text-primary"
//                 aria-hidden="true"
//               />

//               <span>
//                 Sat - Thu, 10 AM - 6 PM
//               </span>
//             </div>
//           </div>

//           <div className="flex justify-center gap-5 pt-4 text-xl">
//             <Link
//               href="https://www.facebook.com/anondobhuban"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Anondo Bhubon Facebook page"
//             >
//               <FaFacebookF className="text-primary/70 transition hover:text-secondary" />
//             </Link>

//             <Link
//               href="https://www.linkedin.com/company/anondo-bhubon/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Anondo Bhubon LinkedIn page"
//             >
//               <FaLinkedinIn className="text-primary/70 transition hover:text-secondary" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div
//         id="google_translate_element"
//         className="hidden"
//       />
//     </header>
//   );
// }


"use client";

import { useEffect, useState } from "react";
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
} from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Masterplan",
    path: "/masterplan",
  },
  {
    name: "Amenities",
    path: "/lifestyle-amenities",
  },
  {
    name: "NRB",
    path: "/nrb",
  },
  {
    name: "Corporate",
    submenu: [
      {
        name: "Career Opportunities",
        path: "/career-opportunities",
      },
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

    const translateSelect =
      document.querySelector(".goog-te-combo");

    if (!translateSelect) return;

    translateSelect.value = selectedLanguage;

    translateSelect.dispatchEvent(
      new Event("change", {
        bubbles: true,
      }),
    );
  } catch (error) {
    console.error(
      "Google Translate could not be loaded:",
      error,
    );
  }
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] =
    useState(false);
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

    const previousOverflow =
      document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setIsCorporateOpen(false);
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [isMenuOpen]);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsCorporateOpen(false);
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
          className={`relative hidden overflow-hidden bg-[#202D72] text-white transition-all duration-500 lg:block ${
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
              <div className="flex items-center gap-2.5">
                {socialLinks.map(
                  ({ icon: Icon, href, label }) => (
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
                  ),
                )}
              </div>

              <span className="h-6 w-px bg-white/15" />

              <label className="relative flex items-center">
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
              </label>
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
            <nav
              className="hidden lg:block"
              aria-label="Primary navigation"
            >
              <ul className="flex items-center gap-5 xl:gap-8">
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    className="group relative"
                  >
                    {item.submenu ? (
                      <>
                        <button
                          type="button"
                          className="flex items-center gap-1.5 py-7 text-base font-semibold text-[#202D72] transition duration-300 hover:text-[#F48220]"
                        >
                          <span>{item.name}</span>

                          <FiChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                        </button>

                        {/* Corporate Dropdown */}
                        <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-4 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                          <div className="border border-[#2C3A83]/10 bg-white p-2 shadow-[0_24px_65px_rgba(27,35,75,0.16)]">
                            <div className="border-b border-[#2C3A83]/10 px-4 py-3">
                              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#F48220]">
                                Corporate Information
                              </p>
                            </div>

                            <ul className="py-2">
                              {item.submenu.map(
                                (subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.path}
                                      className="group/item flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#202D72]/70 transition duration-300 hover:bg-[#F5F4F0] hover:text-[#202D72]"
                                    >
                                      <span>
                                        {subItem.name}
                                      </span>

                                      <FiChevronRight className="-translate-x-1.5 text-sm text-[#F48220] opacity-0 transition duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                                    </Link>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        className="relative block py-7 text-base font-semibold text-[#202D72] transition duration-300 hover:text-[#F48220]"
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
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#202D72] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(32,45,114,0.18)] transition duration-300 hover:bg-[#F48220]"
              >
                <span>Contact Us</span>

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
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="relative z-[80] flex h-11 w-11 items-center justify-center border border-[#2C3A83]/15 text-2xl text-[#202D72] transition hover:border-[#F48220] hover:bg-[#F48220] hover:text-white lg:hidden"
            >
              {isMenuOpen ? (
                <HiOutlineX />
              ) : (
                <HiOutlineMenu />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-[70] bg-[#F7F5F0] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
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
                            setIsCorporateOpen(
                              (currentState) => {
                                return !currentState;
                              },
                            );
                          }}
                          aria-expanded={isCorporateOpen}
                          className="flex w-full items-center justify-between py-5 text-left"
                        >
                          <span className="flex items-center gap-4">
                            <span className="text-[10px] font-bold tracking-[0.15em] text-[#F48220]">
                              {String(index + 1).padStart(
                                2,
                                "0",
                              )}
                            </span>

                            <span className="text-xl font-semibold tracking-[-0.02em] text-[#202D72]">
                              {item.name}
                            </span>
                          </span>

                          <FiChevronDown
                            className={`text-lg text-[#202D72] transition-transform duration-300 ${
                              isCorporateOpen
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            isCorporateOpen
                              ? "max-h-80 pb-5 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <ul className="ml-10 border-l border-[#F48220]/30 pl-5">
                            {item.submenu.map(
                              (subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    href={subItem.path}
                                    onClick={
                                      closeMobileMenu
                                    }
                                    className="flex items-center justify-between py-2.5 text-sm font-semibold text-[#202D72]/65 transition hover:text-[#F48220]"
                                  >
                                    <span>
                                      {subItem.name}
                                    </span>

                                    <FiChevronRight />
                                  </Link>
                                </li>
                              ),
                            )}
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
                            {String(index + 1).padStart(
                              2,
                              "0",
                            )}
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
              <span>Request Consultation</span>

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

                  <span className="break-all">
                    info@anondobhubon.com
                  </span>
                </a>

                <div className="flex items-start gap-3 text-sm font-semibold text-[#202D72]/70">
                  <FiClock className="mt-0.5 shrink-0 text-[#F48220]" />

                  <span>Sat – Thu, 10 AM – 6 PM</span>
                </div>
              </div>

              {/* Mobile Social and Language */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#2C3A83]/10 pt-5">
                <div className="flex gap-2">
                  {socialLinks.map(
                    ({ icon: Icon, href, label }) => (
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
                    ),
                  )}
                </div>

                <label className="relative flex items-center">
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
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Google Translate Element */}
      <div
        id="google_translate_element"
        className="hidden"
      />
    </>
  );
}