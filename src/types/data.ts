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
  challenges?: string[];
  learnings?: string;
  role?: string;
  website?: string;
  features?: string[];
  status?: string;
  year?: string;
  duration?: string;
  teamSize?: string;
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
  type?: string;
  achievements?: string[];
  current?: boolean;
  duration?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
  relevantCourses?: string[];
  achievements?: string[];
  type?: string;
  year?: string;
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
  longDescription?: string;
  features: string[];
  icon: string;
  price?: string;
  pricing?: {
    type: 'fixed' | 'hourly' | 'range';
    amount?: number;
    min?: number;
    max?: number;
    notes?: string;
  };
  deliveryTime?: string;
  technologies?: string[];
  process?: {
    title: string;
    description: string;
    duration?: string;
  }[];
  clientSatisfaction?: number;
  rating?: number;
  category?: string;
  projectsCompleted?: number;
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

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}