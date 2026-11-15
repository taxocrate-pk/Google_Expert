export type Service = {
  slug: string
  short: string
  card: string
  title: string
  description: string
  eyebrow: string
  h1: string
  accent: string
  intro: string
  points: { title: string; text: string }[]
  sections: { title: string; body: (string | string[])[] }[]
  faqs: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: "google-ads-management",
    short: "Google Ads Management",
    card: "Search campaigns built around buying keywords, tight negatives and ads that earn the click — managed every week.",
    title: "Google Ads Management Services | Certified PPC Experts | Google's Expert",
    description:
      "Google Ads management for businesses in the UK, USA, Canada, UAE, Australia and Pakistan: keyword research, campaign build, negative keywords, bidding and conversion tracking, reported by cost per lead.",
    eyebrow: "Google Ads Management",
    h1: "Google Ads management that",
    accent: "pays for itself.",
    intro:
      "We build and run Google Ads campaigns around the searches that bring customers — not just clicks. Every week we cut wasted spend, test new ads and move budget to what works, and every month you see cost per lead in plain words.",
    points: [
      { title: "Buying keywords first", text: "We start with high-intent searches like “near me”, “price” and “hire”, and block the searches that only waste money." },
      { title: "Weekly optimisation", text: "Search terms, bids, ads and budgets reviewed every week — not set and forgotten." },
      { title: "You own everything", text: "The account, the data and the billing stay in your name. Ad spend goes directly to Google." },
    ],
    sections: [
      {
        title: "What is included",
        body: [[
          "Keyword research and campaign structure by service and location",
          "Responsive search ads with sitelinks, callouts, call and lead-form assets",
          "Negative keyword lists and weekly search-term clean-up",
          "Bid strategy set-up: Maximise Conversions, Target CPA or Target ROAS when the data is ready",
          "Conversion tracking for calls, forms and WhatsApp clicks",
          "Landing page recommendations to raise conversion rate",
          "Monthly report: spend, leads, cost per lead and next steps",
        ]],
      },
      {
        title: "Who we work with",
        body: [
          "Service businesses that need calls and enquiries: law firms, clinics, consultants, home services, education, travel and B2B companies — in the UK, USA, Canada, the Gulf, Australia and Pakistan.",
          "Our team works from Islamabad, so you get senior campaign management at a fraction of local agency fees in London, New York, Toronto, Dubai or Sydney.",
        ],
      },
    ],
    faqs: [
      { q: "How much should I spend on Google Ads?", a: "It depends on your market and cost per click. For a local service business, we usually suggest at least US$1,000 a month (or around PKR 50,000 in Pakistan) so the campaign gathers enough data to optimise." },
      { q: "How quickly will I see results?", a: "Search campaigns can bring enquiries in the first week. The first 4–8 weeks are a learning period in which we cut waste and find the best keywords and ads." },
      { q: "Do you need access to my account?", a: "Yes, as a manager on your own Google Ads account. If you do not have one, we create it in your name, so you always keep ownership." },
      { q: "Is the ad spend included in your fee?", a: "No. Ad spend is paid directly to Google from your card. Our management fee is separate and fixed — see the pricing page." },
    ],
  },
  {
    slug: "google-ads-audit",
    short: "Google Ads Audit",
    card: "An honest review of your account: wasted spend, broken tracking, weak ads and the fixes that matter most.",
    title: "Google Ads Audit | Find Wasted Spend in Your PPC Account | Google's Expert",
    description:
      "A Google Ads audit that finds wasted spend, broken conversion tracking, poor match types and weak ads — with a prioritised fix list. Free mini audit; full audit US$149.",
    eyebrow: "Google Ads Audit",
    h1: "A Google Ads audit that finds",
    accent: "the money you are losing.",
    intro:
      "Most accounts we audit waste a large share of their budget on irrelevant searches, broad match without negatives, or tracking that counts the wrong things. We find it, show it with numbers, and give you a clear list of fixes.",
    points: [
      { title: "Free mini audit", text: "A short video or written review of the biggest problems in your account — free, with no obligation." },
      { title: "Full audit — US$149", text: "A detailed report covering structure, keywords, search terms, ads, assets, bidding, tracking and landing pages." },
      { title: "Fix it yourself or with us", text: "Use the report with your own team, or let us implement it. The audit fee is credited if you hire us." },
    ],
    sections: [
      {
        title: "What we check",
        body: [[
          "Conversion tracking: are calls, forms and WhatsApp clicks counted correctly — and only once?",
          "Search terms: how much spend goes to irrelevant searches",
          "Match types, negative keywords and campaign structure",
          "Ad copy, assets and ad strength",
          "Bid strategies and budget limits",
          "Location, schedule and device settings",
          "Landing page speed and message match",
        ]],
      },
    ],
    faqs: [
      { q: "What do you need for the audit?", a: "Read-only access to your Google Ads account (and Google Analytics if you have it). You can remove our access as soon as the audit is done." },
      { q: "How long does it take?", a: "The free mini audit takes one to two working days; the full audit about five working days." },
      { q: "Will you change anything in my account?", a: "No. An audit is read-only. We only make changes if you hire us to manage or fix the account." },
    ],
  },
  {
    slug: "performance-max-campaigns",
    short: "Performance Max & Shopping",
    card: "Performance Max and Shopping campaigns with proper feeds, audience signals and brand exclusions.",
    title: "Performance Max & Google Shopping Campaign Management | Google's Expert",
    description:
      "Performance Max and Google Shopping management: product feed optimisation, asset groups, audience signals, brand exclusions and conversion value tracking for e-commerce and lead generation.",
    eyebrow: "Performance Max & Shopping",
    h1: "Performance Max that works for you,",
    accent: "not just for Google.",
    intro:
      "Performance Max can scale fast — or spend your budget on your own brand name and low-quality placements. We set it up with clean feeds, strong asset groups, audience signals and exclusions, and measure it against real sales and leads.",
    points: [
      { title: "Clean product feeds", text: "Titles, images, prices and attributes in Merchant Center optimised so the right products show for the right searches." },
      { title: "Brand exclusions", text: "We stop Performance Max from taking credit for people who were already searching for your brand." },
      { title: "Value-based bidding", text: "Conversion values for purchases and qualified leads, so Google optimises for profit, not just volume." },
    ],
    sections: [
      {
        title: "What is included",
        body: [[
          "Google Merchant Center set-up and feed optimisation",
          "Asset groups by product category or service, with images, videos and copy",
          "Audience signals from your customer lists, website visitors and search themes",
          "Brand and placement exclusions",
          "Standard Shopping or Search campaigns alongside PMax where they perform better",
          "Monthly report: revenue or leads, ROAS or cost per lead",
        ]],
      },
    ],
    faqs: [
      { q: "Is Performance Max right for my business?", a: "It suits e-commerce stores with a product feed and lead-generation businesses with reliable conversion tracking and enough budget. For small budgets, a focused Search campaign is often better first." },
      { q: "Do you work with Shopify and WooCommerce?", a: "Yes. We connect your store to Merchant Center and fix feed errors and disapprovals." },
    ],
  },
  {
    slug: "youtube-ads",
    short: "YouTube & Display Ads",
    card: "Video and display campaigns for awareness and remarketing — targeted, capped and measured.",
    title: "YouTube Ads & Google Display Campaign Management | Google's Expert",
    description:
      "YouTube ads and Google Display campaigns for awareness, remarketing and lead generation: audience targeting, frequency caps, placement exclusions and video ad guidance.",
    eyebrow: "YouTube & Display Ads",
    h1: "YouTube and Display ads that",
    accent: "reach the right people.",
    intro:
      "Video and display ads are cheap per view — and easy to waste. We target the right audiences, cap how often people see your ads, exclude poor placements and use remarketing to bring back visitors who did not enquire the first time.",
    points: [
      { title: "Remarketing", text: "Show ads to people who visited your website or watched your videos, when they are ready to decide." },
      { title: "Audience targeting", text: "Custom segments based on searches, competitor websites and interests your customers share." },
      { title: "Placement control", text: "Exclude apps, games and low-quality sites that eat budget without results." },
    ],
    sections: [
      {
        title: "What is included",
        body: [[
          "YouTube in-stream, in-feed and Shorts campaigns",
          "Responsive display ads and remarketing lists",
          "Frequency caps and placement exclusions",
          "Simple video script and editing guidance for your ads",
          "View-through and conversion reporting",
        ]],
      },
    ],
    faqs: [
      { q: "Do I need a professional video?", a: "No. Clear, simple videos shot on a phone often perform well. We give you a short script and editing guidance." },
      { q: "Is YouTube good for leads?", a: "YouTube is strongest for awareness and remarketing. Combined with Search, it often lowers the overall cost per lead." },
    ],
  },
  {
    slug: "meta-ads",
    short: "Facebook & Instagram Ads",
    card: "Meta campaigns with lead forms and WhatsApp buttons, plus retargeting for everyone who engaged.",
    title: "Facebook & Instagram Ads Management (Meta Ads) | Google's Expert",
    description:
      "Facebook and Instagram ads management: audience targeting, lead forms, click-to-WhatsApp campaigns, creatives and retargeting, reported by cost per lead.",
    eyebrow: "Facebook & Instagram Ads",
    h1: "Facebook and Instagram ads that",
    accent: "bring real enquiries.",
    intro:
      "Paid marketing works best when Google and Meta work together. We run Facebook and Instagram campaigns with lead forms and click-to-WhatsApp buttons, and retarget the people who saw your Google ads but did not enquire.",
    points: [
      { title: "Click-to-WhatsApp", text: "Ads that open a WhatsApp chat with your team — the way most customers in Pakistan and the Gulf prefer to talk." },
      { title: "Lead forms", text: "Instant forms with qualifying questions, so your team calls interested people, not time-wasters." },
      { title: "Retargeting", text: "Bring back website visitors and video viewers with offers and reminders." },
    ],
    sections: [
      {
        title: "What is included",
        body: [[
          "Meta Business Manager, Pixel and Conversions API set-up",
          "Audience research: interests, lookalikes and retargeting",
          "Ad creative guidance: images, short videos and copy",
          "Lead form and WhatsApp campaign set-up",
          "Weekly optimisation and monthly cost-per-lead report",
        ]],
      },
    ],
    faqs: [
      { q: "Do you also manage organic social media posts?", a: "Our focus is paid marketing. We can recommend partners for day-to-day posting and page management." },
      { q: "What budget do I need for Meta ads?", a: "Many local businesses start with US$300–500 a month (around PKR 30,000–50,000) and increase once the cost per lead is clear." },
    ],
  },
  {
    slug: "conversion-tracking",
    short: "Conversion Tracking",
    card: "GA4, Tag Manager, call and WhatsApp tracking set up before a single rupee or pound is spent.",
    title: "Conversion Tracking Setup: GA4, Google Tag Manager & Call Tracking | Google's Expert",
    description:
      "Conversion tracking set-up for Google Ads and Meta: GA4, Google Tag Manager, enhanced conversions, call and WhatsApp click tracking, and offline conversion imports.",
    eyebrow: "Conversion Tracking",
    h1: "If you cannot measure it,",
    accent: "you cannot improve it.",
    intro:
      "Smart bidding is only as smart as the data you give it. We set up tracking that counts real leads and sales — calls, forms, WhatsApp clicks and purchases — so Google and Meta optimise for customers, not clicks.",
    points: [
      { title: "GA4 & Tag Manager", text: "Clean set-up with the events that matter, and nothing counted twice." },
      { title: "Calls & WhatsApp", text: "Track calls from ads and website, and clicks on WhatsApp buttons." },
      { title: "Enhanced conversions", text: "Better measurement as cookies disappear, set up in a privacy-friendly way." },
    ],
    sections: [
      {
        title: "What is included",
        body: [[
          "Google Tag Manager container set-up and clean-up",
          "GA4 events and key events for forms, calls, WhatsApp and purchases",
          "Google Ads conversions and enhanced conversions",
          "Meta Pixel and Conversions API",
          "Offline conversion import from your CRM or sheet (optional)",
          "Testing and a written tracking map you keep",
        ]],
      },
    ],
    faqs: [
      { q: "Is tracking included in management?", a: "Yes. Every management plan includes tracking set-up. You can also buy it on its own for a one-time fee." },
      { q: "Will tracking slow down my website?", a: "A clean Tag Manager set-up adds very little. We remove old and duplicate tags, which often makes sites faster." },
    ],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
