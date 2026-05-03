import Image from 'next/image'

type EmailFlowScreenshotProps = {
  compact?: boolean
  focus?: 'dashboard' | 'tasks' | 'emails'
}

const focusCopy = {
  dashboard: {
    title: 'EmailFlow dashboard',
    description: 'Dashboard context, review alerts, task metrics, classification, priority, and completion momentum.',
  },
  tasks: {
    title: 'EmailFlow task workspace',
    description: 'AI Suggestions, active work, priorities, source-linked tasks, and review-first task handling.',
  },
  emails: {
    title: 'EmailFlow email intelligence',
    description: 'Needs Action, FYI, Needs Review, alerts, and inbox-to-task context in the live product.',
  },
}

export function EmailFlowDashboardPreview({ compact = false, focus = 'dashboard' }: EmailFlowScreenshotProps) {
  const copy = focusCopy[focus]

  return (
    <figure className="product-preview bg-[#16181a] p-2 text-white">
      <div className="px-4 py-4">
        <p className="text-sm font-semibold text-white">{copy.title}</p>
        {!compact ? <p className="mt-1 text-xs leading-5 text-white/60">{copy.description}</p> : null}
      </div>
      <div className="overflow-hidden rounded-[20px] bg-white">
        <Image
          src="/emailflow-dashboard.png"
          alt="EmailFlow dashboard showing workspace context, email attention alerts, task overview, email classification, priority distribution, and completion momentum."
          width={3840}
          height={1958}
          priority={!compact}
          className="h-auto w-full bg-white"
          sizes="(min-width: 1024px) 52vw, 100vw"
        />
      </div>
    </figure>
  )
}

export function EmailFlowTasksPreview() {
  return <EmailFlowDashboardPreview compact focus="tasks" />
}

export function EmailFlowEmailsPreview() {
  return <EmailFlowDashboardPreview compact focus="emails" />
}

export function ProductSystemPreview() {
  return <EmailFlowDashboardPreview />
}
