import { r as reactExports, j as jsxRuntimeExports, N as Navbar, F as Footer } from "./index-Bg5P4_Z-.js";
function navigateTo(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("routechange"));
}
const SERVICES = [
  {
    icon: "🏢",
    title: "LinkedIn Company Page Management",
    desc: "Full management of your LinkedIn company page — content strategy, post creation, banner design, follower growth, and engagement. We turn your company page from a digital brochure into an active lead-generating channel.",
    accent: "blue"
  },
  {
    icon: "👤",
    title: "Founder & Executive LinkedIn Strategy",
    desc: "In India, people buy from people. A founder with a strong LinkedIn presence generates more trust (and more inbound) than any company page. We build content strategies for founders and executives — ghostwriting, thought leadership positioning, and network growth.",
    accent: "purple"
  },
  {
    icon: "🤝",
    title: "LinkedIn Lead Generation",
    desc: "We design and execute LinkedIn outreach sequences to reach your ideal customers — by industry, role, company size, and geography across India. Connection requests, message sequences, and follow-up — all personalized and compliant with LinkedIn's policies.",
    accent: "blue"
  },
  {
    icon: "📢",
    title: "LinkedIn Ads",
    desc: "Sponsored Content, Lead Gen Forms, Message Ads, and Account-Based Marketing (ABM) on LinkedIn — targeting Indian companies by industry, revenue size, and decision-maker role. We run LinkedIn Ads campaigns with clear CPL targets and full funnel reporting.",
    accent: "gold"
  },
  {
    icon: "✍️",
    title: "LinkedIn Content Creation",
    desc: "Posts, carousels, documents, videos, and polls — we create LinkedIn content in formats that the algorithm rewards and that your audience actually engages with. Every post serves a purpose: awareness, credibility, or conversion.",
    accent: "purple"
  }
];
const FAQS = [
  {
    q: "How long before we see results from LinkedIn marketing?",
    a: "Organic LinkedIn growth is slower than other channels — expect 60–90 days before you see meaningful follower growth and inbound enquiries. LinkedIn Ads can show lead results within 2–4 weeks. We set realistic milestones from day one."
  },
  {
    q: "Do you manage the founder's personal LinkedIn or just the company page?",
    a: "Both. In fact, we recommend managing both together — the company page provides institutional credibility while the founder's personal presence builds trust and drives inbound. They work best when aligned."
  },
  {
    q: "Is LinkedIn worth it for B2C brands in India?",
    a: "For pure B2C (fashion, FMCG, consumer products), LinkedIn is usually not the primary channel — Instagram and YouTube will give you better reach. LinkedIn works best for B2B, SaaS, professional services, and high-ticket B2C (luxury, real estate, finance)."
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
        "data-ocid": "linkedin.faq.toggle",
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
function ServiceLinkedIn() {
  reactExports.useEffect(() => {
    document.title = "LinkedIn Marketing Agency India | B2B Lead Generation | BrandHype Solutions";
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
              background: "linear-gradient(180deg, #0a0a0a 0%, #080c14 60%, #0a0a0a 100%)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-12",
                    style: {
                      background: "radial-gradient(circle, #0066ff, transparent)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute bottom-10 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-10",
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
                    "data-ocid": "linkedin.back_button",
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
                    children: "LinkedIn Marketing India"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "section-heading text-white mb-6", children: [
                  "LinkedIn Marketing Services in India —",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "Turn Connections Into Clients" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8",
                    style: {
                      color: "rgba(248,248,248,0.6)",
                      fontFamily: "'Inter', sans-serif"
                    },
                    children: "Thought leadership, lead generation, and B2B brand building — for Indian brands that want to be taken seriously on the world's most powerful professional network."
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
                    children: "BrandHype Solutions helps Indian brands and founders build LinkedIn presence that generates real business outcomes — not just follower counts. Whether you're a SaaS company generating enterprise leads, a founder building personal authority, or a B2B brand trying to reach decision-makers across India, we build the LinkedIn engine that works for you."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: goContact,
                    "data-ocid": "linkedin.hero_cta_button",
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
                    children: "Get a Free LinkedIn Profile Audit →"
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading text-white mb-6 text-center", children: [
                "Why LinkedIn for",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "Indian Brands?" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-2xl p-6 sm:p-8",
                  style: {
                    background: "rgba(0,102,255,0.06)",
                    border: "1px solid rgba(0,102,255,0.2)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm sm:text-base leading-relaxed mb-4",
                        style: {
                          color: "rgba(248,248,248,0.75)",
                          fontFamily: "'Inter', sans-serif"
                        },
                        children: "India now has the world's 3rd largest LinkedIn user base — over 100 million professionals. Indian decision-makers research vendors, evaluate partners, and discover new tools on LinkedIn before they ever visit a website. If your brand isn't present and credible on LinkedIn, you're invisible to a huge segment of high-value buyers."
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4", children: [
                      { label: "100M+", sub: "Indian professionals" },
                      { label: "#3", sub: "World's largest user base" },
                      { label: "B2B", sub: "Primary decision-maker channel" }
                    ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex-1 min-w-[100px] text-center rounded-xl p-3",
                        style: {
                          background: "rgba(0,102,255,0.1)",
                          border: "1px solid rgba(0,102,255,0.25)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-xl font-bold",
                              style: {
                                fontFamily: "'Syne', sans-serif",
                                color: "#0066ff"
                              },
                              children: stat.label
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-xs mt-0.5",
                              style: { color: "rgba(248,248,248,0.5)" },
                              children: stat.sub
                            }
                          )
                        ]
                      },
                      stat.label
                    )) })
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading text-white text-center mb-3", children: [
            "Our LinkedIn Marketing",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "Services" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-center mb-10",
              style: {
                color: "rgba(248,248,248,0.55)",
                fontFamily: "'Inter', sans-serif"
              },
              children: "End-to-end LinkedIn growth for brands and founders."
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "💼" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-sm sm:text-base leading-relaxed",
                          style: {
                            color: "rgba(248,248,248,0.75)",
                            fontFamily: "'Inter', sans-serif"
                          },
                          children: "A Mumbai B2B SaaS company had 800 LinkedIn followers and zero inbound from the platform. After 6 months of our LinkedIn strategy, they had 12,400 followers, 3 enterprise contracts closed from LinkedIn outreach, and the founder had become a recognized voice in the Indian SaaS community."
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: goResults,
                        "data-ocid": "linkedin.case_study_link",
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
            "LinkedIn Marketing",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "FAQ" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: FAQS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(FAQItem, { q: f.q, a: f.a }, f.q)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: goContact,
              "data-ocid": "linkedin.bottom_cta_button",
              className: "inline-flex items-center gap-2 min-h-[52px] px-8 py-3.5 rounded-full font-semibold text-base",
              style: {
                background: "linear-gradient(135deg, #0066ff, #9b30ff)",
                color: "#fff",
                fontFamily: "'Syne', sans-serif",
                boxShadow: "0 0 30px rgba(0,102,255,0.4)",
                transition: "transform 0.3s",
                touchAction: "manipulation"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.transform = "";
              },
              children: "Get a Free LinkedIn Profile Audit →"
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { onAdminClick: () => {
        } })
      ]
    }
  );
}
export {
  ServiceLinkedIn as default
};
