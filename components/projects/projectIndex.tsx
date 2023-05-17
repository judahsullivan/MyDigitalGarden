import { fetchProjects } from "@/lib/fetchsSanity";
import { VStack } from "@chakra-ui/react";
import { Fragment } from "react";
import { PageSlideFade } from "../animations/motion/transition";
import { ProjectLayoutMed, LeftProjectLayoutLarge, RightProjectLayoutLarge } from "./projectLayout";




export default function ProjectIndex({projects}: any ){
    return(
    <PageSlideFade>
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
      </PageSlideFade>

    )
}



export async function getStaticProps(){
  const projects = await fetchProjects();
  
  return{
    props: {
      projects
    }
  }
} 
