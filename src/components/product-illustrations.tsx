import {
  Sparkles,
  ArrowUpRight,
  ArrowDown,
  Minus,
  Tag,
  FileText,
  TrendingUp,
  Lightbulb,
  FileCheck2,
  Building2,
  ShieldCheck,
} from 'lucide-react'

// Light, code-drawn EmailFlow illustration — reference style:
// Inbox → AI review (orb + capability chips) → Reviewable tasks.
// White panels on a soft light frame; works on dark hero and light pages.

const avatars = [
  { initial: 'J', bg: '#5f6ec7' },
  { initial: 'A', bg: '#2fa39a' },
  { initial: 'M', bg: '#8b5cf6' },
]

const emails = [
  { from: 'John Appleseed', subject: 'Q2 report review', time: '9:12 AM' },
  { from: 'Acme Corp', subject: 'Vendor follow-up', time: '8:47 AM' },
  { from: 'Maya Li', subject: 'Policy update', time: '7:31 AM' },
]

const capabilities = [
  { icon: Tag, label: 'Classify' },
  { icon: FileText, label: 'Extract' },
  { icon: TrendingUp, label: 'Prioritize' },
  { icon: Lightbulb, label: 'Suggest' },
]

const tasks = [
  { icon: FileText, title: 'Review Q2 report', source: 'Q2_Report.pdf', level: 'High', tone: '#d9534a', arrow: <ArrowUpRight className="h-3.5 w-3.5" /> },
  { icon: Building2, title: 'Vendor follow-up', source: 'Quote request', level: 'Medium', tone: '#d9962b', arrow: <Minus className="h-3.5 w-3.5" /> },
  { icon: ShieldCheck, title: 'Check policy update', source: 'Policy.docx', level: 'Low', tone: '#3f9d6b', arrow: <ArrowDown className="h-3.5 w-3.5" /> },
]

function Chip({ icon: Icon, label }: { icon: typeof Tag; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#e3e7f2] bg-white px-3 py-1.5 text-xs font-semibold text-[#12162e] shadow-sm">
      <Icon className="h-3.5 w-3.5 text-[#5f6ec7]" />
      {label}
    </span>
  )
}

export function EmailFlowIllustration() {
  return (
    <div className="rounded-[26px] border border-[#e3e7f2] bg-[#f6f7fa] p-5 shadow-[0_30px_90px_rgba(11,14,42,0.16)]" aria-hidden="true">
      {/* 1 — Inbox */}
      <div className="rounded-2xl border border-[#e7eaf3] bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-[#12162e]">Inbox</p>
          <span className="rounded-full bg-[#5f6ec7]/10 px-2.5 py-0.5 text-xs font-bold text-[#5f6ec7]">12 new</span>
        </div>
        <div className="mt-3 grid gap-2.5">
          {emails.map((email, index) => (
            <div key={email.subject} className="flex items-center gap-3">
              <span
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: avatars[index].bg }}
              >
                {avatars[index].initial}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-semibold text-[#12162e]">{email.from}</span>
                <span className="block truncate text-xs text-[#8a90a8]">{email.subject}</span>
              </span>
              <span className="shrink-0 text-[11px] text-[#a3a9c0]">{email.time}</span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#5f6ec7]" />
            </div>
          ))}
        </div>
      </div>

      {/* 2 — AI review: orb + capability chips */}
      <div className="my-4 flex flex-col items-center gap-2.5">
        <span className="h-4 w-px border-l border-dashed border-[#b9c1de]" />
        <Chip icon={Tag} label={capabilities[0].label} />
        <div className="flex items-center gap-3">
          <Chip icon={FileText} label={capabilities[1].label} />
          <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[linear-gradient(145deg,#8b96e8,#4f5ec0)] text-white shadow-[0_10px_34px_rgba(95,110,199,0.5)]">
            <span className="absolute inset-[-8px] rounded-full border border-[#5f6ec7]/20" />
            <span className="flex flex-col items-center leading-none">
              <Sparkles className="h-4 w-4" />
              <span className="mt-0.5 text-[10px] font-bold tracking-wide">AI</span>
            </span>
          </span>
          <Chip icon={TrendingUp} label={capabilities[2].label} />
        </div>
        <Chip icon={Lightbulb} label={capabilities[3].label} />
        <span className="h-4 w-px border-l border-dashed border-[#b9c1de]" />
      </div>

      {/* 3 — Reviewable tasks */}
      <div className="rounded-2xl border border-[#e7eaf3] bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-[#12162e]">Reviewable tasks</p>
          <span className="rounded-full bg-[#5f6ec7]/10 px-2.5 py-0.5 text-xs font-bold text-[#5f6ec7]">3</span>
        </div>
        <div className="mt-3 grid gap-2">
          {tasks.map((task) => (
            <div key={task.title} className="flex items-center gap-3 rounded-xl border border-[#eef0f7] bg-[#fbfbfd] px-3 py-2.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#5f6ec7]/10 text-[#5f6ec7]">
                <task.icon className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-semibold text-[#12162e]">{task.title}</span>
                <span className="block truncate text-[11px] text-[#8a90a8]">Source: email · {task.source}</span>
              </span>
              <span className="inline-flex shrink-0 items-center gap-1 text-xs font-bold" style={{ color: task.tone }}>
                {task.arrow}
                {task.level}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 flex items-center justify-between border-t border-[#eef0f7] pt-2.5 text-xs font-semibold text-[#5f6ec7]">
          View all tasks
          <FileCheck2 className="h-3.5 w-3.5" />
        </p>
      </div>
    </div>
  )
}
