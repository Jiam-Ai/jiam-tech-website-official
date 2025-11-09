
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-brand-primary text-white animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Privacy Policy</h1>
          <p className="text-center text-brand-text-secondary mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="space-y-8 text-brand-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-brand-accent mb-3">1. Introduction</h2>
              <p>
                Welcome to Jiam tech. We are committed to protecting your privacy and handling your data in an open and transparent manner. This privacy policy sets out how we collect, use, process, and disclose your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-accent mb-3">2. Information We Collect</h2>
              <p>We may collect and process the following types of information about you:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                <li>
                  <strong>Personal Identification Information:</strong> Name, email address, phone number, etc., when you fill out a form (e.g., contact or careers form).
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.
                </li>
                <li>
                  <strong>Usage and Analytics Data:</strong> Information about how you use our website, such as which pages you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data. We collect this data using analytics tools, as detailed in our "Website Analytics" section below.
                </li>
                 <li>
                  <strong>Chatbot Interaction Data:</strong> Transcripts of your conversations with our AI assistant for service improvement and quality assurance.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-accent mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
               <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                <li>To provide, operate, and maintain our website and services.</li>
                <li>To improve, personalize, and expand our services.</li>
                <li>To understand and analyze how you use our website.</li>
                <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
                <li>To process your job applications.</li>
                <li>To find and prevent fraud.</li>
              </ul>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold text-brand-accent mb-3">4. Website Analytics</h2>
                <p>
                    We use third-party analytics services, such as Google Analytics, to help us understand and analyze how visitors use our website. This information is used to improve our services and your experience. These services may use cookies and similar technologies to collect information such as your IP address, time of visit, whether you are a return visitor, and any referring website.
                </p>
                <p className="mt-2">
                    We have configured Google Analytics to anonymize IP addresses to protect your privacy. The collected data is aggregated and does not personally identify you. For more information on how Google uses data when you use our partners' sites or apps, please see <a href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">www.google.com/policies/privacy/partners/</a>.
                </p>
                <p className="mt-2">
                    You can opt-out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on, which is available at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">https://tools.google.com/dlpage/gaoptout</a>.
                </p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold text-brand-accent mb-3">5. Data Sharing and Disclosure</h2>
                <p>
                    We do not sell your personal data to third parties. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
                </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-accent mb-3">6. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-accent mb-3">7. Your Data Protection Rights</h2>
              <p>
                Depending on your location, you may have the following rights regarding your personal data: the right to access, the right to rectification, the right to erasure, the right to restrict processing, the right to object to processing, and the right to data portability.
              </p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold text-brand-accent mb-3">8. Changes to This Privacy Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold text-brand-accent mb-3">9. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:jiamai.inc@gmail.com" className="text-brand-accent hover:underline">jiamai.inc@gmail.com</a>.
                </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;