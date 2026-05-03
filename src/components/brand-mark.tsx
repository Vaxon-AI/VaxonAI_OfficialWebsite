import Image from 'next/image'
import Link from 'next/link'

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className={`flex items-center ${compact ? 'gap-2.5' : 'gap-3'}`} aria-label="Vaxon home">
      <span className={`relative flex overflow-hidden bg-slate-950 ring-1 ring-slate-800 ${compact ? 'h-8 w-8 rounded-lg' : 'h-10 w-10 rounded-xl'}`}>
        <Image src="/vaxon-mark.png" alt="" fill sizes={compact ? '32px' : '40px'} className="object-cover" priority />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className={`${compact ? 'text-[13px]' : 'text-[15px]'} font-semibold tracking-[0.2em] text-current`}>VAXON</span>
        <span className={`${compact ? 'text-[10px]' : 'text-[11px]'} mt-1 hidden font-medium text-current/55 sm:block`}>AI products for work</span>
      </span>
    </Link>
  )
}
