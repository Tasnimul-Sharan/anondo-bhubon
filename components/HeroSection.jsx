import React from "react";
import Link from "next/link";
import { finalRenderAssets } from "@/data/finalRendersData";

const HeroSection = ({ hero }) => {
  const backgroundImage = hero?.backgroundImage || finalRenderAssets.hero;

  return (
    <section className="relative w-full h-96 overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 transition bg-cover bg-center bg-no-repeat transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>
      <div className="relative z-10 text-center custom-container mx-auto">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          {hero.title}
        </h1>
        <div className="text-sm text-white flex items-center justify-center gap-1">
          <Link
            href="/"
            className="text-lg text-white transition duration-500 hover:text-secondary"
          >
            Home
          </Link>
          |<span className="text-lg text-white">{hero.title}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
