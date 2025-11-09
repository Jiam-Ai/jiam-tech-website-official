import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { NAV_LINKS, ICONS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = ReactRouterDOM.useLocation();

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change and scroll to top
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const MobileMenu = () => (
    <div 
      className={`fixed inset-0 z-[100] bg-brand-primary/95 backdrop-blur-lg transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 p-2 text-brand-text-secondary hover:text-white"
          aria-label="Close menu"
        >
          <ICONS.Close className="w-8 h-8" />
        </button>
        <nav className="flex flex-col items-center space-y-8">
          {NAV_LINKS.map((link) => {
            const isExternal = link.path.startsWith('http');
            if (isExternal) {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl font-bold text-brand-text-secondary hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </a>
              );
            }
            return (
              <ReactRouterDOM.NavLink
                key={link.name}
                to={link.path.substring(1)}
                className={({ isActive }) =>
                  `text-3xl font-bold transition-colors ${
                    isActive ? 'text-brand-accent' : 'text-brand-text-secondary hover:text-brand-accent'
                  }`
                }
              >
                {link.name}
              </ReactRouterDOM.NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-primary/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
               <ReactRouterDOM.NavLink to="/" className="flex items-center text-white focus:outline-none">
                <ICONS.LogoIcon className="h-8 w-auto mr-2" />
                <span className="text-2xl font-bold">
                  Jiam <span className="text-brand-accent">Tech</span>
                </span>
              </ReactRouterDOM.NavLink>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <nav className="flex items-baseline space-x-4">
                {NAV_LINKS.map((link) => {
                  const isExternal = link.path.startsWith('http');
                  if (isExternal) {
                    return (
                      <a
                        key={link.name}
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-md text-sm font-medium text-brand-text-secondary hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    );
                  }
                  return (
                    <ReactRouterDOM.NavLink
                      key={link.name}
                      to={link.path.substring(1)}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive ? 'text-white bg-brand-accent' : 'text-brand-text-secondary hover:text-white'
                        }`
                      }
                    >
                      {link.name}
                    </ReactRouterDOM.NavLink>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-brand-text-secondary hover:text-white hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-white"
                aria-label="Open main menu"
              >
                <ICONS.Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu />
    </>
  );
};

export default Header;