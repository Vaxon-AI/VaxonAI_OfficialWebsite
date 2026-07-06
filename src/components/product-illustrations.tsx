import {
  Sparkles,
  ArrowUpRight,
  Minus,
  Tag,
  FileText,
  TrendingUp,
  Lightbulb,
  Building2,
  Mail,
  Video,
  MessageCircle,
  UserCheck,
  ListChecks,
  Database,
  NotebookPen,
  MessageSquareQuote,
} from 'lucide-react'

// Light, code-drawn EmailFlow illustration — compact version:
// Inbox → AI orb + capability chips → reviewable tasks.
// Sized to sit beside a text column without towering over it.

const avatars = [
  { initial: 'J', bg: '#5f6ec7' },
  { initial: 'A', bg: '#2fa39a' },
]

const emails = [
  { from: 'John Appleseed', subject: 'Q2 report review', time: '9:12 AM' },
  { from: 'Acme Corp', subject: 'Vendor follow-up', time: '8:47 AM' },
]

const tasks = [
  { icon: FileText, title: 'Review Q2 report', source: 'Q2_Report.pdf', level: 'High', tone: '#d9534a', arrow: <ArrowUpRight className="h-3.5 w-3.5" /> },
  { icon: Building2, title: 'Vendor follow-up', source: 'Quote request', level: 'Medium', tone: '#d9962b', arrow: <Minus className="h-3.5 w-3.5" /> },
]

const capabilities = [
  { icon: Tag, label: 'Classify' },
  { icon: FileText, label: 'Extract' },
  { icon: TrendingUp, label: 'Prioritize' },
  { icon: Lightbulb, label: 'Suggest' },
]

// Company-level system illustration for the home hero:
// any work signal -> AI structures it -> human review -> usable output.
// Represents the whole studio, not a single product.

const inputs = [
  { icon: Mail, label: 'Email' },
  { icon: FileText, label: 'Documents' },
  { icon: Video, label: 'Video' },
  { icon: MessageCircle, label: 'Chat' },
]

const outputs = [
  { icon: ListChecks, label: 'Tasks' },
  { icon: Database, label: 'Records' },
  { icon: NotebookPen, label: 'Notes' },
  { icon: MessageSquareQuote, label: 'Answers' },
]

function MiniChip({ icon: Icon, label }: { icon: typeof Mail; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-lg border border-[#e3e7f2] bg-white px-2 py-1 text-[10px] font-semibold text-[#12162e] shadow-sm">
      <Icon className="h-3 w-3 text-[#5f6ec7]" />
      {label}
    </span>
  )
}

export function CompanySystemIllustration() {
  return (
    <div className="w-full max-w-md justify-self-center rounded-[22px] border border-[#e3e7f2] bg-[#f6f7fa] p-4 shadow-[0_30px_90px_rgba(11,14,42,0.16)] lg:justify-self-end" aria-hidden="true">
      {/* Inputs */}
      <div className="rounded-xl border border-[#e7eaf3] bg-white p-3.5 shadow-sm">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8a90a8]">Work arrives</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {inputs.map((item) => (
            <MiniChip key={item.label} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>

      {/* AI */}
      <div className="my-2.5 flex flex-col items-center gap-1.5">
        <span className="h-3 w-px border-l border-dashed border-[#b9c1de]" />
        <span className="relative grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(145deg,#8b96e8,#4f5ec0)] text-white shadow-[0_8px_26px_rgba(95,110,199,0.5)]">
          <span className="flex flex-col items-center leading-none">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="mt-0.5 text-[9px] font-bold tracking-wide">AI</span>
          </span>
        </span>
        <span className="text-[10px] font-semibold text-[#8a90a8]">structures it</span>
        <span className="h-3 w-px border-l border-dashed border-[#b9c1de]" />
      </div>

      {/* Human review */}
      <div className="flex items-center gap-2.5 rounded-xl border border-[#e7eaf3] bg-white px-3.5 py-2.5 shadow-sm">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[#5f6ec7]/10 text-[#5f6ec7]">
          <UserCheck className="h-3.5 w-3.5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-xs font-semibold text-[#12162e]">Human review</span>
          <span className="block text-[10px] text-[#8a90a8]">You accept, edit, or reject</span>
        </span>
        <span className="rounded-full bg-[#3f9d6b]/10 px-2 py-0.5 text-[10px] font-bold text-[#3f9d6b]">Approved</span>
      </div>

      {/* Outputs */}
      <div className="mt-2.5 flex flex-col items-center gap-1.5">
        <span className="h-3 w-px border-l border-dashed border-[#b9c1de]" />
      </div>
      <div className="mt-1.5 rounded-xl border border-[#e7eaf3] bg-white p-3.5 shadow-sm">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8a90a8]">Usable output</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {outputs.map((item) => (
            <MiniChip key={item.label} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function EmailFlowIllustration() {
  return (
    <div className="w-full max-w-md justify-self-center rounded-[22px] border border-[#e3e7f2] bg-[#f6f7fa] p-4 shadow-[0_30px_90px_rgba(11,14,42,0.16)] lg:justify-self-end" aria-hidden="true">
      {/* 1 — Inbox */}
      <div className="rounded-xl border border-[#e7eaf3] bg-white p-3.5 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-bold text-[#12162e]">Inbox</p>
          <span className="rounded-full bg-[#5f6ec7]/10 px-2 py-0.5 text-[11px] font-bold text-[#5f6ec7]">12 new</span>
        </div>
        <div className="mt-2.5 grid gap-2">
          {emails.map((email, index) => (
            <div key={email.subject} className="flex items-center gap-2.5">
              <span
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] font-bold text-white"
                style={{ backgroundColor: avatars[index].bg }}
              >
                {avatars[index].initial}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-xs font-semibold text-[#12162e]">{email.from}</span>
                <span className="block truncate text-[11px] text-[#8a90a8]">{email.subject}</span>
              </span>
              <span className="shrink-0 text-[10px] text-[#a3a9c0]">{email.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2 — AI orb + capability chips */}
      <div className="my-2.5 flex flex-col items-center gap-2">
        <span className="h-3 w-px border-l border-dashed border-[#b9c1de]" />
        <span className="relative grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(145deg,#8b96e8,#4f5ec0)] text-white shadow-[0_8px_26px_rgba(95,110,199,0.5)]">
          <span className="flex flex-col items-center leading-none">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="mt-0.5 text-[9px] font-bold tracking-wide">AI</span>
          </span>
        </span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {capabilities.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-1 rounded-lg border border-[#e3e7f2] bg-white px-2 py-1 text-[10px] font-semibold text-[#12162e] shadow-sm">
              <Icon className="h-3 w-3 text-[#5f6ec7]" />
              {label}
            </span>
          ))}
        </div>
        <span className="h-3 w-px border-l border-dashed border-[#b9c1de]" />
      </div>

      {/* 3 — Reviewable tasks */}
      <div className="rounded-xl border border-[#e7eaf3] bg-white p-3.5 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-bold text-[#12162e]">Reviewable tasks</p>
          <span className="rounded-full bg-[#5f6ec7]/10 px-2 py-0.5 text-[11px] font-bold text-[#5f6ec7]">2</span>
        </div>
        <div className="mt-2.5 grid gap-1.5">
          {tasks.map((task) => (
            <div key={task.title} className="flex items-center gap-2.5 rounded-lg border border-[#eef0f7] bg-[#fbfbfd] px-2.5 py-2">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-[#5f6ec7]/10 text-[#5f6ec7]">
                <task.icon className="h-3.5 w-3.5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-xs font-semibold text-[#12162e]">{task.title}</span>
                <span className="block truncate text-[10px] text-[#8a90a8]">Source: email · {task.source}</span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-0.5 text-[11px] font-bold" style={{ color: task.tone }}>
                {task.arrow}
                {task.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
