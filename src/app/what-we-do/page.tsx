import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'What We Do',
  description: 'Vaxon builds AI products, workflow automation, and email intelligence systems for modern work.',
  alternates: { canonical: absoluteUrl('/what-we-do') },
}

const capabilities = [
  {
    id: 'ai-product-development',
    title: 'AI Product Development',
    copy: 'We design product workflows where AI output is visible, editable, and useful inside the real product surface.',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    copy: 'We structure work before automating it: signals, status, routing, review, and the context behind each decision.',
  },
  {
    id: 'email-task-intelligence',
    title: 'Email & Task Intelligence',
    copy: 'We turn inbox-driven work into classifications, task suggestions, due dates, and source-linked project context.',
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

      <section className="bg-white py-14 md:py-16">
        <div className="shell grid gap-10 border-b border-slate-200 pb-12 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-sm font-semibold text-cyan-700">What We Do</p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 md:text-5xl">
              Product systems for work that needs more structure.
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              Vaxon sits between product company and workflow studio. We build focused AI products first, then extend the same thinking into work systems that can be reviewed, trusted, and scaled.
            </p>
            <Link href="/products/emailflow" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
              See EmailFlow
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="shell">
          <div className="border-t border-slate-950">
            {capabilities.map((item, index) => (
              <article key={item.id} id={item.id} className="scroll-mt-28 grid gap-5 border-b border-slate-200 py-9 md:grid-cols-[5rem_0.55fr_1fr]">
                <p className="text-sm font-semibold text-cyan-700">0{index + 1}</p>
                <h2 className="text-2xl font-semibold tracking-[-0.035em] text-slate-950">{item.title}</h2>
                <p className="max-w-2xl text-base leading-8 text-slate-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-rule bg-slate-950 py-16 text-white md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            The proof has to be visible in the product.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-300">
            That is why EmailFlow is shown as the first product proof, not as a decorative AI diagram. The product surface should show the system: classification, review, priority, source context, and momentum.
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
