// import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'
// import { repositoryName } from '../../prismicio'
import Modals from '../components/Modals'
import { BoxCookies } from '../components/Partials/BoxCookies'
import { ToasterComponent } from '../components/Partials/ToasterComponent'
import { GlobalContextProvider } from '../context/GlobalContextProvider'
import 'swiper/css/bundle'
import '../styles/index.scss'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import useMenuHamburguerStore from '../stores/useMenuHamburguerStore'
import { MenuHamburguer } from '../components/Partials/MenuHamburguer'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalContextProvider>
        <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
          {/* <PrismicPreview repositoryName={repositoryName}> */}
          <Header />
          <Component {...pageProps} />
          <Footer />
          <BoxCookies />
          <Modals />
          <ToasterComponent />
          {/* </PrismicPreview> */}
        </PrismicProvider>
      </GlobalContextProvider>
      <MenuHamburguer />
    </>
  )
}
