'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

const intents = ['Customer', 'Investor', 'Partner', 'Careers', 'Other']

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('submitting')
    setError('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const body = await response.json().catch(() => null)
      setError(body?.error ?? 'Something went wrong. Please try again.')
      setState('error')
      return
    }

    form.reset()
    setState('success')
  }

  return (
    <form onSubmit={handleSubmit} className="border border-slate-200 bg-white p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Name
          <input name="name" required minLength={2} className="border border-slate-200 px-4 py-3 text-sm font-normal outline-none transition focus:border-slate-950" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Email
          <input name="email" required type="email" className="border border-slate-200 px-4 py-3 text-sm font-normal outline-none transition focus:border-slate-950" />
        </label>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Company
          <input name="company" className="border border-slate-200 px-4 py-3 text-sm font-normal outline-none transition focus:border-slate-950" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Intent
          <select name="intent" required defaultValue="Customer" className="border border-slate-200 bg-white px-4 py-3 text-sm font-normal outline-none transition focus:border-slate-950">
            {intents.map((intent) => (
              <option key={intent} value={intent}>{intent}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-800">
        Message
        <textarea name="message" required minLength={10} rows={6} className="resize-none border border-slate-200 px-4 py-3 text-sm font-normal outline-none transition focus:border-slate-950" />
      </label>

      {state === 'success' ? (
        <p className="mt-4 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
          Thanks. Your message has been sent to Vaxon.
        </p>
      ) : null}
      {state === 'error' ? (
        <p className="mt-4 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={state === 'submitting'}
        style={{ backgroundColor: '#020618', color: '#f8fafc' }}
        className="primary-action mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        {state === 'submitting' ? 'Sending...' : 'Send message'}
        <Send className="h-4 w-4" />
      </button>
    </form>
  )
}
