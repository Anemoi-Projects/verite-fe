"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What does Vérité do?",
    answer:
      "Vérité develops innovative technologies that protect and verify the authenticity of genuine products. We help brands secure their supply chains, prevent counterfeiting, and offer consumers a simple way to verify if a product is genuine— instantly and reliably.",
    tag: "Finance",
  },
  {
    question: "How does your technology work?",
    answer:
      "Our solution combines digital fingerprints, AI-driven recognition, and blockchain traceability to create a unique digital identity for every product. This identity can be scanned or verified at any point in the supply chain or by the end consumer, proving the product’s authenticity and origin.",
    tag: "Finance",
  },
  {
    question: "What industries can benefit from your solution?",
    answer:
      "Our technology is designed for a wide range of sectors, including: Fashion and luxury goods (to protect brand integrity and fight counterfeititems), Jewellery and watches (to ensure provenance and value), Sportswear (to verify official merchandise), Food and beverage (to guarantee safety and transparency), Pharmaceuticals (to combat counterfeit drugs and safeguard patients)",
    tag: "Tag 1",
  },
  {
    question: "How can consumers verify if a product is genuine?",
    answer:
      "Consumers can simply scan a unique digital code or embedded marker on the product using our partner app or platform. They’ll instantly receive confirmation that the product is authentic — along with transparent information about its origin, materials, or sustainability data.",
    tag: "Tag 2",
  },
  {
    question:
      "What makes your technology different from traditional anticounterfeiting solutions?",
    answer:
      "Unlike basic serial numbers or printed QR codes, our system creates a tamperproof, dynamic digital identity that cannot be duplicated. It combines physical and digital verification, ensuring complete authenticity at every stage of a product’s life cycle",
    tag: "Tag 2",
  },
  {
    question: "How does this benefit brands?",
    answer:
      "Brands gain powerful tools to: Protect their reputation and intellectual property, Build consumer trust through transparency, Monitor distribution channels and detect fraud early, Collect valuable insights about product journeys and user engagement",
    tag: "Tag 2",
  },
  {
    question:
      "Is the solution easy to integrate with existing production and supply chain systems?",
    answer:
      "Yes. Our platform is modular and scalable, designed to integrate smoothly with existing ERP, logistics, or product management systems — minimizing disruption and maximizing security.",
    tag: "Tag 2",
  },
  {
    question: "How does your solution support sustainability?",
    answer:
      "By providing traceability and product lifecycle data, our technology helps brands demonstrate environmental responsibility, track circular economy initiatives, and prove ethical sourcing — all while reducing waste caused by counterfeit and unsellable goods.",
    tag: "Tag 2",
  },
  {
    question: "Is the system secure?",
    answer:
      "Absolutely. Security is at the core of what we do. We use encrypted data layers, blockchain validation, and multi-level authentication to guarantee that product information cannot be altered or forged..",
    tag: "Tag 2",
  },
  {
    question: "How can a brand start working with Vérité?",
    answer:
      "It’s simple — our team provides an initial brand protection assessment to understand your needs, then designs a tailored solution that fits your products, supply chain, and customer experience. You can contact us directly through our partnership inquiry form to begin the process.",
    tag: "Tag 2",
  },
];

export default function FAQSection() {
  const [selectedTag, setSelectedTag] = useState("All");

  // Get unique tags
  const uniqueTags = ["All", ...new Set(FAQS.map((faq) => faq.tag))];

  // Filter based on tag
  const filteredFaqs =
    selectedTag === "All"
      ? FAQS
      : FAQS.filter((faq) => faq.tag === selectedTag);

  return (
    <section className="lg:px-10 py-5 lg:py-16">
      {/* Tag Filter Buttons */}
      {/* <div className="flex flex-wrap justify-center gap-6 mb-10">
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-6 py-2 rounded-md  transition-all cursor-pointer ${
              selectedTag === tag
                ? "theme-button"
                : "bg-white text-black border"
            }`}
          >
            {tag}
          </button>
        ))}
      </div> */}

      {/* Accordion Section */}
      <div className="w-full lg:max-w-3/4 mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-2">
          {filteredFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg overflow-hidden dark:border-gray-700 cursor-pointer"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold px-4 py-3 text-left bg-gray-50 dark:bg-white dark:text-black hover:no-underline rounded-b-none cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-gray-700 dark:text-gray-500 bg-white dark:bg-white">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
