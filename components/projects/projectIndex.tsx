import { fetchProjects } from "@/lib/fetchsSanity";
import { VStack,Container } from "@chakra-ui/react";
import { Fragment } from "react";
import { ProjectLayoutMed, LeftProjectLayoutLarge, RightProjectLayoutLarge } from "./projectLayout";



export async function getStaticProps(){
  const projects = await fetchProjects();
  
  return{
    props: {
      projects
    },
    revalidate: 3000 * 3000
  }
} 



export default function ProjectIndex({projects}: any ){
    return(
    <Container maxW={"5xl"} p={2} >
        <VStack spacing={8} mt={['7', '7', '0']}>
            {projects.map((project: any, index: any) => (
              <Fragment key={index}>
                <ProjectLayoutMed project={project} />
                {index % 2 === 0 ? (
                  <LeftProjectLayoutLarge project={project} />
                ) : (
                  <RightProjectLayoutLarge project={project} />
                )}
              </Fragment>
            ))}
        </VStack>
      </Container>

    )
}

