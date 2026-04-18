import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, M as Mail } from "./index-Bg5P4_Z-.js";
import { U as User } from "./user-lgpmyIVM.js";
import { A as ArrowRight } from "./arrow-right-W3DligYb.js";
import { T as TrendingUp } from "./trending-up-VRoSxKln.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode);
function toSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}
function navigateTo(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("routechange"));
}
const CATEGORY_CONFIG = {
  SEO: {
    color: "#00D4FF",
    bg: "rgba(0,212,255,0.12)",
    border: "rgba(0,212,255,0.35)",
    gradient: "from-[#00D4FF]/60 to-[#00A8CC]/80"
  },
  "Performance Marketing": {
    color: "#FFB800",
    bg: "rgba(255,184,0,0.12)",
    border: "rgba(255,184,0,0.35)",
    gradient: "from-[#FFB800]/60 to-[#CC9200]/80"
  },
  "Social Media": {
    color: "#00C853",
    bg: "rgba(0,200,83,0.12)",
    border: "rgba(0,200,83,0.35)",
    gradient: "from-[#00C853]/60 to-[#009940]/80"
  },
  "Brand Strategy": {
    color: "#9B30FF",
    bg: "rgba(155,48,255,0.12)",
    border: "rgba(155,48,255,0.35)",
    gradient: "from-[#9B30FF]/60 to-[#7B10DF]/80"
  },
  Strategy: {
    color: "#0066FF",
    bg: "rgba(0,102,255,0.12)",
    border: "rgba(0,102,255,0.35)",
    gradient: "from-[#0066FF]/60 to-[#0044CC]/80"
  },
  Branding: {
    color: "#9B30FF",
    bg: "rgba(155,48,255,0.12)",
    border: "rgba(155,48,255,0.35)",
    gradient: "from-[#9B30FF]/60 to-[#7B10DF]/80"
  },
  Performance: {
    color: "#FFB800",
    bg: "rgba(255,184,0,0.12)",
    border: "rgba(255,184,0,0.35)",
    gradient: "from-[#FFB800]/60 to-[#CC9200]/80"
  },
  Influencer: {
    color: "#FF6B9D",
    bg: "rgba(255,107,157,0.12)",
    border: "rgba(255,107,157,0.35)",
    gradient: "from-[#FF6B9D]/60 to-[#CC4477]/80"
  },
  Growth: {
    color: "#FF7A00",
    bg: "rgba(255,122,0,0.12)",
    border: "rgba(255,122,0,0.35)",
    gradient: "from-[#FF7A00]/60 to-[#CC6200]/80"
  },
  "AI Marketing": {
    color: "#0066FF",
    bg: "rgba(0,102,255,0.12)",
    border: "rgba(0,102,255,0.35)",
    gradient: "from-[#0066FF]/60 to-[#9B30FF]/60"
  },
  General: {
    color: "#9B30FF",
    bg: "rgba(155,48,255,0.12)",
    border: "rgba(155,48,255,0.35)",
    gradient: "from-[#9B30FF]/60 to-[#0066FF]/60"
  }
};
function getCatConfig(cat) {
  return CATEGORY_CONFIG[cat] ?? CATEGORY_CONFIG.General;
}
const FALLBACK_GRADIENTS = [
  "linear-gradient(135deg, #0066FF22, #9B30FF44)",
  "linear-gradient(135deg, #9B30FF22, #FFB80044)",
  "linear-gradient(135deg, #FFB80022, #0066FF44)",
  "linear-gradient(135deg, #00D4FF22, #9B30FF44)",
  "linear-gradient(135deg, #FF6B9D22, #9B30FF44)",
  "linear-gradient(135deg, #00C85322, #0066FF44)"
];
const SAMPLE_POSTS = [
  {
    id: 1,
    title: "5 Ways AI is Revolutionizing Digital Marketing in 2025",
    excerpt: "Artificial intelligence is no longer a buzzword — it's the backbone of every top-performing campaign. From predictive audience targeting to real-time creative optimization, discover how AI-powered strategies are delivering 3x ROI for D2C brands.",
    content: "Artificial intelligence has fundamentally transformed how brands connect with customers. From predictive audience segmentation to dynamic creative optimization, AI now sits at the center of every high-performance campaign.\n\n**1. Predictive Audience Targeting**\nAI models analyze behavioral signals — browsing history, purchase intent, time-on-page — to identify your highest-value prospects before they even know they need you. BrandHype uses custom lookalike models that outperform native ad platform audiences by 2.4x on average.\n\n**2. Real-Time Creative Optimization**\nStop guessing which creative wins. AI-driven DCO (Dynamic Creative Optimization) tests thousands of ad variations simultaneously, reallocating budget to winners within hours, not weeks. Our clients see an average 47% reduction in CPL using this approach.\n\n**3. Conversational AI for Lead Qualification**\nAI chatbots trained on brand tone and FAQs engage, qualify, and even book demos for your sales team — 24/7, without human intervention. One D2C skincare client added 340 qualified leads/month through this alone.\n\n**4. Sentiment Analysis for Brand Monitoring**\nKnow what your audience really thinks in real time. AI-powered sentiment tools scan social, reviews, and forums so you can respond to PR risks before they escalate — or double down on messaging that resonates.\n\n**5. Automated Campaign Reporting**\nEliminate 10+ hours of weekly reporting. AI-generated dashboards surface the KPIs that actually matter, with anomaly detection that flags drops in performance before they cost you budget.",
    author: "BrandHype Solutions",
    tags: ["AI Marketing", "Performance", "Automation"],
    readTime: "7 min read",
    date: "Apr 10, 2025",
    category: "AI Marketing",
    featured: true
  },
  {
    id: 2,
    title: "How Influencer Marketing Drives 10x ROI for D2C Brands",
    excerpt: "The right creator partnership can 10x your brand awareness overnight. We break down the exact framework BrandHype uses to identify micro and macro influencers that convert followers into loyal customers.",
    content: "Influencer marketing has evolved far beyond brand deals and unboxing videos. The brands winning in 2025 are building creator ecosystems — and the ROI data is impossible to ignore.\n\n**The Framework We Use**\n\nStep 1 — Audience Alignment Scoring: We don't just look at follower counts. We analyze audience overlap, engagement rate authenticity, content-niche fit, and past brand performance metrics.\n\nStep 2 — Campaign Architecture: Micro-influencers (10k–100k) drive conversion. Macro-influencers drive awareness. We stack both layers strategically, allocating 60% of budget to micro and 40% to macro for maximum funnel coverage.\n\nStep 3 — Brief + Creative Freedom Balance: Over-scripted content kills engagement. We provide clear brand guidelines, key messages, and hard stops — then let creators bring their authentic voice.\n\nStep 4 — Tracking + Attribution: Every creator gets a unique UTM link and discount code. We track last-touch, first-touch, and assisted conversions to get a full picture of actual ROI.\n\n**Results from a recent D2C campaign:**\n- 48 creators activated across 3 tiers\n- 2.8M total reach in 30 days\n- 4.2% average engagement rate\n- ₹8.70 ROAS (for every ₹1 spent)",
    author: "BrandHype Solutions",
    tags: ["Influencer", "D2C", "ROI"],
    readTime: "9 min read",
    date: "Apr 5, 2025",
    category: "Influencer"
  },
  {
    id: 3,
    title: "Performance Marketing Secrets: From Clicks to Conversions",
    excerpt: "Clicks are cheap. Conversions are everything. Our performance team reveals the exact funnel architecture, ad creative formulas, and attribution models that turned ₹1 into ₹8 in tracked revenue.",
    content: "Performance marketing lives and dies by one number: ROAS. Here's the exact playbook our team uses to consistently hit 6–10x returns for D2C and SaaS clients.\n\n**The Funnel Architecture**\n\nTop of Funnel (Awareness): Short-form video ads (6–15 seconds) focused on a single problem statement. No selling. Pure pattern interrupt. Target: cold audiences via interest and lookalike stacking.\n\nMiddle of Funnel (Consideration): Retargeting with social proof — UGC, review compilations, founder story content. Goal: build trust with warm audiences who've visited your site or engaged with TOFU ads.\n\nBottom of Funnel (Conversion): Hard offer ads. Limited-time discount, free trial, free shipping. Single CTA. Urgency-driven copy. Target: cart abandoners, past visitors, high-intent segments.\n\n**Creative Formula That Works**\nHook (0–3 seconds) → Problem Agitation (3–8 seconds) → Solution Reveal (8–15 seconds) → Social Proof Flash (15–20 seconds) → CTA (final frame)\n\n**Benchmark Results (Last 90 days across portfolio):**\n- Average ROAS: 7.4x\n- Average CPL: ₹142\n- Average CTR (cold): 2.3%\n- Average conversion rate: 3.8%",
    author: "BrandHype Solutions",
    tags: ["Performance", "PPC", "Conversions"],
    readTime: "11 min read",
    date: "Mar 28, 2025",
    category: "Performance Marketing"
  },
  {
    id: 4,
    title: "Brand Identity in the Digital Age: Beyond the Logo",
    excerpt: "Great branding is more than a color palette. It's the entire sensory experience your audience has with your brand — learn how cohesive brand identity becomes your most powerful growth lever.",
    content: "Most startups think branding is a logo and a color palette. The brands that dominate markets understand branding is the sum of every touchpoint — visual, verbal, experiential, and emotional.\n\n**The 5 Pillars of Digital-First Brand Identity**\n\n1. Visual System — Logo, color palette, typography, iconography, motion design. Everything must be consistent and scalable from a social media avatar to a 4K billboard.\n\n2. Verbal Identity — Your brand voice, tone guidelines, messaging hierarchy, and taglines. How your brand sounds is as important as how it looks.\n\n3. Content Identity — The specific format, cadence, and style of content you produce. Brands like Zomato and Swiggy have content identities so strong that followers can identify a post without seeing the logo.\n\n4. Experience Design — The UX of your website, app, packaging, and in-store experience. Every friction point is a brand failure.\n\n5. Community Identity — The kind of people who publicly associate with your brand. Your community becomes your most powerful brand asset.\n\n**The BrandHype Brand Audit Process**\nBefore designing anything, we conduct a 72-point brand audit covering competitive positioning, audience perception, and visual/verbal consistency. This is what separates strategic branding from aesthetic exercises.",
    author: "BrandHype Solutions",
    tags: ["Branding", "Strategy", "Identity"],
    readTime: "6 min read",
    date: "Mar 20, 2025",
    category: "Brand Strategy"
  },
  {
    id: 5,
    title: "SEO in 2025: How to Dominate Search with AI-Assisted Content",
    excerpt: "Google's algorithm updates have fundamentally changed what it takes to rank. Discover our hybrid approach combining AI-driven content planning with expert human storytelling — ranking 400+ keywords in 90 days.",
    content: "SEO in 2025 is not about gaming algorithms. It's about genuinely being the best answer to a searcher's query. Here's how BrandHype builds content machines that rank and convert.\n\n**The AI + Human Hybrid Model**\n\nStep 1 — Keyword Clustering with AI: We use semantic clustering to group 1,000+ keywords into topic pillars. AI maps search intent and competition gaps in minutes.\n\nStep 2 — Content Briefs Built on SERPs: Every piece of content starts with a detailed brief built from analyzing the top 10 ranking pages: word count, headers, schema markup, missing angles, semantic keywords.\n\nStep 3 — Human Expert Writing: AI drafts are fact-checked and rewritten by subject matter experts. Google E-E-A-T signals require real expertise and experience — no amount of AI-polishing replaces this.\n\nStep 4 — Technical SEO Foundation: Core Web Vitals optimization, schema markup, internal linking structure, and crawl budget management. Content without technical SEO is like building on sand.\n\nStep 5 — Link Velocity + Authority Building: Targeted outreach to relevant publications, brand mention reclamation, and digital PR campaigns that earn links naturally.\n\n**90-Day Results from a recent client campaign:**\n- 412 keywords ranked (0 to position 1–10)\n- Organic traffic: +284%\n- Domain Rating: 22 → 41\n- Organic revenue contribution: 38% of total",
    author: "BrandHype Solutions",
    tags: ["SEO", "Content", "AI"],
    readTime: "8 min read",
    date: "Mar 12, 2025",
    category: "SEO"
  },
  {
    id: 6,
    title: "The Scaling Blueprint: Taking a ₹1Cr Brand to ₹10Cr",
    excerpt: "Growth doesn't happen by accident. This post unpacks the 5-stage scaling framework BrandHype uses — covering market positioning, channel stacking, retention, and the metrics that separate scaling brands.",
    content: "Scaling from ₹1Cr to ₹10Cr annual revenue is not a straight line. It's a series of inflection points, each requiring a different strategy. Here's the exact 5-stage framework we've used across 20+ D2C brands.\n\n**Stage 1 — Product-Market Fit Validation (₹0–25L)**\nBefore scaling ad spend, prove the product converts organically. Run micro-campaigns to identify your best-performing audience segments and offers. If your organic conversion rate is below 1.5%, more ad spend will not save you.\n\n**Stage 2 — Channel Discovery (₹25L–1Cr)**\nTest 4–6 acquisition channels simultaneously with capped budgets. Identify the 1–2 channels with the best CAC and highest retention overlap. Kill underperformers ruthlessly.\n\n**Stage 3 — Retention + LTV Architecture (₹1Cr–3Cr)**\nAcquisition is expensive. Retention is profitable. Build email/WhatsApp flows for onboarding, win-back, upsell, and referral. Every 10% improvement in LTV allows you to outbid competitors on CAC.\n\n**Stage 4 — Channel Dominance (₹3Cr–7Cr)**\nDouble down on your proven channel. Build creative velocity (10+ new ad variants per week), aggressive audience expansion, and lookalike scaling.\n\n**Stage 5 — Multi-Channel Compounding (₹7Cr–10Cr+)**\nStack channels so they amplify each other. SEO + paid creates compound traffic. Influencer + retargeting creates trust loops. The whole becomes greater than the sum of parts.",
    author: "BrandHype Solutions",
    tags: ["Growth", "Strategy", "Scale"],
    readTime: "12 min read",
    date: "Mar 5, 2025",
    category: "Brand Strategy"
  },
  {
    id: 7,
    title: "Social Media Mastery: Building Communities That Convert",
    excerpt: "Social media isn't just about vanity metrics anymore. Learn how BrandHype builds engaged communities through storytelling frameworks, engagement loops, and platform-native content strategies.",
    content: "The brands winning on social media in 2025 are not just broadcasting content — they're building communities. The difference between followers and community is the difference between an audience and an asset.\n\n**The Community-First Content Framework**\n\nPillar 1 — Educational Content (40%): Teach your audience something useful and specific to your niche. This builds authority and generates saves/shares — the highest-value engagement signals.\n\nPillar 2 — Entertaining Content (30%): Trend-native, format-native content that fits the platform. For Instagram: Reels. For LinkedIn: Story-driven long-form. For Twitter/X: Strong opinions.\n\nPillar 3 — Social Proof Content (20%): Customer stories, results, UGC reposts, before/after transformations. This builds trust with lurkers who are considering buying.\n\nPillar 4 — Direct Offer Content (10%): Clear, unambiguous sales content. When your other pillars are strong, your audience tolerates and responds to direct selling.\n\n**The Engagement Loop**\nCreate → Respond to every comment for the first 60 minutes → Repost top community content → Create content based on community questions → Repeat.\n\n**Metrics That Actually Matter:**\n- Save rate (benchmark: >3% of reach)\n- DM-to-sale conversion rate\n- Comment sentiment ratio\n- Follower-to-website conversion rate",
    author: "BrandHype Solutions",
    tags: ["Social Media", "Community", "Content"],
    readTime: "7 min read",
    date: "Feb 28, 2025",
    category: "Social Media"
  },
  {
    id: 8,
    title: "Brand Strategy That Sticks: 7 Principles for Market Leaders",
    excerpt: "The difference between brands that dominate and those that disappear comes down to strategy. We break down 7 core brand strategy principles our agency applies from day one.",
    content: "Brand strategy is the foundation everything else is built on. When the foundation is weak, marketing spend leaks. When it's strong, every dollar compounds. Here are the 7 principles we apply to every client engagement.\n\n**Principle 1 — Category Design Over Category Competition**\nDon't fight for market share in an existing category. Design a new one where you can be first. Oatly didn't compete with milk — they created the oat milk category.\n\n**Principle 2 — Enemy Framing**\nThe strongest brands define what they're against. Apple vs. IBM. Dollar Shave Club vs. overpriced razors. Your enemy isn't a competitor — it's the status quo your customers hate.\n\n**Principle 3 — Point-of-View Over Features**\nFeature wars are unwinnable. Point-of-view creates loyalty. What does your brand genuinely believe that others won't say?\n\n**Principle 4 — Consistent Visual + Verbal Cadence**\nBrands are built through repetition. The 100th time someone sees your content should feel as distinctive as the first.\n\n**Principle 5 — Audience Segmentation by Psychographics, Not Demographics**\nAge and income don't predict brand loyalty. Values, aspirations, and worldview do.\n\n**Principle 6 — Distribution as Brand Strategy**\nWhere you sell and how your product reaches customers is part of your brand. DTC brands that only sell through their own site build fundamentally different brand equity than those relying on Amazon.\n\n**Principle 7 — Brand Equity Measured Quarterly**\nBrand health isn't just awareness. Track: unaided recall, net promoter score, share of voice, and search volume growth. What gets measured gets managed.",
    author: "BrandHype Solutions",
    tags: ["Branding", "Strategy", "Leadership"],
    readTime: "10 min read",
    date: "Feb 20, 2025",
    category: "Brand Strategy"
  },
  // ─── 12 New SEO-targeted posts ───────────────────────────────────────────────
  {
    id: 9,
    title: "Why Your Indian Brand Isn't Ranking on Google (And How to Fix It)",
    excerpt: "Most Indian brands make the same 5 SEO mistakes that keep them buried on page 3. Here's exactly what's holding your website back and how to fix it.",
    content: "If your Indian brand is stuck on page 3 of Google, you're losing customers every single day to competitors who may have an inferior product but a superior digital strategy. The good news: the fixes are systematic and proven.\n\n**Mistake 1 — No India-Specific Keyword Strategy**\nMost brands target generic global terms that have massive competition and zero India-specific intent. 'Digital marketing agency' is fought over by thousands of global players. 'Digital marketing agency Mumbai' has 90% less competition and 10x higher conversion intent from Indian searchers. Map your keywords to how your Indian customers actually search.\n\n**Mistake 2 — Ignoring Mobile Page Speed**\nOver 80% of Indian web traffic comes from mobile devices, often on 4G connections in Tier 2 and Tier 3 cities. If your website takes more than 3 seconds to load on mobile, Google demotes you — and users bounce before they even read your headline. Run a Core Web Vitals audit immediately.\n\n**Mistake 3 — No Local SEO Setup**\nIf you serve a specific city, your Google Business Profile is your most powerful free SEO tool. Most Indian businesses leave it incomplete — no photos, no categories, no review responses. An optimized GBP can get you into the 'local 3-pack' for high-intent searches like 'digital marketing agency near me.'\n\n**Mistake 4 — Zero Backlinks from Indian Publications**\nGoogle judges authority by who links to you. A backlink from YourStory, Inc42, or Economic Times carries far more weight in Indian search results than generic directory links. Build a digital PR strategy targeting Indian business publications.\n\n**Mistake 5 — Thin, Unstructured Content**\nService pages with 150 words of vague copy don't rank. Google rewards pages that thoroughly answer a searcher's question — with proper H2/H3 structure, FAQs, and internal links. Every key page should be minimum 800 words of useful content.\n\nAt BrandHype Solutions, our SEO audits diagnose all five of these issues within 48 hours. Get your free SEO audit and discover exactly what's holding your site back.",
    author: "BrandHype Solutions",
    tags: ["SEO", "India", "Google ranking", "digital marketing"],
    readTime: "8 min read",
    date: "April 1, 2026",
    category: "SEO"
  },
  {
    id: 10,
    title: "How to Do Keyword Research for the Indian Market (2026 Guide)",
    excerpt: "Keyword research for India is fundamentally different from global SEO. Here's a step-by-step process that accounts for Hindi-English search intent, regional variation, and city-specific queries.",
    content: "Keyword research for India is not a copy-paste job from global SEO playbooks. The Indian search landscape has unique characteristics that require a different approach — and brands that understand this have a significant competitive advantage.\n\n**Why Indian Keyword Research Is Different**\nIndian searchers use a distinctive mix of Hindi and English, often in the same query. 'Best skincare brand India' and 'skin care ke liye best brand' are both valid search queries targeting the same intent. Regional variations matter enormously — what people search for in Chennai is different from Chandigarh. And mobile-first behavior means voice search and conversational queries are growing faster in India than anywhere else.\n\n**Step 1 — Start with Google Keyword Planner (India Filter)**\nSet your location to India and toggle city-level data for your top 5 target markets. Look for keywords with 1,000–10,000 monthly searches and medium competition. These are your easiest ranking opportunities.\n\n**Step 2 — Map Hindi-English Intent**\nUse Google Trends with the 'India' filter to compare Hindi and English variants of your core keywords. Identify which language your target audience predominantly uses in search and prioritize accordingly.\n\n**Step 3 — Build City-Specific Keyword Clusters**\nFor service businesses: 'SEO agency Mumbai,' 'SEO agency Delhi,' 'SEO agency Bangalore' are three separate keyword clusters, each with its own competition level and search volume. Build dedicated landing pages for each city you serve.\n\n**Step 4 — Map Industry-Specific Terms**\nFor D2C brands, long-tail keywords with purchase intent — 'best D2C skincare brand India under 500' — have conversion rates 5–8x higher than generic head terms. Build content around the full purchase journey.\n\n**Step 5 — Analyze Competitors' Ranking Keywords**\nUse tools like Semrush or Ahrefs (India database) to extract what your top 3 competitors rank for that you don't. These are your fastest ranking opportunities — keywords with proven demand and an existing content gap.",
    author: "BrandHype Solutions",
    tags: ["keyword research", "India", "SEO strategy", "Hindi-English"],
    readTime: "8 min read",
    date: "April 3, 2026",
    category: "SEO"
  },
  {
    id: 11,
    title: "Meta Ads in India: Why Most Campaigns Fail and How to Fix Yours",
    excerpt: "Indian Meta Ads campaigns have a higher failure rate than any other market — and it comes down to 3 fixable mistakes. Here's what to change.",
    content: "India is one of the largest Meta Ads markets in the world — and one of the most misunderstood. Brands that copy Western campaign strategies into Indian markets wonder why their ROAS is terrible. The reason is systematic, and it's fixable.\n\n**Why Indian Meta Campaigns Fail**\n\nMistake 1 — Wrong Audience Targeting\nMost brands set up broad interest-based targeting and wonder why they're reaching the wrong people. India's Facebook/Instagram user base is massive but incredibly diverse in income, language, and purchase behavior. A campaign targeting 'fitness enthusiasts' in India will reach people with wildly different purchasing power and intent. Build tighter audience segments by layering interests with income indicators (device type, behavior signals) and geographic segmentation by city tier.\n\nMistake 2 — Generic Creatives That Don't Resonate\nAd creative built for Western audiences performs poorly in India. Indian consumers respond to cultural familiarity, local language nuance, aspirational but relatable scenarios, and social proof from people who look and sound like them. If your ad creative was designed without India in mind, it's costing you CPL.\n\nMistake 3 — Wrong Campaign Objectives\nRunning reach or brand awareness objectives when you need conversions is one of the most common and expensive mistakes. Indian Meta campaigns for D2C brands should almost always start with Advantage+ Shopping Campaigns or Conversion objective campaigns targeting specific purchase events.\n\n**Budget Benchmarks for India**\nMinimum viable Meta budget: ₹50,000/month to exit the learning phase with meaningful data. Target CPM in India: ₹80–150 for general audiences, ₹200–400 for premium urban segments. Expected CPC: ₹4–12 depending on industry and audience.\n\nBrandHype Solutions restructures Meta campaigns for Indian brands with a proven 3-step framework. Book a free campaign audit to see where your budget is leaking.",
    author: "BrandHype Solutions",
    tags: ["Meta Ads", "Facebook Ads", "India", "performance marketing"],
    readTime: "8 min read",
    date: "April 5, 2026",
    category: "Performance Marketing"
  },
  {
    id: 12,
    title: "Google Ads vs Meta Ads — Which is Better for Indian D2C Brands?",
    excerpt: "Should you spend on Google or Meta for your Indian D2C brand? The honest answer depends on your margin, product type, and buying cycle.",
    content: "The Google vs. Meta debate is one of the most common questions Indian D2C founders ask us. The honest answer: it's not either/or. But the budget allocation depends entirely on your product type, margin structure, and where your customers are in their buying journey.\n\n**Google Search Ads — When It Wins**\nGoogle Search captures existing demand. If people are already searching for what you sell, Google is unbeatable for conversion intent. Best for: high-ticket D2C products (>₹1,500 AOV), products with clear search intent ('buy organic skincare online India'), and brands targeting customers who know what they want. Typical ROAS for D2C on Google Search in India: 4–8x.\n\n**Meta Ads — When It Wins**\nMeta (Instagram + Facebook) creates demand. It introduces your product to people who don't know they need it yet. Best for: impulse purchases, visually-driven products, fashion and beauty, food and beverage, and lifestyle brands. Meta's targeting allows you to reach people by interest and behavior before they're actively searching. Typical ROAS for D2C on Meta in India: 2.5–6x.\n\n**The Recommended Budget Split for Indian D2C**\nFor brands spending ₹1–3L/month: Start with Meta (80%) + Google Brand (20%). For brands spending ₹3–10L/month: Meta (60%) + Google Search (30%) + Google Shopping (10%). For brands spending ₹10L+/month: Meta (50%) + Google Search (30%) + Google Shopping (15%) + YouTube (5%).\n\n**The Hybrid Strategy for Scaling**\nThe highest-performing Indian D2C brands use both channels in a compound strategy: Meta creates awareness and demand at the top of funnel, Google Search captures the resulting branded and category searches at the bottom. The brands that only run one channel are leaving significant revenue on the table.\n\nBrandHype Solutions manages both channels for 20+ Indian D2C brands. We'll tell you exactly where your budget should go based on your product and current metrics.",
    author: "BrandHype Solutions",
    tags: ["Google Ads", "Meta Ads", "D2C", "India"],
    readTime: "8 min read",
    date: "April 8, 2026",
    category: "Performance Marketing"
  },
  {
    id: 13,
    title: "Social Media Strategy for Indian Startups: What Actually Works in 2026",
    excerpt: "Generic social media advice doesn't work for Indian startups. Here's a platform-by-platform breakdown of what actually drives growth and revenue in the Indian market.",
    content: "Social media strategy for Indian startups is not a global best practices document with 'India' added to the title. The platform dynamics, content preferences, and purchase behaviors in India are unique — and the brands that understand this are growing 3–5x faster than those following generic advice.\n\n**Platform Breakdown for India (2026)**\n\nInstagram: Still India's #1 D2C discovery and conversion channel. Reels drive reach. Stories drive DMs and direct sales. The algorithm rewards consistency over volume — 4–5 quality posts per week outperforms 10 mediocre ones. Key: invest in Reels that are native to Indian culture — trending audio, relatable scenarios, aspirational but accessible aesthetics.\n\nYouTube: India's most underutilized platform for brand building. YouTube Shorts are growing explosively in Tier 2 and Tier 3 cities. Long-form content (8–15 min) builds deep trust with high-intent audiences. Best for: SaaS, high-ticket products, and brands where education drives the purchase decision.\n\nLinkedIn: The B2B growth channel. If you're a SaaS company or service business in India, LinkedIn organic reach is 3–5x better than any other platform. Founder-led content drives inbound. Post 3–4x per week mixing thought leadership, company milestones, and industry commentary.\n\nTwitter/X: Best for real-time brand voice and industry conversations. Valuable for SaaS and tech brands participating in startup ecosystem discussions. Limited direct conversion value for D2C.\n\n**Measuring ROI Beyond Likes**\nThe metrics that matter: DM conversion rate (DMs → sales conversations), story swipe-up rate, profile visit-to-follow rate, and revenue directly attributed to social (tracked with UTM links and promo codes). If your agency is reporting reach and impressions as the headline metric, ask them to translate those numbers into rupees.",
    author: "BrandHype Solutions",
    tags: ["social media", "startups", "India", "Instagram"],
    readTime: "8 min read",
    date: "April 10, 2026",
    category: "Social Media"
  },
  {
    id: 14,
    title: "How to Use LinkedIn to Generate B2B Leads in India",
    excerpt: "LinkedIn is India's #1 B2B lead generation channel — but most companies are using it wrong. Here's a proven system for turning connections into clients.",
    content: "India now has the world's 3rd largest LinkedIn user base — over 100 million professionals. Indian decision-makers research vendors, evaluate partners, and discover new tools on LinkedIn before they ever visit a website. If your brand isn't present and credible on LinkedIn, you're invisible to a huge segment of high-value buyers.\n\n**Why LinkedIn Works for B2B in India**\nThe Indian business community on LinkedIn is highly engaged and still relatively underserved by quality content. Unlike other markets where LinkedIn is saturated, India's LinkedIn feed has significantly less competition for attention — meaning consistent, valuable content gets disproportionate reach.\n\n**Profile Optimization for Founders**\nYour LinkedIn profile is your most important business card. Headline should describe the outcome you deliver, not your job title. 'Founder @ BrandHype Solutions | We scale Indian D2C brands with performance marketing' outperforms 'CEO & Co-Founder' in profile search and first impressions by 300%.\n\n**Content Strategy That Builds Authority**\nThe content formats that perform best for Indian B2B audiences: (1) Carousels — step-by-step frameworks, data breakdowns, case study highlights. (2) Long-form posts — personal story + business lesson format. (3) Short posts with a strong hook — contrarian takes, predictions, myth-busting. Post 3–4x per week. Consistency beats virality every time.\n\n**Outreach Sequence That Converts**\nStep 1: Connect with a personalized note referencing their content or company. Step 2: After acceptance, send a value-first message — share a relevant resource, not a pitch. Step 3: Follow up with a specific question or observation about their business. Step 4: Only introduce your services after you've provided value. This sequence generates 4–6x higher response rates than cold pitching.\n\n**LinkedIn Ads for Indian B2B**\nSponsored Content with Lead Gen Forms targeting Indian companies by industry and decision-maker role delivers CPL of ₹800–2,500 for quality B2B leads. Far more precise than Meta for B2B targeting.",
    author: "BrandHype Solutions",
    tags: ["LinkedIn", "B2B", "India", "lead generation"],
    readTime: "8 min read",
    date: "April 12, 2026",
    category: "Social Media"
  },
  {
    id: 15,
    title: "Brand Strategy 101 for Indian D2C Brands: How to Stand Out in a Crowded Market",
    excerpt: "Most Indian D2C brands look and sound the same. Here's how to build a brand positioning that makes you the obvious choice in your category.",
    content: "Walk into the skincare aisle of any Indian e-commerce platform and you'll see the same thing: pastel colors, minimalist fonts, 'clean ingredients' messaging, and 'dermatologist tested' claims. The D2C explosion in India has created a massive problem — most brands are using the same playbook, which means none of them stand out.\n\n**What Brand Strategy Actually Means**\nBrand strategy is not a logo, a color palette, or a tagline. It's the strategic framework that determines: who you are for, what you stand for, why someone should choose you over every alternative, and how you sound and behave consistently across every touchpoint. Branding and design are the execution. Strategy is the thinking that makes the execution effective.\n\n**Why Indian D2C Brands Fail to Differentiate**\nMost Indian D2C founders build their brand by looking at competitors and trying to be slightly better. This is a race to mediocrity. The brands that win build their positioning by looking at what competitors are NOT saying, NOT doing, and NOT standing for — and owning that space.\n\n**The 4 Elements of Strong Brand Strategy**\n\n1. Positioning — What single thing does your brand own in the mind of your ideal customer? Not features. One clear, differentiating idea.\n\n2. Voice — How does your brand sound? Irreverent and bold (like Zomato) or premium and authoritative (like Nykaa)? Your voice should be consistent across every piece of communication.\n\n3. Audience Architecture — Not just demographics. Psychographic profiles: what does your ideal customer believe, aspire to, fear, and value? The brands that nail this create cult-like loyalty.\n\n4. Brand Architecture — If you have multiple products or sub-brands, how do they relate? A clear architecture prevents brand confusion and enables each product to reinforce the parent brand.\n\nBrandHype Solutions builds brand strategies for Indian D2C brands that create genuine market differentiation. Book a brand strategy discovery call.",
    author: "BrandHype Solutions",
    tags: ["brand strategy", "D2C", "India", "positioning"],
    readTime: "8 min read",
    date: "April 14, 2026",
    category: "Brand Strategy"
  },
  {
    id: 16,
    title: "Digital Marketing Budget Guide for Indian Startups (₹1L to ₹10L/month)",
    excerpt: "How much should you spend on digital marketing in India? Here's a stage-by-stage budget allocation guide from ₹1L to ₹10L per month.",
    content: "One of the most common questions we get from Indian founders: 'How much should I spend on digital marketing?' The honest answer: it depends on your stage, your unit economics, and your goals. Here's a practical guide.\n\n**₹1L/month — Survival Stage**\nAt this budget, you cannot do everything. Pick one paid channel and one organic channel and go deep. Recommended allocation: Meta Ads (₹60K media spend) + SEO content (₹40K for 4–6 blog posts + on-page optimization). Goal: identify your lowest CAC channel and prove it with data before scaling.\n\n**₹2–5L/month — Discovery Stage**\nYou have enough budget to test multiple channels. Recommended allocation: Meta Ads (₹1.5L) + Google Ads (₹1L) + SEO (₹1.5L including content + technical). At this stage, you're building your attribution model — understanding exactly where your customers come from and which channel has the best CAC:LTV ratio.\n\n**₹5–10L/month — Scaling Stage**\nYou've identified your best channels. Now you scale what works and eliminate what doesn't. Recommended allocation: Meta Ads (₹3L) + Google Ads (₹2L) + SEO (₹2L) + LinkedIn (₹1L for B2B) + CRO (₹1L for landing page testing). At this stage, invest in creative volume — test 10+ new ad creatives per month.\n\n**What to Expect at Each Level**\n₹1L/month: First data points, initial CAC benchmarks. 30–90 day timeline for meaningful results.\n₹2–5L/month: Consistent lead flow, channel attribution clarity. 60–120 day timeline for full funnel data.\n₹5–10L/month: Predictable revenue contribution from digital. Scale what works, cut what doesn't, iterate monthly.\n\n**When to Scale Budget**\nScale your ad budget only when: (1) Your CAC is profitable (LTV:CAC > 3:1). (2) Your conversion rate on landing pages is above industry benchmark. (3) You have creative pipeline to support increased spend.",
    author: "BrandHype Solutions",
    tags: ["digital marketing", "budget", "startups", "India"],
    readTime: "8 min read",
    date: "April 17, 2026",
    category: "Performance Marketing"
  },
  {
    id: 17,
    title: "Local SEO for Mumbai Businesses: How to Rank #1 on Google Maps",
    excerpt: "If your Mumbai business isn't showing up on Google Maps for local searches, you're invisible to your most valuable customers. Here's how to fix it in under 30 days.",
    content: "Every day, thousands of people in Mumbai search 'digital marketing agency near me,' 'restaurant near me,' 'gym near Bandra,' and hundreds of other local intent queries. If your business isn't showing up in the local 3-pack (the top 3 map results), you're invisible to the highest-intent customers in your city.\n\n**What Local SEO Means**\nLocal SEO is the practice of optimizing your online presence so your business appears prominently when people search for businesses like yours in a specific geographic area. For Mumbai businesses, this means appearing in Google Maps results, the local 3-pack, and geo-modified keyword searches ('digital marketing agency Mumbai').\n\n**Step 1 — Set Up and Optimize Google Business Profile**\nThis is your single most important local SEO asset. Complete every field: business name (exactly as it appears everywhere), address (consistent with your website), phone number, business category (primary + secondary), hours, website URL, and photos (minimum 10 high-quality images). Add a keyword-rich business description including 'Mumbai,' your neighborhood, and your primary services.\n\n**Step 2 — Build Local Citations**\nCitations are mentions of your business name, address, and phone number (NAP) on other websites. Key Indian directories: Justdial, Sulekha, IndiaMart, and MagicBricks (if relevant). Ensure 100% NAP consistency across all platforms — even small variations hurt your local rankings.\n\n**Step 3 — Generate and Respond to Reviews**\nGoogle reviews are the #1 local ranking factor. Build a system to ask every satisfied client for a Google review — email follow-up, WhatsApp message, or in-person request. Respond to every review (positive and negative) within 24 hours. Businesses with 50+ reviews and 4.5+ rating dominate local 3-pack results in Mumbai.\n\n**Step 4 — Create Location-Specific Content**\nPublish blog posts and service pages targeting Mumbai-specific keywords: 'best digital marketing agency in Mumbai,' 'SEO services Mumbai,' etc. Include local landmarks, neighborhoods, and industry-specific content relevant to Mumbai's business ecosystem.\n\n**Step 5 — Track Local Rankings**\nUse tools like BrightLocal or Moz Local to track your local keyword rankings weekly. Set Google Alerts for your business name + Mumbai to monitor mentions.",
    author: "BrandHype Solutions",
    tags: ["local SEO", "Mumbai", "Google Maps", "Google Business Profile"],
    readTime: "8 min read",
    date: "April 19, 2026",
    category: "SEO"
  },
  {
    id: 18,
    title: "Content Marketing for Indian Brands: A Strategy That Actually Drives Traffic",
    excerpt: "Most Indian brand blogs get zero traffic. Here's why — and a proven 3-tier content model that turns your blog into a consistent source of organic leads.",
    content: "Most Indian brand blogs are ghost towns. Published sporadically, optimized for nothing, and never promoted. Meanwhile, a handful of brands have turned their blogs into their highest-ROI marketing channel. The difference is strategy — not just effort.\n\n**Why Most Indian Brand Blogs Fail**\n\nReason 1 — Generic Topics Without SEO Intent: Writing about 'Why Digital Marketing Matters' generates zero organic traffic because nobody searches for that. Every blog post must target a specific keyword that your ideal Indian customer is actively searching for.\n\nReason 2 — No Consistency: Google rewards sites that publish quality content consistently. A blog with 3 posts from 2023 and nothing since signals an abandoned site. Minimum viable publishing cadence: 2 posts per month, every month.\n\nReason 3 — Zero Distribution: Most Indian brands publish content and then do nothing with it. Every post needs a distribution plan: social sharing, email newsletter, LinkedIn republishing, relevant forum/community sharing, and internal linking to your key service pages.\n\n**The 3-Tier Content Model**\n\nTier 1 — Pillar Content (1 post/month): Long-form, comprehensive guides on your most valuable keyword clusters. Examples: 'Complete Guide to SEO for Indian Brands (2026).' These are 2,500–5,000 word posts that aim to be the definitive resource on a topic. They rank for dozens of keywords and earn backlinks naturally.\n\nTier 2 — Cluster Content (4–6 posts/month): Shorter, focused posts that answer specific questions your audience has and link back to your pillar content. Examples: 'How to Set Up Google Business Profile for Mumbai Restaurants.' These build topical authority and drive long-tail traffic.\n\nTier 3 — Local/Niche Content (2 posts/month): City-specific and industry-specific posts. Examples: 'Digital Marketing for D2C Skincare Brands in India.' These capture high-conversion-intent searches from exactly your target customer.\n\n**Distribution Strategy for Indian Audiences**\nRepurpose every blog post into: 3 LinkedIn posts (hook, key insight, conclusion), 1 Instagram carousel, 1 email newsletter section. Share in relevant WhatsApp groups and LinkedIn communities. Tag any brands or people mentioned in the post when sharing on social.",
    author: "BrandHype Solutions",
    tags: ["content marketing", "India", "blog strategy", "organic traffic"],
    readTime: "8 min read",
    date: "April 21, 2026",
    category: "SEO"
  },
  {
    id: 19,
    title: "How We Scaled a Mumbai D2C Brand from ₹2Cr to ₹8Cr Revenue — Case Study",
    excerpt: "A real case study of how BrandHype Solutions helped a Mumbai-based D2C skincare brand 4x their revenue in 8 months using performance marketing and content systems.",
    content: "This is the story of how BrandHype Solutions helped a Mumbai-based D2C skincare brand scale from ₹2Cr to ₹8Cr in annual revenue over 8 months — using a combination of Meta Ads restructuring, SEO content, and a retention marketing system.\n\n**Client Background**\nA Mumbai-based D2C skincare brand, founded in 2022, selling clean beauty products through their own website and marketplaces. They had a quality product with strong repeat purchase rates but were struggling with high customer acquisition costs and poor Meta Ads performance.\n\n**The Problem**\nWhen they came to BrandHype, they were spending ₹3L/month on Meta Ads with a 1.2x ROAS — effectively losing money on every new customer. Their website was generating minimal organic traffic. They had no email/WhatsApp retention system. Their brand positioning was generic ('natural skincare brand') — indistinguishable from hundreds of competitors.\n\n**The Strategy**\nMonth 1–2: Complete Meta Ads restructure. Rebuilt campaign architecture from scratch — new creative brief process, UGC-first creative strategy, Advantage+ Shopping Campaigns replacing manual ad sets. New audience strategy focusing on Mumbai, Bangalore, and Delhi tier-1 female segments.\n\nMonth 2–4: SEO content system launched. Published 3 posts/week targeting India-specific skincare keywords. Optimized all product and category pages. Built 15 high-authority backlinks through digital PR.\n\nMonth 3–6: Retention system built. Klaviyo email flows for welcome, post-purchase, win-back, and replenishment reminders. WhatsApp broadcast system for launches and promotions.\n\n**The Results (8 months)**\n- Revenue: ₹2Cr → ₹8Cr (4x growth)\n- Meta Ads ROAS: 1.2x → 4.1x\n- CAC: reduced 58%\n- Organic traffic: 0 → 18,000 monthly visitors\n- Email/WhatsApp revenue: 28% of total revenue\n- Repeat purchase rate: 23% → 41%\n\n**What We Learned**\nThe biggest unlock was fixing the retention system. Most D2C brands obsess over acquisition and neglect retention. Every 10% improvement in repeat purchase rate effectively cuts your CAC in half — because you need fewer new customers to hit your revenue targets.",
    author: "BrandHype Solutions",
    tags: ["case study", "D2C", "performance marketing", "Meta Ads"],
    readTime: "8 min read",
    date: "April 23, 2026",
    category: "Performance Marketing"
  },
  {
    id: 20,
    title: "The Complete Guide to Digital Marketing for D2C Brands in India (2026)",
    excerpt: "Everything a D2C brand in India needs to know about digital marketing in 2026 — from channel strategy and budget allocation to content systems and scaling paid acquisition.",
    content: "India's D2C market is projected to reach $100 billion by 2025. The brands that will capture the majority of this growth share are not the ones with the biggest budgets — they're the ones with the smartest digital marketing systems. This guide covers everything you need to build yours.\n\n**The Indian D2C Landscape in 2026**\nIndia now has 800+ D2C brands competing for attention across every category. The good news: most of them are doing digital marketing poorly. Generic social content, untargeted ad spend, and zero SEO investment means the bar for standing out is still surprisingly low for brands willing to build a proper system.\n\n**Channel Strategy Overview**\n\nMeta Ads (Instagram + Facebook): Your highest-volume customer acquisition channel for most D2C categories. India has 500M+ Facebook/Instagram users. The key is creative — Indian consumers respond to culturally relevant, aspirational but relatable content. Invest in UGC, influencer content, and reels-first creative strategy. Expected ROAS range: 2.5–6x for well-optimized campaigns.\n\nGoogle Ads (Search + Shopping): Capture high-intent demand from customers already searching for your product category. Google Shopping is particularly powerful for D2C — it puts your product in front of active buyers with price comparison context. Expected ROAS range: 4–10x for search campaigns on non-branded keywords.\n\nSEO (Search Engine Optimization): The highest-ROI long-term channel for D2C brands in India. A properly built SEO system compounds — content published today will drive free traffic for 3–5 years. India-specific keyword strategy, mobile-first optimization, and local SEO for city-specific demand are the key levers. Explore our dedicated SEO Services in India page for a full breakdown.\n\nSocial Media Marketing: Beyond paid ads, organic social is your brand-building engine. Instagram for visual storytelling and D2C sales, LinkedIn for B2B partnerships and investor relations, YouTube for educational content that builds deep trust. Learn more on our Social Media Marketing page.\n\nLinkedIn Marketing: Critical for SaaS companies and service businesses targeting Indian enterprise and SMB customers. India's LinkedIn user base has surpassed 100M professionals — and decision-makers are actively discoverable. See our LinkedIn Marketing Services page for the full B2B playbook.\n\nBrand Strategy: The foundation all of the above is built on. Without clear positioning, differentiation, and brand voice, your marketing spend leaks. A strong brand makes every rupee of ad spend work harder. Explore our Brand Strategy page.\n\nPerformance Marketing: The overarching discipline that ties paid channels together — measurement, attribution, optimization, and scaling. See our Performance Marketing page for a deep dive.\n\n**Budget Guidance by Stage**\nSeed stage (pre ₹1Cr revenue): ₹1–3L/month. Focus: Meta Ads + SEO foundation.\nGrowth stage (₹1Cr–5Cr revenue): ₹3–8L/month. Focus: Meta + Google + SEO content.\nScale stage (₹5Cr–20Cr revenue): ₹8–25L/month. Focus: all channels with retention overlay.\n\n**Organic vs. Paid — Building for Scale**\nThe highest-performing Indian D2C brands use paid acquisition to drive immediate revenue and organic (SEO + social) to build long-term brand equity and reduce dependence on paid. The goal: reach a state where 40–50% of your revenue comes from organic channels — at which point your paid CAC becomes profitable at almost any spend level.\n\n**Building for Scale**\nThe brands that scale from ₹5Cr to ₹50Cr in India share three characteristics: (1) They have a clear attribution model — they know exactly where every rupee of revenue comes from. (2) They invest in creative production — they have 10+ new ad creatives being tested every month. (3) They build retention systems early — email, WhatsApp, and loyalty programs that increase LTV and reduce the cost of growth.\n\nBrandHype Solutions works with D2C brands across India to build these systems. Get a free brand audit to see exactly where your growth is being held back.",
    author: "BrandHype Solutions",
    tags: ["digital marketing", "D2C", "India", "complete guide"],
    readTime: "12 min read",
    date: "April 26, 2026",
    category: "Brand Strategy"
  }
];
const PRIMARY_CATEGORIES = [
  "All",
  "SEO",
  "Performance Marketing",
  "Social Media",
  "Brand Strategy"
];
function backendToDisplay(post) {
  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt || post.content.slice(0, 200),
    content: post.content,
    author: post.author && post.author !== "farhatnazneen95@gmail.com" ? post.author : "BrandHype Solutions",
    tags: post.tags ? post.tags.split(",").map((t) => t.trim()).filter(Boolean) : [post.category],
    readTime: post.readTime || "5 min read",
    date: post.publishDate,
    category: post.category,
    featuredImage: post.featuredImage || void 0
  };
}
function FeaturedHero({ post }) {
  const cfg = getCatConfig(post.category);
  const slug = toSlug(post.title);
  function handleClick() {
    navigateTo(`/blog/${slug}`);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      className: "relative w-full overflow-hidden rounded-2xl mb-8 cursor-pointer group min-h-[400px] sm:min-h-[500px] flex items-end text-left",
      "data-ocid": "blog.featured_card",
      onClick: handleClick,
      "aria-label": `Read featured article: ${post.title}`,
      children: [
        post.featuredImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: post.featuredImage,
            alt: post.title,
            className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: `linear-gradient(135deg, ${cfg.color}33, ${cfg.color}11)`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `absolute inset-0 bg-gradient-to-br ${cfg.gradient}`,
                  style: { opacity: 0.6 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0",
                  style: { background: "rgba(8,8,8,0.3)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dot-pattern opacity-20" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 p-6 sm:p-10 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide",
                style: {
                  background: cfg.bg,
                  color: cfg.color,
                  border: `1px solid ${cfg.border}`
                },
                children: post.category
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide",
                style: {
                  background: "rgba(255,184,0,0.15)",
                  color: "#FFB800",
                  border: "1px solid rgba(255,184,0,0.4)"
                },
                children: "★ Featured"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white leading-tight mb-3 max-w-3xl", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm sm:text-base leading-relaxed mb-5 max-w-2xl line-clamp-2 sm:line-clamp-3", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-white/50 text-xs mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
              " ",
              post.author
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
              " ",
              post.date
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
              " ",
              post.readTime
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                navigateTo(`/blog/${slug}`);
              },
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 group-hover:gap-3",
              style: {
                background: "linear-gradient(135deg, #0066FF, #9B30FF)",
                boxShadow: "0 0 24px rgba(0,102,255,0.5)"
              },
              "data-ocid": "blog.featured_read_button",
              children: [
                "Read Article ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ArticleCard({ post, index }) {
  const cfg = getCatConfig(post.category);
  const fallbackGradient = FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length];
  const slug = toSlug(post.title);
  function handleClick() {
    navigateTo(`/blog/${slug}`);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      className: "group rounded-2xl border border-white/8 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col text-left w-full",
      style: { background: "rgba(255,255,255,0.025)" },
      "data-ocid": `blog.article.${index + 1}`,
      onClick: handleClick,
      "aria-label": `Read article: ${post.title}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video relative overflow-hidden flex-shrink-0", children: [
          post.featuredImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: post.featuredImage,
              alt: post.title,
              className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "w-full h-full flex items-center justify-center",
              style: { background: fallbackGradient },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dot-pattern opacity-20" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "relative z-10 font-display font-black text-4xl sm:text-5xl opacity-30",
                    style: { color: cfg.color },
                    children: post.category.slice(0, 1)
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide backdrop-blur-sm",
              style: {
                background: cfg.bg,
                color: cfg.color,
                border: `1px solid ${cfg.border}`
              },
              children: post.category
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300",
              style: {
                background: `linear-gradient(90deg, ${cfg.color}, transparent)`
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-display font-bold text-base leading-snug mb-2 line-clamp-2 transition-colors duration-200 group-hover:text-[#0066FF]",
              style: { color: "#f8f8f8" },
              children: post.title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 text-sm leading-relaxed line-clamp-2 mb-4 flex-1", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto pt-3 border-t border-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-white",
                  style: {
                    background: `linear-gradient(135deg, ${cfg.color}, ${cfg.color}88)`
                  },
                  children: post.author.charAt(0)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 text-xs truncate", children: post.author })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-white/30 text-xs flex-shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                " ",
                post.readTime
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block", children: post.date })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Sidebar({
  posts,
  email,
  setEmail,
  subscribed,
  onSubscribe
}) {
  const topStories = posts.slice(0, 5);
  const trending = [...posts].sort(() => 0.5 - Math.random()).slice(0, 5);
  const categoryCounts = posts.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "flex flex-col gap-6", "data-ocid": "blog.sidebar", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-5 border border-white/6",
        style: { background: "rgba(255,255,255,0.02)" },
        "data-ocid": "blog.top_stories_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "h3",
            {
              className: "font-display font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2 border-l-2 border-[#0066FF] pl-2",
              style: { color: "rgba(255,255,255,0.7)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5 text-[#0066FF]" }),
                " Top Stories"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: topStories.map((post, i) => {
            const cfg = getCatConfig(post.category);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "flex items-start gap-3 group cursor-pointer text-left w-full",
                "data-ocid": `blog.top_story.${i + 1}`,
                onClick: () => navigateTo(`/blog/${toSlug(post.title)}`),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-display font-black text-xl leading-none flex-shrink-0 w-6 text-center",
                      style: { color: i < 3 ? cfg.color : "rgba(255,255,255,0.2)" },
                      children: i + 1
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs font-medium leading-snug line-clamp-2 group-hover:text-[#0066FF] transition-colors duration-200",
                        style: { color: "rgba(255,255,255,0.75)" },
                        children: post.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px]", style: { color: cfg.color }, children: post.category }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-white/30", children: post.date })
                    ] })
                  ] })
                ]
              },
              post.id
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-5 border border-white/6",
        style: { background: "rgba(255,255,255,0.02)" },
        "data-ocid": "blog.trending_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-display font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2 border-l-2 border-[#9B30FF] pl-2",
              style: { color: "rgba(255,255,255,0.7)" },
              children: "🔥 Trending Now"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: trending.map((post, i) => {
            const cfg = getCatConfig(post.category);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "flex items-start gap-3 group cursor-pointer text-left w-full",
                "data-ocid": `blog.trending.${i + 1}`,
                onClick: () => navigateTo(`/blog/${toSlug(post.title)}`),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-display font-black text-xl leading-none flex-shrink-0 w-6 text-center",
                      style: { color: "rgba(255,255,255,0.15)" },
                      children: i + 1
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-xs font-medium leading-snug line-clamp-2 group-hover:text-[#9B30FF] transition-colors duration-200",
                        style: { color: "rgba(255,255,255,0.75)" },
                        children: post.title
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px]", style: { color: cfg.color }, children: post.category }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5 text-[10px] text-white/30", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-2.5 h-2.5" }),
                        post.readTime
                      ] })
                    ] })
                  ] })
                ]
              },
              post.id
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-5 border border-white/6",
        style: { background: "rgba(255,255,255,0.02)" },
        "data-ocid": "blog.popular_categories_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: "font-display font-bold text-sm uppercase tracking-widest mb-4 border-l-2 border-[#FFB800] pl-2",
              style: { color: "rgba(255,255,255,0.7)" },
              children: "Popular Categories"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: Object.entries(categoryCounts).map(([cat, count]) => {
            const cfg = getCatConfig(cat);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 hover:scale-105",
                style: {
                  background: cfg.bg,
                  color: cfg.color,
                  border: `1px solid ${cfg.border}`
                },
                children: [
                  cat,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold",
                      style: { background: `${cfg.color}33`, color: cfg.color },
                      children: count
                    }
                  )
                ]
              },
              cat
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl p-5 border border-[#FFB800]/20 relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, rgba(255,184,0,0.08), rgba(155,48,255,0.06))"
        },
        "data-ocid": "blog.newsletter_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] pointer-events-none",
              style: { background: "rgba(255,184,0,0.15)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-xl flex items-center justify-center mb-3",
                style: {
                  background: "rgba(255,184,0,0.15)",
                  border: "1px solid rgba(255,184,0,0.3)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4", style: { color: "#FFB800" } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-display font-bold text-base mb-1",
                style: { color: "#f8f8f8" },
                children: "Get Marketing Insights"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 text-xs leading-relaxed mb-4", children: "Weekly strategies, growth hacks, and campaign breakdowns — straight to your inbox." }),
            subscribed ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex items-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold",
                style: {
                  background: "rgba(0,200,83,0.1)",
                  border: "1px solid rgba(0,200,83,0.3)",
                  color: "#00C853"
                },
                "data-ocid": "blog.newsletter_success_state",
                children: "✓ You're on the list!"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: onSubscribe, className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  placeholder: "your@email.com",
                  value: email,
                  required: true,
                  onChange: (e) => setEmail(e.target.value),
                  className: "w-full rounded-xl px-3 py-2.5 text-sm outline-none transition-smooth",
                  style: {
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#f8f8f8"
                  },
                  "data-ocid": "blog.newsletter_email_input"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  className: "w-full py-2.5 rounded-xl text-sm font-bold transition-smooth",
                  style: {
                    background: "linear-gradient(135deg, #FFB800, #FF8C00)",
                    color: "#0a0a0a"
                  },
                  "data-ocid": "blog.newsletter_submit_button",
                  children: "Subscribe Free →"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
function Blog() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [email, setEmail] = reactExports.useState("");
  const [subscribed, setSubscribed] = reactExports.useState(false);
  const [posts, setPosts] = reactExports.useState(SAMPLE_POSTS);
  const categoryBarRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const stored = localStorage.getItem("bh_blog_posts");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const published = parsed.filter((p) => p.status === "published");
        if (published.length > 0) setPosts(published.map(backendToDisplay));
      } catch {
      }
    }
  }, []);
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const filtered = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);
  const gridPosts = activeCategory === "All" ? posts.filter((p) => p.id !== (featured == null ? void 0 : featured.id)) : filtered;
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };
  const availableCategories = Array.from(new Set(posts.map((p) => p.category)));
  const extraCategories = availableCategories.filter(
    (c) => !PRIMARY_CATEGORIES.includes(c)
  );
  const displayCategories = [...PRIMARY_CATEGORIES, ...extraCategories];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: { background: "#080808" },
      "data-ocid": "blog.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 pointer-events-none overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[120px]",
              style: { background: "rgba(0,102,255,0.07)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/3 right-1/4 w-[400px] h-[300px] rounded-full blur-[100px]",
              style: { background: "rgba(155,48,255,0.05)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 left-1/2 w-[500px] h-[300px] rounded-full blur-[100px]",
              style: { background: "rgba(255,184,0,0.04)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dot-pattern opacity-15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", "data-ocid": "blog.hero_section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h1",
              {
                className: "font-display font-black text-3xl sm:text-4xl lg:text-5xl mb-2 leading-tight",
                style: { color: "#f8f8f8" },
                children: [
                  "Marketing",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: "linear-gradient(135deg, #0066FF, #9B30FF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      },
                      children: "Insights"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 text-sm sm:text-base", children: "Strategies, playbooks, and campaign breakdowns from BrandHype's expert team." })
          ] }),
          featured && /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedHero, { post: featured }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "sticky top-16 z-10 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 mb-6",
              style: {
                background: "rgba(8,8,8,0.9)",
                backdropFilter: "blur(16px)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  ref: categoryBarRef,
                  className: "flex gap-2 overflow-x-auto pb-1",
                  style: { scrollbarWidth: "none", msOverflowStyle: "none" },
                  "data-ocid": "blog.category_filters",
                  children: displayCategories.map((cat) => {
                    const cfg = getCatConfig(cat);
                    const isActive = activeCategory === cat;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setActiveCategory(cat),
                        className: "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                        style: isActive ? {
                          background: "linear-gradient(135deg, #0066FF, #9B30FF)",
                          color: "#fff",
                          boxShadow: "0 0 14px rgba(0,102,255,0.35)"
                        } : {
                          background: "rgba(255,255,255,0.05)",
                          color: cat === "All" ? "rgba(255,255,255,0.55)" : cfg.color,
                          border: `1px solid ${cat === "All" ? "rgba(255,255,255,0.1)" : cfg.border}`
                        },
                        "data-ocid": `blog.filter_${cat.toLowerCase().replace(/\s+/g, "_")}_tab`,
                        children: cat
                      },
                      cat
                    );
                  })
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "font-display font-black text-xl mb-6",
                  style: {
                    background: "linear-gradient(135deg, #0066FF, #9B30FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  },
                  children: activeCategory === "All" ? "Latest Articles" : `${activeCategory} Articles`
                }
              ),
              gridPosts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "py-16 text-center rounded-2xl border border-dashed border-white/10",
                  "data-ocid": "blog.articles_empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-white/40", children: "No articles in this category yet." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setActiveCategory("All"),
                        className: "mt-3 text-sm text-[#0066FF] underline underline-offset-2",
                        children: "View all articles"
                      }
                    )
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
                  "data-ocid": "blog.articles_list",
                  children: gridPosts.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleCard, { post, index: i }, post.id))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Sidebar,
              {
                posts,
                email,
                setEmail,
                subscribed,
                onSubscribe: handleSubscribe
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const Blog$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SAMPLE_POSTS,
  backendToDisplay,
  default: Blog,
  navigateTo,
  toSlug
}, Symbol.toStringTag, { value: "Module" }));
export {
  Blog$1 as B,
  Calendar as C,
  SAMPLE_POSTS as S,
  Clock as a,
  navigateTo as n,
  toSlug as t
};
