export const site = {
  name: 'Vaxon',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vaxon.ai',
  description:
    'Vaxon designs human-in-the-loop AI systems for real work — custom AI workflows for businesses, proven by our own products.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'vaxon.ai@outlook.com',
}

export const productLinks = [
  { href: '/products/emailflow', label: 'EmailFlow' },
  { href: '/products/document-intelligence', label: 'Document Intelligence' },
  { href: '/products/research-intelligence', label: 'Research Intelligence' },
]

export const serviceLinks = [
  { href: '/services/ai-consulting', label: 'Consulting & Scoping' },
  { href: '/services/custom-ai-development', label: 'Custom Development' },
  { href: '/services/workflow-automation', label: 'Workflow Automation' },
  { href: '/services/ai-integration', label: 'AI Integration' },
  { href: '/services/ai-assistants', label: 'AI Assistants' },
]

export type NavItem = {
  href: string
  label: string
  children?: { href: string; label: string }[]
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', children: serviceLinks },
  { href: '/products', label: 'Products', children: productLinks },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function absoluteUrl(path = '/') {
  return new URL(path, site.url).toString()
}
