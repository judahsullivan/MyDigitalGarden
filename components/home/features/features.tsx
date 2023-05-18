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
    <Container mt={5} p={8} maxW={"3xl"} overflow={'hidden'}> 
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
          fontSize={{ base: '2xl', md: '3xl' }}
        >   <Box textAlign={{ base: 'center', md: 'left' }} cursor="pointer">
              <Box
              textDecoration={"underline"}
              >
                {title}
              </Box>
                <Box
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
    </Container>
  );
};


export default Features
