import Image from 'next/image'
import Link from 'next/link'

export function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Vaxon home">
      <span className="relative flex h-10 w-10 overflow-hidden rounded-xl bg-slate-950 ring-1 ring-slate-800">
        <Image src="/vaxon-mark.png" alt="" fill sizes="40px" className="object-cover" priority />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-[0.2em] text-slate-950">VAXON</span>
        <span className="mt-1 hidden text-[11px] font-medium text-slate-500 sm:block">AI products for work</span>
      </span>
    </Link>
  )
}
