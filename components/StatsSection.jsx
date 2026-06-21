"use client";

import {
  FaChartLine,
  FaHardHat,
  FaRegListAlt,
  FaUserFriends,
} from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    {
      icon: <FaRegListAlt size={22} />,
      value: "30 min",
      label: "From Airport",
      note: "Hazrat Shahjalal International Airport access.",
    },
    {
      icon: <FaUserFriends size={22} />,
      value: "10 min",
      label: "From MRT-1 Depot",
      note: "Close to future transit-linked growth.",
    },
    {
      icon: <FaHardHat size={22} />,
      value: "3 km",
      label: "Forest Walkway",
      note: "A signature wellness spine through the township.",
    },
    {
      icon: <FaChartLine size={22} />,
      value: "40-50%",
      label: "Green & Open Land",
      note: "Reserved for water, landscape, and open infrastructure.",
    },
  ];

  return (
    <section className="bg-white px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-lg border border-border_color bg-off_white shadow-soft">
        <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
          <div className="border-b border-border_color bg-primary p-8 text-white lg:border-b-0 lg:border-r lg:border-white/20 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
              Project Scale
            </p>

            <h2 className="mt-4  text-3xl font-semibold leading-tight sm:text-4xl">
              Key numbers from the township vision.
            </h2>

            <p className="mt-5 text-sm font-medium leading-7 text-white/75">
              These headline figures frame the location, wellness, and
              sustainability promise of Anondo Bhubon.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="border-b border-border_color p-7 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-white text-primary shadow-sm">
                  {item.icon}
                </div>

                <p className="mt-8  text-4xl font-semibold leading-none text-primary lg:text-5xl">
                  {item.value}
                </p>

                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                  {item.label}
                </p>

                <p className="mt-4 text-sm font-medium leading-6 text-primary/60">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
