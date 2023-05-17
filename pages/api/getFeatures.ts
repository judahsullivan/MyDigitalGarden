import { groq } from 'next-sanity';
import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/lib/sanity.client';

const query = groq`
*[_type == "features"]{
    title,
      content,
      label,
      href,
      "image": image.asset -> url,
      color
  }
`;

type Data = {
  features: FeatureSection[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const features: FeatureSection[] = await client.fetch(query);

  res.status(200).json({ features });
}
