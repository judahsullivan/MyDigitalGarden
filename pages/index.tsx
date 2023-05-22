import PageLayout from '@/components/layouts/pageLayout';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import PortfolioIndex from '@/components/protfolio';
import { fetchFeatures, fetchHome, fetchProjects, fetchTechStack } from '@/lib/fetchsSanity';
import { HomeProps } from '@/utils/interface';

export async function getStaticProps() {
  const home = await fetchHome();
  const features = await fetchFeatures();
  const projects = await fetchProjects();
  const techstacks = await fetchTechStack();

  return {
    props: {
      home,
      features,
      projects,
      techstacks
    }
  };
}

export default function MainScreen({ home, features, projects, techstacks }: HomeProps) {
  const title = ' My Portfolio!✨';
  const description =
    'This is where I display my projects💻, achievements🏆 and professional experience!💼';

  return (
    <PageLayout title={title}>
      <VStack align={'left'}>
        <Heading fontSize={'3xl'} textDecoration={'underline'} fontWeight={700}>
          {title}
        </Heading>
        <Text fontSize={'sm'}>{description}</Text>
      </VStack>

      <PortfolioIndex home={home} features={features} projects={projects} techstacks={techstacks} />
    </PageLayout>
  );
}
