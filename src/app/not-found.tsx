import Link from 'next/link'

export default function Example() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Ops, página não encontrada.
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Desculpe, não conseguimos encontrar a página que você está
            procurando.
            <br />
            Você pode tentar voltar para a página inicial ou entrar em contato
            com o suporte.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Voltar
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
