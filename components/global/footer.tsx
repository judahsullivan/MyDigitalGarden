import { Stack, IconButton, Link, Box, HStack, useColorModeValue, Flex } from '@chakra-ui/react';
import siteConfig from './site-config';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const Footer = () => {
  return (
    <Stack
      as="footer"
      isInline
      justifyContent="space-between"
      alignItems="center"
      w={['100%', '85%', '80%']}
      maxW={900}
      mx="auto"
    >
      <Flex justifyContent={['center', 'space-between']} alignItems="center" w="100%">
        {/* <HStack> */}
        <Box letterSpacing={'tighter'} textAlign="center" fontSize="md">
          © {new Date().getFullYear()} Judah B. Sullivan
        </Box>
        <HStack ml={4} spacing={-3}>
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </HStack>
      </Flex>
    </Stack>
  );
};

export default Footer;
