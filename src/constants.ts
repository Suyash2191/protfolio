import { Project, Tool } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Balance Nutrition Product Design',
    company: 'BALANCE NUTRITION',
    category: 'mobile',
    description: 'A complete product design journey: mobile app UX, campaign website, and the introduction of Clara AI an intelligent nutrition, lifestyle & diet companion built for real people.',
    image: '/images/clara.png',
    tags: ['Mobile UX', 'Campaign Website', 'AI Companion'],
    caseStudy: 'A complete product design journey: mobile app UX, campaign website, and the introduction of Clara AI an intelligent nutrition, lifestyle & diet companion built for real people.',
    time: '2025 to present',
    role: 'Senior and Lead Product Designer\nFeature Clara Ai'
  },
  {
    id: '2',
    title: 'AI-Powered Team Command Center',
    company: 'TEAM AI',
    category: 'website',
    description: 'An intelligent project management dashboard where AI handles your entire company pipeline — tasks, teams, deadlines, attendance, and communication through voice and chat.',
    image: '/images/cs-ai-greeting.png',
    tags: ['AI', 'Dashboard', 'SaaS'],
    caseStudy: 'An intelligent project management dashboard where AI handles your entire company pipeline — tasks, teams, deadlines, attendance, and communication through voice and chat.',
    time: '2024 - 25',
    role: 'Product Designer',
    featuredOn: 'Behance',
    challenge: 'Managing a complex company pipeline with multiple teams, deadlines, and communication channels often leads to fragmentation and inefficiency.',
    solution: 'We built a centralized command center where AI orchestrates the entire workflow, providing real-time insights and automated task management.',
    process: [
      {
        title: 'Pipeline Automation',
        description: 'Designed a system where AI automatically assigns tasks and predicts deadlines based on team capacity and project complexity.',
        image: '/images/cs-dashboard-team.png'
      },
      {
        title: 'Voice & Chat Integration',
        description: 'Implemented seamless communication through AI-powered voice and chat interfaces, allowing for natural interactions.',
        image: '/images/cs-chat-ui.png'
      }
    ],
    results: [
      '30% increase in team productivity within the first quarter',
      'Reduced project delivery time by 20%',
      'Improved team communication and alignment'
    ]
  },
  {
    id: '3',
    title: 'Aivory Studio — AI Photo Editing',
    company: 'CLIENT PROJECT',
    category: 'website',
    description: 'End-to-end UI design for a web-based AI photo editing software — covering landing pages, editor interface, onboarding, and feature screens.',
    image: '/images/creative-editor.png',
    tags: ['AI', 'UI Design Only', 'Figma'],
    caseStudy: 'Aivory Studio is an AI-powered photo editing platform designed for creators, photographers, and marketing professionals. The client needed a complete, production-ready UI for a complex product — one that felt modern, clean, and powerful without overwhelming the user.',
    time: '2024 - 25',
    role: 'UI Designer',
    featuredOn: 'Behance'
  }
];

export const TOOLS: string[] = [
  'Figma', 'Adobe XD', 'Sketch', 'Claude', 'ChatGPT', 'Grok', 'Photoshop', 'Illustrator', 'After Effects'
];
