import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { AssistantVisual, DocumentsVisual, ResearchVisual, WorkflowVisual } from '@/components/service-visuals'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'We take on AI projects of any shape — automation, document intelligence, research pipelines, assistants, and problems that do not have a name yet. All human-in-the-loop.',
  alternates: { canonical: absoluteUrl('/services') },
}

const services = [
  {
    id: 'workflow-automation',
    title: 'AI Workflow Automation',
    pain: 'Work signals arrive as messages, then vanish into threads.',
    copy: 'We turn email- and message-driven work into structured, reviewable task flows: classification, priority, deadlines, and source context — with people approving what becomes active work.',
    proof: { label: 'Proof: EmailFlow, our live product', href: '/products/emailflow' },
    visual: <WorkflowVisual />,
  },
  {
    id: 'document-intelligence',
    title: 'Knowledge & Document Intelligence',
    pain: 'Internal knowledge is buried in PDFs, Word files, and image scans nobody can search.',
    copy: 'AI reads your documents — including images — tags and classifies them into an organised knowledge base. Ask a question in plain language; get a summary with the source files cited, every time.',
    proof: { label: 'Proof: Document Intelligence system', href: '/products#document-intelligence' },
    visual: <DocumentsVisual />,
  },
  {
    id: 'research-intelligence',
    title: 'Research & Content Intelligence',
    pain: 'Research means hours of tabs, videos, and half-finished notes.',
    copy: 'We build pipelines that search and summarise web content, extract subtitles from video, rewrite them into clean prose, and translate — so raw content becomes usable material.',
    proof: { label: 'Proof: Research Intelligence system', href: '/products#research-intelligence' },
    visual: <ResearchVisual />,
  },
  {
    id: 'ai-assistants',
    title: 'Custom AI Assistants',
    pain: 'Support teams answer the same questions all day; bots without limits make it worse.',
    copy: 'We build customer-facing chatbots and internal assistants grounded in your own knowledge, with human-handoff designed in from day one — automation that knows when to step aside.',
    proof: { label: 'Built on the same review-first principles', href: '/about' },
    visual: <AssistantVisual />,
  },
]

const delivery = [
  {
    phase: 'Proof of concept',
    copy: 'A small, real slice of your workflow, working end-to-end. Weeks, not months.',
  },
  {
    phase: 'Pilot',
    copy: 'Your team uses it on live work. We iterate weekly on what they actually do.',
  },
  {
    phase: 'Production',
    copy: 'Hardened, monitored, documented. Human review stays wherever errors cost real money.',
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
            { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services') },
          ],
        }}
      />

      <section className="page-hero">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="page-kicker">Services</p>
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

      {/* Services: alternating copy + diagram */}
      <section className="paper-band py-16 md:py-20">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="page-kicker">Proven in production</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#12162e] md:text-4xl">
              Where we have already shipped.
            </h2>
          </div>
          <div className="mt-12 grid gap-14">
            {services.map((item, index) => (
              <article
                key={item.id}
                id={item.id}
                className={`scroll-mt-28 grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div>
                  <p className="text-sm font-bold text-[#8c96c8]">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-[#12162e] md:text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm font-semibold text-[#59628f]">{item.pain}</p>
                  <p className="mt-3 max-w-xl text-base leading-7 text-[#4e5573]">{item.copy}</p>
                  <Link href={item.proof.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#5f6ec7]">
                    {item.proof.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                {item.visual}
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-8 rounded-[24px] border border-[#dfe2ee] bg-white p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#12162e] md:text-3xl">
                Not on the list? That&apos;s normal.
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[#4e5573]">
                Most projects don&apos;t start with a neat category — they start with a messy workflow. If it involves AI — automation, extraction, generation, integration, vision, voice, or something without a name yet — bring it to us and we&apos;ll scope it honestly.
              </p>
            </div>
            <Link href="/contact" className="primary-action inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors">
              Bring us your problem
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Delivery: light stepper */}
      <section className="bg-white py-16 md:py-20">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="page-kicker">How we deliver</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#12162e] md:text-4xl">
              Small steps, visible every week.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#4e5573]">
              We work agile: short cycles, working software at every step, your team reviewing real output — not slideware.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {delivery.map((item, index) => (
              <div key={item.phase} className="relative rounded-[20px] border border-[#dfe2ee] bg-[#f6f7fa] p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#5f6ec7] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  {index < delivery.length - 1 && (
                    <span className="hidden h-px flex-1 bg-[#dfe2ee] md:block" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-[#12162e]">{item.phase}</h3>
                <p className="mt-2 text-sm leading-6 text-[#4e5573]">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
