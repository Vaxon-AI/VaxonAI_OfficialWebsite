import {
  Mail,
  Sparkles,
  ListChecks,
  UserCheck,
  FileText,
  Image as ImageIcon,
  Search,
  Globe,
  Video,
  Languages,
  MessageCircle,
  ArrowDown,
} from 'lucide-react'

// Code-drawn animated explainers — one small diagram per service.
// Pure CSS animations (float loops), no client JS, brand palette only.

const stagger = (index: number) => ({ animationDelay: `${index * 160}ms` })

export function WorkflowVisual() {
  return (
    <div className="viz-panel" aria-hidden="true">
      <div className="viz-row" style={stagger(0)}>
        <span className="viz-icon"><Mail className="h-4 w-4" /></span>
        Contract changes due Tuesday
        <span className="viz-chip">Email in</span>
      </div>
      <div className="viz-row" style={stagger(1)}>
        <span className="viz-icon"><Sparkles className="h-4 w-4" /></span>
        Action detected — deadline + approval
        <span className="viz-chip">Classified</span>
      </div>
      <div className="viz-row" style={stagger(2)}>
        <span className="viz-icon"><ListChecks className="h-4 w-4" /></span>
        Review clauses 3 &amp; 7 · Due Tue
        <span className="viz-chip">Task suggested</span>
      </div>
      <div className="viz-row" style={stagger(3)}>
        <span className="viz-icon"><UserCheck className="h-4 w-4" /></span>
        You accept, edit, or reject
        <span className="viz-chip">Human review</span>
      </div>
    </div>
  )
}

export function DocumentsVisual() {
  return (
    <div className="viz-panel" aria-hidden="true">
      <div className="flex flex-wrap gap-2">
        {[
          { icon: FileText, label: 'contract_v3.pdf' },
          { icon: FileText, label: 'invoice_0224.docx' },
          { icon: ImageIcon, label: 'site-photo.png' },
        ].map(({ icon: Icon, label }) => (
          <span key={label} className="marquee-chip !bg-[#f6f7fa]">
            <Icon className="h-3.5 w-3.5 text-[#5f6ec7]" />
            {label}
          </span>
        ))}
      </div>
      <div className="flex justify-center text-[#8c96c8]"><ArrowDown className="h-4 w-4" /></div>
      <div className="viz-row" style={stagger(1)}>
        <span className="viz-icon"><Sparkles className="h-4 w-4" /></span>
        Tagged: #contract #vendor #2026
        <span className="viz-chip">Auto-classified</span>
      </div>
      <div className="viz-row" style={stagger(2)}>
        <span className="viz-icon"><Search className="h-4 w-4" /></span>
        &ldquo;What did we agree with the vendor?&rdquo;
        <span className="viz-chip">Source: contract_v3.pdf</span>
      </div>
    </div>
  )
}

export function ResearchVisual() {
  return (
    <div className="viz-panel" aria-hidden="true">
      <div className="viz-row" style={stagger(0)}>
        <span className="viz-icon"><Globe className="h-4 w-4" /></span>
        12 sources searched &amp; summarised
        <span className="viz-chip">Web</span>
      </div>
      <div className="viz-row" style={stagger(1)}>
        <span className="viz-icon"><Video className="h-4 w-4" /></span>
        48-min video → subtitles extracted
        <span className="viz-chip">Video</span>
      </div>
      <div className="viz-row" style={stagger(2)}>
        <span className="viz-icon"><Languages className="h-4 w-4" /></span>
        Rewritten as clean prose · translated
        <span className="viz-chip">EN ⇄ 中文</span>
      </div>
    </div>
  )
}

export function AssistantVisual() {
  return (
    <div className="viz-panel" aria-hidden="true">
      <div className="viz-row" style={stagger(0)}>
        <span className="viz-icon"><MessageCircle className="h-4 w-4" /></span>
        &ldquo;Where is my order?&rdquo;
        <span className="viz-chip">Customer</span>
      </div>
      <div className="viz-row" style={stagger(1)}>
        <span className="viz-icon"><Sparkles className="h-4 w-4" /></span>
        Answered from your knowledge base
        <span className="viz-chip">Source linked</span>
      </div>
      <div className="viz-row" style={stagger(2)}>
        <span className="viz-icon"><UserCheck className="h-4 w-4" /></span>
        Complex case → handed to your team
        <span className="viz-chip">Human handoff</span>
      </div>
    </div>
  )
}
