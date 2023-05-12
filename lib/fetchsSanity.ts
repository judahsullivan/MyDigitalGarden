import {
  AboutSection,
  FeatureSection,
  HomePage,
  Projects,
  TechStack
} from '@/types';

export const fetchHome = async () => {
  const res = await fetch(`http://localhost:3000/api/getHome/`);
  const data = await res.json();
  const home: HomePage[] = data.home; // Wrap the single home object in an array

  return home;
};

export const fetchAbout = async () => {
  const res = await fetch(`http://localhost:3000/api/getAbouts/`);
  const data = await res.json();
  const about: AboutSection[] = data.about; // wrap around the about section

  return about;
};

export const fetchFeatures = async () => {
  const res = await fetch(`http://localhost:3000/api/getFeatures/`);
  const data = await res.json();
  const features: FeatureSection[] = data.features; // wrap around the Features Card

  return features;
};

export const fetchTechStack = async () => {
  const res = await fetch(`http://localhost:3000/api/getTechStack/`);
  const data = await res.json();
  const techstacks: TechStack[] = data.techstacks;

  return techstacks;
};


export const fetchProjects = async () => {
  const res = await fetch(`http://localhost:3000/api/getProjects/`);
  const data = await res.json();
  const projects: Projects[] = data.projects;

  return projects;
};
