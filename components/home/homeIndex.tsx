import {
  Flex,
  Icon,
  VStack,
  Box,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';
import { MotionBox, MotionFlex } from '../animations/motion/motion';
import { FiGithub, FiPhone } from 'react-icons/fi';
import { SiLinkedin} from 'react-icons/si';
import { MagicLink  } from '../shared/magic';
import Features from './features/features';
import { fetchFeatures, fetchHome } from '@/lib/fetchsSanity';
import AvatarWithRipple from '../animations/motion/rippleAvatar';
import { ImBlog } from 'react-icons/im';



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
    icon: SiLinkedin,
    link: 'https://www.youtube.com/channel/UCQDPEaS3UUstGotV8JAEc9A',
    target: '_blank'
  },
  {
    icon: ImBlog,
    link: '/garden'
  },
];



export async function getStaticProps(){
  const home = await fetchHome();
  const features = await fetchFeatures();

  return{
    props:{
      home,
      features
    },
    revalidate: 3000 * 3000
  }
}
const ANIMATION_DURATION = 0.5;



const Home = ({home,features}: any) => {
const bg=useColorModeValue('#202023', '#f0e7db')
  return (
    <Container textAlign={{base: 'left', md: 'left'}} maxW="3xl" minH={{base: '100vh', md: 'lg'}} mx={'auto'}>
           <Box h={"90vh"}>
           {home.map((home: any,index: any ) => (
          <Flex 
          key={index} 
          justify={'space-evenly'}  
          direction={['column', 'column', 'row']}
          >
            <MotionFlex
              gap={0}
              direction="column"
              textAlign={"left"}
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
                <Box
                   textDecoration={'underline'}
                    fontSize={'4xl'}
                     >
                     {home.title}
                     </Box> 
                  <Flex
                    align="center"
                    justify={"space-between"}
                   cursor="pointer"
                   direction={{base: 'column', md: 'row'}}
                    >
                   <VStack w={'100%'} spacing={5}>
                   

                   <Box width={"100%"} textAlign={'left'}>
                                      <Box mt={2}>
                     <Box
                     letterSpacing={4}
                     fontSize="2xl"
                     >
                     {home.specialize}
                     </Box>
                     <Box
                     mt={2}
                     letterSpacing={4}
                      fontSize="2xl"
                     >
                     {home.role}

                     </Box>
                     </Box>
                      </Box>
                   </VStack> 

               <Flex 
               justify={"center"}
               w={"100%"}
               >
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
                 <Box
                    as="h2"
                    fontSize="2xl"
                    fontWeight="400"
                    textAlign={'left'}
                    color={bg}
                  >
                    {home.description}
                  </Box>
                  
      <MotionFlex
        mt={10}
        gap={6}
        align={'center'}
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
           <MagicLink href={iconLink.link} target={iconLink.target} key={index}>
           <MotionBox
            whileHover={{scale: 1.12}}
           >
            <Icon as={iconLink.icon} />
           </MotionBox>
           </MagicLink>

        ))}
        </MotionFlex>
                </MotionBox>
              </MotionFlex>
               </Flex>
             ))} 
             
           </Box>
           <Features  features={features} />
        </Container>
  );
};

export default Home;

