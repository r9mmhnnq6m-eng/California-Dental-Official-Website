
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto">
      {FAQS.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-slate-200 pb-4">
          <button
            className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-teal-600' : 'text-slate-900 group-hover:text-teal-600'}`}>
              {faq.question}
            </span>
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-teal-600' : 'text-slate-400'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <p className="text-slate-600 leading-relaxed pb-2">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
