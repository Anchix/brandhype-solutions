import { r as reactExports, j as jsxRuntimeExports, X } from "./index-Bg5P4_Z-.js";
const WHATSAPP_NUMBER = "917857905819";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi BrandHype Solutions! I'm interested in your marketing services. Can we connect?"
);
function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = reactExports.useState(false);
  const [dismissed, setDismissed] = reactExports.useState(false);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3",
      "data-ocid": "whatsapp.floating_button",
      children: [
        showTooltip && !dismissed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative glass-effect rounded-2xl px-4 py-3 shadow-elevated max-w-[200px] border-glow animate-slide-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setDismissed(true),
              className: "absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-smooth",
              "aria-label": "Dismiss",
              "data-ocid": "whatsapp.dismiss_button",
              style: { touchAction: "manipulation" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-sm font-semibold leading-snug", children: "👋 Chat with us!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs mt-1 leading-snug", children: "Let's scale your brand" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: whatsappUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Chat on WhatsApp",
            onMouseEnter: () => setShowTooltip(true),
            onMouseLeave: () => setShowTooltip(false),
            className: "relative w-14 h-14 rounded-full flex items-center justify-center shadow-elevated transition-smooth hover:scale-110 group",
            style: {
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4), 0 0 40px rgba(37, 211, 102, 0.15)",
              touchAction: "manipulation"
            },
            "data-ocid": "whatsapp.open_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "absolute inset-0 rounded-full animate-ping opacity-30",
                  style: { background: "rgba(37, 211, 102, 0.4)" },
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  className: "w-7 h-7 text-white relative z-10",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-smooth" })
            ]
          }
        )
      ]
    }
  );
}
export {
  WhatsAppButton as default
};
