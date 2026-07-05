import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  company: z.string().trim().max(160).optional().or(z.literal('')),
  intent: z.enum([
    'Workflow automation',
    'Knowledge base & documents',
    'AI assistant or chatbot',
    'Partnership',
    'Other',
  ]),
  message: z.string().trim().min(10).max(4000),
})

export async function POST(request: Request) {
  const parsed = contactSchema.safeParse(await request.json().catch(() => null))

  if (!parsed.success) {
    return NextResponse.json({ error: 'Please check the form and try again.' }, { status: 400 })
  }

  const requiredEnv = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_TO']
  const missing = requiredEnv.filter((key) => !process.env[key])

  if (missing.length > 0) {
    return NextResponse.json({ error: 'Contact email is not configured yet.' }, { status: 503 })
  }

  const data = parsed.data
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    to: process.env.CONTACT_TO,
    replyTo: data.email,
    subject: `[Vaxon] ${data.intent} inquiry from ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || 'N/A'}`,
      `Intent: ${data.intent}`,
      '',
      data.message,
    ].join('\n'),
  })

  return NextResponse.json({ ok: true })
}
