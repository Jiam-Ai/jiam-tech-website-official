
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-brand-primary text-white animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">Terms of Service</h1>
          <p className="text-center text-brand-text-secondary mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="space-y-8 text-brand-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-brand-accent mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-accent mb-3">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Jiam tech's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on Jiam tech's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p className="mt-2">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Jiam tech at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-accent mb-3">3. Disclaimer</h2>
              <p>
                The materials on Jiam tech's website are provided on an 'as is' basis. Jiam tech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
               <p className="mt-2">
                Further, Jiam tech does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold text-brand-accent mb-3">4. Limitations</h2>
                <p>
                    In no event shall Jiam tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Jiam tech's website, even if Jiam tech or a Jiam tech authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-accent mb-3">5. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Sierra Leone and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold text-brand-accent mb-3">6. Changes to These Terms</h2>
                <p>
                    We may revise these terms of service for our website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold text-brand-accent mb-3">7. Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please contact us at <a href="mailto:jiamai.inc@gmail.com" className="text-brand-accent hover:underline">jiamai.inc@gmail.com</a>.
                </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;