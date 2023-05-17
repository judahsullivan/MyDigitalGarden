import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { NextApiRequest, NextApiResponse } from 'next';

const query = groq`
*[_type == "aboutsection"]{
    title,
      role,
      "image": image.asset -> url,
      description,
}
`;

type Data = {
  about: AboutSection[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const about: AboutSection[] = await client.fetch(query);

  res.status(200).json({ about });
}
