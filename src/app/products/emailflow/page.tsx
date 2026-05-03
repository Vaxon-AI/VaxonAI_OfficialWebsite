import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { EmailFlowDashboardPreview } from '@/components/product-system-preview'
import { JsonLd } from '@/components/json-ld'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'EmailFlow',
  description: "EmailFlow is Vaxon's AI email assistant for turning threads into clear tasks and project context.",
  alternates: { canonical: absoluteUrl('/products/emailflow') },
}

const productPoints = [
  ['Classify email', 'Needs Action, FYI, Needs Review, and Ignored make the inbox easier to reason about.'],
  ['Review AI tasks', 'AI Suggestions stay separate from active work until the user confirms them.'],
  ['Keep source context', 'Tasks remain tied to the email and project context that created them.'],
]

export default function EmailFlowPage() {
  return (
    <main>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'EmailFlow',
          applicationCategory: 'ProductivityApplication',
          operatingSystem: 'Web',
          description: 'Email assistant and task orchestration workspace by Vaxon.',
          url: absoluteUrl('/products/emailflow'),
          publisher: { '@type': 'Organization', name: 'Vaxon', url: absoluteUrl('/') },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'Products', item: absoluteUrl('/products') },
            { '@type': 'ListItem', position: 3, name: 'EmailFlow', item: absoluteUrl('/products/emailflow') },
          ],
        }}
      />

      <section className="bg-black text-white py-14 md:py-16">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-sm font-semibold text-[#7b80ff]">Product / EmailFlow</p>
            <h1 className="page-title">
              Email becomes a work system.
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-8 text-white/68">
              EmailFlow classifies incoming messages, extracts reviewable tasks, and keeps project context attached. It is designed around user review rather than invisible automation.
            </p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white">
              Request access
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black text-white pb-16 md:pb-24">
        <div className="shell">
          <EmailFlowDashboardPreview />
        </div>
      </section>

      <section className="editorial-rule bg-white py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
            What the product does.
          </h2>
          <div className="">
            {productPoints.map(([title, copy]) => (
              <div key={title} className="grid gap-4 border-b border-slate-200 py-6 md:grid-cols-[14rem_1fr]">
                <p className="text-sm font-semibold text-slate-950">{title}</p>
                <p className="text-sm leading-7 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Product constraints.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-300">
            EmailFlow starts with read-only access, keeps AI suggestions inspectable, and avoids sending, deleting, or modifying email. The product is built to earn automation through review.
          </p>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
