import Link from "next/link"

export default function NotFound() {
  return (
    <section className="px-6 pb-24 pt-44 text-center lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">404</p>
      <h1 className="mt-5 font-display text-5xl font-black">This page does not exist.</h1>
      <p className="mt-5 text-muted-foreground">Try our <Link href="/google-ads-management/" className="text-accent">Google Ads management</Link> page or go back <Link href="/" className="text-accent">home</Link>.</p>
    </section>
  )
}
