export type Service = {
  slug: string
  title: string
  pain: string
  summary: string
  detail: string
  deliverables: string[]
  proof: { label: string; href: string }
}

export const services: Service[] = [
  {
    slug: 'workflow-automation',
    title: 'AI Workflow Automation',
    pain: 'Work signals arrive as messages, then vanish into threads.',
    summary:
      'We turn email- and message-driven work into structured, reviewable task flows: classification, priority, deadlines, and source context — with people approving what becomes active work.',
    detail:
      'Most teams lose work not because it is hard, but because it arrives as messages and never becomes anything else. We build pipelines that read those signals, extract the actual work, and keep every suggestion reviewable before it enters your real task list.',
    deliverables: [
      'Message classification tuned to how your team actually works',
      'Task extraction with priority, deadlines, and action items',
      'Review-first flows — AI suggestions stay separate from active work',
      'Source context attached to every task, always traceable',
    ],
    proof: { label: 'See it live in EmailFlow', href: '/products/emailflow' },
  },
  {
    slug: 'document-intelligence',
    title: 'Knowledge & Document Intelligence',
    pain: 'Internal knowledge is buried in PDFs, Word files, and image scans nobody can search.',
    summary:
      'AI reads your documents — including images — tags and classifies them into an organised knowledge base. Ask a question in plain language; get a summary with the source files cited, every time.',
    detail:
      'Every organisation has a folder graveyard: contracts, invoices, reports, scans. We build systems that ingest those files, understand them, and answer questions about them — with the source document cited on every answer, so nobody has to trust a black box.',
    deliverables: [
      'Multi-format ingestion: PDF, Word, images, and more',
      'Automatic tagging and classification into a structured store',
      'Plain-language search across everything',
      'AI summaries with source citations on every answer',
    ],
    proof: { label: 'See our Document Intelligence system', href: '/products/document-intelligence' },
  },
  {
    slug: 'research-intelligence',
    title: 'Research & Content Intelligence',
    pain: 'Research means hours of tabs, videos, and half-finished notes.',
    summary:
      'We build pipelines that search and summarise web content, extract subtitles from video, rewrite them into clean prose, and translate — so raw content becomes usable material.',
    detail:
      'Research is collection plus transformation, and the transformation is what eats the hours. Our pipelines handle both: gathering from web and video sources, then rewriting, structuring, and translating so what you get back is ready to use, not ready to process.',
    deliverables: [
      'Web search and multi-source summarisation',
      'Video subtitle extraction and clean-up',
      'Spoken-to-written prose rewriting',
      'Cross-language translation for global research',
    ],
    proof: { label: 'See our Research Intelligence system', href: '/products/research-intelligence' },
  },
  {
    slug: 'ai-assistants',
    title: 'Custom AI Assistants',
    pain: 'Support teams answer the same questions all day; bots without limits make it worse.',
    summary:
      'We build customer-facing chatbots and internal assistants grounded in your own knowledge, with human-handoff designed in from day one — automation that knows when to step aside.',
    detail:
      'The difference between a helpful assistant and a liability is knowing its limits. Ours answer from your knowledge base with sources attached, and hand the conversation to a person the moment confidence drops or stakes rise.',
    deliverables: [
      'Assistants grounded in your own documents and data',
      'Source-linked answers — no unsourced claims',
      'Human handoff built in, not bolted on',
      'Deployment on your site, in your tools, or internally',
    ],
    proof: { label: 'Built on our review-first principles', href: '/about' },
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
