import React, { useState, useEffect, useRef } from 'react';
// FIX: Replaced namespace import for 'react-router-dom' with a named import for 'Link' to resolve component access errors.
import { Link } from 'react-router-dom';
import { SERVICES_DATA, TESTIMONIALS_DATA, DIFFERENTIATORS_DATA } from '../constants';
import TwitterFeed from '../components/TwitterFeed';
import FAQ from '../components/FAQ';

const backgroundImages = [
  'https://picsum.photos/seed/ai-hero-1/1920/1080',
  'https://picsum.photos/seed/ai-hero-2/1920/1080',
  'https://files.catbox.moe/5rlyop.jpeg',
  'https://picsum.photos/seed/neural-network/1920/1080',
];

const createSlug = (title: string) => {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
};

// Fix: Use React.FC to correctly type the component and allow for the 'key' prop.
const ServiceCard: React.FC<{ service: typeof SERVICES_DATA[0], index: number }> = ({ service, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the item is visible
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div 
            ref={ref}
            className="bg-brand-primary p-8 rounded-lg shadow-lg hover:shadow-brand-accent/20 border border-transparent hover:border-brand-accent/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
        >
            <div className="flex-grow">
                <div 
                    className={`text-brand-accent w-12 h-12 mx-auto mb-4 flex items-center justify-center opacity-0 ${isVisible ? 'animate-icon-pulse' : ''}`}
                    style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                >
                    {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-brand-text-secondary">{service.description}</p>
            </div>
            <div className="mt-6 text-center">
                 <Link
                    to={`/services#${createSlug(service.title)}`}
                    className="font-bold text-brand-accent hover:text-brand-accent-hover transition-colors"
                >
                    View More &rarr;
                </Link>
            </div>
        </div>
    );
};


const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 7000); // Change every 7 seconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Preload images to ensure smooth transitions
    backgroundImages.forEach(image => {
        const img = new Image();
        img.src = image;
    });

    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * backgroundImages.length);
        } while (newIndex === prevIndex); // Ensure the new image is different
        return newIndex;
      });
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center bg-brand-primary overflow-hidden bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-brand-primary opacity-60"></div>
        <div className="relative z-10 p-4">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Empowering the Future with <span className="text-brand-accent">AI</span>
          </h1>
          <p
            className="max-w-3xl mx-auto text-lg md:text-xl text-brand-text-secondary mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Jiam tech delivers cutting-edge artificial intelligence solutions to drive innovation, efficiency, and growth for businesses worldwide.
          </p>
          <Link
            to="/services"
            className="inline-block bg-brand-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-brand-accent-hover transition-transform transform hover:scale-105 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-brand-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="max-w-2xl mx-auto text-brand-text-secondary mb-12">
            We offer a comprehensive suite of AI services to transform your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-brand-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Jiam tech?</h2>
          <p className="max-w-3xl mx-auto text-brand-text-secondary mb-12">
            We combine deep technical expertise with a client-focused approach to deliver transformative AI solutions that drive real-world results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DIFFERENTIATORS_DATA.map((item, index) => (
              <div key={index} className="bg-brand-secondary p-8 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-brand-accent/20 border border-transparent hover:border-brand-accent/50">
                <div className="text-brand-accent w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-brand-primary rounded-full">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-brand-text-secondary text-sm leading- relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Client Logos */}
      <section className="py-16 bg-brand-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-center text-2xl font-semibold text-brand-text-secondary mb-8">Trusted by Industry Leaders</h3>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                  <div className="text-4xl font-bold text-gray-500 opacity-60 hover:opacity-100 transition-opacity">LogoCorp</div>
                  <div className="text-4xl font-bold text-gray-500 opacity-60 hover:opacity-100 transition-opacity">InnovateInc</div>
                  <div className="text-4xl font-bold text-gray-500 opacity-60 hover:opacity-100 transition-opacity">Quantum</div>
                  <div className="text-4xl font-bold text-gray-500 opacity-60 hover:opacity-100 transition-opacity">NextGen</div>
                  <div className="text-4xl font-bold text-gray-500 opacity-60 hover:opacity-100 transition-opacity">SolutionsCo</div>
              </div>
          </div>
      </section>
      
      {/* Testimonials */}
       <section className="py-20 bg-brand-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
            <div className="relative max-w-3xl mx-auto min-h-[300px] flex items-center justify-center">
                {TESTIMONIALS_DATA.map((testimonial, index) => (
                    <div 
                        key={index}
                        className={`transition-opacity duration-1000 ease-in-out w-full ${index === currentTestimonial ? 'opacity-100 static' : 'opacity-0 absolute top-0 left-0'}`}
                        aria-hidden={index !== currentTestimonial}
                    >
                        <div className="bg-brand-secondary p-8 rounded-lg shadow-lg text-left relative">
                            <svg className="absolute top-4 left-4 w-10 h-10 text-brand-accent/30" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M9.333 22.667h-6.667v-10h6.667v10zM29.333 12.667h-6.667v10h6.667v-10zM12.667 22.667h-6.667v-10h6.667v10zM32.667 12.667h-6.667v10h6.667v-10z"></path>
                                <path d="M11.333 24c-1.833 0-3.333-1.5-3.333-3.333v-13.333c0-1.833 1.5-3.333 3.333-3.333h13.333c1.833 0 3.333 1.5 3.333 3.333v13.333c0 1.833-1.5 3.333-3.333 3.333h-13.333zM8 8v16h16v-16h-16z"></path>
                                <path d="M0 22.667c0 1.833 1.5 3.333 3.333 3.333h2.667c-0.267-0.933-0.4-1.9-0.4-2.867 0-4.4 3.567-8 8-8v-2.667c-5.867 0-10.667 4.8-10.667 10.667v0.533z"></path><path d="M20 12.667c-5.867 0-10.667 4.8-10.667 10.667v0.533c0 1.833 1.5 3.333 3.333 3.333h2.667c-0.267-0.933-0.4-1.9-0.4-2.867 0-4.4 3.567-8 8-8v-2.667z"></path>
                            </svg>
                            <p className="text-brand-text-secondary italic z-10 relative">"{testimonial.quote}"</p>
                            <div className="mt-4 pt-4 border-t border-brand-accent/20">
                                <p className="font-bold text-white">{testimonial.author}</p>
                                <p className="text-sm text-brand-text-secondary">{testimonial.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8 space-x-3">
                {TESTIMONIALS_DATA.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentTestimonial ? 'bg-brand-accent' : 'bg-brand-secondary hover:bg-brand-accent/50'}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
      </section>

      {/* Twitter Feed */}
      <TwitterFeed />

    </div>
  );
};

export default Home;