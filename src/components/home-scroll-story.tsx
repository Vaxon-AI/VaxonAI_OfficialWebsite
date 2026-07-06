'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { AssistantVisual, BuildVisual, ConsultingVisual, IntegrationVisual, WorkflowVisual } from '@/components/service-visuals'

const heroWords = ['team', 'inbox', 'documents', 'research', 'support']

const beliefs = [
  'Human-in-the-loop',
  'Source-linked answers',
  'No hidden AI actions',
  'Review before automation',
  'Working software weekly',
  'Built around your workflow',
  'Honest scoping',
  'Multi-model, no lock-in',
]

const services = [
  {
    id: 'ai-consulting',
    title: 'AI Consulting & Scoping',
    copy: 'Where is AI actually worth it? We audit, test on your data, and answer honestly.',
    visual: <ConsultingVisual />,
  },
  {
    id: 'custom-ai-development',
    title: 'Custom AI Development',
    copy: 'Bespoke AI systems built end-to-end — pipeline, interface, and review mechanics.',
    visual: <BuildVisual />,
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    copy: 'Repetitive processes automated with AI — every step stays reviewable.',
    visual: <WorkflowVisual />,
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    copy: 'AI wired into your existing product or tools — no rewrite, no lock-in.',
    visual: <IntegrationVisual />,
  },
  {
    id: 'ai-assistants',
    title: 'AI Assistants',
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

// Cursor-following spotlight: lerped via rAF so the glow trails the
// pointer with inertia. Desktop pointers only; reduced-motion opts out.
function useSpotlight() {
  const sectionRef = useRef<HTMLElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const glow = glowRef.current
    if (!section || !glow) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let targetX = 0
    let targetY = 0
    let x = 0
    let y = 0
    let raf = 0
    let running = false

    const loop = () => {
      x += (targetX - x) * 0.08
      y += (targetY - y) * 0.08
      glow.style.transform = `translate3d(${x - 130}px, ${y - 130}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    const handleMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect()
      targetX = event.clientX - rect.left
      targetY = event.clientY - rect.top
      if (!running) {
        running = true
        x = targetX
        y = targetY
        loop()
      }
      glow.style.opacity = '0.34'
    }

    const handleLeave = () => {
      glow.style.opacity = '0'
    }

    section.addEventListener('mousemove', handleMove)
    section.addEventListener('mouseleave', handleLeave)
    return () => {
      cancelAnimationFrame(raf)
      section.removeEventListener('mousemove', handleMove)
      section.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return { sectionRef, glowRef }
}

export function HomeScrollStory() {
  const text = useTypewriter(heroWords)
  const { sectionRef, glowRef } = useSpotlight()

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
      {/* 1 — Hero: centred type + drifting glow + cursor spotlight */}
      <section ref={sectionRef} className="dark-band relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-[#c7cfec]/10" />
        <div ref={glowRef} aria-hidden="true" className="hero-spotlight" />
        <div
          aria-hidden="true"
          className="hero-glow"
          style={{ top: '-12%', right: '-4%', width: 540, height: 540, background: '#5f6ec7' }}
        />
        <div
          aria-hidden="true"
          className="hero-glow"
          style={{ bottom: '-18%', left: '-8%', width: 440, height: 440, background: '#8c96c8', animationDelay: '-11s', animationDuration: '27s' }}
        />
        <div className="shell relative flex min-h-[64svh] flex-col items-center justify-center py-16 text-center md:py-20">
          <p className="page-kicker">Vaxon — AI systems studio</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-5xl">
            AI that works the way your{' '}
            <span className="text-[#c7cfec]">
              {text}
              <span className="type-caret" />
            </span>{' '}
            works.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/70">
            Vaxon builds custom AI workflows for businesses — email, documents, research, and customer support. Our own products are the proof.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm font-semibold">
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
      </section>

      {/* 2 — Beliefs marquee */}
      <section className="border-b border-[#dfe2ee] bg-white py-8">
        <div className="shell">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#8c96c8]">
            How we build
          </p>
          <div className="marquee mt-5" aria-hidden="true">
            <div className="marquee-track">
              {[0, 1].map((group) => (
                <div key={group} className="marquee-group">
                  {beliefs.map((item) => (
                    <span key={item} className="marquee-chip">{item}</span>
                  ))}
                </div>
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
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
              <Link key={item.id} href={`/services/${item.id}`} className="group grid content-start gap-4" data-reveal>
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
            <Link
              href="/contact"
              className="group grid content-center gap-3 rounded-[22px] border border-dashed border-[#c9cfe4] bg-white/60 p-7 text-center transition-colors hover:border-[#5f6ec7]"
              data-reveal
            >
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#12162e]">Something else?</h3>
              <p className="text-sm leading-6 text-[#4e5573]">
                If it involves AI, we can scope it. The list above is proof, not the boundary.
              </p>
              <span className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#5f6ec7]">
                Bring us your problem
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
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
              { href: '/products/document-intelligence', name: 'Document Intelligence', status: 'Shipped', copy: 'AI file classification and retrieval — every answer cites its source.', cta: 'View product' },
              { href: '/products/research-intelligence', name: 'Research Intelligence', status: 'Shipped', copy: 'Web and video research distilled into clean, citable notes.', cta: 'View product' },
              { href: '/products', name: 'Tax Aware', status: 'In development', copy: 'A simpler way to stay on top of your own tax. Details soon.', cta: 'Coming soon' },
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
