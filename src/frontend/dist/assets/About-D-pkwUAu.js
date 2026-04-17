import { j as jsxRuntimeExports, r as reactExports } from "./index-CN-t0dhj.js";
function OrbitSphere() {
  const containerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    let frame;
    let angle = 0;
    const animate = () => {
      angle += 0.4;
      if (containerRef.current) {
        containerRef.current.style.transform = `rotateY(${angle}deg) rotateX(${angle * 0.3}deg)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);
  const rings = [
    { size: 240, color: "#0066FF", opacity: 0.9, rotX: 0, rotY: 0 },
    { size: 200, color: "#9B30FF", opacity: 0.75, rotX: 60, rotY: 20 },
    { size: 165, color: "#FFB800", opacity: 0.6, rotX: -40, rotY: 60 },
    { size: 130, color: "#0066FF", opacity: 0.5, rotX: 80, rotY: -30 },
    { size: 95, color: "#9B30FF", opacity: 0.4, rotX: -70, rotY: 45 }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex items-center justify-center w-full",
      style: { height: 260 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          style: {
            width: 260,
            height: 260,
            position: "relative",
            perspective: 800
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: containerRef,
              style: {
                width: "100%",
                height: "100%",
                position: "relative",
                transformStyle: "preserve-3d"
              },
              children: [
                rings.map((ring) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: ring.size,
                      height: ring.size,
                      marginTop: -ring.size / 2,
                      marginLeft: -ring.size / 2,
                      borderRadius: "50%",
                      border: `2px solid ${ring.color}`,
                      opacity: ring.opacity,
                      boxShadow: `0 0 15px ${ring.color}60, inset 0 0 15px ${ring.color}20`,
                      transform: `rotateX(${ring.rotX}deg) rotateY(${ring.rotY}deg)`
                    }
                  },
                  `ring-${ring.size}`
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: 52,
                      height: 52,
                      marginTop: -26,
                      marginLeft: -26,
                      borderRadius: "50%",
                      background: "radial-gradient(circle at 35% 35%, #9B30FF, #0066FF)",
                      boxShadow: "0 0 30px #9B30FF80, 0 0 60px #0066FF40"
                    }
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
}
function navigateTo(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("routechange"));
}
const SERVICE_LINKS = [
  { label: "SEO Services in India", path: "/seo-services-india" },
  { label: "Social Media Marketing", path: "/social-media-marketing-india" },
  {
    label: "Performance Marketing (Google, Meta, LinkedIn Ads)",
    path: "/performance-marketing-india"
  },
  { label: "Brand Strategy & Positioning", path: "/brand-strategy-india" },
  {
    label: "LinkedIn Marketing & Lead Generation",
    path: "/linkedin-marketing-india"
  },
  { label: "Content Marketing", path: null }
];
const BELIEFS = [
  {
    icon: "📊",
    text: "Marketing should be accountable. Every activity should connect to a business metric."
  },
  {
    icon: "🇮🇳",
    text: "India is not a single market. Our strategies respect regional, cultural, and behavioral nuance."
  },
  {
    icon: "⚡",
    text: "Organic and paid are not competitors — they're the two engines of every durable growth system."
  },
  {
    icon: "🔍",
    text: "Transparency is not optional. You should know exactly what we're doing and why at all times."
  },
  {
    icon: "🤝",
    text: "Relationships over retainers. We win when you win. That's how we measure success."
  }
];
const CLIENTS = [
  "Lenskart",
  "Unstop",
  "Swiggy",
  "Arata",
  "Solura Cosmetic",
  "Snitch"
];
function About() {
  function scrollToContact() {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "about",
      className: "relative overflow-hidden",
      style: { background: "#0a0a0a" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dot-pattern opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 right-0 w-2/3 h-full",
            style: {
              background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(155,48,255,0.07) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 section-padding", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex items-center justify-center order-2 lg:order-1 hidden sm:flex",
                "data-ocid": "about.visual",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0 rounded-full blur-3xl opacity-20",
                      style: {
                        background: "radial-gradient(circle, #0066FF 0%, #9B30FF 50%, transparent 70%)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(OrbitSphere, {})
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-1 lg:order-2", "data-ocid": "about.content", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-sm font-semibold tracking-widest uppercase mb-4 accent-blue font-body", children: "About Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "section-heading text-foreground mb-6", children: [
                "We Are BrandHype Solutions —",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "India’s Growth Partner for Bold Brands" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm sm:text-base leading-relaxed mb-4",
                  style: { color: "rgba(255,255,255,0.7)" },
                  children: "BrandHype Solutions is a full-service digital marketing agency based in Mumbai, India. We work with D2C brands, SaaS companies, and consumer businesses across India that are serious about building organic and paid growth channels that last."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-sm sm:text-base leading-relaxed mb-8",
                  style: { color: "rgba(255,255,255,0.7)" },
                  children: "We started because we kept seeing the same problem: brands with great products getting outranked, outspent, and out-marketed by competitors with mediocre offerings but better digital strategy. We exist to fix that."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "glass-card p-5 sm:p-6 relative overflow-hidden",
                  style: { borderLeft: "4px solid #0066FF" },
                  "data-ocid": "about.ai_callout",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute top-0 left-0 bottom-0 w-px pointer-events-none",
                        style: { boxShadow: "0 0 12px #0066FF, 0 0 24px #0066FF80" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "px-3 py-1 rounded-full text-xs font-semibold font-body tracking-wider",
                        style: {
                          background: "linear-gradient(135deg, rgba(0,102,255,0.2), rgba(155,48,255,0.2))",
                          border: "1px solid rgba(0,102,255,0.4)",
                          color: "#0066FF"
                        },
                        children: "✦ AI-Powered Marketing"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-body text-sm leading-relaxed",
                        style: { color: "rgba(255,255,255,0.75)" },
                        children: "We integrate AI at every stage — from AI-driven brand audits and market analysis to AI-personalized campaign execution. Every insight is backed by intelligent data, every strategy refined by machine precision."
                      }
                    )
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20 lg:mb-28", "data-ocid": "about.beliefs_section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading text-center mb-3", children: [
              "What We ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "Believe" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-center font-body text-sm mb-10",
                style: { color: "rgba(255,255,255,0.45)" },
                children: "The principles that guide every strategy, every campaign, every conversation."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
                "data-ocid": "about.beliefs_list",
                children: BELIEFS.map((belief, beliefIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "glass-card p-6 rounded-2xl flex gap-4 items-start transition-all duration-300",
                    style: { border: "1px solid rgba(255,255,255,0.07)" },
                    "data-ocid": `about.belief.${beliefIdx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl flex-shrink-0 mt-0.5", children: belief.icon }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-sm leading-relaxed",
                          style: { color: "rgba(255,255,255,0.72)" },
                          children: belief.text
                        }
                      )
                    ]
                  },
                  belief.text.slice(0, 20)
                ))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20 lg:mb-28", "data-ocid": "about.team_section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading mb-3", children: [
              "Our ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "Team" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "font-body text-sm sm:text-base leading-relaxed mb-8",
                style: { color: "rgba(255,255,255,0.7)" },
                children: [
                  "BrandHype Solutions is led by",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(255,255,255,0.9)", fontWeight: 600 }, children: "Anurag Kumar" }),
                  ", with a team of specialists across SEO, performance marketing, social media, content, and brand strategy. We are a boutique agency by design — small enough to give every client senior attention, experienced enough to handle complex, multi-channel briefs."
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-2xl p-6 sm:p-8 relative overflow-hidden",
                style: {
                  background: "linear-gradient(135deg, rgba(0,102,255,0.08) 0%, rgba(155,48,255,0.06) 100%)",
                  border: "1px solid rgba(0,102,255,0.25)",
                  boxShadow: "0 4px 32px rgba(0,102,255,0.08)"
                },
                "data-ocid": "about.founder_card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute top-0 right-0 w-40 h-40 rounded-full blur-[60px] pointer-events-none",
                      style: { background: "rgba(155,48,255,0.12)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute -inset-1 rounded-full blur-md pointer-events-none",
                          style: {
                            background: "linear-gradient(135deg, rgba(0,102,255,0.5), rgba(155,48,255,0.4))"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: "/assets/founder.jpg",
                          alt: "Anurag Kumar - Founder, BrandHype Solutions",
                          className: "relative rounded-full object-cover flex-shrink-0",
                          style: {
                            width: 128,
                            height: 128,
                            border: "3px solid rgba(0,102,255,0.5)",
                            boxShadow: "0 0 24px rgba(0,102,255,0.35), 0 0 48px rgba(155,48,255,0.15)"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "absolute bottom-2 right-2 w-4 h-4 rounded-full border-2",
                          style: {
                            background: "#00d084",
                            borderColor: "#0a0a0a",
                            boxShadow: "0 0 8px #00d084aa"
                          }
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center sm:text-left", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: "font-display font-bold text-xl sm:text-2xl mb-1",
                          style: { color: "#ffffff" },
                          children: "Anurag Kumar"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-sm font-medium mb-1",
                          style: {
                            background: "linear-gradient(90deg, #0066FF, #9B30FF)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                          },
                          children: "Founder & CEO, BrandHype Solutions"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-xs mb-4",
                          style: { color: "rgba(255,255,255,0.4)" },
                          children: "Mumbai, India · Performance Marketing · Brand Growth"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-body text-sm leading-relaxed mb-5",
                          style: { color: "rgba(255,255,255,0.68)" },
                          children: "With a passion for growth marketing and brand building, Anurag leads BrandHype Solutions in helping India's boldest brands scale through performance marketing and viral content systems. He combines data-driven strategy with deep creative intuition to turn ambitious brands into category leaders."
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center sm:justify-start gap-2", children: [
                        "Performance Marketing",
                        "Meme Marketing",
                        "D2C Growth",
                        "Brand Strategy"
                      ].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "px-3 py-1 rounded-full font-body text-xs font-medium",
                          style: {
                            background: "rgba(0,102,255,0.12)",
                            border: "1px solid rgba(0,102,255,0.3)",
                            color: "rgba(255,255,255,0.75)"
                          },
                          children: tag
                        },
                        tag
                      )) })
                    ] })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20 lg:mb-28", "data-ocid": "about.clients_section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading mb-3", children: [
              "Our ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "Clients" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-sm sm:text-base leading-relaxed mb-6",
                style: { color: "rgba(255,255,255,0.7)" },
                children: "We work with brands across Mumbai, Delhi, Bangalore, Hyderabad, and beyond — in industries including D2C, SaaS, fintech, consumer goods, real estate, and professional services."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex flex-wrap gap-3 mb-4",
                "data-ocid": "about.clients_list",
                children: CLIENTS.map((client) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-5 py-2.5 rounded-full font-display font-semibold text-sm transition-all duration-200",
                    style: {
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.85)"
                    },
                    onMouseEnter: (e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "#0066FF80";
                      el.style.boxShadow = "0 0 12px #0066FF30";
                      el.style.color = "#fff";
                    },
                    onMouseLeave: (e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(255,255,255,0.15)";
                      el.style.boxShadow = "none";
                      el.style.color = "rgba(255,255,255,0.85)";
                    },
                    children: client
                  },
                  client
                ))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-xs italic",
                style: { color: "rgba(255,255,255,0.3)" },
                children: "[Add 3–5 client logos or names with permission.]"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mb-20 lg:mb-28 rounded-2xl p-8 sm:p-10 relative overflow-hidden",
              style: {
                background: "rgba(0,102,255,0.05)",
                border: "1px solid rgba(0,102,255,0.15)"
              },
              "data-ocid": "about.mumbai_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] pointer-events-none",
                    style: { background: "rgba(0,102,255,0.1)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading mb-4 relative", children: [
                  "Why ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "Mumbai?" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm sm:text-base leading-relaxed relative",
                    style: { color: "rgba(255,255,255,0.7)", maxWidth: "720px" },
                    children: "Mumbai is India's commercial capital — and the right city to understand the pace, the ambition, and the competitive intensity that Indian brands operate in. Our proximity to India's largest business ecosystem means we understand the market our clients are competing in, not just the algorithms they're trying to rank on."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", "data-ocid": "about.services_section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading mb-3", children: [
              "Our ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "Services" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-sm mb-8",
                style: { color: "rgba(255,255,255,0.45)" },
                children: "Everything under one roof — no coordination headaches, no gaps between teams."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "ul",
              {
                className: "flex flex-col gap-3 mb-10",
                "data-ocid": "about.services_list",
                children: SERVICE_LINKS.map((svc, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: svc.path ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => navigateTo(svc.path),
                    className: "flex items-center gap-3 group text-left transition-all duration-200",
                    "data-ocid": `about.service_link.${i + 1}`,
                    style: { touchAction: "manipulation" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "w-2 h-2 rounded-full flex-shrink-0",
                          style: { background: "#0066FF" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-body text-sm sm:text-base group-hover:text-[#0066FF] transition-colors duration-200",
                          style: { color: "rgba(255,255,255,0.75)" },
                          children: svc.label
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#0066FF]", children: "→" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-2 h-2 rounded-full flex-shrink-0",
                      style: { background: "rgba(255,255,255,0.3)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-body text-sm sm:text-base",
                      style: { color: "rgba(255,255,255,0.55)" },
                      children: svc.label
                    }
                  )
                ] }) }, svc.label))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: scrollToContact,
                className: "group inline-flex items-center gap-2 min-h-[52px] px-8 py-3.5 rounded-full font-display font-semibold text-sm sm:text-base text-white transition-all duration-300",
                style: {
                  background: "linear-gradient(135deg, #0066ff 0%, #4d4dff 100%)",
                  boxShadow: "0 0 24px rgba(0,102,255,0.45), 0 4px 20px rgba(0,102,255,0.25)",
                  touchAction: "manipulation"
                },
                onMouseEnter: (e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "0 0 40px rgba(0,102,255,0.7), 0 8px 32px rgba(0,102,255,0.4)";
                  el.style.transform = "translateY(-2px) scale(1.02)";
                },
                onMouseLeave: (e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "0 0 24px rgba(0,102,255,0.45), 0 4px 20px rgba(0,102,255,0.25)";
                  el.style.transform = "";
                },
                "data-ocid": "about.cta_button",
                children: [
                  "Work With Us — Get a Free Audit",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block transition-transform duration-300 group-hover:translate-x-1", children: "→" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  About as default
};
