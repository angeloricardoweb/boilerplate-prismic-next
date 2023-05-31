import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Icon } from '@iconify/react'
import { api } from '../../../services/axios'
import { Loading } from '../../../components/Partials/Loading'
import Container from '../../../components/Partials/Container'
import { BackButton } from '../../../components/Partials/BackButton'

export default function Pix() {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [pixData, setPixData] = React.useState<any>({})

  const textCopy = useRef<any>(null)

  function copyToClipboard() {
    navigator.clipboard.writeText(textCopy.current.innerText)
    setCopySuccess('Copiado!')
    setCopyIconSuccess(<Icon icon="material-symbols:check-small-rounded" />)
  }

  const [copySuccess, setCopySuccess] = useState('Copiar Código')
  const [copyIconSuccess, setCopyIconSuccess] = useState(
    <Icon icon="material-symbols:content-copy-outline" />
  )

  async function generatePixPayment() {
    setLoading(true)
    try {
      const response = await api.post('/pagamento/pix', {
        especialidade_id: '123',
        medico_id: '123',
        hora_id: '123',
        data: '123',
      })
      console.log(response.data)
      setPixData(response.data.results)
    } catch (error: any) {
      toast.error(error?.response?.data.message)
    }
    setLoading(false)
  }
  useEffect(() => {
    generatePixPayment()
  }, [])

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading />
      </div>
    )
  }

  return (
    <div className="mt-10">
      <Container>
        <BackButton />
        <div className="mb-4">
          <h1 className="text-center text-3xl">Pagamento Via Chave Pix</h1>
        </div>
        <h2>1.Copie ou escaneie a chave Pix abaixo;</h2>
        <h2>
          2. Abra o app do seu banco e encontre a opção de pagamento
          &quot;Pix&quot;
        </h2>
        <h2>
          3. Selecione a função colar, verifique os detalhes e finalize o
          pedido;
        </h2>
        <div>
          <div className="flex justify-center">
            <picture>
              <img
                src={`https://gerarqrcodepix.com.br/api/v1?brcode=${pixData.codigo_pix}`}
                alt="chave pix"
              />
            </picture>
          </div>
          <div className="p-3 overflow-hidden bg-white rounded-md my-3">
            <p
              ref={textCopy}
              className="mb-4 text-sm font-semibold text-brand-blue-700 outline-0"
              style={{ wordBreak: 'break-all' }}
            >
              {pixData.codigo_pix}
            </p>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center justify-center w-full px-4 py-3 font-medium text-white bg-brand-blue-500 rounded-md hover:bg-brand-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-xl"
          >
            {copyIconSuccess}
            {copySuccess}
          </button>
        </div>
      </Container>
    </div>
  )
}
