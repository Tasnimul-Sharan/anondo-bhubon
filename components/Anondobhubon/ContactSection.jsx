// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import {
//   FaArrowRight,
//   FaCheckCircle,
//   FaEnvelope,
//   FaExclamationCircle,
//   FaGlobe,
//   FaPhoneAlt,
//   FaShieldAlt,
// } from "react-icons/fa";

// import { finalRenderAssets } from "@/data/finalRendersData";

// const WEB3FORMS_ACCESS_KEY =
//   "bb771512-cc14-49a0-8b55-1c41f949153b";

// const contactItems = [
//   {
//     label: "Call Our Advisor",
//     value: "+880 1318-252050",
//     href: "tel:+8801318252050",
//     icon: FaPhoneAlt,
//   },
//   {
//     label: "Email Us",
//     value: "info@anondobhubon.com",
//     href: "mailto:info@anondobhubon.com",
//     icon: FaEnvelope,
//   },
//   {
//     label: "Visit Website",
//     value: "anondobhubon.com",
//     href: "https://www.anondobhubon.com",
//     icon: FaGlobe,
//   },
// ];

// const inputClassName = `
//   mt-2.5
//   h-[52px]
//   w-full
//   border
//   border-[#D9DCE8]
//   bg-[#FAFAFC]
//   px-4
//   text-[15px]
//   font-medium
//   text-[#17203A]
//   outline-none
//   transition
//   duration-300
//   placeholder:text-[#17203A]/35
//   hover:border-[#B9BED1]
//   focus:border-[#2C3A83]
//   focus:bg-white
//   focus:ring-4
//   focus:ring-[#2C3A83]/[0.08]
// `;

// export default function ContactSection() {
//   const [result, setResult] = useState("");
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (event) => {
//     event.preventDefault();

//     if (loading) return;

//     setLoading(true);
//     setResult("");
//     setSuccess(false);

//     const form = event.currentTarget;
//     const formData = new FormData(form);

//     try {
//       const response = await fetch(
//         "https://api.web3forms.com/submit",
//         {
//           method: "POST",
//           body: formData,
//         },
//       );

//       const data = await response.json();

//       if (!response.ok || !data.success) {
//         throw new Error(
//           data.message || "Form submission failed.",
//         );
//       }

//       setSuccess(true);

//       setResult(
//         "Thank you. Your private consultation request has been received. Our advisor will contact you shortly.",
//       );

//       form.reset();
//     } catch (error) {
//       console.error(
//         "Contact form submission failed:",
//         error,
//       );

//       setSuccess(false);

//       setResult(
//         "We could not submit your request right now. Please try again or contact us directly.",
//       );
//     } finally {
//       setLoading(false);

//       window.setTimeout(() => {
//         setResult("");
//       }, 7000);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="relative isolate overflow-hidden bg-[#F4F2ED] py-20 sm:py-24 lg:py-32"
//     >
//       {/* Decorative Background */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#F48220]/[0.07] blur-3xl" />

//         <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#2C3A83]/[0.08] blur-3xl" />

//         <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,58,131,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,58,131,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
//       </div>

//       <div className="site-shell">
//         <div className="overflow-hidden border border-[#2C3A83]/10 bg-white shadow-[0_32px_90px_rgba(25,32,65,0.14)]">
//           <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
//             {/* Left Image Area */}
//             <div className="relative min-h-[640px] overflow-hidden bg-[#17203A] text-white lg:min-h-full">
//               <Image
//                 src={finalRenderAssets.forestWalkAlternate}
//                 alt="Premium landscaped community at Anondo Bhubon"
//                 fill
//                 className="object-cover transition duration-1000 hover:scale-[1.02]"
//                 sizes="(max-width: 1024px) 100vw, 46vw"
//               />

//               {/* Image Overlays */}
//               <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,17,43,0.16)_0%,rgba(10,17,43,0.48)_45%,rgba(10,17,43,0.96)_100%)]" />

//               <div className="absolute inset-0 bg-[#2C3A83]/20 mix-blend-multiply" />

//               <div className="relative flex h-full min-h-[640px] flex-col justify-between p-7 sm:p-10 lg:p-12">
//                 {/* Top Badge */}
//                 <div className="flex items-start justify-between gap-6">
//                   <div className="inline-flex items-center gap-3 border border-white/20 bg-white/[0.08] px-4 py-2.5 backdrop-blur-md">
//                     <span className="h-2 w-2 rounded-full bg-[#F48220] shadow-[0_0_0_5px_rgba(244,130,32,0.18)]" />

//                     <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-white/90">
//                       Private Consultation
//                     </span>
//                   </div>

//                   <span className="hidden text-right text-[10px] font-bold uppercase tracking-[0.28em] text-white/55 sm:block">
//                     Anondo Bhubon
//                     <br />
//                     Future Smart City
//                   </span>
//                 </div>

//                 {/* Main Content */}
//                 <div className="max-w-xl">
//                   <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#F7A95D]">
//                     Begin Your Ownership Journey
//                   </p>

//                   <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.45rem]">
//                     A distinguished address for the life you
//                     envision.
//                   </h2>

//                   <p className="mt-6 max-w-lg text-[15px] font-medium leading-7 text-white/75 sm:text-base">
//                     Speak with a dedicated advisor to explore
//                     residences, investment opportunities, project
//                     planning and private site visits at Anondo
//                     Bhubon.
//                   </p>

//                   {/* Feature Highlights */}
//                   <div className="mt-8 grid border-y border-white/15 sm:grid-cols-3">
//                     <div className="py-5 sm:pr-5">
//                       <p className="text-xl font-semibold text-white">
//                         Premium
//                       </p>

//                       <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
//                         Residences
//                       </p>
//                     </div>

//                     <div className="border-t border-white/15 py-5 sm:border-l sm:border-t-0 sm:px-5">
//                       <p className="text-xl font-semibold text-white">
//                         Planned
//                       </p>

//                       <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
//                         Community
//                       </p>
//                     </div>

//                     <div className="border-t border-white/15 py-5 sm:border-l sm:border-t-0 sm:pl-5">
//                       <p className="text-xl font-semibold text-white">
//                         Connected
//                       </p>

//                       <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
//                         Location
//                       </p>
//                     </div>
//                   </div>

//                   {/* Contact Information */}
//                   <div className="mt-7 grid gap-3">
//                     {contactItems.map(
//                       ({
//                         label,
//                         value,
//                         href,
//                         icon: Icon,
//                       }) => (
//                         <a
//                           key={label}
//                           href={href}
//                           target={
//                             href.startsWith("http")
//                               ? "_blank"
//                               : undefined
//                           }
//                           rel={
//                             href.startsWith("http")
//                               ? "noreferrer"
//                               : undefined
//                           }
//                           className="group flex items-center gap-4 border border-white/15 bg-white/[0.07] px-4 py-3.5 backdrop-blur-md transition duration-300 hover:border-white/30 hover:bg-white/[0.12]"
//                         >
//                           <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white/10 text-[#F7A95D] transition duration-300 group-hover:bg-[#F48220] group-hover:text-white">
//                             <Icon className="text-sm" />
//                           </span>

//                           <span className="min-w-0">
//                             <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
//                               {label}
//                             </span>

//                             <span className="mt-1 block truncate text-sm font-semibold text-white sm:text-[15px]">
//                               {value}
//                             </span>
//                           </span>

//                           <FaArrowRight className="ml-auto text-xs text-white/45 transition duration-300 group-hover:translate-x-1 group-hover:text-[#F7A95D]" />
//                         </a>
//                       ),
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Form Area */}
//             <div className="relative bg-white p-6 sm:p-10 lg:p-12 xl:p-14">
//               <div className="absolute right-0 top-0 h-1 w-28 bg-[#F48220]" />

//               <div className="mx-auto max-w-2xl">
//                 {/* Form Heading */}
//                 <div className="flex items-center gap-3 text-[#F48220]">
//                   <span className="h-px w-10 bg-current" />

//                   <p className="text-[11px] font-bold uppercase tracking-[0.28em]">
//                     Enquire Now
//                   </p>
//                 </div>

//                 <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#17203A] sm:text-4xl">
//                   Request exclusive project information
//                 </h3>

//                 <p className="mt-4 max-w-xl text-[15px] font-medium leading-7 text-[#5D6478]">
//                   Complete the form and our relationship team will
//                   provide the most relevant information based on
//                   your interest.
//                 </p>

//                 {/* Contact Form */}
//                 <form
//                   action="https://api.web3forms.com/submit"
//                   method="POST"
//                   onSubmit={onSubmit}
//                   className="mt-8"
//                 >
//                   <input
//                     type="hidden"
//                     name="access_key"
//                     value={WEB3FORMS_ACCESS_KEY}
//                   />

//                   <input
//                     type="hidden"
//                     name="from_name"
//                     value="Anondo Bhubon Homepage"
//                   />

//                   <input
//                     type="hidden"
//                     name="subject"
//                     value="New premium project inquiry from Anondo Bhubon homepage"
//                   />

//                   {/* Spam Protection */}
//                   <input
//                     type="checkbox"
//                     name="botcheck"
//                     className="hidden"
//                     tabIndex="-1"
//                     autoComplete="off"
//                   />

//                   <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
//                     {/* Full Name */}
//                     <label className="text-[13px] font-bold text-[#2C3A83]">
//                       Full Name{" "}
//                       <span className="text-[#F48220]">
//                         *
//                       </span>

//                       <input
//                         className={inputClassName}
//                         name="name"
//                         type="text"
//                         placeholder="Enter your full name"
//                         autoComplete="name"
//                         required
//                       />
//                     </label>

//                     {/* Phone */}
//                     <label className="text-[13px] font-bold text-[#2C3A83]">
//                       Phone Number{" "}
//                       <span className="text-[#F48220]">
//                         *
//                       </span>

//                       <input
//                         className={inputClassName}
//                         name="phone"
//                         type="tel"
//                         placeholder="+880 1XXX-XXXXXX"
//                         autoComplete="tel"
//                         required
//                       />
//                     </label>

//                     {/* Email */}
//                     <label className="text-[13px] font-bold text-[#2C3A83] sm:col-span-2">
//                       Email Address

//                       <input
//                         className={inputClassName}
//                         name="email"
//                         type="email"
//                         placeholder="name@example.com"
//                         autoComplete="email"
//                       />
//                     </label>

//                     {/* Interest */}
//                     <label className="text-[13px] font-bold text-[#2C3A83] sm:col-span-2">
//                       I Am Interested In{" "}
//                       <span className="text-[#F48220]">
//                         *
//                       </span>

//                       <select
//                         className={`${inputClassName} cursor-pointer`}
//                         name="interest"
//                         defaultValue=""
//                         required
//                       >
//                         <option value="" disabled>
//                           Select an option
//                         </option>

//                         <option value="Luxury Villas">
//                           Luxury villas
//                         </option>

//                         <option value="Mid-rise Apartments">
//                           Mid-rise apartments
//                         </option>

//                         <option value="Condominiums">
//                           Condominiums
//                         </option>

//                         <option value="Investment Opportunity">
//                           Investment opportunity
//                         </option>

//                         <option value="Commercial Partnership">
//                           Institutional or commercial partnership
//                         </option>

//                         <option value="Site Visit">
//                           Private site visit
//                         </option>
//                       </select>
//                     </label>

//                     {/* Message */}
//                     <label className="text-[13px] font-bold text-[#2C3A83] sm:col-span-2">
//                       Message

//                       <textarea
//                         className={`${inputClassName} min-h-32 resize-y py-3.5`}
//                         name="message"
//                         placeholder="Tell us how our advisor can assist you"
//                       />
//                     </label>
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="group mt-6 flex w-full items-center justify-between bg-[#2C3A83] px-5 py-[18px] text-left text-sm font-bold uppercase tracking-[0.17em] text-white shadow-[0_14px_35px_rgba(44,58,131,0.2)] transition duration-300 hover:bg-[#202B69] hover:shadow-[0_18px_44px_rgba(44,58,131,0.28)] disabled:cursor-not-allowed disabled:opacity-65"
//                   >
//                     <span>
//                       {loading
//                         ? "Submitting Request..."
//                         : "Request a Consultation"}
//                     </span>

//                     <span className="flex h-9 w-9 items-center justify-center bg-white/10 transition duration-300 group-hover:bg-[#F48220]">
//                       <FaArrowRight className="text-xs transition duration-300 group-hover:translate-x-0.5" />
//                     </span>
//                   </button>

//                   {/* Privacy Note */}
//                   <div className="mt-4 flex items-start gap-3 text-xs font-medium leading-5 text-[#6F7587]">
//                     <FaShieldAlt className="mt-0.5 shrink-0 text-[#F48220]" />

//                     <p>
//                       Your information is treated confidentially
//                       and used only to respond to your project
//                       enquiry.
//                     </p>
//                   </div>

//                   {/* Form Response */}
//                   {result && (
//                     <div
//                       aria-live="polite"
//                       role="status"
//                       className={`mt-5 flex items-start gap-3 border px-4 py-4 text-sm font-semibold leading-6 ${
//                         success
//                           ? "border-emerald-200 bg-emerald-50 text-emerald-800"
//                           : "border-red-200 bg-red-50 text-red-700"
//                       }`}
//                     >
//                       {success ? (
//                         <FaCheckCircle className="mt-1 shrink-0" />
//                       ) : (
//                         <FaExclamationCircle className="mt-1 shrink-0" />
//                       )}

//                       <span>{result}</span>
//                     </div>
//                   )}
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import {
  FaArrowRight,
  FaCircleCheck,
  FaCircleExclamation,
  FaEnvelope,
  FaGlobe,
  FaLocationDot,
  FaPhone,
  FaShieldHalved,
} from "react-icons/fa6";

const WEB3FORMS_ACCESS_KEY = "bb771512-cc14-49a0-8b55-1c41f949153b";

const contactItems = [
  {
    label: "Call Our Advisor",
    value: "+880 1318-252050",
    href: "tel:+8801318252050",
    icon: FaPhone,
  },
  {
    label: "Email Address",
    value: "info@anondobhubon.com",
    href: "mailto:info@anondobhubon.com",
    icon: FaEnvelope,
  },
  {
    label: "Official Website",
    value: "www.anondobhubon.com",
    href: "https://www.anondobhubon.com",
    icon: FaGlobe,
  },
];

const inputClassName = `
  mt-2.5
  h-[54px]
  w-full
  border
  border-[#D7DAE7]
  bg-[#F8F8FA]
  px-4
  text-[15px]
  font-medium
  text-[#17203A]
  outline-none
  transition
  duration-300
  placeholder:text-[#17203A]/35
  hover:border-[#AEB4CB]
  focus:border-[#2C3A83]
  focus:bg-white
  focus:ring-4
  focus:ring-[#2C3A83]/[0.08]
`;

export default function ContactSection() {
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setResult("");
    setSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Form submission failed.");
      }

      setSuccess(true);
      setResult(
        "Thank you. Your consultation request has been received. Our Team will contact you shortly.",
      );

      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setSuccess(false);
      setResult(
        "Your request could not be submitted right now. Please try again or contact us directly.",
      );
    } finally {
      setLoading(false);

      window.setTimeout(() => {
        setResult("");
      }, 7000);
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#F3F1EC] py-20 sm:py-24 lg:py-32"
    >
      {/* Architectural Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,58,131,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,58,131,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* Soft Gradient Lights */}
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#F48220]/10 blur-[110px]" />

        <div className="absolute -right-32 bottom-0 h-[480px] w-[480px] rounded-full bg-[#2C3A83]/10 blur-[120px]" />

        {/* Architectural Lines */}
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#2C3A83]/5" />

        <div className="absolute right-[8%] top-0 h-full w-px bg-[#2C3A83]/5" />

        <div className="absolute left-0 top-[18%] h-px w-full bg-[#2C3A83]/5" />

        {/* Oversized Brand Monogram */}
        <div className="absolute -left-10 bottom-[-80px] select-none text-[250px] font-black leading-none tracking-[-0.12em] text-[#2C3A83]/[0.035] sm:text-[360px] lg:text-[480px]">
          AONONDO BHUBON
        </div>
      </div>

      <div className="site-shell">
        {/* Top Heading */}
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#F48220]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#F48220]">
                Private Project Consultation
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#17203A] sm:text-5xl lg:text-[3.7rem]">
              Your next distinguished address begins here.
            </h2>
          </div>

          <p className="max-w-md text-[15px] font-medium leading-7 text-[#5E6476] lg:text-right">
            Connect with our relationship team to explore residences, investment
            opportunities, project planning and private site visits.
          </p>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden border border-[#2C3A83]/10 bg-white shadow-[0_35px_100px_rgba(29,36,72,0.14)]">
          <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
            {/* Left Premium Information Panel */}
            <div className="relative overflow-hidden bg-[#202D72] p-7 text-white sm:p-10 lg:p-12 xl:p-14">
              {/* Decorative Geometry */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-[-90px] top-[-90px] h-64 w-64 rounded-full border border-white/10" />

                <div className="absolute right-[-35px] top-[-35px] h-40 w-40 rounded-full border border-white/10" />

                <div className="absolute bottom-0 left-0 h-40 w-40 border-r border-t border-white/[0.07]" />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
              </div>

              <div className="relative z-10 flex h-full flex-col">
                {/* Label */}
                <div className="inline-flex w-fit items-center gap-3 border border-white/15 bg-white/[0.07] px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#F48220] shadow-[0_0_0_5px_rgba(244,130,32,0.15)]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/85">
                    Anondo Bhubon
                  </span>
                </div>

                {/* Main Content */}
                <div className="mt-10">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F7A55A]">
                    Future Smart City
                  </p>

                  <h3 className="mt-4 max-w-lg text-3xl font-semibold leading-[1.12] tracking-[-0.025em] text-white sm:text-4xl">
                    Discover a thoughtfully planned lifestyle destination.
                  </h3>

                  <p className="mt-5 max-w-lg text-[15px] font-medium leading-7 text-white/65">
                    Receive personalised guidance about available residences,
                    development planning, ownership opportunities and
                    appointment scheduling.
                  </p>
                </div>

                {/* Project Highlights */}
                <div className="mt-9 grid grid-cols-3 border-y border-white/15">
                  <div className="py-5 pr-3">
                    <p className="text-xl font-semibold text-white">Premium</p>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.17em] text-white/40">
                      Residences
                    </p>
                  </div>

                  <div className="border-l border-white/15 px-3 py-5">
                    <p className="text-xl font-semibold text-white">Planned</p>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.17em] text-white/40">
                      Township
                    </p>
                  </div>

                  <div className="border-l border-white/15 py-5 pl-3">
                    <p className="text-xl font-semibold text-white">
                      Connected
                    </p>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.17em] text-white/40">
                      Location
                    </p>
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="mt-8 space-y-3">
                  {contactItems.map(({ label, value, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center gap-4 border border-white/15 bg-white/[0.06] px-4 py-4 transition duration-300 hover:border-white/25 hover:bg-white/[0.11]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-white/[0.07] text-[#F7A55A] transition duration-300 group-hover:border-[#F48220] group-hover:bg-[#F48220] group-hover:text-white">
                        <Icon className="text-sm" />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">
                          {label}
                        </span>

                        <span className="mt-1 block truncate text-sm font-semibold text-white sm:text-[15px]">
                          {value}
                        </span>
                      </span>

                      <FaArrowRight className="ml-auto text-xs text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-[#F7A55A]" />
                    </a>
                  ))}
                </div>

                {/* Location */}
                <div className="mt-auto pt-8">
                  <div className="flex items-start gap-3 border-t border-white/15 pt-6">
                    <FaLocationDot className="mt-1 shrink-0 text-[#F48220]" />

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        Corporate Office
                      </p>

                      <p className="mt-1 text-sm font-medium leading-6 text-white/70">
                        Printers Building, 11-12th Floor, 5 Rajuk Avenue,
                        Motijheel, Dhaka 1000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="relative bg-white p-6 sm:p-10 lg:p-12 xl:p-14">
              {/* Accent Line */}
              <div className="absolute right-0 top-0 h-1 w-32 bg-[#F48220]" />

              <div className="mx-auto max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#F48220]">
                    Enquire Now
                  </span>

                  <span className="h-px flex-1 bg-[#2C3A83]/10" />
                </div>

                <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#17203A] sm:text-4xl">
                  Request exclusive project information
                </h3>

                <p className="mt-4 max-w-xl text-[15px] font-medium leading-7 text-[#616779]">
                  Share your requirements and our dedicated advisor will contact
                  you with relevant project details.
                </p>

                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  onSubmit={onSubmit}
                  className="mt-8"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value={WEB3FORMS_ACCESS_KEY}
                  />

                  <input
                    type="hidden"
                    name="from_name"
                    value="Anondo Bhubon Website"
                  />

                  <input
                    type="hidden"
                    name="subject"
                    value="New project inquiry from Anondo Bhubon website"
                  />

                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
                    {/* Full Name */}
                    <label className="text-[13px] font-bold text-[#2C3A83]">
                      Full Name
                      <span className="ml-1 text-[#F48220]">*</span>
                      <input
                        className={inputClassName}
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                      />
                    </label>

                    {/* Phone */}
                    <label className="text-[13px] font-bold text-[#2C3A83]">
                      Phone Number
                      <span className="ml-1 text-[#F48220]">*</span>
                      <input
                        className={inputClassName}
                        name="phone"
                        type="tel"
                        placeholder="+880 1XXX-XXXXXX"
                        autoComplete="tel"
                        required
                      />
                    </label>

                    {/* Email */}
                    <label className="text-[13px] font-bold text-[#2C3A83] sm:col-span-2">
                      Email Address
                      <input
                        className={inputClassName}
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        autoComplete="email"
                      />
                    </label>

                    {/* Interest */}
                    <label className="text-[13px] font-bold text-[#2C3A83] sm:col-span-2">
                      I Am Interested In
                      <span className="ml-1 text-[#F48220]">*</span>
                      <select
                        className={`${inputClassName} cursor-pointer`}
                        name="interest"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Select an option
                        </option>

                        <option value="Luxury Villas">Luxury Villas</option>

                        <option value="Mid-rise Apartments">
                          Mid-rise Apartments
                        </option>

                        <option value="Condominiums">Condominiums</option>

                        <option value="Investment Opportunity">
                          Investment Opportunity
                        </option>

                        <option value="Commercial Partnership">
                          Commercial Partnership
                        </option>

                        <option value="Private Site Visit">
                          Private Site Visit
                        </option>
                      </select>
                    </label>

                    {/* Message */}
                    <label className="text-[13px] font-bold text-[#2C3A83] sm:col-span-2">
                      Message
                      <textarea
                        className={`${inputClassName} min-h-32 resize-y py-3.5`}
                        name="message"
                        placeholder="Tell us how our advisor can assist you"
                      />
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group mt-6 flex w-full items-center justify-between bg-[#2C3A83] px-5 py-[17px] text-left text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_14px_35px_rgba(44,58,131,0.2)] transition duration-300 hover:bg-[#202B69] hover:shadow-[0_20px_45px_rgba(44,58,131,0.3)] disabled:cursor-not-allowed disabled:opacity-65"
                  >
                    <span>
                      {loading
                        ? "Submitting Request..."
                        : "Request Consultation"}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center bg-white/10 transition duration-300 group-hover:bg-[#F48220]">
                      <FaArrowRight className="text-xs transition duration-300 group-hover:translate-x-1" />
                    </span>
                  </button>

                  {/* Privacy Notice */}
                  <div className="mt-4 flex items-start gap-3 text-xs font-medium leading-5 text-[#727789]">
                    <FaShieldHalved className="mt-0.5 shrink-0 text-[#F48220]" />

                    <p>
                      Your information will remain confidential and will only be
                      used to respond to your project enquiry.
                    </p>
                  </div>

                  {/* Form Result */}
                  {result && (
                    <div
                      aria-live="polite"
                      role="status"
                      className={`mt-5 flex items-start gap-3 border px-4 py-4 text-sm font-semibold leading-6 ${
                        success
                          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                          : "border-red-200 bg-red-50 text-red-700"
                      }`}
                    >
                      {success ? (
                        <FaCircleCheck className="mt-1 shrink-0" />
                      ) : (
                        <FaCircleExclamation className="mt-1 shrink-0" />
                      )}

                      <span>{result}</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
