"use client"

import { useState } from "react"
import { Check, Send } from "lucide-react"

const field = "mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent"

export function ContactForm() {
  const [sent, setSent] = useState(false)
  if (sent)
    return (
      <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-accent/20 bg-card/60 p-8 text-center">
        <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check /></div>
        <h3 className="font-display text-3xl font-bold">Opening WhatsApp…</h3>
        <p className="mt-3 text-muted-foreground">Press send in WhatsApp and we will reply the same day.</p>
      </div>
    )
  return (
    <form
      className="rounded-2xl border border-accent/20 bg-card/60 p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault()
        const f = new FormData(e.currentTarget)
        const msg = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nWebsite: ${f.get("website") || "-"}\nMonthly ad budget: ${f.get("budget") || "-"}\n${f.get("message")}`
        window.open(`https://wa.me/923316644789?text=${encodeURIComponent(msg)}`, "_blank")
        setSent(true)
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-muted-foreground">Name<input required name="name" className={field} /></label>
        <label className="text-sm text-muted-foreground">Email<input required type="email" name="email" className={field} /></label>
        <label className="text-sm text-muted-foreground">Website<input name="website" placeholder="https://" className={field} /></label>
        <label className="text-sm text-muted-foreground">Monthly ad budget
          <select name="budget" className={field} defaultValue="">
            <option value="">Select</option>
            <option>Under $1,000 / PKR 100,000</option>
            <option>$1,000–$5,000</option>
            <option>$5,000–$20,000</option>
            <option>Over $20,000</option>
          </select>
        </label>
      </div>
      <label className="mt-5 block text-sm text-muted-foreground">What do you want from Google Ads?<textarea required name="message" rows={5} className={`${field} resize-none`} /></label>
      <button className="mt-6 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:shadow-lg hover:shadow-accent/20">
        Send on WhatsApp <Send size={17} />
      </button>
    </form>
  )
}
