"use client";

import Image from "next/image";
import {
  FaBuilding,
  FaLeaf,
  FaBullseye,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";

const cards = [
  {
    title: "Anondo ParkCity",
    text: "A premium project by Anondo Police Family Welfare Multipurpose Co-operative Society.",
    icon: FaBuilding,
    type: "small",
    color: "bg-secondary",
  },
  {
    title: "Anondo Bhuban",
    text: "Eco-friendly urban living near Purbachal with modern homes, green spaces & community amenities.",
    icon: FaLeaf,
    type: "small",
    color: "bg-secondary",
  },
  // {
  //   title: "Anondo Rosemont Estate",
  //   text: "Luxury villa community in Ulukhola near Purbachal, offering elegant living with nature, open spaces, and modern amenities.",
  //   icon: FaHome,
  //   type: "wide",
  //   color: "bg-primary",
  // },
  {
    title: "Our Vision",
    text: "Building sustainable communities and shaping a better future — where modern living meets nature in harmony.",
    icon: FaBullseye,
    type: "wide",
    color: "bg-secondary",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-off_white py-16 md:py-20">
      <div className="relative mx-auto max-w-[1380px] px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Image */}
          <div className="relative">
            <div className="absolute -left-5 -top-6 h-44 w-44 rounded-[2rem] bg-secondary/80" />
            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-[1.5rem] bg-primary/90" />

            <div className="relative rounded-[2.2rem] bg-white p-3 shadow-2xl">
              <div className="relative overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/about.jpg"
                  alt="Anondo Cityscapers"
                  width={700}
                  height={900}
                  className="h-[560px] w-full object-cover md:h-[700px]"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 rounded-2xl border border-border_color bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">
                    Premium Living
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-primary">
                    Sustainable Communities
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[3px] w-12 rounded-full bg-secondary" />
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">
                About Us
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-black leading-[1.08] md:text-5xl lg:text-6xl">
              Building Communities, <br />
              Shaping Futures
            </h2>

            <div className="mt-6 h-[3px] w-12 rounded-full bg-secondary" />

            <p className="mt-6 max-w-2xl text-lg leading-8">
              Transforming land into thriving communities —{" "}
              <span className="font-extrabold text-secondary">
                Anondo Cityscapers
              </span>{" "}
              creates sustainable spaces where people live, work, and grow
              together.
            </p>

            {/* Cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {cards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className={`group rounded-[1.6rem] border border-border_color bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                      item.type === "wide" ? "sm:col-span-2" : "min-h-[210px]"
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={`mt-1 flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-full ${item.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}
                      >
                        <Icon className="text-[28px]" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-[20px] font-extrabold leading-tight">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-base leading-7 text-gray-600">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:bg-secondary hover:shadow-2xl">
                Explore More
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="text-sm font-medium text-primary/60">
                Premium township planning with modern lifestyle vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}