import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Talk to Us',
  description:
    'Tell Vaxon about your workflow — AI automation, knowledge bases, research pipelines, or custom assistants. No pitch deck required.',
  alternates: { canonical: absoluteUrl('/contact') },
}

const projectTypes = [
  ['Workflow automation', 'Email- and message-driven work that should become structured, reviewable task flows.'],
  ['Knowledge base & documents', 'Internal files — PDFs, Word, images — that need AI classification, search, and sourced answers.'],
  ['AI assistant or chatbot', 'Customer-facing or internal assistants grounded in your knowledge, with human handoff.'],
  ['Something else', 'A workflow problem that does not fit a box yet. Those are often the interesting ones.'],
]

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="page-kicker">Contact</p>
            <h1 className="page-title">Talk to us.</h1>
          </div>
          <div>
            <p className="page-intro">
              Tell us about your workflow — no pitch deck required. Describe the work that keeps getting lost, duplicated, or delayed, and we will tell you honestly whether AI can help.
            </p>
            <p className="mt-7 max-w-md text-base font-semibold leading-7 text-white/75">
              Every message goes directly to the team. We reply to every serious inquiry.
            </p>
          </div>
        </div>
      </section>

      <section className="paper-band py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="plain-line-list">
            {projectTypes.map(([title, copy]) => (
              <div key={title} className="py-7">
                <p className="text-xl font-semibold tracking-[-0.035em] text-[#12162e]">{title}</p>
                <p className="mt-3 max-w-md text-base leading-7 text-[#4e5573]">{copy}</p>
              </div>
            ))}
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
