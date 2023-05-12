import { AnimatePresence } from 'framer-motion';
import { MotionFlex } from './motion';
import { Box, Image, keyframes, useColorModeValue } from '@chakra-ui/react';

export default function AvatarWithRipple({ image }: any) {
  const size = '96px';
  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <MotionFlex
        justifyContent="center"
        alignItems="center"
        h="216px"
        w="full"
        overflow="hidden"
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
        <Box
          as="div"
          position="relative"
          w={size}
          h={size}
          _before={{
            content: "''",
            position: 'relative',
            display: 'block',
            width: '300%',
            height: '300%',
            boxSizing: 'border-box',
            marginLeft: '-100%',
            marginTop: '-100%',
            borderRadius: '50%',
            animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`
          }}
        >
          <Image
            src={image}
            position="absolute"
            top={0}
            rounded={'full'}
            left={0}
            fallbackSrc="/assets/images/placeholder.png"
          />
        </Box>
      </MotionFlex>
    </AnimatePresence>
  );
}
