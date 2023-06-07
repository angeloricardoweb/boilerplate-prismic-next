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

  const data = {
    error: false,
    message: 'Cadastro realizado com sucesso',
    payload: req.body,
    results: {
      token: uuidv4(),
      nome: 'John Doe',
    },
  }

  res.status(200).json(data)
}
