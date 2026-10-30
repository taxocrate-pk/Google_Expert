import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PPC and Social Media Marketing Agency | Google's Expert",
  description:
    "PPC and social media marketing by Google's Expert: Google Ads, Facebook, Instagram, TikTok and LinkedIn campaigns measured by cost per lead. Islamabad, Pakistan.",
  icons: { icon: [{ url: "/favicon.ico", sizes: "48x48" }, { url: "/icon-192.png", type: "image/png", sizes: "192x192" }], apple: "/apple-icon.png" },
  keywords: ["PPC management", "social media marketing", "Google Ads agency", "Facebook ads agency"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
