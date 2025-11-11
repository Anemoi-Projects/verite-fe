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
    question: "How does Verite’s blockchain passport work?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam totam voluptas at eaque rem quaerat est deleniti laboriosam ab, non voluptatibus alias, ipsa asperiores. Tempora ullam illo distinctio dolores!",
    tag: "Finance",
  },
  {
    question: "What makes our system tamper-proof?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam totam voluptas at eaque rem quaerat est deleniti laboriosam ab, non voluptatibus alias, ipsa asperiores. Tempora ullam illo distinctio dolores!",
    tag: "Finance",
  },
  {
    question: "How does real-time transparency help your business?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam totam voluptas at eaque rem quaerat est deleniti laboriosam ab, non voluptatibus alias, ipsa asperiores. Tempora ullam illo distinctio dolores!",
    tag: "Tag 1",
  },
  {
    question: "How can consumers check authenticity?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam totam voluptas at eaque rem quaerat est deleniti laboriosam ab, non voluptatibus alias, ipsa asperiores. Tempora ullam illo distinctio dolores!",
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
    <section className="px-10 py-16">
      {/* Tag Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
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
      </div>

      {/* Accordion Section */}
      <div className="max-w-3/4 mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-2">
          {filteredFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg overflow-hidden dark:border-gray-700 cursor-pointer"
            >
              <AccordionTrigger className="text-lg font-semibold px-4 py-3 text-left bg-gray-50 dark:bg-white dark:text-black hover:no-underline rounded-b-none cursor-pointer">
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
