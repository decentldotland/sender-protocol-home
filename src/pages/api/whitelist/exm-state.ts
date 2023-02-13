import { fetchEXMStateWhitelist } from "@/utils/api"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const data = await fetchEXMStateWhitelist();
    res.status(200).json(data);
  } catch (error) {
    console.error(error)
    //@ts-ignore
    return res.status(error.status || 500).end(error.message)
  }
}
