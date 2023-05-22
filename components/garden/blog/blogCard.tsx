import { Text, Box, VStack, Button, useColorModeValue, Flex, Avatar } from '@chakra-ui/react';
import { MotionBox, MotionImage } from '../../animations/motion/motion';
import { MagicLink } from '../../shared/magic';
import { BsFilePost } from 'react-icons/bs';
import { item } from '../../animations/motion/transition';

const Index = ({ name, _createdAt, description, mainImage, title, href, author }: any) => {
  return (
    <MotionBox
      variants={item}
      mt={'2rem'}
      w={'100%'}
      align={'center'}
      justify={'center'}
      maxH={'auto'}
    >
      <VStack
        justify={'space-evenly'}
        align={'center'}
        bg={useColorModeValue('#202023', '#f0e7db')}
        color={useColorModeValue('#202023', '#f0e7db')}
        borderColor={useColorModeValue('#f0e7db', '#202023')}
        h={'100%'}
        maxH={500}
        border={'4px solid'}
        rounded="lg"
        p={4}
        overflow="hidden"
      >
        <MotionImage
          rounded={'lg'}
          whileHover={{
            scale: 1.08
          }}
          src={mainImage}
          objectFit="contain"
          height={'40%'}
          width={'100%'}
        />

        <VStack
          h={'full'}
          w={'100%'}
          justify={'space-evenly'}
          align={'center'}
          spacing={3}
          p={2}
          rounded={'lg'}
          bg={useColorModeValue('#f0e7db', '#202023')}
        >
          <Flex justify={'space-between'} w={'100%'} align={'center'} gap={2}>
            <Flex align={'center'}>
              <Avatar src={author} size={'sm'} />
              <Text fontSize={'x-small'}>{name}</Text>
            </Flex>
            <Flex>
              <Box fontSize={'md'}>{_createdAt}</Box>
            </Flex>
          </Flex>
          <Box
            color={useColorModeValue('#202023', '#f0e7db')}
            bg={useColorModeValue('#f0e7db', '#202023')}
            fontSize={{ base: 'lg', sm: 'xl' }}
            fontWeight="bold"
            rounded={'lg'}
          >
            {title}
          </Box>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('#202023', '#f0e7db')}
            color={useColorModeValue('#f0e7db', '#202023')}
            fontSize={'md'}
            p={2}
            fontWeight={600}
          >
            {description}
          </Box>
          <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <MagicLink href={href} passHref>
              <Button
                variant={'subtle'}
                color={useColorModeValue('#f0e7db', '#202023')}
                bg={useColorModeValue('#202023', '#f0e7db')}
                leftIcon={<BsFilePost />}
              >
                Read
              </Button>
            </MagicLink>
          </MotionBox>
        </VStack>
      </VStack>
    </MotionBox>
  );
};

export default Index;
