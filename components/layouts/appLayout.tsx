import { Box } from '@chakra-ui/react';
import Navbar from '../global/navbar';
import Footer from '../global/footer';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import styles from './app.layout.module.css'

export default function AppLayout(props: any) {
  const router = useRouter();

  return (
    <Fragment>
      <DottedSvgs />
      <Navbar />
      <Box
        overflow={'hidden'}
        w={'100%'}
        maxW={900}
        mx={'auto'}
        p={5}
      >
        <Box h={'full'} mt={'4rem'} pb={-5} key={router.route}>
          {props.children}
          </Box>
      </Box>
      <Footer />
    </Fragment>
  );
}


function DottedSvgs() {
  return (
    <Box
      position="absolute"
      height="100%"
      width="100%"
      overflow="hidden"
      display={['none', 'none', 'block']}
      zIndex={-1}
    >
      <Box position="relative" height="50rem" mx="auto" maxW="940px">
        <Box position="absolute" left="100%" >
          <svg
            className={`${styles.dottedRightTransform} ${styles.dottedColor}`}
            color="rgba(55,65,81, 1)"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
          </svg>
        </Box>
        <Box position="absolute" right="100%">
          <svg
            className={`${styles.dottedLeftTransform}`}
            color="rgba(55,65,81, 1)"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
          </svg>
        </Box>
        <Box position="absolute" left="100%" top={'150%'}>
          <svg
            className={`${styles.dottedRightTransform} ${styles.dottedColor}`}
            color="rgba(55,65,81, 1)"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
          </svg>
        </Box>

      </Box>
    </Box>
  );
}
