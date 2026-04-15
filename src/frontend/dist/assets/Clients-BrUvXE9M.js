import { j as jsxRuntimeExports, r as reactExports } from "./index-B9jF2Sce.js";
const clients = [
  {
    name: "Lenskart",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Lenskart_logo.svg/320px-Lenskart_logo.svg.png",
    color: "#0066FF",
    bg: "rgba(0,102,255,0.12)",
    initial: "L"
  },
  {
    name: "Unstop",
    logoUrl: "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/branding-guidelines/unstop-logo.png",
    color: "#FF6B2B",
    bg: "rgba(255,107,43,0.12)",
    initial: "U"
  },
  {
    name: "Swiggy",
    logoUrl: "https://logo.svgcdn.com/simple-icons/swiggy-dark.png",
    color: "#FC8019",
    bg: "rgba(252,128,25,0.12)",
    initial: "S"
  },
  {
    name: "Arata",
    logoUrl: "https://www.arata.in/cdn/shop/files/Arata_Logo_4x_0e27b1b7-c7e4-4a25-ad91-9e28cdff43b1.png",
    color: "#00C853",
    bg: "rgba(0,200,83,0.12)",
    initial: "A"
  },
  {
    name: "Solura Cosmetic",
    logoUrl: "",
    color: "#20BFA9",
    bg: "rgba(32,191,169,0.12)",
    initial: "SC"
  },
  {
    name: "Snitch",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/snitch-1.svg",
    color: "#FF1744",
    bg: "rgba(255,23,68,0.12)",
    initial: "SN"
  }
];
function ClientLogo({ client }) {
  const [imgError, setImgError] = reactExports.useState(false);
  const showFallback = !client.logoUrl || imgError;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex flex-col items-center gap-2.5 mx-6 sm:mx-8 cursor-default select-none group",
      style: {
        filter: "grayscale(1) brightness(0.7)",
        transition: "filter 0.3s ease, transform 0.3s ease"
      },
      onMouseEnter: (e) => {
        const el = e.currentTarget;
        el.style.filter = "grayscale(0) brightness(1)";
        el.style.transform = "scale(1.08)";
      },
      onMouseLeave: (e) => {
        const el = e.currentTarget;
        el.style.filter = "grayscale(1) brightness(0.7)";
        el.style.transform = "scale(1)";
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-20 h-16 sm:w-24 sm:h-18 rounded-xl flex items-center justify-center overflow-hidden border",
            style: {
              backgroundColor: showFallback ? client.bg : "rgba(255,255,255,0.04)",
              borderColor: showFallback ? `${client.color}40` : "rgba(255,255,255,0.08)",
              boxShadow: `0 0 0px ${client.color}00`,
              transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              padding: showFallback ? "0" : "8px"
            },
            onMouseEnter: (e) => {
              const el = e.currentTarget;
              el.style.boxShadow = `0 0 20px ${client.color}40`;
              el.style.borderColor = `${client.color}60`;
            },
            onMouseLeave: (e) => {
              const el = e.currentTarget;
              el.style.boxShadow = `0 0 0px ${client.color}00`;
              el.style.borderColor = showFallback ? `${client.color}40` : "rgba(255,255,255,0.08)";
            },
            children: showFallback ? (
              /* Styled text fallback */
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-full h-full flex items-center justify-center font-display font-bold text-lg",
                  style: { color: client.color },
                  children: client.initial
                }
              )
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: client.logoUrl,
                alt: `${client.name} logo`,
                className: "max-h-10 sm:max-h-12 max-w-full object-contain",
                onError: () => setImgError(true),
                loading: "lazy",
                crossOrigin: "anonymous"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-xs font-body font-medium text-center leading-tight whitespace-nowrap",
            style: { color: "rgba(255,255,255,0.7)" },
            children: client.name
          }
        )
      ]
    }
  );
}
function Clients() {
  const tripled = [...clients, ...clients, ...clients].map((c, i) => ({
    ...c,
    key: `r1-${i}`
  }));
  const tripledRev = [
    ...[...clients].reverse(),
    ...[...clients].reverse(),
    ...[...clients].reverse()
  ].map((c, i) => ({ ...c, key: `r2-${i}` }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "clients", className: "section-padding relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#0a0a0a]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dot-pattern opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0",
        style: {
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(155,48,255,0.08) 0%, transparent 70%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8 sm:mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-sm font-semibold tracking-widest uppercase mb-4 accent-purple font-body", children: "Our Clients" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading text-foreground mb-5", children: [
        "Brands We've",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text-blue-purple", children: "Scaled" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subheading max-w-2xl mx-auto", children: "Trusted by industry leaders across India's most competitive sectors." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative overflow-hidden mb-8",
        "data-ocid": "clients.marquee_row_1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none",
              style: {
                background: "linear-gradient(90deg, #0a0a0a 0%, transparent 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none",
              style: {
                background: "linear-gradient(270deg, #0a0a0a 0%, transparent 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex items-center py-4",
              style: {
                animation: "marquee-left 30s linear infinite",
                width: "max-content"
              },
              children: tripled.map((client) => /* @__PURE__ */ jsxRuntimeExports.jsx(ClientLogo, { client }, client.key))
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative overflow-hidden",
        "data-ocid": "clients.marquee_row_2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none",
              style: {
                background: "linear-gradient(90deg, #0a0a0a 0%, transparent 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none",
              style: {
                background: "linear-gradient(270deg, #0a0a0a 0%, transparent 100%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex items-center py-4",
              style: {
                animation: "marquee-right 36s linear infinite",
                width: "max-content"
              },
              children: tripledRev.map((client) => /* @__PURE__ */ jsxRuntimeExports.jsx(ClientLogo, { client }, client.key))
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      ` })
  ] });
}
export {
  Clients as default
};
