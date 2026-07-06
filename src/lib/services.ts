export type Service = {
  slug: string
  title: string
  pain: string
  summary: string
  detail: string
  deliverables: string[]
  proof: { label: string; href: string }
}

// Services are engagement types — NOT a mirror of our products.
// Products appear only as proof links inside pages.
export const services: Service[] = [
  {
    slug: 'ai-consulting',
    title: 'AI Consulting & Scoping',
    pain: 'Everyone says "use AI somewhere". Nobody says exactly where, or whether it is worth it.',
    summary:
      'Before anything gets built: we audit your workflows, test feasibility on your real data, and give you an honest answer about what AI can and cannot do for you — including where it is not worth the money.',
    detail:
      'Most failed AI projects fail before the first line of code — they automate the wrong thing. We start with the workflow, not the technology: where time actually goes, what data exists, what an error costs. You get a scoped, costed plan, and if the honest answer is "AI will not help here", we say so.',
    deliverables: [
      'Workflow audit — where the hours and errors actually are',
      'Feasibility testing on your real data, not demos',
      'A scoped PoC plan with cost and model architecture',
      'An honest no, when that is the right answer',
    ],
    proof: { label: 'Every product we ship started as a scoped experiment', href: '/products' },
  },
  {
    slug: 'custom-ai-development',
    title: 'Custom AI Development',
    pain: 'Off-the-shelf tools almost fit — and "almost" is where the hours go.',
    summary:
      'End-to-end bespoke AI systems, built around your workflow: LLM pipelines, data processing, interfaces, and the review mechanics that make people actually trust the output.',
    detail:
      'We design, build, evaluate, and operate complete AI systems — from the model pipeline to the interface your team touches. Every system ships with evaluation on your data, cost-aware model architecture, and human review designed in from day one. Any domain: text, documents, images, video, structured data.',
    deliverables: [
      'Full-stack delivery: pipeline, backend, interface',
      'Model selection and cost architecture that scales sanely',
      'Evaluation and guardrails measured on your data',
      'Production hardening, monitoring, and handover docs',
    ],
    proof: { label: 'Our own products are built exactly this way', href: '/products' },
  },
  {
    slug: 'workflow-automation',
    title: 'Workflow Automation',
    pain: 'Repetitive work eats your team: triaging, extracting, routing, filing, following up.',
    summary:
      'We automate business processes with AI — messages, documents, approvals, data entry — while keeping every automated step reviewable. People stay in charge; the busywork does not.',
    detail:
      'Any process where work arrives in one form and has to become another — an email that should be a task, a document that should be a record, a request that should be routed — can usually be automated. We build these flows human-in-the-loop: AI does the repetitive transformation, people approve what matters.',
    deliverables: [
      'Process mapping and automation design',
      'AI classification, extraction, and routing tuned to your rules',
      'Review-first flows — suggestions stay separate from actions',
      'Full traceability: every automated step links to its source',
    ],
    proof: { label: 'See it live in EmailFlow', href: '/products/emailflow' },
  },
  {
    slug: 'ai-integration',
    title: 'AI Integration',
    pain: 'You have a product or internal tools that work. You want AI in them — without a rewrite.',
    summary:
      'We add AI capability to what you already have: copilots inside your product, intelligence in your internal tools, or model APIs wired into your stack — with guardrails and cost control built in.',
    detail:
      'Integration is where most AI budgets quietly die: the demo worked, the production bill did not. We wire AI into existing systems with the unglamorous parts done properly — fallbacks between providers, token cost architecture, output validation, and monitoring — so the capability ships and the invoice stays predictable.',
    deliverables: [
      'AI features embedded in your existing product or tools',
      'Multi-provider architecture — no single-vendor lock-in',
      'Cost modelling and token budget control',
      'Output validation, fallbacks, and monitoring',
    ],
    proof: { label: 'The same architecture runs our products', href: '/products' },
  },
  {
    slug: 'ai-assistants',
    title: 'AI Assistants',
    pain: 'Support teams answer the same questions all day; bots without limits make it worse.',
    summary:
      'Customer-facing chatbots and internal assistants grounded in your own knowledge, with human-handoff designed in from day one — automation that knows when to step aside.',
    detail:
      'The difference between a helpful assistant and a liability is knowing its limits. Ours answer from your knowledge base with sources attached, and hand the conversation to a person the moment confidence drops or stakes rise. Deployable on your site, in your tools, or internally.',
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
