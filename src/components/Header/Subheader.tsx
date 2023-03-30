import Container from '../Partials/Container'

export default function Subheader({
  title,
}: {
  title: string
}) {
  return (
    <div className="py-5 border-b">
      <Container>
        <span className="text-zinc-400">Você está em</span>
        <h2 className='text-white'>{title}</h2>
      </Container>
    </div>
  )
}
