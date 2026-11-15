import { Globe2, Mail, Send } from "lucide-react"
import { Glow, SectionIntro } from "@/components/blocks"
import { ContactForm } from "@/components/contact-form"
import { site } from "@/lib/site"

export const metadata = {
  title: "Contact Google's Expert | Free Google Ads Audit",
  description: "Contact Google's Expert for a free Google Ads audit: WhatsApp +92 331 6644789 or email hello@googlesexpert.com. Office in G-9 Markaz, Islamabad.",
  alternates: { canonical: "/contact/" },
}

export default function Contact() {
  return (
    <section className="relative px-6 pb-24 pt-40 lg:px-8">
      <Glow />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionIntro eyebrow="Contact" title="Get a free Google Ads audit." copy="Tell us your website, your monthly budget and what you want more of. We reply the same working day with honest questions and a short plan." />
          <div className="mt-10 flex flex-col gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-3"><Send size={17} className="text-accent" /><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp / call {site.phone}</a></span>
            <span className="flex items-center gap-3"><Mail size={17} className="text-accent" /><a href={`mailto:${site.email}`}>{site.email}</a></span>
            <span className="flex items-start gap-3"><Globe2 size={17} className="mt-0.5 shrink-0 text-accent" />{site.address}</span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
