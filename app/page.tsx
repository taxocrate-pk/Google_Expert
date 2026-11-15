import Link from "next/link"
import { ArrowRight, BarChart3, Megaphone, PlayCircle, Search, ShoppingBag, Target } from "lucide-react"
import { services } from "@/lib/services"
import { site } from "@/lib/site"
import { CtaBand, Faq, Glow, SectionIntro } from "@/components/blocks"
import { PricingCards } from "@/components/pricing-cards"

const icons = [Target, Search, ShoppingBag, PlayCircle, Megaphone, BarChart3]

const process = [
  ["01", "Audit", "We review your account, website and tracking, and find where money is wasted."],
  ["02", "Build", "Campaigns structured by service and location, with buying keywords and strong ads."],
  ["03", "Optimise", "Every week: search terms, bids, ads and budgets moved to what brings leads."],
  ["04", "Report", "Every month: spend, leads and cost per lead in plain words, and the next steps."],
]

const faqs = [
  { q: "What does a Google Ads expert do?", a: "A Google Ads expert plans, builds and manages your campaigns: choosing keywords, writing ads, setting bids and budgets, blocking wasted searches and tracking conversions, so you get more customers for the same spend." },
  { q: "How much do you charge for Google Ads management?", a: "Plans start at US$299 a month (PKR 30,000 in Pakistan) for ad spend up to US$3,000. Larger accounts pay 10% of ad spend. Ad spend is paid directly to Google." },
  { q: "Do you work with clients outside Pakistan?", a: "Yes. Most of our paid marketing clients are in the UK, USA, Canada, the UAE and Australia. We work online and schedule calls in your time zone." },
  { q: "Is there a long contract?", a: "No. Plans are month to month after the first three months, which campaigns need to learn and settle." },
]

export default function Home() {
  return (
    <>
      <section className="relative px-6 pb-24 pt-40 lg:px-8">
        <Glow />
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.32em] text-accent">Google Ads · Paid Marketing Experts</p>
            <h1 className="font-display text-5xl font-black leading-[.95] tracking-[-0.05em] sm:text-7xl lg:text-[5.6rem]">
              Google Ads management that <span className="text-accent">pays back.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Google&apos;s Expert builds and runs Google Ads, Performance Max, YouTube and Meta campaigns for businesses in the UK, USA, Canada, UAE, Australia and Pakistan — measured by cost per lead, not clicks.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact/" className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 font-semibold text-accent-foreground transition hover:shadow-xl hover:shadow-accent/25">
                Get a free Google Ads audit <ArrowRight className="transition group-hover:translate-x-1" />
              </Link>
              <Link href="/pricing/" className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-7 py-4 font-medium transition hover:border-accent hover:bg-accent/10">
                See pricing
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              ["Cost per lead", "The number we report first, every month."],
              ["Weekly optimisation", "Search terms, bids and ads reviewed every week."],
              ["Your account, your data", "Ad spend paid directly to Google. You own everything."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-accent/20 bg-card/70 p-6 backdrop-blur-xl">
                <p className="font-display text-2xl font-bold">{t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent/5 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="What we do" title="Google Ads and paid marketing services." copy="One team for search, shopping, video and social ads — with one goal: more customers for less money." />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = icons[i % icons.length]
              return (
                <Link key={s.slug} href={`/${s.slug}/`} className="group rounded-2xl border border-accent/15 bg-card/60 p-7 transition hover:-translate-y-1 hover:border-accent/50 hover:bg-card">
                  <Icon className="mb-10 text-accent" />
                  <h3 className="font-display text-2xl font-bold">{s.short}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{s.card}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">Learn more <ArrowRight size={16} /></span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <SectionIntro eyebrow="Why Google's Expert" title="Cost per lead, not clicks." />
          <div>
            <p className="text-2xl leading-relaxed text-foreground/90">Paid marketing only matters if it brings customers. We set up tracking first, so every call, form and WhatsApp message is traced back to the ad and keyword that brought it.</p>
            <p className="mt-6 leading-7 text-muted-foreground">Our team works from Islamabad, Pakistan. Businesses in London, New York, Toronto, Dubai and Sydney get senior campaign management at a fraction of local agency fees, with calls scheduled in their own working hours.</p>
          </div>
        </div>
      </section>

      <section className="bg-accent/5 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="How we work" title="From audit to profitable campaigns." />
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {process.map(([n, t, d]) => (
              <div key={n} className="border-t border-accent/40 pt-5">
                <div className="font-display text-4xl font-black text-accent">{n}</div>
                <h3 className="mt-6 font-display text-xl font-bold">{t}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Pricing" title="Simple, fixed management fees." copy="Ad spend is paid directly to Google or Meta. Our fee is separate, fixed and shown up front." />
          <PricingCards />
        </div>
      </section>

      <section className="bg-accent/5 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionIntro eyebrow="FAQ" title="Questions about Google Ads management" />
          <Faq faqs={faqs} />
        </div>
      </section>

      <CtaBand />
      <p className="sr-only">Contact {site.name}: {site.phone}, {site.email}</p>
    </>
  )
}
