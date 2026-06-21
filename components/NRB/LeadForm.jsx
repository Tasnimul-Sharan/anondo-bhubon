"use client";

import { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaPhoneAlt, FaUser } from "react-icons/fa";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    setLoading(true);
    setMessage("");
    setSuccess(false);

    const formData = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit lead");
      }

      setSuccess(true);
      setMessage("Your request has been submitted successfully.");
      event.target.reset();
    } catch (err) {
      setSuccess(false);
      setMessage("Something went wrong. Please contact us on WhatsApp.");
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <InputField
        icon={<FaUser />}
        label="Full Name"
        type="text"
        name="name"
        placeholder="Enter your full name"
        required
      />

      <InputField
        icon={<FaPhoneAlt />}
        label="Phone Number"
        type="tel"
        name="phone"
        placeholder="e.g. +880..."
        required
      />

      <InputField
        icon={<FaEnvelope />}
        label="Email Address"
        type="email"
        name="email"
        placeholder="Enter your email address"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="group flex w-full items-center justify-center gap-3 rounded-lg bg-primary px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Submitting..." : "Request Support"}
        <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      {message ? (
        <div
          className={`rounded-lg border px-5 py-4 text-center text-sm font-semibold ${
            success
              ? "border-secondary/30 bg-secondary/10 text-primary"
              : "border-primary/20 bg-off_white text-primary"
          }`}
        >
          {message}
        </div>
      ) : null}
    </form>
  );
}

function InputField({ icon, label, type, name, placeholder, required }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-primary">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary">
          {icon}
        </span>

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-lg border border-border_color bg-off_white px-5 py-4 pl-12 text-sm font-semibold text-primary outline-none transition placeholder:text-primary/45 focus:border-primary focus:bg-white focus:ring-4 focus:ring-secondary/15"
        />
      </div>
    </div>
  );
}
