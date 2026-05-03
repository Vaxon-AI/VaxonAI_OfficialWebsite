import Link from 'next/link'
import { BrandMark } from '@/components/brand-mark'

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
      <div className="shell grid gap-8 pb-8 pt-14 lg:grid-cols-[0.9fr_2.1fr] lg:items-start">
        <div>
          <BrandMark compact />
          <p className="mt-3 max-w-xs text-xs leading-5 text-slate-600">
            Building AI products and workflow systems that turn everyday work into clear, reviewable operations.
          </p>
          <Link href="/contact" className="mt-3 inline-flex text-xs font-semibold text-[#494fdf]">
            Contact Vaxon
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold text-slate-950">{group.title}</p>
              <div className="mt-3 grid gap-2 text-xs text-slate-600">
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
      <div className="shell border-t border-slate-100 py-4 text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Vaxon. All rights reserved.
      </div>
    </footer>
  )
}
