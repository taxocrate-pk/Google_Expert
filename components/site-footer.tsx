import Link from "next/link"
import Image from "next/image"
import { site, sisters } from "@/lib/site"
import { services } from "@/lib/services"

export function SiteFooter() {
  return (
    <footer className="border-t border-accent/15 px-6 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <Image src="/google-expert-logo.webp" alt="Google's Expert logo" width={220} height={116} className="h-12 w-auto object-contain" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">Google Ads and paid marketing experts for businesses in the UK, USA, Canada, UAE, Australia and Pakistan.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="mb-2 font-display font-bold text-foreground">Services</p>
          {services.map((s) => (
            <Link key={s.slug} href={`/${s.slug}/`} className="text-muted-foreground hover:text-foreground">
              {s.short}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="mb-2 font-display font-bold text-foreground">Company</p>
          <Link href="/pricing/" className="text-muted-foreground hover:text-foreground">Pricing</Link>
          <Link href="/contact/" className="text-muted-foreground hover:text-foreground">Contact</Link>
          <p className="mb-1 mt-4 font-display font-bold text-foreground">Sister companies</p>
          {sisters.map((s) => (
            <a key={s.href} href={s.href} className="text-muted-foreground hover:text-foreground">
              {s.name} <span className="text-xs opacity-70">· {s.text}</span>
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <p className="mb-2 font-display font-bold text-foreground">Talk to us</p>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp {site.phone}</a>
          <a href={`mailto:${site.email}`} className="hover:text-foreground">{site.email}</a>
          <p className="leading-6">{site.address}</p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-accent/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Google&apos;s Expert · A Digitocrate group company</span>
        <span>Google Ads and YouTube are trademarks of Google LLC. Google&apos;s Expert is an independent agency.</span>
      </div>
    </footer>
  )
}
