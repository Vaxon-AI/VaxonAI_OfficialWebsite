import Image from 'next/image'
import Link from 'next/link'

// Two forms:
// - default (header, dark navy bg): transparent mark floats directly on the bar
// - compact (footer, light bg): navy chip badge — the transparent PNG has minor
//   edge artifacts on white, so the tiled JPG stays the light-surface treatment
export function BrandMark({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <Link href="/" className="flex items-center gap-2.5" aria-label="Vaxon home">
        <span className="relative flex h-8 w-8 overflow-hidden rounded-lg bg-slate-950 ring-1 ring-slate-800">
          <Image src="/vaxon-mark.jpg" alt="" fill sizes="32px" className="object-cover" />
        </span>
        <span className="flex min-w-0 flex-col leading-none">
          <span className="text-[13px] font-semibold tracking-[0.2em] text-current">VAXON</span>
          <span className="mt-1 hidden text-[10px] font-medium text-current/55 sm:block">AI systems for real work</span>
        </span>
      </Link>
    )
  }

  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Vaxon home">
      <Image
        src="/vaxon-mark-transparent.png"
        alt=""
        width={590}
        height={452}
        priority
        className="h-8 w-auto"
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-[0.2em] text-current">VAXON</span>
        <span className="mt-1 hidden text-[11px] font-medium text-current/55 sm:block">AI systems for real work</span>
      </span>
    </Link>
  )
}
