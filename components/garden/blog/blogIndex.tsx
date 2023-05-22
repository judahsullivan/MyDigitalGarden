import { MotionBox } from '../../animations/motion/motion';
import { Fragment } from 'react';
import { Box, Container, SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { fetchPosts } from '@/lib/fetchsSanity';
import { PageSlideFade, container, fadeInUp } from '../../animations/motion/transition';
import BlogCard from './blogCard';

export default function BlogIndex({ posts }: any) {
  const title = 'My Blog';
  const subtitle =
    'Here are a list of my Blog post. Where I always comprehensively talk about all that I learn, and my personal life.';
  return (
    <Fragment>
      <PageSlideFade>
        <VStack textAlign={{ base: 'center', md: 'left' }} spacing={4}>
          <Box textAlign={'left'} w={'100%'} fontSize={'2xl'} textTransform={'capitalize'}>
            <Box fontWeight={700} letterSpacing={'widest'}>
              {title}
            </Box>
            <Box fontSize={'lg'} maxW={'2xl'}>
              {subtitle}
            </Box>
          </Box>
        </VStack>

        <MotionBox maxW={'7xl'} variants={container} initial={'hidden'} animate={'visible'}>
          <SimpleGrid columns={[1, 2, 2, 3]} spacing={4}>
            {posts &&
              posts.map((post: any, index: any) => (
                <BlogCard
                  key={index}
                  mainImage={post.mainImage.asset.url}
                  title={post.title}
                  name={post.author.name}
                  image={post.mainImage.asset.url}
                  author={post.author.image.asset.url}
                  _createdAt={post.publishedAt}
                  href={`/posts/${post.slug.current}`}
                  description={post.description}
                />
              ))}
          </SimpleGrid>
        </MotionBox>
      </PageSlideFade>
    </Fragment>
  );
}
export async function getStaticProps() {
  const posts = await fetchPosts();

  return {
    props: {
      posts
    }
  };
}
