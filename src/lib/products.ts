export type ProductCase = {
  slug: string
  name: string
  status: 'Shipped' | 'In development'
  headline: string
  copy: string
  mechanisms: string[]
}

export const productCases: ProductCase[] = [
  {
    slug: 'document-intelligence',
    name: 'Document Intelligence',
    status: 'Shipped',
    headline: 'A knowledge base that reads your files and cites its sources.',
    copy: 'Built for internal document management: AI ingests PDFs, Word files, and images, tags and classifies them into a searchable store. Teams query in plain language and get summaries with the source documents cited — never an unsourced answer.',
    mechanisms: [
      'Multi-format ingestion — PDF, Word, images',
      'AI tagging and classification into a structured store',
      'Natural-language retrieval with AI summaries',
      'Every answer linked back to its source file',
    ],
  },
  {
    slug: 'research-intelligence',
    name: 'Research Intelligence',
    status: 'Shipped',
    headline: 'Web and video research, distilled into usable material.',
    copy: 'A research assistant that searches and summarises web content, and handles video too: subtitles are extracted, rewritten into clean written prose, and translated — turning hours of viewing into minutes of reading.',
    mechanisms: [
      'Web search and multi-source summarisation',
      'Video subtitle extraction',
      'Spoken-to-written prose rewriting',
      'Translation for cross-language research',
    ],
  },
]

export function getProductCase(slug: string) {
  return productCases.find((product) => product.slug === slug)
}
