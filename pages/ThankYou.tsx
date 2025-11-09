import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const ThankYou: React.FC = () => {
  return (
    <div className="bg-brand-primary text-white animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center min-h-[60vh]">
        <div className="text-center bg-brand-secondary p-12 rounded-lg shadow-2xl max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-accent mb-4">Thank You!</h1>
          <p className="mt-4 text-lg text-brand-text-secondary">
            Your submission has been received. We will get back to you as soon as possible.
          </p>
          <ReactRouterDOM.Link
            to="/"
            className="mt-8 inline-block bg-brand-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-brand-accent-hover transition-transform transform hover:scale-105"
          >
            &larr; Back to Home
          </ReactRouterDOM.Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;