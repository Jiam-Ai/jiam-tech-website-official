import React, { Suspense, lazy } from 'react';
// FIX: Replaced namespace import for 'react-router-dom' with named imports to resolve component and hook errors.
import { HashRouter, Routes, Route } from 'react-router-dom';

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
const Search = lazy(() => import('./pages/Search'));

const LoadingFallback: React.FC = () => (
    <div className="flex justify-center items-center h-screen bg-brand-primary text-white">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-brand-accent"></div>
    </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <AnalyticsTracker />
      <BlogProvider>
        <div className="bg-brand-primary min-h-screen flex flex-col font-sans">
          <Header />
          <main className="flex-grow">
              <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/solutions" element={<Solutions />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/:slug" element={<ProductDetail />} />
                      <Route path="/careers" element={<Careers />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:slug" element={<BlogPostPage />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/privacy" element={<PrivacyPolicy />} />
                      <Route path="/terms" element={<TermsOfService />} />
                      <Route path="/thank-you" element={<ThankYou />} />
                      <Route path="/search" element={<Search />} />
                  </Routes>
              </Suspense>
          </main>
          <Footer />
          <Chatbot />
          <CookieConsent />
        </div>
      </BlogProvider>
    </HashRouter>
  );
};

export default App;