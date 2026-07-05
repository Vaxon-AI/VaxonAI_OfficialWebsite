'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schema'

// Project id / dataset come from Vercel (and .env.local) env vars.
// Required: NEXT_PUBLIC_SANITY_PROJECT_ID
// Optional: NEXT_PUBLIC_SANITY_DATASET (defaults to "production")
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'vaxon',
  title: 'Vaxon Content',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
})
