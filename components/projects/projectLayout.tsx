import React from 'react';
import {
  useColorModeValue,
  Flex,
  Box,
  AspectRatio,
  Image,
  Skeleton,
  Badge,
  Link,
  Icon,
} from '@chakra-ui/react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { AiOutlineGithub } from 'react-icons/ai';
import { MotionBox, MotionFlex, MotionText } from '../animations/motion/motion';
import { fadeInUp, stagger } from '../animations/motion/transition';
import { MagicLink } from '../shared/magic';
import { BsFillProjectorFill } from 'react-icons/bs';

const ProjectLayoutMed = ({ project }: any) => {
  
const dark = useColorModeValue('#f0e7db', '#202023')
const light = useColorModeValue('#202023', '#f0e7db')

  return (
    <Flex
      display={['flex', 'flex', 'none']}
      rounded="xl"
      borderWidth="1px"
      borderColor={useColorModeValue('gray.600', 'gray.700')}
      w="full"
      textAlign="left"
      align="start"
      shadow="md"
      _hover={{ border: 'md', shadow: 'lg' }}
      overflow="hidden"
      position="relative"
      bgImage={`url(${project.coverimage.asset.url})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box
        width={'full'}
        height={'full'}
        position="absolute"
        bg={light}
        opacity={useColorModeValue('0.80', '.5')}
      ></Box>
      <MotionBox
        initial="initial"
        animate="animate"
        width={['full', '70%']}
        rounded="lg"
        my="auto"
        px="6"
        py="3"
        position="relative"
        zIndex="10"
      >
        <MotionBox variants={stagger}>
          <MotionText
            variants={fadeInUp}
            fontSize="2xl"
            fontWeight="bold"
            rounded={'xl'}
            bg={light}
            color={dark}
            textAlign={'center'}
            m={2}
            whileHover={{ scaleY: -.5 }}
          >
            {project.title}
          </MotionText>
          <Box width="full">
            <MotionText
              p={2}
              variants={fadeInUp}
              bg={dark}
              rounded="lg"
              fontWeight={'800'}
              align="left"
              fontSize="md"
            >
              {project.description}
            </MotionText>
            <MotionBox
              variants={fadeInUp}
              display="flex"
              fontSize="xs"
              justifyContent="center"
              mt="1"
              color={dark}
            >
              {project.techStack.map((s: any, index: any) => (
                <Badge
                  color={dark}
                  bg={light}
                  key={index}
                  fontSize={'md'}
                  letterSpacing={'tighter'}
                  ml={2}
                >
                  {s}
                </Badge>
              ))}
            </MotionBox>
          </Box>
          <MotionFlex gap={5} variants={fadeInUp}  mt={1} justify={'start'} >
            <Link target='_blank' color={dark} href={project.gitHub} isExternal>
              <Icon rounded="full" aria-label="medal" as={AiOutlineGithub} />
            </Link>
            <Link
              color={dark}
              ml={2}
              href={project.site}
             target='_blank' 
            >
              <Icon rounded="full" aria-label="medal" as={HiOutlineExternalLink} />
            </Link>
            <MagicLink href={`/projects/${project.slug.current}`} color={useColorModeValue('#f0e7db', '#202023')} >
              <Icon rounded="full" aria-label="project" as={BsFillProjectorFill} />
            </MagicLink>
          </MotionFlex>
        </MotionBox>
      </MotionBox>
    </Flex>
  );
};
const LeftProjectLayoutLarge = ({ project }: any) => {
const dark = useColorModeValue('#f0e7db', '#202023')
const light = useColorModeValue('#202023', '#f0e7db')
  return (
    <Flex width="full" display={['none', 'none', 'flex']}>
      <MotionBox
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ x: 500, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: 'easeInOut'
          }
        }}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue('gray.600', 'gray.700')}
        w="80%"
        h="24rem"
        textAlign="left"
        align="start"
        spacing={4}
        shadow="md"
        _hover={{ border: 'md', shadow: 'lg' }}
        overflow="hidden"
        position="relative"
      >
        <MagicLink passHref href={`/projects/${project.slug.current}`} aria-label='blog post'  rel="noopener noreferrer">
          <AspectRatio ratio={1.85 / 1} w="100%" h="100%" rounded="xl">
            <Image
              src={project.coverimage.asset.url}
              fallback={<Skeleton />}
              width={'full'}
              height={'full'}
              position="absolute"
              rounded="xl"
              objectFit="contain"
              opacity={useColorModeValue('0.80', '.5')}
              alt={'project-imageleft'}
              _hover={{ opacity: 1 }}
            />
          </AspectRatio>
        </MagicLink>
      </MotionBox>
      <MotionBox
        initial="initial"
        animate="animate"
        width="40%"
        rounded="lg"
        my="auto"
        zIndex="10"
        ml="-6rem"
        align="right"
      >
        <MotionBox
          rounded={'lg'}
          p={2}
          bg={light}
          align={'center'}
          variants={stagger}
        >
          <MotionBox variants={fadeInUp}>
            <Badge
              rounded={'lg'}
              fontSize={'2xl'}
              bg={dark}
              color={light}
            >
              {project.title}
            </Badge>
          </MotionBox>
          <Box width="full">
            <MotionText
              variants={fadeInUp}
              rounded="lg"
              align="left"
              fontWeight={800}
              p="4"
              fontSize="md"
              color={dark}
            >
              {project.description}
            </MotionText>
            <MotionFlex
              variants={fadeInUp}
              display="flex"
              fontSize="xs"
              w={'100%'}
              mt="1"
              gap={2}
              justify={'center'}
              color={dark}
            >
              {project.techStack.map((s: any, index: any) => (
                <Badge
                  justifyContent={'center'}
                  color={light}
                  variant={'solid'}
                  fontSize={'md'}
                  letterSpacing={'tighter'}
                  bg={dark}
                  key={index}
                >
                  {s}
                </Badge>
              ))}
            </MotionFlex>
          </Box>
          <MotionFlex variants={fadeInUp} pt={2} mt={1} justifyContent="start">
            <Link target='_blank' color={useColorModeValue('#f0e7db', '#202023')} href={project.gitHub} isExternal>
              <Icon rounded="full" aria-label="medal" as={AiOutlineGithub} />
            </Link>
            <Link
              color={dark}
              target='_blank'
              ml={2}
              href={project.site}
              isExternal
            >
              <Icon rounded="full" aria-label="medal" as={HiOutlineExternalLink} />
            </Link>
          </MotionFlex>
        </MotionBox>
      </MotionBox>
    </Flex>
  );
};

const RightProjectLayoutLarge = ({ project }: any) => {
const dark = useColorModeValue('#f0e7db', '#202023')
const light = useColorModeValue('#202023', '#f0e7db')
  return (
    <Flex width="full" display={['none', 'none', 'flex']}>
      <MotionBox
        initial="initial"
        animate="animate"
        width="40%"
        rounded="lg"
        my="auto"
        zIndex="10"
        mr="-6rem"
        align="left"
      >
        <MotionBox
          rounded={'lg'}
          p={2}
          bg={light}
          align={'center'}
          variants={stagger}
        >
          <MotionBox variants={fadeInUp}>
            <Badge
              rounded={'lg'}
              fontSize={'2xl'}
              bg={dark}
              color={light}
            >
              {project.title}
            </Badge>
          </MotionBox>
          <Box width="full">
            <MotionText
              variants={fadeInUp}
              rounded="lg"
              align="left"
              p="4"
              fontSize="md"
              color={dark}
            >
              {project.description}
            </MotionText>
            <MotionFlex
              variants={fadeInUp}
              display="flex"
              fontSize="xs"
              w={'100%'}
              mt="1"
              gap={2}
              justify={'center'}
              color={dark}
            >
              {project.techStack.map((s: any, index: any) => (
                <Badge
                  justifyContent={'center'}
                  color={light}
                  variant={'solid'}
                  fontSize={'md'}
                  letterSpacing={'tighter'}
                  bg={dark}
                  key={index}
                >
                  {s}
                </Badge>
              ))}
            </MotionFlex>

            </Box>
          <MotionFlex variants={fadeInUp} pt={2} mt={1} justifyContent="end">
            <Link target='_blank' color={dark} href={project.gitHub} isExternal>
              <Icon rounded="full" aria-label="medal" as={AiOutlineGithub} />
            </Link>
            <Link
              color={dark}
              ml={2}
              href={project.site}
              isExternal
              target='_blank'
            >
              <Icon rounded="full" aria-label="medal" as={HiOutlineExternalLink} />
            </Link>
          </MotionFlex>
        </MotionBox>
      </MotionBox>
      <MotionBox
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ x: 500, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: 'easeInOut'
          }
        }}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue('gray.600', 'gray.700')}
        w="80%"
        h="24rem"
        textAlign="left"
        align="start"
        spacing={4}
        shadow="md"
        _hover={{ border: 'md', shadow: 'lg' }}
        overflow="hidden"
        position="relative"
      >
        <MagicLink passHref href={`/projects/${project.slug.current}`} aria-label='blog post'  rel="noopener noreferrer">
          <AspectRatio ratio={1.85 / 1} w="100%" h="100%" rounded="xl">
            <Image
              alt={'project-imageright'}
              src={project.coverimage.asset.url}
              fallback={<Skeleton />}
              width={'full'}
              height={'full'}
              position="absolute"
              rounded="xl"
              objectFit="cover"
              opacity={0.5}
              _hover={{ opacity: 1 }}
            />
          </AspectRatio>
        </MagicLink>
      </MotionBox>
    </Flex>
  );
};

export { LeftProjectLayoutLarge, RightProjectLayoutLarge, ProjectLayoutMed };
