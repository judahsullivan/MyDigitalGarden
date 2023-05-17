import { groq } from 'next-sanity';
import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/lib/sanity.client';

const query = groq`
*[_type == "post"] {
  _id,
  title,
   author -> {
    name,
    image{
     asset->{
      _id,
      url,
     },
    },
   },
   description,
   slug,
   mainImage{
     asset -> {
      _id,
      url,
     },
    },
  
} | order(publishedAt desc)
`;

type Data = {

  posts: Post[];
};



export default async function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  const posts: Post[] = await client.fetch(query);

  res.status(200).json({ posts  });
}
