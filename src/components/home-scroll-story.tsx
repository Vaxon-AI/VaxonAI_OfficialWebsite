'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import { CtaBand } from '@/components/cta-band'

const services = [
  {
    id: 'workflow-automation',
    title: 'AI Workflow Automation',
    copy: 'Work signals from email and messages become structured, reviewable task flows — nothing disappears into a thread.',
  },
  {
    id: 'document-intelligence',
    title: 'Knowledge & Document Intelligence',
    copy: 'AI reads your files — PDFs, Word, images — tags and organises them, then answers questions with sources attached.',
  },
  {
    id: 'research-intelligence',
    title: 'Research & Content Intelligence',
    copy: 'Web research, summarisation, and video-to-text pipelines that turn scattered content into usable material.',
  },
  {
    id: 'ai-assistants',
    title: 'Custom AI Assistants',
    copy: 'Support chatbots and internal assistants with human-handoff built in — automation that knows its limits.',
  },
]

const principles = [
  {
    title: 'Agile',
    copy: 'Small iterations, working software every week. You see progress, not promises.',
  },
  {
    title: 'Custom-fit',
    copy: 'Built around your workflow, not a template. The system adapts to how your team already works.',
  },
  {
    title: 'Human-centred',
    copy: 'AI assists people. It never replaces judgment, and it never acts where a person should decide.',
  },
  {
    title: 'Human-in-the-loop',
    copy: 'Every automated action stays reviewable, editable, and reversible. No hidden AI actions.',
  },
]

const products = [
  {
    href: '/products/emailflow',
    name: 'EmailFlow',
    status: 'Active product',
    copy: 'Inbox messages become reviewable tasks with priority and source context.',
    cta: 'Explore EmailFlow',
  },
  {
    href: '/products#document-intelligence',
    name: 'Document Intelligence',
    status: 'In development',
    copy: 'AI file classification and retrieval with every answer traced to its source document.',
    cta: 'View case study',
  },
  {
    href: '/products#research-intelligence',
    name: 'Research Intelligence',
    status: 'In development',
    copy: 'Web and video research distilled into clean, translated, citable notes.',
    cta: 'View case study',
  },
]

export function HomeScrollStory() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true')
          }
        })
      },
      { threshold: 0.18 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* 1 — Hero: company claim, not product pitch */}
      <section className="dark-band relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-[#c7cfec]/10" />
        <div className="shell grid min-h-[calc(100svh-73px)] gap-12 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="page-kicker">Vaxon — AI systems studio</p>
            <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl">
              AI that works the way your team works.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-white/70">
              Vaxon builds custom AI workflows for businesses — email, documents, research, and customer support. Our own products are the proof.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5 text-sm font-semibold">
              <Link href="/contact" className="primary-action inline-flex items-center gap-2 rounded-full px-6 py-3 transition-colors">
                Talk to us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products" className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white">
                See our products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="workstream" aria-hidden="true">
            {['Work arrives', 'AI structures it', 'People review', 'Action ships'].map((item, index) => (
              <div key={item} className="workstream-row" style={{ animationDelay: `${index * 180}ms` }}>
                <span className="text-base">{item}</span>
                <i />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 — What we do: editorial numbered rows, light band */}
      <section className="paper-band py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl" data-reveal>
            <p className="page-kicker">What we do</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
              We take on AI projects. These are the ones we&apos;ve shipped.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4e5573]">
              Proof of approach, not the boundary of it — if the problem involves AI, we can scope it.
            </p>
          </div>
          <div className="mt-14 border-t border-[#dfe2ee]">
            {services.map((item, index) => (
              <Link key={item.id} href={`/what-we-do#${item.id}`} className="group block" data-reveal>
                <div className="editorial-row">
                  <span className="row-index">0{index + 1}</span>
                  <h3 className="transition-colors group-hover:text-[#5f6ec7]">{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/what-we-do" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#5f6ec7]" data-reveal>
            How we deliver
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 3 — How we work: methodology, dark band */}
      <section className="dark-band py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl" data-reveal>
            <p className="page-kicker">How we work</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
              Principles before products.
            </h2>
          </div>
          <div className="mt-14 border-t border-[#c7cfec]/15">
            {principles.map((item, index) => (
              <div key={item.title} className="editorial-row editorial-row-dark" data-reveal>
                <span className="row-index">0{index + 1}</span>
                <h3 className="text-white">{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Proof: products as evidence, light band */}
      <section className="bg-white py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl" data-reveal>
            <p className="page-kicker">The proof</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#12162e] md:text-6xl">
              We ship our own products.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4e5573]">
              Everything we build for clients uses the same principles we prove in our own products first.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group flex flex-col rounded-[24px] border border-[#dfe2ee] bg-[#f6f7fa] p-7 transition-shadow hover:soft-shadow"
                data-reveal
              >
                <span className="status-chip self-start">{product.status}</span>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#12162e]">{product.name}</h3>
                <p className="mt-3 flex-1 text-base leading-7 text-[#4e5573]">{product.copy}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5f6ec7]">
                  {product.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — CTA */}
      <CtaBand />
    </>
  )
}
