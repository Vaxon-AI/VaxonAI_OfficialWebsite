import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { SectionHeading } from '@/components/section-heading'
import { absoluteUrl, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'AI products and workflow systems for modern work',
  description: 'Vaxon builds AI products and workflow systems for people and teams turning everyday work into clear, reviewable operations.',
  alternates: { canonical: absoluteUrl('/') },
}

const capabilities = [
  ['AI Product Development', 'Product-led AI systems that are usable, reviewable, and grounded in real workflows.', '/what-we-do#ai-product-development'],
  ['Workflow Automation', 'Structured work queues, routing, status, and context preservation before deeper automation.', '/what-we-do#workflow-automation'],
  ['Email Intelligence', 'Inbox classification, task extraction, and source-linked project context through EmailFlow.', '/what-we-do#email-task-intelligence'],
]

export default function Home() {
  return (
    <main>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: site.name,
          url: site.url,
          description: site.description,
          logo: absoluteUrl('/vaxon-mark.png'),
          email: site.email,
        }}
      />

      <section className="bg-white py-14 md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[0.66fr_1.34fr]">
          <div className="border-t border-slate-950 pt-5">
            <p className="text-sm font-semibold text-slate-950">Vaxon</p>
            <h1 className="mt-5 max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 md:text-5xl">
              AI products and workflow systems for modern work.
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-slate-600">
              Vaxon builds the work layer between messy communication and clear execution. EmailFlow is the first product proof.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-slate-600">
              <Link href="/products/emailflow" className="inline-flex items-center gap-2 font-semibold text-cyan-700">
                EmailFlow product proof
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-slate-950">
                Contact Vaxon
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="border-t border-slate-200">
            {capabilities.map(([title, copy, href], index) => (
              <Link key={title} href={href} className="group grid gap-4 border-b border-slate-200 py-7 transition-colors hover:bg-slate-50 md:grid-cols-[4rem_0.55fr_1fr_auto] md:px-4">
                <span className="text-sm font-semibold text-cyan-700">0{index + 1}</span>
                <span className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{title}</span>
                <span className="text-sm leading-7 text-slate-600">{copy}</span>
                <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-cyan-700" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-rule bg-slate-950 py-16 text-white md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <SectionHeading
            title="Featured product: EmailFlow"
            description="EmailFlow turns inbox-driven work into classified emails, AI task suggestions, active work, and project context. It is Vaxon's first product proof because email is where work already enters the system."
            invert
          />
          <div>
            <p className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-4xl">
              A real workspace for classifying email, reviewing AI task suggestions, and tracking work with source context attached.
            </p>
            <Link href="/products/emailflow" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
              Read the product detail
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="editorial-rule bg-white py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
            Why start with email and workflow?
          </h2>
          <div className="grid gap-0 border-t border-slate-200">
            {[
              ['Email is the intake layer', 'Important work still arrives as messages, attachments, approvals, intros, reminders, and decisions.'],
              ['Workflow is the product surface', 'The value is not a generated answer. It is the system that tells users what matters and what can happen next.'],
              ['Review builds trust', 'Vaxon products make AI suggestions visible before they become active work or deeper automation.'],
            ].map(([title, copy]) => (
              <div key={title} className="grid gap-3 border-b border-slate-200 py-6 md:grid-cols-[0.42fr_0.58fr]">
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
