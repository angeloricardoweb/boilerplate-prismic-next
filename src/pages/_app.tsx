import type { AppProps } from 'next/app'
import Modals from '../components/Modals'
import { BoxCookies } from '../components/Partials/BoxCookies'
import { GlobalContextProvider } from '../context/GlobalContextProvider'
import '../styles/index.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
      <BoxCookies />
      <Modals />
    </GlobalContextProvider>
  )
}

