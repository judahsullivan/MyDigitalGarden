import About from "@/components/home/about";
import Features from "@/components/home/features";
import Home from "@/components/home/homeSection";
import PageLayout from "@/components/layouts/pageLayout";
import { fetchHome,fetchAbout,fetchFeatures } from "@/lib/fetchsSanity";
import { HomeProps } from "@/utils/interface";

export default function Index({home,about, features }:HomeProps ){
  return(
   <PageLayout title={'Home'}>
   {home.map((home)=>(
    <Home key={home.id} title={home.title} image={home.image} description={home.description} role={home.role} specialize={home.specialize} />
   ))}
    {about.map((about) => (
      <About key={about._type} title={about.title} image={about.image} description={about.description} />
    ))}
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