
interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface HomePage extends SanityBody {
  id: Key | null | undefined;
  _type: 'homepage';
  title: string;
  description: string;
  role: string;
  specialize: string;
  image: string;
}

export interface AboutSection extends SanityBody {
  id: Key | null | undefined;
  _type: 'aboutsection';
  title: string;
  description: string;
  image: string;
}

export interface FeatureSection extends SanityBody {
  [x: string]: Key | null | undefined;
  _type: 'features';
  title: string;
  content: string;
  label: string;
  href: string;
  image: string;
  color: string;
}

export interface TechStack extends SanityBody {
  _type: 'techstack';
  title: string;
  description: string;
  link: string;
  type: string;
  image: string;
}

export interface Projects extends SanityBody {
  _type: 'project';
  id: string;
  title: string;
  description: string;
  image: string[];
  techStack: string[];
  site: string;
}

export interface GitHubRepository {
  [x: string]: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  id: number;
  name: string;
  description: string;
  uerProfile: string;
  language: string;
  isPublic: boolean;
  isTemplate: boolean;
  language?: string;
  stars: number;
}

