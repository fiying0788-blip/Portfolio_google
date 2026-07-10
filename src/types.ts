export interface Project {
  id: string;
  name: string;
  category: string;
  status: '已交付' | '營運中' | '進行中';
  timeline: string;
  role: string;
  responsibilities: string[];
  keyResults: string[];
  deliverables: string[];
  caseStudy: {
    problem: string;
    analysis: string;
    planning: string;
    execution: string;
    results: string;
  };
}

export interface Milestone {
  id: string;
  period: string;
  title: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
    relatedProjects: string[];
  }[];
}

export interface SideProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  architecture: string[];
  lessons: string[];
  roadmap: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
