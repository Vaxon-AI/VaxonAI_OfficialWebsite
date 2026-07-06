import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Vaxon and help build AI productivity products for modern work.',
  alternates: { canonical: absoluteUrl('/careers') },
}

const values = ['Product taste', 'Engineering agency', 'Clear writing', 'User control']

export default function CareersPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="page-kicker">Careers</p>
            <h1 className="page-title">Early, selective, product-minded.</h1>
          </div>
          <p className="page-intro">
            Vaxon is not listing formal roles yet. We are interested in people who care about product taste, engineering discipline, and useful AI systems.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#12162e] md:text-4xl">
            What we value.
          </h2>
          <div className="plain-line-list">
            {values.map((item, index) => (
              <div key={item} className="grid gap-4 py-7 md:grid-cols-[5rem_1fr]">
                <p className="text-sm font-semibold text-[#5f6ec7]">0{index + 1}</p>
                <p className="text-2xl font-semibold tracking-[-0.035em] text-[#12162e]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0e2a] py-16 text-white md:py-24">
        <div className="shell grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.045em] md:text-4xl">
              Send what you have built.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/64">
              If you want to work on product design, AI workflows, frontend systems, or applied AI engineering, send a short note with why this problem matters to you.
            </p>
          </div>
          <Link
            href="/contact"
            style={{ backgroundColor: '#ffffff', color: '#000000' }}
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#c9c9cd]"
          >
            Contact Vaxon
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
