import PageLayout from '@/components/layouts/pageLayout';
import { fetchAbout, fetchPosts } from '@/lib/fetchsSanity';
import { GardenProps } from '@/utils/interface';
import { fetchRecentRepos } from '@/lib/fetchGitHub';
import GardenIndex from '@/components/garden/gardenIndex';
import { Flex,Box } from '@chakra-ui/react';

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


export default function Garden({ posts,repositories,about }: GardenProps ) {
const title='My Digital Garden🏡' 
const subtitle ='This is where all the magic happens✨. Where I Blog✍🏾 and always show whats going on up-to-date ⬆️, in my life whether its programming, or my personal life🙌🏾. Hope you Enjoy!💖 '
  return (
    <PageLayout title="🏡Garden">
    <Flex w={'100%'} display='column' gap={4} textAlign={'left'}>
    <Box fontSize={'3xl'} textDecoration={'underline'} fontWeight={700}>
    {title}
    </Box>
    <Box>
      {subtitle}
    </Box>
    </Flex>
    <GardenIndex about={about} posts={posts} repositories={repositories} />
    </PageLayout>
  );
}





