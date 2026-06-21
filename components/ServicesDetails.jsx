"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function ServicesDetails({ service }) {
  return (
    <section className="py-24 max-w-6xl mx-auto md:px-0 px-6">
      <div className="relative w-full h-[50rem] mb-8">
        <Image
          src={service.services.image}
          alt={service.services.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mb-12">
        {/* <h2 className="text-3xl font-bold text-secondary mb-4">
          {service.services.title}
        </h2> */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {service.services.description}
        </p>

        <ul className="space-y-3 mb-6 text-gray-700">
          {service.services.checklist.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-primary mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <blockquote className="italic text-secondary_two md:text-lg text-base border-l-4 border-primary bg-primary/5 p-4 rounded-md pl-4">
          “{service.services.quote}”
        </blockquote>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {service.services.subImages.slice(0, 2).map((img, idx) => (
          <div key={idx} className="relative w-full md:h-[400px] h-12">
            <Image
              src={img}
              alt={service.services.title}
              fill
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
