import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BrandMark } from '@/components/brand-mark'
import { navItems } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#c7cfec]/15 bg-[#0b0e2a]/95 text-white backdrop-blur">
      <div className="shell flex h-18 items-center justify-between gap-3 py-4">
        <BrandMark />
        <Link href="/" className="shrink-0 text-sm font-semibold text-white/80 md:hidden">
          Home
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-white/70 lg:gap-7 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="primary-action inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3 py-2.5 text-xs font-semibold transition-colors md:px-4 md:text-sm"
        >
          Talk to us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  )
}
