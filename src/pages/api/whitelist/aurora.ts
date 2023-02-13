import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { aurobots_nft_contract, address } = req.body;
    const data = (await axios.get(`https://explorer.mainnet.aurora.dev/api?module=account&action=tokenbalance&contractaddress=${aurobots_nft_contract}&address=${address}`))?.data;
    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    //@ts-ignore
    return res.status(error.status || 500).end(error.message)
  }
}
