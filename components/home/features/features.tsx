import React from 'react';
import { Box, chakra, SimpleGrid,useColorModeValue, Heading, VStack, Container, transition, Badge } from '@chakra-ui/react';
import FeatureCard from './featureCard';
import { MotionBox } from '@/components/animations/motion/motion';
import { fetchFeatures } from '../../../lib/fetchsSanity';
import {  PageSlideFade, container } from '../../animations/motion/transition';

type FeatureProps = {
  features: FeatureSection[] 
};

export default function Features  ({ features }: FeatureProps)  {
  const title = "Here is the Technologies Used!"
  return (
    <PageSlideFade>
      <VStack
      w={'100%'}
      pt={'4rem'}
      maxW={1000}
      justify={'center'} 
      align={'center'} >
        <MotionBox
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
          fontSize={{ base: '2xl', md: '4xl' }}
        >   <Box textAlign={{ base: 'center', md: 'left' }} cursor="pointer">
                {title}
                </Box>
        </MotionBox>
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