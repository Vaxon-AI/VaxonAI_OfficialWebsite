import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from '@/components/contact-form'
import { absoluteUrl, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Vaxon for customers, investors, partnerships, careers, or AI productivity product conversations.',
  alternates: { canonical: absoluteUrl('/contact') },
}

const intents = [
  ['Customer', 'Product access, demos, workflow fit, and feedback.'],
  ['Investor', 'Company direction, product thesis, and early traction conversations.'],
  ['Partner', 'Workflow, productivity, and product collaboration opportunities.'],
  ['Careers', 'People who want to help build Vaxon early.'],
]

export default function ContactPage() {
  return (
    <main>
      <section className="bg-white py-16">
        <div className="shell grid gap-10 border-b border-slate-200 pb-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-semibold text-cyan-700">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">
              Talk to Vaxon.
            </h1>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              Reach out about customers, investment conversations, partnerships, roles, or the next generation of AI productivity products.
            </p>
            <Link href={`mailto:${site.email}`} className="mt-6 inline-flex text-sm font-semibold text-cyan-700">
              {site.email}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="border-t border-slate-200">
            {intents.map(([title, copy]) => (
              <div key={title} className="border-b border-slate-200 py-5">
                <p className="text-sm font-semibold text-slate-950">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
