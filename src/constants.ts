import { Project, Tool } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Masala Design System',
    company: 'INNOVACCER',
    category: 'dashboard',
    description: 'Building the design system at Innovaccer from scratch to speed up design/development and ensure consistency.',
    image: 'https://picsum.photos/seed/masala/1200/800',
    tags: ['Design System', 'B2B', 'Healthcare'],
    caseStudy: 'The Masala Design System was born out of a need for speed and consistency. As Innovaccer grew, the design and engineering teams faced significant challenges in maintaining a unified look and feel across multiple product lines. We embarked on a journey to build a robust, scalable system that would serve as the single source of truth for all digital products.',
    time: '2020 - 22',
    role: 'Lead Designer, Product Owner, Content Writer',
    featuredOn: 'Zeroheight',
    challenge: 'Designers were spending 40% of their time recreating basic components, leading to inconsistencies and slower release cycles. Developers were often confused by varying design specs for the same functional elements.',
    solution: 'We developed a comprehensive library of atomic components, patterns, and guidelines. This included a custom icon set, a refined color palette optimized for accessibility, and a flexible grid system.',
    process: [
      {
        title: 'Audit & Research',
        description: 'We audited over 50 existing screens to identify common patterns and inconsistencies. This helped us prioritize which components to build first.',
        image: 'https://picsum.photos/seed/audit/800/600'
      },
      {
        title: 'Atomic Design',
        description: 'Using Brad Frost\'s atomic design methodology, we built everything from basic buttons (atoms) to complex data tables (organisms).',
        image: 'https://picsum.photos/seed/atomic/800/600'
      },
      {
        title: 'Documentation',
        description: 'We created detailed documentation for every component, including usage guidelines, accessibility notes, and code snippets.',
        image: 'https://picsum.photos/seed/docs/800/600'
      }
    ],
    results: [
      'Reduced design-to-development time by 60%',
      'Achieved 100% component reuse across 4 major product lines',
      'Improved accessibility compliance to WCAG 2.1 Level AA'
    ]
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
