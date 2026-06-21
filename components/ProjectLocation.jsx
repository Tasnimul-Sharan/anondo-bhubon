"use client";

import { FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";

export default function ProjectLocation() {
  const mapLink = "https://maps.app.goo.gl/B49QCQ87TzCy8kKY9";

  const mapEmbedUrl =
    "https://www.google.com/maps?q=23.8505327,90.5917677&z=16&output=embed";

  return (
    <section className="relative overflow-hidden  py-20 sm:py-24">
      {/* Background Decoration */}
      {/* <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#F48220]/10 blur-3xl" /> */}

      <div className="custom-container relative mx-auto px-6">
        {/* Premium Map */}
        <div className="relative overflow-hidden rounded-[2rem] border border-border_color bg-white p-3 shadow-soft sm:rounded-[2.5rem] sm:p-4">
          {/* Floating Location Badge */}
          <div className="absolute left-6 top-6 z-10 max-w-[290px] rounded-3xl border border-white/50 bg-white/95 p-5 shadow-lift backdrop-blur-md sm:left-8 sm:top-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F48220]">
                  Project Location
                </p>

                <h3 className="mt-2 text-lg font-bold leading-snug text-soft_black">
                  Anondo Bhuban Site Office
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#1F2937]/65">
                  Project site location with direct map navigation support.
                </p>
              </div>
            </div>
          </div>

          {/* Get Direction Button */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-6 top-6 z-10 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lift transition duration-300 hover:-translate-y-1 hover:bg-secondary sm:right-8 sm:top-8 sm:text-sm"
          >
            <FaLocationArrow className="text-sm" />
            Get Directions
          </a>

          <iframe
            title="Anondo Bhuban Site Office Location Map"
            src={mapEmbedUrl}
            className="h-[460px] w-full rounded-[1.5rem] border-0 grayscale-[15%] sm:rounded-[2rem] md:h-[620px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          {/* Bottom Gradient */}
          <div className="pointer-events-none absolute inset-x-4 bottom-4 h-24 rounded-b-[2rem] bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
