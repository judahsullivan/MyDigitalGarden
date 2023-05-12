import {
  Flex,
  Container,
  Avatar,
  Stack,
  Box,
  useColorModeValue,
  Badge,
  Icon,
} from '@chakra-ui/react';
import { MotionBox, MotionFlex } from '../animations/motion/motion';
import { FiGithub, FiPhone, FiYoutube } from 'react-icons/fi';
import { SiDevdotto } from 'react-icons/si';
import { MagicLink  } from '../shared/magic';
import { RoughNotation } from 'react-rough-notation';

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
const Home = ({image, title, role, specialize, description}: any) => {
  return (
    <Container maxW="4xl" minH={'90vh'} mt={{base: '2rem', md: '5rem'}} justifyContent={'center'} mx={'auto'}>
          <Flex  direction={['column', 'column', 'row']}>
            <Box m="auto" mb={[16, 16, 'auto']}>
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
                rounded="full"
                shadow="lg"
              >
                <Avatar
                  size="2xl"
                  showBorder={true}
                  borderColor={useColorModeValue('#202023', '#f0e7db')}
                  src={image}
                />
              </MotionBox>
            </Box>
            <MotionFlex
              position="relative"
              ml={['auto', 'auto', 16]}
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
                    {title}
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
                    {role}
                  </RoughNotation>
                  <RoughNotation
                    show={true}
                    type={'underline'}
                    animate={true}
                    animationDelay={1600}
                    padding={4}
                    color={useColorModeValue('#202023', '#f0e7db')}
                  >
                    {specialize}
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
                  {description}
                </Box>
              </MotionBox>
            </MotionFlex>
          </Flex>
     
      <MotionFlex
      w={'100%'} 
      maxW={200}
      mx={'auto'}
      >
         {iconslinks.map((iconLink, index) => (
          <MagicLink
            key={index}
            href={iconLink.link}
            mx={'auto'}
            target={iconLink.target}
            passHref
          >
            <Icon mt={'2rem'} as={iconLink.icon} />
          </MagicLink>
      ))}
      </MotionFlex>

    </Container>
  );
};

export default Home;

