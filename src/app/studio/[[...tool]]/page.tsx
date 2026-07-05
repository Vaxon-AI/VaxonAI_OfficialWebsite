'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

const configured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)

export default function StudioPage() {
  if (!configured) {
    return (
      <main className="shell py-24">
        <h1 className="text-2xl font-semibold text-[#12162e]">Studio is not configured yet</h1>
        <p className="mt-4 max-w-xl text-base leading-8 text-[#4e5573]">
          Set <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> (and optionally <code>NEXT_PUBLIC_SANITY_DATASET</code>) in
          your environment variables, then redeploy. See the Sanity setup steps in the project docs.
        </p>
      </main>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <NextStudio config={config} />
    </div>
  )
}
