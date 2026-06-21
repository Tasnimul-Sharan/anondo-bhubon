"use client";

import Image from "next/image";
import {
  FaBuilding,
  FaLeaf,
  FaBullseye,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";

const cards = [
  {
    title: "Anondo ParkCity",
    text: "A premium project by Anondo Police Family Welfare Multipurpose Co-operative Society.",
    icon: FaBuilding,
    type: "small",
    color: "bg-secondary",
  },
  {
    title: "Anondo Bhuban",
    text: "Eco-friendly urban living near Purbachal with modern homes, green spaces & community amenities.",
    icon: FaLeaf,
    type: "small",
    color: "bg-secondary",
  },
  // {
  //   title: "Anondo Rosemont Estate",
  //   text: "Luxury villa community in Ulukhola near Purbachal, offering elegant living with nature, open spaces, and modern amenities.",
  //   icon: FaHome,
  //   type: "wide",
  //   color: "bg-primary",
  // },
  {
    title: "Our Vision",
    text: "Building sustainable communities and shaping a better future — where modern living meets nature in harmony.",
    icon: FaBullseye,
    type: "wide",
    color: "bg-secondary",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-off_white py-16 md:py-20">
      <div className="relative mx-auto max-w-[1380px] px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Image */}
          <div className="relative">
            <div className="absolute -left-5 -top-6 h-44 w-44 rounded-[2rem] bg-secondary/80" />
            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-[1.5rem] bg-primary/90" />

            <div className="relative rounded-[2.2rem] bg-white p-3 shadow-2xl">
              <div className="relative overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/about.jpg"
                  alt="Anondo Cityscapers"
                  width={700}
                  height={900}
                  className="h-[560px] w-full object-cover md:h-[700px]"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 rounded-2xl border border-border_color bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">
                    Premium Living
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-primary">
                    Sustainable Communities
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[3px] w-12 rounded-full bg-secondary" />
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">
                About Us
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-black leading-[1.08] md:text-5xl lg:text-6xl">
              Building Communities, <br />
              Shaping Futures
            </h2>

            <div className="mt-6 h-[3px] w-12 rounded-full bg-secondary" />

            <p className="mt-6 max-w-2xl text-lg leading-8">
              Transforming land into thriving communities —{" "}
              <span className="font-extrabold text-secondary">
                Anondo Cityscapers
              </span>{" "}
              creates sustainable spaces where people live, work, and grow
              together.
            </p>

            {/* Cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {cards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className={`group rounded-[1.6rem] border border-border_color bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                      item.type === "wide" ? "sm:col-span-2" : "min-h-[210px]"
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={`mt-1 flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full ${item.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}
                      >
                        <Icon className="text-[28px]" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-[20px] font-extrabold leading-tight">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-base leading-7 text-gray-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:bg-secondary hover:shadow-2xl">
                Explore More
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="text-sm font-medium text-primary/60">
                Premium township planning with modern lifestyle vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   FaBuilding,
//   FaLeaf,
//   FaBullseye,
//   FaArrowRight,
//   FaCheckCircle,
//   FaCity,
// } from "react-icons/fa";

// const cards = [
//   {
//     title: "Anondo ParkCity",
//     text: "A premium community project by Anondo Police Family Welfare Multipurpose Co-operative Society.",
//     icon: FaBuilding,
//   },
//   {
//     title: "Anondo Bhubon",
//     text: "Eco-friendly urban living near Purbachal with modern homes, green spaces, and community amenities.",
//     icon: FaLeaf,
//   },
//   {
//     title: "Our Vision",
//     text: "Building sustainable communities where modern living, nature, and future-ready planning work together.",
//     icon: FaBullseye,
//   },
// ];

// const highlights = [
//   "Sustainable township planning",
//   "Modern community lifestyle",
//   "Green and future-ready development",
// ];

// export default function AboutSection() {
//   return (
//     <section className="relative bg-off_white py-20 sm:py-24">
//       {/* Background Effects */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
//         <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="grid gap-12 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
//           {/* Left Image Area */}
//           <div className="relative">
//             <div className="absolute -left-5 -top-5 h-32 w-32 rounded-[2rem] bg-secondary/80" />
//             <div className="absolute -bottom-5 -right-5 h-40 w-40 rounded-[2rem] bg-primary/90" />

//             <div className="relative rounded-[2.2rem] border border-white bg-white p-3 shadow-2xl">
//               <div className="relative overflow-hidden rounded-[1.8rem]">
//                 <Image
//                   src="/about.jpg"
//                   alt="Anondo Cityscapers"
//                   width={760}
//                   height={900}
//                   className="h-[520px] w-full object-cover md:h-[660px]"
//                   priority
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

//                 {/* Floating Label */}
//                 <div className="absolute left-6 top-6 rounded-full border border-white/25 bg-white/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
//                   About Anondo Cityscapers
//                 </div>

//                 {/* Floating Card */}
//                 <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:right-auto sm:w-[330px]">
//                   <div className="flex items-start gap-4">
//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-xl text-white">
//                       <FaCity />
//                     </div>

//                     <div>
//                       <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
//                         Premium Living
//                       </p>
//                       <h3 className="mt-1 text-lg font-bold text-primary">
//                         Sustainable Communities
//                       </h3>
//                       <p className="mt-2 text-sm leading-6 text-gray-600">
//                         Planned spaces for better living, growth, and future
//                         value.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div>
//             <div className="mb-5 flex items-center gap-4">
//               <span className="h-[3px] w-12 rounded-full bg-secondary" />
//               <span className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">
//                 About Us
//               </span>
//             </div>

//             <h2 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.04em] text-gray-950 md:text-5xl lg:text-6xl">
//               Building Communities, Shaping Futures
//             </h2>

//             <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
//               Transforming land into thriving communities —{" "}
//               <span className="font-extrabold text-primary">
//                 Anondo Cityscapers
//               </span>{" "}
//               creates sustainable spaces where people live, work, grow, and
//               invest with confidence.
//             </p>

//             {/* Highlights */}
//             <div className="mt-7 grid gap-3">
//               {highlights.map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-3 text-sm font-semibold text-gray-700"
//                 >
//                   <FaCheckCircle className="shrink-0 text-secondary" />
//                   <span>{item}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Cards */}
//             <div className="mt-10 grid gap-5">
//               {cards.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <div
//                     key={item.title}
//                     className="group relative overflow-hidden rounded-[1.7rem] border border-border_color bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
//                   >
//                     <div className="absolute left-0 top-0 h-full w-1 bg-primary opacity-0 transition duration-300 group-hover:opacity-100" />

//                     <div className="flex items-start gap-5">
//                       <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
//                         <Icon />
//                       </div>

//                       <div>
//                         <div className="mb-2 flex items-center gap-3">
//                           <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary/60">
//                             {String(index + 1).padStart(2, "0")}
//                           </span>

//                           <span className="h-px w-8 bg-primary/20" />
//                         </div>

//                         <h3 className="text-xl font-extrabold tracking-[-0.02em] text-gray-950">
//                           {item.title}
//                         </h3>

//                         <p className="mt-2 text-sm leading-7 text-gray-600 md:text-base">
//                           {item.text}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* CTA */}
//             <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
//               <Link
//                 href="/about"
//                 className="group inline-flex w-fit items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-primary/20 transition duration-300 hover:bg-secondary"
//               >
//                 Explore More
//                 <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//               </Link>

//               <p className="max-w-sm text-sm font-medium leading-7 text-gray-500">
//                 Premium township planning with modern lifestyle vision.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
