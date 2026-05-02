import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { absoluteUrl, site } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Vaxon | AI products and workflow systems for modern work',
    template: '%s | Vaxon',
  },
  description: site.description,
  alternates: {
    canonical: absoluteUrl('/'),
  },
  openGraph: {
    title: 'Vaxon | AI products and workflow systems for modern work',
    description: site.description,
    url: site.url,
    siteName: 'Vaxon',
    images: [{ url: '/vaxon-mark.png', width: 1024, height: 1024, alt: 'Vaxon mark' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaxon | AI products and workflow systems for modern work',
    description: site.description,
    images: ['/vaxon-mark.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
