"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { nav } from "@/lib/site"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-accent/15 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Google's Expert home">
          <Image src="/google-expert-logo.webp" alt="Google's Expert logo" width={220} height={116} priority className="h-11 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-6 text-sm lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact/" className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition hover:shadow-lg hover:shadow-accent/25 sm:inline-flex">
            Free audit
          </Link>
          <button className="text-foreground lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-accent/15 px-6 py-6 lg:hidden" aria-label="Mobile">
          {[...nav, { label: "Contact", href: "/contact/" }].map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-muted-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
