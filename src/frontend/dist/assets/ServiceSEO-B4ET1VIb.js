import { r as reactExports, j as jsxRuntimeExports, N as Navbar, F as Footer } from "./index-Bg5P4_Z-.js";
function navigateTo(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("routechange"));
}
const SERVICES = [
  {
    icon: "🔍",
    title: "Technical SEO Audit & Fixes",
    desc: "We start with a full crawl of your website — identifying indexing issues, speed problems, broken links, mobile usability gaps, and Core Web Vitals failures. Every fix is prioritized by its impact on your rankings.",
    accent: "blue"
  },
  {
    icon: "🗺️",
    title: "India-First Keyword Research",
    desc: "We don't just use global keyword tools. We map exactly how your target customers in India search — regional language intent, Hindi-English mix, city-specific queries, and industry-specific terms that your competitors are missing.",
    accent: "purple"
  },
  {
    icon: "📝",
    title: "On-Page SEO Optimization",
    desc: "Every page on your website is an opportunity to rank. We optimize title tags, meta descriptions, H1–H3 structure, internal linking, content depth, and schema markup — for every key page, not just your homepage.",
    accent: "blue"
  },
  {
    icon: "✍️",
    title: "Content Strategy & Execution",
    desc: "We build content that ranks and converts. Long-form blog posts, service page copy, landing pages, and pillar content — all built around what your ideal customer in India is searching for at each stage of their journey.",
    accent: "gold"
  },
  {
    icon: "🔗",
    title: "Link Building — Indian & Global",
    desc: "We secure backlinks from credible Indian sources — publications like YourStory, Inc42, and industry directories — alongside global authority sites. Every link we build is white-hat and relevant to your niche.",
    accent: "purple"
  },
  {
    icon: "📍",
    title: "Local SEO (Mumbai / India)",
    desc: "Rank for 'digital marketing agency near me' and city-specific searches. We set up and optimize your Google Business Profile, build local citations, and ensure NAP consistency across all platforms.",
    accent: "gold"
  }
];
const PRICING = [
  {
    tier: "Starter",
    tagline: "For startups & small brands",
    details: "Technical audit + 5 pages + 4 blogs/mo",
    accent: "blue"
  },
  {
    tier: "Growth",
    tagline: "For scaling brands",
    details: "Full on-page + content + link building",
    accent: "purple",
    featured: true
  },
  {
    tier: "Enterprise",
    tagline: "For high-competition industries",
    details: "Custom strategy + dedicated team",
    accent: "gold"
  }
];
const FAQS = [
  {
    q: "How long does SEO take to show results in India?",
    a: "For long-tail and medium-competition keywords in India, you'll typically see movement in 4–8 weeks with proper execution. Ranking in top 3 for competitive terms like 'digital marketing agency India' takes 4–6 months. We give you a realistic timeline after auditing your current state."
  },
  {
    q: "Do you guarantee rankings?",
    a: "No ethical SEO agency can guarantee specific rankings — Google's algorithm is not owned by anyone. What we guarantee is transparent execution, measurable progress every month, and strategies that follow Google's guidelines so your rankings last."
  },
  {
    q: "Is SEO worth it for Indian brands vs. just running ads?",
    a: "Ads stop the moment you pause spend. SEO compounds. A blog post or service page that ranks today will keep driving traffic in 12 months without additional spend. The highest-ROI brands in India run both — ads for immediate conversions, SEO for long-term organic dominance."
  }
];
const ACCENT = {
  blue: {
    color: "#0066ff",
    bg: "rgba(0,102,255,0.12)",
    border: "rgba(0,102,255,0.35)",
    glow: "rgba(0,102,255,0.3)"
  },
  purple: {
    color: "#9b30ff",
    bg: "rgba(155,48,255,0.12)",
    border: "rgba(155,48,255,0.35)",
    glow: "rgba(155,48,255,0.3)"
  },
  gold: {
    color: "#ffb800",
    bg: "rgba(255,184,0,0.12)",
    border: "rgba(255,184,0,0.35)",
    glow: "rgba(255,184,0,0.3)"
  }
};
function ServiceCard({ icon, title, desc, accent }) {
  const [hov, setHov] = reactExports.useState(false);
  const a = ACCENT[accent];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl p-6 cursor-default transition-all duration-300",
      style: {
        background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        border: hov ? `1px solid ${a.border}` : "1px solid rgba(255,255,255,0.1)",
        boxShadow: hov ? `0 0 30px ${a.glow}, 0 20px 40px rgba(0,0,0,0.4)` : "0 4px 24px rgba(0,0,0,0.3)",
        transform: hov ? "translateY(-6px)" : "translateY(0)"
      },
      onMouseEnter: () => setHov(true),
      onMouseLeave: () => setHov(false),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4",
            style: { background: a.bg, border: `1px solid ${a.border}` },
            children: icon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "font-bold text-base mb-2",
            style: {
              fontFamily: "'Syne', sans-serif",
              color: hov ? a.color : "#f8f8f8"
            },
            children: title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-sm leading-relaxed",
            style: { color: "rgba(248,248,248,0.55)" },
            children: desc
          }
        )
      ]
    }
  );
}
function FAQItem({ q, a }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-white/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "w-full flex items-center justify-between py-5 text-left gap-4",
        onClick: () => setOpen(!open),
        "data-ocid": "seo.faq.toggle",
        style: { touchAction: "manipulation" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-semibold text-base text-white/90",
              style: { fontFamily: "'Syne', sans-serif" },
              children: q
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg transition-transform duration-300",
              style: {
                background: "rgba(0,102,255,0.15)",
                color: "#0066ff",
                transform: open ? "rotate(45deg)" : "rotate(0deg)"
              },
              children: "+"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "pb-5 text-sm leading-relaxed",
            style: {
              color: "rgba(248,248,248,0.6)",
              fontFamily: "'Inter', sans-serif"
            },
            children: a
          }
        )
      }
    )
  ] });
}
function ServiceSEO() {
  reactExports.useEffect(() => {
    document.title = "SEO Services in India | BrandHype Solutions Mumbai";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const goContact = () => {
    navigateTo("/");
    setTimeout(
      () => {
        var _a;
        return (_a = document.getElementById("contact")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
      },
      120
    );
  };
  const goResults = () => {
    navigateTo("/");
    setTimeout(
      () => {
        var _a;
        return (_a = document.getElementById("case-studies")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
      },
      120
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen overflow-x-hidden",
      style: { background: "#0a0a0a", color: "#f8f8f8" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden",
            style: {
              background: "linear-gradient(180deg, #0a0a0a 0%, #080a14 60%, #0a0a0a 100%)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15",
                    style: {
                      background: "radial-gradient(circle, #0066ff, transparent)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute bottom-10 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10",
                    style: {
                      background: "radial-gradient(circle, #9b30ff, transparent)"
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => navigateTo("/"),
                    className: "inline-flex items-center gap-2 mb-6 text-sm transition-smooth",
                    style: {
                      color: "rgba(248,248,248,0.45)",
                      fontFamily: "'Inter', sans-serif"
                    },
                    "data-ocid": "seo.back_button",
                    children: "← Back to Home"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-block text-xs font-semibold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full",
                    style: {
                      color: "#0066ff",
                      background: "rgba(0,102,255,0.12)",
                      border: "1px solid rgba(0,102,255,0.3)",
                      fontFamily: "'Inter', sans-serif"
                    },
                    children: "SEO Services India"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "section-heading text-white mb-6", children: [
                  "SEO Services in India That",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "Actually Rank" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8",
                    style: {
                      color: "rgba(248,248,248,0.6)",
                      fontFamily: "'Inter', sans-serif"
                    },
                    children: "Stop guessing why you're on page 3. We build SEO strategies for Indian brands that compound — more traffic, more leads, more revenue — month after month."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm sm:text-base mb-10 max-w-2xl mx-auto",
                    style: {
                      color: "rgba(248,248,248,0.5)",
                      fontFamily: "'Inter', sans-serif"
                    },
                    children: "BrandHype Solutions is a results-first SEO agency based in Mumbai, India. We've helped D2C brands, SaaS companies, and consumer businesses rank for the keywords their customers actually use — not just the ones that look impressive in a report."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: goContact,
                    "data-ocid": "seo.hero_cta_button",
                    className: "inline-flex items-center gap-2 min-h-[52px] px-8 py-3.5 rounded-full font-semibold text-base",
                    style: {
                      background: "linear-gradient(135deg, #0066ff, #9b30ff)",
                      color: "#fff",
                      fontFamily: "'Syne', sans-serif",
                      boxShadow: "0 0 30px rgba(0,102,255,0.4), 0 0 60px rgba(155,48,255,0.2)",
                      transition: "box-shadow 0.3s ease, transform 0.3s ease",
                      touchAction: "manipulation"
                    },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 0 40px rgba(0,102,255,0.6), 0 0 80px rgba(155,48,255,0.35)";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow = "0 0 30px rgba(0,102,255,0.4), 0 0 60px rgba(155,48,255,0.2)";
                    },
                    children: "Get Your Free SEO Audit →"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "section-padding px-4 sm:px-6 lg:px-8",
            style: {
              background: "linear-gradient(180deg, #0a0a0a 0%, #0d0a1a 100%)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading text-white mb-3 text-center", children: [
                "What's Holding Your",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "Website Back?" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-center mb-8",
                  style: {
                    color: "rgba(248,248,248,0.55)",
                    fontFamily: "'Inter', sans-serif"
                  },
                  children: "Most Indian brand websites we audit have the same 5 problems:"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-2xl p-6 sm:p-8 space-y-4",
                  style: {
                    background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                    border: "1px solid rgba(255,255,255,0.1)"
                  },
                  children: [
                    [
                      {
                        id: "kw",
                        text: "No India-specific keyword strategy (targeting generic global terms nobody searches here)"
                      },
                      {
                        id: "sp",
                        text: "Service pages that don't answer what potential customers in India actually type"
                      },
                      {
                        id: "mobile",
                        text: "Slow page speed on mobile — where 80%+ of Indian web traffic comes from"
                      },
                      {
                        id: "local",
                        text: "No local SEO setup — invisible on Google Maps and 'near me' searches"
                      },
                      {
                        id: "links",
                        text: "Zero backlinks from credible Indian publications and directories"
                      }
                    ].map((prob, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5",
                          style: {
                            background: "rgba(0,102,255,0.2)",
                            color: "#0066ff",
                            border: "1px solid rgba(0,102,255,0.4)"
                          },
                          children: i + 1
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-sm leading-relaxed",
                          style: {
                            color: "rgba(248,248,248,0.7)",
                            fontFamily: "'Inter', sans-serif"
                          },
                          children: prob.text
                        }
                      )
                    ] }, prob.id)),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-semibold text-base pt-2",
                        style: { color: "#0066ff", fontFamily: "'Syne', sans-serif" },
                        children: "Sound familiar? That's exactly what we fix."
                      }
                    )
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading text-white text-center mb-3", children: [
            "Our ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "SEO Services" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-center mb-10",
              style: {
                color: "rgba(248,248,248,0.55)",
                fontFamily: "'Inter', sans-serif"
              },
              children: "End-to-end SEO built for the Indian market."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { ...s }, s.title)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "section-padding px-4 sm:px-6 lg:px-8",
            style: {
              background: "linear-gradient(180deg, #0a0a0a 0%, #0d0a1a 100%)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading text-white text-center mb-8", children: [
                "Case Study ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-gold", children: "Highlight" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-2xl p-6 sm:p-8",
                  style: {
                    background: "linear-gradient(135deg, rgba(255,184,0,0.07), rgba(0,102,255,0.07))",
                    border: "1px solid rgba(255,184,0,0.25)",
                    boxShadow: "0 0 40px rgba(255,184,0,0.08)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📈" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-sm sm:text-base leading-relaxed",
                          style: {
                            color: "rgba(248,248,248,0.75)",
                            fontFamily: "'Inter', sans-serif"
                          },
                          children: "A Mumbai-based D2C skincare brand came to us ranking on page 4 for their primary keyword. Within 14 weeks, they were ranking #2 in India, driving 3,400 new monthly organic visitors and reducing paid acquisition spend by 40%."
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: goResults,
                        "data-ocid": "seo.case_study_link",
                        className: "font-semibold text-sm transition-smooth",
                        style: { color: "#ffb800", fontFamily: "'Syne', sans-serif" },
                        onMouseEnter: (e) => {
                          e.currentTarget.style.textDecoration = "underline";
                        },
                        onMouseLeave: (e) => {
                          e.currentTarget.style.textDecoration = "none";
                        },
                        children: "See Full Results →"
                      }
                    )
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading text-white text-center mb-3", children: [
            "SEO Pricing",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "— India" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-center mb-10",
              style: {
                color: "rgba(248,248,248,0.55)",
                fontFamily: "'Inter', sans-serif"
              },
              children: "Three engagement models based on your stage and goals."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8", children: PRICING.map((p) => {
            const a = ACCENT[p.accent];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl p-6 flex flex-col gap-3 text-center transition-all duration-300",
                style: {
                  background: p.featured ? `linear-gradient(135deg, ${a.bg}, rgba(255,255,255,0.03))` : "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                  border: `1px solid ${a.border}`,
                  boxShadow: p.featured ? `0 0 30px ${a.glow}` : "none"
                },
                children: [
                  p.featured && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-bold tracking-widest uppercase mb-1",
                      style: { color: a.color },
                      children: "Most Popular"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "text-2xl font-bold",
                      style: { fontFamily: "'Syne', sans-serif", color: a.color },
                      children: p.tier
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm font-medium",
                      style: { color: "rgba(248,248,248,0.7)" },
                      children: p.tagline
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs",
                      style: { color: "rgba(248,248,248,0.45)" },
                      children: p.details
                    }
                  )
                ]
              },
              p.tier
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-center text-sm mb-6",
              style: {
                color: "rgba(248,248,248,0.45)",
                fontFamily: "'Inter', sans-serif"
              },
              children: "Custom pricing based on industry, competition, and goals. Book a free call to get a quote."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: goContact,
              "data-ocid": "seo.pricing_cta_button",
              className: "inline-flex items-center gap-2 min-h-[52px] px-8 py-3.5 rounded-full font-semibold text-base",
              style: {
                background: "linear-gradient(135deg, #0066ff, #9b30ff)",
                color: "#fff",
                fontFamily: "'Syne', sans-serif",
                boxShadow: "0 0 30px rgba(0,102,255,0.4)",
                transition: "box-shadow 0.3s, transform 0.3s",
                touchAction: "manipulation"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.transform = "";
              },
              children: "Get Your Free SEO Audit →"
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "section-padding px-4 sm:px-6 lg:px-8",
            style: {
              background: "linear-gradient(180deg, #0a0a0a 0%, #0d0a1a 100%)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading text-white text-center mb-10", children: [
                "SEO ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "FAQ" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: FAQS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { q: f.q, a: f.a }, f.q)) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { onAdminClick: () => {
        } })
      ]
    }
  );
}
export {
  ServiceSEO as default
};
