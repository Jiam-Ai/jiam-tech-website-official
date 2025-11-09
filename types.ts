// Fix: Add missing import for 'React' to resolve 'Cannot find namespace React' error.
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Solution {
  industry: string;
  description: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export interface Job {
  title: string;
  location: string;
  type: string;
  description: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  slug: string;
  content: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    company: string;
}

export enum MessageAuthor {
    USER = 'user',
    ASSISTANT = 'assistant'
}

export interface ChatMessage {
    author: MessageAuthor;
    text: string;
    quickReplies?: string[];
}

export interface Product {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  slug: string;
}