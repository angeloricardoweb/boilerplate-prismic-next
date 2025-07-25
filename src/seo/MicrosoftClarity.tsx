'use server'
import Script from 'next/script'
import { getAnalytics } from '@/services/prismicData/getAnalytics'

const MicrosoftClarity = async () => {
  const data = await getAnalytics()
  const code = data?.data?.microsoft_clarity
  if (!code) return null
  return (
    <Script
      id="microsoft-clarity-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${code}");
        `,
      }}
    />
  )
}

export default MicrosoftClarity
