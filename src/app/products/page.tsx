import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { EmailFlowDashboardPreview } from '@/components/product-system-preview'
import { JsonLd } from '@/components/json-ld'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Vaxon ships its own AI products — EmailFlow, Document Intelligence, and Research Intelligence — as proof of the systems we build for clients.',
  alternates: { canonical: absoluteUrl('/products') },
}

const emailflowCallouts = [
  'Email classification',
  'AI suggestions pending review',
  'Source-linked task context',
]

const caseStudies = [
  {
    id: 'document-intelligence',
    name: 'Document Intelligence',
    status: 'In development',
    headline: 'A knowledge base that reads your files and cites its sources.',
    copy: 'Built for internal document management: AI ingests PDFs, Word files, and images, tags and classifies them into a searchable store. Teams query in plain language and get summaries with the source documents cited — never an unsourced answer.',
    mechanisms: [
      'Multi-format ingestion — PDF, Word, images',
      'AI tagging and classification into a structured store',
      'Natural-language retrieval with AI summaries',
      'Every answer linked back to its source file',
    ],
  },
  {
    id: 'research-intelligence',
    name: 'Research Intelligence',
    status: 'In development',
    headline: 'Web and video research, distilled into usable material.',
    copy: 'A research assistant that searches and summarises web content, and handles video too: subtitles are extracted, rewritten into clean written prose, and translated — turning hours of viewing into minutes of reading.',
    mechanisms: [
      'Web search and multi-source summarisation',
      'Video subtitle extraction',
      'Spoken-to-written prose rewriting',
      'Translation for cross-language research',
    ],
  },
]

export default function ProductsPage() {
  return (
    <main>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'Products', item: absoluteUrl('/products') },
          ],
        }}
      />

      <section className="page-hero">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="page-kicker">Products</p>
            <h1 className="page-title">Our products.</h1>
          </div>
          <p className="page-intro">
            We ship our own products to prove our approach works. Everything we build for clients uses the same principles — reviewable AI, source-linked context, humans in the loop.
          </p>
        </div>
      </section>

      {/* EmailFlow — active product */}
      <section className="bg-white py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.62fr_1.38fr]">
          <article className="pt-0">
            <div className="flex items-center justify-between gap-4">
              <p className="text-base font-semibold text-[#12162e]">EmailFlow</p>
              <span className="status-chip">Active product</span>
            </div>
            <p className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#12162e] md:text-3xl">
              Email threads become classified tasks with source context.
            </p>
            <p className="mt-5 text-base leading-8 text-[#4e5573]">
              EmailFlow is built for people managing multiple projects, inbox-driven decisions, and follow-ups that should not disappear into a thread.
            </p>
            <p className="mt-7 max-w-md pt-5 text-sm font-semibold leading-7 text-[#12162e]">
              Active product · Email-to-task · Source-linked workflow
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <a
                href="https://emailflow.vaxon.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-action inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors"
              >
                Try it live
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/products/emailflow" className="inline-flex items-center gap-2 text-sm font-semibold text-[#5f6ec7]">
                Product detail
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
          <div>
            <EmailFlowDashboardPreview compact />
            <div className="mt-4 flex flex-wrap gap-3">
              {emailflowCallouts.map((label) => (
                <span key={label} className="callout-chip">{label}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case studies — capability proof */}
      <section className="paper-band py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="page-kicker">Case studies</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#12162e] md:text-5xl">
              Built by the same team, on the same principles.
            </h2>
          </div>
          <div className="mt-14 grid gap-10">
            {caseStudies.map((study) => (
              <article key={study.id} id={study.id} className="scroll-mt-28 grid gap-8 rounded-[28px] border border-[#dfe2ee] bg-white p-8 md:grid-cols-[0.9fr_1.1fr] md:p-12">
                <div>
                  <div className="flex items-center gap-4">
                    <p className="text-base font-semibold text-[#12162e]">{study.name}</p>
                    <span className="status-chip">{study.status}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#12162e] md:text-3xl">
                    {study.headline}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-[#4e5573]">{study.copy}</p>
                </div>
                <div className="border-t border-[#dfe2ee] pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  <p className="text-sm font-semibold text-[#59628f]">How it works</p>
                  <ul className="mt-4 grid gap-3">
                    {study.mechanisms.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base leading-7 text-[#4e5573]">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8c96c8]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#5f6ec7]">
                    Need something like this?
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
