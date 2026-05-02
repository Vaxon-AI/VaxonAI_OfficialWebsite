export const site = {
  name: 'Vaxon',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vaxon.ai',
  description: 'Vaxon builds AI products and workflow systems for modern work.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'vaxon.ai@outlook.com',
}

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/what-we-do', label: 'What We Do' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

export function absoluteUrl(path = '/') {
  return new URL(path, site.url).toString()
}
