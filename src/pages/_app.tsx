import type { AppProps } from 'next/app'
import Link from 'next/link'
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
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import Router from 'next/router'
import { useAuth } from '../hooks/useAuth'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const start = () => {
      console.log('start')
      window.scrollTo(0, 0)
      setLoading(true)
    }
    const end = () => {
      console.log('finished')
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  // * Verifica se o token é valido
  // const { checkToken } = useAuth()
  // useEffect(() => {
  //   checkToken()
  // }, [])

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

          <Header />
          {loading ? (
            <div className="h-screen flex items-center justify-center">
              <Icon icon="mdi:loading" className="text-5xl animate-spin" />
            </div>
          ) : (
            <Component {...pageProps} />
          )}
          <Footer />
          <BoxCookies />
          <Modals />
          <ToasterComponent />

      </GlobalContextProvider>
      <MenuHamburguer />
    </>
  )
}
