import Link from 'next/link'
import { BrandMark } from '@/components/brand-mark'

const footerGroups = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/careers', label: 'Careers' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'What We Do',
    links: [
      { href: '/what-we-do#workflow-automation', label: 'AI Workflow Automation' },
      { href: '/what-we-do#document-intelligence', label: 'Knowledge & Document Intelligence' },
      { href: '/what-we-do#research-intelligence', label: 'Research & Content Intelligence' },
      { href: '/what-we-do#ai-assistants', label: 'Custom AI Assistants' },
    ],
  },
  {
    title: 'Products',
    links: [
      { href: '/products/emailflow', label: 'EmailFlow' },
      { href: '/products', label: 'Our products' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dfe2ee] bg-white">
      <div className="shell grid gap-8 pb-8 pt-14 lg:grid-cols-[0.9fr_2.1fr] lg:items-start">
        <div>
          <BrandMark compact />
          <p className="mt-3 max-w-xs text-xs leading-5 text-[#4e5573]">
            Human-in-the-loop AI systems for real work. We build custom AI workflows for businesses — and ship our own products to prove they work.
          </p>
          <Link href="/contact" className="mt-3 inline-flex text-xs font-semibold text-[#5f6ec7]">
            Talk to us
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold text-[#12162e]">{group.title}</p>
              <div className="mt-3 grid gap-2 text-xs text-[#4e5573]">
                {group.links.map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-[#12162e]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="shell border-t border-[#eceef5] py-4 text-xs text-[#4e5573]">
        &copy; {new Date().getFullYear()} Vaxon. All rights reserved.
      </div>
    </footer>
  )
}
