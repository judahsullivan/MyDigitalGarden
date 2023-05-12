import { useState } from 'react';
import { GrTechnology } from 'react-icons/gr';
import { MdDesignServices, MdDeveloperMode, MdLanguage } from 'react-icons/md';
import {
  Container,
  Text,
  TabPanel,
  Heading,
  VStack,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  Box,
  HStack,
  Icon,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';
import SkillCard from '@/components/stack/stackCard';
import { TechStack } from '@/types';
import PageLayout from '@/components/layouts/pageLayout';
import { FaToolbox } from 'react-icons/fa';
import { fetchTechStack } from '@/lib/fetchsSanity';

interface TechStackProps {
  techstacks: TechStack[];
}

const TechStack = ({ techstacks }: TechStackProps) => {
  const [activeType, setActiveType] = useState('All');

  let types = ['All'];
  if (techstacks) {
    types = [...new Set([...types, ...techstacks.map((tech) => tech.type)])];
  }

  return (
    <PageLayout title={'Tech-Stack'}>
      <Container maxW={'5xl'}>
        <VStack>
          <Heading>TechStack</Heading>
          <Text>Here here is a list of technologies i love to use</Text>
        </VStack>
        <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="100%">
          <TabList display="flex" flexWrap="wrap">
            {types.map((type) => (
              <Tab
                key={type}
                    color={useColorModeValue('#f0e7db', '#202023')}
                    bg={useColorModeValue('#202023', '#f0e7db')}
                _selected={{
                    color: useColorModeValue( '#202023','#f0e7db'),
                    bg : useColorModeValue('#f0e7db','#202023'),
                }}
                mr={2}
                mt={2}
                onClick={() => setActiveType(type)}
              >
                <HStack spacing={1}>
                  <Icon
                    as={
                      type === 'All'
                        ? GrTechnology
                        : type === 'Framework'
                        ? MdDeveloperMode
                        : type === 'Design'
                        ? MdDesignServices
                        : type === 'Language'
                        ? MdLanguage
                        : type === 'Developement'
                        ? FaToolbox
                        : FaToolbox
                    }
                  />
                  <Text>{type}</Text>
                </HStack>
              </Tab>
            ))}
          </TabList>
          <TabPanels minHeight={'45vh'}>
            {types &&
              types.map((type) => (
                <TabPanel key={type}>
                  <Box>
                    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                      {techstacks
                        .filter((tech) => activeType === 'All' || tech.type === type)
                        .map((techstack, index) => (
                          <SkillCard
                            key={index}
                            title={techstack.title}
                            description={techstack.description}
                            link={techstack.link}
                            image={techstack.image}
                          />
                        ))}
                    </SimpleGrid>
                  </Box>
                </TabPanel>
              ))}
          </TabPanels>
        </Tabs>
      </Container>
    </PageLayout>
  );
};

export default TechStack;

export async function getStaticProps(){
  const techstacks = await fetchTechStack();

  return {
    props: {
      techstacks
    },
    revalidate: 3600
  };
};
