import { c as createLucideIcon, j as jsxRuntimeExports } from "./index-CN-t0dhj.js";
import { m as motion } from "./proxy-BACBiGT2.js";
import { T as TrendingUp } from "./trending-up-D-4X7gN-.js";
import { A as ArrowRight } from "./arrow-right-B326P2nd.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
];
const ChartNoAxesColumn = createLucideIcon("chart-no-axes-column", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const AUDIT_ITEMS = [
  "Profile & Bio optimization score",
  "Content quality & frequency analysis",
  "Engagement rate benchmarking",
  "Top competitor gap analysis",
  "10 custom content ideas",
  "Hashtag strategy report"
];
const GROWTH_ITEMS = [
  "30-day marketing roadmap",
  "Platform priority recommendation",
  "Budget allocation strategy",
  "Content calendar framework",
  "3 quick-win growth tactics",
  "Free 30-min strategy call"
];
const TRUST_BRANDS = [
  { name: "Lenskart", initial: "L", color: "oklch(0.55 0.25 256)" },
  { name: "Snitch", initial: "S", color: "oklch(0.6 0.24 296)" },
  { name: "Swiggy", initial: "Sw", color: "oklch(0.65 0.2 65)" },
  { name: "Arata", initial: "A", color: "oklch(0.55 0.25 256)" }
];
const WA_BASE = "https://wa.me/917857905819?text=";
function OfferCard({
  icon: Icon,
  heading,
  description,
  items,
  ctaLabel,
  ctaHref,
  accentBorderClass,
  accentColor,
  gradientFrom,
  gradientTo,
  glowClass,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1]
      },
      className: "flex-1 min-w-0",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `glass-card h-full flex flex-col gap-6 p-7 lg:p-8 relative overflow-hidden ${accentBorderClass}`,
          style: {
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`
          },
          "data-ocid": `lead_magnet.card.${index + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-black tracking-widest",
                style: {
                  background: accentColor,
                  color: "#0a0a0a"
                },
                children: "FREE"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0",
                style: { background: `${accentColor}1a` },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7", color: accentColor })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-white pr-16", children: heading }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subheading text-sm leading-relaxed", children: description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2.5 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs font-bold tracking-widest uppercase",
                  style: { color: accentColor },
                  children: "What you get:"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-center gap-2.5 text-sm text-white/80",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheck,
                      {
                        className: "w-4 h-4 flex-shrink-0",
                        style: { color: accentColor }
                      }
                    ),
                    item
                  ]
                },
                item
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: ctaHref,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: `group inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full font-semibold text-sm text-[#0a0a0a] transition-smooth ${glowClass}`,
                  style: {
                    background: accentColor
                  },
                  "data-ocid": `lead_magnet.cta_button.${index + 1}`,
                  children: [
                    ctaLabel,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-white/40", children: "No commitment. No credit card. Just growth." })
            ] })
          ]
        }
      )
    }
  );
}
function LeadMagnet() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "lead-magnet",
      className: "section-padding relative overflow-hidden",
      "data-ocid": "lead_magnet.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15",
              style: { background: "oklch(0.55 0.25 256 / 0.5)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15",
              style: { background: "oklch(0.65 0.2 65 / 0.5)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid-pattern absolute inset-0 opacity-20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "text-center mb-8 md:mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    initial: { opacity: 0, scale: 0.9 },
                    whileInView: { opacity: 1, scale: 1 },
                    viewport: { once: true },
                    transition: { duration: 0.5, delay: 0.1 },
                    className: "inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6",
                    style: {
                      background: "oklch(0.65 0.2 65 / 0.12)",
                      color: "oklch(0.75 0.2 65)",
                      border: "1px solid oklch(0.65 0.2 65 / 0.25)"
                    },
                    children: "Free Offer — No Catch"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading text-white mb-4", children: [
                  "Get Your",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-gold", children: "Free Marketing Blueprint" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subheading max-w-2xl mx-auto", children: "No fluff. No sales pitch. Just a data-backed plan to grow your brand — for free." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-5 md:gap-8 mb-8 md:mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              OfferCard,
              {
                icon: ChartNoAxesColumn,
                heading: "Free Instagram Audit",
                description: "We'll analyze your Instagram account — content strategy, engagement rate, audience quality, hashtag performance, and competitor benchmarking. You'll get a personalized PDF report with actionable fixes.",
                items: AUDIT_ITEMS,
                ctaLabel: "Claim Your Free Audit →",
                ctaHref: `${WA_BASE}${encodeURIComponent("Hi, I'd like to claim my Free Instagram Audit!")}`,
                accentBorderClass: "border-glow",
                accentColor: "oklch(0.55 0.25 256)",
                gradientFrom: "oklch(0.55 0.25 256 / 0.1)",
                gradientTo: "oklch(0.55 0.25 256 / 0.02)",
                tagBg: "bg-primary/10 text-primary",
                glowClass: "glow-blue",
                index: 0
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              OfferCard,
              {
                icon: TrendingUp,
                heading: "Free Growth Plan",
                description: "Tell us about your brand and we'll craft a 30-day custom growth roadmap — covering paid ads, organic content, influencer strategy, and SEO priorities tailored specifically for your niche and budget.",
                items: GROWTH_ITEMS,
                ctaLabel: "Get Your Free Plan →",
                ctaHref: `${WA_BASE}${encodeURIComponent("Hi, I'd like to get my Free Growth Plan!")}`,
                accentBorderClass: "border-glow-gold",
                accentColor: "oklch(0.65 0.2 65)",
                gradientFrom: "oklch(0.65 0.2 65 / 0.1)",
                gradientTo: "oklch(0.65 0.2 65 / 0.02)",
                tagBg: "bg-accent/10 text-accent",
                glowClass: "glow-gold",
                index: 1
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.3 },
              className: "flex flex-col items-center gap-5",
              "data-ocid": "lead_magnet.trust_bar",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-white/50 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-[oklch(0.65_0.2_65)] text-[oklch(0.65_0.2_65)]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Join 100+ brands who've scaled with BrandHype" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-[oklch(0.65_0.2_65)] text-[oklch(0.65_0.2_65)]" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 flex-wrap justify-center", children: TRUST_BRANDS.map((brand) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 px-4 py-2 rounded-full glass-effect",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-[#0a0a0a] flex-shrink-0",
                          style: { background: brand.color },
                          children: brand.initial
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-white/70", children: brand.name })
                    ]
                  },
                  brand.name
                )) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  LeadMagnet as default
};
