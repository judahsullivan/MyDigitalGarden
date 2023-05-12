import * as React from 'react';
import {
  Box,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Tag,
  Icon,
  Flex,
  Tooltip,
  Stack,
  Avatar
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiGitRepoForked, BiStar } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';

interface RepositoryCardProps {
  title: string;
  description: string;
  url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  userProfile: string;
}

const languageColors: Record<string, string> = {
  JavaScript: 'yellow.400',
  TypeScript: 'blue.400',
  Ruby: 'red.400',
  Python: 'green.400',
  CSS: 'pink.400',
  HTML: 'orange.500'
};

const RepositoryCard = (props: RepositoryCardProps) => {
  const { title, forks_count, userProfile, description, language, url, stargazers_count } = props;

  const handleLinkClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>, link: string) => {
    window.open(link);
    e.stopPropagation();
  };

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
          <Flex
            justifyContent="space-between"
            width="100%"
            onClick={(e) => handleLinkClick(e, url)}
          >
            <Tooltip hasArrow label="Github link" placement="top">
              <HStack cursor="pointer">
                <Icon as={FiGithub} boxSize="0.9em" mt="1px" />
                <Avatar src={userProfile} size={'sm'} />
              </HStack>
            </Tooltip>
            <Flex alignItems="center" _hover={{ color: 'blue.500' }}>
              <Icon as={BiStar} boxSize="0.9em" mt="1px" />
              <Box as="span" ml="1" fontSize="sm">
                {stargazers_count}
              </Box>
            </Flex>
          </Flex>
          <Text>{title}</Text>
          {language && (
            <Flex justifyContent="space-between" width="100%">
              <Box>
                <HStack spacing="1">
                  <Tag size="sm" bg={languageColors[language] || 'gray.400'}>
                    <Text fontSize={['0.55rem', 'inherit', 'inherit']}>{language}</Text>
                  </Tag>
                </HStack>
              </Box>
            </Flex>
          )}
        </VStack>

        <Flex w={'100%'} justifyContent={'space-between'}>
          <Text color="gray.500" fontSize="sm" noOfLines={2} textAlign="left">
            {description}
          </Text>
          <Icon as={BiGitRepoForked}>{forks_count}</Icon>
        </Flex>
      </Stack>
    </Box>
  );
};

export default RepositoryCard;
