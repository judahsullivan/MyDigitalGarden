import React from 'react';
import { Box,Container, SimpleGrid,Stack } from '@chakra-ui/react';
import FeatureCard from './featureCard';
import { MotionBox } from '@/components/animations/motion/motion';
import { fetchFeatures } from '../../../lib/fetchsSanity';
import {  container } from '../../animations/motion/transition';

export async function getStaticProps(){
  const features = await fetchFeatures()
  
  return{
    props:{
      features

    },
    revalidate: 3000 * 3000
    

  }
}
const Features  = ({ features }: any) => {


  const title = "Technologies💻"
  const subtitle = "These are the Technologies  are being used to power my portfolio!🔋 "
  return (
    <Box maxW={"4xl"}   overflow={'hidden'}> 
       <MotionBox
          align={"center"}
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
        >
        <Box 
        textAlign={'left' }>
             <Box
              fontSize="4xl"
              textDecoration={"underline"}
              >
                {title}
              </Box>
                <Box
                lineHeight={1.1}
                fontSize={{base: 'lg', md: 'lg'  }} 
                >
                {subtitle}
                </Box>
                </Box>
        </MotionBox>
            <MotionBox
          variants={container}
          whileInView={'visible'}
          initial={'hidden'}
          mt={7}
          >
        <SimpleGrid columns={[2, 2, 3]} spacing={2}>
           {features.map((feature: any,index:any) => ( 
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
    </Box>
  );
};


export default Features
