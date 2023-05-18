import { fetchProjects } from '@/lib/fetchsSanity';
import React from 'react';
import { ProjectsProps } from '@/utils/interface';
import PageLayout from '@/components/layouts/pageLayout';
import { Stack, Box } from '@chakra-ui/react';
import ProjectIndex from '@/components/projects/projectIndex';

export async function getStaticProps(){
  const projects = await fetchProjects();
  
  return{
    props: {
      projects
    },
    revalidate:  3000
  }
} 
export default function Projects  ({ projects }: ProjectsProps)  {
  const title = " Projects⚒️"
  const subtitle = "Here is a list of projects I have built during my Journey as a developer!👷🏾‍♂️ I Strive to make  beautiful and functional apps with the most up-to-date technologies💻!"
  return (
    <PageLayout title={title}>
     <Stack w={'100%'} spacing={4} textAlign={'start'}>
    <Box fontSize={'3xl'} textDecoration={'underline'} fontWeight={700}>
    {title}
    </Box>
    <Box>
      {subtitle}
    </Box>
    </Stack>
    <ProjectIndex projects={projects}  />
    </PageLayout>
  );
};


