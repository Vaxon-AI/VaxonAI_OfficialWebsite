import type { Metadata } from 'next'
import { HomeScrollStory } from '@/components/home-scroll-story'
import { JsonLd } from '@/components/json-ld'
import { absoluteUrl, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'AI that works the way your team works',
  description: 'Vaxon designs human-in-the-loop AI systems for real work — custom AI workflows for email, documents, research, and customer support.',
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
          logo: absoluteUrl('/vaxon-mark.jpg'),
        }}
      />
      <HomeScrollStory />
    </main>
  )
}
