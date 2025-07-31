// Types untuk Portfolio
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  featured: boolean;
  challenges?: string;
  learnings?: string;
  role?: string;
  website?: string;
}

export type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'devops' | 'opensource';

export interface Skill {
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  icon?: string;
  description?: string;
}

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type SkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'other';

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  price?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  tags: string[];
  readTime: number;
  featured: boolean;
  coverImage?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export type Theme = 'light' | 'dark';

export interface AnimationVariants {
  hidden: object;
  visible: object;
  exit?: object;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}