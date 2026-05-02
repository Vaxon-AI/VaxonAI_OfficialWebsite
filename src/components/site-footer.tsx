import Link from 'next/link'
import { BrandMark } from '@/components/brand-mark'
import { site } from '@/lib/site'

const footerGroups = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/careers', label: 'Careers' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'What We Do',
    links: [
      { href: '/what-we-do#ai-product-development', label: 'AI Product Development' },
      { href: '/what-we-do#workflow-automation', label: 'Workflow Automation' },
      { href: '/what-we-do#email-task-intelligence', label: 'Email Intelligence' },
    ],
  },
  {
    title: 'Product',
    links: [
      { href: '/products/emailflow', label: 'EmailFlow' },
      { href: '/products', label: 'Product directory' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="shell grid gap-10 py-14 lg:grid-cols-[1.15fr_2fr]">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600">
            Building AI products and workflow systems that turn everyday work into clear, reviewable operations.
          </p>
          <Link href={`mailto:${site.email}`} className="mt-5 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-800">
            {site.email}
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold text-slate-950">{group.title}</p>
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                {group.links.map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-slate-950">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="shell border-t border-slate-100 py-5 text-xs text-slate-500">
        © {new Date().getFullYear()} Vaxon. All rights reserved.
      </div>
    </footer>
  )
}
