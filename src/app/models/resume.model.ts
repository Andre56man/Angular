/**
 * Modèle pour le CV/Resume
 */
export interface EducationItem {
  title: string;
  institution: string;
  period: string; // Ex: "2010 - 2016"
  description: string;
}

export interface ExperienceItem {
  title: string;
  company?: string;
  period: string; // Ex: "2010 - 2016"
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface ResumeSection {
  title: string;
  subtitle: string;
  description: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: Skill[];
}


