import { MotionBox } from "@/components/animations/motion/motion";
import PageLayout from "@/components/layouts/pageLayout";
import { MagicLink } from "@/components/shared/magic";
import { RichTextComponents } from "@/components/shared/richtextComponent";
import { client } from "@/lib/sanity.client";
import { Button, Heading, VStack, useColorModeValue } from "@chakra-ui/react";
import { PortableText } from "@portabletext/react";
import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import { BsBack } from "react-icons/bs";
import CallToAction from "@/components/shared/CTA";



type Props = {
    project : Projects;
  };
 


  export async function getStaticPaths() {
    const query = groq`
  *[_type == "project"]{
  title,
  description,
  slug,
  body,
  coverimage{
    asset->{
      url,
      _id,
    },
  },
  techStack[],
  site,
}
`;
  
    const slugs: Projects[] = await client.fetch(query);
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
      *[_type == "project" && slug.current == $slug][0]{
        title,
        slug,
        body,
        coverimage{
          asset->{
            url,
            _id,
          },
        },
        site,
      }
    `;
  
    const project: Projects = await client.fetch(query, { slug });
    return {
      props: {
        project,
      },
      revalidate: 60,
    };
  };


  const Project = ({project}: Props) => {
  const bg = useColorModeValue('blackAlpha.900','whiteAlpha.700')
  const color= useColorModeValue('whiteAlpha.700', 'blackAlpha.900')
   if(!project){
    return(
     <Heading>Loading the Project...</Heading> 
    )
   }
    return(
    <PageLayout title={project.title}> 
    <VStack w={'100%'} p={5} align={'start'} textAlign={'center'}>
    
    <MagicLink
     passHref href={'/projects'}>
       <MotionBox w={'100%'} align={'start'}
    whileHover={{scale: 1.1}}
    whileTap={{scale: .9}}
    >    <Button
     color={color}
    bg={bg} 
     _hover={{
     color: bg,
     bg: color,
    }}
  
  aria-label='go back to projects' leftIcon={<BsBack />} >
    Go back?
    </Button>
    </MotionBox>

    </MagicLink>
    <PortableText value={project.body}  components={RichTextComponents} />
    <CallToAction />
    </VStack>
    </PageLayout>
    )
}

export default Project;
 