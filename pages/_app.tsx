import AppLayout from '@/components/layouts/appLayout';
import { Box } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { theme } from '@/theme/theme';
import { FontsGlobal } from '@/theme/fonts';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual';
  }
  return (
    <ChakraProvider theme={theme}>
      <FontsGlobal />
      <AppLayout>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo(0, 0);
            }
          }}
        >
          <Box key={router.route}>
            <Component {...pageProps} />
          </Box>
        </AnimatePresence>
      </AppLayout>
    </ChakraProvider>
  );
}
