import {
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  ArrowDown,
  Minus,
  Landmark,
  Camera,
  FolderOpen,
  FileCheck2,
  Receipt,
} from 'lucide-react'

// Rich, code-drawn product illustrations on deep-navy panels —
// replaces raw dashboard screenshots. Style reference: glowing
// message→AI→tasks / receipt→context→evidence flows.

const float = (index: number) => ({ animationDelay: `${index * 200}ms` })

function AiNode() {
  return (
    <div className="flex flex-col items-center gap-1" aria-hidden="true">
      <span className="h-4 w-px border-l border-dashed border-[#8c96c8]/60" />
      <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#8c96c8]/40 bg-[#5f6ec7]/20 text-[#c7cfec] shadow-[0_0_30px_rgba(95,110,199,0.45)]">
        <Sparkles className="h-5 w-5" />
      </span>
      <span className="h-4 w-px border-l border-dashed border-[#8c96c8]/60" />
    </div>
  )
}

export function EmailFlowIllustration() {
  const messages = [
    { initial: 'J', from: 'Client request', snippet: 'Please review the Q2 report…', time: '9:12 AM' },
    { initial: 'A', from: 'Vendor follow-up', snippet: 'Just checking in on invoice…', time: '8:47 AM' },
    { initial: 'M', from: 'Policy update', snippet: 'New compliance changes…', time: '7:31 AM' },
  ]

  const tasks = [
    { title: 'Review Q2 report', level: 'High', tone: 'text-[#ff8f75]', icon: <ArrowUpRight className="h-3.5 w-3.5" /> },
    { title: 'Follow up on invoice', level: 'Medium', tone: 'text-[#e8c268]', icon: <Minus className="h-3.5 w-3.5" /> },
    { title: 'Check compliance update', level: 'Low', tone: 'text-[#7fd6a4]', icon: <ArrowDown className="h-3.5 w-3.5" /> },
  ]

  return (
    <div className="grid gap-1 rounded-[24px] border border-[#c7cfec]/14 bg-[linear-gradient(160deg,#131845,#0b0e2a_70%)] p-6 text-white shadow-[0_30px_90px_rgba(11,14,42,0.4)]" aria-hidden="true">
      <div className="grid gap-2">
        {messages.map((message, index) => (
          <div key={message.from} className="workstream-row !min-h-0 !animate-none !py-2.5 !pl-4" style={float(index)}>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#5f6ec7]/30 text-xs font-bold text-[#c7cfec]">
              {message.initial}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold">{message.from}</span>
              <span className="block truncate text-xs text-white/50">{message.snippet}</span>
            </span>
            <span className="shrink-0 text-xs text-white/40">{message.time}</span>
          </div>
        ))}
      </div>

      <AiNode />

      <div className="grid gap-2 rounded-2xl border border-[#c7cfec]/12 bg-white/[0.03] p-3">
        {tasks.map((task) => (
          <div key={task.title} className="flex items-center gap-3 rounded-xl px-2 py-1.5">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#8c96c8]" />
            <span className="flex-1 truncate text-sm font-medium">{task.title}</span>
            <span className={`inline-flex items-center gap-1 text-xs font-bold ${task.tone}`}>
              {task.icon}
              {task.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TaxAwareIllustration() {
  return (
    <div className="grid gap-1 rounded-[24px] border border-[#c7cfec]/14 bg-[linear-gradient(160deg,#131845,#0b0e2a_70%)] p-6 text-white shadow-[0_30px_90px_rgba(11,14,42,0.4)]" aria-hidden="true">
      <div className="mx-auto w-full max-w-[240px] rounded-lg bg-white p-4 text-[#12162e] shadow-lg">
        <p className="flex items-center gap-2 text-xs font-bold tracking-[0.14em]">
          <Receipt className="h-3.5 w-3.5 text-[#5f6ec7]" />
          RECEIPT
        </p>
        <div className="mt-2 grid gap-1 font-mono text-[11px] text-[#4e5573]">
          {[
            ['Cafe Co.', '$28.50'],
            ['Office Supplies', '$124.00'],
            ['Taxi', '$46.30'],
          ].map(([label, amount]) => (
            <p key={label} className="flex justify-between"><span>{label}</span><span>{amount}</span></p>
          ))}
        </div>
      </div>

      <AiNode />

      <div className="grid gap-2 rounded-2xl border border-[#c7cfec]/12 bg-white/[0.03] p-3 text-sm">
        <div className="flex items-center gap-3 px-2 py-1">
          <Landmark className="h-4 w-4 shrink-0 text-[#8c96c8]" />
          <span className="flex-1 font-semibold">Tax context added</span>
          <CheckCircle2 className="h-4 w-4 text-[#7fd6a4]" />
        </div>
        <div className="flex items-center justify-between px-2 text-xs text-white/60">
          <span>Deductible</span>
          <span className="rounded-full bg-[#7fd6a4]/15 px-2 py-0.5 font-bold text-[#7fd6a4]">100%</span>
        </div>
        <div className="flex items-center justify-between px-2 text-xs text-white/60">
          <span>Category</span>
          <span className="font-semibold text-white/85">Office Expenses</span>
        </div>
      </div>

      <div className="flex justify-center py-1 text-[#8c96c8]"><ArrowDown className="h-4 w-4" /></div>

      <div className="flex items-center gap-3 rounded-2xl border border-[#c7cfec]/12 bg-white/[0.03] px-4 py-3">
        <FileCheck2 className="h-4 w-4 shrink-0 text-[#8c96c8]" />
        <span className="flex-1 text-sm font-semibold">Evidence pack ready</span>
        <span className="rounded-full bg-[#5f6ec7]/25 px-2.5 py-0.5 text-xs font-bold text-[#c7cfec]">3 items</span>
      </div>
    </div>
  )
}

export const taxAwareChips = [
  { icon: Camera, label: 'Receipt capture' },
  { icon: Landmark, label: 'Tax context' },
  { icon: FolderOpen, label: 'Evidence pack' },
]
