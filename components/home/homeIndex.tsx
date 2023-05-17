import {
  Flex,
  Container,
  Stack,
  Box,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react';
import { MotionBox, MotionFlex } from '../animations/motion/motion';
import { FiGithub, FiPhone, FiYoutube } from 'react-icons/fi';
import { SiDevdotto } from 'react-icons/si';
import { MotionMagicLink  } from '../shared/magic';
import { RoughNotation } from 'react-rough-notation';
import { fetchHome } from '@/lib/fetchsSanity';
import IconList from '../shared/iconlist';
import AvatarWithRipple from '../animations/motion/rippleAvatar';

const iconslinks = [
  {
    icon: FiGithub,
    link: 'https://github.com/judahsullivan',
    target: '_blank'
  },
  {
    icon: FiPhone,
    link: '/contacts'
  },
  {
    icon: FiYoutube,
    link: 'https://www.youtube.com/watch',
    target: '_blank'
  },
  {
    icon: SiDevdotto,
    link: '/blog'
  }
];
const ANIMATION_DURATION = 0.5;
const Home = ({home}: any) => {
  return (
    <MotionBox justify={'center'} minH={'70vh'} justifyContent={'center'} mt={{base: 0, md: '10rem'}}  maxW="7xl" mx={'auto'}>
           {home.map((home: any ) => (
          <Flex align={'center'}  key={home}  direction={['column', 'column', 'row']}>
            <Box m="auto">
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
            </Box>
            <MotionFlex
              position="relative"
              ml={['auto', 'auto', 14]}
              m={['auto', 'initial']}
              w={['90%', '85%', '80%']}
              maxW="800px"
              justify="center"
              direction="column"
            >
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
                <Box textAlign={{ base: 'center', md: 'left' }} cursor="pointer">
                  <Badge
                    rounded={'lg'}
                    fontSize={'2xl'}
                    color={useColorModeValue('#f0e7db', '#202023')}
                    bg={useColorModeValue('#202023', '#f0e7db')}
                  >
                    {home.title}
                  </Badge>
                </Box>
                <Stack
                  mt={'2rem'}
                  spacing={10}
                  direction={{ base: 'column', md: 'row' }}
                  textAlign={{ base: 'center', md: 'left' }}
                  as={'h2'}
                  letterSpacing={'widest'}
                  fontWeight={800}
                >
                  <RoughNotation
                    show={true}
                    type={'underline'}
                    animate={true}
                    animationDelay={1200}
                    color={useColorModeValue('#202023', '#f0e7db')}
                  >
                    {home.role}
                  </RoughNotation>
                  <RoughNotation
                    show={true}
                    type={'underline'}
                    animate={true}
                    animationDelay={1600}
                    padding={4}
                    color={useColorModeValue('#202023', '#f0e7db')}
                  >
                    {home.specialize}
                  </RoughNotation>
                </Stack>
                <Box
                  as="h2"
                  fontSize="2xl"
                  fontWeight="400"
                  textAlign={{ base: 'center', md: 'left' }}
                  mt="1rem"
                  color={useColorModeValue('#202023', '#f0e7db')}
                >
                  {home.description}
                </Box>
              </MotionBox>
            </MotionFlex>
          </Flex>
           ))} 
     
      <MotionBox
      display="flex"
      mt={3}
      ml={{base: '40px', md:'165px'}}
      w={'100%'}
      maxW={250}
      align={'center'}
      justify={'center'}
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1, 
        y: 0, 
        transition:{
          delay: 1
        }
      }}
      >
         {iconslinks.map((iconLink, index) => (
          <MotionMagicLink
            key={index}
            href={iconLink.link}
            mx={'auto'}
            target={iconLink.target}
            passHref
            whileHover={{scale: 1.11}}
          >
          <IconList icon={iconLink.icon} />
          </MotionMagicLink>
      ))}
      </MotionBox>

    </MotionBox>
  );
};

export default Home;

export async function getStaticProps(){
  const home = await fetchHome();


  return{
    props:{
      home
    }
  }
}