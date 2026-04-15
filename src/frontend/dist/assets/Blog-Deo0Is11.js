import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, M as Mail } from "./index-B9jF2Sce.js";
import { U as User } from "./user-De1bDB_I.js";
import { A as ArrowRight } from "./arrow-right-qkPxUTk-.js";
import { T as TrendingUp } from "./trending-up-DkeeC68R.js";
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
  "Social Media": {
    color: "#00C853",
    bg: "rgba(0,200,83,0.12)",
    border: "rgba(0,200,83,0.35)",
    gradient: "from-[#00C853]/60 to-[#009940]/80"
  },
  SEO: {
    color: "#00D4FF",
    bg: "rgba(0,212,255,0.12)",
    border: "rgba(0,212,255,0.35)",
    gradient: "from-[#00D4FF]/60 to-[#00A8CC]/80"
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
    author: "Aryan Mehta",
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
    content: "Influencer marketing has evolved far beyond brand deals and unboxing videos. The brands winning in 2025 are building creator ecosystems — and the ROI data is impossible to ignore.\n\n**The Framework We Use**\n\nStep 1 — Audience Alignment Scoring: We don't just look at follower counts. We analyze audience overlap, engagement rate authenticity (weeding out fake followers), content-niche fit, and past brand performance metrics.\n\nStep 2 — Campaign Architecture: Micro-influencers (10k–100k) drive conversion. Macro-influencers drive awareness. We stack both layers strategically, allocating 60% of budget to micro and 40% to macro for maximum funnel coverage.\n\nStep 3 — Brief + Creative Freedom Balance: Over-scripted content kills engagement. We provide clear brand guidelines, key messages, and hard stops — then let creators bring their authentic voice. This hybrid approach increases engagement 3x versus fully scripted content.\n\nStep 4 — Tracking + Attribution: Every creator gets a unique UTM link and discount code. We track last-touch, first-touch, and assisted conversions to get a full picture of actual ROI.\n\n**Results from a recent D2C campaign:**\n- 48 creators activated across 3 tiers\n- 2.8M total reach in 30 days\n- 4.2% average engagement rate\n- ₹8.70 ROAS (for every ₹1 spent)",
    author: "Priya Sharma",
    tags: ["Influencer", "D2C", "ROI"],
    readTime: "9 min read",
    date: "Apr 5, 2025",
    category: "Influencer"
  },
  {
    id: 3,
    title: "Performance Marketing Secrets: From Clicks to Conversions",
    excerpt: "Clicks are cheap. Conversions are everything. Our performance team reveals the exact funnel architecture, ad creative formulas, and attribution models that turned ₹1 into ₹8 in tracked revenue.",
    content: "Performance marketing lives and dies by one number: ROAS. Here's the exact playbook our team uses to consistently hit 6–10x returns for D2C and SaaS clients.\n\n**The Funnel Architecture**\n\nTop of Funnel (Awareness): Short-form video ads (6–15 seconds) focused on a single problem statement. No selling. Pure pattern interrupt. Target: cold audiences via interest and lookalike stacking.\n\nMiddle of Funnel (Consideration): Retargeting with social proof — UGC, review compilations, founder story content. Goal: build trust with warm audiences who've visited your site or engaged with TOFU ads.\n\nBottom of Funnel (Conversion): Hard offer ads. Limited-time discount, free trial, free shipping. Single CTA. Urgency-driven copy. Target: cart abandoners, past visitors, high-intent segments.\n\n**Creative Formula That Works**\nHook (0–3 seconds) → Problem Agitation (3–8 seconds) → Solution Reveal (8–15 seconds) → Social Proof Flash (15–20 seconds) → CTA (final frame)\n\n**Attribution Model**\nWe use a 1-day click / 1-day view attribution window for TOFU, and 7-day click for retargeting. Triple-validated against GA4 and Shopify revenue data to eliminate platform inflation.\n\n**Benchmark Results (Last 90 days across portfolio):**\n- Average ROAS: 7.4x\n- Average CPL: ₹142\n- Average CTR (cold): 2.3%\n- Average conversion rate: 3.8%",
    author: "Rahul Desai",
    tags: ["Performance", "PPC", "Conversions"],
    readTime: "11 min read",
    date: "Mar 28, 2025",
    category: "Performance"
  },
  {
    id: 4,
    title: "Brand Identity in the Digital Age: Beyond the Logo",
    excerpt: "Great branding is more than a color palette. It's the entire sensory experience your audience has with your brand — learn how cohesive brand identity becomes your most powerful growth lever.",
    content: "Most startups think branding is a logo and a color palette. The brands that dominate markets understand branding is the sum of every touchpoint — visual, verbal, experiential, and emotional.\n\n**The 5 Pillars of Digital-First Brand Identity**\n\n1. Visual System — Logo, color palette, typography, iconography, motion design. Everything must be consistent and scalable from a social media avatar to a 4K billboard.\n\n2. Verbal Identity — Your brand voice, tone guidelines, messaging hierarchy, and taglines. How your brand sounds is as important as how it looks.\n\n3. Content Identity — The specific format, cadence, and style of content you produce. Brands like Zomato and Swiggy have content identities so strong that followers can identify a post without seeing the logo.\n\n4. Experience Design — The UX of your website, app, packaging, and in-store experience. Every friction point is a brand failure.\n\n5. Community Identity — The kind of people who publicly associate with your brand. Your community becomes your most powerful brand asset.\n\n**The BrandHype Brand Audit Process**\nBefore designing anything, we conduct a 72-point brand audit covering competitive positioning, audience perception, and visual/verbal consistency. This is what separates strategic branding from aesthetic exercises.",
    author: "Neha Kapoor",
    tags: ["Branding", "Strategy", "Identity"],
    readTime: "6 min read",
    date: "Mar 20, 2025",
    category: "Branding"
  },
  {
    id: 5,
    title: "SEO in 2025: How to Dominate Search with AI-Assisted Content",
    excerpt: "Google's algorithm updates have fundamentally changed what it takes to rank. Discover our hybrid approach combining AI-driven content planning with expert human storytelling — ranking 400+ keywords in 90 days.",
    content: "SEO in 2025 is not about gaming algorithms. It's about genuinely being the best answer to a searcher's query. Here's how BrandHype builds content machines that rank and convert.\n\n**The AI + Human Hybrid Model**\n\nStep 1 — Keyword Clustering with AI: We use semantic clustering to group 1,000+ keywords into topic pillars. AI maps search intent and competition gaps in minutes — work that used to take weeks.\n\nStep 2 — Content Briefs Built on SERPs: Every piece of content starts with a detailed brief built from analyzing the top 10 ranking pages: word count, headers, schema markup, missing angles, semantic keywords.\n\nStep 3 — Human Expert Writing: AI drafts are fact-checked and rewritten by subject matter experts. Google E-E-A-T signals require real expertise and experience — no amount of AI-polishing replaces this.\n\nStep 4 — Technical SEO Foundation: Core Web Vitals optimization, schema markup, internal linking structure, and crawl budget management. Content without technical SEO is like building on sand.\n\nStep 5 — Link Velocity + Authority Building: Targeted outreach to relevant publications, brand mention reclamation, and digital PR campaigns that earn links naturally.\n\n**90-Day Results from a recent client campaign:**\n- 412 keywords ranked (0 to position 1–10)\n- Organic traffic: +284%\n- Domain Rating: 22 → 41\n- Organic revenue contribution: 38% of total",
    author: "Vikram Singh",
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
    author: "Aryan Mehta",
    tags: ["Growth", "Strategy", "Scale"],
    readTime: "12 min read",
    date: "Mar 5, 2025",
    category: "Growth"
  },
  {
    id: 7,
    title: "Social Media Mastery: Building Communities That Convert",
    excerpt: "Social media isn't just about vanity metrics anymore. Learn how BrandHype builds engaged communities through storytelling frameworks, engagement loops, and platform-native content strategies.",
    content: "The brands winning on social media in 2025 are not just broadcasting content — they're building communities. The difference between followers and community is the difference between an audience and an asset.\n\n**The Community-First Content Framework**\n\nPillar 1 — Educational Content (40%): Teach your audience something useful and specific to your niche. This builds authority and generates saves/shares — the highest-value engagement signals.\n\nPillar 2 — Entertaining Content (30%): Trend-native, format-native content that fits the platform. For Instagram: Reels. For LinkedIn: Story-driven long-form. For Twitter/X: Strong opinions.\n\nPillar 3 — Social Proof Content (20%): Customer stories, results, UGC reposts, before/after transformations. This builds trust with lurkers who are considering buying.\n\nPillar 4 — Direct Offer Content (10%): Clear, unambiguous sales content. When your other pillars are strong, your audience tolerates and responds to direct selling.\n\n**The Engagement Loop**\nCreate → Respond to every comment for the first 60 minutes → Repost top community content → Create content based on community questions → Repeat.\n\n**Metrics That Actually Matter:**\n- Save rate (benchmark: >3% of reach)\n- DM-to-sale conversion rate\n- Comment sentiment ratio\n- Follower-to-website conversion rate",
    author: "Priya Sharma",
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
    author: "Neha Kapoor",
    tags: ["Branding", "Strategy", "Leadership"],
    readTime: "10 min read",
    date: "Feb 20, 2025",
    category: "Strategy"
  }
];
const CATEGORIES = [
  "All",
  "Strategy",
  "Branding",
  "Performance",
  "Influencer",
  "Social Media",
  "SEO",
  "Growth",
  "AI Marketing"
];
function backendToDisplay(post) {
  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt || post.content.slice(0, 200),
    content: post.content,
    author: post.author || "BrandHype Team",
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white leading-tight mb-3 max-w-3xl", children: post.title }),
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
  const availableCategories = [
    "All",
    ...Array.from(new Set(posts.map((p) => p.category)))
  ];
  const displayCategories = CATEGORIES.filter(
    (c) => c === "All" || availableCategories.includes(c)
  );
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
