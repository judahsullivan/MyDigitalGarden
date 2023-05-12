import PageLayout from "@/components/layouts/pageLayout";
import { fetchProjects } from "@/lib/fetchsSanity";
import ProjectsIndex from "@/components/projects/projectPage";
import { ProjectsProps } from "@/utils/interface";





export default function Projects({projects}: ProjectsProps){
    return(
        <PageLayout title={'Projects'}>
        <ProjectsIndex projects={projects} />
        </PageLayout>
    )
}

export async function getStaticProps(){
    const projects = await fetchProjects();


    return{
        props:{
            projects
        }
    }

}