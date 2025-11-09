import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { init as initAnalytics } from '../services/analytics';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consentData = localStorage.getItem('jiam_cookie_consent');
        if (!consentData) {
            setIsVisible(true);
        } else {
            const { timestamp, accepted } = JSON.parse(consentData);
            if (accepted) {
                initAnalytics();
            }
            const thirtyDaysInMillis = 30 * 24 * 60 * 60 * 1000;
            if (Date.now() - timestamp > thirtyDaysInMillis) {
                localStorage.removeItem('jiam_cookie_consent');
                setIsVisible(true);
            }
        }
    }, []);

    const handleConsent = (accepted: boolean) => {
        if (accepted) {
            initAnalytics();
        }
        const consentData = { accepted, timestamp: Date.now() };
        localStorage.setItem('jiam_cookie_consent', JSON.stringify(consentData));
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-brand-secondary/95 backdrop-blur-md p-4 z-[60] animate-fade-in-up">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-brand-text-secondary text-center sm:text-left">
                    We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies. Read our{' '}
                    <ReactRouterDOM.Link to="/privacy" className="text-brand-accent hover:underline font-semibold">
                        Privacy Policy
                    </ReactRouterDOM.Link>
                    .
                </p>
                <div className="flex-shrink-0 flex gap-3">
                    <button
                        onClick={() => handleConsent(false)}
                        className="px-4 py-2 text-sm font-bold text-white bg-transparent border border-brand-accent/50 rounded-lg hover:bg-brand-accent/20 transition-colors"
                        aria-label="Decline cookies"
                    >
                        Decline
                    </button>
                    <button
                        onClick={() => handleConsent(true)}
                        className="px-4 py-2 text-sm font-bold text-white bg-brand-accent rounded-lg hover:bg-brand-accent-hover transition-colors"
                        aria-label="Accept cookies"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;