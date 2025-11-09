import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS_DATA } from '../constants';

const Products: React.FC = () => {
  return (
    <div className="bg-brand-primary text-white animate-fade-in-up">
      {/* Page Header with Background Image */}
      <section
        className="relative bg-cover bg-center py-24"
        style={{ backgroundImage: `url('https://files.catbox.moe/r9uc72.jpg')` }}
      >
        <div className="absolute inset-0 bg-brand-primary opacity-60"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Our Products</h1>
            <p className="mt-4 text-lg text-brand-text-secondary max-w-3xl mx-auto">
              Explore our suite of AI-powered applications, designed to solve complex challenges and drive business value.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS_DATA.map((product) => (
              <Link
                key={product.title}
                to={`/products/${product.slug}`}
                className="block group bg-brand-secondary rounded-lg shadow-lg border border-transparent hover:border-brand-accent/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden"
              >
                <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover" />
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-accent transition-colors">{product.title}</h3>
                    <p className="text-brand-text-secondary leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-brand-accent hover:text-brand-accent-hover transition-colors relative z-10"
                      onClick={(e) => {
                        if (product.link === '#') {
                          e.preventDefault();
                        }
                        e.stopPropagation();
                      }}
                    >
                      Try Product &rarr;
                    </a>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;