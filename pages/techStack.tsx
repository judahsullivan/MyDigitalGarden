import {
  Box,
  Flex,
} from '@chakra-ui/react';
import PageLayout from '@/components/layouts/pageLayout';
import { fetchTechStack } from '@/lib/fetchsSanity';
import Stack from '@/components/Stack/stack';

interface TechStackProps {
  techstacks: TechStack[];
}

export async function getStaticProps(){
  const techstacks = await fetchTechStack();

  return {
    props: {
      techstacks
    },
    revalidate: 3600 * 3600
  };
}
export default function  TechStack ({ techstacks }: TechStackProps){
 const title = 'TechStack⚙️' 
 const subtitle = "Here are all the technologies I have learned on my Journey to Full Stack!📚 I Make it my goal to learn and gain as much knowledge as possible!🧠 "
  return (
    <PageLayout title={'Tech-Stack⚙️'}>
    <Flex w={'100%'} display='column' gap={4} textAlign={'left'}>
    <Box fontSize={'3xl'} textDecoration={'underline'} fontWeight={700}>
    {title}
    </Box>
    <Box>
      {subtitle}
    </Box>
    </Flex>
    <Stack techstacks={techstacks} />
    </PageLayout>
  );
};



