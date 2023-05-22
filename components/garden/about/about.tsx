import { Box, Container, Badge, Image, useColorModeValue, Stack } from '@chakra-ui/react';
import React from 'react';
import { MotionBox, MotionFlex, MotionText } from '../../animations/motion/motion';
import { fetchAbout } from '@/lib/fetchsSanity';

export async function getStaticProps() {
  const about = await fetchAbout();

  return {
    props: {
      about
    },
    revalidate: 3000 * 3000
  };
}

export default function About({ about }: any) {
  const color = useColorModeValue('#202023', '#f0e7db');
  const bg = useColorModeValue('#202023', '#f0e7db');
  const title = 'Heres a little about me!';

  return (
    <Container maxW={'5xl'}>
      <Box
        lineHeight={1.1}
        textTransform={'capitalize'}
        fontWeight={600}
        fontSize={'2xl'}
        width={'100%'}
      >
        {title}
      </Box>
      {about.map((about: any, index: any) => (
        <Stack
          key={index}
          align={'center'}
          spacing={{ base: 3, md: 10 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <MotionText
              initial={{
                opacity: 0,
                x: -150
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                  delay: 0.5
                }
              }}
              fontWeight={500}
              height={{ base: 'auto', md: '257px' }}
              color={color}
              wordBreak={'keep-all'}
              textAlign={'left'}
            >
              {about.description}
            </MotionText>
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}></Stack>
          </Stack>
          <MotionFlex
            initial={{
              opacity: 0,
              x: 150
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                delay: 1
              }
            }}
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
            >
              <Image
                alt="about image"
                objectFit={'cover'}
                bg={bg}
                padding={4}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={about.image}
              />
            </Box>
          </MotionFlex>
        </Stack>
      ))}
    </Container>
  );
}
