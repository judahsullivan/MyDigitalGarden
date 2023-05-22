import { groq } from 'next-sanity';
import { Box, VStack, Button, useColorModeValue } from '@chakra-ui/react';
import { client } from '@/lib/sanity.client';
import { RichTextComponents } from '@/components/shared/richtextComponent';
import PageLayout from '@/components/layouts/pageLayout';
import { GetStaticProps } from 'next';
import { PortableText } from '@portabletext/react';
import { BsBack } from 'react-icons/bs';
import { MagicLink } from '@/components/shared/magic';
import { MotionBox } from '@/components/animations/motion/motion';
import CallToAction from '@/components/shared/CTA';

type Props = {
  post: Post;
};

export async function getStaticPaths() {
  const query = groq`
    *[_type=="post"]{
  id,
  title,
   author -> {
    name,
    image,
   },
    body,
   description,
   slug,
   mainImage{
     asset -> {
      _id,
      url,
     },
    },
    }`;

  const slugs: Post[] = await client.fetch(query);
  const paths = slugs.map((slug) => ({
    params: {
      slug: slug.slug.current
    }
  }));

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;

  const query = groq`
    *[_type=="post" && slug.current ==$slug][0] {
      ...,
      author ->,
      category[] ->
    } 
 `;

  const post: Post = await client.fetch(query, { slug });

  return {
    props: {
      post
    },
    revalidate: 60
  };
};

const Post = ({ post }: Props) => {
  const bg = useColorModeValue('blackAlpha.900', 'whiteAlpha.700');
  const color = useColorModeValue('whiteAlpha.700', 'blackAlpha.900');

  if (!post) {
    return <Box>Loading the Post...</Box>;
  }
  return (
    <PageLayout title={post.title}>
      <VStack justify={'center'}>
        <MagicLink passHref href={'/garden'}>
          <MotionBox w={'100%'} align={'start'}>
            <Button
              bg={bg}
              color={color}
              _hover={{
                bg: color,
                color: bg
              }}
              aria-label="go back to main page"
              leftIcon={<BsBack />}
            >
              Go back?
            </Button>
          </MotionBox>
        </MagicLink>

        <PortableText value={post.body} components={RichTextComponents} />
        <CallToAction />
      </VStack>
    </PageLayout>
  );
};

export default Post;
