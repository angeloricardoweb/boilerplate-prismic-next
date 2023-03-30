import { NextPage } from 'next'
import Head from 'next/head'
import Subheader from '../components/Header/Subheader'
import Layout from '../components/Layouts/Layout'
import Container from '../components/Partials/Container'

const SobreNos: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Next Boilerplate | Sobre Nós</title>
      </Head>
      <Subheader title="Sobre Nós" />
      <Container>
        <main className="py-20">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            molestiae incidunt nemo delectus tenetur. Animi minima corporis,
            possimus repellat id perferendis architecto illum eligendi saepe
            libero voluptatum quibusdam suscipit debitis.
          </p>
        </main>
      </Container>
    </Layout>
  )
}

export default SobreNos
