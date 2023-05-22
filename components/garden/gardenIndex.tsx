import React from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { fetchAbout, fetchPosts } from '@/lib/fetchsSanity';
import { GardenProps } from '@/utils/interface';
import BlogIndex from '@/components/garden/blog/blogIndex';
import Repositories from '@/components/garden/github/repositories';
import { fetchRecentRepos } from '@/lib/fetchGitHub';
import About from './about/about';
import { PageSlideFade } from '../animations/motion/transition';

export async function getStaticProps() {
  const posts = await fetchPosts();
  const repositories = await fetchRecentRepos();
  const about = await fetchAbout();

  return {
    props: {
      posts,
      repositories,
      about
    },
    revalidate: 3000 * 3000
  };
}

export default function GardenIndex({ posts, repositories, about }: GardenProps) {
  return (
    <PageSlideFade>
      <Tabs isLazy>
        <TabList>
          <Tab>🤙🏾Bio</Tab>
          <Tab>📓Blog</Tab>

          <Tab>💻Repositories</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <About about={about} />
          </TabPanel>
          <TabPanel>
            <BlogIndex posts={posts} />
          </TabPanel>
          <TabPanel>
            <Repositories repositories={repositories} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </PageSlideFade>
  );
}
