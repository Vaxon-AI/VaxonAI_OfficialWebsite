export type ProductCase = {
  slug: string
  name: string
  status: 'Active product' | 'Shipped' | 'In development'
  headline: string
  copy: string
  problem: string
  pipeline: { title: string; copy: string }[]
  mechanisms: string[]
  useCases: string[]
  liveUrl?: string
}

export const productCases: ProductCase[] = [
  {
    slug: 'emailflow',
    name: 'EmailFlow',
    status: 'Active product',
    headline: 'Turn inbox messages into reviewable tasks.',
    copy: 'EmailFlow helps people turn email-driven work into structured tasks with priority, source context, and human review — nothing disappears into a thread.',
    problem:
      'For most professionals, the inbox is the real task list — except it is a terrible one. Requests, deadlines, and approvals arrive buried in paragraphs, follow-ups sink under newer mail, and the todo app never knows what the inbox knows. The result is work that gets remembered instead of tracked: re-read threads, missed deadlines, and the nagging feeling that something is slipping.',
    pipeline: [
      {
        title: 'Connect',
        copy: 'Link your inbox once. EmailFlow starts where work already arrives — no new habits required.',
      },
      {
        title: 'Classify',
        copy: 'Each email is sorted: needs action, worth knowing, or ignorable. The noise stops competing with the work.',
      },
      {
        title: 'Extract',
        copy: 'Action emails become structured tasks — title, checklist, deadline, and priority scored by urgency and impact.',
      },
      {
        title: 'Review',
        copy: 'Suggestions stay separate from active work until you accept, edit, or reject them. Nothing automated masquerades as decided.',
      },
      {
        title: 'Track',
        copy: 'Approved tasks join your workspace with the source email attached — priorities, deadlines, and a daily digest.',
      },
    ],
    mechanisms: [
      'Email classification that learns how you handle senders',
      'Task extraction with priority, deadlines, and checklists',
      'AI suggestions stay separate until a person approves',
      'Every task linked back to its source email',
      'Daily digest of what needs attention',
    ],
    useCases: [
      'Multi-project professionals',
      'Client-facing follow-ups',
      'Deadline-heavy workflows',
      'Anyone whose inbox is the job',
    ],
    liveUrl: 'https://emailflow.vaxon.org/',
  },
  {
    slug: 'document-intelligence',
    name: 'Document Intelligence',
    status: 'Shipped',
    headline: 'A knowledge base that reads your files and cites its sources.',
    copy: 'Built for internal document management: AI ingests PDFs, Word files, and images, tags and classifies them into a searchable store. Teams query in plain language and get summaries with the source documents cited — never an unsourced answer.',
    problem:
      'Every organisation accumulates a folder graveyard: contracts, invoices, reports, scans, screenshots. The knowledge is technically there — but finding it means knowing which file to open, and the person who knew has usually left. Search by filename fails because nobody names files properly; search by content fails because half of it is images and PDFs. So teams re-ask, re-write, and re-negotiate things that were already settled.',
    pipeline: [
      {
        title: 'Ingest',
        copy: 'Drop in files of any format — PDF, Word, images, scans. Text is extracted, including OCR for image-based documents.',
      },
      {
        title: 'Understand',
        copy: 'AI reads each document and works out what it actually is: a contract, an invoice, a policy, a report — and what it is about.',
      },
      {
        title: 'Organise',
        copy: 'Documents are tagged and classified into a structured store automatically. No manual filing, no naming conventions to enforce.',
      },
      {
        title: 'Ask',
        copy: 'Anyone on the team asks in plain language — "what did we agree with the vendor about delivery dates?" No query syntax, no folder spelunking.',
      },
      {
        title: 'Answer, with sources',
        copy: 'The system replies with a summary and the source documents cited. Click through to the original file — every claim is checkable.',
      },
    ],
    mechanisms: [
      'Multi-format ingestion — PDF, Word, images, with OCR',
      'AI tagging and classification into a structured store',
      'Natural-language retrieval with AI summaries',
      'Every answer linked back to its source file',
      'No unsourced answers — if the documents do not say it, neither does the system',
    ],
    useCases: [
      'Contracts & vendor agreements',
      'Policies & compliance documents',
      'Project archives & handovers',
      'Onboarding & internal knowledge',
    ],
  },
  {
    slug: 'research-intelligence',
    name: 'Research Intelligence',
    status: 'Shipped',
    headline: 'Web and video research, distilled into usable material.',
    copy: 'A research assistant that searches and summarises web content, and handles video too: subtitles are extracted, rewritten into clean written prose, and translated — turning hours of viewing into minutes of reading.',
    problem:
      'Research is two jobs disguised as one. The first is collection — tabs, videos, threads, papers. The second is transformation: turning what you found into something you can actually use — notes, briefs, summaries, translations. The second job eats the hours, and it is almost entirely mechanical. A 48-minute video might contain four minutes of relevant insight, locked behind spoken language, filler, and a language barrier.',
    pipeline: [
      {
        title: 'Collect',
        copy: 'The system searches the web across multiple sources and pulls the relevant material — pages, articles, videos.',
      },
      {
        title: 'Extract',
        copy: 'For video, subtitles are extracted directly — no watching required. For pages, the substance is separated from the noise.',
      },
      {
        title: 'Rewrite',
        copy: 'Spoken language becomes clean written prose: filler removed, structure added, claims kept intact.',
      },
      {
        title: 'Translate',
        copy: 'Cross-language research without the friction — material moves between languages while staying readable.',
      },
      {
        title: 'Deliver',
        copy: 'You get structured, citable notes with links to the originals — ready to use, not ready to process.',
      },
    ],
    mechanisms: [
      'Web search and multi-source summarisation',
      'Video subtitle extraction — no watching required',
      'Spoken-to-written prose rewriting',
      'Translation for cross-language research',
      'Source links preserved on every output',
    ],
    useCases: [
      'Market & competitor research',
      'Repurposing video into written content',
      'Cross-language research & monitoring',
      'Background scans & literature reviews',
    ],
  },
]

export function getProductCase(slug: string) {
  return productCases.find((product) => product.slug === slug)
}
