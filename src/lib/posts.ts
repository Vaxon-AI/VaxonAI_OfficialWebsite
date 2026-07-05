import { fetchSanityPosts, sanityConfigured, type SanityPost } from './sanity'

export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  readingMinutes: number
  tags: string[]
}

// Static fallback posts — keep the site's blog alive before Sanity is
// configured. Once an article with the same slug exists in Sanity, the
// Sanity version wins. New posts should be written in Sanity Studio.
export const staticPosts: PostMeta[] = [
  {
    slug: 'why-human-review-makes-ai-automation-trustworthy',
    title: 'Why human review makes AI automation trustworthy',
    description:
      'Automation fails when it hides decisions. The fastest way to make AI trustworthy at work is to keep every automated action reviewable — here is the design pattern we use.',
    date: '2026-07-05',
    readingMinutes: 5,
    tags: ['Human-in-the-loop', 'AI workflows'],
  },
]

export function getStaticPost(slug: string) {
  return staticPosts.find((post) => post.slug === slug)
}

/** All posts for the index/sitemap: Sanity first, static fallback merged in. */
export async function getPosts(): Promise<PostMeta[]> {
  let sanityPosts: SanityPost[] = []
  if (sanityConfigured) {
    try {
      sanityPosts = await fetchSanityPosts()
    } catch (error) {
      console.error('[posts] Sanity fetch failed, using static fallback:', error)
    }
  }

  const sanitySlugs = new Set(sanityPosts.map((post) => post.slug))
  const merged: PostMeta[] = [
    ...sanityPosts,
    ...staticPosts.filter((post) => !sanitySlugs.has(post.slug)),
  ]

  return merged.sort((a, b) => (a.date < b.date ? 1 : -1))
}
