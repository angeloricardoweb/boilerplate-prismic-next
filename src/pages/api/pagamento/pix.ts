import { v4 as uuidv4 } from 'uuid'
import { NextApiRequest, NextApiResponse } from 'next'
import { PixPaymentDTO } from '../../../types/protocols'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: {
    error: boolean
    message: string
    payload: any
    results: PixPaymentDTO
  } = {
    error: false,
    message: 'Sem erros',
    payload: req.body,
    results: {
      codigo_pix:
        '00020126580014BR.GOV.BCB.PIX0136727f7a8a-d8d3-4348-a1c3-b5d820cd5cc1520400005303986540549.905802BR5924Angelo Ricardo dos Anjos6009SAO PAULO61080540900062240520LGHMcNUWoRGDp7Lslhuq630491D3',
      valor: 50.0,
      protocolo: uuidv4(),
    },
  }

  res.status(200).json(data)
}
