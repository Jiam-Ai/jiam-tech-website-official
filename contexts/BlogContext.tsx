import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { BlogPost } from '../types';
import { generateBlogPosts } from '../services/geminiService';

interface BlogContextType {
    posts: BlogPost[];
    loading: boolean;
    error: string | null;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

const TWO_HOURS_MS = 2 * 60 * 60 * 1000;

const createSlug = (title: string) => {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
};

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const cachedDataString = sessionStorage.getItem('blogPosts');
                if (cachedDataString) {
                    const { timestamp, data } = JSON.parse(cachedDataString);
                    if (Date.now() - timestamp < TWO_HOURS_MS) {
                        setPosts(data);
                        setLoading(false);
                        return;
                    }
                }
            } catch (e) {
                console.error("Failed to parse cached blog posts", e);
                sessionStorage.removeItem('blogPosts');
            }

            setLoading(true);
            setError(null);

            try {
                const generatedPosts = await generateBlogPosts();
                
                const postsWithImages: BlogPost[] = generatedPosts.map((post: any) => ({
                    ...post,
                    slug: createSlug(post.title),
                    imageUrl: `https://picsum.photos/seed/${encodeURIComponent(post.title)}/600/400`,
                }));

                setPosts(postsWithImages);
                sessionStorage.setItem('blogPosts', JSON.stringify({
                    timestamp: Date.now(),
                    data: postsWithImages,
                }));
            } catch (err) {
                console.error("Error fetching blog posts:", err);
                setError("Failed to load blog posts. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <BlogContext.Provider value={{ posts, loading, error }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = (): BlogContextType => {
    const context = useContext(BlogContext);
    if (context === undefined) {
        throw new Error('useBlog must be used within a BlogProvider');
    }
    return context;
};