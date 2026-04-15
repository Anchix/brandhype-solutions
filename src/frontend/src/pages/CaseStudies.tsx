import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  ChevronDown,
  ChevronUp,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface Metric {
  label: string;
  value: string;
  highlight?: boolean;
}

interface CaseStudy {
  id: string;
  brand: string;
  logo: string;
  campaignType: string;
  badgeColor: "blue" | "purple" | "gold";
  tagline: string;
  problem: string;
  strategy: string[];
  execution: string[];
  metrics: Metric[];
  highlight: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "lenskart",
    brand: "Lenskart",
    logo: "https://companieslogo.com/img/orig/LNSKR.NS-c6a7db2d.png?t=1720244493",
    campaignType: "Meme + Influencer",
    badgeColor: "blue",
    tagline: "108% ROAS Improvement in 45 Days",
    problem:
      "Lenskart needed to break through a crowded eyewear market and drive online sales among Gen Z and millennials (18–34). Traditional advertising was expensive with diminishing returns — CAC was ₹420/customer, ROAS sat below 2.5x, and organic reach was stagnant. The brand lacked virality and strong social proof on Instagram and YouTube.",
    strategy: [
      "45-day meme campaign targeting Tier 1 & 2 cities on Instagram and Twitter, leveraging trending pop culture moments (Bollywood dialogues, cricket references, student life)",
      "28 micro-influencers (50K–500K followers) + 6 macro-influencers (500K–2M) across lifestyle, fashion, and tech niches",
      "Content mix: 60% memes/relatable content, 30% product showcases, 10% influencer unboxing/reviews",
      "Custom audience retargeting based on 75%+ video watch-time completion to re-engage warm audiences",
      "Full funnel: Awareness (memes/reels) → Consideration (influencer reviews) → Conversion (discount codes + retargeting ads)",
    ],
    execution: [
      "Created 120+ meme creatives across 45 days across trending formats",
      "Managed influencer briefs, content calendars, and approval workflows for 34 influencers",
      "A/B tested 3 ad creatives per week, pausing underperformers within 48 hours",
      "Set up UTM tracking across all influencer links for precise attribution",
      "Flash sale promotions tied to meme content peaks for maximum conversion capture",
      "Weekly performance reviews with budget reallocation based on ROAS data",
    ],
    metrics: [
      { label: "ROAS", value: "4.8x", highlight: true },
      { label: "CAC Reduction", value: "57%", highlight: true },
      { label: "CTR", value: "3.2%" },
      { label: "CPM", value: "₹68" },
      { label: "CPL", value: "₹42" },
      { label: "Total Reach", value: "8.4M" },
      { label: "Impressions", value: "22M" },
      { label: "Engagements", value: "680K+" },
      { label: "Influencer Views", value: "3.2M" },
      { label: "Sales Uplift", value: "340%" },
      { label: "Revenue Attributed", value: "₹2.4 Cr" },
      { label: "New Customers", value: "13,200" },
    ],
    highlight: "₹2.4 Crore revenue in 45 days",
  },
  {
    id: "arata",
    brand: "Arata",
    logo: "https://arata.in/cdn/shop/files/arata_logo.png?v=1689841349",
    campaignType: "Influencer Marketing",
    badgeColor: "purple",
    tagline: "74% CPL Reduction & 242% Conversion Rate Lift",
    problem:
      "Arata, a premium natural hair care brand, needed to establish credibility and drive DTC sales in a market dominated by legacy brands. Their core audience (health-conscious women, 22–38) was highly skeptical of paid promotions — CPL was ₹310, conversion rate was 1.2%, and brand awareness was limited to metro cities.",
    strategy: [
      "Nano + micro influencer approach — authentic creators with high-trust audiences over celebrity endorsements",
      "Niche targeting: beauty, skincare, sustainable living, wellness, and mom-blogger communities",
      "3-month ambassador programs with 12 key influencers for consistent brand reinforcement",
      "UGC amplification: repurposed influencer content as paid social ads for performance marketing",
      "Platform mix: 70% Instagram (Reels + Stories), 20% YouTube tutorials, 10% Pinterest organic",
    ],
    execution: [
      "Identified and onboarded 45 nano-influencers (5K–30K) and 18 micro-influencers (30K–200K)",
      "Custom seeding kits with personalized notes — increased authentic review rate by 78%",
      "Content brief framework ensuring brand-safe, authentic storytelling",
      "Affiliate tracking with unique discount codes per influencer for precise attribution",
      "Parallel retargeting campaigns using top-performing UGC as ad creatives",
      "Monthly performance reviews — pausing low-ROAS creators, scaling top performers",
    ],
    metrics: [
      { label: "ROAS", value: "5.2x", highlight: true },
      { label: "CPL", value: "₹82", highlight: true },
      { label: "Conversion Rate", value: "4.1%" },
      { label: "CTR on UGC Ads", value: "2.8%" },
      { label: "Total Reach", value: "4.2M" },
      { label: "UGC Content Pieces", value: "248" },
      { label: "Impressions", value: "11.6M" },
      { label: "New Customers", value: "8,400" },
      { label: "Repeat Purchase Rate", value: "38%" },
      { label: "Revenue Growth", value: "210% YoY" },
      { label: "Instagram Growth", value: "+22K" },
      { label: "Awareness Lift Tier 1", value: "+45%" },
    ],
    highlight: "210% YoY revenue growth in 90 days",
  },
  {
    id: "unstop",
    brand: "Unstop",
    logo: "https://unstop.com/assets/new-images/unstop-logo.svg",
    campaignType: "Brand Strategy",
    badgeColor: "gold",
    tagline: "NPS 28→67 & 320% B2B Pipeline Growth",
    problem:
      "Unstop (formerly Dare2Compete) needed a complete brand repositioning — from a college competitions platform to a full-stack career development ecosystem. The dual challenge: rebuild brand identity for campus recruiters, HR professionals, and ambitious students, while driving B2B sales. Brand recall was low (NPS: 28), and B2B pipeline moved slowly (avg deal cycle: 90+ days).",
    strategy: [
      '"Unstoppable Growth" brand narrative — positioning Unstop as where ambition meets opportunity',
      "Refreshed brand guidelines: typography, color palette, tone of voice, and design system",
      "B2B sales enablement: full content funnel with thought leadership targeting HR/talent acquisition on LinkedIn",
      "Organic content strategy on LinkedIn + Twitter building authority in talent acquisition and campus recruitment",
      '"Unstop HR Circle" LinkedIn community of 5,000+ HR professionals',
    ],
    execution: [
      "Brand workshops with 3 internal stakeholder sessions and competitor benchmarking against 8 platforms",
      "50+ page brand playbook covering messaging, visual identity, and communication guidelines",
      "80+ LinkedIn posts over 6 months (thought leadership, data insights, culture, product updates)",
      "B2B content funnel: Awareness (industry reports) → Consideration (webinars) → Decision (demo pages)",
      "4 LinkedIn ad campaigns targeting HR professionals by Job Title + Company Size",
      "Tracked MQL → SQL → Closed-Won pipeline with weekly CRM reviews",
    ],
    metrics: [
      { label: "NPS Improvement", value: "28 → 67", highlight: true },
      { label: "B2B Pipeline Growth", value: "320%", highlight: true },
      { label: "Deal Cycle", value: "90d → 34d" },
      { label: "MQL to SQL", value: "18%" },
      { label: "LinkedIn Followers", value: "+48K" },
      { label: "Organic Reach", value: "2.4M" },
      { label: "Webinar Registrations", value: "6,200" },
      { label: "B2B Revenue Growth", value: "185%" },
      { label: "Cost per B2B Lead", value: "₹1,200" },
      { label: "Enterprise Clients", value: "47 Companies" },
      { label: "HR Community", value: "5,000+" },
      { label: "Brand Recall Lift", value: "+52%" },
    ],
    highlight: "185% B2B revenue growth in 6 months",
  },
  {
    id: "swiggy",
    brand: "Swiggy",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png",
    campaignType: "Brand Awareness",
    badgeColor: "blue",
    tagline: "32%→61% Brand Recall Across Tier 2/3 Cities",
    problem:
      "Swiggy needed a regional brand awareness push in Tier 2 and Tier 3 cities where Zomato had stronger mindshare. The challenge: build emotional resonance with a price-sensitive, diverse audience while reinforcing the 'fast delivery + variety' promise. Unaided brand recall in target cities was 32% vs Zomato's 58%.",
    strategy: [
      "Hyperlocal content strategy: city-specific meme pages, local language content, and region-based influencer partnerships",
      "Emotional brand storytelling: 15–30 sec reels on late-night cravings, weekend plans, and food culture moments",
      "Platform mix: Instagram (primary), YouTube Shorts (secondary), WhatsApp Status (tertiary for hyperlocal virality)",
      "3-phase campaign: Reach/Awareness → Consideration/Engagement → Conversion/App Downloads",
      "Cross-channel coordination across influencers, meme pages, and paid media for maximum impact",
    ],
    execution: [
      "60 city-specific micro-influencers across 8 Tier 2/3 cities (Indore, Nagpur, Coimbatore, Surat, Jaipur, Lucknow, Chandigarh, Kochi)",
      "200+ localized content pieces in 6 regional languages (Hindi, Tamil, Gujarati, Marathi, Telugu, Kannada)",
      "Geo-targeted awareness campaigns on Meta with CPM optimization for reach",
      "3 viral hashtag challenges launched across Instagram",
      "Brand Lift metrics tracked via Meta Brand Lift Study",
      "Weekly reach/frequency optimization to avoid ad fatigue",
    ],
    metrics: [
      { label: "Unaided Brand Recall", value: "32% → 61%", highlight: true },
      { label: "Total Reach", value: "18.6M", highlight: true },
      { label: "Total Impressions", value: "54M" },
      { label: "CPM", value: "₹42" },
      { label: "Video Views", value: "9.8M" },
      { label: "Engagement Rate", value: "4.7%" },
      { label: "Hashtag Participation", value: "82K+ posts" },
      { label: "App Downloads Uplift", value: "+47%" },
      { label: "Brand Sentiment", value: "+35 pts" },
      { label: "Share of Voice", value: "18% → 39%" },
      { label: "Influencer Views", value: "5.2M" },
      { label: "Cost per Brand Lift Pt", value: "₹28" },
    ],
    highlight: "90% brand recall improvement in Tier 2/3 cities",
  },
  {
    id: "snitch",
    brand: "Snitch",
    logo: "https://cdn.shopify.com/s/files/1/0625/2047/4841/files/snitch-logo.png?v=1685005246",
    campaignType: "Digital Marketing",
    badgeColor: "purple",
    tagline: "ROAS 1.8x→5.4x & ₹4.2 Crore Revenue in 6 Months",
    problem:
      "Snitch, a fast-fashion D2C brand targeting men (18–30), needed to scale its digital marketing to compete with Bewakoof and The Souled Store. Despite strong product-market fit, marketing efficiency was broken — ROAS was 1.8x (unprofitable), cart abandonment was 74%, and retargeting was unstructured. Overall digital CAC: ₹680.",
    strategy: [
      "Full-funnel digital marketing architecture — restructured entire paid + organic digital presence",
      "TOFU: Brand-building content + reach campaigns (Meta + YouTube)",
      "MOFU: Consideration campaigns — product catalogs, collection highlights, style guides",
      "BOFU: Dynamic retargeting, cart abandonment sequences, personalized discount triggers",
      "SEO + content flywheel: style blogs, lookbooks, trend reports for organic traffic",
      "Email + WhatsApp automation: abandoned cart flows, win-back campaigns, loyalty nudges",
    ],
    execution: [
      "Restructured Meta ad account: Separated CBO campaigns by funnel stage with distinct creative strategies",
      "300+ ad creatives across 6 months (static, carousels, reels, stories)",
      "Google Shopping ads with merchant center product feed optimization — 6.2x ROAS",
      "Meta Pixel + Conversions API (CAPI) for accurate iOS 14+ tracking",
      "7-step email automation flow for cart abandonment (24hr, 48hr, 72hr with progressive discounts)",
      "WhatsApp retargeting via official API — 78% open rate, 12% conversion",
    ],
    metrics: [
      { label: "ROAS", value: "1.8x → 5.4x", highlight: true },
      { label: "CAC Reduction", value: "71%", highlight: true },
      { label: "Cart Abandonment Recovery", value: "74% → 41%" },
      { label: "Email Revenue", value: "₹28L" },
      { label: "CTR (Meta)", value: "2.9%" },
      { label: "CPC", value: "₹18" },
      { label: "CPM", value: "₹52" },
      { label: "Google Shopping ROAS", value: "6.2x" },
      { label: "Organic Traffic Growth", value: "+180%" },
      { label: "Total Revenue Growth", value: "285%" },
      { label: "Repeat Purchase Rate", value: "29%" },
      { label: "Total Sales", value: "₹4.2 Cr" },
    ],
    highlight: "₹4.2 Crore attributed sales in 6 months",
  },
  {
    id: "solura",
    brand: "Solura Cosmetic",
    logo: "https://soluracosmetics.com/cdn/shop/files/Solura_Logo_Final-02.png",
    campaignType: "Full-Stack Marketing",
    badgeColor: "gold",
    tagline: "520% Revenue Growth & 48K Monthly Organic Visits in 9 Months",
    problem:
      "Solura Cosmetic, a premium D2C cosmetics brand, needed to build brand equity from near-zero while driving profitable performance marketing. Classic startup challenge: high CPC in beauty vertical (₹52), unstructured brand positioning, zero organic traffic, 1.4% website conversion rate. Established competitors dominated both Google search and Instagram.",
    strategy: [
      'Brand strategy: "Science-backed beauty for the conscious Indian woman" — differentiating from mass-market and imported luxury brands',
      "Performance marketing: data-driven paid acquisition across Meta + Google with profit-first approach (target ROAS: 4x+)",
      "SEO: High-intent beauty keywords, competitor gap analysis, and content cluster strategy",
      "CRO: Redesigned product pages, checkout flow, and trust signals to improve conversion",
      "Retention: Email + WhatsApp flows for repeat purchase acceleration",
    ],
    execution: [
      "Brand identity framework: positioning, ICP, messaging hierarchy, visual guidelines",
      "1,200+ keyword research, 45 long-form blog posts (2,000–3,500 words), 8 product comparison pages",
      "Technical SEO: PageSpeed 34 → 81, structured data markup, Core Web Vitals optimization",
      "Meta scaling: ₹50K/month → ₹4L/month while maintaining 4.2x ROAS",
      "Google Ads: Search (branded + non-branded) + Shopping campaigns with 5.8x ROAS",
      "CRO: trust badges, review widgets, clinical claims, express checkout — conversion 1.4% → 3.8%",
    ],
    metrics: [
      { label: "Blended ROAS", value: "4.6x", highlight: true },
      { label: "Revenue Growth", value: "520%", highlight: true },
      { label: "CAC", value: "₹285" },
      { label: "Conversion Rate", value: "1.4% → 3.8%" },
      { label: "SEO Traffic", value: "48K/month" },
      { label: "Page 1 Keywords", value: "127" },
      { label: "Organic Revenue Share", value: "34%" },
      { label: "Google PageSpeed", value: "34 → 81" },
      { label: "Email Revenue", value: "₹52L" },
      { label: "Instagram Followers", value: "0 → 68K" },
      { label: "Google ROAS", value: "5.8x" },
      { label: "Media Mentions", value: "24 Publications" },
    ],
    highlight: "520% revenue growth from zero in 9 months",
  },
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Meme + Influencer", value: "Meme + Influencer" },
  { label: "Influencer Marketing", value: "Influencer Marketing" },
  { label: "Brand Strategy", value: "Brand Strategy" },
  { label: "Brand Awareness", value: "Brand Awareness" },
  { label: "Digital Marketing", value: "Digital Marketing" },
  { label: "Full-Stack Marketing", value: "Full-Stack Marketing" },
];

const BADGE_STYLES = {
  blue: {
    badge: "bg-primary/15 text-primary border-primary/30",
    glow: "glow-blue",
    border: "border-primary/20 hover:border-primary/50",
    accent: "bg-primary",
    text: "accent-blue",
    metric: "bg-primary/10 border-primary/20",
  },
  purple: {
    badge: "bg-secondary/15 text-secondary border-secondary/30",
    glow: "glow-purple",
    border: "border-secondary/20 hover:border-secondary/50",
    accent: "bg-secondary",
    text: "accent-purple",
    metric: "bg-secondary/10 border-secondary/20",
  },
  gold: {
    badge: "bg-accent/15 text-accent border-accent/30",
    glow: "glow-gold",
    border: "border-accent/20 hover:border-accent/50",
    accent: "bg-accent",
    text: "accent-gold",
    metric: "bg-accent/10 border-accent/20",
  },
};

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const [expanded, setExpanded] = useState(false);
  const styles = BADGE_STYLES[cs.badgeColor];

  return (
    <div
      className={`glass-card border transition-smooth ${styles.border} overflow-hidden`}
      data-ocid={`case_studies.${cs.id}_card`}
    >
      {/* Card header — always visible */}
      <button
        type="button"
        className="w-full text-left p-6 sm:p-8"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        data-ocid={`case_studies.${cs.id}_toggle`}
        style={{ touchAction: "manipulation" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            {/* Brand logo */}
            <div className="w-14 h-14 rounded-xl glass-effect flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                src={cs.logo}
                alt={cs.brand}
                className="w-full h-full object-contain p-1.5"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget
                    .nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <span
                className="hidden items-center justify-center w-full h-full font-display font-bold text-lg text-white"
                aria-hidden="true"
              >
                {cs.brand.charAt(0)}
              </span>
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-display font-bold text-xl text-white truncate">
                  {cs.brand}
                </h3>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${styles.badge}`}
                >
                  {cs.campaignType}
                </span>
              </div>
              <p className={`text-sm font-semibold ${styles.text}`}>
                {cs.tagline}
              </p>
            </div>
          </div>

          {/* Expand toggle */}
          <span
            className={`flex-shrink-0 w-9 h-9 rounded-lg glass-effect flex items-center justify-center text-white/60 transition-smooth ${expanded ? "bg-white/10" : ""}`}
          >
            {expanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </span>
        </div>

        {/* Quick metrics strip */}
        {!expanded && (
          <div className="mt-5 flex flex-wrap gap-3">
            {cs.metrics
              .filter((m) => m.highlight)
              .map((m) => (
                <div
                  key={m.label}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${styles.metric}`}
                >
                  <TrendingUp className={`w-3.5 h-3.5 ${styles.text}`} />
                  <span className="text-xs text-white/60">{m.label}:</span>
                  <span className={`text-sm font-bold ${styles.text}`}>
                    {m.value}
                  </span>
                </div>
              ))}
          </div>
        )}
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-6 sm:px-8 pb-8 space-y-8">
          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Problem / Strategy / Execution */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Problem */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <Target className="w-4 h-4 text-red-400" />
                </span>
                <h4 className="font-display font-bold text-base text-white">
                  Problem
                </h4>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                {cs.problem}
              </p>
            </div>

            {/* Strategy */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span
                  className={`w-8 h-8 rounded-lg border flex items-center justify-center ${styles.metric}`}
                >
                  <BarChart3 className={`w-4 h-4 ${styles.text}`} />
                </span>
                <h4 className="font-display font-bold text-base text-white">
                  Strategy
                </h4>
              </div>
              <ul className="space-y-2">
                {cs.strategy.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-white/60 leading-relaxed"
                  >
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${styles.accent}`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Execution */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-emerald-400" />
                </span>
                <h4 className="font-display font-bold text-base text-white">
                  Execution
                </h4>
              </div>
              <ul className="space-y-2">
                {cs.execution.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-white/60 leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results metrics grid */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-gradient-to-b from-primary to-secondary inline-block" />
              <h4 className="font-display font-bold text-base text-white">
                Results
              </h4>
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${styles.badge}`}
              >
                {cs.highlight}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {cs.metrics.map((m) => (
                <div
                  key={m.label}
                  className={`p-4 rounded-xl border transition-smooth ${
                    m.highlight
                      ? `${styles.metric} ${styles.border}`
                      : "bg-white/[0.03] border-white/10"
                  }`}
                  data-ocid={`case_studies.${cs.id}_metric`}
                >
                  <p className="text-xs text-white/40 mb-1 leading-tight">
                    {m.label}
                  </p>
                  <p
                    className={`font-display font-bold text-lg ${
                      m.highlight ? styles.text : "text-white"
                    }`}
                  >
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
            <p className="text-sm text-white/40">
              Want results like these for your brand?
            </p>
            <Button
              type="button"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 rounded-full px-5 py-2 text-sm font-semibold transition-smooth flex items-center gap-2"
              data-ocid={`case_studies.${cs.id}_cta_button`}
              style={{ touchAction: "manipulation" }}
            >
              <Users className="w-4 h-4" />
              Let&apos;s Scale Your Brand →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.campaignType === activeFilter);

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden section-padding"
      data-ocid="case_studies.section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#080808] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-effect border border-primary/20 text-primary text-xs font-semibold mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            Case Studies
          </div>
          <h2 className="section-heading text-white mb-4">
            Our Results <span className="gradient-text-blue-purple">Speak</span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            Real campaigns. Real numbers. Real growth.
          </p>
        </div>

        {/* Filter bar */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          data-ocid="case_studies.filter_bar"
          role="tablist"
          aria-label="Filter case studies"
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              role="tab"
              aria-selected={activeFilter === f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth min-h-[36px] ${
                activeFilter === f.value
                  ? "bg-primary text-white glow-blue border border-primary/50"
                  : "glass-effect border border-white/10 text-white/60 hover:text-white hover:border-white/20"
              }`}
              data-ocid={`case_studies.filter_${f.value.toLowerCase().replace(/[\s+]/g, "_")}_tab`}
              style={{ touchAction: "manipulation" }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Case study cards */}
        <div className="space-y-5" data-ocid="case_studies.list">
          {filtered.map((cs, i) => (
            <div key={cs.id} data-ocid={`case_studies.item.${i + 1}`}>
              <CaseStudyCard cs={cs} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-14 text-center">
          <div className="glass-card border border-white/10 p-8 sm:p-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-4">
              <Zap className="w-3 h-3" />
              Your Brand Next
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
              Ready to Write Your{" "}
              <span className="gradient-text-gold">Success Story?</span>
            </h3>
            <p className="text-white/50 text-sm sm:text-base mb-7 max-w-lg mx-auto">
              From D2C brands to SaaS platforms — we engineer growth with
              data-driven campaigns, influencer playbooks, and performance
              marketing built for scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                type="button"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-primary text-white hover:bg-primary/90 px-7 py-3 rounded-full font-semibold glow-blue flex items-center justify-center gap-2 border-0 min-h-[48px]"
                data-ocid="case_studies.bottom_cta_button"
                style={{ touchAction: "manipulation" }}
              >
                <Zap className="w-4 h-4" />
                Start Your Campaign →
              </Button>
              <Button
                type="button"
                onClick={() => {
                  const el = document.getElementById("services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="glass-effect border border-white/20 text-white hover:border-white/30 px-7 py-3 rounded-full font-semibold flex items-center justify-center gap-2 bg-transparent min-h-[48px]"
                data-ocid="case_studies.view_services_button"
                style={{ touchAction: "manipulation" }}
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
