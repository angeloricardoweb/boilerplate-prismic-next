import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { GlobalContextProvider } from '../context/GlobalContextProvider'
import '../styles/index.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <Header />
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}

