import React from 'react';
import { ICONS } from '../constants';

// Define the structure for a post
interface Post {
    id: number;
    authorName: string;
    authorHandle: string;
    authorAvatar: string;
    content: string;
    image?: string;
    timestamp: string;
    stats: {
        replies: number;
        retweets: number;
        likes: number;
    };
}

// Create some realistic post data
const POSTS_DATA: Post[] = [
    {
        id: 1,
        authorName: 'Jiam Tech',
        authorHandle: '@jiamtech',
        authorAvatar: 'https://files.catbox.moe/r9uc72.jpg',
        content: "🚀 Big News! We're thrilled to launch Jiam.ai - a completely free AI platform designed to democratize intelligence for underserved communities. No subscriptions, no barriers. Just powerful AI for everyone.\n\n#AIforGood #JiamAI #TechEquity",
        image: 'https://files.catbox.moe/56yny3.jpeg',
        timestamp: '2h ago',
        stats: {
            replies: 18,
            retweets: 97,
            likes: 432,
        },
    },
    {
        id: 2,
        authorName: 'Jiam Tech',
        authorHandle: '@jiamtech',
        authorAvatar: 'https://files.catbox.moe/r9uc72.jpg',
        content: "The pace of innovation in Large Language Models is staggering. From hyper-realistic text generation to complex problem-solving, LLMs are reshaping industries. What's the most exciting application you've seen recently?\n\n#AI #LLM #MachineLearning #FutureTech",
        image: 'https://picsum.photos/seed/ai-llm-post/800/450',
        timestamp: '1d ago',
        stats: {
            replies: 34,
            retweets: 156,
            likes: 891,
        },
    },
    {
        id: 3,
        authorName: 'Jiam Tech',
        authorHandle: '@jiamtech',
        authorAvatar: 'https://files.catbox.moe/r9uc72.jpg',
        content: "We're growing! Jiam tech is looking for a passionate Senior Machine Learning Engineer to join our team in Freetown. If you want to work on cutting-edge AI that makes a real-world impact, we want to hear from you! Apply now on our careers page.\n\n#Hiring #TechJobs #AIJobs #SierraLeone",
        image: 'https://picsum.photos/seed/ai-hiring-post/800/450',
        timestamp: '3d ago',
        stats: {
            replies: 12,
            retweets: 78,
            likes: 215,
        },
    },
];

// Helper to format numbers like 1.2k
const formatStat = (num: number): string => {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
};

// Helper to render post content with styled hashtags and mentions
const PostContent: React.FC<{ text: string }> = ({ text }) => {
    const parts = text.split(/(\s+)/); // Split by whitespace, keeping it
    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith('#') || part.startsWith('@')) {
                    return <span key={index} className="text-brand-accent">{part}</span>;
                }
                return <React.Fragment key={index}>{part}</React.Fragment>;
            })}
        </>
    );
};

const TwitterFeed: React.FC = () => {
    return (
        <section className="py-20 bg-brand-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest on X</h2>
                <p className="max-w-2xl mx-auto text-brand-text-secondary mb-12">
                    Follow us for the latest updates, industry insights, and company news.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {POSTS_DATA.map((post) => (
                        <div key={post.id} className="bg-brand-primary p-6 rounded-lg shadow-lg text-left flex flex-col gap-4 border border-brand-accent/10 hover:border-brand-accent/30 transition-colors duration-300">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img src={post.authorAvatar} alt={post.authorName} className="w-12 h-12 rounded-full border-2 border-brand-accent/50"/>
                                    <div>
                                        <p className="font-bold text-white">{post.authorName}</p>
                                        <p className="text-sm text-brand-text-secondary">{post.authorHandle}</p>
                                    </div>
                                </div>
                                <ICONS.TwitterX className="w-6 h-6 text-brand-text-secondary" />
                            </div>

                            {/* Content */}
                            <p className="text-brand-text-secondary whitespace-pre-wrap">
                                <PostContent text={post.content} />
                            </p>

                            {/* Image */}
                            {post.image && (
                                <img src={post.image} alt="Post content" className="rounded-lg w-full object-cover aspect-video mt-2" />
                            )}

                            {/* Timestamp */}
                            <p className="text-xs text-brand-text-secondary">{post.timestamp}</p>

                            {/* Stats */}
                            <div className="border-t border-brand-accent/20 pt-4 flex justify-around text-brand-text-secondary">
                                <div className="flex items-center gap-2 text-sm hover:text-brand-accent transition-colors cursor-pointer">
                                    <ICONS.IconReply className="w-5 h-5" />
                                    <span>{formatStat(post.stats.replies)}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm hover:text-green-500 transition-colors cursor-pointer">
                                    <ICONS.IconRetweet className="w-5 h-5" />
                                    <span>{formatStat(post.stats.retweets)}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm hover:text-pink-500 transition-colors cursor-pointer">
                                    <ICONS.IconHeart className="w-5 h-5" />
                                    <span>{formatStat(post.stats.likes)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TwitterFeed;