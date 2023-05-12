import { GetStaticProps } from 'next';
import { fetchProjects } from '@/lib/fetchsSanity';
import {   VStack  } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { PageSlideFade } from '@/components/animations/motion/transition';
import {
  ProjectLayoutMed,
  LeftProjectLayoutLarge,
  RightProjectLayoutLarge
} from '@/components/projects/projectLayout';
import { ProjectsProps } from '@/utils/interface';


const ProjectsIndex = ({ projects }: ProjectsProps) => {
  return (
    <Fragment>
      <PageSlideFade>
        <VStack align="start"></VStack>
        <VStack spacing={8} mt={['7', '7', '0']}>
          {projects &&
            projects.map((project, index) => (
              <Fragment key={index}>
                <ProjectLayoutMed project={project} />
                {index % 2 === 0 ? (
                  <LeftProjectLayoutLarge project={project} />
                ) : (
                  <RightProjectLayoutLarge project={project} />
                )}
              </Fragment>
            ))}
        </VStack>
      </PageSlideFade>
    </Fragment>
  );
};

export default ProjectsIndex;

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const projects = await fetchProjects();

  return {
    props: {
      projects
    },
    revalidate: 3600
  };
};
