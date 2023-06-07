import NextCors from 'nextjs-cors'
import { v4 as uuidv4 } from 'uuid'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    // Options methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  const error = true

  try {
    if (error) {
      throw 'error'
    }
  } catch (error) {
    res.status(401).json({
      error: true,
      message: 'Token Inválido',
    })
  }
}
