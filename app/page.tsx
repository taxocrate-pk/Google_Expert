"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  ChevronRight,
  Code2,
  Globe2,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Moon,
  PenLine,
  Search,
  Send,
  Sparkles,
  Sun,
  Target,
  X,
} from "lucide-react"

const services = [
  { icon: Target, title: "Google Ads (PPC)", text: "Search, Performance Max and YouTube campaigns built around buying keywords, with negative keywords that stop wasted spend." },
  { icon: Megaphone, title: "Facebook & Instagram Ads", text: "Meta campaigns with clear creative, lead forms and WhatsApp buttons, then retargeting for everyone who engaged." },
  { icon: Search, title: "Social Media Marketing", text: "Monthly content calendars, post and reel designs, and community replies that keep your pages active and trusted." },
  { icon: PenLine, title: "TikTok & LinkedIn Ads", text: "Short-video and B2B campaigns for audiences that do not live on Google or Facebook." },
  { icon: BarChart3, title: "Conversion Tracking", text: "GA4, Tag Manager, Meta Pixel and call and WhatsApp tracking set up before a single rupee or pound is spent." },
  { icon: Code2, title: "PPC Audits & Reporting", text: "An honest review of your current campaigns, then monthly reports showing cost per lead, not vanity clicks." },
]

const process = [
  ["01", "Understand", "We learn your market, your customers, and the commercial goals behind your marketing."],
  ["02", "Prioritize", "We find the highest-impact opportunities and turn them into a focused growth roadmap."],
  ["03", "Execute", "Our strategists, writers, and performance marketers do the work with care and momentum."],
  ["04", "Improve", "You get clear reporting, honest recommendations, and a program that gets sharper over time."],
]

const work = ["All Work", "Google Ads", "Meta Ads", "Social Media", "TikTok"]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [visible, setVisible] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setVisible((state) => ({ ...state, [entry.target.id]: true }))),
      { threshold: 0.12 },
    )
    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-accent/15 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="#top" className="flex items-center" aria-label="Google's Expert home">
            <Image src="/google-expert-logo.webp" alt="Google's Expert logo" width={220} height={116} priority className="h-11 w-auto object-contain sm:h-12" />
          </Link>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            <div className="group relative">
              <Link href="#services" className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
                Services <ChevronDown size={14} className="transition duration-200 group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-accent/15 bg-card/95 p-2 shadow-xl backdrop-blur-xl">
                  {services.map(({ icon: Icon, title }) => (
                    <Link key={title} href="#services" className="flex items-center justify-center gap-3 rounded-xl px-3 py-2.5 text-center text-sm text-muted-foreground transition hover:bg-accent/10 hover:text-foreground">
                      <Icon size={16} className="text-accent" /> {title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {[["Our Work", "#work"], ["About", "#about"], ["Insights", "#insights"]].map(([label, href]) => <Link key={href} href={href} className="text-muted-foreground transition-colors hover:text-foreground">{label}</Link>)}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden items-center gap-3 md:flex">
              <Link href="#contact" className="rounded-full border border-accent/35 px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent hover:bg-accent/10">Let&apos;s talk</Link>
            </div>
            <button className="text-foreground md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-accent/15 px-6 py-6 md:hidden">{[["Services", "#services"], ["Our Work", "#work"], ["About", "#about"], ["Insights", "#insights"], ["Let&apos;s talk", "#contact"]].map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="text-muted-foreground">{label}</Link>)}</nav>}
      </header>

      <section id="top" className="relative flex min-h-[780px] items-center px-6 pb-20 pt-36 lg:px-8">
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-70"><Image src="/images/black-hole-gif.gif" alt="" width={850} height={850} className="h-[650px] w-[650px] object-contain" priority /></div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_65%_45%,transparent_0%,var(--background)_62%)]" />
        <div className={`mx-auto grid w-full max-w-7xl gap-16 transition-all duration-1000 lg:grid-cols-[1.05fr_.95fr] lg:items-center ${visible.top ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.32em] text-accent">PPC Management · Social Media Marketing</p>
            <h1 className="max-w-4xl font-display text-6xl font-black leading-[.95] tracking-[-0.06em] text-foreground sm:text-7xl lg:text-[6.8rem]">PPC and Social Media Marketing that <span className="text-accent">pays back.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">PPC and social media marketing by Google&apos;s Expert: Google Ads, Facebook, Instagram, TikTok and LinkedIn campaigns measured by cost per enquiry — for clients in the UK, USA, Canada, UAE, Australia and Pakistan.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row"><Link href="#contact" className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 font-semibold text-accent-foreground transition hover:shadow-xl hover:shadow-accent/25">Start a conversation <ArrowRight className="transition group-hover:translate-x-1" /></Link><Link href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-7 py-4 font-medium text-foreground transition hover:border-accent hover:bg-accent/10">Explore our services</Link></div>
          </div>
          <div className="relative hidden min-h-[420px] lg:block"><div className="absolute right-4 top-8 max-w-xs rounded-2xl border border-accent/30 bg-card/75 p-6 backdrop-blur-xl"><Sparkles className="mb-8 text-accent" /><p className="font-display text-2xl font-bold leading-tight">Every click should earn its cost.</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">We track every lead back to the ad that brought it.</p></div><div className="absolute bottom-4 left-10 flex size-48 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-center backdrop-blur-xl"><div><span className="block font-display text-5xl font-black text-accent">ROI</span><span className="text-xs uppercase tracking-widest text-muted-foreground">over noise</span></div></div></div>
        </div>
      </section>

      <section id="services" className="bg-accent/5 px-6 py-28 lg:px-8"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="What we do" title="PPC and social media marketing services." copy="Paid search and paid social, managed by one team with one goal: more enquiries for less money." /><div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: Icon, title, text }, i) => <article key={title} className={`group rounded-2xl border border-accent/15 bg-card/60 p-7 transition duration-700 hover:-translate-y-1 hover:border-accent/50 hover:bg-card ${visible.services ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`} style={{ transitionDelay: `${i * 100}ms` }}><Icon className="mb-16 text-accent" /><h3 className="font-display text-2xl font-bold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p><Link href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent">Learn more <ChevronRight size={16} /></Link></article>)}</div></div></section>

      <section id="about" className="px-6 py-28 lg:px-8"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">Why Google&apos;s Expert</p><h2 className="mt-5 font-display text-5xl font-black leading-[.98] tracking-[-0.04em] sm:text-6xl">Cost per lead, not likes.</h2></div><div><p className="text-2xl leading-relaxed text-foreground/90">PPC and social media marketing only matters if it brings customers. We report spend, leads and cost per lead every month — in plain language.</p><p className="mt-7 max-w-2xl leading-7 text-muted-foreground">Our team works from Islamabad, Pakistan, so businesses in London, New York, Toronto, Dubai and Sydney get senior campaign management at a fraction of local agency fees. Ad spend is paid directly to Google or Meta; you keep full ownership of every account.</p></div></div></section>

      <section id="work" className="bg-accent/5 px-6 py-28 lg:px-8"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="Selected work" title="Campaign types we run." copy="Search, social and video campaigns matched to how your customers buy." /><div className="mt-12 flex flex-wrap gap-3">{work.map((item, i) => <button key={item} className={`rounded-full px-5 py-2 text-sm ${i === 0 ? "bg-accent text-accent-foreground" : "border border-foreground/15 text-muted-foreground hover:border-accent hover:text-foreground"}`}>{item}</button>)}</div><div className="mt-12 grid gap-5 md:grid-cols-2"><WorkCard title="Lead generation on Google Search" tag="Google Ads · PPC" color="from-accent/35" /><WorkCard title="WhatsApp leads from Instagram and Facebook" tag="Meta Ads · Social" color="from-orange-950" /></div></div></section>

      <section id="process" className="px-6 py-28 lg:px-8"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="How we work" title="A clear path from question to growth." /><div className="mt-16 grid gap-4 md:grid-cols-4">{process.map(([number, title, text]) => <div key={number} className="border-t border-accent/40 pt-5"><div className="font-display text-4xl font-black text-accent">{number}</div><h3 className="mt-8 font-display text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></div>)}</div></div></section>

      <section id="insights" className="bg-accent/5 px-6 py-28 lg:px-8"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionIntro eyebrow="From the field" title="Insights for the road ahead." copy="Practical thinking for people building brands, products, and businesses online." /><Link href="#contact" className="inline-flex items-center gap-2 font-semibold text-accent">View all insights <ArrowRight size={18} /></Link></div><div className="mt-14 grid gap-5 md:grid-cols-3">{["How to cut wasted spend in Google Ads", "Facebook vs Instagram ads: where your leads come from", "Measuring cost per lead, not cost per click"].map((title, i) => <article key={title} className="group border-t border-foreground/15 pt-5"><p className="text-xs uppercase tracking-widest text-accent">{["PPC", "Social", "Reporting"][i]} · 5 min read</p><h3 className="mt-5 font-display text-2xl font-bold leading-tight group-hover:text-accent">{title}</h3><Link href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">Read insight <ArrowRight size={15} /></Link></article>)}</div></div></section>

      <section id="contact" className="px-6 py-28 lg:px-8"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">Let&apos;s work together</p><h2 className="mt-5 font-display text-5xl font-black leading-[.98] tracking-[-0.04em] sm:text-6xl">Start a PPC or social campaign.</h2><p className="mt-6 max-w-md leading-7 text-muted-foreground">Tell us where you want to go. We will bring the honest questions, useful ideas, and a plan for getting there.</p><div className="mt-10 flex flex-col gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-3"><Mail size={17} className="text-accent" /> <a href="mailto:hello@googlesexpert.com">hello@googlesexpert.com</a></span><span className="flex items-center gap-3"><Send size={17} className="text-accent" /> <a href="https://wa.me/923316644789" target="_blank" rel="noopener">WhatsApp / call +92 331 6644789</a></span><span className="flex items-center gap-3"><Globe2 size={17} className="text-accent" /> Office No. 5, 2nd Floor, Laraib Plaza, Karachi Company, G-9 Markaz, Islamabad</span></div></div><form className="rounded-2xl border border-accent/20 bg-card/60 p-6 sm:p-8" onSubmit={(event) => { event.preventDefault(); const f = new FormData(event.currentTarget); const msg = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\nCompany: ${f.get('company') || '-'}\n${f.get('message')}`; window.open(`https://wa.me/923316644789?text=${encodeURIComponent(msg)}`, '_blank'); setSubmitted(true) }}>{submitted ? <div className="flex min-h-72 flex-col items-center justify-center text-center"><div className="mb-5 flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check /></div><h3 className="font-display text-3xl font-bold">Opening WhatsApp…</h3><p className="mt-3 text-muted-foreground">Press send in WhatsApp and we will reply the same day.</p></div> : <><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm text-muted-foreground">Name<input required name="name" className="mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent" /></label><label className="text-sm text-muted-foreground">Email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent" /></label></div><label className="mt-5 block text-sm text-muted-foreground">Company<input name="company" className="mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent" /></label><label className="mt-5 block text-sm text-muted-foreground">How can we help?<textarea required name="message" rows={5} className="mt-2 w-full resize-none rounded-xl border border-foreground/15 bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent" /></label><button className="mt-6 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:shadow-lg hover:shadow-accent/20">Send on WhatsApp <Send size={17} /></button></>}</form></div></section>

      <footer className="border-t border-accent/15 px-6 py-10 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><div className="flex items-center gap-3"><Image src="/apple-icon.png" alt="Google's Expert logo" width={30} height={30} className="size-7 rounded-full object-cover" /><span className="font-display font-bold">Google&apos;s Expert</span></div><p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">PPC management and social media marketing for businesses worldwide.</p></div><div className="flex flex-col gap-3 text-sm text-muted-foreground md:items-end"><span className="flex items-center gap-2"><MapPin size={15} className="text-accent" /> G-9 Markaz, Islamabad, Pakistan</span><span>© 2026 Google&apos;s Expert. All rights reserved.</span></div></div></footer>
    </main>
  )
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">{eyebrow}</p><h2 className="mt-5 font-display text-5xl font-black leading-[.98] tracking-[-0.05em] text-balance sm:text-6xl">{title}</h2>{copy && <p className="mt-6 text-lg leading-7 text-muted-foreground">{copy}</p>}</div>
}

function WorkCard({ title, tag, color }: { title: string; tag: string; color: string }) {
  return <article className={`group relative min-h-80 overflow-hidden rounded-2xl bg-gradient-to-br ${color} to-card p-8`}><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,87,34,.28),transparent_40%)] transition duration-500 group-hover:scale-125" /><div className="relative flex h-full flex-col justify-between"><div><p className="text-xs font-semibold uppercase tracking-widest text-accent">{tag}</p><h3 className="mt-5 max-w-sm font-display text-4xl font-bold leading-tight">{title}</h3></div><Link href="#contact" className="flex items-center gap-2 text-sm font-semibold">View case study <ArrowRight size={16} /></Link></div></article>
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex size-9 items-center justify-center rounded-full border border-accent/25 text-foreground transition hover:border-accent hover:bg-accent/10"
    >
      {mounted && (isDark ? <Sun size={16} /> : <Moon size={16} />)}
    </button>
  )
}
