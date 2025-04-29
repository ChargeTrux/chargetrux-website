
import React from "react";
import { motion } from "framer-motion";

type CaseStudyProps = {
  title: string;
  gradientClasses: string;
  imageText: string;
  clientDescription: string;
  stats: {
    value: string;
    label: string;
  }[];
  challenge: string;
  solution: string;
  results: string[];
  quote: string;
  quoteAuthor: string;
  borderColor: string;
};

const CaseStudy = ({
  title,
  gradientClasses,
  imageText,
  clientDescription,
  stats,
  challenge,
  solution,
  results,
  quote,
  quoteAuthor,
  borderColor,
}: CaseStudyProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h3 className="text-2xl font-bold mb-8 text-chargetrux-darkblue">{title}</h3>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className={`${gradientClasses} p-6 md:p-8`}>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
              <p className="text-chargetrux-darkblue">{imageText}</p>
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">{clientDescription}</h3>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <span className="block text-2xl font-bold">{stat.value}</span>
                    <span className="text-xs text-gray-200">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <div className="mb-4">
            <h4 className="font-bold text-lg text-chargetrux-darkblue mb-2">Challenge</h4>
            <p className="text-gray-700">{challenge}</p>
          </div>
          <div className="mb-4">
            <h4 className="font-bold text-lg text-chargetrux-darkblue mb-2">Solution</h4>
            <p className="text-gray-700">{solution}</p>
          </div>
          <div className="mb-6">
            <h4 className="font-bold text-lg text-chargetrux-darkblue mb-2">Results</h4>
            <ul className="space-y-2 mb-6">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-chargetrux-green"></span>
                  <span dangerouslySetInnerHTML={{ __html: result }}></span>
                </li>
              ))}
            </ul>
          </div>
          <blockquote className={`border-l-4 ${borderColor} pl-4 italic text-gray-700`}>
            {quote}
            <cite className="block mt-2 text-sm font-medium">{quoteAuthor}</cite>
          </blockquote>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudy;
