import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { getService, services } from "@/lib/services"
import { site } from "@/lib/site"
import { Checks, CtaBand, Faq, Glow } from "@/components/blocks"

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return {}
  return { title: s.title, description: s.description, alternates: { canonical: `/${s.slug}/` }, openGraph: { title: s.title, description: s.description } }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) notFound()
  const others = services.filter((o) => o.slug !== s.slug)
  return (
    <>
      <section className="relative px-6 pb-20 pt-40 lg:px-8">
        <Glow />
        <div className="mx-auto max-w-5xl">
          <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground">Home</Link> <span aria-hidden="true">/</span> <span aria-current="page">{s.short}</span>
          </nav>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-accent">{s.eyebrow}</p>
          <h1 className="font-display text-5xl font-black leading-[.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            {s.h1} <span className="text-accent">{s.accent}</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">{s.intro}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact/" className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 font-semibold text-accent-foreground transition hover:shadow-xl hover:shadow-accent/25">
              Get a free audit <ArrowRight className="transition group-hover:translate-x-1" />
            </Link>
            <Link href="/pricing/" className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-7 py-4 font-medium transition hover:border-accent hover:bg-accent/10">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-accent/5 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {s.points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-accent/15 bg-card/60 p-7">
              <h2 className="font-display text-2xl font-bold">{p.title}</h2>
              <p className="mt-4 leading-7 text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {s.sections.map((sec) => (
        <section key={sec.title} className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-4xl font-black tracking-[-0.03em]">{sec.title}</h2>
            {sec.body.map((b, i) => (Array.isArray(b) ? <Checks key={i} items={b} /> : <p key={i} className="mt-5 text-lg leading-8 text-muted-foreground">{b}</p>))}
          </div>
        </section>
      ))}

      <section className="bg-accent/5 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl font-black tracking-[-0.03em]">Frequently asked questions</h2>
          <Faq faqs={s.faqs} />
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold">Other paid marketing services</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/${o.slug}/`} className="rounded-full border border-foreground/15 px-5 py-2 text-sm text-muted-foreground transition hover:border-accent hover:text-foreground">
                {o.short} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.short,
            description: s.description,
            url: `${site.url}/${s.slug}/`,
            provider: { "@id": `${site.url}/#organization` },
            areaServed: ["GB", "US", "CA", "AE", "SA", "AU", "PK"],
          }),
        }}
      />
    </>
  )
}
