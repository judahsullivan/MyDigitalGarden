import Head from 'next/head'
import {Box} from '@chakra-ui/react'
import {NextStudio} from 'next-sanity/studio'
import {metadata} from 'next-sanity/studio/metadata'

import config from '../../sanity.config'
import PageLayout from '@/components/layouts/pageLayout'

export default function StudioPage() {
  return (
    <PageLayout title={"My Studio"}>
      <Head>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}
      </Head>
      <Box w={'100%'} maxW={'1200'} h={"auto"}>

      <NextStudio config={config} />
      </Box>
    </PageLayout>
  )
}