"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How do I submit my own recipe?",
    answer:
      "Simply sign up for a free account and head over to the 'Add Recipe' section. Fill in the ingredients, steps, and upload an image — our community will love it!",
  },
  {
    question: "Can I save recipes to cook later?",
    answer:
      "Yes! Just click the save button on any recipe and it will be added to your personal cookbook for quick access later.",
  },
  {
    question: "Are the recipes beginner-friendly?",
    answer:
      "Absolutely. Each recipe comes with clear step-by-step instructions and estimated cooking times so anyone can follow along.",
  },
  {
    question: "Do you offer nutritional information?",
    answer:
      "Most recipes include calories, protein, carbs, and fats breakdown. We're constantly updating this section for accuracy.",
  },
  {
    question: "Is the app free to use?",
    answer:
      "Yes, the core features are completely free. Premium gives you advanced features like meal planning, shopping lists, and ad-free experience.",
  },
];

export default function RecipeFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg hover:bg-gray-900 transition-all duration-1000 cursor-pointer"
            >
              {faq.question}
              <FaChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-400 text-sm my-5">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
