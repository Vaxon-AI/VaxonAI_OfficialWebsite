import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BrandMark } from '@/components/brand-mark'
import { navItems } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="shell flex h-18 items-center justify-between gap-3 py-4">
        <BrandMark />
        <Link href="/" className="shrink-0 text-sm font-semibold text-slate-700 md:hidden">
          Home
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 lg:gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/products"
          style={{ backgroundColor: '#020618', color: '#f8fafc' }}
          className="primary-action inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3 py-2.5 text-xs font-semibold transition-colors md:px-4 md:text-sm"
        >
          Explore products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  )
}
