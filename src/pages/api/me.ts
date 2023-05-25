import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
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
