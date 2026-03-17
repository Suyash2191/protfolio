export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  image: string;
  tags: string[];
  caseStudy: string;
  time: string;
  role: string;
  featuredOn?: string;
  category: 'mobile' | 'website' | 'dashboard';
  challenge?: string;
  solution?: string;
  process?: {
    title: string;
    description: string;
    image?: string;
  }[];
  results?: string[];
}

export interface Tool {
  name: string;
  icon: string;
}
