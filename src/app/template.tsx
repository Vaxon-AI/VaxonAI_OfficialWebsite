// Re-mounts on every route change — gives each page an entrance
// transition without touching the header/footer in the root layout.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>
}
