import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { fetchSanityPost, fetchSanityPosts, sanityConfigured } from '@/lib/sanity'
import { absoluteUrl, site } from '@/lib/site'

// Revalidate so newly published Sanity posts appear without a redeploy.
export const revalidate = 300

export async function generateStaticParams() {
  if (!sanityConfigured) return []
  try {
    const posts = await fetchSanityPosts()
    return posts.map((post) => ({ slug: post.slug }))
  } catch {
    return []
  }
}

type Params = { slug: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const post = await fetchSanityPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: absoluteUrl(`/blog/${post.slug}`) },
  }
}

const portableComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-lg leading-9 text-[#12162e]">{children}</p>,
    h2: ({ children }) => <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-[#12162e]">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#12162e]">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-[#8c96c8] pl-6 text-lg leading-9 text-[#4e5573]">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="grid gap-3 pl-6 text-lg leading-9 text-[#12162e] [list-style:disc]">{children}</ul>,
    number: ({ children }) => <ol className="grid gap-3 pl-6 text-lg leading-9 text-[#12162e] [list-style:decimal]">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} className="font-semibold text-[#5f6ec7] underline underline-offset-4" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = await fetchSanityPost(slug)
  if (!post) notFound()

  return (
    <main>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: { '@type': 'Organization', name: site.name, url: site.url },
          publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: absoluteUrl('/vaxon-mark.jpg') } },
          mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
        }}
      />

      <section className="page-hero">
        <div className="shell">
          <p className="page-kicker">Blog{post.tags.length ? ` · ${post.tags.join(' · ')}` : ''}</p>
          <h1 className="page-title max-w-4xl">{post.title}</h1>
          <p className="mt-6 text-sm font-semibold text-white/60">
            {new Date(`${post.date}T00:00:00Z`).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })} · {post.readingMinutes} min read
          </p>
        </div>
      </section>

      <article className="bg-white py-16 md:py-20">
        <div className="shell">
          <div className="mx-auto grid max-w-3xl gap-7">
            <PortableText value={post.body} components={portableComponents} />

            <div className="mt-8 border-t border-[#dfe2ee] pt-8">
              <p className="text-base leading-8 text-[#4e5573]">
                Vaxon builds human-in-the-loop AI systems for businesses — workflow automation, document intelligence, research pipelines, and custom assistants.
              </p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#5f6ec7]">
                Talk to us about your workflow
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CtaBand />
    </main>
  )
}
