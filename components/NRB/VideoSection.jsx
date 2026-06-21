// "use client";

// import { FaPlayCircle, FaCheckCircle, FaVideo, FaShieldAlt } from "react-icons/fa";

// export default function VideoSection() {
//   const VIDEO_ID = "YOUR_VIDEO_ID";

//   const trustPoints = [
//     "Real Project Footage",
//     "Registration Process Overview",
//     "Transparent Buyer Guidance",
//   ];

//   return (
//     <section className="bg-primary/5 py-20 sm:py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Header */}
//         <div className="mx-auto mb-14 max-w-3xl text-center">
//           <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
//             Project Video
//           </p>

//           <h2 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 md:text-5xl">
//             See the Project & Registration Process
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
//             Watch real footage of the land, development progress, and how NRB
//             buyers can legally own property from abroad with proper guidance.
//           </p>

//           <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-primary" />
//         </div>

//         {/* Main Video Card */}
//         <div className="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-xl">
//           <div className="grid gap-0 lg:grid-cols-[0.68fr_0.32fr]">
//             {/* Video */}
//             <div className="relative aspect-video overflow-hidden bg-gray-900 lg:aspect-auto lg:min-h-[460px]">
//               <iframe
//                 className="h-full w-full"
//                 src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
//                 title="Project Video"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//               />

//               {/* Visual Overlay */}
//               <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition duration-300 hover:opacity-100">
//                 <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-6xl text-white backdrop-blur">
//                   <FaPlayCircle />
//                 </div>
//               </div>
//             </div>

//             {/* Info Panel */}
//             <div className="flex flex-col justify-center bg-white p-7 sm:p-8 lg:p-10">
//               <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-white">
//                 <FaVideo />
//               </div>

//               <h3 className="text-2xl font-bold tracking-[-0.02em] text-gray-900">
//                 Watch Before You Decide
//               </h3>

//               <p className="mt-4 text-sm leading-8 text-gray-600">
//                 This video helps you understand the project location,
//                 development condition, buyer support process, and registration
//                 guidance clearly.
//               </p>

//               <div className="mt-7 space-y-4 border-t border-primary/10 pt-6">
//                 {trustPoints.map((item) => (
//                   <div
//                     key={item}
//                     className="flex items-start gap-3 text-sm font-medium text-gray-700"
//                   >
//                     <FaCheckCircle className="mt-1 shrink-0 text-primary" />
//                     <span>{item}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/5 p-5">
//                 <div className="flex items-start gap-3">
//                   <FaShieldAlt className="mt-1 shrink-0 text-primary" />

//                   <p className="text-sm leading-7 text-gray-600">
//                     For final purchase decisions, please verify all project,
//                     legal, and registration documents with our authorized team.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Trust Points */}
//         <div className="mt-8 grid gap-4 md:grid-cols-3">
//           {trustPoints.map((item) => (
//             <div
//               key={item}
//               className="flex items-center justify-center gap-3 rounded-2xl border border-primary/10 bg-white p-5 text-sm font-semibold text-gray-700 shadow-sm"
//             >
//               <FaCheckCircle className="text-primary" />
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { FaCheckCircle, FaVideo, FaShieldAlt } from "react-icons/fa";

export default function VideoSection() {
  const VIDEO_ID = "YOUR_VIDEO_ID";
  const [videoActive, setVideoActive] = useState(false);

  const trustPoints = [
    "Real Project Footage",
    "Registration Process Overview",
    "Transparent Buyer Guidance",
  ];

  const handleWheel = (e) => {
    window.scrollBy({
      top: e.deltaY,
      left: e.deltaX,
      behavior: "auto",
    });
  };

  return (
    <section className="bg-primary/5 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Project Video
          </p>

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 md:text-5xl">
            See the Project & Registration Process
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            Watch real footage of the land, development progress, and how NRB
            buyers can legally own property from abroad with proper guidance.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-primary" />
        </div>

        {/* Main Video Card */}
        <div className="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-xl">
          <div className="grid gap-0 lg:grid-cols-[0.68fr_0.32fr]">
            {/* Video */}
            <div
              className="relative aspect-video overflow-hidden bg-black lg:aspect-auto lg:min-h-[460px]"
              onMouseLeave={() => setVideoActive(false)}
            >
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                title="Project Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              {/* Transparent scroll layer */}
              {!videoActive && (
                <button
                  type="button"
                  aria-label="Enable video controls"
                  onClick={() => setVideoActive(true)}
                  onWheel={handleWheel}
                  className="absolute inset-0 z-10 cursor-pointer bg-transparent"
                />
              )}
            </div>

            {/* Info Panel */}
            <div className="flex flex-col justify-center bg-white p-7 sm:p-8 lg:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-white">
                <FaVideo />
              </div>

              <h3 className="text-2xl font-bold tracking-[-0.02em] text-gray-900">
                Watch Before You Decide
              </h3>

              <p className="mt-4 text-sm leading-8 text-gray-600">
                This video helps you understand the project location,
                development condition, buyer support process, and registration
                guidance clearly.
              </p>

              <div className="mt-7 space-y-4 border-t border-primary/10 pt-6">
                {trustPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm font-medium text-gray-700"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/5 p-5">
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="mt-1 shrink-0 text-primary" />

                  <p className="text-sm leading-7 text-gray-600">
                    For final purchase decisions, please verify all project,
                    legal, and registration documents with our authorized team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Points */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {trustPoints.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-3 rounded-2xl border border-primary/10 bg-white p-5 text-sm font-semibold text-gray-700 shadow-sm"
            >
              <FaCheckCircle className="text-primary" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
