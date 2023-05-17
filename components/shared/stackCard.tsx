import React from 'react'
import {
  Flex,
  Icon,
  VStack,
  Text,
  useColorModeValue,
  Box,
  Image,
  Skeleton,
} from '@chakra-ui/react'
import { usePalette } from 'react-palette'
import { item } from '../animations/motion/transition'
import { MotionBox } from '../animations/motion/motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { MagicLink } from './magic'

export default function SkillCard ({ title, image, link, description }: any)  {
  const { data, loading } = usePalette(image)

  return (
    <MotionBox variants={item}>
      <MotionBox whileHover={{ y: -5 }}>
            <VStack 
              color={useColorModeValue('#f0e7db', '#202023')}
              bg={useColorModeValue('#202023', '#f0e7db')}
              rounded="xl"
              border="1px solid "
              h={'12rem'}
              p={2}
              textAlign="center"
              _hover={{ shadow: 'md' }}
            >
             <Flex 
             justify={'space-between'} 
             textAlign={'center'}
             w={'100%'} 
             align={'center'} >
              <Box
                rounded="lg"
                p={2}
                position="relative"
                overflow="hidden"
                boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
              >
                <Box
                  bg={data.lightVibrant}
                  position="absolute"
                  top={0}
                  bottom={0}
                  left={0}
                  right={0}
                  opacity={0.25}
                ></Box>
                {loading ? (
                  <Skeleton 
                  height={26}
                   width={26}
                    rounded="md" />
                ) : (
                  <Image
                    src={image}
                    height={26}
                    width={26}
                    rounded="md"
                  />
                )}
              </Box>
             <MagicLink target={'_blank'} href={link} passHref >
             <Icon
              as={FaExternalLinkAlt} 
              h={3}
              w={3}
             />
              </MagicLink>  
              </Flex> 
             <VStack w={'100%'} h={'auto'} mb={5}>
                <Text fontSize={'lg'} >{title}</Text>
                <Text fontSize={'sm'}>{description}</Text>
             </VStack>
                </VStack>
      </MotionBox>
    </MotionBox>
  )
}
