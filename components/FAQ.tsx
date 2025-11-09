import React, { useState } from 'react';
// FIX: Replaced namespace import for 'react-router-dom' with a named import for 'Link' to resolve component access errors.
import { Link } from 'react-router-dom';
import { FAQ_DATA, ICONS } from '../constants';

const AnswerParser: React.FC<{ text: string }> = ({ text }) => {
    // Regex to find "link text (/#/path)" patterns, e.g., "solutions page (/#/solutions)"
    const linkRegex = /([^()]+?)\s+\((#\/[^)]+)\)/g;
    const parts: (string | React.ReactElement)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
        // Push the text before the link
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }
        
        // Push the link component
        const linkText = match[1].trim();
        const linkPath = match[2].substring(1); // remove the leading '#'
        
        parts.push(
            <Link key={match.index} to={linkPath} className="text-brand-accent hover:underline font-semibold transition-colors">
                {linkText}
            </Link>
        );
        lastIndex = linkRegex.lastIndex;
    }

    // Push any remaining text after the last link
    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return <>{parts}</>;
};


const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-brand-primary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="max-w-2xl mx-auto text-brand-text-secondary">
                        Find quick answers to common questions about our services and technology.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {FAQ_DATA.map((item, index) => (
                            <div key={index} className="bg-brand-secondary rounded-lg shadow-lg overflow-hidden border border-brand-accent/10">
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="w-full p-6 text-left flex justify-between items-center hover:bg-brand-primary/50 transition-colors focus:outline-none"
                                >
                                    <span className={`text-lg font-semibold ${openIndex === index ? 'text-brand-accent' : 'text-white'}`}>
                                        {item.question}
                                    </span>
                                    <ICONS.ChevronDown className={`w-6 h-6 text-brand-accent transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                                </button>
                                <div 
                                    className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-6 text-brand-text-secondary leading-relaxed">
                                            <AnswerParser text={item.answer} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;