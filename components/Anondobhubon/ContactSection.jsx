"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { finalRenderAssets } from "@/data/finalRendersData";

const WEB3FORMS_ACCESS_KEY = "bb771512-cc14-49a0-8b55-1c41f949153b";

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

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const res = await response.json();

      if (res.success) {
        setSuccess(true);
        setResult(
          "Thank you for reaching out. Our team has received your message and will contact you shortly.",
        );
        event.target.reset();
      } else {
        setSuccess(false);
        setResult(
          "We could not submit your message at the moment. Please try again shortly.",
        );
      }
    } catch (error) {
      setSuccess(false);
      setResult(
        "We could not submit your message at the moment. Please try again shortly.",
      );
    } finally {
      setLoading(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#2C3A83] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Background Image */}
      <Image
        src={finalRenderAssets.forestWalkAlternate}
        alt="Relaxation landscape at Anondo Bhubon"
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2C3A83]/10" />

      <div className="site-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#F48220]" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/75">
                A Step Closer to Your Future
              </p>
            </div>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl">
              Join Anondo Bhubon and begin the move toward healthier urban
              living.
            </h2>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/72">
              Get in touch with an expert advisor for brochure access, available
              residence types, sector planning, investment opportunities and
              appointment scheduling.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="border border-white/15 bg-white/8 p-5 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F48220]">
                  Email
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  info@anondobhubon.com
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-white/15 bg-white/8 p-5 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F48220]">
                    Phone
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    +8801318252050
                  </p>
                </div>

                <div className="border border-white/15 bg-white/8 p-5 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F48220]">
                    Website
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    www.anondobhubon.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={onSubmit}
            className="border border-white/15 bg-white p-6 text-[#1F2937] shadow-xl sm:p-8"
          >
            <input
              type="hidden"
              name="access_key"
              value={WEB3FORMS_ACCESS_KEY}
            />
            <input
              type="hidden"
              name="from_name"
              value="Anondo Bhubon Homepage"
            />
            <input
              type="hidden"
              name="subject"
              value="New project inquiry from Anondo Bhubon homepage"
            />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="mb-7 border-b border-[#5F6AA2]/20 pb-5">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F48220]">
                Contact Form
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#2C3A83]">
                Request project information
              </h3>

              <p className="mt-2 text-sm font-medium leading-6 text-[#1F2937]/70">
                Share your details and our advisor will contact you with the
                relevant information.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold text-[#2C3A83]">
                Full Name
                <input
                  className="mt-2 h-12 w-full border border-[#5F6AA2]/25 bg-white px-4 text-sm font-medium text-[#1F2937] outline-none transition focus:border-[#2C3A83] focus:ring-2 focus:ring-[#2C3A83]/10"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </label>

              <label className="text-sm font-bold text-[#2C3A83]">
                Email
                <input
                  className="mt-2 h-12 w-full border border-[#5F6AA2]/25 bg-white px-4 text-sm font-medium text-[#1F2937] outline-none transition focus:border-[#2C3A83] focus:ring-2 focus:ring-[#2C3A83]/10"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label className="text-sm font-bold text-[#2C3A83] sm:col-span-2">
                Phone
                <input
                  className="mt-2 h-12 w-full border border-[#5F6AA2]/25 bg-white px-4 text-sm font-medium text-[#1F2937] outline-none transition focus:border-[#2C3A83] focus:ring-2 focus:ring-[#2C3A83]/10"
                  name="phone"
                  type="tel"
                  placeholder="+8801318252050"
                />
              </label>

              <label className="text-sm font-bold text-[#2C3A83] sm:col-span-2">
                Interest
                <select
                  className="mt-2 h-12 w-full border border-[#5F6AA2]/25 bg-white px-4 text-sm font-medium text-[#1F2937] outline-none transition focus:border-[#2C3A83] focus:ring-2 focus:ring-[#2C3A83]/10"
                  name="interest"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a residence or investment type
                  </option>
                  <option>Luxury villas</option>
                  <option>Mid-rise apartments</option>
                  <option>Condominiums</option>
                  <option>Institutional or commercial partnership</option>
                </select>
              </label>

              <label className="text-sm font-bold text-[#2C3A83] sm:col-span-2">
                Message
                <textarea
                  className="mt-2 min-h-32 w-full border border-[#5F6AA2]/25 bg-white px-4 py-3 text-sm font-medium text-[#1F2937] outline-none transition focus:border-[#2C3A83] focus:ring-2 focus:ring-[#2C3A83]/10"
                  name="message"
                  placeholder="Tell us what you would like to explore"
                  required
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group mt-6 flex w-full items-center justify-center gap-3 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-secondary hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
              <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {result && (
              <div
                className={`mt-5 flex items-center justify-center gap-2 border px-5 py-4 text-center text-sm font-semibold ${
                  success
                    ? "border-secondary/30 bg-secondary/10 text-primary"
                    : "border-primary/25 bg-primary/5 text-primary"
                }`}
              >
                {success && <FaCheckCircle className="shrink-0" />}
                {result}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
