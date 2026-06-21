"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function OfficeMapSection() {
  const address =
    "Printers Building, 5 Rajuk Avenue, Motijheel, Dhaka, Bangladesh";

  const directionUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address,
  )}`;

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="custom-container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#F48220]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-600">
              Our Location
            </p>

            <span className="h-[2px] w-10 bg-[#F48220]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-gray-900 sm:text-5xl">
            Visit Our Corporate Office
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#1F2937]/70">
            We are located at the heart of Motijheel, Dhaka — easily accessible
            from major commercial and business points of the city.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-stretch">
          {/* Info Card */}
          <div className="rounded-[2rem] border border-border_color bg-[#F8F9FC] p-7 shadow-soft sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-xl text-white">
              <FaMapMarkerAlt />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-soft_black">
              Printers Building
            </h3>

            <p className="mt-3 text-base leading-7 text-[#1F2937]/70">
              11–14th Floor, 5 Rajuk Avenue, Motijheel, Dhaka, Bangladesh.
            </p>

            <div className="mt-8 space-y-5 border-t border-border_color pt-6">
              <div className="flex gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                  <FaClock />
                </span>

                <div>
                  <p className="text-sm font-bold text-soft_black">
                    Office Hours
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#1F2937]/65">
                    Saturday – Thursday, 10:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                  <FaPhoneAlt />
                </span>

                <div>
                  <p className="text-sm font-bold text-soft_black">
                    Contact Support
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#1F2937]/65">
                    Reach us for project information, appointment, and customer
                    assistance.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={directionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:-translate-y-1 hover:bg-secondary hover:shadow-lift"
            >
              Get Direction
            </a>
          </div>

          {/* Map */}

          <div className="overflow-hidden rounded-[2rem] border border-border_color bg-white p-3 shadow-soft">
            <iframe
              title="Printers Building Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4812.923042245769!2d90.41187546190507!3d23.729719178595598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85855d36dcd%3A0xc01cee8905afc935!2sPrinter&#39;s%20Building!5e1!3m2!1sen!2sbd!4v1775975838729!5m2!1sen!2sbd"
              className="h-[480px] w-full rounded-[1.5rem] border-0 md:h-[600px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}