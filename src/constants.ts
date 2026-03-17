import { Project, Tool } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Balance Nutrition Product Design',
    company: 'BALANCE NUTRITION',
    category: 'mobile',
    description: 'A complete product design journey: mobile app UX, campaign website, and the introduction of Clara AI an intelligent nutrition, lifestyle & diet companion built for real people.',
    image: '/images/img30.png',
    tags: ['Mobile UX', 'Campaign Website', 'AI Companion'],
    caseStudy: 'A complete product design journey: mobile app UX, campaign website, and the introduction of Clara AI an intelligent nutrition, lifestyle & diet companion built for real people.',
    time: '2025 to present',
    role: 'Senior and Lead Product Designer\nFeature Clara Ai',
    externalLink: 'https://suyashshirsat521.wixstudio.com/my-site/blank-3'
  },
  {
    id: '2',
    title: 'AI-Powered Health Assistant',
    company: 'HEALTH AI',
    category: 'mobile',
    description: 'A mobile application that uses AI to track and predict health trends based on user habits.',
    image: 'https://picsum.photos/seed/health/1200/800',
    tags: ['AI', 'Mobile App', 'HealthTech'],
    caseStudy: 'The AI-Powered Health Assistant was designed to bridge the gap between raw health data and actionable insights. In an era of wearable technology, users are often overwhelmed by numbers but lack understanding of what they mean. Our goal was to create an intuitive mobile experience that translates complex biometrics into simple, predictive health trends.',
    time: '2022 - 23',
    role: 'Senior Product Designer',
    featuredOn: 'Behance',
    challenge: 'Users felt "data fatigue" from existing health apps that provided lists of numbers without context. There was a significant drop-off in user engagement after the first two weeks of use.',
    solution: 'We implemented a "Health Score" algorithm and a conversational AI interface. Instead of just showing heart rate, the app explains how it relates to recent sleep patterns and stress levels, providing personalized recommendations.',
    process: [
      {
        title: 'User Personas',
        description: 'We identified three primary personas: the "Data Enthusiast", the "Health Conscious Parent", and the "Chronic Condition Manager". Each had unique needs for data visualization.',
        image: 'https://picsum.photos/seed/persona/800/600'
      },
      {
        title: 'Predictive Modeling',
        description: 'Working closely with data scientists, we designed a visualization system that shows not just current health, but predicted trends for the next 7 days.',
        image: 'https://picsum.photos/seed/predict/800/600'
      },
      {
        title: 'Conversational UI',
        description: 'We developed a natural language interface that allows users to ask questions like "Why am I feeling tired today?" and receive data-backed answers.',
        image: 'https://picsum.photos/seed/chat/800/600'
      }
    ],
    results: [
      'Increased 30-day retention rate by 45%',
      'Average daily active time increased from 2 to 8 minutes',
      '4.8/5 star rating on the App Store with 10k+ reviews'
    ]
  },
  {
    id: '3',
    title: 'Modern E-commerce Platform',
    company: 'LUXE FASHION',
    category: 'website',
    description: 'A high-converting e-commerce website designed for a luxury fashion brand.',
    image: 'https://picsum.photos/seed/fashion/1200/800',
    tags: ['E-commerce', 'Web Design', 'UX Research'],
    caseStudy: 'For Luxe Fashion, we didn\'t just want to build a store; we wanted to build a digital flagship experience. The project focused on high-performance web architecture combined with a "luxury-first" design language. We prioritized seamless navigation, high-resolution visual storytelling, and a checkout process that feels as premium as the products themselves.',
    time: '2023 - 24',
    role: 'UX/UI Designer',
    featuredOn: 'Dribbble',
    challenge: 'The existing site had a high bounce rate on product pages and a complex checkout flow that led to a 70% cart abandonment rate. The brand\'s premium identity was lost in a cluttered, generic layout.',
    solution: 'We simplified the user journey by implementing a "minimalist-luxury" aesthetic. This included a persistent side-cart, one-click checkout for returning users, and immersive video lookbooks that integrate directly with product listings.',
    process: [
      {
        title: 'Visual Identity',
        description: 'We redefined the digital brand guidelines, selecting a high-contrast typography system and a layout that allows product photography to breathe.',
        image: 'https://picsum.photos/seed/luxury/800/600'
      },
      {
        title: 'Checkout Optimization',
        description: 'Through A/B testing, we reduced the checkout steps from five to two, significantly reducing friction and cognitive load.',
        image: 'https://picsum.photos/seed/checkout/800/600'
      },
      {
        title: 'Mobile-First Commerce',
        description: 'Since 80% of traffic was mobile, we designed a thumb-friendly navigation system and optimized all assets for lightning-fast loading on 4G/5G networks.',
        image: 'https://picsum.photos/seed/mobile/800/600'
      }
    ],
    results: [
      'Cart abandonment rate decreased by 35%',
      'Mobile conversion rate increased by 50%',
      'Average Order Value (AOV) grew by 22% within 3 months'
    ]
  }
];

export const TOOLS: string[] = [
  'Figma', 'Adobe XD', 'Sketch', 'Claude', 'ChatGPT', 'Grok', 'Photoshop', 'Illustrator', 'After Effects'
];
