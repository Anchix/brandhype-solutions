import { r as reactExports, j as jsxRuntimeExports } from "./index-B9jF2Sce.js";
const steps = [
  {
    num: "01",
    title: "Discovery & Audit",
    description: "Deep-dive brand audit, competitor analysis, and market research. AI-driven insights surface hidden opportunities.",
    color: "#0066FF",
    glowColor: "rgba(0,102,255,0.3)"
  },
  {
    num: "02",
    title: "Strategy & Roadmap",
    description: "Bespoke marketing strategy with clear KPIs, channel selection, and content calendar.",
    color: "#9B30FF",
    glowColor: "rgba(155,48,255,0.3)"
  },
  {
    num: "03",
    title: "Creative Execution",
    description: "Crafting campaigns — content, creatives, ads — that capture attention and drive action.",
    color: "#FFB800",
    glowColor: "rgba(255,184,0,0.3)"
  },
  {
    num: "04",
    title: "Launch & Optimize",
    description: "Multi-channel deployment with real-time monitoring. A/B testing and performance optimization.",
    color: "#0066FF",
    glowColor: "rgba(0,102,255,0.3)"
  },
  {
    num: "05",
    title: "Scale & Dominate",
    description: "Taking winning strategies and amplifying them. From local recognition to national dominance.",
    color: "#9B30FF",
    glowColor: "rgba(155,48,255,0.3)"
  }
];
function StepCard({
  step,
  index,
  visible
}) {
  const isRight = index % 2 !== 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative flex items-center gap-4 sm:gap-6 ${isRight ? "lg:flex-row-reverse" : "lg:flex-row"} flex-row`,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : isRight ? "translateX(40px)" : "translateX(-40px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`
      },
      "data-ocid": `process.step.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block lg:flex-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "hidden lg:flex flex-shrink-0 z-10",
            style: { width: 64, justifyContent: "center" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-14 h-14 rounded-full flex items-center justify-center font-bold font-display text-lg text-white",
                style: {
                  background: `radial-gradient(circle at 35% 35%, ${step.color}, ${step.color}90)`,
                  boxShadow: `0 0 20px ${step.glowColor}, 0 0 40px ${step.glowColor}`
                },
                children: step.num
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-start gap-3 sm:gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "lg:hidden flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold font-display text-xs sm:text-sm mt-1 text-white",
              style: {
                background: `radial-gradient(circle at 35% 35%, ${step.color}, ${step.color}90)`,
                boxShadow: `0 0 16px ${step.glowColor}`
              },
              children: step.num
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "glass-card p-5 sm:p-6 flex-1",
              style: {
                borderTop: `3px solid ${step.color}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              },
              onMouseEnter: (e) => {
                const el = e.currentTarget;
                el.style.transform = "scale(1.02)";
                el.style.boxShadow = `0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${step.glowColor}`;
              },
              onMouseLeave: (e) => {
                const el = e.currentTarget;
                el.style.transform = "scale(1)";
                el.style.boxShadow = "";
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display font-bold text-lg sm:text-xl mb-2 sm:mb-3",
                    style: { color: step.color },
                    children: step.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-xs sm:text-sm leading-relaxed",
                    style: { color: "rgba(255,255,255,0.7)" },
                    children: step.description
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
function Process() {
  const sectionRef = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "process",
      ref: sectionRef,
      className: "section-padding relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: { backgroundColor: "#080808" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,184,0,0.04) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto px-4 sm:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center mb-8 sm:mb-16",
              "data-ocid": "process.section_header",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-sm font-semibold tracking-widest uppercase mb-4 accent-gold font-body", children: "How We Work" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading text-foreground mb-5", children: [
                  "From Discovery to",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "Dominance" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subheading max-w-2xl mx-auto text-sm sm:text-lg", children: "A proven 5-step framework that delivers measurable results, every time." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute left-1/2 top-0 bottom-0 hidden lg:block",
                style: {
                  width: 2,
                  transform: "translateX(-50%)",
                  background: "linear-gradient(180deg, #0066FF 0%, #9B30FF 50%, #FFB800 100%)",
                  boxShadow: "0 0 10px rgba(155,48,255,0.3)",
                  opacity: 0.6
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6 sm:gap-10", children: steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              StepCard,
              {
                step,
                index: i,
                visible
              },
              step.num
            )) })
          ] })
        ] })
      ]
    }
  );
}
export {
  Process as default
};
