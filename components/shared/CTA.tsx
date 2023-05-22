import { Box, Heading, Text, Button, VStack, useColorModeValue } from '@chakra-ui/react';
import { MagicLink, MotionMagicLink } from './magic';
import { FaPhone } from 'react-icons/fa';
import { MotionBox } from '../animations/motion/motion';

export default function CallToAction() {
  const thanks = 'Thank You For Reading';
  const calltoaction =
    'If you would like to get to know me more, collab or even learn more about a specific project. Please get in Touch Please dont hesitate!';
  return (
    <Box width={'100%'} mt={16}>
      <VStack spacing={5} align={'left'}>
        <Heading textAlign={'left'} fontSize={'2xl'}>
          {thanks}
        </Heading>
        <Text textAlign={'left'} fontWeight={600} fontSize={'xl'}>
          {calltoaction}
        </Text>
        <MagicLink href="/contact" passHref>
          <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              color={useColorModeValue('whiteAlpha.700', 'blackAlpha.900')}
              bg={useColorModeValue('blackAlpha.900', 'whiteAlpha.700')}
              _hover={{
                color: useColorModeValue('blackAlpha.900', 'whiteAlpha.700'),
                bg: useColorModeValue('whiteAlpha.700', 'blackAlpha.900')
              }}
              aria-label="get in touch with me"
              leftIcon={<FaPhone />}
            >
              Get In Touch
            </Button>
          </MotionBox>
        </MagicLink>
      </VStack>
    </Box>
  );
}
