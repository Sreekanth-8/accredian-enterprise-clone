"use client";

import { useState } from "react";
import faqs from "@/data/faq";

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Find answers to the most common questions.
        </p>

        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="mb-4 border rounded-xl bg-white shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="font-semibold">
                {faq.question}
              </span>

              <span className="text-2xl font-bold">
                {activeId === faq.id ? "−" : "+"}
              </span>
            </button>

            {activeId === faq.id && (
              <div className="px-5 pb-5 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}