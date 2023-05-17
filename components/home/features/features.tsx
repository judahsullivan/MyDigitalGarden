import React from 'react';
import { Box, chakra, SimpleGrid, Heading, VStack, Container, transition } from '@chakra-ui/react';
import FeatureCard from './featureCard';
import { MotionBox,  MotionText } from '@/components/animations/motion/motion';
import { fetchFeatures } from '../../../lib/fetchsSanity';
import {  PageSlideFade, container } from '../../animations/motion/transition';

type FeatureProps = {
  features: FeatureSection[] 
};

export default function Features  ({ features }: FeatureProps)  {
  return (
    <PageSlideFade>
      <VStack
      maxW={900}
       w={'100%'}
      justify={'center'} align={'center'} >
        <MotionText
          initial={{
            opacity: 0,
            y: 100
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: .5
            }
          }}
          fontSize={{ base: 'xl', md: '4xl' }}
        >
          Heres a list of
          <chakra.span p={2}>Technologies</chakra.span>
          used here!
        </MotionText>
            <MotionBox
          variants={container}
          whileInView={'visible'}
          initial={'hidden'}
          >
        <SimpleGrid columns={[2, 3]} spacing={2}>
           {features.map((feature,index) => ( 
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
    </PageSlideFade>
  );
};

export async function getStaticProps(){
  const features = await fetchFeatures()
  
  return{
    props:{
      features
    }
  }
}