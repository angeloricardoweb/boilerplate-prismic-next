'use server'
import Script from 'next/script'
import { getAnalytics } from '@/services/prismicData/getAnalytics'

const GoogleAnalytics = async () => {
  const data = await getAnalytics()
  const code = data?.data?.google_analytics
  if (!code) return null
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${code}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${code}');
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics
