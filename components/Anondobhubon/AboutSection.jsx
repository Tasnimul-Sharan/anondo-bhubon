"use client";

import { pillars } from "@/data/anondoBhubonData";
import { finalRenderAssets } from "@/data/finalRendersData";
import FramedImage from "./FramedImage";

const locationStats = [
  { value: "5 min", label: "from Kanchan Bridge" },
  { value: "30 min", label: "from Hazrat Shahjalal International Airport" },
  { value: "10 min", label: "from MRT-1 Depot Station" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Content */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#F48220]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#5F6AA2]">
                About Us
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Sustainable living, inspired by nature
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#1F2937]/75">
              Anondo Bhubon is more than a residential project. It is a
              carefully planned lifestyle address where green infrastructure,
              wellness, security, and modern urban access come together.
            </p>

            {/* Corporate Statement */}
            <div className="mt-8 border-l-2 border-[#F48220] bg-[#F8F9FC] px-6 py-5">
              <p className="text-xl font-semibold leading-8 text-gray-900">
                We are not just offering homes. We are shaping a healthier way
                to live, connect, move, and grow.
              </p>
            </div>

            {/* Pillars */}
            <div className="mt-8 space-y-4">
              {pillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className="border border-[#E5E7EB] bg-white p-5 transition duration-300 hover:border-gray-900/30 hover:bg-[#F8F9FC]"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-gray-900 text-sm font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold leading-tight text-gray-900">
                        {pillar.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-[#1F2937]/70">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Visual Area */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-[#E5E7EB] bg-white p-3">
                <FramedImage
                  src={finalRenderAssets.courtyardPremiumPlus}
                  alt="Courtyard green residential living at Anondo Bhubon"
                  className="aspect-[4/5]"
                />
              </div>

              <div className="border border-[#E5E7EB] bg-white p-3 sm:translate-y-8">
                <FramedImage
                  src={finalRenderAssets.riverPremiumPlus}
                  alt="River view residential landscape at Anondo Bhubon"
                  className="aspect-[4/5]"
                />
              </div>
            </div>

            {/* Location Card */}
            <div className="mt-6 border border-[#E5E7EB] bg-[#F8F9FC] p-6 sm:mt-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F48220]">
                    Location Advantage
                  </p>

                  <p className="mt-2 max-w-md text-sm leading-7 text-[#1F2937]/70">
                    Minutes from key access points, yet surrounded by water,
                    greenery, and the calm edge of Purbachal.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex shrink-0 items-center justify-center bg-gray-900 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-[#F48220]"
                >
                  Learn More
                </a>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {locationStats.map((item) => (
                  <div
                    key={item.label}
                    className="border border-[#E5E7EB] bg-white p-4"
                  >
                    <p className="text-2xl font-bold tracking-[-0.03em] text-gray-900">
                      {item.value}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#1F2937]/65">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { pillars } from "@/data/anondoBhubonData";
// import FramedImage from "./FramedImage";

// const locationStats = [
//   { value: "5 min", label: "from Kanchan Bridge" },
//   { value: "30 min", label: "from Hazrat Shahjalal International Airport" },
//   { value: "10 min", label: "from MRT-1 Depot Station" },
// ];

// export default function AboutSection() {
//   return (
//     <section id="about" className="bg-white py-20 sm:py-24">
//       <div className="site-shell">
//         <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
//           {/* Left Content */}
//           <div>
//             {/* Section Label */}
//             <div className="mb-5 flex items-center gap-4">
//               <span className="h-[2px] w-12 bg-[#F48220]" />
//               <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#5F6AA2]">
//                 About Us
//               </p>
//             </div>

//             <h2 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-[-0.03em] text-gray-900 sm:text-5xl">
//               Sustainable living, inspired by nature
//             </h2>

//             <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#1F2937]/75">
//               Anondo Bhubon is more than a residential project. It is a
//               carefully planned lifestyle address where green infrastructure,
//               wellness, security, and modern urban access come together.
//             </p>

//             {/* Statement Box */}
//             <div className="mt-8 border-l-4 border-[#F48220] bg-[#F8F9FC] px-6 py-5">
//               <p className="text-xl font-semibold leading-snug text-gray-900 sm:text-2xl">
//                 We are not just offering homes. We are shaping a healthier way
//                 to live, connect, move, and grow.
//               </p>
//             </div>

//             {/* Pillars */}
//             <div className="mt-8 grid gap-4">
//               {pillars.map((pillar, index) => (
//                 <article
//                   key={pillar.title}
//                   className="group border border-[#E5E7EB] bg-white p-5 transition duration-300 hover:border-gray-900/35 hover:bg-[#F8F9FC]"
//                 >
//                   <div className="flex gap-4">
//                     <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-gray-900 text-sm font-bold text-white transition duration-300 group-hover:bg-[#F48220]">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <div>
//                       <h3 className="text-lg font-bold leading-tight text-gray-900">
//                         {pillar.title}
//                       </h3>

//                       <p className="mt-2 text-sm font-medium leading-7 text-[#1F2937]/70">
//                         {pillar.text}
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>

//           {/* Right Visual */}
//           <div>
//             <div className="grid gap-5 sm:grid-cols-2">
//               <div className="border border-[#E5E7EB] bg-white p-3">
//                 <FramedImage
//                   src="/anondo-bhubon/LAKE 3.png"
//                   alt="Lake infrastructure inside Anondo Bhubon"
//                   className="aspect-[4/5]"
//                 />
//               </div>

//               <div className="border border-[#E5E7EB] bg-white p-3 sm:translate-y-8">
//                 <FramedImage
//                   src="/anondo-bhubon/COMMUNITY GATHERING 4.png"
//                   alt="Community park and pool landscape"
//                   className="aspect-[4/5]"
//                 />
//               </div>
//             </div>

//             {/* Location Card */}
//             <div className="relative z-10 mt-6 border border-[#E5E7EB] bg-white p-6 shadow-sm sm:-mt-8 sm:mx-8">
//               <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F48220]">
//                     Location Advantage
//                   </p>

//                   <p className="mt-2 max-w-md text-sm font-medium leading-7 text-[#1F2937]/70">
//                     Minutes from key access points, yet surrounded by water,
//                     greenery, and the calm edge of Purbachal.
//                   </p>
//                 </div>

//                 <a
//                   href="#contact"
//                   className="inline-flex shrink-0 items-center justify-center bg-gray-900 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#F48220]"
//                 >
//                   Learn More
//                 </a>
//               </div>

//               <div className="mt-6 grid gap-3 sm:grid-cols-3">
//                 {locationStats.map((item) => (
//                   <div
//                     key={item.label}
//                     className="border border-[#E5E7EB] bg-[#F8F9FC] p-4"
//                   >
//                     <p className="text-3xl font-bold tracking-[-0.03em] text-gray-900">
//                       {item.value}
//                     </p>

//                     <p className="mt-2 text-sm font-medium leading-6 text-[#1F2937]/70">
//                       {item.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
