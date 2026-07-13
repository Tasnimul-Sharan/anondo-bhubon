import {
  FaBuilding,
  FaMapMarkerAlt,
  FaPlaneDeparture,
  FaRoad,
  FaTrain,
  FaWater,
} from "react-icons/fa";

import { finalRenderAssets } from "@/data/finalRendersData";
import FramedImage from "./FramedImage";

const accessStats = [
  {
    value: "30 min",
    label: "Hazrat Shahjalal International Airport",
    icon: FaPlaneDeparture,
  },
  {
    value: "10 min",
    label: "MRT-1 Depot Station",
    icon: FaTrain,
  },
  {
    value: "Direct",
    label: "Dhaka Bypass & Purbachal Expressway",
    icon: FaRoad,
  },
];

const locationItems = [
  {
    text: "Close to Bangladesh Hi-Tech Park",
    icon: FaBuilding,
  },
  {
    text: "Near Purbachal Central Business District",
    icon: FaMapMarkerAlt,
  },
  {
    text: "Connected to Bashundhara Residential Zone",
    icon: FaRoad,
  },
  {
    text: "Buffered by the River Sitalakhya and open green land",
    icon: FaWater,
  },
];

export default function LocationAdvantageSection() {
  return (
    <section
      id="location"
      className="relative isolate overflow-hidden bg-[#F4F2ED] py-20 sm:py-24 lg:py-32"
    >
      {/* Premium Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#F8F6F1_0%,#FFFFFF_48%,#EEF0F7_100%)]" />

        <div className="absolute -left-32 top-12 h-[380px] w-[380px] rounded-full bg-[#F48220]/10 blur-[115px]" />

        <div className="absolute -right-36 bottom-0 h-[500px] w-[500px] rounded-full bg-[#2C3A83]/10 blur-[135px]" />

        <div className="absolute -right-40 top-12 h-[440px] w-[440px] rounded-full border border-[#2C3A83]/[0.06]" />

        <div className="absolute -right-20 top-28 h-[300px] w-[300px] rounded-full border border-[#2C3A83]/[0.07]" />

        <div className="absolute right-8 top-44 h-[150px] w-[150px] rounded-full border border-[#F48220]/10" />

        <div className="absolute left-[7%] top-0 h-full w-px bg-[#2C3A83]/[0.035]" />

        <div className="absolute right-[7%] top-0 h-full w-px bg-[#2C3A83]/[0.035]" />
      </div>

      <div className="site-shell relative z-10">
        {/* Section Header */}
        <div className="mb-12 grid gap-7 lg:mb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#F48220]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F48220]">
                Location Advantage
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#17203A] sm:text-5xl lg:text-[3.65rem]">
              Connected to the city, surrounded by calm.
            </h2>
          </div>

          <p className="max-w-xl text-[15px] font-medium leading-7 text-[#616779] lg:justify-self-end lg:text-right">
            Anondo Bhubon combines direct access to Purbachal’s growth corridor
            with the privacy, open air and natural character of a river-edge
            destination.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-7 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
          {/* Left Information Panel */}
          <div className="relative overflow-hidden bg-[#202D72] p-7 text-white shadow-[0_30px_90px_rgba(30,39,91,0.24)] sm:p-9 lg:p-10 xl:p-12">
            {/* Decorative Elements */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px]" />

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

              <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full border border-white/10" />

              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#F48220]/15 blur-3xl" />
            </div>

            <div className="relative z-10 flex h-full flex-col">
              <div className="inline-flex w-fit items-center gap-3 border border-white/15 bg-white/[0.06] px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#F48220] shadow-[0_0_0_5px_rgba(244,130,32,0.15)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/80">
                  Strategic Placement
                </span>
              </div>

              <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.26em] text-[#F7A55A]">
                Purbachal Growth Corridor
              </p>

              <h3 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl">
                A river-edge address with strong urban connectivity.
              </h3>

              <p className="mt-5 text-[15px] font-medium leading-7 text-white/65">
                Located near key business, technology and residential zones,
                Anondo Bhubon offers a balanced setting for living, investment
                and long-term growth.
              </p>

              {/* Location Features */}
              <div className="mt-9">
                {locationItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className={`group flex items-center gap-4 py-5 ${
                        index !== locationItems.length - 1
                          ? "border-b border-white/15"
                          : ""
                      }`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-white/[0.07] text-sm text-[#F7A55A] transition duration-300 group-hover:border-[#F48220] group-hover:bg-[#F48220] group-hover:text-white">
                        <Icon />
                      </span>

                      <p className="text-sm font-semibold leading-6 text-white/72">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Location Footer */}
              <div className="mt-auto pt-9">
                <div className="flex items-start gap-4 border-t border-white/15 pt-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F48220] text-white">
                    <FaMapMarkerAlt />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                      Project Location
                    </p>

                    <p className="mt-2 text-base font-semibold text-white">
                      East bank of River Sitalakhya
                    </p>

                    <p className="mt-1 text-sm font-medium text-white/55">
                      Near Purbachal New Town
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Area */}
          <div className="flex flex-col gap-6">
            {/* Location Image */}
            <div className="relative overflow-hidden border border-[#2C3A83]/10 bg-white p-3 shadow-[0_20px_65px_rgba(27,35,75,0.1)] sm:p-4">
              <div className="relative overflow-hidden">
                <FramedImage
                  src={finalRenderAssets.location}
                  alt="River-edge residential view at Anondo Bhubon"
                  className="aspect-[7/5]"
                  imageClassName="object-cover transition duration-700 hover:scale-[1.03]"
                  style={{ aspectRatio: "7 / 5" }}
                  imageStyle={{ objectFit: "cover" }}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17203A]/55 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 flex items-center gap-3 border border-white/20 bg-[#17203A]/35 px-4 py-2.5 backdrop-blur-md sm:left-7 sm:top-7">
                  <span className="h-2 w-2 rounded-full bg-[#F48220]" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white">
                    River-Edge Living
                  </p>
                </div>

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F7A55A]">
                    Anondo Bhubon
                  </p>

                  <h3 className="mt-2 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-3xl">
                    Where urban connectivity meets a natural landscape.
                  </h3>
                </div>
              </div>
            </div>

            {/* Access Statistics */}
            <div className="grid border border-[#2C3A83]/10 bg-white shadow-[0_14px_45px_rgba(27,35,75,0.07)] sm:grid-cols-3">
              {accessStats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.label}
                    className={`group relative overflow-hidden p-6 transition duration-300 hover:bg-[#F7F7FA] ${
                      index !== accessStats.length - 1
                        ? "border-b border-[#2C3A83]/10 sm:border-b-0 sm:border-r"
                        : ""
                    }`}
                  >
                    <div className="absolute right-0 top-0 h-1 w-12 bg-[#F48220] transition-all duration-300 group-hover:w-full" />

                    <span className="flex h-11 w-11 items-center justify-center bg-[#EEF0F8] text-sm text-[#2C3A83] transition duration-300 group-hover:bg-[#202D72] group-hover:text-white">
                      <Icon />
                    </span>

                    <p className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-[#20263A]">
                      {item.value}
                    </p>

                    <p className="mt-3 text-sm font-medium leading-6 text-[#616779]">
                      {item.label}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}