import NextCors from 'nextjs-cors'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  })

  res.status(200).json({
    error: false,
    message: 'Sem erros',
    results: {
      id: 1,
      nome: 'Bredi Tecnologia',
      email: 'contato@bredi.com.br',
      functionarios_cadastrados: 10,
      funcionarios_ativos: 10,
      funcionarios_inativos: 0,
      logo: 'https://www.bredi.com.br/img/logo/logo.svg',
    },
  })
}
