import { fetchProjects } from '@/lib/fetchsSanity';
import { VStack, Container, Box, Heading, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import { ProjectLayoutMed, LeftProjectLayoutLarge, RightProjectLayoutLarge } from './projectLayout';

export async function getStaticProps() {
  const projects = await fetchProjects();

  return {
    props: {
      projects
    },
    revalidate: 3000
  };
}
const title = ' Projects⚒️';
const subtitle =
  'Here is a list of projects I have built during my Journey as a developer!👷🏾‍♂️ I Strive to make  beautiful and functional apps with the most up-to-date technologies💻!';
export default function ProjectIndex({ projects }: any) {
  return (
    <Container maxW={'5xl'}>
      <VStack align={'left'} spacing={0}>
        <Heading fontSize={'2xl'} textDecoration={'underline'}>
          {title}
        </Heading>
        <Text fontSize={'sm'}>{subtitle}</Text>
        <VStack>
          {projects.map((project: any, index: any) => (
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
      </VStack>
    </Container>
  );
}
