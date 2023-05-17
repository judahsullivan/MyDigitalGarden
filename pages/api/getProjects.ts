import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import { NextApiRequest, NextApiResponse } from 'next';

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

type Data = {
  projects: [];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const projects: [] = await client.fetch(query);

  res.status(200).json({ projects });
}
