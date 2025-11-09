import React, { useState } from 'react';
import { JOBS_DATA, ICONS } from '../constants';
import { Job } from '../types';
import { FORMSUBMIT_EMAIL } from '../config';

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState('');

  const handleToggleJob = (job: Job) => {
    const newSelectedJob = selectedJob === job.title ? null : job.title;
    setSelectedJob(newSelectedJob);
    setSelectedPosition(newSelectedJob || '');
  };

  // Construct the redirect URL for the thank you page
  const thankYouUrl = `${window.location.origin}${window.location.pathname.replace(/\/$/, '')}/#/thank-you`;


  return (
    <div className="bg-brand-primary text-white animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">Careers at Jiam tech</h1>
          <p className="mt-4 text-lg text-brand-text-secondary max-w-3xl mx-auto">
            Join our team of pioneers and shape the future of artificial intelligence. We're looking for talented individuals who are passionate about innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
              {JOBS_DATA.map((job) => (
                <div key={job.title} className="bg-brand-secondary rounded-lg shadow-lg overflow-hidden">
                  <button
                    onClick={() => handleToggleJob(job)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-brand-primary/50 transition-colors focus:outline-none"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <div className="flex items-center text-sm text-brand-text-secondary mt-2 space-x-4">
                        <span>{job.location}</span>
                        <span className="w-1 h-1 bg-brand-text-secondary rounded-full"></span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <ICONS.ChevronDown className={`w-6 h-6 text-brand-accent transform transition-transform duration-300 ${selectedJob === job.title ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-500 ease-in-out grid ${selectedJob === job.title ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                        <div className="p-6 border-t border-brand-accent/20">
                            <p className="text-brand-text-secondary leading-relaxed">{job.description}</p>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8">Apply Now</h2>
            <div className="bg-brand-secondary p-8 rounded-lg shadow-lg">
                <form 
                  action={`https://formsubmit.co/${FORMSUBMIT_EMAIL}`} 
                  method="POST" 
                  encType="multipart/form-data"
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value="New Job Application via Jiam tech Website" />
                  <input type="hidden" name="_next" value={thankYouUrl} />
                  <input type="hidden" name="_captcha" value="false" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-text-secondary mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" id="name" name="name" required className="w-full bg-brand-primary border border-brand-accent/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-text-secondary mb-2">Email <span className="text-red-500">*</span></label>
                    <input type="email" id="email" name="email" required className="w-full bg-brand-primary border border-brand-accent/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent" />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-brand-text-secondary mb-2">Position Applied For <span className="text-red-500">*</span></label>
                    <select 
                        id="position" 
                        name="position" 
                        required 
                        value={selectedPosition}
                        onChange={(e) => setSelectedPosition(e.target.value)}
                        className="w-full bg-brand-primary border border-brand-accent/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    >
                        <option value="" disabled>Select a position</option>
                        {JOBS_DATA.map(job => <option key={job.title} value={job.title}>{job.title}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-brand-text-secondary mb-2">Resume/CV <span className="text-red-500">*</span></label>
                    <input type="file" id="resume" name="resume" required className="w-full text-sm text-brand-text-secondary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-accent file:text-white hover:file:bg-brand-accent-hover" />
                  </div>
                  <div>
                    <button 
                      type="submit" 
                      className="w-full bg-brand-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-accent-hover transition-colors"
                    >
                      Submit Application
                    </button>
                  </div>
                  
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;