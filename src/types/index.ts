export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'design' | 'other';
}
export interface SkillDetails {
  subSkill: string;
  proficiency: number; // 0-100
  description?: string;
  icon?: string;
}
export interface Skill {
  name: string;
  icon?: string;
  description?: string;
  proficiency: number; // 0-100
  category: 'frontend' | 'backend' | 'design' | 'other';
  subskills?: SkillDetails[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  title: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}
 export interface Metadata {
   title: string;
   description: string;
   url: string;
   image?: string;
   extractHtml?: string;
 };