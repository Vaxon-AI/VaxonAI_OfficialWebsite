import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { absoluteUrl, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Vaxon and help build AI productivity products for modern work.',
  alternates: { canonical: absoluteUrl('/careers') },
}

export default function CareersPage() {
  return (
    <main>
      <section className="bg-white py-16">
        <div className="shell grid gap-10 border-b border-slate-200 pb-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-semibold text-cyan-700">Careers</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              We are early and selective.
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600">
            Vaxon is not listing formal roles yet. We are interested in people who care about product taste, engineering discipline, and useful AI systems.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <h2 className="text-2xl font-semibold tracking-[-0.035em] text-slate-950">What we value</h2>
          <div className="border-t border-slate-200">
            {['Tasteful product judgment', 'High agency engineering', 'Clear writing and structured thinking', 'Respect for privacy and user control'].map((item) => (
              <p key={item} className="border-b border-slate-200 py-5 text-sm font-semibold text-slate-950">{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-rule bg-white py-16">
        <div className="shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <h2 className="text-2xl font-semibold tracking-[-0.035em] text-slate-950">How to reach us</h2>
          <div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              If you want to work on product design, AI workflows, frontend systems, or applied AI engineering, send a short note with what you have built and why this problem matters to you.
            </p>
            <Link href={`mailto:${site.email}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
              Email Vaxon
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
