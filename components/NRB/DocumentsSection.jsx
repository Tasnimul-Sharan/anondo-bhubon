// "use client";
// import {
//   FaPassport,
//   FaIdCard,
//   FaCamera,
//   FaFileSignature,
// } from "react-icons/fa";

// import { FaFileAlt } from "react-icons/fa";
// const docs = [
//   {
//     title: "Passport Copy",
//     desc: "Clear copy of your valid passport for verification purposes.",
//     icon: FaPassport,
//   },
//   {
//     title: "NID (Optional)",
//     desc: "National ID card copy (optional but recommended).",
//     icon: FaIdCard,
//   },
//   {
//     title: "Photographs",
//     desc: "Recent passport size photographs with white background.",
//     icon: FaCamera,
//   },
//   {
//     title: "Power of Attorney",
//     desc: "Document if someone is acting on your behalf.",
//     icon: FaFileSignature,
//   },
// ];

// export default function DocumentsSection() {
//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Top label */}
//         <p className="text-primary font-medium mb-2 tracking-wide">
//           GET STARTED
//         </p>

//         {/* Heading */}
//         <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
//           Required Documents
//         </h2>

//         {/* Subtext */}
//         <p className="text-gray-500 mb-14 max-w-2xl mx-auto">
//           Please prepare the following documents for a smooth and hassle-free
//           property registration process.
//         </p>

//         {/* Cards */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {docs.map((doc, i) => {
//             const Icon = doc.icon;

//             return (
//               <div
//                 key={i}
//                 className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
//               >
//                 {/* Top Accent */}
//                 <div className="absolute left-0 top-0 h-1 w-full bg-primary" />

//                 {/* Number */}
//                 <div className="mb-6 flex items-center justify-between">
//                   <span className="text-sm font-bold tracking-[0.18em] text-primary/70">
//                     {String(i + 1).padStart(2, "0")}
//                   </span>

//                   <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
//                     Document
//                   </span>
//                 </div>

//                 {/* Icon */}
//                 <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
//                   <Icon />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold tracking-[-0.02em] text-gray-900">
//                   {doc.title}
//                 </h3>

//                 {/* Divider */}
//                 <div className="mt-4 h-[2px] w-12 rounded-full bg-primary/40 transition-all duration-300 group-hover:w-20 group-hover:bg-primary" />

//                 {/* Description */}
//                 <p className="mt-5 text-sm leading-7 text-gray-600">
//                   {doc.desc}
//                 </p>

//                 {/* Bottom Soft Shape */}
//                 <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-primary/5 transition-all duration-300 group-hover:scale-125 group-hover:bg-primary/10" />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  FaPassport,
  FaIdCard,
  FaCamera,
  FaFileSignature,
  FaFileAlt,
  FaCheckCircle,
  FaFolderOpen,
} from "react-icons/fa";

const docs = [
  {
    title: "Passport Copy",
    desc: "Clear copy of your valid passport for verification purposes.",
    icon: FaPassport,
    status: "Mandatory",
  },
  {
    title: "NID Optional",
    desc: "National ID card copy is optional but recommended.",
    icon: FaIdCard,
    status: "Recommended",
  },
  {
    title: "Photographs",
    desc: "Recent passport size photographs with white background.",
    icon: FaCamera,
    status: "Mandatory",
  },
  {
    title: "Power of Attorney",
    desc: "Required if someone is acting or signing documents on your behalf.",
    icon: FaFileSignature,
    status: "If Applicable",
  },
];

export default function DocumentsSection() {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      {/* Soft Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          {/* Left Content */}
          <div className="rounded-[2rem] border border-primary/10 bg-primary p-8 text-white shadow-xl sm:p-10 lg:sticky lg:top-24 lg:self-start">
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur">
              <FaFileAlt />
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-white/70">
              Get Started
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl">
              Required Documents
            </h2>

            <p className="mt-5 text-sm leading-8 text-white/80 sm:text-base">
              Please prepare the following documents for a smooth and
              hassle-free property registration process.
            </p>

            <div className="mt-8 space-y-4 border-t border-white/15 pt-7">
              <SupportPoint text="Identity verification support" />
              <SupportPoint text="Power of Attorney guidance" />
              <SupportPoint text="NRB buyer documentation assistance" />
              <SupportPoint text="Registration preparation support" />
            </div>
          </div>

          {/* Right Documents Area */}
          <div>
            {/* Top Intro */}
            <div className="mb-6 rounded-[2rem] border border-primary/10 bg-primary/5 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.02em] text-gray-900">
                    Document Checklist
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Keep these documents ready before starting the registration
                    process.
                  </p>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl text-primary shadow-sm">
                  <FaFolderOpen />
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              {docs.map((doc, i) => {
                const Icon = doc.icon;

                return (
                  <div
                    key={doc.title}
                    className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[2rem] border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
                  >
                    {/* Background Shape */}
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition-all duration-300 group-hover:scale-125 group-hover:bg-primary/10" />

                    {/* Top Row */}
                    <div className="relative mb-7 flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                        {doc.status}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon />
                    </div>

                    {/* Content */}
                    <div className="relative flex flex-1 flex-col">
                      <h3 className="text-xl font-bold tracking-[-0.02em] text-gray-900">
                        {doc.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-600">
                        {doc.desc}
                      </p>

                      <div className="mt-auto pt-6">
                        <div className="flex items-center gap-2 border-t border-primary/10 pt-4 text-sm font-semibold text-primary">
                          <FaCheckCircle />
                          <span>Ready for verification</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Note */}
            <div className="mt-6 rounded-[2rem] border border-primary/10 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                  <FaCheckCircle />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Need Help Preparing Documents?
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Our support team can guide you through document preparation,
                    verification, Power of Attorney requirements, and
                    registration assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportPoint({ text }) {
  return (
    <div className="flex items-start gap-3 text-sm font-medium text-white/90">
      <FaCheckCircle className="mt-1 shrink-0 text-white" />
      <span>{text}</span>
    </div>
  );
}

// "use client";

// import {
//   FaPassport,
//   FaIdCard,
//   FaCamera,
//   FaFileSignature,
//   FaCheckCircle,
//   FaArrowRight,
//   FaFolderOpen,
// } from "react-icons/fa";

// const docs = [
//   {
//     title: "Passport Copy",
//     desc: "Clear copy of your valid passport for verification purposes.",
//     icon: FaPassport,
//     tag: "Identity",
//   },
//   {
//     title: "NID Optional",
//     desc: "National ID card copy is optional but recommended for verification.",
//     icon: FaIdCard,
//     tag: "Verification",
//   },
//   {
//     title: "Photographs",
//     desc: "Recent passport size photographs with a clean white background.",
//     icon: FaCamera,
//     tag: "Photo",
//   },
//   {
//     title: "Power of Attorney",
//     desc: "Required if someone is acting or signing documents on your behalf.",
//     icon: FaFileSignature,
//     tag: "Legal",
//   },
// ];

// export default function DocumentsSection() {
//   return (
//     <section className="bg-white py-20 sm:py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
//           {/* Left Intro Panel */}
//           <div className="lg:sticky lg:top-24">
//             <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
//               Required Documents
//             </p>

//             <h2 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 md:text-5xl">
//               Prepare Your Documents Before Registration
//             </h2>

//             <p className="mt-5 text-base leading-8 text-gray-600">
//               To ensure a smooth property registration process, please keep
//               these documents ready. Our support team will guide you through
//               verification, legal preparation, and submission.
//             </p>

//             <div className="mt-8 rounded-3xl border border-primary/10 bg-primary/5 p-6">
//               <div className="flex items-start gap-4">
//                 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-2xl text-white">
//                   <FaFolderOpen />
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900">
//                     Document Support Available
//                   </h3>

//                   <p className="mt-2 text-sm leading-7 text-gray-600">
//                     We assist NRB buyers with document checking, Power of
//                     Attorney guidance, and family coordination in Bangladesh.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8 grid gap-3">
//               <SupportPoint text="Remote document guidance" />
//               <SupportPoint text="Power of Attorney assistance" />
//               <SupportPoint text="Registration preparation support" />
//             </div>
//           </div>

//           {/* Right Timeline */}
//           <div className="relative">
//             <div className="absolute left-6 top-0 hidden h-full w-px bg-primary/15 sm:block" />

//             <div className="space-y-6">
//               {docs.map((doc, index) => {
//                 const Icon = doc.icon;

//                 return (
//                   <div key={doc.title} className="relative sm:pl-16">
//                     {/* Timeline Dot */}
//                     <div className="absolute left-0 top-7 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-primary text-sm font-bold text-white shadow-md sm:flex">
//                       {String(index + 1).padStart(2, "0")}
//                     </div>

//                     <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
//                       <div className="grid gap-0 md:grid-cols-[180px_1fr]">
//                         {/* Icon Block */}
//                         <div className="flex flex-col items-center justify-center bg-primary/5 p-8 text-center">
//                           <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-3xl text-primary shadow-sm transition duration-300 group-hover:bg-primary group-hover:text-white">
//                             <Icon />
//                           </div>

//                           <span className="mt-4 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-sm">
//                             {doc.tag}
//                           </span>
//                         </div>

//                         {/* Content */}
//                         <div className="p-6 sm:p-8">
//                           <div className="mb-3 flex items-center gap-3 sm:hidden">
//                             <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-xs font-bold text-white">
//                               {String(index + 1).padStart(2, "0")}
//                             </span>
//                             <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
//                               {doc.tag}
//                             </span>
//                           </div>

//                           <h3 className="text-2xl font-bold tracking-[-0.02em] text-gray-900">
//                             {doc.title}
//                           </h3>

//                           <p className="mt-3 text-sm leading-8 text-gray-600">
//                             {doc.desc}
//                           </p>

//                           <div className="mt-6 flex items-center gap-3 text-sm font-bold text-primary">
//                             <span>Prepare Document</span>
//                             <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function SupportPoint({ text }) {
//   return (
//     <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
//       <FaCheckCircle className="shrink-0 text-primary" />
//       <span>{text}</span>
//     </div>
//   );
// }
