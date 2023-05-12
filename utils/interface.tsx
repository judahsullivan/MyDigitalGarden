import { AboutSection, FeatureSection, HomePage, Projects } from "@/types";



export interface HomeProps{
  home:  HomePage[];
  about: AboutSection[];
  features: FeatureSection[];
}

export interface ProjectsProps {
  projects: Projects[];
}