"use client";

import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaFileAlt,
  FaLaptop,
  FaStamp,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    title: "Consultation",
    desc: "WhatsApp / Zoom discussion from anywhere in the world",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Choose Plot",
    desc: "Select your preferred land with full guidance",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Verify Documents",
    desc: "Complete legal verification and transparency",
    icon: <FaFileAlt />,
  },
  {
    title: "Online Booking",
    desc: "Secure your plot remotely without hassle",
    icon: <FaLaptop />,
  },
  {
    title: "Registration",
    desc: "Official legal registration in Bangladesh",
    icon: <FaStamp />,
  },
  {
    title: "Ownership",
    desc: "You become the verified legal owner",
    icon: <FaCheckCircle />,
  },
];

export default function BuyingProcessSection() {
  return (
    <section className="relative overflow-hidden bg-primary/5 py-20 sm:py-24">
      {/* Soft Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Buying Process
          </p>

          <h2 className="text-4xl font-bold tracking-[-0.03em] text-gray-900 md:text-5xl">
            Simple 6-Step Buying Process
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
            From online consultation to final ownership, our team guides NRB
            buyers through every step with proper documentation and support.
          </p>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-primary" />
        </div>

        {/* Timeline Wrapper */}
        <div className="relative mx-auto max-w-6xl">
          {/* Center Line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 rounded-full bg-primary/15 md:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`group relative w-full overflow-hidden rounded-[2rem] border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl md:w-[46%] md:p-7 ${
                      isLeft ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {/* Top Accent */}
                    <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-primary" />

                    {/* Soft Shape */}
                    <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition duration-300 group-hover:bg-primary/10" />

                    {/* Mobile Step Number */}
                    <div className="relative mb-5 flex items-center justify-between md:hidden">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                        Step
                      </span>
                    </div>

                    {/* Connector Line */}
                    <div
                      className={`pointer-events-none absolute top-1/2 hidden h-[2px] w-12 -translate-y-1/2 bg-primary/25 md:block ${
                        isLeft ? "-right-12" : "-left-12"
                      }`}
                    />

                    {/* Header */}
                    <div
                      className={`relative mb-4 flex items-center gap-4 ${
                        isLeft ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      {!isLeft && (
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                          {step.icon}
                        </div>
                      )}

                      <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-primary/70">
                          Step {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="text-xl font-bold tracking-[-0.02em] text-gray-900 md:text-2xl">
                          {step.title}
                        </h3>
                      </div>

                      {isLeft && (
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                          {step.icon}
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="relative text-sm leading-7 text-gray-600 md:text-base">
                      {step.desc}
                    </p>

                    {/* Bottom Line */}
                    <div
                      className={`relative mt-6 h-[2px] w-14 rounded-full bg-primary/30 transition-all duration-300 group-hover:w-24 group-hover:bg-primary ${
                        isLeft ? "md:ml-auto" : ""
                      }`}
                    />
                  </div>

                  {/* Center Circle */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-primary text-sm font-bold text-white shadow-lg md:flex">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-primary/10 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-xl text-white">
              <FaCheckCircle />
            </div>

            <p className="text-sm leading-7 text-gray-600">
              Our team supports NRB buyers through consultation, plot selection,
              document verification, booking, registration, and ownership
              confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}