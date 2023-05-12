import AppLayout from '@/components/layouts/appLayout'
import {ChakraProvider} from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider>
      <AppLayout>
      <Component {...pageProps}/>
      </AppLayout>
    </ChakraProvider>
  )
}
