export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  category: string;
  technologies: string[];
  features?: string[];
  github: string | null;
  demo: string | null;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}