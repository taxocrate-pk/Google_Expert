import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { site } from "@/lib/site"

export function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">{eyebrow}</p>
      <h2 className="mt-5 font-display text-4xl font-black leading-[1.02] tracking-[-0.04em] text-balance sm:text-5xl">{title}</h2>
      {copy && <p className="mt-6 text-lg leading-7 text-muted-foreground">{copy}</p>}
    </div>
  )
}

export function Glow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(600px_380px_at_75%_35%,rgba(255,87,34,.22),transparent_70%),radial-gradient(500px_300px_at_10%_0%,rgba(255,152,0,.10),transparent_70%)]" />
  )
}

export function Checks({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3">
      {items.map((li) => (
        <li key={li} className="flex gap-3 text-muted-foreground">
          <Check size={18} className="mt-1 shrink-0 text-accent" />
          <span>{li}</span>
        </li>
      ))}
    </ul>
  )
}

export function Faq({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="mt-10 grid gap-3">
      {faqs.map((f) => (
        <details key={f.q} className="group rounded-2xl border border-accent/15 bg-card/60 p-5 open:border-accent/40">
          <summary className="cursor-pointer font-display text-lg font-bold">{f.q}</summary>
          <p className="mt-3 leading-7 text-muted-foreground">{f.a}</p>
        </details>
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  )
}

export function CtaBand({ title = "Get a free Google Ads audit", text = "Send us your website and, if you have one, read-only access to your Google Ads account. We will show you where money is being wasted and what we would do first." }: { title?: string; text?: string }) {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-accent/30 bg-card/70 p-10 sm:p-14">
        <Glow />
        <h2 className="max-w-2xl font-display text-4xl font-black leading-tight tracking-[-0.03em]">{title}</h2>
        <p className="mt-5 max-w-2xl text-lg leading-7 text-muted-foreground">{text}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/contact/" className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 font-semibold text-accent-foreground transition hover:shadow-xl hover:shadow-accent/25">
            Request the free audit <ArrowRight className="transition group-hover:translate-x-1" />
          </Link>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-7 py-4 font-medium transition hover:border-accent hover:bg-accent/10">
            WhatsApp {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
