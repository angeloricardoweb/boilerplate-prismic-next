/* eslint-disable prettier/prettier */
import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default function robots(): MetadataRoute.Robots {
    const headersList = headers()
    const host = headersList.get('host') || ''

    const isVercel = host.includes('vercel.app') || host.includes('vercel.sh') || host.includes('.vercel.dev')
    if (isVercel) {
        return {
            rules: {
                userAgent: '*',
                disallow: '/',
            },
        }
    }

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/api/', '/_next/', '/favicon.ico', '/*.json$'],
        },
        sitemap: `${host}/sitemap.xml`,
        host, // 🔥 sem https
    }
}
