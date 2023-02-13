import axios from 'axios';
import { EXM_WHITELIST_CONTRACT } from '@/constants';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const token = process.env.EXM_TOKEN;
    const { arweave_address, caller, signature } = req.body;
    const data = await axios.post(`https://api.exm.dev/api/transactions?token=${token}`, {
      functionId: EXM_WHITELIST_CONTRACT,
      inputs: [{
        "input": JSON.stringify(
          {
            function: "apply",
            arweave_address,
            caller,
            signature
          })
      }],
    }, {})
    res.status(200).json(data.data)
  } catch (error) {
    console.error(error)
    //@ts-ignore
    return res.status(error.status || 500).end(error.message)
  }
}
