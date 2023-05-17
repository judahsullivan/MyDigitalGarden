import { fetchProjects } from '@/lib/fetchsSanity';
import { VStack } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { PageSlideFade } from '@/components/animations/motion/transition';
import {
  ProjectLayoutMed,
  LeftProjectLayoutLarge,
  RightProjectLayoutLarge
} from '@/components/projects/projectLayout';
import { ProjectsProps } from '@/utils/interface';
import PageLayout from '@/components/layouts/pageLayout';
import ProjectIndex from '@/components/projects/projectIndex';

export default function Projects  ({ projects }: ProjectsProps)  {
  return (
    <PageLayout title={'Projects'}>
    <ProjectIndex projects={projects}  />
    </PageLayout>
  );
};


export async function getStaticProps(){
  const projects = await fetchProjects();
  
  return{
    props: {
      projects
    }
  }
} 
