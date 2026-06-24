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
      <div className="site-shell">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.75fr_0.45fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[2px] w-11 bg-secondary" />

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                Our Location
              </p>
            </div>

            <h2 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-primary sm:text-5xl">
              Visit our corporate office in Motijheel.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-primary/70">
              We are located at the heart of Dhaka's commercial district,
              making project consultation, appointment coordination, and
              customer support easy to access.
            </p>
          </div>

          <a
            href={directionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-secondary px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-primary"
          >
            Get Direction
          </a>
        </div>

        <div className="grid overflow-hidden border border-border_color bg-off_white shadow-soft lg:grid-cols-[0.34fr_0.66fr]">
          <div className="border-b border-border_color bg-white p-7 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="flex h-12 w-12 items-center justify-center bg-primary text-xl text-white">
              <FaMapMarkerAlt />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-primary">
              Printers Building
            </h3>

            <p className="mt-3 text-base leading-7 text-primary/70">
              11-14th Floor, 5 Rajuk Avenue, Motijheel, Dhaka, Bangladesh.
            </p>

            <div className="mt-8 space-y-5 border-t border-border_color pt-6">
              <MapInfoItem
                icon={<FaClock />}
                label="Office Hours"
                value="Saturday - Thursday, 10:00 AM - 6:00 PM"
              />

              <MapInfoItem
                icon={<FaPhoneAlt />}
                label="Contact Support"
                value="Reach us for project information, appointment, and customer assistance."
              />
            </div>
          </div>

          <div className="bg-white p-3">
            <iframe
              title="Printers Building Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4812.923042245769!2d90.41187546190507!3d23.729719178595598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85855d36dcd%3A0xc01cee8905afc935!2sPrinter&#39;s%20Building!5e1!3m2!1sen!2sbd!4v1775975838729!5m2!1sen!2sbd"
              className="h-[460px] w-full border-0 md:h-[600px]"
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

function MapInfoItem({ icon, label, value }) {
  return (
    <div className="flex gap-4">
      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center bg-off_white text-primary">
        {icon}
      </span>

      <div>
        <p className="text-sm font-bold text-primary">{label}</p>

        <p className="mt-1 text-sm leading-6 text-primary/65">{value}</p>
      </div>
    </div>
  );
}
