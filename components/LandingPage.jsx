"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCity,
  FaHome,
  FaLeaf,
} from "react-icons/fa";

import Link from "next/link";
import Button from "./Button";

const sliderData = [
  //   {
  //     subtitle: "Anondo Rosemont Estate",
  //     title: "Where Elegance Becomes Heritage",
  //     description: `
  // Where the Hills Whisper and Roses Welcome You Home
  // Elegantia in Aeternum — Elegance Forever
  // A Signature Duplex Township by Anondo Rosemont Estate under Anondo CityScappers Ltd.`,
  //     image: "/slider/slider1.jpg",
  //     buttons: [
  //       {
  //         text: "Explore Rosemont Estate",
  //         link: "/rosemont",
  //         variant: "primary",
  //       },
  //       { text: "Download Brochure", link: "/brochure", variant: "outline" },
  //     ],
  //   },
  {
    subtitle: "Anondo Bhubon",
    title: "A New Horizon in Eco-Friendly Urban Living",
    description: `
Discover Bangladesh’s first eco-conscious township — where nature, wellness, and modern living exist in harmony.
`,
    image: "/slider/slider2.jpg",
    buttons: [
      { text: "Download Brochure", link: "/brochure", variant: "primary" },
      { text: "View Pricing", link: "/pricing", variant: "outline" },
    ],
  },
  {
    subtitle: "Anondo Park City",
    title: "Smart & Sustainable Living in Purbachal",
    description: `
A visionary residential project by Bangladesh Police, spanning 115 hectares in the heart of Purbachal New Town. Offering a secure gated community, modern amenities, and an eco-friendly environment designed for a better quality of life.
`,
    image: "/slider/slider3.jpg",
    buttons: [
      { text: "Get Connect", link: "/contact", variant: "primary" },
      { text: "View Pricing", link: "/pricing", variant: "outline" },
    ],
  },
];

const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const textRefs = useRef([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full overflow-hidden group">
      <Slider ref={sliderRef} {...settings}>
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className="relative w-full md:py-96 py-60 overflow-hidden"
          >
            <motion.div
              key={`bg-${index}-${activeIndex}`}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></motion.div>

            <div className="absolute inset-0 bg-slate-950/50"></div>

            <motion.div
              ref={(el) => (textRefs.current[index] = el)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-white z-10 px-4"
              initial="hidden"
              animate={activeIndex === index ? "visible" : "hidden"}
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
              <motion.p
                className="uppercase tracking-[0.3em] text-sm font-medium text-white relative inline-flex items-center gap-3 border border-white rounded-full px-4 py-1 backdrop-blur"
                variants={textVariants}
              >
                <FaHome className="text-white text-sm" />
                {slide.subtitle}
              </motion.p>

              <motion.h1
                className="text-3xl md:text-6xl  italic font-semibold leading-tight text-balance break-words text-center"
                style={{ maxWidth: "900px", lineHeight: 1.2 }}
                variants={textVariants}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                className="mt-3 text-base md:text-lg max-w-2xl text-gray-200 leading-relaxed"
                variants={textVariants}
              >
                {slide.description}
              </motion.p>

              {slide?.buttons?.length > 0 && (
                <motion.div
                  className="mt-6 flex gap-4 flex-wrap justify-center"
                  variants={textVariants}
                >
                  {slide.buttons.map((btn, i) => (
                    <Link key={i} href={btn.link}>
                      <Button variant={btn.variant || "primary"}>
                        {btn.text}
                      </Button>
                    </Link>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute z-20 top-1/2 left-6 -translate-y-1/2 border-2 bg-primary border-primary hover:bg-secondary hover:border-transparent text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-all transform duration-1000"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute z-20 top-1/2 right-6 -translate-y-1/2 border-2 bg-primary border-primary hover:bg-secondary hover:border-transparent text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-all transform duration-1000"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

export default LandingPage;

// "use client";

// import { useRef, useState } from "react";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Button from "./Button";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import {
//   FaArrowLeft,
//   FaArrowRight,
//   FaHome,
//   FaLeaf,
//   FaCity,
//   FaCheckCircle,
// } from "react-icons/fa";

// const sliderData = [
//   {
//     subtitle: "Anondo Bhubon",
//     title: "A New Horizon in Eco-Friendly Urban Living",
//     description:
//       "Discover Bangladesh’s first eco-conscious township — where nature, wellness, and modern living exist in harmony.",
//     image: "/slider/slider2.jpg",
//     icon: FaLeaf,
//     points: [
//       ,
//       "Eco-conscious township",
//       "Modern urban lifestyle",
//       "Near Purbachal",
//     ],
//     buttons: [
//       { text: "Download Brochure", link: "/brochure", variant: "primary" },
//       { text: "View Pricing", link: "/pricing", variant: "outline" },
//     ],
//   },
//   {
//     subtitle: "Anondo Park City",
//     title: "Smart & Sustainable Living in Purbachal",
//     description:
//       "A visionary residential project by Bangladesh Police, spanning 115 hectares in the heart of Purbachal New Town. Offering a secure gated community, modern amenities, and an eco-friendly environment designed for a better quality of life.",
//     image: "/slider/slider3.jpg",
//     icon: FaCity,
//     points: ["Secure gated community", "Smart planning", "Sustainable living"],
//     buttons: [
//       { text: "Get Connected", link: "/contact", variant: "primary" },
//       { text: "View Pricing", link: "/pricing", variant: "outline" },
//     ],
//   },
// ];

// export default function LandingPage() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 900,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//     autoplay: true,
//     autoplaySpeed: 7000,
//     pauseOnHover: false,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (_, next) => setActiveIndex(next),
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 28 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.75, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="group relative w-full overflow-hidden bg-black">
//       <Slider ref={sliderRef} {...settings}>
//         {sliderData.map((slide, index) => {
//           const Icon = slide.icon || FaHome;

//           return (
//             <div key={index}>
//               <div className="relative min-h-[680px] overflow-hidden md:min-h-[820px]">
//                 {/* Background */}
//                 <motion.div
//                   key={`bg-${index}-${activeIndex}`}
//                   initial={{ scale: 1.16 }}
//                   animate={{ scale: activeIndex === index ? 1 : 1.16 }}
//                   transition={{ duration: 7, ease: "easeOut" }}
//                   className="absolute inset-0 bg-cover bg-center"
//                   style={{ backgroundImage: `url(${slide.image})` }}
//                 />

//                 {/* Premium Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/80" />
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_42%)]" />
//                 <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

//                 {/* Content */}
//                 <motion.div
//                   className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white"
//                   initial="hidden"
//                   animate={activeIndex === index ? "visible" : "hidden"}
//                   variants={{
//                     visible: { transition: { staggerChildren: 0.18 } },
//                   }}
//                 >
//                   {/* Badge */}
//                   <motion.div
//                     className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/85 shadow-lg backdrop-blur-md"
//                     variants={textVariants}
//                   >
//                     <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
//                       <Icon className="text-sm" />
//                     </span>
//                     {slide.subtitle}
//                   </motion.div>

//                   {/* Heading */}
//                   <motion.h1
//                     className="mx-auto max-w-5xl text-4xl font-black leading-[1.08] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
//                     variants={textVariants}
//                   >
//                     {slide.title}
//                   </motion.h1>

//                   {/* Divider */}
//                   <motion.div
//                     className="mt-6 h-[3px] w-24 rounded-full bg-primary"
//                     variants={textVariants}
//                   />

//                   {/* Description */}
//                   <motion.p
//                     className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg"
//                     variants={textVariants}
//                   >
//                     {slide.description}
//                   </motion.p>

//                   {/* Points */}
//                   {slide.points?.length > 0 && (
//                     <motion.div
//                       className="mt-7 flex flex-wrap justify-center gap-3"
//                       variants={textVariants}
//                     >
//                       {slide.points.map((point) => (
//                         <span
//                           key={point}
//                           className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur-md"
//                         >
//                           <FaCheckCircle className="text-primary" />
//                           {point}
//                         </span>
//                       ))}
//                     </motion.div>
//                   )}

//                   {/* Buttons */}
//                   {slide?.buttons?.length > 0 && (
//                     <motion.div
//                       className="mt-9 flex flex-wrap justify-center gap-4"
//                       variants={textVariants}
//                     >
//                       {slide.buttons.map((btn, i) => (
//                         <Link key={i} href={btn.link}>
//                           <Button variant={btn.variant || "primary"}>
//                             {btn.text}
//                           </Button>
//                         </Link>
//                       ))}
//                     </motion.div>
//                   )}
//                 </motion.div>
//               </div>
//             </div>
//           );
//         })}
//       </Slider>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
//         {sliderData.map((slide, index) => (
//           <button
//             key={slide.subtitle}
//             type="button"
//             onClick={() => sliderRef.current?.slickGoTo(index)}
//             aria-label={`Go to slide ${index + 1}`}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               activeIndex === index
//                 ? "w-10 bg-primary"
//                 : "w-2 bg-white/40 hover:bg-white"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// function PrevArrow({ onClick }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label="Previous slide"
//       className="absolute left-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-primary lg:flex lg:opacity-0 lg:group-hover:opacity-100"
//     >
//       <FaArrowLeft />
//     </button>
//   );
// }

// function NextArrow({ onClick }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label="Next slide"
//       className="absolute right-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-primary lg:flex lg:opacity-0 lg:group-hover:opacity-100"
//     >
//       <FaArrowRight />
//     </button>
//   );
// }

// "use client";

// import { useState, useRef } from "react";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import {
//   FaArrowLeft,
//   FaArrowRight,
//   FaHome,
//   FaLeaf,
//   FaCity,
//   FaCheckCircle,
// } from "react-icons/fa";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const sliderData = [
//   {
//     subtitle: "Anondo Bhubon",
//     title: "A New Horizon in Eco-Friendly Urban Living",
//     description:
//       "Discover Bangladesh’s first eco-conscious township — where nature, wellness, and modern living exist in harmony.",
//     image: "/slider/slider2.jpg",
//     icon: FaLeaf,
//     highlights: [
//       "Eco-conscious township",
//       "Modern lifestyle",
//       "Near Purbachal",
//     ],
//     buttons: [
//       { text: "Download Brochure", link: "/brochure", variant: "primary" },
//       { text: "View Pricing", link: "/pricing", variant: "outline" },
//     ],
//   },
//   {
//     subtitle: "Anondo Park City",
//     title: "Smart & Sustainable Living in Purbachal",
//     description:
//       "A visionary residential project by Bangladesh Police, spanning 115 hectares in the heart of Purbachal New Town with secure gated living and modern amenities.",
//     image: "/slider/slider3.jpg",
//     icon: FaCity,
//     highlights: ["Gated community", "Smart planning", "Sustainable living"],
//     buttons: [
//       { text: "Get Connected", link: "/contact", variant: "primary" },
//       { text: "View Pricing", link: "/pricing", variant: "outline" },
//     ],
//   },
// ];

// export default function LandingPage() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const sliderRef = useRef(null);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 900,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//     autoplay: true,
//     autoplaySpeed: 7000,
//     pauseOnHover: false,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (_, next) => setActiveIndex(next),
//   };

//   return (
//     <section className="group relative w-full overflow-hidden bg-[#07111f]">
//       <Slider ref={sliderRef} {...settings}>
//         {sliderData.map((slide, index) => {
//           const Icon = slide.icon;

//           return (
//             <div key={index}>
//               <div className="relative min-h-[720px] overflow-hidden lg:min-h-[860px]">
//                 {/* Background Image */}
//                 <motion.div
//                   key={`slide-bg-${index}-${activeIndex}`}
//                   initial={{ scale: 1.12 }}
//                   animate={{ scale: activeIndex === index ? 1 : 1.12 }}
//                   transition={{ duration: 7, ease: "easeOut" }}
//                   className="absolute inset-0 bg-cover bg-center"
//                   style={{ backgroundImage: `url(${slide.image})` }}
//                 />

//                 {/* Overlays */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
//                 <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

//                 {/* Content */}
//                 <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 lg:min-h-[860px]">
//                   <motion.div
//                     key={`slide-content-${index}-${activeIndex}`}
//                     initial={{ opacity: 0, y: 36 }}
//                     animate={
//                       activeIndex === index
//                         ? { opacity: 1, y: 0 }
//                         : { opacity: 0, y: 36 }
//                     }
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                     className="max-w-4xl text-white"
//                   >
//                     {/* Badge */}
//                     <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
//                       <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
//                         <Icon />
//                       </span>
//                       {slide.subtitle}
//                     </div>

//                     {/* Heading */}
//                     <h1 className="max-w-5xl text-4xl font-black leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
//                       {slide.title}
//                     </h1>

//                     {/* Description */}
//                     <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
//                       {slide.description}
//                     </p>

//                     {/* Highlights */}
//                     <div className="mt-8 flex gap-6">
//                       {slide.highlights.map((item) => (
//                         <div
//                           key={item}
//                           className="flex items-center gap-3 text-sm font-semibold text-white/85"
//                         >
//                           <FaCheckCircle className="shrink-0 text-primary" />
//                           <span>{item}</span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Buttons */}
//                     {slide.buttons?.length > 0 && (
//                       <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//                         {slide.buttons.map((btn) => (
//                           <Link
//                             key={btn.text}
//                             href={btn.link}
//                             className={
//                               btn.variant === "outline"
//                                 ? "inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur transition hover:border-primary hover:bg-primary/10"
//                                 : "inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-primary/20 transition hover:bg-secondary"
//                             }
//                           >
//                             {btn.text}
//                             <FaArrowRight className="text-sm" />
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </Slider>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
//         {sliderData.map((slide, index) => (
//           <button
//             key={slide.subtitle}
//             type="button"
//             onClick={() => sliderRef.current?.slickGoTo(index)}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               activeIndex === index
//                 ? "w-10 bg-primary"
//                 : "w-2 bg-white/40 hover:bg-white"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// function PrevArrow({ onClick }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label="Previous slide"
//       className="absolute left-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-primary lg:flex lg:opacity-0 lg:group-hover:opacity-100"
//     >
//       <FaArrowLeft />
//     </button>
//   );
// }

// function NextArrow({ onClick }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label="Next slide"
//       className="absolute right-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-primary lg:flex lg:opacity-0 lg:group-hover:opacity-100"
//     >
//       <FaArrowRight />
//     </button>
//   );
// }
