import PageLayout from "@/components/layouts/pageLayout";
import { client } from "@/lib/sanity.client";
import { Heading, Image } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { groq } from "next-sanity";



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
   if(!project){
    return(
     <Heading>Loading the Project...</Heading> 
    )
   }
    return(
        <PageLayout title={project.title}>
        <Heading>{project.title}</Heading>
        <Image src={project.coverimage.asset.url} />

        </PageLayout>
    )
}

export default Project;
 