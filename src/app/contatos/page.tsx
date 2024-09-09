import { ExampleForm } from '@/components/Forms/ExampleForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BPN14 | Contatos',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ExampleForm />
    </main>
  )
}
