import { useState } from 'react';
import { IconType } from 'react-icons';
import { MdDesignServices, MdDeveloperMode, MdLanguage } from 'react-icons/md';
import {
  Flex,
  VStack,
  Icon,
  TabPanel,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  SimpleGrid,
  useColorModeValue,
  Heading,
  Text,
  Container
} from '@chakra-ui/react';
import SkillCard from './stackCard';
import { FaToolbox } from 'react-icons/fa';
import { fetchTechStack } from '@/lib/fetchsSanity';
import { PageSlideFade, container } from '@/components/animations/motion/transition';
import { MotionBox } from '@/components/animations/motion/motion';

export async function getStaticProps() {
  const techstacks = await fetchTechStack();

  return {
    props: {
      techstacks
    },
    revalidate: 3600
  };
}

interface FilterType {
  type: string;
  icon: IconType;
}

const filterTypes: FilterType[] = [
  { type: 'Framework', icon: MdDeveloperMode },
  { type: 'Design', icon: MdDesignServices },
  { type: 'Language', icon: MdLanguage },
  { type: 'Development', icon: FaToolbox }
];

export default function Stack({ techstacks }: any) {
  const color = useColorModeValue('#f0e7db', '#202023');
  const bg = useColorModeValue('#202023', '#f0e7db');

  const [activeType, setActiveType] = useState(filterTypes[0].type);
  const title = 'TechStack⚙️';
  const subtitle =
    'Here are all the technologies I have learned on my Journey to Full Stack!📚 I Make it my goal to learn and gain as much knowledge as possible!🧠';

  return (
    <Container maxW={'3xl'} mx={'auto'}>
      <VStack w={'100%'} display="column" gap={4} textAlign={'left'}>
        <Heading fontSize={'2xl'} textDecoration={'underline'} fontWeight={700}>
          {title}
        </Heading>
        <Text fontSize={'sm'}>{subtitle}</Text>
      </VStack>
      <Tabs w={'100%'} align="start">
        <TabList display={'flex'} flexDirection={['column', 'row']} w={'100%'}>
          {filterTypes.map(({ type, icon: IconComponent }) => (
              <Tab
              key={type}
              onClick={() => setActiveType(type)}
              color={bg}
              fontWeight={activeType === type ? 'bold' : 'normal'}
            >
              <Icon as={IconComponent} boxSize={6} mr={2} />
              {type}
            </Tab>
          ))}
        </TabList>
        <TabPanels mt={5}>
          {filterTypes.map(({ type }) => (
            <TabPanel key={type} p={0}>
              <MotionBox
                variants={container}
                initial={'hidden'}
                whileInView={'visible'}
                w={'full'}
                mx={'auto'}
              >
                <SimpleGrid columns={[1, 2, 3]} spacing={2}>
                  {techstacks
                    .filter((tech: any) => (activeType === type ? tech.type === activeType : true))
                    .map((techstack: any, index: any) => (
                      <SkillCard
                        key={index}
                        title={techstack.title}
                        description={techstack.description}
                        link={techstack.link}
                        image={techstack.image}
                      />
                    ))}
                </SimpleGrid>
              </MotionBox>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
}

