import Home from "@/components/home/homeIndex";
import PageLayout from "@/components/layouts/pageLayout";
import {  fetchFeatures, fetchHome } from "@/lib/fetchsSanity";
import { HomeProps } from "@/utils/interface";

export async function getStaticProps() {
  const home = await fetchHome();
  const features = await fetchFeatures();

  return {
    props: {
      home,
      features,
    },
  };
}

export default function Index({ home ,features  }: HomeProps) {
  const title = "Home🏠";
  return (
    <PageLayout title={title}>
      <Home home={home} features={features}/>
    </PageLayout>
  );
}
