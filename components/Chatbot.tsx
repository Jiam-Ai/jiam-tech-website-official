import React, { useState, useRef, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { getChatInstance, sendMessageToGeminiStream, resetChat } from '../services/geminiService';
import { ChatMessage, MessageAuthor } from '../types';
import { ICONS } from '../constants';

// Helper component to render message content with Markdown and links
const MessageRenderer: React.FC<{ text: string }> = ({ text }) => {
    // Regex to find **bolded text** or internal links /#/path
    const regex = /(\*\*.*?\*\*|\/#\/\S+)/g;
    const parts = text.split(regex);
    
    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={index}>{part.slice(2, -2)}</strong>;
                }
                if (part.startsWith('/#/')) {
                    // Clean trailing punctuation from the URL for cleaner links
                    const cleanPart = part.replace(/[.,;!?)]$/, '');
                    const punctuation = part.substring(cleanPart.length);
                    return (
                        <React.Fragment key={index}>
                            <ReactRouterDOM.Link to={cleanPart.substring(1)} className="text-brand-accent hover:underline">{cleanPart}</ReactRouterDOM.Link>
                            {punctuation}
                        </React.Fragment>
                    );
                }
                // Render newlines correctly for lists and paragraphs
                return part.split('\n').map((line, lineIndex) => (
                    <React.Fragment key={`${index}-${lineIndex}`}>
                        {line}
                        {lineIndex < part.split('\n').length - 1 && <br />}
                    </React.Fragment>
                ));
            })}
        </>
    );
};

// A more subtle typing indicator
const TypingIndicator = () => (
    <div className="flex space-x-1 items-center p-2">
        <span className="w-2 h-2 bg-brand-text-secondary rounded-full animate-pulse [animation-delay:-0.3s]"></span>
        <span className="w-2 h-2 bg-brand-text-secondary rounded-full animate-pulse [animation-delay:-0.15s]"></span>
        <span className="w-2 h-2 bg-brand-text-secondary rounded-full animate-pulse"></span>
    </div>
);


const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { 
            author: MessageAuthor.ASSISTANT, 
            text: "Hello! I'm Jiam Tech's virtual assistant. I can answer questions about our services, company, and even search our blog for you. What can I help with?",
            quickReplies: ["Tell me about Jiam Tech", "What services do you offer?"]
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleClearChat = () => {
        resetChat();
        setMessages([
            { 
                author: MessageAuthor.ASSISTANT, 
                text: "Hello! I'm Jiam Tech's virtual assistant. How can I help you today?",
                quickReplies: ["Tell me about Jiam Tech", "What services do you offer?"]
            }
        ]);
    };

    const handleSendMessage = async (e: React.FormEvent, messageOverride?: string) => {
        e.preventDefault();
        const messageToSend = messageOverride || input;
        if (!messageToSend.trim() || isLoading) return;

        const userMessage: ChatMessage = { author: MessageAuthor.USER, text: messageToSend };
        setMessages(prev => [...prev, userMessage, { author: MessageAuthor.ASSISTANT, text: "" }]);
        setInput('');
        setIsLoading(true);

        try {
            const stream = await sendMessageToGeminiStream(messageToSend);
            
            for await (const chunk of stream) {
                const chunkText = chunk.text;
                if(chunkText) {
                    setMessages(prev => {
                        const lastMessage = prev[prev.length - 1];
                        const updatedMessages = [...prev];
                         if(lastMessage.author === MessageAuthor.ASSISTANT) {
                            updatedMessages[prev.length - 1] = { ...lastMessage, text: lastMessage.text + chunkText };
                         }
                        return updatedMessages;
                    });
                }
            }
        } catch (error) {
            console.error(error);
            const errorMessage: ChatMessage = { author: MessageAuthor.ASSISTANT, text: "I'm sorry, but I'm having trouble connecting right now. Please try again later." };
             setMessages(prev => {
                const updatedMessages = [...prev];
                if (updatedMessages[updatedMessages.length - 1].author === MessageAuthor.ASSISTANT) {
                    updatedMessages[updatedMessages.length - 1] = errorMessage;
                } else {
                    updatedMessages.push(errorMessage);
                }
                return updatedMessages;
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleQuickReplyClick = (replyText: string) => {
        const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
        handleSendMessage(fakeEvent, replyText);
    };

    const lastMessage = messages[messages.length - 1];
    const showQuickReplies = !isLoading && lastMessage.author === MessageAuthor.ASSISTANT && lastMessage.quickReplies && lastMessage.quickReplies.length > 0;

    return (
        <>
            <div className={`fixed bottom-5 right-5 z-50 transition-transform duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}>
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-brand-accent hover:bg-brand-accent-hover text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-brand-accent"
                    aria-label="Open Chat"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>
                </button>
            </div>

            <div className={`fixed bottom-5 right-5 w-[calc(100%-2.5rem)] sm:w-96 h-[70vh] flex flex-col bg-brand-secondary rounded-lg shadow-2xl z-50 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                <div className="flex items-center justify-between p-4 bg-brand-primary rounded-t-lg">
                    <h3 className="text-white font-bold">Jiam Tech Assistant</h3>
                    <div className="flex items-center gap-2">
                        <button onClick={handleClearChat} className="text-brand-text-secondary hover:text-white" aria-label="Clear Chat">
                            <ICONS.RefreshCw className="w-5 h-5" />
                        </button>
                        <button onClick={() => setIsOpen(false)} className="text-brand-text-secondary hover:text-white" aria-label="Close Chat">
                            <ICONS.Close className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                
                <div className="flex-1 p-4 overflow-y-auto">
                    <div className="flex flex-col space-y-4">
                        {messages.map((msg, index) => {
                             const isLastMessage = index === messages.length - 1;
                             const isTyping = isLastMessage && msg.author === MessageAuthor.ASSISTANT && isLoading;

                            return (
                                <div key={index} className={`flex items-end gap-2 ${msg.author === MessageAuthor.USER ? 'justify-end' : 'justify-start'}`}>
                                    {msg.author === MessageAuthor.ASSISTANT && (
                                        <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-white font-bold flex-shrink-0">AI</div>
                                    )}
                                    <div className={`max-w-[80%] rounded-lg px-4 py-2 ${msg.author === MessageAuthor.USER ? 'bg-brand-accent text-white rounded-br-none' : 'bg-brand-primary text-brand-text-secondary rounded-bl-none'}`}>
                                        {isTyping && msg.text === '' ? <TypingIndicator /> : <p className="text-sm break-words whitespace-pre-wrap"><MessageRenderer text={msg.text} /></p>}
                                    </div>
                                </div>
                            );
                        })}
                        <div ref={chatEndRef} />
                    </div>
                </div>

                {showQuickReplies && (
                    <div className="px-4 pb-2 flex flex-wrap gap-2">
                        {lastMessage.quickReplies!.map((reply, i) => (
                            <button
                                key={i}
                                onClick={() => handleQuickReplyClick(reply)}
                                className="px-3 py-1 text-sm border border-brand-accent/50 text-brand-accent rounded-full hover:bg-brand-accent/20 transition-colors"
                            >
                                {reply}
                            </button>
                        ))}
                    </div>
                )}


                <div className="p-4 border-t border-brand-accent/20">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me anything..."
                            className="flex-1 bg-brand-primary border border-brand-accent/30 rounded-lg px-4 py-2 text-white placeholder-brand-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-accent"
                            disabled={isLoading}
                        />
                        <button type="submit" className="bg-brand-accent hover:bg-brand-accent-hover text-white rounded-lg p-2 disabled:opacity-50" disabled={isLoading || !input.trim()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="m22 2-11 11"/></svg>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Chatbot;