
import React from 'react';
import { SOLUTIONS_DATA } from '../constants';

const Solutions: React.FC = () => {
  return (
    <div className="bg-brand-primary text-white animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">Industry Solutions</h1>
          <p className="mt-4 text-lg text-brand-text-secondary max-w-3xl mx-auto">
            Tailored AI solutions designed to address the unique challenges and opportunities of your industry.
          </p>
        </div>

        <div className="space-y-16">
          {SOLUTIONS_DATA.map((solution, index) => (
            <div
              key={solution.industry}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2">
                <img
                  src={solution.image}
                  alt={`${solution.industry} solution`}
                  className="rounded-lg shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-brand-accent mb-4">{solution.industry}</h2>
                <p className="text-brand-text-secondary leading-relaxed text-lg">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
