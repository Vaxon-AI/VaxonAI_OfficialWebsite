import type { Metadata } from 'next'
import { CtaBand } from '@/components/cta-band'
import { absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn why Vaxon exists, why it starts with email, and the product principles behind its AI workflow systems.',
  alternates: { canonical: absoluteUrl('/about') },
}

const principles = [
  ['Start with real work', 'Build where people already feel the workflow pain, then make the surrounding system clearer.'],
  ['Make AI inspectable', 'Users should see what the product inferred, where it came from, and how to correct it.'],
  ['Earn automation', 'Automation should follow review and trust, not replace judgment before the product has earned it.'],
  ['Preserve context', 'Useful AI products should keep source material, task status, and project context connected.'],
]

const teamSlots = [
  ['Founder profile', 'Product, engineering, and company direction.', 'Add name, title, short bio, and portrait when ready.'],
  ['Team or advisor profile', 'Workflow systems, go-to-market, or domain expertise.', 'Use this row for a real collaborator, advisor, or early team member.'],
]

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="page-kicker">About Vaxon</p>
            <h1 className="page-title">Why Vaxon exists.</h1>
          </div>
          <div>
            <p className="page-intro">
              Vaxon is an Australia-based early-stage AI product company. We build practical systems that help people understand, prioritize, and act on work without turning AI into another noisy layer.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              The company starts with email because email is still where commitments, deadlines, approvals, and decisions enter daily work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#191c1f] md:text-5xl">
            The work layer between communication and execution.
          </h2>
          <div className="plain-line-list">
            <div className="py-7">
              <p className="text-sm font-semibold text-[#191c1f]">The belief</p>
              <p className="mt-3 max-w-2xl text-base leading-8 text-[#505a63]">
                AI becomes useful when it helps people see what work exists, what it means, what status it is in, and what action is safe to take next.
              </p>
            </div>
            <div className="py-7">
              <p className="text-sm font-semibold text-[#191c1f]">Why email first</p>
              <p className="mt-3 max-w-2xl text-base leading-8 text-[#505a63]">
                Email is not fashionable, but it is honest. It carries real work from customers, partners, investors, suppliers, teams, and institutions. Making that work structured is a practical starting point.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-rule bg-white py-16 md:py-24">
        <div className="shell">
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#191c1f] md:text-6xl">
            Product principles.
          </h2>
          <div className="mt-12 plain-line-list">
            {principles.map(([title, copy], index) => (
              <div key={title} className="grid gap-4 py-7 md:grid-cols-[5rem_14rem_1fr]">
                <p className="text-sm font-semibold text-[#494fdf]">0{index + 1}</p>
                <p className="text-sm font-semibold text-[#191c1f]">{title}</p>
                <p className="max-w-2xl text-sm leading-7 text-[#505a63]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="page-kicker">Team</p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
              Built by a small product-minded team.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-white/64">
              This section is ready for real member profiles. Add names, roles, portraits, and short bios when the company page is ready to publish.
            </p>
          </div>
          <div className="border-t border-white/14">
            {teamSlots.map(([name, role, bio], index) => (
              <div key={name} className="team-slot">
                <div className="team-avatar">0{index + 1}</div>
                <div>
                  <p className="text-xl font-semibold tracking-[-0.035em]">{name}</p>
                  <p className="mt-2 text-sm font-semibold text-[#7b80ff]">{role}</p>
                </div>
                <p className="text-sm leading-7 text-white/58">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
