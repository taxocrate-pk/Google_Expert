import type { MetadataRoute } from "next"
import { services } from "@/lib/services"
import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...services.map((s) => `/${s.slug}/`), "/pricing/", "/contact/"]
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: "2026-11-15", changeFrequency: "monthly", priority: p === "/" ? 1 : 0.8 }))
}
