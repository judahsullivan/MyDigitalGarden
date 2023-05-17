import urlFor from '@/lib/urlFor';
import { Box, Heading, Link as ChakraLink,Image as ChakraImage, List } from '@chakra-ui/react';
import { MotionBox } from '../animations/motion/motion';

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      const imageUrl = urlFor(value).toString(); // Convert ImageUrlBuilder to a string URL
      return (
        <MotionBox align={'center'}  border={'4px solid'} rounded={'xl'}>
          <ChakraImage src={imageUrl} alt={''} w={400} height={300}  objectFit={'cover'} />
        </MotionBox>
      );
    }, 
    code: ({ value }: any) => {
      return (
        <Box as="pre">
          <code>{value.code}</code>
        </Box>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <List as="ul" ml={10} py={5} listStyleType="disc" spacing={5}>
        {children}
      </List>
    ),
    number: ({ children }: any) => (
      <Box as="ol" mt="lg" listStyleType="decimal">
        {children}
      </Box>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <Heading as="h1" fontSize="5xl" py={10} fontWeight="bold">
        {children}
      </Heading>
    ),
    h2: ({ children }: any) => (
      <Heading as="h2" fontSize="4xl" py={10} fontWeight="bold">
        {children}
      </Heading>
    ),
    h3: ({ children }: any) => (
      <Heading as="h3" fontSize="3xl" py={10} fontWeight="bold">
        {children}
      </Heading>
    ),
    h4: ({ children }: any) => (
      <Heading as="h4" fontSize="2xl" py={10} fontWeight="bold">
        {children}
      </Heading>
    ),
    blockquote: ({ children }: any) => (
      <Box as="blockquote" borderLeft="4px" borderLeftColor="#f7ab0a">
        {children}
      </Box>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <ChakraLink
          href={value.href}
          rel={rel}
          textDecoration="underline"
          color="#f7ab0a"
          _hover={{ textDecoration: 'black' }}
        >
          {children}
        </ChakraLink>
      );
    },
  },
};
