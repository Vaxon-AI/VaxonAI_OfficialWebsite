'use client'

import { usePathname } from 'next/navigation'

// Keyed on pathname so EVERY navigation re-mounts the page body —
// including moves between dynamic siblings like /services/a -> /services/b.
// Header/footer live in layout.tsx and stay static.
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  )
}
