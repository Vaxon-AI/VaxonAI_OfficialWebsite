import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'What We Do',
  description:
    'We take on AI projects of any shape — automation, document intelligence, research pipelines, assistants, and problems that do not have a name yet. All human-in-the-loop.',
  alternates: { canonical: absoluteUrl('/what-we-do') },
}

const services = [
  {
    id: 'workflow-automation',
    title: 'AI Workflow Automation',
    pain: 'Work signals arrive as messages, then vanish into threads.',
    copy: 'We turn email- and message-driven work into structured, reviewable task flows: classification, priority, deadlines, and source context — with people approving what becomes active work.',
    proof: { label: 'Proof: EmailFlow, our live product', href: '/products/emailflow' },
  },
  {
    id: 'document-intelligence',
    title: 'Knowledge & Document Intelligence',
    pain: 'Internal knowledge is buried in PDFs, Word files, and image scans nobody can search.',
    copy: 'AI reads your documents — including images — tags and classifies them into an organised knowledge base. Ask a question in plain language; get a summary with the source files cited, every time.',
    proof: { label: 'Proof: Document Intelligence system', href: '/products#document-intelligence' },
  },
  {
    id: 'research-intelligence',
    title: 'Research & Content Intelligence',
    pain: 'Research means hours of tabs, videos, and half-finished notes.',
    copy: 'We build pipelines that search and summarise web content, extract subtitles from video, rewrite them into clean prose, and translate — so raw content becomes usable material.',
    proof: { label: 'Proof: Research Intelligence system', href: '/products#research-intelligence' },
  },
  {
    id: 'ai-assistants',
    title: 'Custom AI Assistants',
    pain: 'Support teams answer the same questions all day; bots without limits make it worse.',
    copy: 'We build customer-facing chatbots and internal assistants grounded in your own knowledge, with human-handoff designed in from day one — automation that knows when to step aside.',
    proof: { label: 'Built on the same review-first principles', href: '/about' },
  },
]

const delivery = [
  {
    phase: 'Proof of concept',
    copy: 'A small, real slice of your workflow, working end-to-end. Weeks, not months — so you can judge with evidence.',
  },
  {
    phase: 'Pilot',
    copy: 'Your team uses it on live work. We iterate weekly on what they actually do, not what a spec assumed.',
  },
  {
    phase: 'Production',
    copy: 'Hardened, monitored, and documented. Human review stays in the loop wherever the cost of an error is real.',
  },
]

export default function WhatWeDoPage() {
  return (
    <main>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'What We Do', item: absoluteUrl('/what-we-do') },
          ],
        }}
      />

      <section className="page-hero">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="page-kicker">What We Do</p>
            <h1 className="page-title">Custom AI systems, built around your workflow.</h1>
          </div>
          <div>
            <p className="page-intro">
              We take on AI projects for businesses — if the problem involves AI, we can scope it. What follows is where we have already shipped working systems: proof of how we work, not the boundary of what we do.
            </p>
            <Link href="/contact" className="primary-action mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors">
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="paper-band pb-16 pt-16 md:pb-24">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="page-kicker">Proven in production</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#12162e] md:text-5xl">
              Where we have already shipped.
            </h2>
          </div>
          <div className="mt-10 border-t border-[#dfe2ee]" />
          {services.map((item, index) => (
            <article key={item.id} id={item.id} className="editorial-row scroll-mt-28">
              <span className="row-index">0{index + 1}</span>
              <div>
                <h3 className="text-[#12162e]">{item.title}</h3>
                <p className="mt-4 text-base font-semibold text-[#59628f]">{item.pain}</p>
              </div>
              <div>
                <p>{item.copy}</p>
                <Link href={item.proof.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#5f6ec7]">
                  {item.proof.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}

          <div className="mt-16 grid gap-8 rounded-[28px] border border-[#dfe2ee] bg-white p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <h3 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#12162e] md:text-4xl">
                Not on the list? That&apos;s normal.
              </h3>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4e5573]">
                Most projects we take on don&apos;t start with a neat category — they start with a messy workflow. If it involves AI — automation, extraction, generation, integration, vision, voice, or something you&apos;re not sure has a name yet — bring it to us and we&apos;ll scope it honestly.
              </p>
            </div>
            <Link href="/contact" className="primary-action inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors">
              Bring us your problem
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="dark-band py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="page-kicker">How we deliver</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
              Small steps, visible every week.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              We work agile: short cycles, working software at every step, and your team reviewing real output — not slideware.
            </p>
          </div>
          <div className="mt-14 border-t border-[#c7cfec]/15">
            {delivery.map((item, index) => (
              <div key={item.phase} className="editorial-row editorial-row-dark">
                <span className="row-index">0{index + 1}</span>
                <h3 className="text-white">{item.phase}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
