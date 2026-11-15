import { CtaBand, Faq, Glow, SectionIntro } from "@/components/blocks"
import { PricingCards } from "@/components/pricing-cards"

export const metadata = {
  title: "Google Ads Management Pricing — From $299/month | Google's Expert",
  description:
    "Google Ads management pricing: Starter US$299/month, Growth US$549/month, Scale 10% of ad spend. Pakistan plans from PKR 30,000/month. Ad spend paid directly to Google.",
  alternates: { canonical: "/pricing/" },
}

const faqs = [
  { q: "Is ad spend included?", a: "No. You pay Google or Meta directly from your own card. Our management fee is separate and fixed." },
  { q: "Is there a set-up fee?", a: "No set-up fee on monthly plans. Campaign build and conversion tracking are included in the first month." },
  { q: "How long is the contract?", a: "We ask for three months to start, because campaigns need time to learn. After that it is month to month." },
  { q: "Do you offer a one-time audit?", a: "Yes. The mini audit is free; a full written Google Ads audit costs US$149 (PKR 15,000) and is credited if you hire us." },
  { q: "Why do you have Pakistan prices?", a: "We work with Pakistani businesses too. Prices in PKR reflect local budgets; the work and reporting are the same." },
]

export default function Pricing() {
  return (
    <>
      <section className="relative px-6 pb-16 pt-40 lg:px-8">
        <Glow />
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Pricing" title="Google Ads management pricing" copy="Fixed monthly fees shown up front, in US dollars and Pakistani rupees. Ad spend goes directly to Google — never through us." />
          <PricingCards />
        </div>
      </section>
      <section className="bg-accent/5 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionIntro eyebrow="FAQ" title="Pricing questions" />
          <Faq faqs={faqs} />
        </div>
      </section>
      <CtaBand />
    </>
  )
}
