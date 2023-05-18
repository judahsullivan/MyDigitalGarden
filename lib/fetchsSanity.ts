import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';

const fetchHome = async () => {
  const query = groq`
    *[_type == "home"] {
     title,
      role,
      "image": image.asset -> url,
      description,
      specialize

    }
  `;
  
  const home: HomePage[] = await client.fetch(query);
  return home;
};

const fetchAbout = async () => {
  const query = groq`
    *[_type == "aboutsection"] {
      title,
      role,
      "image": image.asset -> url,
      description
    }
  `;
  
  const about: AboutSection[] = await client.fetch(query);
  return about;
};

const fetchFeatures = async () => {
  const query = groq`
    *[_type == "features"] {
      title,
      content,
      label,
      href,
      "image": image.asset -> url,
      color
    }
  `;
  
  const features: FeatureSection[] = await client.fetch(query);
  return features;
};

const fetchTechStack = async () => {
  const query = groq`
    *[_type == "techstack"] {
      title,
      description,
      "image": image.asset -> url,
      link,
      type
    }
  `;
  
  const techstacks: TechStack[] = await client.fetch(query);
  return techstacks;
};

const fetchProjects = async () => {
  const query = groq`
    *[_type == "project"] {
      title,
      description,
      slug,
      body,
      coverimage {
        asset-> {
          url,
          _id
        }
      },
      techStack[],
      site
    }
  `;
  
  const projects: Projects[] = await client.fetch(query);
  return projects;
};

const fetchPosts = async () => {
  const query = groq`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      author -> {
        name,
        image {
          asset-> {
            _id,
            url
          }
        }
      },
      description,
      slug,
      mainImage {
        asset -> {
          _id,
          url
        }
      }
    }
  `;
  
  const posts: Post[] = await client.fetch(query);
  return posts;
};

export {
  fetchHome,
  fetchAbout,
  fetchFeatures,
  fetchTechStack,
  fetchProjects,
  fetchPosts
};
