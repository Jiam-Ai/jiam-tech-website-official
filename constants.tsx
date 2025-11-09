import React from 'react';
import { Service, Solution, TeamMember, Job, Testimonial, Product } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '#/' },
  { name: 'About Us', path: '#/about' },
  { name: 'Services', path: '#/services' },
  { name: 'Solutions', path: '#/solutions' },
  { name: 'Products', path: '#/products' },
  { name: 'ChatJiam', path: 'https://www.chatjiam.com' },
  { name: 'Careers', path: '#/careers' },
  { name: 'Blog', path: '#/blog' },
  { name: 'Contact', path: '#/contact' },
];

// Fix: Update ICONS components to accept props to allow className to be passed via React.cloneElement.
// Fix: Add missing icons and fix broken SVG path.
export const ICONS = {
  LogoIcon: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img src="https://files.catbox.moe/r9uc72.jpg" alt="Jiam tech Logo" {...props} />
  ),
  AiSoftware: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>,
  MlModels: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>,
  SaaS: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Cloud: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>,
  CRM: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="4" width="20" height="16" rx="2"></rect><circle cx="9" cy="10" r="2"></circle><line x1="15" y1="8" x2="19" y2="8"></line><line x1="15" y1="12" x2="19" y2="12"></line><line x1="15" y1="16" x2="19" y2="16"></line></svg>,
  MobileApp: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
  DataAnalytics: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
  Menu: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>,
  Close: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>,
  ChevronDown: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>,
  BrainCircuit: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2a5.2 5.2 0 0 0-4.2 2.3c-1.3 2-1.2 4.7.3 6.6 1.4 1.8 3.6 2.8 5.9 2.8s4.5-1 5.9-2.8c1.5-1.9 1.6-4.6.3-6.6A5.2 5.2 0 0 0 12 2z"/><path d="M12 14a6.2 6.2 0 0 0-6.2 6.2 1.8 1.8 0 0 0 1.8 1.8h8.8a1.8 1.8 0 0 0 1.8-1.8A6.2 6.2 0 0 0 12 14Z"/></svg>,
  TwitterX: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H22l-7.5 11L22 22H8.5l8-9L9 2h6.5Z"/></svg>,
  LinkedIn: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
  GitHub: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
  Globe: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
  Lightbulb: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 9 5c-2.3 0-4.4 1.3-5.5 3.5-1.1 2.2-1.1 4.8 0 7 .9 1.7 2.3 3 4 3.5 2.1.7 4.3.7 6.4 0 .5-.2 1-.4 1.5-.7Z"/><path d="M12 22v-2.5"/><path d="M9.5 17.5a2.5 2.5 0 0 1 5 0"/></svg>,
  Users: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  TrendingUp: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  IconAnalytics: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>,
  IconPenTool: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>,
  IconShield: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
  RefreshCw: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M3 12a9 9 0 0 1 9 9 9.75 9.75 0 0 1-6.74 2.74L3 16"/><path d="M3 21v-5h5"/></svg>,
  Facebook: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  Instagram: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
  TikTok: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 7.917v4.034a9.948 9.948 0 0 1-5-1.951v4.5a6.5 6.5 0 1 1-8-6.326v4.326a2.5 2.5 0 1 0 4 2V3h4.083a6.005 6.005 0 0 0 4.917 4.917z"/></svg>,
  YouTube: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21.58 7.19c-.23-.86-.9-1.52-1.76-1.75C18.25 5 12 5 12 5s-6.25 0-7.82.44c-.86.23-1.52.89-1.76 1.75C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.9 1.52 1.76 1.75C5.75 19 12 19 12 19s6.25 0 7.82-.44c.86-.23 1.52-.89 1.76-1.75C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.5 15.5V8.5l6 3.5-6 3.5z"/></svg>,
  WhatsApp: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21.1 12.8a9.4 9.4 0 0 1-9.4 9.4 9.4 9.4 0 0 1-5.1-1.4l-4.2 1.2 1.2-4a9.5 9.5 0 0 1-1.5-5.2A9.4 9.4 0 0 1 11.7 3.3a9.4 9.4 0 0 1 9.4 9.5Z" /><path d="M12.9 14.8c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.2-.6.7-.8.9-.1.1-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.9-.1-.3 0-.5.1-.6.1-.1.2-.3.4-.4.1-.1.2-.2.3-.3.1-.1.1-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-1 2s-1 2.3-.2 4.3c.9 2 2.3 3.6 5.1 4.9.7.3 1.3.5 1.9.7.8.2 1.5.1 2.1-.2.7-.4 1.2-1.2 1.4-1.6.2-.4.2-.7.1-.8l-.5-.3z" /></svg>,
  IconReply: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
  IconRetweet: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7 7l-5 5 5 5"/><path d="M2 12h14a4 4 0 0 0 4-4V4"/><path d="M17 17l5-5-5-5"/><path d="M22 12H8a4 4 0 0 0-4 4v4"/></svg>,
  IconHeart: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>,
  Share: (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>,
};

export const SERVICES_DATA: Service[] = [
  {
    icon: <ICONS.AiSoftware />,
    title: 'AI Software Development',
    description: 'We build custom AI-powered software solutions tailored to your specific business needs, from intelligent automation to predictive analytics.',
  },
  {
    icon: <ICONS.MlModels />,
    title: 'Custom Machine Learning Models',
    description: 'Our data scientists develop and train bespoke machine learning models to solve complex challenges, unlocking insights from your data.',
  },
  {
    icon: <ICONS.SaaS />,
    title: 'SaaS Solutions',
    description: 'We create scalable and secure Software-as-a-Service platforms, integrating AI to deliver intelligent, on-demand services to your users.',
  },
  {
    icon: <ICONS.Cloud />,
    title: 'Cloud Integration',
    description: 'Seamlessly integrate AI capabilities into your existing cloud infrastructure (AWS, Google Cloud, Azure) for enhanced performance and scalability.',
  },
  {
    icon: <ICONS.DataAnalytics />,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with our advanced data analytics services, helping you make smarter, data-driven decisions.',
  },
  {
    icon: <ICONS.BrainCircuit />,
    title: 'AI Strategy Consulting',
    description: 'We help you navigate the AI landscape, developing a strategic roadmap to leverage AI for competitive advantage and long-term growth.',
  },
  {
    icon: <ICONS.Globe />,
    title: 'Custom Web Development',
    description: 'We build modern, responsive, and high-performance websites for businesses, ensuring a strong online presence and seamless user experience.',
  },
  {
    icon: <ICONS.MobileApp />,
    title: 'Mobile App Development',
    description: 'We design and build custom mobile applications for companies and small businesses, delivering seamless user experiences on both iOS and Android platforms.',
  },
  {
    icon: <ICONS.CRM />,
    title: 'CRM System Development',
    description: 'We develop custom CRM systems to help businesses manage customer interactions, streamline processes, and drive growth through better data management.',
  },
];

export const DIFFERENTIATORS_DATA = [
    {
        icon: <ICONS.Lightbulb />,
        title: 'Innovation at Core',
        description: 'We are driven by curiosity and a desire to pioneer the future, constantly exploring new ideas to create cutting-edge solutions.'
    },
    {
        icon: <ICONS.SaaS />,
        title: 'Unwavering Integrity',
        description: 'We operate with transparency and uphold the highest ethical standards. Trust is the foundation of all our client relationships.'
    },
    {
        icon: <ICONS.Users />,
        title: 'Collaborative Partnership',
        description: 'We believe the best solutions are born from partnership. We work closely with our clients to achieve shared success and goals.'
    },
    {
        icon: <ICONS.TrendingUp />,
        title: 'Focus on Impact',
        description: 'We are focused on delivering measurable results and creating AI solutions that provide tangible business value and positive change.'
    },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: "Jiam tech transformed our operations with their AI-powered diagnostic tool. Their team's expertise and dedication were instrumental in improving our accuracy by 35%.",
    author: 'Dr. Aliyah Khan',
    company: 'Chief Medical Officer, HealthScan Diagnostics',
  },
  {
    quote: "The real-time recommendation engine Jiam tech built for us has been a game-changer. We've seen a 25% increase in conversion rates and our customers love the personalized experience.",
    author: 'Marcus Reid',
    company: 'CEO, Trendsetter Fashion',
  },
  {
    quote: 'Working with Jiam tech on our fraud detection system was a seamless experience. They reduced our financial losses by over 60% and provided a level of security we thought was years away.',
    author: 'Elena Petrova',
    company: 'Head of Operations, FinSecure',
  },
];

export const SOLUTIONS_DATA: Solution[] = [
  {
    industry: 'Healthcare',
    description: 'We empower healthcare providers with AI-driven solutions for medical imaging analysis, predictive diagnostics, and personalized patient care. Our tools help improve diagnostic accuracy, streamline workflows, and lead to better patient outcomes.',
    image: 'https://picsum.photos/seed/healthcare-solution/800/600',
  },
  {
    industry: 'Finance',
    description: 'In the financial sector, we deploy advanced machine learning models for real-time fraud detection, algorithmic trading, and credit risk assessment. Our secure and compliant solutions help financial institutions enhance security and optimize performance.',
    image: 'https://picsum.photos/seed/finance-solution/800/600',
  },
  {
    industry: 'Retail & E-commerce',
    description: 'We help retailers transform the customer experience with AI. From hyper-personalized recommendation engines to intelligent inventory management and supply chain optimization, our solutions drive sales and increase customer loyalty.',
    image: 'https://picsum.photos/seed/retail-solution/800/600',
  },
    {
    industry: 'Logistics & Supply Chain',
    description: 'Optimize your logistics with our AI-powered solutions for route optimization, demand forecasting, and warehouse automation. We help you reduce operational costs, improve delivery times, and build a more resilient supply chain.',
    image: 'https://picsum.photos/seed/logistics-solution/800/600',
  },
];

export const TEAM_DATA: TeamMember[] = [
  {
    name: 'Ibrahim S. Kamara',
    role: 'Founder & CEO',
    avatar: 'https://files.catbox.moe/kd5yv2.jpeg',
  },
   {
    name: 'John Kargbo',
    role: 'Product Manager',
    avatar: 'https://files.catbox.moe/j1wa62.jpeg',
  },
  {
    name: 'Mariama Bangura',
    role: 'Software  Engineer',
    avatar: 'https://files.catbox.moe/5c9hbf.jpeg',
  },
    {
    name: 'Omega Dixon',
    role: 'Backend Developer',
    avatar: 'https://files.catbox.moe/hw7usk.jpg',
  },

];

export const JOBS_DATA: Job[] = [
  {
    title: 'Senior Machine Learning Engineer',
    location: 'Freetown, Sierra Leone (Hybrid)',
    type: 'Full-time',
    description: 'We are looking for an experienced ML Engineer to design, build, and deploy machine learning models. You will work on challenging projects across various industries, leveraging state-of-the-art techniques to solve real-world problems. A strong background in Python, TensorFlow/PyTorch, and cloud platforms is required.',
  },
  {
    title: 'AI Product Manager',
    location: 'Remote',
    type: 'Full-time',
    description: 'As an AI Product Manager, you will define the product vision, strategy, and roadmap for our AI-powered solutions. You will collaborate with engineering, design, and business teams to deliver innovative products that meet customer needs and drive business growth. Experience in agile methodologies and a deep understanding of AI technologies are essential.',
  },
  {
    title: 'Data Scientist (NLP)',
    location: 'Freetown, Sierra Leone',
    type: 'Full-time',
    description: 'Join our data science team to work on cutting-edge Natural Language Processing (NLP) projects. You will be responsible for developing models for text classification, sentiment analysis, and information extraction. Proficiency in NLP libraries and experience with large language models (LLMs) is highly desirable.',
  },
  {
    title: 'Frontend Engineer (React)',
    location: 'Remote',
    type: 'Contract',
    description: 'We are seeking a skilled Frontend Engineer to build intuitive and responsive user interfaces for our AI applications. You will work with React, TypeScript, and modern web technologies to create exceptional user experiences. A strong portfolio of web applications is a must.',
  },
];

export const FAQ_DATA = [
    {
        question: 'What industries do you specialize in?',
        answer: 'We have broad expertise, but we specialize in delivering tailored AI solutions for Healthcare, Finance, Retail, Logistics, and Education. You can find more details on our solutions page (/#/solutions).',
    },
    {
        question: 'How does Jiam tech ensure data privacy and security?',
        answer: 'Data security is paramount. We employ end-to-end encryption, adhere to strict data governance protocols like GDPR and HIPAA where applicable, and utilize secure, cloud-native infrastructure. Our ethical AI framework ensures data is handled responsibly at every stage. You can read more in our Privacy Policy (/#/privacy).',
    },
    {
        question: 'What is a typical project timeline?',
        answer: "Timelines vary depending on project complexity. A typical project involves a discovery phase (2-4 weeks), a development and training phase (8-16 weeks), and a deployment and integration phase. We work closely with our clients to establish clear milestones and timelines. For a specific estimate, it's best to get in touch via our contact page (/#/contact).",
    },
    {
        question: 'What makes Jiam tech different from other AI companies?',
        answer: "Our key differentiators are our deep technical expertise, our client-centric partnership model, and our commitment to delivering measurable business results. We don't just build models; we build solutions that integrate seamlessly into your operations and drive tangible growth. Learn more about us here (/#/about).",
    },
        {
        question: 'Who is Ibrahim The Mega Chad',
        answer: "Self-taught programmer and entrepreneur Ibrahim the Mega Chad is a self-taught programmer and entrepreneur known for his engaging content on YouTube. He documents his journey in building JIAM, a software project, and shares insights into his entrepreneurial endeavors. The term (Mega Chad) has evolved into a cultural phenomenon, often associated with hyper-masculine ideals and societal perceptions of attractiveness, reflecting the broader trends in internet culture and social media.",
    },
];

export const PRODUCTS_DATA: Product[] = [
  {
    icon: <ICONS.IconAnalytics />,
    title: 'Chat Jiam',
    slug: 'Chat jiam',
    description: 'ChatJiam is a free, accessible AI platform built to empower the underserved and unlock opportunity through technology. Whether you are a student in a remote village, a small business owner without resources, or a curious mind eager to learn, ChatJiam puts the power of artificial intelligence in your hands no subscriptions, no barriers. Designed with equity at its core, ChatJiam offers: Smart tools for writing, learning, and creativity Multilingual support for diverse communities Mobile first access for low-bandwidth environments Zero-cost usage forever free for those who need it most ChatJiam isn’t just software it’s a movement to democratize intelligence and bridge the digital divide. Because brilliance shouldn’t depend on privilege..',
    link: 'https://www.chatjiam.com',
    imageUrl: 'https://files.catbox.moe/cw35ls.jpg',
  },
  {
    icon: <ICONS.IconPenTool />,
    title: 'Flash Face',
    slug: 'flash-face',
    description: 'Flash Face is an AI-powered time machine for your face. Upload a photo, and watch as your image transforms to match the iconic styles of past decades from the slick suits and pin-up glam of the 1950s, to the bold colors and big hair of the 1980s, all the way to the early 2000s streetwear vibe. Whether you are curious about how you look in disco lights, grunge gear, or Y2K fashion, Flash Face blends historical aesthetics with cutting-edge AI to deliver stunning, era specific portraits. Its not just a filter its a powerful tool on flashback.',
    link: '#',
    imageUrl: 'https://files.catbox.moe/muv65j.jpeg',
  },
  {
    icon: <ICONS.IconShield />,
    title: 'Salone Kart',
    slug: 'salone-kart',
    description: 'Salone Kart is a vibrant online marketplace designed to connect Sierra Leonean buyers and sellers in one seamless, mobile-friendly platform. Whether you are shopping for fashion, electronics, handmade crafts, or fresh produce, Salone Kart brings the local market to your fingertips anytime, anywhere. Built to empower small businesses, artisans, and entrepreneurs, Salone Kart offers: Easy storefront setup for vendors Secure mobile payments via Orange Money and Africell Nationwide delivery options Product discovery tools tailored to local tastes From Freetown to Kenema, Salone Kart is more than just e-commerce its a movement to digitize trade, boost local economies, and celebrate Sierra Leonean creativity.',
    link: '#',
    imageUrl: 'https://files.catbox.moe/gv2uhn.jpeg',
  },
   {
    icon: <ICONS.IconShield />,
    title: 'Jiam Stream',
    slug: 'jiam-stream',
    description: 'Jiam Stream is a global movie streaming platform designed to bring diverse stories to screens everywhere. From Hollywood gems to international blockbusters, Jiam Stream offers a curated library of films that entertain, challenge, and inspire accessible to anyone, anywhere. Whether you are watching on mobile or desktop, Jiam Stream delivers: High-quality streaming optimized for all devices Global content with a spotlight on emerging filmmakers No subscription fees free access for all users Multilingual support for a truly inclusive experience Smart recommendations powered by AI to match your taste Jiam Stream isn’t just a platform it’s a movement to democratize cinema and celebrate storytelling across cultures. Wherever you are, your next great film is just a click away.',
    link: '#',
    imageUrl: 'https://files.catbox.moe/4krcur.jpeg',
  },
];