
import React from 'react';
import { TEAM_DATA, ICONS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-brand-primary text-white animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">About Jiam tech</h1>
          <p className="mt-4 text-lg text-brand-text-secondary max-w-3xl mx-auto">
            We are a team of passionate innovators, scientists, and engineers dedicated to pushing the boundaries of artificial intelligence.
          </p>
        </div>

        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-accent mb-4">Our Story</h2>
            <p className="text-brand-text-secondary leading-relaxed">
              Founded in 2022 by a group of AI researchers and software engineers, Jiam tech began with a simple yet ambitious goal: to make the power of artificial intelligence accessible and beneficial for all. From our humble beginnings in a small office, we've grown into a globally recognized leader in AI solutions, driven by a relentless passion for innovation. Our journey has been marked by groundbreaking projects, strategic partnerships, and a continuous commitment to solving some of the world's most complex challenges through technology.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h2 className="text-3xl font-bold text-brand-accent mb-4">Our Mission</h2>
            <p className="text-brand-text-secondary leading-relaxed">
              Our mission is to democratize artificial intelligence and empower organizations of all sizes to leverage its transformative power. We are committed to building intelligent, reliable, and scalable solutions that solve real-world problems, drive sustainable growth, and create a better, more efficient future. We strive to be more than just a technology provider; we aim to be a dedicated partner in our clients' journey towards innovation.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-accent mb-4">Our Vision</h2>
            <p className="text-brand-text-secondary leading-relaxed">
              Our vision is to be the world's most trusted partner in AI innovation. We envision a future where intelligent technology is seamlessly and ethically integrated into every aspect of business and life, enhancing human potential, fostering unprecedented progress, and creating a world where technology serves humanity. We work towards this future by pushing the boundaries of research and applying it with a steadfast focus on positive impact.
            </p>
          </div>
        </section>
        
        <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-brand-secondary p-8 rounded-lg shadow-lg">
                    <div className="text-brand-accent w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-brand-primary rounded-full">
                        <ICONS.Lightbulb className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Innovation</h3>
                    <p className="text-brand-text-secondary text-sm">We are driven by curiosity and a desire to pioneer the future, constantly exploring new ideas to create cutting-edge solutions.</p>
                </div>
                 <div className="bg-brand-secondary p-8 rounded-lg shadow-lg">
                    <div className="text-brand-accent w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-brand-primary rounded-full">
                        <ICONS.SaaS className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Integrity</h3>
                    <p className="text-brand-text-secondary text-sm">We operate with transparency and uphold the highest ethical standards. Trust is the foundation of our relationships.</p>
                </div>
                 <div className="bg-brand-secondary p-8 rounded-lg shadow-lg">
                    <div className="text-brand-accent w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-brand-primary rounded-full">
                        <ICONS.Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                    <p className="text-brand-text-secondary text-sm">We believe the best solutions are born from partnership. We work closely with our clients and team to achieve shared success.</p>
                </div>
                 <div className="bg-brand-secondary p-8 rounded-lg shadow-lg">
                    <div className="text-brand-accent w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-brand-primary rounded-full">
                        <ICONS.TrendingUp className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Impact</h3>
                    <p className="text-brand-text-secondary text-sm">We are focused on delivering measurable results and creating AI solutions that provide tangible value and positive change.</p>
                </div>
            </div>
        </section>

        <section className="mb-20 bg-brand-secondary rounded-lg p-10 shadow-lg">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-brand-accent mb-4">Our Commitment to Ethical AI</h2>
                <p className="text-brand-text-secondary leading-relaxed">
                    At Jiam tech, we believe that with great power comes great responsibility. Our commitment to ethical AI is at the core of everything we do. We are dedicated to developing artificial intelligence that is fair, transparent, and accountable. We proactively address potential biases, ensure our models are explainable, and prioritize data privacy and security. Our goal is to build technology that not only drives innovation but also earns the trust of society and contributes positively to the world.
                </p>
            </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_DATA.map((member) => (
              <div key={member.name} className="bg-brand-secondary p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-brand-accent/50"
                />
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-brand-accent">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;