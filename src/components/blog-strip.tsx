import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { PostMeta } from '@/lib/posts'

function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export function BlogStrip({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null

  return (
    <section className="paper-band py-14 md:py-20">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="page-kicker">From the blog</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#12162e] md:text-3xl">
              Latest thinking.
            </h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#5f6ec7]">
            All posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-[20px] border border-[#dfe2ee] bg-white p-6 transition-shadow hover:soft-shadow"
            >
              <p className="text-xs font-semibold text-[#8c96c8]">
                {formatDate(post.date)} · {post.readingMinutes} min
              </p>
              <h3 className="mt-3 flex-1 text-lg font-semibold leading-snug tracking-[-0.02em] text-[#12162e] transition-colors group-hover:text-[#5f6ec7]">
                {post.title}
              </h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#5f6ec7]">
                Read
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
