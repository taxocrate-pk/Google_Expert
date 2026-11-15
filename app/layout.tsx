import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { site } from "@/lib/site"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Google Ads Management Agency | Paid Marketing Experts | Google's Expert", template: "%s" },
  description:
    "Google's Expert manages Google Ads, Performance Max, YouTube and Meta ads for businesses in the UK, USA, Canada, UAE, Australia and Pakistan — reported by cost per lead.",
  icons: { icon: [{ url: "/favicon.ico", sizes: "48x48" }, { url: "/icon-192.png", type: "image/png", sizes: "192x192" }], apple: "/apple-icon.png" },
  alternates: { canonical: "/" },
}

const org = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/google-expert-logo.webp`,
  email: site.email,
  telephone: site.phone,
  address: { "@type": "PostalAddress", streetAddress: "Office No. 5, 2nd Floor, Laraib Plaza, G-9 Markaz", addressLocality: "Islamabad", addressCountry: "PK" },
  areaServed: ["GB", "US", "CA", "AE", "SA", "AU", "PK"],
  parentOrganization: { "@type": "Organization", name: "Digitocrate", url: "https://digitocrate.com/" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <SiteHeader />
        <main className="min-h-screen overflow-hidden">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
