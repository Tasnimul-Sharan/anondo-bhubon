// export default function NRBHeroSection() {
//   return (
//     <section className="relative w-full py-32 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white text-center overflow-hidden">
//       {/* Glow Effects */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full"></div>
//       <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-500/10 blur-[100px] rounded-full"></div>

//       <div className="max-w-4xl mx-auto px-4 relative z-10">
//         {/* Badge */}
//         <p className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs tracking-widest text-white/70">
//           NRB EXCLUSIVE INVESTMENT OPPORTUNITY
//         </p>

//         {/* Heading */}
//         <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
//           Own Land in Bangladesh
//           <br />
//           <span className="text-primary">With Instant Legal Registration</span>
//         </h1>

//         {/* Sub text */}
//         <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
//           Secure your future with ready land near Purbachal — fully verified,
//           legally safe, and available for NRB investors worldwide.
//         </p>

//         {/* Trust line */}
//         <div className="mt-6 text-sm text-gray-400">
//           Trusted by NRB buyers from UK 🇬🇧 UAE 🇦🇪 USA 🇺🇸
//         </div>

//         {/* CTA */}
//         <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
//           <a className="bg-primary hover:bg-primary/90 px-7 py-3 rounded-xl font-semibold shadow-lg transition">
//             Book Site Visit
//           </a>

//           <a className="border border-white/30 hover:border-white px-7 py-3 rounded-xl font-semibold transition">
//             WhatsApp Now
//           </a>
//         </div>

//         {/* Extra Hint */}
//         <p className="mt-6 text-xs text-gray-500">
//           No hidden charges • Full legal support • Remote purchase available
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  FaArrowRight,
  FaCheckCircle,
  FaFileSignature,
  FaGlobeAsia,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function NRBHeroSection() {
  const WHATSAPP_NUMBER = "8801313775333";

  const trustPoints = [
    "Ready land near Purbachal",
    "Instant legal registration",
    "Remote purchase support",
    "Full documentation guidance",
  ];

  const countries = [
    "Saudi Arabia",
    "UAE",
    "Qatar",
    "Kuwait",
    "Oman",
    "UK",
    "USA",
    "Malaysia",
    "South Africa",
    "Japan",
    "South Korea",
  ];

  return (
    <section className="relative overflow-hidden bg-[#07111f] py-24 text-white sm:py-28 lg:py-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-green-500/15 blur-[110px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/75 backdrop-blur">
              <FaGlobeAsia className="text-primary" />
              NRB Exclusive Investment Opportunity
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Own Land in Bangladesh with{" "}
              <span className="text-primary">Instant Legal Registration</span>
            </h1>

            {/* Sub Text */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Secure your future with ready land near Purbachal — fully
              verified, legally safe, and supported for NRB investors worldwide.
            </p>

            {/* Trust Points */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-white/85"
                >
                  <FaCheckCircle className="shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#lead-form"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-lg transition hover:bg-primary/90"
              >
                Book Site Visit
                <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello Anondo Cityscapers, I would like to know more about NRB land investment opportunities.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur transition hover:border-primary hover:bg-primary/10"
              >
                <FaWhatsapp className="text-lg text-green-400" />
                WhatsApp Now
              </a>
            </div>

            {/* Country Badges */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                Trusted by NRB buyers from
              </p>

              <div className="flex flex-wrap gap-3">
                {countries.map((country) => (
                  <span
                    key={country}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/75"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Trust Card */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-primary/50 to-green-500/20 blur-xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/20" />

              <div className="relative">
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-3xl text-white">
                  <FaShieldAlt />
                </div>

                <h3 className="text-2xl font-bold tracking-[-0.02em] text-white">
                  Safe Investment Support for Overseas Buyers
                </h3>

                <p className="mt-4 text-sm leading-8 text-white/65">
                  From consultation to registration, our team assists NRB buyers
                  with plot selection, legal verification, documentation, and
                  family coordination in Bangladesh.
                </p>

                <div className="mt-8 space-y-4">
                  <TrustCardItem
                    icon={<FaMapMarkedAlt />}
                    title="Ready Land"
                    text="Physically available plots with clear project information."
                  />

                  <TrustCardItem
                    icon={<FaFileSignature />}
                    title="Legal Registration"
                    text="Guided registration process with proper documentation."
                  />

                  <TrustCardItem
                    icon={<FaShieldAlt />}
                    title="Verified Process"
                    text="Transparent support for NRB buyers and families."
                  />
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="text-sm leading-7 text-white/75">
                    No hidden charges • Full legal support • Remote purchase
                    available
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

function TrustCardItem({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary">
        {icon}
      </div>

      <div>
        <h4 className="text-sm font-bold text-white">{title}</h4>
        <p className="mt-1 text-xs leading-6 text-white/60">{text}</p>
      </div>
    </div>
  );
}
