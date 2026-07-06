'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AssistantVisual, DocumentsVisual, ResearchVisual, WorkflowVisual } from '@/components/service-visuals'
import { EmailFlowIllustration } from '@/components/product-illustrations'

const heroWords = ['team', 'inbox', 'documents', 'research', 'support']

const stack = ['Gemini', 'OpenAI', 'Claude', 'Google Cloud', 'Gmail API', 'Vercel', 'Next.js', 'PostgreSQL', 'Prisma', 'Sanity']

const services = [
  {
    id: 'workflow-automation',
    title: 'AI Workflow Automation',
    copy: 'Messages become reviewable task flows — nothing disappears into a thread.',
    visual: <WorkflowVisual />,
  },
  {
    id: 'document-intelligence',
    title: 'Knowledge & Document Intelligence',
    copy: 'AI reads your files, organises them, and answers with sources attached.',
    visual: <DocumentsVisual />,
  },
  {
    id: 'research-intelligence',
    title: 'Research & Content Intelligence',
    copy: 'Web and video research distilled into clean, translated, usable material.',
    visual: <ResearchVisual />,
  },
  {
    id: 'ai-assistants',
    title: 'Custom AI Assistants',
    copy: 'Support bots grounded in your knowledge — with human handoff built in.',
    visual: <AssistantVisual />,
  },
]

const principles = [
  ['Agile', 'Working software every week — progress you can use, not read about.'],
  ['Custom-fit', 'Built around your workflow, not a template.'],
  ['Human-centred', 'AI assists people. It never replaces judgment.'],
  ['Human-in-the-loop', 'Every automated action stays reviewable. No hidden AI actions.'],
]

function useTypewriter(words: string[]) {
  const [text, setText] = useState(words[0])

  useEffect(() => {
    // Reduced motion: keep the static first word; CSS hides the caret.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    let wordIndex = 0
    let charIndex = words[0].length
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const word = words[wordIndex]
      if (!deleting) {
        charIndex += 1
        setText(word.slice(0, charIndex))
        if (charIndex >= word.length) {
          deleting = true
          timer = setTimeout(tick, 2200)
          return
        }
        timer = setTimeout(tick, 90)
      } else {
        charIndex -= 1
        setText(word.slice(0, charIndex))
        if (charIndex <= 0) {
          deleting = false
          wordIndex = (wordIndex + 1) % words.length
        }
        timer = setTimeout(tick, deleting ? 45 : 350)
      }
    }

    timer = setTimeout(tick, 2200)
    return () => clearTimeout(timer)
  }, [words])

  return text
}

export function HomeScrollStory() {
  const text = useTypewriter(heroWords)

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
      {/* 1 — Hero: company claim with rotating word */}
      <section className="dark-band relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-[#c7cfec]/10" />
        <div className="shell grid min-h-[72svh] gap-12 py-16 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="page-kicker">Vaxon — AI systems studio</p>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-5xl">
              AI that works the way your{' '}
              <span className="text-[#c7cfec]">
                {text}
                <span className="type-caret" />
              </span>{' '}
              works.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/70">
              Vaxon builds custom AI workflows for businesses — email, documents, research, and customer support. Our own products are the proof.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm font-semibold">
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

          <EmailFlowIllustration />
        </div>
      </section>

      {/* 2 — Stack marquee */}
      <section className="border-b border-[#dfe2ee] bg-white py-8">
        <div className="shell">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#8c96c8]">
            The stack we build on
          </p>
          <div className="marquee mt-5" aria-hidden="true">
            <div className="marquee-track">
              {[...stack, ...stack].map((item, index) => (
                <span key={`${item}-${index}`} className="marquee-chip">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 — What we do: diagram-first grid */}
      <section className="paper-band py-16 md:py-20">
        <div className="shell">
          <div className="max-w-3xl" data-reveal>
            <p className="page-kicker">What we do</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl">
              We take on AI projects. These are the ones we&apos;ve shipped.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#4e5573]">
              Proof of approach, not the boundary of it — if the problem involves AI, we can scope it.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((item) => (
              <Link key={item.id} href={`/services#${item.id}`} className="group grid content-start gap-4" data-reveal>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#12162e] transition-colors group-hover:text-[#5f6ec7]">
                    {item.title}
                    <ArrowRight className="ml-2 inline h-4 w-4 align-[-2px] transition-transform group-hover:translate-x-0.5" />
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-[#4e5573]">{item.copy}</p>
                </div>
                {item.visual}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — How we work: slim principles */}
      <section className="bg-white py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal>
            <p className="page-kicker">How we work</p>
            <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#12162e] md:text-4xl">
              Principles before products.
            </h2>
          </div>
          <div className="border-t border-[#dfe2ee]" data-reveal>
            {principles.map(([title, copy], index) => (
              <div key={title} className="grid gap-2 border-b border-[#dfe2ee] py-5 md:grid-cols-[3rem_11rem_1fr] md:items-baseline">
                <span className="text-sm font-bold text-[#8c96c8]">0{index + 1}</span>
                <h3 className="text-base font-semibold tracking-[-0.02em] text-[#12162e]">{title}</h3>
                <p className="text-sm leading-7 text-[#4e5573]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Proof: products */}
      <section className="paper-band py-16 md:py-20">
        <div className="shell">
          <div className="max-w-3xl" data-reveal>
            <p className="page-kicker">The proof</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#12162e] md:text-4xl">
              We ship our own products.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: '/products/emailflow', name: 'EmailFlow', status: 'Active product', copy: 'Inbox messages become reviewable tasks with priority and source context.', cta: 'Explore EmailFlow' },
              { href: '/products#document-intelligence', name: 'Document Intelligence', status: 'Shipped', copy: 'AI file classification and retrieval — every answer cites its source.', cta: 'View case study' },
              { href: '/products#research-intelligence', name: 'Research Intelligence', status: 'Shipped', copy: 'Web and video research distilled into clean, citable notes.', cta: 'View case study' },
              { href: '/products#tax-aware', name: 'Tax Aware', status: 'In development', copy: 'Everyday expenses become tax-ready records with evidence attached.', cta: 'Learn about Tax Aware' },
            ].map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group flex flex-col rounded-[20px] border border-[#dfe2ee] bg-white p-6 transition-shadow hover:soft-shadow"
                data-reveal
              >
                <span className="status-chip self-start">{product.status}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-[#12162e]">{product.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-[#4e5573]">{product.copy}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#5f6ec7]">
                  {product.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
