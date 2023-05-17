import { groq } from 'next-sanity';
import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/lib/sanity.client';

const query = groq`
*[_type == "techstack"]{
    title,
      description,
      "image": image.asset -> url,
      link,
      type,
  }
`;

type Data = {
  techstacks: TechStack[];
};

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  const techstacks: TechStack[] = await client.fetch(query);

  res.status(200).json({ techstacks });
}
