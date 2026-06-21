import { finalRenderAssets } from "@/data/finalRendersData";
import FramedImage from "./FramedImage";

export default function LifestyleSection() {
  return (
    <section className="bg-[#FFFFFF] py-20 sm:py-24 lg:py-28">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          {/* Left Image */}
          <div className="border border-[#5F6AA2]/20 bg-[#FFFFFF] p-3 shadow-sm">
            <FramedImage
              src={finalRenderAssets.riverside}
              alt="Riverside park along the water"
              className="aspect-[16/10]"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
          </div>

          {/* Right Content */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#F48220]" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#5F6AA2]">
                A New Way of Life
              </p>
            </div>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#2C3A83] sm:text-5xl">
              A place where the future feels calmer, healthier, and more
              connected.
            </h2>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#1F2937]/75">
              Anondo Bhubon is a vision for green living that remains accessible
              to modern Dhaka. It brings family homes, wellness, mobility, civic
              life, and investment potential into one carefully planned address.
            </p>

            <div className="mt-8 border-l-2 border-[#F48220] bg-[#5F6AA2]/10 p-5">
              <p className="text-lg font-semibold leading-8 text-[#2C3A83]">
                Designed as a complete lifestyle destination where nature,
                accessibility, residential comfort, and future value work
                together.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border border-[#5F6AA2]/20 bg-[#FFFFFF] p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F48220]">
                  Developer
                </p>
                <p className="mt-3 text-lg font-bold leading-snug text-[#2C3A83]">
                  Ulukhola Sustainable Township Consortium
                </p>
              </div>

              <div className="border border-[#5F6AA2]/20 bg-[#FFFFFF] p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F48220]">
                  Head Office
                </p>
                <p className="mt-3 text-lg font-bold leading-snug text-[#2C3A83]">
                  Ulukhola, near Purbachal New Town
                </p>
              </div>
            </div>

            {/* <div className="mt-7 h-[3px] w-16 bg-[#F48220]" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
