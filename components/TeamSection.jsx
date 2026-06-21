"use client";

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const teamMembers = [
  {
    name: "Abdul Kabir",
    role: "Chief Security Officer",
    img: "/gazi-md-mozammel-haque.jpeg",
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Saiful Alam",
    role: "Operations Manager",
    img: "/gazi-md-mozammel-haque--.jpeg",
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Mahmudul Hasan",
    role: "Senior Security Supervisor",
    img: "/about-page.jpg",
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Salman Rahman",
    role: "Client Relations Manager",
    img: "/about.jpg",
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <SectionHeader
        subtitle="Our Experts"
        title="Meet Our Professional Security Team"
        details="Our highly trained security experts and management team ensure the safety, protection, and peace of mind of our clients at every level."
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 custom-container mx-auto px-6 md:px-0">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="rounded-2xl overflow-hidden bg-white transition-all transform duration-500"
          >
            <div className="relative group">
              <Image
                src={member.img}
                alt={member.name}
                width={1200}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-500">
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 p-2 rounded-full hover:bg-primary hover:text-white text-xl transition-all transform duration-500"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 p-2 rounded-full hover:bg-primary hover:text-white text-xl transition-all transform duration-500"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 p-2 rounded-full hover:bg-primary hover:text-white text-xl transition-all transform duration-500"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
