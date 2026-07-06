import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
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
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className="inline-flex items-center gap-1 py-2 transition-colors hover:text-white">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="nav-dropdown min-w-56 rounded-2xl border border-[#c7cfec]/15 bg-[#131845] p-2 shadow-[0_24px_60px_rgba(11,14,42,0.5)]">
                    {item.children.map((child) => (
                      <Link
                        key={`${child.href}-${child.label}`}
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="py-2 transition-colors hover:text-white">
                {item.label}
              </Link>
            ),
          )}
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
