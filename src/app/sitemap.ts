import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/posts'
import { absoluteUrl } from '@/lib/site'

const routes = [
  '/',
  '/services',
  '/services/workflow-automation',
  '/services/document-intelligence',
  '/services/research-intelligence',
  '/services/ai-assistants',
  '/products',
  '/products/emailflow',
  '/products/document-intelligence',
  '/products/research-intelligence',
  '/about',
  '/blog',
  '/careers',
  '/contact',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))

  const posts = await getPosts()
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticEntries, ...postEntries]
}
