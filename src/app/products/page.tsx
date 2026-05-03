import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { EmailFlowDashboardPreview } from '@/components/product-system-preview'
import { JsonLd } from '@/components/json-ld'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore Vaxon products for AI workflow automation, email intelligence, and clearer work systems.',
  alternates: { canonical: absoluteUrl('/products') },
}

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

      <section className="bg-black text-white py-14">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-sm font-semibold text-[#7b80ff]">Products</p>
            <h1 className="page-title">
              Product directory.
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/68">
            Vaxon currently has one active product. Future products will come from adjacent workflow problems after the first product proof is strong enough to justify them.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.62fr_1.38fr]">
          <article className="pt-0">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-slate-950">EmailFlow</p>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#494fdf]">Active product</span>
            </div>
            <p className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.035em] text-slate-950">
              Email threads become classified tasks with source context.
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              EmailFlow is built for people managing multiple projects, inbox-driven decisions, and follow-ups that should not disappear into a thread.
            </p>
            <p className="mt-7 max-w-md  pt-5 text-sm font-semibold leading-7 text-slate-950">
              Active product · Email intelligence · V1 product proof
            </p>
            <Link href="/products/emailflow" className="text-[#494fdf] mt-8 inline-flex items-center gap-2 text-sm font-semibold">
              View product detail
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
          <EmailFlowDashboardPreview compact />
        </div>
      </section>

      <section className="editorial-rule bg-white py-16">
        <div className="shell grid gap-8 md:grid-cols-[0.86fr_1.14fr]">
          <h2 className="text-2xl font-semibold tracking-[-0.035em] text-slate-950">
            Roadmap
          </h2>
          <div className="">
            {[
              ['Adjacent personal systems', 'Products around context, review, planning, and task execution for people working across many communication channels.'],
              ['Team workflow systems', 'Collaborative AI workflow products where classification, routing, status, and source context stay visible to teams.'],
            ].map(([title, copy]) => (
              <div key={title} className="grid gap-3 border-b border-slate-200 py-5 md:grid-cols-[14rem_1fr]">
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
