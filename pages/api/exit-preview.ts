import { NextApiRequest, NextApiResponse } from "next"


export default function exit(_req: NextApiRequest, res: NextApiResponse) {
    res.setPreviewData({})
    res.writeHead(307, {Location: '/'})
    res.end()
  }