import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Link2, Mail, TrendingUp, UserCheck } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { EmailFlowIllustration } from '@/components/product-illustrations'
import { JsonLd } from '@/components/json-ld'
import { productCases } from '@/lib/products'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Vaxon ships its own AI products — EmailFlow, Document Intelligence, Research Intelligence, and Tax Aware — as proof of the systems we build for clients.',
  alternates: { canonical: absoluteUrl('/products') },
}

const emailflowTags = [
  { icon: Mail, label: 'Email-to-task' },
  { icon: TrendingUp, label: 'Priority signals' },
  { icon: UserCheck, label: 'Human review' },
  { icon: Link2, label: 'Source context' },
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
            <div className="mt-6 flex flex-wrap gap-2.5">
              {emailflowTags.map(({ icon: Icon, label }) => (
                <span key={label} className="marquee-chip">
                  <Icon className="h-3.5 w-3.5 text-[#5f6ec7]" />
                  {label}
                </span>
              ))}
            </div>
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
          <EmailFlowIllustration />
        </div>
      </section>

      {/* Case studies — capability proof */}
      <section className="paper-band py-16 md:py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="page-kicker">More from the lineup</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#12162e] md:text-4xl">
              Built by the same team, on the same principles.
            </h2>
          </div>
          <div className="mt-14 grid gap-10">
            {productCases.filter((study) => study.slug !== 'emailflow').map((study) => (
              <article key={study.slug} id={study.slug} className="scroll-mt-28 grid gap-8 rounded-[28px] border border-[#dfe2ee] bg-white p-8 md:grid-cols-[0.9fr_1.1fr] md:p-12">
                <div>
                  <div className="flex items-center gap-4">
                    <p className="text-base font-semibold text-[#12162e]">{study.name}</p>
                    <span className="status-chip">{study.status}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#12162e] md:text-3xl">
                    {study.headline}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-[#4e5573]">{study.copy}</p>
                  <Link href={`/products/${study.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5f6ec7]">
                    View product
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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

            {/* Tax Aware — teaser only */}
            <article id="tax-aware" className="scroll-mt-28 flex flex-wrap items-center justify-between gap-6 rounded-[28px] border border-dashed border-[#c9cfe4] bg-[#fbfbfd] p-8 md:p-10">
              <div>
                <div className="flex items-center gap-4">
                  <p className="text-base font-semibold text-[#12162e]">Tax Aware</p>
                  <span className="status-chip">In development</span>
                </div>
                <p className="mt-3 max-w-xl text-base leading-8 text-[#4e5573]">
                  A simpler way to stay on top of your own tax. We&apos;re building it now — details soon.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
