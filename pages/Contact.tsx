import React, { useState } from 'react';
import { FORMSUBMIT_EMAIL } from '../config';

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setMessage('');

    const formData = new FormData(e.target as HTMLFormElement);
    const formObject = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formObject),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Your message has been sent successfully! We will get back to you soon.');
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("FormSubmit Error:", data);
        setStatus('error');
        setMessage(data.message || 'An unexpected error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Submission Fetch Error:', error);
      setStatus('error');
      setMessage('A network error occurred. Please check your connection and try again.');
    }
  };

  return (
    <div className="bg-brand-primary text-white animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-lg text-brand-text-secondary max-w-3xl mx-auto">
            Have a project in mind or just want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="bg-brand-secondary p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_subject" value="New Contact Form Submission from Jiam tech Website" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-text-secondary mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" id="name" name="name" required className="w-full bg-brand-primary border border-brand-accent/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent" disabled={status === 'sending'} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-text-secondary mb-2">Email <span className="text-red-500">*</span></label>
                  <input type="email" id="email" name="email" required className="w-full bg-brand-primary border border-brand-accent/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent" disabled={status === 'sending'} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-text-secondary mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea id="message" name="message" rows={4} required className="w-full bg-brand-primary border border-brand-accent/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent" disabled={status === 'sending'}></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-brand-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                 {status === 'success' && (
                    <div className="text-center p-3 rounded-lg bg-green-500/20 text-green-300">
                        {message}
                    </div>
                )}
                {status === 'error' && (
                    <div className="text-center p-3 rounded-lg bg-red-500/20 text-red-300">
                        {message}
                    </div>
                )}
              </form>
          </div>

          <div className="space-y-8">
            <div className="bg-brand-secondary p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-3 text-brand-text-secondary">
                <li className="flex items-center"><span className="text-brand-accent mr-3">📧</span> jiamai.inc@gmail.com</li>
                <li className="flex items-center"><span className="text-brand-accent mr-3">📞</span> +232 77 931 814</li>
                <li className="flex items-center"><span className="text-brand-accent mr-3">📍</span> Hill Station, Freetown, Sierra Leone</li>
              </ul>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.21739502773!2d-13.246497334887692!3d8.474044900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04e1a681b953c9%3A0x629555c88b90c1e8!2sHill%20Station%2C%20Freetown%2C%20Sierra%20Leone!5e0!3m2!1sen!2s!4v1683897621124!5m2!1sen!2s"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jiam tech Location"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;