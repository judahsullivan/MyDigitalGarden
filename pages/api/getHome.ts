import { groq } from 'next-sanity';
import { NextApiRequest, NextApiResponse } from 'next';
import { HomePage } from '@/types';
import { client } from '@/lib/sanity.client';

const query = groq`
*[_type == "homepage"]{
    title,
      role,
      "image": image.asset -> url,
      description,
      specialize
}
`;

type Data = {
  home: HomePage[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const home: HomePage[] = await client.fetch(query);

  res.status(200).json({ home });
}
