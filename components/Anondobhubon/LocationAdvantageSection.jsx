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
    <section id="location" className="bg-white py-20 sm:py-24">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left Content */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#F48220]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-600">
                Location Advantage
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-[-0.03em] text-gray-900 sm:text-5xl">
              Urban access with the calm of a green river-edge address
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#1F2937]/75">
              Anondo Bhubon is positioned near Purbachal’s expanding growth
              corridor, combining practical connectivity with the privacy, air,
              and visual calm of a water-led landscape.
            </p>

            {/* Location Items */}
            <div className="mt-8 divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
              {locationItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.text} className="flex items-center gap-4 py-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#2C3A83] text-sm text-white">
                      <Icon />
                    </span>

                    <p className="text-sm font-medium leading-6 text-[#1F2937]/75">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div>
            <div className="border border-[#E5E7EB] bg-white p-3">
              <FramedImage
                src={finalRenderAssets.location}
                alt="River-edge residential view at Anondo Bhubon"
                className="aspect-[7/5]"
                imageClassName="object-cover"
                style={{ aspectRatio: "7 / 5" }}
                imageStyle={{ objectFit: "cover" }}
                sizes="(min-width: 1024px) 56vw, 100vw"
              />
            </div>

            {/* Access Stats */}
            <div className="mt-5 grid border border-[#E5E7EB] bg-[#F8F9FC] sm:grid-cols-3">
              {accessStats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`p-5 ${
                      index !== accessStats.length - 1
                        ? "border-b border-[#E5E7EB] sm:border-b-0 sm:border-r"
                        : ""
                    }`}
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center bg-[#2C3A83] text-sm text-white">
                      <Icon />
                    </div>

                    <p className="text-3xl font-bold tracking-[-0.03em] text-gray-900">
                      {item.value}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#1F2937]/65">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Caption */}
            <div className="mt-5 border-l-2 border-[#F48220] bg-[#F8F9FC] px-5 py-4">
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center bg-[#F48220] text-white">
                  <FaMapMarkerAlt />
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F48220]">
                    Strategic Placement
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-gray-900">
                    East bank of River Sitalakhya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
