import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CtaBand() {
  return (
    <section className="dark-band">
      <div className="shell grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-center md:py-20">
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.035em] md:text-5xl">
            Have a workflow that AI should be handling?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/66">
            Tell us about it — no pitch deck required. We reply to every serious message.
          </p>
        </div>
        <Link
          href="/contact"
          className="primary-action inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors"
        >
          Talk to us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
