import { Container } from '../Partials/Container'

export default function Subheader({ title }: { title: string }) {
  return (
    <div className="border-b py-5">
      <Container>
        <span className="text-zinc-800">Você está em</span>
        <h2>{title}</h2>
      </Container>
    </div>
  )
}
