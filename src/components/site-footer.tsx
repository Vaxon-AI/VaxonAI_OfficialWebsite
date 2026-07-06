import Link from 'next/link'
import { BrandMark } from '@/components/brand-mark'
import { productLinks, site } from '@/lib/site'

const footerGroups = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/blog', label: 'Blog' },
      { href: '/careers', label: 'Careers' },
    ],
  },
  {
    title: 'Products',
    links: [...productLinks, { href: '/products', label: 'All products' }],
  },
  {
    title: 'Get in touch',
    links: [
      { href: '/contact', label: 'Talk to us' },
      { href: `mailto:${site.email}`, label: site.email },
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
            Human-in-the-loop AI systems for real work. If the problem involves AI, we can scope it — our own products are the proof.
          </p>
          <p className="mt-3 text-xs text-[#8c96c8]">Australia · working worldwide</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold text-[#12162e]">{group.title}</p>
              <div className="mt-3 grid gap-2 text-xs text-[#4e5573]">
                {group.links.map((item) => (
                  <Link key={`${item.href}-${item.label}`} href={item.href} className="hover:text-[#12162e]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="shell flex flex-wrap items-center justify-between gap-3 border-t border-[#eceef5] py-4 text-xs text-[#4e5573]">
        <span>&copy; {new Date().getFullYear()} Vaxon. All rights reserved.</span>
        <span className="text-[#8c96c8]">No hidden AI actions — human review by design.</span>
      </div>
    </footer>
  )
}
