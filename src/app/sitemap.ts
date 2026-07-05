import type { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'
import { absoluteUrl } from '@/lib/site'

const routes = ['/', '/what-we-do', '/products', '/products/emailflow', '/about', '/blog', '/careers', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticEntries, ...postEntries]
}
