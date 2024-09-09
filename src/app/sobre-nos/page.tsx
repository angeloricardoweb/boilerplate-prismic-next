import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BPN14 | Sobre nós',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Sobre nós</h2>
    </main>
  )
}
