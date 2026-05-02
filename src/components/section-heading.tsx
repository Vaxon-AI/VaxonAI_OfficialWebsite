type SectionHeadingProps = {
  title: string
  description?: string
  invert?: boolean
}

export function SectionHeading({ title, description, invert = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <h2 className={`text-3xl font-semibold tracking-[-0.035em] md:text-5xl ${invert ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      {description ? <p className={`mt-5 text-base leading-7 ${invert ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p> : null}
    </div>
  )
}
