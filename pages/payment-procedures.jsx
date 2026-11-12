"use client";

import AdvancedSEO from "@/components/AdvancedSEO";
import HeroSection from "@/components/HeroSection";
import PaymentInfo from "@/components/PaymentInfo";
import { finalRenderAssets } from "@/data/finalRendersData";

const seo = {
  title:
    "Payment Procedures | Booking & Installment Guide | Anondo Bhubon Township",
  description:
    "Review official Anondo Bhubon payment procedures, bank transfer instructions, booking guidelines, and installment steps across our five residential categories (Premium Plus, Premium, Executive, General, Economy), villas, and condominiums near Purbachal.",
  keywords: [
    "Anondo Bhubon payment procedure",
    "Anondo Group payment guide",
    "residential plot booking payment Purbachal",
    "township installment procedure Bangladesh",
    "secure real estate bank transfer Dhaka",
  ],
  path: "/payment-procedures",
  image: finalRenderAssets.mosque,
  imageAlt:
    "Anondo Bhubon official payment procedures and residential booking guide",
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
