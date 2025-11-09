import React, { useEffect, useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useBlog } from '../contexts/BlogContext';
import { BlogPost as BlogPostType } from '../types';
import { ICONS } from '../constants';

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
    const renderLine = (line: string) => {
        // A simple parser for bold and italics
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        line = line.replace(/__(.*?)__/g, '<strong>$1</strong>');
        line = line.replace(/\*(.*?)\*/g, '<em>$1</em>');
        line = line.replace(/_(.*?)_/g, '<em>$1</em>');
        return { __html: line };
    };

    const elements = content.split('\n').map((line, index) => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('###')) {
            return <h3 key={index} className="text-2xl font-bold mt-6 mb-3" dangerouslySetInnerHTML={renderLine(trimmedLine.substring(3).trim())} />;
        }
        if (trimmedLine.startsWith('##')) {
            return <h2 key={index} className="text-3xl font-bold mt-8 mb-4" dangerouslySetInnerHTML={renderLine(trimmedLine.substring(2).trim())} />;
        }
        if (trimmedLine.startsWith('#')) {
            return <h1 key={index} className="text-4xl font-bold mt-10 mb-5" dangerouslySetInnerHTML={renderLine(trimmedLine.substring(1).trim())} />;
        }
        if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
            return <li key={index} className="ml-6 list-disc" dangerouslySetInnerHTML={renderLine(trimmedLine.substring(2).trim())} />;
        }
        if (trimmedLine === '') {
            return null;
        }
        return <p key={index} className="my-4 leading-relaxed text-lg" dangerouslySetInnerHTML={renderLine(trimmedLine)} />;
    });

    return <>{elements.filter(el => el)}</>;
};

const BlogPostSkeleton: React.FC = () => (
    <div className="max-w-4xl mx-auto animate-pulse">
        <div className="h-10 bg-brand-secondary rounded w-3/4 mb-4"></div>
        <div className="h-6 bg-brand-secondary rounded w-1/2 mb-8"></div>
        <div className="w-full h-96 bg-brand-secondary rounded-lg mb-8"></div>
        <div className="space-y-4">
            <div className="h-6 bg-brand-secondary rounded w-full"></div>
            <div className="h-6 bg-brand-secondary rounded w-full"></div>
            <div className="h-6 bg-brand-secondary rounded w-5/6"></div>
        </div>
    </div>
);

const ShareButton: React.FC<{ href: string; children: React.ReactNode; label: string }> = ({ href, children, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Share on ${label}`}
        className="flex items-center justify-center w-12 h-12 bg-brand-secondary rounded-full text-brand-text-secondary hover:text-white hover:bg-brand-accent transition-all duration-300"
    >
        {children}
    </a>
);


const BlogPost: React.FC = () => {
    const { slug } = ReactRouterDOM.useParams<{ slug: string }>();
    const navigate = ReactRouterDOM.useNavigate();
    const { posts, loading, error } = useBlog();
    const [post, setPost] = useState<BlogPostType | null>(null);

    useEffect(() => {
        if (!loading && !error) {
            const foundPost = posts.find(p => p.slug === slug);
            if (foundPost) {
                setPost(foundPost);
            } else if (posts.length > 0) {
                // Handle slug not found only if posts have been loaded
                navigate('/blog');
            }
        }
    }, [slug, posts, loading, error, navigate]);

    if (loading) {
        return (
            <div className="bg-brand-primary text-white animate-fade-in-up">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <BlogPostSkeleton />
                </div>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="bg-brand-primary text-white animate-fade-in-up">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-4xl mx-auto text-center py-16 bg-brand-secondary rounded-lg">
                        <h2 className="text-2xl font-bold text-red-500">Could Not Load Post</h2>
                        <p className="mt-2 text-brand-text-secondary">{error}</p>
                        <ReactRouterDOM.Link to="/blog" className="mt-8 inline-block bg-brand-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-brand-accent-hover transition-colors">
                            &larr; Back to Blog
                        </ReactRouterDOM.Link>
                    </div>
                </div>
            </div>
        );
    }

    if (!post) {
        // This state is temporary before useEffect finds the post or if posts fail to load initially.
        // Showing a skeleton is appropriate here while context is resolving or navigation occurs.
        return (
            <div className="bg-brand-primary text-white animate-fade-in-up">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <BlogPostSkeleton />
                </div>
            </div>
        );
    }

    const postUrl = window.location.href;
    const shareText = `Check out this article from Jiam Tech: ${post.title}`;

    return (
        <div className="bg-brand-primary text-white animate-fade-in-up">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <article className="max-w-4xl mx-auto">
                    <header className="mb-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{post.title}</h1>
                        <div className="text-md text-brand-text-secondary">
                            <span>By {post.author}</span> &bull; <span>{post.date}</span>
                        </div>
                    </header>

                    <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-2xl mb-12" />
                    
                    <div className="text-brand-text-secondary">
                        <MarkdownRenderer content={post.content} />
                    </div>

                    <div className="mt-16 pt-8 border-t border-brand-accent/20">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <h3 className="text-lg font-semibold text-white">Share this post:</h3>
                            <div className="flex items-center gap-4">
                                <ShareButton
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(shareText)}`}
                                    label="Twitter"
                                >
                                    <ICONS.TwitterX className="w-6 h-6" />
                                </ShareButton>
                                <ShareButton
                                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`}
                                    label="LinkedIn"
                                >
                                    <ICONS.LinkedIn className="w-6 h-6" />
                                </ShareButton>
                                <ShareButton
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
                                    label="Facebook"
                                >
                                    <ICONS.Facebook className="w-6 h-6" />
                                </ShareButton>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <ReactRouterDOM.Link to="/blog" className="inline-block bg-brand-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-brand-accent-hover transition-transform transform hover:scale-105">
                            &larr; Back to Blog
                        </ReactRouterDOM.Link>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogPost;