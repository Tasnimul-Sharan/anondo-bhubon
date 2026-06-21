// "use client";

// import { FaShieldAlt, FaFileSignature, FaMapMarkedAlt } from "react-icons/fa";

// export default function NRBTrustSection() {
//   const features = [
//     {
//       icon: <FaMapMarkedAlt />,
//       title: "Ready Land",
//       desc: "Physically available plots — no future promises or uncertainty.",
//     },
//     {
//       icon: <FaFileSignature />,
//       title: "Instant Registration",
//       desc: "Buy today and complete legal registration without delays.",
//     },
//     {
//       icon: <FaShieldAlt />,
//       title: "Zero Risk Investment",
//       desc: "Verified land with full documentation and transparency.",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         {/* HEADLINE */}
//         <h2 className="text-3xl md:text-5xl font-bold leading-tight">
//           Why Investors Trust Anondo Bhubon
//         </h2>

//         <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
//           Buy from anywhere in the world with complete legal assurance and zero
//           hassle.
//         </p>

//         {/* BADGES */}
//         <div className="flex flex-wrap justify-center gap-3 mt-8">
//           {[
//             "No development risk",
//             "Ready land",
//             "Full documentation support",
//             "Buy from abroad",
//           ].map((item, i) => (
//             <span
//               key={i}
//               className="px-4 py-2 text-sm font-medium bg-white border rounded-full shadow-sm"
//             >
//               {item}
//             </span>
//           ))}
//         </div>

//         {/* CARDS */}
//         <div className="grid md:grid-cols-3 gap-6 mt-14">
//           {features.map((item, i) => (
//             <div
//               key={i}
//               className="p-7 bg-white rounded-2xl border hover:border-primary/40 hover:shadow-xl transition duration-300"
//             >
//               {/* ICON */}
//               <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-xl mb-4 mx-auto">
//                 {item.icon}
//               </div>

//               {/* TITLE */}
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

//               {/* DESC */}
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  FaShieldAlt,
  FaFileSignature,
  FaMapMarkedAlt,
  FaCheckCircle,
  FaGlobeAsia,
} from "react-icons/fa";

export default function NRBTrustSection() {
  const features = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Ready Land",
      desc: "Physically available plots — no future promises or uncertainty.",
    },
    {
      icon: <FaFileSignature />,
      title: "Instant Registration",
      desc: "Buy today and complete legal registration without unnecessary delays.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Verified Investment",
      desc: "Verified land with full documentation, transparency, and legal support.",
    },
  ];

  const badges = [
    "No development risk",
    "Ready land",
    "Full documentation support",
    "Buy from abroad",
  ];

  return (
    <section className="relative overflow-hidden bg-primary/5 py-20 sm:py-24">
      {/* Soft Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Trusted by NRB Buyers
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-gray-900 md:text-5xl">
            Why Investors Trust Anondo Bhubon
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Buy from anywhere in the world with proper guidance, legal
            assistance, document support, and complete transparency.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-primary" />
        </div>

        {/* Trust Badges */}
        <div className="mx-auto mb-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {badges.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
            >
              <FaCheckCircle className="text-primary" />
              {item}
            </span>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white p-7 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
            >
              {/* Top Accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-primary" />

              {/* Soft Shape */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition duration-300 group-hover:bg-primary/10" />

              {/* Number */}
              <div className="relative mb-6 flex items-center justify-between">
                <span className="text-sm font-bold tracking-[0.18em] text-primary/70">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                  Trusted
                </span>
              </div>

              {/* Icon */}
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="relative text-2xl font-bold tracking-[-0.02em] text-gray-900">
                {item.title}
              </h3>

              <p className="relative mt-4 text-sm leading-8 text-gray-600">
                {item.desc}
              </p>

              <div className="relative mt-7 h-[2px] w-14 rounded-full bg-primary/30 transition-all duration-300 group-hover:w-24 group-hover:bg-primary" />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-12 max-w-5xl rounded-[2rem] border border-primary/10 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-2xl text-white">
              <FaGlobeAsia />
            </div>

            <div>
              <h3 className="text-xl font-bold tracking-[-0.02em] text-gray-900">
                Confidence for Overseas Buyers
              </h3>

              <p className="mt-2 text-sm leading-8 text-gray-600">
                Our team helps NRB investors with consultation, plot selection,
                legal documentation, payment guidance, family coordination, and
                registration support in Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
