import React from 'react';
import { Box, chakra, SimpleGrid, Heading, VStack, Container, transition } from '@chakra-ui/react';
import FeatureCard from '../shared/featureCard';
import { FeatureSection } from '@/types';
import { MotionBox,  MotionText } from '@/components/animations/motion/motion';
import { fetchFeatures } from '../../lib/fetchsSanity';
type FeatureProps = {
  features: FeatureSection[] | null;
};
const Features = ({ features }: FeatureProps) => {
  return (
    <Box maxW={'4xl'}>
      <VStack mt={'4rem'} align={'center'}>
        <MotionText
          w={'100%'}
          m={0}
          initial={{
            opacity: 0,
            y: 100
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1
            }
          }}
          fontSize={{ base: '2xl', md: '4xl' }}
        >
          Heres the
          <chakra.span p={2}>Technologies</chakra.span>
          used!
        </MotionText>
        <MotionBox
          initial={{
            opacity: 0,
            y: 150
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 1
            }
          }}
        >
          <SimpleGrid pt={4} columns={[2, 3]} spacing={2}>
            {features &&
              features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  color={feature.color}
                  title={feature.title}
                  content={feature.content}
                  label={feature.label}
                  href={feature.href}
                  image={feature.image}
                />
              ))}
          </SimpleGrid>
        </MotionBox>
      </VStack>
    </Box>
  );
};

export default Features;


export async function getStaticProps(){
  const features = await fetchFeatures()
  
  return{
    props:{
      features
    }
  }
}