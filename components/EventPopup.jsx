"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

export default function EventPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    // ✅ Overlay (outside click)
    <div
      onClick={() => setShow(false)}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl shadow-2xl w-full custom-container mx-auto p-3 md:p-5"
      >
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-md hover:scale-110 transition"
        >
          <FaTimes className="text-gray-700 text-lg" />
        </button>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="relative w-full h-[250px] md:h-[600px]">
            <Image
              src="/invitation-card-01.png"
              alt="Event 1"
              fill
              className="object-contain w-full h-full rounded-xl"
              priority
            />
          </div>

          <div className="relative w-full h-[250px] md:h-[600px]">
            <Image
              src="/invitation-card-02.png"
              alt="Event 2"
              fill
              className="object-contain w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
