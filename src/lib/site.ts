export const site = {
  name: 'Vaxon',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vaxon.ai',
  description:
    'Vaxon designs human-in-the-loop AI systems for real work — custom AI workflows for businesses, proven by our own products.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'vaxon.ai@outlook.com',
}

export const productLinks = [
  { href: '/products/emailflow', label: 'EmailFlow' },
  { href: '/products#document-intelligence', label: 'Document Intelligence' },
  { href: '/products#research-intelligence', label: 'Research Intelligence' },
  { href: '/products#tax-aware', label: 'Tax Aware' },
]

export const serviceLinks = [
  { href: '/services#workflow-automation', label: 'Workflow Automation' },
  { href: '/services#document-intelligence', label: 'Document Intelligence' },
  { href: '/services#research-intelligence', label: 'Research & Content' },
  { href: '/services#ai-assistants', label: 'AI Assistants' },
]

export type NavItem = {
  href: string
  label: string
  children?: { href: string; label: string }[]
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', children: serviceLinks },
  { href: '/products', label: 'Products', children: [...productLinks, { href: '/products', label: 'All products' }] },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function absoluteUrl(path = '/') {
  return new URL(path, site.url).toString()
}
