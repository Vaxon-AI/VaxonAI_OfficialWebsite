'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'

const storyPanels = [
  {
    label: 'Intake',
    title: 'Work arrives as messages.',
    copy: 'EmailFlow starts where work already enters: inbox threads, follow-ups, deadlines, approvals, and project context.',
  },
  {
    label: 'Review',
    title: 'AI suggestions stay inspectable.',
    copy: 'Tasks are separated into suggestions and active work so people can review the system before automation goes further.',
  },
  {
    label: 'Context',
    title: 'Source context stays attached.',
    copy: 'The product keeps the email, task, project, and status connected instead of turning work into another loose AI answer.',
  },
]

const capabilities = [
  ['AI Product Development', 'Focused AI products with visible output, editable decisions, and real workflow boundaries.'],
  ['Workflow Automation', 'Structured signals, routing, status, and review before deeper automation.'],
  ['Email Intelligence', 'Inbox classification, task suggestions, due dates, and source-linked project context.'],
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
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="shell grid min-h-[calc(100svh-73px)] gap-12 py-16 md:py-24 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-white/70">Vaxon</p>
            <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl">
              Work systems for AI that people can trust.
            </h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-white/68">
              Vaxon builds AI products around the messy places where work begins. EmailFlow is the first proof: inbox signals become reviewable tasks with context attached.
            </p>
            <div className="mt-9 flex flex-wrap gap-5 text-sm font-semibold">
              <Link href="/products/emailflow" className="inline-flex items-center gap-2 text-white">
                See EmailFlow
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/what-we-do" className="inline-flex items-center gap-2 text-white/62">
                What we do
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="workstream" aria-hidden="true">
            {['Email signal', 'Classification', 'AI suggestion', 'Human review', 'Active task'].map((item, index) => (
              <div key={item} className="workstream-row" style={{ animationDelay: `${index * 180}ms` }}>
                <span>{item}</span>
                <i />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="shell grid gap-10 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <figure className="product-stage" data-reveal>
              <Image
                src="/emailflow-dashboard.png"
                alt="EmailFlow dashboard showing email alerts, task metrics, classification, priority, and completion momentum."
                width={3840}
                height={1958}
                priority
                className="h-auto w-full"
                sizes="(min-width: 1024px) 56vw, 100vw"
              />
            </figure>
          </div>

          <div className="grid gap-6 lg:py-24">
            {storyPanels.map((panel) => (
              <article key={panel.label} className="story-panel" data-reveal>
                <p className="text-sm font-semibold text-[#7b80ff]">{panel.label}</p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">{panel.title}</h2>
                <p className="mt-5 text-base leading-8 text-white/64">{panel.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-[#191c1f] md:py-24">
        <div className="shell">
          <div className="max-w-3xl" data-reveal>
            <p className="text-sm font-semibold text-[#494fdf]">What Vaxon builds</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
              Fewer surfaces. Clearer systems.
            </h2>
          </div>
          <div className="mt-14 border-t border-[#e2e2e7]">
            {capabilities.map(([title, copy], index) => (
              <div key={title} className="capability-line" data-reveal>
                <span className="text-sm font-semibold text-[#494fdf]">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white md:py-24">
        <div className="shell grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
            Build products where AI earns trust through review.
          </h2>
          <Link
            href="/contact"
            style={{ backgroundColor: '#ffffff', color: '#000000' }}
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#c9c9cd]"
          >
            Contact Vaxon
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
