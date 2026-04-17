import { r as reactExports, j as jsxRuntimeExports } from "./index-CN-t0dhj.js";
const SERVICES = [
  {
    title: "SEO & Visibility",
    description: "Dominating search rankings with data-backed on-page and off-page strategies.",
    icon: "🔍",
    accentGroup: "blue"
  },
  {
    title: "Performance Marketing (PPC)",
    description: "ROI-focused paid campaigns across Google, Meta, and beyond.",
    icon: "📈",
    accentGroup: "blue"
  },
  {
    title: "Social Media Marketing",
    description: "Building brand communities and driving engagement at scale.",
    icon: "🌐",
    accentGroup: "blue"
  },
  {
    title: "Influencer Marketing",
    description: "Authentic campaigns with creators that resonate with your audience.",
    icon: "🎯",
    accentGroup: "blue"
  },
  {
    title: "Digital Marketing",
    description: "Integrated digital strategies that convert browsers into buyers.",
    icon: "💡",
    accentGroup: "purple"
  },
  {
    title: "Content Marketing",
    description: "Compelling narratives that build authority and drive organic growth.",
    icon: "✍️",
    accentGroup: "purple"
  },
  {
    title: "Email Marketing",
    description: "Precision email campaigns that nurture leads and maximize retention.",
    icon: "📧",
    accentGroup: "purple"
  },
  {
    title: "Ads Management",
    description: "Multi-platform ad operations optimized for conversion and efficiency.",
    icon: "📊",
    accentGroup: "purple"
  },
  {
    title: "Brand Discovery & Research",
    description: "Deep-dive brand audits that uncover your competitive edge.",
    icon: "🔬",
    accentGroup: "gold"
  },
  {
    title: "Brand Voice & Identity",
    description: "Crafting the tone, look, and feel that makes your brand unforgettable.",
    icon: "🎨",
    accentGroup: "gold"
  },
  {
    title: "Online Reputation Management",
    description: "Protecting and elevating your brand's digital perception.",
    icon: "🛡️",
    accentGroup: "gold"
  },
  {
    title: "Brand Scaling",
    description: "End-to-end growth strategy that takes brands from local to legendary.",
    icon: "🚀",
    accentGroup: "gold"
  }
];
const ACCENT_STYLES = {
  blue: {
    bg: "rgba(0, 102, 255, 0.15)",
    border: "rgba(0, 102, 255, 0.5)",
    glow: "rgba(0, 102, 255, 0.35)",
    shadow: "0 0 30px rgba(0, 102, 255, 0.3), 0 20px 60px rgba(0,0,0,0.5)"
  },
  purple: {
    bg: "rgba(155, 48, 255, 0.15)",
    border: "rgba(155, 48, 255, 0.5)",
    glow: "rgba(155, 48, 255, 0.35)",
    shadow: "0 0 30px rgba(155, 48, 255, 0.3), 0 20px 60px rgba(0,0,0,0.5)"
  },
  gold: {
    bg: "rgba(255, 184, 0, 0.15)",
    border: "rgba(255, 184, 0, 0.5)",
    glow: "rgba(255, 184, 0, 0.35)",
    shadow: "0 0 30px rgba(255, 184, 0, 0.3), 0 20px 60px rgba(0,0,0,0.5)"
  }
};
const ICON_COLORS = {
  blue: "#0066ff",
  purple: "#9b30ff",
  gold: "#ffb800"
};
function ServiceCard({ service, index, isVisible }) {
  const [hovered, setHovered] = reactExports.useState(false);
  const [tilt, setTilt] = reactExports.useState({ x: 0, y: 0 });
  const cardRef = reactExports.useRef(null);
  const accent = ACCENT_STYLES[service.accentGroup];
  function handleMouseMove(e) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: -dy * 5, y: dx * 5 });
  }
  function handleMouseLeave() {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  }
  const staggerDelay = index * 0.07;
  const iconColor = ICON_COLORS[service.accentGroup];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      ref: cardRef,
      "data-ocid": `services.item.${index + 1}`,
      className: "relative rounded-2xl p-5 sm:p-6 cursor-default outline-none",
      style: {
        background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        border: hovered ? `1px solid ${accent.border}` : "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: hovered ? accent.shadow : "0 4px 24px rgba(0,0,0,0.3)",
        transform: isVisible ? hovered ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-8px)` : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)" : "translateY(40px)",
        opacity: isVisible ? 1 : 0,
        transition: `transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s ease, border-color 0.35s ease, opacity 0.6s ease ${staggerDelay}s`,
        touchAction: "manipulation"
      },
      onMouseEnter: () => setHovered(true),
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onFocus: () => setHovered(true),
      onBlur: handleMouseLeave,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-2xl pointer-events-none",
            style: {
              background: hovered ? `radial-gradient(ellipse at 50% 0%, ${accent.glow} 0%, transparent 65%)` : "transparent",
              transition: "background 0.4s ease"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative mb-4 w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl",
            style: {
              background: hovered ? accent.bg : "rgba(255,255,255,0.07)",
              border: hovered ? `1px solid ${accent.border}` : "1px solid rgba(255,255,255,0.1)",
              boxShadow: hovered ? `0 0 14px ${accent.glow}` : "none",
              transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
              color: iconColor
            },
            children: service.icon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "relative font-semibold text-base sm:text-lg mb-2",
            style: {
              color: hovered ? iconColor : "#f8f8f8",
              transition: "color 0.3s",
              fontFamily: "'Syne', sans-serif"
            },
            children: service.title
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "relative text-xs sm:text-sm leading-relaxed",
            style: { color: "rgba(248,248,248,0.55)" },
            children: service.description
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 left-5 right-5 sm:left-6 sm:right-6 h-px rounded-full",
            style: {
              background: hovered ? `linear-gradient(90deg, transparent, ${accent.border}, transparent)` : "transparent",
              transition: "background 0.4s ease"
            }
          }
        )
      ]
    }
  );
}
function Services() {
  const sectionRef = reactExports.useRef(null);
  const [visibleCards, setVisibleCards] = reactExports.useState(
    new Array(SERVICES.length).fill(false)
  );
  const [headerVisible, setHeaderVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.cardIdx);
            if (!Number.isNaN(idx)) {
              setVisibleCards((prev) => {
                const next = [...prev];
                next[idx] = true;
                return next;
              });
              observer.unobserve(entry.target);
            }
          }
        }
      },
      { threshold: 0.1 }
    );
    const headerObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHeaderVisible(true);
          headerObserver.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    const section = sectionRef.current;
    if (section) {
      const cards = section.querySelectorAll("[data-card-idx]");
      for (const card of cards) observer.observe(card);
      headerObserver.observe(section);
    }
    return () => {
      observer.disconnect();
      headerObserver.disconnect();
    };
  }, []);
  function scrollToContact() {
    var _a;
    (_a = document.getElementById("contact")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "services",
      ref: sectionRef,
      className: "section-padding relative overflow-hidden",
      style: {
        background: "linear-gradient(180deg, #0a0a0a 0%, #0d0a1a 50%, #0a0a0a 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-20 left-1/4 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-3xl opacity-10",
              style: {
                background: "radial-gradient(circle, #0066ff, transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-20 right-1/4 w-80 sm:w-96 h-80 sm:h-96 rounded-full blur-3xl opacity-8",
              style: {
                background: "radial-gradient(circle, #9b30ff, transparent)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dot-pattern opacity-30" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center mb-8 sm:mb-14",
              style: {
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.8s ease, transform 0.8s ease"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full",
                    style: {
                      color: "#0066ff",
                      background: "rgba(0,102,255,0.12)",
                      border: "1px solid rgba(0,102,255,0.3)",
                      fontFamily: "'Inter', sans-serif"
                    },
                    children: "What We Do"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h2",
                  {
                    className: "section-heading text-white mt-4",
                    style: { lineHeight: 1.1 },
                    children: [
                      "Full-Stack",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "Marketing" }),
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
                      "Expertise"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "section-subheading mt-5 max-w-2xl mx-auto text-sm sm:text-lg",
                    style: { color: "rgba(248,248,248,0.55)" },
                    children: "From brand discovery to performance scaling — every service tailored, never templated."
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5", children: SERVICES.map((service, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-card-idx": index, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ServiceCard,
            {
              service,
              index,
              isVisible: visibleCards[index]
            }
          ) }, service.title)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-10 sm:mt-16 text-center",
              style: {
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-sm sm:text-base mb-6",
                    style: {
                      color: "rgba(248,248,248,0.5)",
                      fontFamily: "'Inter', sans-serif"
                    },
                    children: [
                      "Every campaign is uniquely crafted.",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(248,248,248,0.75)" }, children: "No templates, no shortcuts." })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "services.cta_button",
                    onClick: scrollToContact,
                    className: "relative inline-flex items-center gap-2 min-h-[52px] px-8 py-3.5 rounded-full font-semibold text-base overflow-hidden",
                    style: {
                      background: "linear-gradient(135deg, #0066ff, #9b30ff)",
                      color: "#fff",
                      fontFamily: "'Syne', sans-serif",
                      boxShadow: "0 0 30px rgba(0,102,255,0.4), 0 0 60px rgba(155,48,255,0.2)",
                      transition: "box-shadow 0.3s ease, transform 0.3s ease",
                      touchAction: "manipulation"
                    },
                    onMouseEnter: (e) => {
                      const el = e.currentTarget;
                      el.style.transform = "translateY(-2px)";
                      el.style.boxShadow = "0 0 40px rgba(0,102,255,0.6), 0 0 80px rgba(155,48,255,0.35)";
                    },
                    onMouseLeave: (e) => {
                      const el = e.currentTarget;
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = "0 0 30px rgba(0,102,255,0.4), 0 0 60px rgba(155,48,255,0.2)";
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Start Your Campaign" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block", children: "→" })
                    ]
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  Services as default
};
