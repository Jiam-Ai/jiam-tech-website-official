import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useBlog } from '../contexts/BlogContext';
import { BlogPost } from '../types';

const SearchResultCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="bg-brand-secondary rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row transform transition-transform duration-300 group-hover:-translate-y-2">
      <img src={post.imageUrl} alt={post.title} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h2 className="text-xl font-bold text-white mb-2 flex-grow group-hover:text-brand-accent transition-colors">{post.title}</h2>
        <p className="text-brand-text-secondary mb-4 text-sm">{post.excerpt}</p>
        <div className="text-xs text-brand-text-secondary mt-auto">
          <span>By {post.author}</span> &bull; <span>{post.date}</span>
        </div>
      </div>
    </div>
  );
};


const Search: React.FC = () => {
  const [searchParams] = ReactRouterDOM.useSearchParams();
  const { posts: allPosts, loading } = useBlog();
  const [results, setResults] = useState<BlogPost[]>([]);
  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query && allPosts.length > 0) {
      const lowercasedQuery = query.toLowerCase();
      const filteredResults = allPosts.filter(post =>
        post.title.toLowerCase().includes(lowercasedQuery) ||
        post.excerpt.toLowerCase().includes(lowercasedQuery) ||
        post.author.toLowerCase().includes(lowercasedQuery)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query, allPosts]);

  return (
    <div className="bg-brand-primary text-white animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
            {query ? `Search Results for "${query}"` : 'Search'}
          </h1>

          {loading && query && (
             <p className="text-brand-text-secondary mb-4">Searching articles...</p>
          )}

          {!loading && query && (
            results.length > 0 ? (
              <div className="space-y-8">
                <p className="text-brand-text-secondary mb-4">{results.length} result{results.length !== 1 ? 's' : ''} found.</p>
                {results.map(post => (
                  <ReactRouterDOM.Link to={`/blog/${post.slug}`} key={post.slug} className="block group">
                    <SearchResultCard post={post} />
                  </ReactRouterDOM.Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-brand-secondary rounded-lg">
                <h2 className="text-2xl font-bold text-brand-text-secondary">No Results Found</h2>
                <p className="mt-2 text-brand-text-secondary">
                  Sorry, we couldn't find any blog posts matching your search. Try another keyword.
                </p>
              </div>
            )
          )}

          {!query && (
             <div className="text-center py-16 bg-brand-secondary rounded-lg">
                <h2 className="text-2xl font-bold text-brand-text-secondary">Search the Blog</h2>
                <p className="mt-2 text-brand-text-secondary">
                  Use the search bar in the header to find articles.
                </p>
              </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Search;