import {
  Flex,
  Text,
  Heading,
  Icon,
  VStack,
  Box,
  useColorModeValue,
  Container,
  Stack
} from '@chakra-ui/react';
import { FiGithub, FiPhone } from 'react-icons/fi';
import { SiLinkedin, SiYoutube } from 'react-icons/si';
import { ImBlog } from 'react-icons/im';
import { MotionFlex, MotionBox } from '@/components/animations/motion/motion';
import AvatarWithRipple from '@/components/animations/motion/rippleAvatar';
import { MagicLink } from '@/components/shared/magic';
import { fetchHome } from '@/lib/fetchsSanity';

const iconslinks = [
  {
    icon: FiGithub,
    link: 'https://github.com/judahsullivan',
    target: '_blank'
  },
  {
    icon: FiPhone,
    link: '/contact'
  },
  {
    icon: SiYoutube,
    link: 'https://www.youtube.com/@devjbyrd',
    target: '_blank'
  },
  {
    icon: SiLinkedin,
    link: 'https://www.linkedin.com/in/judahsullivan/',
    target: '_blank'
  },
  {
    icon: ImBlog,
    link: '/garden'
  }
];

export async function getStaticProps() {
  const home = await fetchHome();

  return {
    props: {
      home
    },
    revalidate: 3000 * 3000
  };
}
const ANIMATION_DURATION = 0.5;

const Home = ({ home }: any) => {
  const bg = useColorModeValue('#202023', '#f0e7db');
  return (
    <Container maxW="3xl">
      {home.map((home: any, index: any) => (
        <Flex key={index} justify={'space-between'} direction={['column', 'column', 'row']}>
          <MotionFlex direction="column" textAlign={'left'}>
            <MotionBox
              initial={{
                opacity: 0,
                x: 100
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: ANIMATION_DURATION
                }
              }}
            >
              <Flex
                align="center"
                justify={'space-between'}
                direction={{ base: 'column', md: 'row' }}
              >
                <VStack mb={2} align={'start'} w={'100%'} spacing={10}>
                  <Heading letterSpacing={4} fontSize="2xl">
                    {home.title}
                  </Heading>
                  <Heading w={'100%'} fontSize={'2xl'}>
                    {home.role}
                  </Heading>
                </VStack>

                <Flex justify={'center'} h={100} align={'center'}>
                  <MotionBox
                    initial={{
                      opacity: 0,
                      x: -100
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: ANIMATION_DURATION
                      }
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <AvatarWithRipple image={home.image} />
                  </MotionBox>
                </Flex>
              </Flex>
              <Box as="h2" fontSize="md" mt={4} fontWeight="400" textAlign={'left'} color={bg}>
                {home.specialize}
              </Box>
              <Box as="h2" fontSize="md" mt={4} fontWeight="400" textAlign={'left'} color={bg}>
                {home.description}
              </Box>
              <MotionFlex
                mt={5}
                gap={6}
                align={'center'}
                initial={{
                  opacity: 0,
                  y: 50
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 1
                  }
                }}
              >
                {iconslinks.map((iconLink, index) => (
                  <MagicLink href={iconLink.link} target={iconLink.target} key={index}>
                    <MotionBox whileHover={{ scale: 1.12 }}>
                      <Icon as={iconLink.icon} />
                    </MotionBox>
                  </MagicLink>
                ))}
              </MotionFlex>
            </MotionBox>
          </MotionFlex>
        </Flex>
      ))}
    </Container>
  );
};

export default Home;
