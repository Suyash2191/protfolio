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
    image: '/images/cs-dashboard-full.png',
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
    title: 'AI-Powered Photo & Video Editor',
    company: 'CREATIVE TOOLS',
    category: 'website',
    description: 'A professional creative suite that uses AI to automate editing workflows — smart retouching, auto color grading, and one-click video cuts saving creators hours of manual work.',
    image: '/images/creative-editor.png',
    tags: ['AI', 'Creative Suite', 'Video Editor'],
    caseStudy: 'A professional creative suite that uses AI to automate editing workflows — smart retouching, auto color grading, and one-click video cuts saving creators hours of manual work.',
    time: '2024 - 25',
    role: 'Product Designer',
    featuredOn: 'Behance',
    challenge: 'Creative workflows are often bogged down by repetitive manual tasks like color grading and basic cutting.',
    solution: 'We implemented AI-driven automation that handles the heavy lifting, allowing creators to focus on storytelling.',
    process: [
      {
        title: 'Automation Engine',
        description: 'Developed an AI engine that analyzes video segments and suggests optimal cuts and color adjustments.',
        image: 'https://picsum.photos/seed/creative/800/600'
      }
    ],
    results: [
      'Reduced editing time by up to 60%',
      'Positive feedback from beta testers in the creative industry',
      'Fast-tracked workflow for social media content creators'
    ]
  }
];

export const TOOLS: string[] = [
  'Figma', 'Adobe XD', 'Sketch', 'Claude', 'ChatGPT', 'Grok', 'Photoshop', 'Illustrator', 'After Effects'
];
