
import React from 'react';
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'NexaNews',
    category: 'React.js / Tidio / CSS',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop', // News themed
    description: 'A responsive technology news platform delivering curated updates with integrated live chat support for real-time user engagement.'
  },
  {
    id: '02',
    title: 'Cloud Agi',
    category: 'Python / Next.js / AI',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop', // AI themed
    description: 'Developed and deployed autonomous AI agents to enhance automation and intelligence in modern web applications.'
  },
  {
    id: '03',
    title: 'IT Support Systems',
    category: 'Internship / Systems',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop', // Tech/Support themed
    description: 'Worked on diagnostic tools and system maintenance during internship at Silicon Info Systems.'
  },
  {
    id: '04',
    title: 'Web Virtual Lab',
    category: 'Internship / Web Dev',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop', // Coding themed
    description: 'Exploration of interface design and virtual environments during Oasis InfoByte internship.'
  }
];

export const LogoIcon = ({ isDarkMode }: { isDarkMode?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" stroke={isDarkMode ? "white" : "black"} strokeWidth="0.5" />
    <path d="M2 12H22" stroke={isDarkMode ? "white" : "black"} strokeWidth="0.5" />
    <path d="M12 2V22" stroke={isDarkMode ? "white" : "black"} strokeWidth="0.5" />
    <circle cx="12" cy="12" r="2" fill={isDarkMode ? "white" : "black"} />
    <path d="M4 4L20 20M20 4L4 20" stroke={isDarkMode ? "white" : "black"} strokeWidth="0.2" />
  </svg>
);
