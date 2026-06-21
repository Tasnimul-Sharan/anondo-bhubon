"use client";

import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import PaymentInfo from "@/components/PaymentInfo";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title: "Payment Procedures | Anondo Bhubon Booking and Installment Guide",
  description:
    "Review Anondo Bhubon payment procedures, booking guidance, installment information, bank transfer steps, and secure payment support for residential ownership inquiries.",
  keywords: [
    "Anondo Bhubon payment procedure",
    "property booking payment Bangladesh",
    "housing installment guide",
    "Purbachal township payment",
    "real estate payment procedure Bangladesh",
  ],
  path: "/payment-procedures",
  image: finalRenderAssets.mosque,
  imageAlt: "Anondo Bhubon payment procedures",
  pageType: "WebPage",
  breadcrumb: [{ name: "Payment Procedures", path: "/payment-procedures" }],
  jsonLd: {
    "@type": "HowTo",
    "@id": "https://www.anondobhubon.com/payment-procedures#payment-howto",
    name: "Anondo Bhubon Payment Procedure",
    description:
      "Official payment guidance for Anondo Bhubon booking and installment support.",
    step: [
      {
        "@type": "HowToStep",
        name: "Verify account details",
        text: "Confirm the official company bank account before sending payment.",
      },
      {
        "@type": "HowToStep",
        name: "Mention subscriber references",
        text: "Mention full name, member number, and project name during transfer.",
      },
      {
        "@type": "HowToStep",
        name: "Preserve receipt",
        text: "Collect and preserve the payment receipt or transfer confirmation for future reference.",
      },
    ],
  },
};

export default function PaymentProceduresPage() {
  return (
    <div className="w-full relative">
      <AdvancedSEO {...seo} />
      <HeroSection
        hero={{
          title: "Payment Procedures",
          backgroundImage: finalRenderAssets.mosque,
        }}
      />
      <PaymentInfo />
    </div>
  );
}
