import Container from "../Partials/Container";

export default function TopBar() {
  return (
    <div className="border-brand-gray-700 border-b py-1">
      <Container>
        <small>
          Atendimento IT Protect{' '}
          <strong>
            (91) 3012-1234 / 90123-1234 / atendimento@itprotect.com.br{' '}
          </strong>
        </small>
      </Container>
    </div>
  )
}
