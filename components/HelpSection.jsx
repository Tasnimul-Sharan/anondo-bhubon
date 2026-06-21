// "use client";
// import { FaLock, FaUsers, FaHandshake, FaChartLine } from "react-icons/fa";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SectionHeader from "./SectionHeader";

// gsap.registerPlugin(ScrollTrigger);

// export default function HelpSection() {
//   const stats = [
//     { number: 325, label: "PEOPLE GUARDED", icon: <FaUsers size={24} /> },
//     { number: 500, label: "LOCK INSTALLED", icon: <FaLock size={24} /> },
//     { number: 255, label: "SATISFIED CUSTOMERS", icon: <FaHandshake size={24} /> },
//     { number: 150, label: "PROJECTS COMPLETED", icon: <FaChartLine size={24} /> },
//   ];

//   const statRefs = useRef([]);

//   useEffect(() => {
//     statRefs.current.forEach((el, i) => {
//       if (!el) return;

//       gsap.fromTo(
//         el,
//         { innerText: 0 },
//         {
//           innerText: stats[i].number,
//           duration: 2,
//           ease: "power3.out",
//           snap: { innerText: 1 },
//           scrollTrigger: {
//             trigger: el,
//             start: "top 85%",
//             toggleActions: "play none none reverse",
//           },
//           onUpdate: function () {
//             el.innerText = Math.floor(el.innerText);
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <section className="py-16 bg-white text-center relative">
//         <SectionHeader
//         subtitle="Our Support"
//         title="We Will Help You"
//         details="Thusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership rather than prospective experiences. Energistically myocardinate."
//       />
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-gray-100 md:p-12 p-10 rounded relative text-center"
//           >
//             <h3
//               ref={(el) => (statRefs.current[index] = el)}
//               className="text-3xl font-bold"
//             >
//               0
//             </h3>
//             <p className="uppercase text-sm font-semibold mt-1">{stat.label}</p>
//             <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
//               <div className="w-16 h-16 flex items-center justify-center rounded-full border bg-white shadow">
//                 {stat.icon}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <p className="mt-20 text-gray-600">
//         With over 5 decades of experience, We deliver
//       </p>
//       <h3 className="text-xl font-bold mt-2">
//         PREMIUM SECURITY SOLUTIONS AT BEST PRICE
//       </h3>
//     </section>
//   );
// }

"use client";
import { FaLock, FaUsers, FaHandshake, FaChartLine } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export default function HelpSection() {
  const stats = [
    { number: 325, label: "PEOPLE PROTECTED", icon: <FaUsers size={24} /> },
    {
      number: 500,
      label: "SECURITY SYSTEMS INSTALLED",
      icon: <FaLock size={24} />,
    },
    { number: 255, label: "HAPPY CLIENTS", icon: <FaHandshake size={24} /> },
    {
      number: 150,
      label: "SUCCESSFUL PROJECTS",
      icon: <FaChartLine size={24} />,
    },
  ];

  const statRefs = useRef([]);

  useEffect(() => {
    statRefs.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: stats[i].number,
          duration: 2,
          ease: "power3.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: function () {
            el.innerText = Math.floor(el.innerText);
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-16 bg-white text-center relative">
      <SectionHeader
        subtitle="Our Commitment"
        title="Trusted Security Support"
        details="With a professional team, modern technology, and years of proven experience, we provide reliable security solutions that ensure safety and peace of mind."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 md:px-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-off_white hover:bg-primary hover:text-white md:p-12 p-10 rounded relative text-center 
                       transition-all duration-500 transform hover:scale-105 hover:shadow-xl group"
          >
            <h3
              ref={(el) => (statRefs.current[index] = el)}
              className="text-3xl font-bold"
            >
              0
            </h3>
            <p className="uppercase text-sm font-semibold mt-1">{stat.label}</p>

            {/* Overlapping Icon */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full border bg-white 
                           transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white"
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-20 text-gray-600">
        Over a decade of proven expertise in safeguarding people and businesses.
      </p>
      <h3 className="text-xl font-bold mt-2">
        DELIVERING PREMIUM SECURITY SOLUTIONS AT THE BEST VALUE
      </h3>
    </section>
  );
}
