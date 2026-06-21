import Image from "next/image";
import { amenities } from "@/data/anondoBhubonData";

const amenityDescriptions = {
  "SECTOR CENTRAL AMENITIES 1":
    "A premium social hub designed for residents to connect, relax, host gatherings and enjoy community lifestyle facilities.",
  "BLOCK COMMUNITY LAKE 3":
    "Open green space planned for everyday recreation, family time, walking, seating and neighborhood interaction.",
  "SECTOR CENTRAL AMENITIES 2":
    "Organized parking courts designed to support smooth mobility, safer access and a cleaner residential environment.",
  "SECTOR CENTRAL STADIUM 1":
    "Active lifestyle zones with sports and fitness-focused amenities for residents of all age groups.",
  "SECTOR CENTRAL STADIUM 2":
    "Dedicated outdoor courts and play fields that encourage health, recreation and community engagement.",
  "SECTOR CENTRAL AMENITIES 3":
    "Safe, colorful and family-friendly play areas designed for children's recreation and social development.",
  "PREMIUM 1 SECTOR- BLOCK C- COMMUNITY FARMING 1":
    "Shared community kitchen facilities planned for gatherings, events and collective neighborhood activities.",
  "RIVER SIDE 1":
    "A calm riverside destination with walking edges, seating zones and scenic open-air recreation.",
  "PREMIUM 1 SECTOR- FOREST WALK 2":
    "Quiet wellness pockets designed for mindfulness, relaxation and a balanced daily lifestyle.",
  "PREMIUM 1 SECTOR- FOREST WALK 1":
    "A peaceful green environment for personal wellness, breathing space and mental refreshment.",
  "SECTOR CENTRAL AMENITIES 7":
    "Comfortable outdoor leisure areas designed for residents to unwind within nature-led surroundings.",
  "MEGA MALL 6":
    "A future-ready business and technology zone supporting work, innovation, connectivity and digital lifestyle.",
};

function getImageTitle(imagePath) {
  return (imagePath.split("/").pop() || "Amenity")
    .replace(/\.(png|jpe?g|webp)$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function toSentenceCase(value) {
  return value
    .toLowerCase()
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="relative overflow-hidden bg-[#F8F9FC] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#F48220]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#2C3A83]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-6 lg:px-12">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 bg-[#F48220]" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#5F6AA2]">
              Urban Amenities and Facilities
            </p>

            <span className="h-[2px] w-12 bg-[#F48220]" />
          </div>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-5xl">
            A township built for everyday rituals, wellness and community life.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-[#1F2937]/75">
            From clubhouses and sports courts to riverside walks, meditation
            decks, gardens, kitchens and play spaces, every sector is designed
            to support shared life.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {amenities.map((item, index) => {
            const imageTitle = getImageTitle(item.image);
            const displayTitle = toSentenceCase(imageTitle);

            return (
              <article
                key={`${imageTitle}-${item.image}`}
                className="group flex h-full flex-col overflow-hidden border border-[#5F6AA2]/20 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:border-[#2C3A83]/35 hover:shadow-[0_24px_70px_rgba(31,41,55,0.14)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#5F6AA2]/10">
                  <Image
                    src={item.image}
                    alt={displayTitle}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.06]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/45 via-transparent to-transparent opacity-80" />

                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-[#2C3A83] text-sm font-bold text-white shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute bottom-5 left-5">
                    <p className="bg-white/95 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2C3A83] shadow-sm backdrop-blur">
                      Lifestyle Facility
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.02em] text-gray-700 sm:text-3xl">
                    {displayTitle}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-[#1F2937]/75">
                    {amenityDescriptions[imageTitle] ||
                      "A planned township facility designed to support comfort, convenience and community lifestyle."}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="flex items-center justify-between border-t border-[#5F6AA2]/20 pt-5">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5F6AA2]/70">
                        Community Lifestyle
                      </p>

                      <div className="relative h-[3px] w-24 overflow-hidden">
                        <span className="absolute left-0 top-0 h-full w-12 bg-[#F48220] transition-all duration-500 ease-out group-hover:w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
