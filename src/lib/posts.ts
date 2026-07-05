export type PostMeta = {
  slug: string
  title: string
  description: string
  date: string
  readingMinutes: number
  tags: string[]
}

// Post bodies live in src/app/blog/<slug>/page.tsx so each article
// keeps full layout control without an MDX/CMS dependency.
// Add new posts here (newest first) and create the matching route.
export const posts: PostMeta[] = [
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

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}
