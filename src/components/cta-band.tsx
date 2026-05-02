import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CtaBand() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="shell grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.035em] text-slate-950 md:text-5xl">
            Build with people who treat AI as a product system, not a feature label.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
            Talk to Vaxon about customers, partnerships, investment conversations, or future roles.
          </p>
        </div>
        <Link
          href="/contact"
          style={{ backgroundColor: '#020618', color: '#f8fafc' }}
          className="primary-action inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors"
        >
          Contact us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
