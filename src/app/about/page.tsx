import type { Metadata } from 'next'
import { CtaBand } from '@/components/cta-band'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn why Vaxon exists, why it starts with email, and the product principles behind its AI workflow systems.',
  alternates: { canonical: absoluteUrl('/about') },
}

const principles = [
  ['Start with real work', 'Build where people already feel the workflow pain, then make the surrounding system clearer.'],
  ['Make AI inspectable', 'Users should see what the product inferred, where it came from, and how to correct it.'],
  ['Earn automation', 'Automation should follow review and trust, not replace judgment before the product has earned it.'],
  ['Preserve context', 'Useful AI products should keep source material, task status, and project context connected.'],
]

export default function AboutPage() {
  return (
    <main>
      <section className="bg-white py-14">
        <div className="shell grid gap-10 border-b border-slate-200 pb-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-semibold text-cyan-700">About Vaxon</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Why Vaxon exists.
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              Vaxon is an Australia-based early-stage AI product company. We build practical systems that help people understand, prioritize, and act on work without turning AI into another noisy layer.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              The company starts with email because email is still where commitments, deadlines, approvals, and decisions enter daily work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 md:text-5xl">
            We are building the work layer between communication and execution.
          </h2>
          <div className="border-t border-slate-200">
            <div className="border-b border-slate-200 py-6">
              <p className="text-sm font-semibold text-slate-950">The belief</p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                AI becomes useful when it helps people see what work exists, what it means, what status it is in, and what action is safe to take next.
              </p>
            </div>
            <div className="border-b border-slate-200 py-6">
              <p className="text-sm font-semibold text-slate-950">Why email first</p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                Email is not fashionable, but it is honest. It carries real work from customers, partners, investors, suppliers, teams, and institutions. Making that work structured is a practical starting point.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-rule bg-white py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
            Product principles
          </h2>
          <div className="border-t border-slate-200">
            {principles.map(([title, copy], index) => (
              <div key={title} className="grid gap-4 border-b border-slate-200 py-7 md:grid-cols-[5rem_12rem_1fr]">
                <p className="text-sm font-semibold text-cyan-700">0{index + 1}</p>
                <p className="text-sm font-semibold text-slate-950">{title}</p>
                <p className="text-sm leading-7 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
