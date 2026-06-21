"use client";
import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaMoneyBillWave,
  FaUsers,
  FaUserShield,
  FaUserTie,
  FaCalendarCheck,
  FaVideo,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHome className="w-6 h-6" />,
    title: "Household Security",
    description:
      "Deployment of professional guards for residential houses, apartments, and housing societies. Guards trained to maintain safety and polite etiquette for a secure family environment.",
  },
  {
    icon: <FaBuilding className="w-6 h-6" />,
    title: "Office Security",
    description:
      "Round-the-clock vigilance for corporate offices. Access control, visitor screening, CCTV monitoring, and lobby/front-desk duty with professional behavior.",
  },
  {
    icon: <FaIndustry className="w-6 h-6" />,
    title: "Factory & Industrial Security",
    description:
      "Specialized in factory gate access, worker entry/exit, shift-change management, and goods-in-transit verification. Prepared for high-risk hours during opening and closing.",
  },
  {
    icon: <FaMoneyBillWave className="w-6 h-6" />,
    title: "Money Transfer Security",
    description:
      "Armed escorts for banks and institutions handling cash or assets. Guards trained in convoy protection, armed defense, and instant law enforcement coordination.",
  },
  {
    icon: <FaCalendarCheck className="w-6 h-6" />,
    title: "Event Management & Security",
    description:
      "Concerts, sports, political rallies, or corporate programs—trained teams handle crowd control, VIP protection, and emergency evacuation with CCTV monitoring.",
  },
  {
    icon: <FaUserShield className="w-6 h-6" />,
    title: "Armed & Unarmed Guards",
    description:
      "Licensed armed guards for high-risk areas, and unarmed guards skilled in martial arts & self-defense for general deployments.",
  },
  {
    icon: <FaUserTie className="w-6 h-6" />,
    title: "Bodyguard Services",
    description:
      "Close protection for VIPs, executives, and public figures. Trained in defensive driving, tactical positioning, and etiquette for professional interactions.",
  },
  {
    title: "Crowd Control",
    icon: <FaUsers className="w-5 h-5" />,
    description:
      "Techniques to manage large gatherings safely. Preventing stampedes, violence, or disorder during events or emergencies.",
  },
  {
    title: "Factory Access Security",
    icon: <FaIndustry className="w-5 h-5" />,
    description:
      "Specialized training to handle opening and closing hours of factories. Managing entry of workers, vehicles, and goods during peak times.",
  },
  {
    title: "CCTV Surveillance",
    icon: <FaVideo className="w-5 h-5" />,
    description:
      "Hands-on training in monitoring live CCTV feeds. Identifying abnormal activity, recording, and reporting procedures.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-100">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border transition-all hover:shadow-xl bg-white transform duration-500"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="p-3 border-2 border-primary rounded-lg text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  {service.icon}
                </span>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-all transform duration-500">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{service.description}</p>

              <div className="relative mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold cursor-pointer">
                See Details <FaArrowRight className="w-3 h-3" />
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
