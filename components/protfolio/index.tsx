import { fetchFeatures, fetchHome, fetchProjects, fetchTechStack } from '@/lib/fetchsSanity';
import { HomeProps } from '@/utils/interface';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import HomeIndex from './home/homeIndex';
import Stack from './stack/stack';
import Features from './features/features';
import ProjectIndex from './projects/projectIndex';

export async function getStaticProps() {
  const home = await fetchHome();
  const projects = await fetchProjects();
  const techstacks = await fetchTechStack();
  const features = await fetchFeatures();

  return {
    props: {
      home,
      projects,
      techstacks,
      features
    }
  };
}

export default function PortfolioIndex({ home, features, projects, techstacks }: HomeProps) {
  return (
    <Box>
      <Tabs isLazy>
        <TabList>
          <Tab>Welcome</Tab>
          <Tab>Features</Tab>
          <Tab>Projects</Tab>
          <Tab>Tech Stack</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HomeIndex home={home} />
          </TabPanel>
          <TabPanel>
            <Features features={features} />
          </TabPanel>
          <TabPanel>
            <ProjectIndex projects={projects} />
          </TabPanel>
          <TabPanel>
            <Stack techstacks={...techstacks} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
