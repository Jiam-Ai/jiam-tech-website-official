import React, { useEffect, useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { PRODUCTS_DATA } from '../constants';
import { Product as ProductType } from '../types';

const ProductDetail: React.FC = () => {
    const { slug } = ReactRouterDOM.useParams<{ slug: string }>();
    const navigate = ReactRouterDOM.useNavigate();
    const [product, setProduct] = useState<ProductType | null>(null);

    useEffect(() => {
        const foundProduct = PRODUCTS_DATA.find(p => p.slug === slug);
        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            // If no product is found, redirect to the main products page
            navigate('/products');
        }
    }, [slug, navigate]);

    if (!product) {
        // Render a loading state or null while finding the product or redirecting
        return (
            <div className="flex justify-center items-center h-screen bg-brand-primary text-white">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-brand-accent"></div>
            </div>
        );
    }

    return (
        <div className="bg-brand-primary text-white animate-fade-in-up">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-8">
                        <ReactRouterDOM.Link to="/products" className="text-brand-accent hover:text-brand-accent-hover transition-colors font-semibold">
                            &larr; Back to All Products
                        </ReactRouterDOM.Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start bg-brand-secondary p-8 rounded-lg shadow-2xl">
                        <div>
                            <img
                                src={product.imageUrl}
                                alt={product.title}
                                className="rounded-lg shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-brand-accent w-12 h-12 flex-shrink-0">
                                     {React.cloneElement(product.icon as React.ReactElement<any>, { className: "w-full h-full" })}
                                </div>
                                <h1 className="text-4xl font-extrabold text-white">{product.title}</h1>
                            </div>
                            
                            <p className="text-brand-text-secondary leading-relaxed text-lg flex-grow">
                                {product.description}
                            </p>
                            
                            <div className="mt-8">
                                <a
                                  href={product.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block bg-brand-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-brand-accent-hover transition-transform transform hover:scale-105"
                                  onClick={(e) => product.link === '#' && e.preventDefault()}
                                >
                                  Try Product Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;