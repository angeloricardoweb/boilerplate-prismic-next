// import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'
// import { repositoryName } from '../../prismicio'
import Modals from '../components/Modals'
import { BoxCookies } from '../components/Partials/BoxCookies'
import { ToasterComponent } from '../components/Partials/ToasterComponent'
import { GlobalContextProvider } from '../context/GlobalContextProvider'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import { MenuHamburguer } from '../components/Partials/MenuHamburguer'
import { DefaultSeo } from 'next-seo'
import 'swiper/css/bundle'
import '../styles/index.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="_____SiteName_____"
        description="___SiteDescription___    "
        canonical="https://vercel.app/"
        openGraph={{
          url: 'https://vercel.app/',
          title: '_____SiteName_____',
          description: '___SiteDescription___',
          images: [
            {
              url: '/img/seo.png',
              width: 1200,
              height: 627,
              alt: '_____SiteName_____',
              type: 'image/png',
            },
          ],
          siteName: 'gilmarcasepatentes.com.br',
        }}
        twitter={{
          handle: '@GilmarcaEPatentes',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
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
