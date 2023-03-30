import Container from '../Partials/Container'

export default function Subheader({
  title,
}: {
  title: string
}) {
  return (
    <div className="py-5 border-b">
      <Container>
        <span className="text-brand-gray-50">Você está em</span>
        <h2>{title}</h2>
      </Container>
    </div>
  )
}
