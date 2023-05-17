import { groq } from "next-sanity";
import { Flex, Heading, Box, VStack, Link, Icon, Button } from "@chakra-ui/react";
import { client } from "@/lib/sanity.client";
import { RichTextComponents } from "@/components/shared/richtextComponent";
import PageLayout from "@/components/layouts/pageLayout";
import { GetStaticProps } from "next";
import { PortableText } from "@portabletext/react";
import { BsBack } from "react-icons/bs";
import { MotionMagicLink } from "@/components/shared/magic";
import { MotionBox } from "@/components/animations/motion/motion";

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
      slug: slug.slug.current,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;

  const query = groq`
    *[_type=="post" && slug.current ==$slug][0] {
  title,
   author -> {
    name,
    image,
   },
    body,
   slug,
   mainImage{
     asset -> {
      _id,
      url,
     },
    },
    }`;

  const post: Post = await client.fetch(query, { slug });

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

const Post = ({ post }: Props) => {
  if(!post){
    return(
      <Box>Loading the Post...</Box>
    )
  }
  return (
    <PageLayout title={post.title}>
    <VStack justify={'center'} textAlign={'center'}>
    <MotionBox w={'100%'} align={'start'}>
    <MotionMagicLink passHref href={'/blog'} align={'start'}>
    <Button leftIcon={<BsBack />} >
    Go back?
    </Button>
    </MotionMagicLink>
    </MotionBox>
    
      <PortableText value={post.body} components={RichTextComponents}  />
    </VStack>
    </PageLayout>
  );
};

export default Post;
