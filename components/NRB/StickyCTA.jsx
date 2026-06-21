"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function StickyCTA() {
  return (
    <a
      href="https://wa.me/+8801313775333?text=Hello%20Anondo%20Cityscapers%2C%20I%20would%20like%20to%20inquire%20about%20your%20projects."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-12 right-6 z-50 w-14 h-14 flex items-center justify-center 
bg-green-500 text-white rounded-full 
shadow-[0_0_20px_rgba(37,211,102,0.6)] 
hover:scale-110 transition-all duration-500 animate-ripple"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
