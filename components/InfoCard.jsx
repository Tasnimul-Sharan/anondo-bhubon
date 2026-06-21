"use client";

import { React} from "react";

export default function InfoCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="group flex gap-4 p-5 rounded-xl border bg-white hover:shadow-xl transition duration-500">
      
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary text-xl group-hover:scale-110 transition">
        {icon}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}