import type { Metadata } from 'next'
import { BlogStrip } from '@/components/blog-strip'
import { CtaBand } from '@/components/cta-band'
import { HomeScrollStory } from '@/components/home-scroll-story'
import { JsonLd } from '@/components/json-ld'
import { getPosts } from '@/lib/posts'
import { absoluteUrl, site } from '@/lib/site'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'AI that works the way your team works',
  description: 'Vaxon designs human-in-the-loop AI systems for real work — custom AI workflows for email, documents, research, and customer support.',
  alternates: { canonical: absoluteUrl('/') },
}

export default async function Home() {
  const posts = await getPosts()

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
      <BlogStrip posts={posts} />
      <CtaBand />
    </main>
  )
}
