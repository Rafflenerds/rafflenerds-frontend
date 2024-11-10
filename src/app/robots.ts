import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        // todo: update this to the actual sitemap
        sitemap: 'https://acme.com/sitemap.xml',
    }
}