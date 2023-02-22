import { NextApiRequest, NextApiResponse } from "next";

import { service } from '../../data'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ service })
}

export default handler