import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { posts } from '@/lib/posts'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Notes from the Vaxon team on human-in-the-loop AI, workflow automation, and building AI systems people can actually trust.',
  alternates: { canonical: absoluteUrl('/blog') },
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default function BlogIndexPage() {
  return (
    <main>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('/blog') },
          ],
        }}
      />

      <section className="page-hero">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="page-kicker">Blog</p>
            <h1 className="page-title">Notes on AI that earns trust.</h1>
          </div>
          <p className="page-intro">
            How we think about human-in-the-loop AI, workflow automation, and the difference between systems people trust and systems people tolerate.
          </p>
        </div>
      </section>

      <section className="paper-band py-16 md:py-24">
        <div className="shell">
          <div className="border-t border-[#dfe2ee]">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block border-b border-[#dfe2ee] py-10">
                <div className="grid gap-4 md:grid-cols-[11rem_1fr]">
                  <div className="text-sm font-semibold text-[#59628f]">
                    <p>{formatDate(post.date)}</p>
                    <p className="mt-1 font-medium text-[#8c96c8]">{post.readingMinutes} min read</p>
                  </div>
                  <div>
                    <h2 className="max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#12162e] transition-colors group-hover:text-[#5f6ec7] md:text-4xl">
                      {post.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-[#4e5573]">{post.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#5f6ec7]">
                      Read article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
