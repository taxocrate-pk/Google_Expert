import Link from "next/link"
import { Check } from "lucide-react"
import { plans } from "@/lib/pricing"

export function PricingCards() {
  return (
    <div className="mt-14 grid gap-5 lg:grid-cols-3">
      {plans.map((p) => (
        <article key={p.name} className={`flex flex-col rounded-3xl border p-8 ${p.featured ? "border-accent bg-accent/10 shadow-2xl shadow-accent/10" : "border-accent/15 bg-card/60"}`}>
          {p.featured && <span className="mb-4 w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground">Most popular</span>}
          <h3 className="font-display text-2xl font-bold">{p.name}</h3>
          <p className="mt-5 font-display text-5xl font-black tracking-tight">
            {typeof p.usd === "number" ? `$${p.usd}` : p.usd}
            <span className="ml-2 text-base font-medium text-muted-foreground">{typeof p.usd === "number" ? "/ month" : "of ad spend"}</span>
          </p>
          {typeof p.usd === "number" && <p className="mt-2 text-sm text-muted-foreground">Pakistan: PKR {p.pkr} / month</p>}
          <p className="mt-4 text-sm text-foreground/80">{p.spend}</p>
          <ul className="mt-6 grid flex-1 gap-3">
            {p.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm text-muted-foreground"><Check size={17} className="mt-0.5 shrink-0 text-accent" />{f}</li>
            ))}
          </ul>
          <Link href="/contact/" className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 font-semibold transition ${p.featured ? "bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/25" : "border border-foreground/20 hover:border-accent hover:bg-accent/10"}`}>
            Get started
          </Link>
        </article>
      ))}
    </div>
  )
}
