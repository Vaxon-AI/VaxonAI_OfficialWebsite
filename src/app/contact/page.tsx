import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { absoluteUrl } from '@/lib/site'

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
      <section className="page-hero">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="page-kicker">Contact</p>
            <h1 className="page-title">Talk to Vaxon.</h1>
          </div>
          <div>
            <p className="page-intro">
              Reach out about customers, investment conversations, partnerships, roles, or the next generation of AI productivity products.
            </p>
            <p className="mt-7 max-w-md text-sm font-semibold leading-7 text-white/72">
              Use the form below and the message will go directly to the Vaxon team.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="plain-line-list">
            {intents.map(([title, copy]) => (
              <div key={title} className="py-7">
                <p className="text-xl font-semibold tracking-[-0.035em] text-[#191c1f]">{title}</p>
                <p className="mt-3 max-w-md text-sm leading-7 text-[#505a63]">{copy}</p>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
