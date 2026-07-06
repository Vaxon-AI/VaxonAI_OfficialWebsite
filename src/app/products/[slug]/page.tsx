import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { EmailFlowIllustration } from '@/components/product-illustrations'
import { DocumentsVisual, ResearchVisual } from '@/components/service-visuals'
import { getProductCase, productCases } from '@/lib/products'
import { absoluteUrl } from '@/lib/site'

const visuals: Record<string, React.ReactNode> = {
  emailflow: <EmailFlowIllustration />,
  'document-intelligence': <DocumentsVisual />,
  'research-intelligence': <ResearchVisual />,
}

export function generateStaticParams() {
  return productCases.map((product) => ({ slug: product.slug }))
}

type Params = { slug: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProductCase(slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.headline,
    alternates: { canonical: absoluteUrl(`/products/${product.slug}`) },
  }
}

export default async function ProductCasePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const product = getProductCase(slug)
  if (!product) notFound()

  return (
    <main>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'Products', item: absoluteUrl('/products') },
            { '@type': 'ListItem', position: 3, name: product.name, item: absoluteUrl(`/products/${product.slug}`) },
          ],
        }}
      />

      <section className="page-hero">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <p className="page-kicker">Products</p>
              <span className="rounded-full border border-[#c7cfec]/30 px-3 py-1 text-xs font-semibold text-[#c7cfec]">
                {product.status}
              </span>
            </div>
            <h1 className="page-title">{product.name}</h1>
            <p className="mt-4 max-w-xl text-lg font-semibold leading-8 text-[#c7cfec]">{product.headline}</p>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/70">{product.copy}</p>
            {product.liveUrl ? (
              <a
                href={product.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-action mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors"
              >
                Try it live
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
          {visuals[product.slug]}
        </div>
      </section>

      {/* The problem */}
      <section className="bg-white py-16 md:py-20">
        <div className="shell grid gap-8 lg:grid-cols-[0.35fr_1fr]">
          <p className="page-kicker">The problem</p>
          <p className="max-w-3xl text-lg leading-9 text-[#12162e]">{product.problem}</p>
        </div>
      </section>

      {/* Pipeline */}
      <section className="paper-band py-16 md:py-20">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="page-kicker">How it works</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#12162e] md:text-4xl">
              From raw input to usable answer.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {product.pipeline.map((step, index) => (
              <div key={step.title} className="rounded-[18px] border border-[#dfe2ee] bg-white p-5">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#5f6ec7] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-base font-semibold tracking-[-0.02em] text-[#12162e]">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-[#4e5573]">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities + use cases */}
      <section className="bg-white py-16 md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="page-kicker">Key capabilities</p>
            <ul className="mt-4 grid gap-3">
              {product.mechanisms.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-[#dfe2ee] bg-[#fbfbfd] px-5 py-4 text-base leading-7 text-[#12162e]">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#5f6ec7]/10">
                    <Check className="h-3 w-3 text-[#5f6ec7]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="page-kicker">Where it fits</p>
            <ul className="mt-4 grid gap-3">
              {product.useCases.map((item) => (
                <li key={item} className="rounded-2xl border border-[#dfe2ee] px-5 py-4 text-base font-semibold text-[#12162e]">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-[#dfe2ee] bg-[#f6f7fa] p-6">
              <p className="text-base font-semibold text-[#12162e]">Need something like this?</p>
              <p className="mt-2 text-sm leading-7 text-[#4e5573]">
                This system was built by our team on the same review-first principles we bring to client work. We can scope a version that fits your workflow.
              </p>
              <Link href="/contact" className="primary-action mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors">
                Talk to us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
