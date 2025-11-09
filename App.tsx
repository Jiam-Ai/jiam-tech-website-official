import React, { Suspense, lazy } from 'react';
import * as ReactRouterDOM from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CookieConsent from './components/CookieConsent';
import { BlogProvider } from './contexts/BlogContext';
import AnalyticsTracker from './components/AnalyticsTracker';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Careers = lazy(() => import('./pages/Careers'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPostPage = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const ThankYou = lazy(() => import('./pages/ThankYou'));

const LoadingFallback: React.FC = () => (
    <div className="flex justify-center items-center h-screen bg-brand-primary text-white">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-brand-accent"></div>
    </div>
);

const App: React.FC = () => {
  return (
    <ReactRouterDOM.HashRouter>
      <AnalyticsTracker />
      <BlogProvider>
        <div className="bg-brand-primary min-h-screen flex flex-col font-sans">
          <Header />
          <main className="flex-grow">
              <Suspense fallback={<LoadingFallback />}>
                  <ReactRouterDOM.Routes>
                      <ReactRouterDOM.Route path="/" element={<Home />} />
                      <ReactRouterDOM.Route path="/about" element={<About />} />
                      <ReactRouterDOM.Route path="/services" element={<Services />} />
                      <ReactRouterDOM.Route path="/solutions" element={<Solutions />} />
                      <ReactRouterDOM.Route path="/products" element={<Products />} />
                      <ReactRouterDOM.Route path="/products/:slug" element={<ProductDetail />} />
                      <ReactRouterDOM.Route path="/careers" element={<Careers />} />
                      <ReactRouterDOM.Route path="/blog" element={<Blog />} />
                      <ReactRouterDOM.Route path="/blog/:slug" element={<BlogPostPage />} />
                      <ReactRouterDOM.Route path="/contact" element={<Contact />} />
                      <ReactRouterDOM.Route path="/privacy" element={<PrivacyPolicy />} />
                      <ReactRouterDOM.Route path="/terms" element={<TermsOfService />} />
                      <ReactRouterDOM.Route path="/thank-you" element={<ThankYou />} />
                  </ReactRouterDOM.Routes>
              </Suspense>
          </main>
          <Footer />
          <Chatbot />
          <CookieConsent />
        </div>
      </BlogProvider>
    </ReactRouterDOM.HashRouter>
  );
};

export default App;