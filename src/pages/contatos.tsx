import { NextPage } from 'next'
import Head from 'next/head'
import Subheader from '../components/Header/Subheader'
import Layout from '../components/Layouts/Layout'
import Container from '../components/Partials/Container'
import { ExampleForm } from '../components/Forms/ExampleForm'

const Contatos: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Next Boilerplate | Contatos</title>
      </Head>
      <Subheader title="Contatos" />
      <ExampleForm />
    </Layout>
  )
}

export default Contatos
