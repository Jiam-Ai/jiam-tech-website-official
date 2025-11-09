import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { NAV_LINKS, ICONS } from '../constants';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary hover:text-brand-accent transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-secondary border-t border-brand-accent/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center">
                          <ICONS.LogoIcon className="h-8 w-auto mr-2 text-white" />
                          <span className="text-2xl font-bold text-white">
                            Jiam <span className="text-brand-accent">Tech</span>
                          </span>
                        </div>
                        <p className="mt-2 text-brand-text-secondary text-sm">Empowering the Future with Artificial Intelligence.</p>
                        <div className="flex flex-wrap gap-4 mt-4">
                           <SocialIcon href="https://x.com/jiamtech?s=21">
                               <ICONS.TwitterX />
                           </SocialIcon>
                           <SocialIcon href="https://www.facebook.com/share/14QSSVtEzc2/?mibextid=wwXIfr">
                                <ICONS.Facebook />
                           </SocialIcon>
                           <SocialIcon href="https://www.instagram.com/jiam.tech?igsh=N2ZqbmNkcHdrczlz&utm_source=qr">
                                <ICONS.Instagram />
                           </SocialIcon>
                           <SocialIcon href="https://www.tiktok.com/@jiam.tech?_t=ZT-90TWCUiBIPF&_r=1">
                                <ICONS.TikTok />
                           </SocialIcon>
                           <SocialIcon href="https://youtube.com/@jiamtech?si=qwjeu1GEi9aX1pWL">
                                <ICONS.YouTube />
                           </SocialIcon>
                           <SocialIcon href="https://wa.me/23277931814">
                                <ICONS.WhatsApp />
                           </SocialIcon>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            {NAV_LINKS.map(link => {
                                const isExternal = link.path.startsWith('http');
                                return (
                                    <li key={link.name}>
                                        {isExternal ? (
                                            <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-text-secondary hover:text-brand-accent transition-colors duration-300">
                                                {link.name}
                                            </a>
                                        ) : (
                                            <ReactRouterDOM.Link to={link.path.substring(1)} className="text-sm text-brand-text-secondary hover:text-brand-accent transition-colors duration-300">
                                                {link.name}
                                            </ReactRouterDOM.Link>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-lg font-semibold text-white">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li><ReactRouterDOM.Link to="/privacy" className="text-sm text-brand-text-secondary hover:text-brand-accent transition-colors duration-300">Privacy Policy</ReactRouterDOM.Link></li>
                            <li><ReactRouterDOM.Link to="/terms" className="text-sm text-brand-text-secondary hover:text-brand-accent transition-colors duration-300">Terms of Service</ReactRouterDOM.Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                        <ul className="mt-4 space-y-2 text-sm text-brand-text-secondary">
                            <li>Email: jiamai.inc@gmail.com</li>
                            <li>Phone: +23277931814</li>
                            <li>Hill Station, Freetown, Sierra Leone</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-brand-accent/20 text-center text-sm text-brand-text-secondary">
                    <p>&copy; {new Date().getFullYear()} Jiam Tech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;