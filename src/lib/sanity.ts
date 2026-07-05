import { createClient, groq, type PortableTextBlock } from 'next-sanity'

// Required env var (site works without it — blog falls back to the
// static posts in src/lib/posts.ts until Sanity is configured):
//   NEXT_PUBLIC_SANITY_PROJECT_ID  — from sanity.io/manage
//   NEXT_PUBLIC_SANITY_DATASET     — optional, defaults to "production"
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const sanityConfigured = Boolean(projectId)

const client = sanityConfigured
  ? createClient({ projectId, dataset, apiVersion: '2026-07-01', useCdn: true })
  : null

export type SanityPost = {
  slug: string
  title: string
  description: string
  date: string
  readingMinutes: number
  tags: string[]
  body: PortableTextBlock[]
}

const postFields = groq`{
  "slug": slug.current,
  title,
  description,
  "date": publishedAt,
  "readingMinutes": coalesce(readingMinutes, 5),
  "tags": coalesce(tags, []),
  body
}`

export async function fetchSanityPosts(): Promise<SanityPost[]> {
  if (!client) return []
  return client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${postFields}`,
  )
}

export async function fetchSanityPost(slug: string): Promise<SanityPost | null> {
  if (!client) return null
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] ${postFields}`,
    { slug },
  )
}
