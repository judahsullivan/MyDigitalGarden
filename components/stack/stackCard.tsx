import {
  chakra,
  Image,
  Box,
  Stack,
  Link,
  HStack,
  Text,
  Container,
  Icon,
  Avatar,
  Tooltip,
  Divider,
  useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaExternalLinkAlt } from 'react-icons/fa';

const SkillsCard = ({ description, title, image, link }: any) => {
  return (
    <Stack
      w="13rem"
      spacing={2}
      p={4}
      border="1px solid"
      borderColor={useColorModeValue('gray.400', 'gray.600')}
      rounded="md"
      margin="0 auto"
      color={useColorModeValue('#f0e7db', '#202023')}
      bg={useColorModeValue('#202023', '#f0e7db')}
      _hover={{
        boxShadow: useColorModeValue(
          '0 4px 6px rgba(160, 174, 192, 0.6)',
          '0 4px 6px rgba(9, 17, 28, 0.4)'
        )
      }}
    >
      <HStack justifyContent="space-between" alignItems="baseline">
        <Tooltip
          label="Lahore, Pakistan"
          aria-label="Lahore, Pakistan"
          placement="right-end"
          size="sm"
          // Sizes for Tooltip are not implemented in the default theme. You can extend the theme to implement them
        >
          <Box pos="relative" w={26} h={26}>
            <Image objectFit={'cover'} src={image} />
          </Box>
        </Tooltip>
        <Link isExternal href={link}>
          <Icon as={FaExternalLinkAlt} w={10} />
        </Link>
      </HStack>
      <chakra.h1 fontSize="md" fontWeight="bold">
        {title}
      </chakra.h1>
      <Text fontSize="xs" color="gray.500">
        {description}
      </Text>
    </Stack>
  );
};

export default SkillsCard;
