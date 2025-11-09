



import React, { useEffect } from 'react';
// FIX: Replaced namespace import for 'react-router-dom' with a named import for 'useLocation' to resolve hook access errors.
import { useLocation } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';

const createSlug = (title: string) => {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};

const Services: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            // Use timeout to ensure element is rendered before scrolling
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        }
    }, [location]);

  return (
    <div className="bg-brand-primary text-white animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">Our Services</h1>
          <p className="mt-4 text-lg text-brand-text-secondary max-w-3xl mx-auto">
            We provide a wide range of services to help you harness the power of AI and achieve your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.title}
              id={createSlug(service.title)}
              className="bg-brand-secondary p-8 rounded-lg shadow-lg border border-transparent hover:border-brand-accent/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col scroll-mt-24"
            >
              <div className="flex-shrink-0 mb-4">
                <div className="text-brand-accent w-16 h-16 flex items-center justify-center bg-brand-primary rounded-full">
                  {/* FIX: Add generic <any> to React.ReactElement to resolve props type issue for cloneElement */}
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-brand-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;