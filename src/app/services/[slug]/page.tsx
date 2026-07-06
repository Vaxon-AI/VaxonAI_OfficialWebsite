import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { AssistantVisual, BuildVisual, ConsultingVisual, IntegrationVisual, WorkflowVisual } from '@/components/service-visuals'
import { getService, services } from '@/lib/services'
import { absoluteUrl } from '@/lib/site'

const visuals: Record<string, React.ReactNode> = {
  'ai-consulting': <ConsultingVisual />,
  'custom-ai-development': <BuildVisual />,
  'workflow-automation': <WorkflowVisual />,
  'ai-integration': <IntegrationVisual />,
  'ai-assistants': <AssistantVisual />,
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

type Params = { slug: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: absoluteUrl(`/services/${service.slug}`) },
  }
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return (
    <main>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services') },
            { '@type': 'ListItem', position: 3, name: service.title, item: absoluteUrl(`/services/${service.slug}`) },
          ],
        }}
      />

      <section className="page-hero">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="page-kicker">Services</p>
            <h1 className="page-title">{service.title}</h1>
            <p className="mt-4 text-base font-semibold text-[#8c96c8]">{service.pain}</p>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/70">{service.summary}</p>
            <Link href="/contact" className="primary-action mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors">
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {visuals[service.slug]}
        </div>
      </section>

      <section className="paper-band py-16 md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="page-kicker">Why it matters</p>
            <p className="mt-4 max-w-xl text-lg leading-9 text-[#12162e]">{service.detail}</p>
            <Link href={service.proof.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5f6ec7]">
              {service.proof.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <p className="page-kicker">What we build for you</p>
            <ul className="mt-4 grid gap-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-[#dfe2ee] bg-white px-5 py-4 text-base leading-7 text-[#12162e]">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#5f6ec7]/10">
                    <Check className="h-3 w-3 text-[#5f6ec7]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="shell flex flex-wrap items-center gap-x-8 gap-y-3">
          <p className="text-sm font-semibold text-[#8c96c8]">More services:</p>
          {services
            .filter((item) => item.slug !== service.slug)
            .map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="text-sm font-semibold text-[#5f6ec7] hover:underline">
                {item.title}
              </Link>
            ))}
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
