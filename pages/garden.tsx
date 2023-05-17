import React, { useState } from 'react';
import {Box,Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import PageLayout from '@/components/layouts/pageLayout';
import { fetchPosts } from '@/lib/fetchsSanity';
import { GardenProps } from '@/utils/interface';
import BlogIndex from '@/components/garden/blog/blogIndex';
import Repositories from '@/components/garden/github/repositories';
import { fetchRecentRepos } from '@/lib/fetchGitHub';

export default function Garden({ posts,repositories }: GardenProps ) {
const title='My Digital Garden🏡' 
const subtitle ='This is where all the magic happens✨. Where I Blog✍🏾 and always show whats going on up-to-date ⬆️, in my life whether its programming, or my personal life🙌🏾. Hope you Enjoy!💖 '
 
  return (
    <PageLayout title="🏡Garden">
    <Stack w={'100%'} spacing={4} textAlign={'start'}>
    <Box fontSize={'3xl'} textDecoration={'underline'} fontWeight={700}>
    {title}
    </Box>
    <Box>
      {subtitle}
    </Box>
    </Stack>
      <Tabs isLazy>
        <TabList>
          <Tab
          >
            📓Blog
          </Tab>
          <Tab
          >
          🧑🏾‍💻Repositories
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <BlogIndex posts={posts} />
          </TabPanel>
          <TabPanel>
             <Repositories repositories={repositories}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const posts = await fetchPosts();
  const repositories = await fetchRecentRepos();

  return {
    props: {
      posts,
      repositories
    },
  };
}






