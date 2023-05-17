import About from "@/components/home/about/about";
import Features from "@/components/home/features/features";
import Home from "@/components/home/homeIndex";
import PageLayout from "@/components/layouts/pageLayout";
import { fetchHome,fetchAbout,fetchFeatures } from "@/lib/fetchsSanity";
import { HomeProps } from "@/utils/interface";

export default function Index({home,about, features }:HomeProps ){
  const title ="Home🏠"
  return(
   <PageLayout title={title}>
    <Home home={home} />
    <About about={about}/>
    <Features features={features}/>
   </PageLayout> 
  )
}

export async function getStaticProps(){
  const home = await fetchHome();
  const about = await fetchAbout();
  const features = await fetchFeatures();
  return{
    props:{
      home,
      about,
      features

    }
  }
}