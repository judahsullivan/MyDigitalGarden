import {
  Box,
  Tag,
  HStack,
  Text,
  Link,
  Image,
  useColorModeValue,
  Stack,
  chakra,
  Flex,
  Icon,
  Tooltip,
  VStack,
  Avatar,
  Spacer,
  TagLabel,
  TagLeftIcon
} from '@chakra-ui/react';
import { url } from 'inspector';
import { useRouter } from 'next/router';
import * as React from 'react';
import { BiGitRepoForked, BiHeart, BiLike, BiStar } from 'react-icons/bi';
import { SiDevdotto } from 'react-icons/si';

interface CardProps {
  title: string;
  username: string;
  userProfile: string;
  publishedDate: string;
  tagList: string[];
  headerImage: string;
  postLink: string;
  readingTime: number;
  reactionsCount: number;
  commentsCount: number;
}

const hashColors: { [key: string]: string } = {
  webdev: 'red.300',
  design: 'purple.500',
  frontend: 'purple.300',
  react: 'blue.400',
  beginner: 'green.300',
  github: 'black',
  vue: 'green',
  angular: 'yellow.400',
  nodejs: 'orange.400'
};

function BlogCard({ title, userProfile, tagList, readingTime, reactionsCount }: CardProps) {
  const router = useRouter();
  const slug = title.toLowerCase().replace(/ /g, '-');

  return (
    <Box
      py={1}
      px={[1, 2]}
      w={'100%'}
      mt={2}
      rounded="xl"
      borderWidth="1px"
      maxW={'md'}
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      _hover={{
        shadow: 'lg',
        textDecoration: 'none'

      }}
    >
      <Stack overflow="hidden" align="start">
        <VStack align="start" w={'100%'}>
          <Flex justifyContent="space-between" width="100%">
            <Tooltip hasArrow label="Github link" placement="top">
              <HStack cursor="pointer" spacing={4}>
                <Icon as={SiDevdotto} w={8} h={8} mt="1px" />
                <Avatar src={userProfile} objectFit={'cover'} size={'sm'} />
              </HStack>
            </Tooltip>
            <Flex alignItems="center" _hover={{ color: 'blue.500' }}>
              <Icon as={BiHeart} boxSize="0.9em" mt="1px" />
              <Box as="span" ml="1" fontSize="sm">
                {reactionsCount}
              </Box>
            </Flex>
          </Flex>
          <Flex justifyContent="space-between" width="100%">
            <Box
            onClick={() => router.push(`/blog/${slug}`)}
            >
             <Text
             color="gray.500" fontSize="sm" noOfLines={2} textAlign="left">
            {title}
          </Text>
               </Box>
          </Flex>
        </VStack>

        <Flex w={'100%'} justifyContent={'space-between'}> 
        <HStack spacing="1">
                {tagList.map((tagList, index) => (
                  <Tag key={index} variant={'ghost'}>
                    <TagLabel
                      color={hashColors[tagList]}
                      fontSize={['0.55rem', 'inherit', 'inherit']}
                    >
                      #{tagList}
                    </TagLabel>
                  </Tag>
                ))}
              </HStack>
                 <Text fontSize={'sm'}>
            {readingTime}
            <chakra.span ml={1}>mins read</chakra.span>
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
}
export default BlogCard;
