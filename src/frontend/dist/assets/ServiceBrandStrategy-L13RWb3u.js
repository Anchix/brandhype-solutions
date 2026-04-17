import { r as reactExports, j as jsxRuntimeExports, N as Navbar, F as Footer } from "./index-CN-t0dhj.js";
function navigateTo(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("routechange"));
}
const WHO_FOR = [
  {
    id: "founders",
    text: "Founders building a new brand and want to do it right from day one"
  },
  {
    id: "established",
    text: "Established brands that have grown but feel their identity hasn't kept up"
  },
  {
    id: "entering",
    text: "Companies entering new Indian markets or verticals and need positioning clarity"
  },
  {
    id: "d2c",
    text: "D2C brands competing in crowded categories where differentiation is survival"
  },
  {
    id: "capital",
    text: "Businesses raising capital and need a compelling, consistent brand narrative"
  }
];
const SERVICES = [
  {
    icon: "🎯",
    title: "Brand Positioning & Differentiation",
    desc: "We audit your competitive landscape, your customer perceptions, and your internal brand assets — then craft a positioning strategy that makes you the obvious choice in your category. Not 'better than competitors,' but 'different in a way competitors can't copy easily.'",
    accent: "gold"
  },
  {
    icon: "🏗️",
    title: "Brand Architecture",
    desc: "If you have multiple products, services, or sub-brands, you need a clear system that organizes them without confusing your customers. We design brand architectures that scale as your business grows.",
    accent: "blue"
  },
  {
    icon: "🔬",
    title: "Target Audience Mapping",
    desc: "Deep customer personas built for the Indian market — income segments, digital behavior, cultural context, buying triggers, and barriers. The kind of audience clarity that makes every subsequent marketing decision faster and more confident.",
    accent: "purple"
  },
  {
    icon: "🗣️",
    title: "Brand Voice & Messaging Framework",
    desc: "Your brand voice is how you sound on every channel — website, ads, social, pitch decks, customer service. We define your tone, key messages, and a messaging hierarchy so every piece of communication feels like the same brand.",
    accent: "gold"
  },
  {
    icon: "🌏",
    title: "Market Entry Strategy (India)",
    desc: "For international brands entering India or Indian brands expanding to new states or cities — we build go-to-market plans that account for India's incredible diversity in language, culture, purchasing behavior, and competitive context.",
    accent: "blue"
  },
  {
    icon: "📋",
    title: "Brand Audit",
    desc: "A comprehensive review of your existing brand — visual identity, messaging, digital presence, customer perceptions, and competitive position. Delivered as a strategic report with prioritized recommendations and a roadmap.",
    accent: "purple"
  }
];
const TIMELINE = [
  {
    weeks: "Week 1–2",
    phase: "Discovery",
    detail: "Stakeholder interviews, customer research, competitive audit"
  },
  {
    weeks: "Week 3–4",
    phase: "Strategy Development",
    detail: "Positioning options, messaging frameworks, audience maps"
  },
  {
    weeks: "Week 5–6",
    phase: "Refinement",
    detail: "Working sessions, iteration, final strategy documentation"
  },
  {
    weeks: "Week 7+",
    phase: "Activation Support",
    detail: "Helping your team and other agencies execute against the strategy"
  }
];
const FAQS = [
  {
    q: "How is brand strategy different from branding or design?",
    a: "Branding and design are the execution. Brand strategy is the thinking that makes the execution effective. Strategy answers: Who are we for? What do we stand for? Why should anyone choose us? Design answers: What do we look like? How do we speak? You need both — but strategy comes first."
  },
  {
    q: "Do you also handle the implementation after the strategy?",
    a: "Yes. For clients who want it, we offer an integrated engagement where our performance marketing, SEO, and social media teams execute against the brand strategy we've built together. This ensures perfect alignment across every channel."
  },
  {
    q: "What kind of results can I expect from brand strategy work?",
    a: "Brand strategy is a foundational investment — the results show up across every other marketing activity you do. Clients typically see improvements in: ad click-through rates (clearer messaging), sales conversion rates (stronger positioning), and hiring quality (better employer brand). The full ROI compounds over 12–24 months."
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
        "data-ocid": "brand.faq.toggle",
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
                background: "rgba(255,184,0,0.15)",
                color: "#ffb800",
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
function ServiceBrandStrategy() {
  reactExports.useEffect(() => {
    document.title = "Brand Strategy Agency India | Premium Brand Positioning | BrandHype Solutions";
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
              background: "linear-gradient(180deg, #0a0a0a 0%, #0e0b08 60%, #0a0a0a 100%)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-20 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-12",
                    style: {
                      background: "radial-gradient(circle, #ffb800, transparent)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute bottom-10 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-10",
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
                    "data-ocid": "brand.back_button",
                    children: "← Back to Home"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2 mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full",
                    style: {
                      color: "#ffb800",
                      background: "rgba(255,184,0,0.12)",
                      border: "1px solid rgba(255,184,0,0.3)",
                      fontFamily: "'Inter', sans-serif"
                    },
                    children: "Premium · Retainer-Based · Limited Spots"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "section-heading text-white mb-6", children: [
                  "Brand Strategy Agency in India —",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-gold", children: "For Brands Ready to Own Their Category" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8",
                    style: {
                      color: "rgba(248,248,248,0.6)",
                      fontFamily: "'Inter', sans-serif"
                    },
                    children: "Positioning. Architecture. Market entry. We help ambitious Indian brands build the strategic foundation that makes every marketing rupee work harder."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "max-w-2xl mx-auto mb-10 rounded-2xl p-5",
                    style: {
                      background: "rgba(255,184,0,0.05)",
                      border: "1px solid rgba(255,184,0,0.2)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-sm leading-relaxed mb-3",
                          style: {
                            color: "rgba(248,248,248,0.65)",
                            fontFamily: "'Inter', sans-serif"
                          },
                          children: "Brand strategy is not a logo refresh. It's the blueprint that determines how your brand is perceived, who it speaks to, what it stands for, and why it wins. BrandHype Solutions works with founders, CMOs, and leadership teams on engagements that transform how a brand occupies space in the Indian market."
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-sm font-medium",
                          style: {
                            color: "rgba(255,184,0,0.8)",
                            fontFamily: "'Inter', sans-serif"
                          },
                          children: "This is a premium, retainer-based engagement. We work with a small number of brand strategy clients at a time to ensure depth of focus."
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: goContact,
                    "data-ocid": "brand.hero_cta_button",
                    className: "inline-flex items-center gap-2 min-h-[52px] px-8 py-3.5 rounded-full font-semibold text-base",
                    style: {
                      background: "linear-gradient(135deg, #ffb800, #ff7b00)",
                      color: "#0a0a0a",
                      fontFamily: "'Syne', sans-serif",
                      boxShadow: "0 0 30px rgba(255,184,0,0.4), 0 0 60px rgba(255,184,0,0.2)",
                      transition: "box-shadow 0.3s ease, transform 0.3s ease",
                      touchAction: "manipulation"
                    },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 0 40px rgba(255,184,0,0.6), 0 0 80px rgba(255,184,0,0.35)";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow = "0 0 30px rgba(255,184,0,0.4), 0 0 60px rgba(255,184,0,0.2)";
                    },
                    children: "Book a Discovery Call →"
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
              background: "linear-gradient(180deg, #0a0a0a 0%, #0e0b08 100%)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading text-white mb-8 text-center", children: [
                "Who This ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-gold", children: "Is For" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: WHO_FOR.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-4 rounded-xl p-4",
                  style: {
                    background: "rgba(255,184,0,0.05)",
                    border: "1px solid rgba(255,184,0,0.2)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5",
                        style: {
                          background: "rgba(255,184,0,0.2)",
                          color: "#ffb800",
                          border: "1px solid rgba(255,184,0,0.4)"
                        },
                        children: "◆"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm leading-relaxed",
                        style: {
                          color: "rgba(248,248,248,0.75)",
                          fontFamily: "'Inter', sans-serif"
                        },
                        children: item.text
                      }
                    )
                  ]
                },
                item.id
              )) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading text-white text-center mb-3", children: [
            "Our Brand Strategy",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-gold", children: "Services" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-center mb-10",
              style: {
                color: "rgba(248,248,248,0.55)",
                fontFamily: "'Inter', sans-serif"
              },
              children: "Strategic engagements built for brands that play to win."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { ...s }, s.title)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "section-padding px-4 sm:px-6 lg:px-8",
            style: {
              background: "linear-gradient(180deg, #0a0a0a 0%, #0e0b08 100%)"
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
                    background: "linear-gradient(135deg, rgba(255,184,0,0.08), rgba(155,48,255,0.06))",
                    border: "1px solid rgba(255,184,0,0.3)",
                    boxShadow: "0 0 40px rgba(255,184,0,0.1)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏆" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-sm sm:text-base leading-relaxed",
                          style: {
                            color: "rgba(248,248,248,0.75)",
                            fontFamily: "'Inter', sans-serif"
                          },
                          children: "A Series A SaaS startup was struggling to differentiate in a crowded market. After a 6-week brand strategy engagement, they had a clear positioning, a new messaging framework, and a go-to-market narrative that helped them close their next round and triple inbound demo requests."
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: goResults,
                        "data-ocid": "brand.case_study_link",
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading text-white text-center mb-10", children: [
            "How We ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-gold", children: "Engage" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute left-5 top-6 bottom-6 w-px",
                style: {
                  background: "linear-gradient(180deg, #ffb800, #9b30ff)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: TIMELINE.map((t, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative flex items-start gap-6 pl-14",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute left-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0",
                      style: {
                        background: "linear-gradient(135deg, rgba(255,184,0,0.2), rgba(155,48,255,0.2))",
                        border: "1px solid rgba(255,184,0,0.4)",
                        color: "#ffb800"
                      },
                      children: idx + 1
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex-1 rounded-2xl p-5",
                      style: {
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-xs font-bold tracking-widest uppercase",
                            style: {
                              color: "#ffb800",
                              fontFamily: "'Inter', sans-serif"
                            },
                            children: t.weeks
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "h3",
                          {
                            className: "font-bold text-base mt-1 mb-1",
                            style: {
                              fontFamily: "'Syne', sans-serif",
                              color: "#f8f8f8"
                            },
                            children: t.phase
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm",
                            style: {
                              color: "rgba(248,248,248,0.55)",
                              fontFamily: "'Inter', sans-serif"
                            },
                            children: t.detail
                          }
                        )
                      ]
                    }
                  )
                ]
              },
              t.weeks
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "mt-8 text-sm text-center",
              style: {
                color: "rgba(248,248,248,0.5)",
                fontFamily: "'Inter', sans-serif"
              },
              children: "Engagements are structured as retainers or project-based depending on scope. Pricing is shared after a 30-minute discovery call where we understand your specific needs."
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "section",
          {
            className: "section-padding px-4 sm:px-6 lg:px-8",
            style: {
              background: "linear-gradient(180deg, #0a0a0a 0%, #0e0b08 100%)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading text-white text-center mb-10", children: [
                "Brand Strategy ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-gold", children: "FAQ" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: FAQS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { q: f.q, a: f.a }, f.q)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: goContact,
                  "data-ocid": "brand.final_cta_button",
                  className: "inline-flex items-center gap-2 min-h-[52px] px-8 py-3.5 rounded-full font-semibold text-base",
                  style: {
                    background: "linear-gradient(135deg, #ffb800, #ff7b00)",
                    color: "#0a0a0a",
                    fontFamily: "'Syne', sans-serif",
                    boxShadow: "0 0 30px rgba(255,184,0,0.4)",
                    transition: "transform 0.3s",
                    touchAction: "manipulation"
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.transform = "";
                  },
                  children: "Book Your Discovery Call — Limited Spots Available →"
                }
              ) })
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
  ServiceBrandStrategy as default
};
