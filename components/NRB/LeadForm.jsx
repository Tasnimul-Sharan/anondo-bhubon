"use client";

import { useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessage("");
    setSuccess(false);

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
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
      e.target.reset();
    } catch (err) {
      setSuccess(false);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);

      setTimeout(() => {
        setMessage("");
      }, 5000);
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
        className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Submitting..." : "Book Site Visit"}
        <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      {message && (
        <div
          className={`rounded-2xl border px-5 py-4 text-center text-sm font-medium ${
            success
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}

function InputField({ icon, label, type, name, placeholder, required }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-800">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
          {icon}
        </span>

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 pl-12 text-sm text-gray-900 outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
        />
      </div>
    </div>
  );
}
