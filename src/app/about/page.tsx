import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Vaxon is an Australia-based AI systems studio. Agile, custom-fit, human-centred, human-in-the-loop — the principles behind everything we build.',
  alternates: { canonical: absoluteUrl('/about') },
}

const principles = [
  {
    title: 'Agile',
    lead: 'Working software every week.',
    copy: 'We deliver in small, visible iterations. You judge progress by using the system, not by reading a status report. If a direction is wrong, we find out in days — not at the end of a contract.',
  },
  {
    title: 'Custom-fit',
    lead: 'Built around your workflow, not a template.',
    copy: 'Every team already has a way of working. We design AI systems that fit into it — the tools adapt to people, never the other way around.',
  },
  {
    title: 'Human-centred',
    lead: 'AI assists people. It does not replace judgment.',
    copy: 'The goal is never to remove people from work that needs their judgment. It is to remove the noise around that judgment, so decisions get made faster and with better context.',
  },
  {
    title: 'Human-in-the-loop',
    lead: 'Every automated action stays reviewable.',
    copy: 'Suggestions stay separate from actions. Sources stay attached to answers. Status stays visible. No hidden AI actions — trust is earned through review, not claimed in marketing.',
  },
]

const capabilities = [
  ['AI engineering', 'LLM pipelines, classification systems, retrieval with source attribution, and model-cost architecture.'],
  ['Product design', 'Interfaces where AI output is visible, editable, and reviewable — shipped in real products, not mockups.'],
  ['Workflow research', 'We start from how work actually arrives — email, documents, video — and structure systems around it.'],
]

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="page-kicker">About Vaxon</p>
            <h1 className="page-title">Why Vaxon exists.</h1>
          </div>
          <div>
            <p className="page-intro">
              Vaxon is an Australia-based AI systems studio. We build practical, human-in-the-loop AI for real work — for clients, and in our own products.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              We started with email because that is where commitments, deadlines, and decisions enter daily work. The same thinking now extends to documents, research, and customer conversations.
            </p>
          </div>
        </div>
      </section>

      <section className="paper-band py-16 md:py-24">
        <div className="shell">
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#12162e] md:text-6xl">
            Four principles behind everything we build.
          </h2>
          <div className="mt-14 border-t border-[#dfe2ee]">
            {principles.map((item, index) => (
              <div key={item.title} className="editorial-row">
                <span className="row-index">0{index + 1}</span>
                <div>
                  <h3 className="text-[#12162e]">{item.title}</h3>
                  <p className="mt-3 text-base font-semibold text-[#59628f]">{item.lead}</p>
                </div>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="page-kicker">The team</p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
              A small team that ships.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-white/70">
              AI engineers and product designers who build, launch, and operate real systems — including our own products.
            </p>
          </div>
          <div className="border-t border-[#c7cfec]/15">
            {capabilities.map(([title, copy]) => (
              <div key={title} className="grid gap-3 border-b border-[#c7cfec]/15 py-8 md:grid-cols-[14rem_1fr]">
                <p className="text-lg font-semibold tracking-[-0.02em] text-[#c7cfec]">{title}</p>
                <p className="text-base leading-8 text-white/66">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.035em] text-[#12162e] md:text-5xl">
              See how we put these principles to work.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#4e5573]">
              EmailFlow turns inbox messages into reviewable tasks with source context attached — live, today.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            <Link href="/contact" className="primary-action inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors">
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products/emailflow" className="inline-flex items-center gap-2 text-sm font-semibold text-[#5f6ec7]">
              Explore EmailFlow
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
