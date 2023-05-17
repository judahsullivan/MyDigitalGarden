import React, { useState } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import PageLayout from '@/components/layouts/pageLayout';
import { fetchPosts } from '@/lib/fetchsSanity';
import { GardenProps } from '@/utils/interface';
import BlogIndex from '@/components/garden/blog/blogIndex';
import Repositories from '@/components/garden/github/repositories';
import { fetchRecentRepos } from '@/lib/fetchGitHub';

export default function Blog({ posts,repositories }: GardenProps ) {
  const [activeTab, setActiveTab] = useState('blog');

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <PageLayout title="Blog">
      <Tabs isLazy>
        <TabList>
          <Tab
            isSelected={activeTab === 'blog'}
            onClick={() => handleTabChange('blog')}
          >
            📓Blog
          </Tab>
          <Tab
            isSelected={activeTab === 'repositories'}
            onClick={() => handleTabChange('repositories')}
          >
          🧑🏾‍💻Repositories
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {activeTab === 'blog' && <BlogIndex posts={posts} />}
          </TabPanel>
          <TabPanel>
            {activeTab === 'repositories' && <Repositories repositories={repositories}/>}
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






