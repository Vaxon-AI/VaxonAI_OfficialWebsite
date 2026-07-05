import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { getStaticPost } from '@/lib/posts'
import { absoluteUrl, site } from '@/lib/site'

const post = getStaticPost('why-human-review-makes-ai-automation-trustworthy')!

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: absoluteUrl(`/blog/${post.slug}`) },
}

const faqs = [
  {
    question: 'What does human-in-the-loop mean in AI automation?',
    answer:
      'Human-in-the-loop means every consequential action an AI system takes is reviewable, editable, or approvable by a person before it becomes final. The AI proposes; a human disposes.',
  },
  {
    question: 'Does human review make automation slower?',
    answer:
      'Marginally — and deliberately. Reviewing a suggestion takes seconds; recovering from a wrong automated action can take days. Review is the fastest path to the point where automation can safely expand.',
  },
  {
    question: 'When is it safe to remove the human from the loop?',
    answer:
      'When the cost of an error is low and reversible, and the system has a measured track record on your data — not a benchmark score. Until both are true, keep review in place.',
  },
]

export default function PostPage() {
  return (
    <main>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: { '@type': 'Organization', name: site.name, url: site.url },
          publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: absoluteUrl('/vaxon-mark.jpg') } },
          mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }}
      />

      <section className="page-hero">
        <div className="shell">
          <p className="page-kicker">Blog · {post.tags.join(' · ')}</p>
          <h1 className="page-title max-w-4xl">{post.title}</h1>
          <p className="mt-6 text-sm font-semibold text-white/60">
            {new Date(`${post.date}T00:00:00Z`).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })} · {post.readingMinutes} min read
          </p>
        </div>
      </section>

      <article className="bg-white py-16 md:py-20">
        <div className="shell">
          <div className="mx-auto grid max-w-3xl gap-7 text-lg leading-9 text-[#12162e]">
            <p className="text-xl leading-9 font-medium">
              Most AI automation does not fail because the model is weak. It fails because the system hides its decisions — and people stop trusting what they cannot see.
            </p>

            <p>
              AI automation is trustworthy when every consequential action it takes can be seen, checked, and reversed by a person. That is the whole principle. Everything else in this post is implementation detail.
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em]">The trust problem is a visibility problem</h2>
            <p>
              When a system silently files, replies, deletes, or commits on your behalf, every mistake it makes costs double: the error itself, and a permanent discount on everything the system does afterwards. Users do not keep a mental ledger of the 95 correct actions — they remember the one wrong action they never got to see.
            </p>
            <p>
              The instinctive fix is a better model. The durable fix is a better system: one where AI output arrives as a <em>suggestion with evidence</em>, not as a completed act.
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em]">The pattern: suggest, source, separate</h2>
            <p>We build every automation on three rules:</p>
            <ul className="grid gap-4 pl-1">
              <li className="flex gap-3"><span className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8c96c8]" /><span><strong>Suggest, don&apos;t act.</strong> The AI drafts the task, the reply, the classification. A person accepts, edits, or rejects it. Acceptance can be one click — but it exists.</span></li>
              <li className="flex gap-3"><span className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8c96c8]" /><span><strong>Source everything.</strong> Every suggestion links back to the email, document, or message it came from. A claim without a source is not reviewable — it is just plausible.</span></li>
              <li className="flex gap-3"><span className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8c96c8]" /><span><strong>Separate suggested from active.</strong> AI-created work lives in its own visible state until a person promotes it. Nothing automated masquerades as something decided.</span></li>
            </ul>
            <p>
              In EmailFlow, our email-to-task product, this pattern is the product: AI classifies inbox messages and proposes tasks with priority and deadlines, but suggestions stay in a separate state — linked to their source email — until the user promotes them to active work.
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em]">Review is how automation earns its expansion</h2>
            <p>
              Human review is not a permanent tax. It is an instrument: every accept, edit, and reject is labelled ground truth about where the system is reliable on <em>your</em> data. That record — not a benchmark — tells you which steps have earned deeper automation, and which still need a person.
            </p>
            <p>
              Teams that skip review never collect this evidence. They either over-trust (and get burned) or under-trust (and quietly stop using the system). Both outcomes look like &ldquo;AI didn&apos;t work here.&rdquo; Neither had to happen.
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em]">FAQ</h2>
            <div className="grid gap-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{faq.question}</h3>
                  <p className="mt-2 text-base leading-8 text-[#4e5573]">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-[#dfe2ee] pt-8">
              <p className="text-base leading-8 text-[#4e5573]">
                Vaxon builds human-in-the-loop AI systems for businesses — workflow automation, document intelligence, research pipelines, and custom assistants.
              </p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#5f6ec7]">
                Talk to us about your workflow
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CtaBand />
    </main>
  )
}
