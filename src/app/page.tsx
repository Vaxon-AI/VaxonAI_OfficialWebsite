import type { Metadata } from 'next'
import { HomeScrollStory } from '@/components/home-scroll-story'
import { JsonLd } from '@/components/json-ld'
import { absoluteUrl, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'AI products and workflow systems for modern work',
  description: 'Vaxon builds AI products and workflow systems for people and teams turning everyday work into clear, reviewable operations.',
  alternates: { canonical: absoluteUrl('/') },
}

export default function Home() {
  return (
    <main>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: site.name,
          url: site.url,
          description: site.description,
          logo: absoluteUrl('/vaxon-mark.png'),
        }}
      />
      <HomeScrollStory />
    </main>
  )
}
