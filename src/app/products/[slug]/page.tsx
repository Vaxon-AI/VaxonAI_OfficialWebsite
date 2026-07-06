import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { DocumentsVisual, ResearchVisual } from '@/components/service-visuals'
import { getProductCase, productCases } from '@/lib/products'
import { absoluteUrl } from '@/lib/site'

const visuals: Record<string, React.ReactNode> = {
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
          </div>
          {visuals[product.slug]}
        </div>
      </section>

      <section className="paper-band py-16 md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="page-kicker">How it works</p>
            <ul className="mt-4 grid gap-3">
              {product.mechanisms.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-[#dfe2ee] bg-white px-5 py-4 text-base leading-7 text-[#12162e]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8c96c8]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="page-kicker">Need something like this?</p>
            <p className="mt-4 max-w-xl text-lg leading-9 text-[#12162e]">
              This system was built by our team, on the same review-first principles we bring to client work. If your organisation has a similar problem, we can scope a version that fits your workflow.
            </p>
            <Link href="/contact" className="primary-action mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors">
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
