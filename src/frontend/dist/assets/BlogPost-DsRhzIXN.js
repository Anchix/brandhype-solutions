import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports } from "./index-CN-t0dhj.js";
import { S as SAMPLE_POSTS, t as toSlug, n as navigateTo, C as Calendar, a as Clock } from "./Blog-B40gnECD.js";
import { U as User } from "./user-BPBAwKgh.js";
import "./arrow-right-B326P2nd.js";
import "./trending-up-D-4X7gN-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
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
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
const CATEGORY_COLORS = {
  Strategy: "#0066FF",
  Branding: "#9B30FF",
  Performance: "#FFB800",
  Influencer: "#FF6B9D",
  "Social Media": "#00C853",
  SEO: "#00D4FF",
  Growth: "#FF7A00",
  "AI Marketing": "#0066FF",
  General: "#9B30FF"
};
function getCategoryColor(cat) {
  return CATEGORY_COLORS[cat] ?? CATEGORY_COLORS.General;
}
function renderContent(content) {
  const paragraphs = content.split(/\n\n+/);
  return paragraphs.map((para) => {
    const stableKey = para.slice(0, 40).replace(/\s+/g, "_");
    if (para.startsWith("**") && para.endsWith("**") && para.length > 4) {
      const text = para.slice(2, -2);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          className: "font-display font-bold text-lg sm:text-xl mt-8 mb-3",
          style: { color: "#f8f8f8" },
          children: text
        },
        stableKey
      );
    }
    const parts = para.split(/\*\*(.+?)\*\*/g);
    const rendered = parts.map(
      (part) => (
        // odd-indexed parts (every 2nd) are bold — split gives [plain, bold, plain, bold, ...]
        parts.indexOf(part) % 2 === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#f0f0f0" }, children: part }, `b_${part.slice(0, 20)}`) : part
      )
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "leading-relaxed text-sm sm:text-base mb-4",
        style: { color: "rgba(255,255,255,0.72)" },
        children: rendered
      },
      stableKey
    );
  });
}
function BlogPost() {
  const [post, setPost] = reactExports.useState(null);
  const [notFound, setNotFound] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const slug = window.location.pathname.replace("/blog/", "").replace(/^\/|\/$/g, "");
    let allPosts = SAMPLE_POSTS;
    const stored = localStorage.getItem("bh_blog_posts");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const published = parsed.filter((p) => p.status === "published");
        if (published.length > 0) {
          allPosts = published.map((p) => ({
            id: p.id,
            title: p.title,
            excerpt: p.excerpt || p.content.slice(0, 200),
            content: p.content,
            author: p.author || "BrandHype Team",
            tags: p.tags ? p.tags.split(",").map((t) => t.trim()).filter(Boolean) : [p.category],
            readTime: p.readTime || "5 min read",
            date: p.publishDate,
            category: p.category,
            featuredImage: p.featuredImage || void 0
          }));
        }
      } catch {
      }
    }
    const found = allPosts.find((p) => toSlug(p.title) === slug);
    if (found) {
      setPost(found);
      document.title = `${found.title} | BrandHype Blog`;
    } else {
      setNotFound(true);
    }
  }, []);
  if (notFound) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-screen flex flex-col items-center justify-center px-4 pt-24",
        style: { background: "#080808" },
        "data-ocid": "blogpost.not_found",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display font-black text-4xl mb-4",
              style: { color: "#f8f8f8" },
              children: "404"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 mb-8", children: "Article not found." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => navigateTo("/blog"),
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-200 hover:gap-3",
              style: { background: "linear-gradient(135deg, #0066FF, #9B30FF)" },
              "data-ocid": "blogpost.back_to_blog_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                " Back to Blog"
              ]
            }
          )
        ]
      }
    );
  }
  if (!post) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center pt-24",
        style: { background: "#080808" },
        "data-ocid": "blogpost.loading_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-[#0066FF] border-t-transparent animate-spin" })
      }
    );
  }
  const categoryColor = getCategoryColor(post.category);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: { background: "#080808" },
      "data-ocid": "blogpost.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 pointer-events-none overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[120px]",
              style: { background: "rgba(0,102,255,0.06)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-1/3 right-1/4 w-[400px] h-[300px] rounded-full blur-[100px]",
              style: { background: "rgba(155,48,255,0.04)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 dot-pattern opacity-10" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => navigateTo("/blog"),
              className: "inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:gap-3",
              style: {
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.1)"
              },
              "data-ocid": "blogpost.back_to_blog_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                " Back to Blog"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide",
                style: {
                  background: `${categoryColor}20`,
                  color: categoryColor,
                  border: `1px solid ${categoryColor}50`
                },
                children: post.category
              }
            ),
            post.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs",
                style: {
                  background: "rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.45)",
                  border: "1px solid rgba(255,255,255,0.08)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-2.5 h-2.5" }),
                  tag
                ]
              },
              tag
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6",
              style: { color: "#f8f8f8" },
              "data-ocid": "blogpost.title",
              children: post.title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-wrap items-center gap-4 text-xs mb-8 pb-8 border-b",
              style: {
                color: "rgba(255,255,255,0.4)",
                borderColor: "rgba(255,255,255,0.07)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(255,255,255,0.65)" }, children: post.author })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
                  post.date
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
                  post.readTime
                ] })
              ]
            }
          ),
          post.featuredImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden mb-10 aspect-video", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: post.featuredImage,
              alt: post.title,
              className: "w-full h-full object-cover",
              "data-ocid": "blogpost.featured_image"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-base sm:text-lg leading-relaxed mb-8 font-medium",
              style: { color: "rgba(255,255,255,0.6)" },
              "data-ocid": "blogpost.excerpt",
              children: post.excerpt
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-16 h-1 rounded-full mb-8",
              style: {
                background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor}44)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose-custom", "data-ocid": "blogpost.content", children: post.content ? renderContent(post.content) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "rgba(255,255,255,0.5)" }, children: post.excerpt }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "mt-16 rounded-2xl p-8 border relative overflow-hidden",
              style: {
                background: "linear-gradient(135deg, rgba(0,102,255,0.07), rgba(155,48,255,0.05))",
                borderColor: "rgba(0,102,255,0.2)"
              },
              "data-ocid": "blogpost.cta_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] pointer-events-none",
                    style: { background: "rgba(0,102,255,0.12)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-display font-black text-xl sm:text-2xl mb-3",
                      style: { color: "#f8f8f8" },
                      children: "Ready to scale your brand?"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm sm:text-base mb-6",
                      style: { color: "rgba(255,255,255,0.5)" },
                      children: "BrandHype builds the performance marketing systems, creator partnerships, and brand strategies that 10x growth."
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          navigateTo("/");
                          setTimeout(() => {
                            var _a;
                            (_a = document.getElementById("contact")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        },
                        className: "px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-105",
                        style: {
                          background: "linear-gradient(135deg, #0066FF, #9B30FF)",
                          boxShadow: "0 0 20px rgba(0,102,255,0.4)"
                        },
                        "data-ocid": "blogpost.contact_cta_button",
                        children: "Let's Scale Your Brand →"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => navigateTo("/blog"),
                        className: "px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:text-white",
                        style: {
                          background: "rgba(255,255,255,0.05)",
                          color: "rgba(255,255,255,0.6)",
                          border: "1px solid rgba(255,255,255,0.1)"
                        },
                        "data-ocid": "blogpost.more_articles_button",
                        children: "More Articles"
                      }
                    )
                  ] })
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  BlogPost as default
};
