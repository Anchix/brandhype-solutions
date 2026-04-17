import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

function navigateTo(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("routechange"));
}

const SERVICES = [
  {
    icon: "🔍",
    title: "Technical SEO Audit & Fixes",
    desc: "We start with a full crawl of your website — identifying indexing issues, speed problems, broken links, mobile usability gaps, and Core Web Vitals failures. Every fix is prioritized by its impact on your rankings.",
    accent: "blue" as const,
  },
  {
    icon: "🗺️",
    title: "India-First Keyword Research",
    desc: "We don't just use global keyword tools. We map exactly how your target customers in India search — regional language intent, Hindi-English mix, city-specific queries, and industry-specific terms that your competitors are missing.",
    accent: "purple" as const,
  },
  {
    icon: "📝",
    title: "On-Page SEO Optimization",
    desc: "Every page on your website is an opportunity to rank. We optimize title tags, meta descriptions, H1–H3 structure, internal linking, content depth, and schema markup — for every key page, not just your homepage.",
    accent: "blue" as const,
  },
  {
    icon: "✍️",
    title: "Content Strategy & Execution",
    desc: "We build content that ranks and converts. Long-form blog posts, service page copy, landing pages, and pillar content — all built around what your ideal customer in India is searching for at each stage of their journey.",
    accent: "gold" as const,
  },
  {
    icon: "🔗",
    title: "Link Building — Indian & Global",
    desc: "We secure backlinks from credible Indian sources — publications like YourStory, Inc42, and industry directories — alongside global authority sites. Every link we build is white-hat and relevant to your niche.",
    accent: "purple" as const,
  },
  {
    icon: "📍",
    title: "Local SEO (Mumbai / India)",
    desc: "Rank for 'digital marketing agency near me' and city-specific searches. We set up and optimize your Google Business Profile, build local citations, and ensure NAP consistency across all platforms.",
    accent: "gold" as const,
  },
];

const PRICING = [
  {
    tier: "Starter",
    tagline: "For startups & small brands",
    details: "Technical audit + 5 pages + 4 blogs/mo",
    accent: "blue" as const,
  },
  {
    tier: "Growth",
    tagline: "For scaling brands",
    details: "Full on-page + content + link building",
    accent: "purple" as const,
    featured: true,
  },
  {
    tier: "Enterprise",
    tagline: "For high-competition industries",
    details: "Custom strategy + dedicated team",
    accent: "gold" as const,
  },
];

const FAQS = [
  {
    q: "How long does SEO take to show results in India?",
    a: "For long-tail and medium-competition keywords in India, you'll typically see movement in 4–8 weeks with proper execution. Ranking in top 3 for competitive terms like 'digital marketing agency India' takes 4–6 months. We give you a realistic timeline after auditing your current state.",
  },
  {
    q: "Do you guarantee rankings?",
    a: "No ethical SEO agency can guarantee specific rankings — Google's algorithm is not owned by anyone. What we guarantee is transparent execution, measurable progress every month, and strategies that follow Google's guidelines so your rankings last.",
  },
  {
    q: "Is SEO worth it for Indian brands vs. just running ads?",
    a: "Ads stop the moment you pause spend. SEO compounds. A blog post or service page that ranks today will keep driving traffic in 12 months without additional spend. The highest-ROI brands in India run both — ads for immediate conversions, SEO for long-term organic dominance.",
  },
];

const ACCENT = {
  blue: {
    color: "#0066ff",
    bg: "rgba(0,102,255,0.12)",
    border: "rgba(0,102,255,0.35)",
    glow: "rgba(0,102,255,0.3)",
  },
  purple: {
    color: "#9b30ff",
    bg: "rgba(155,48,255,0.12)",
    border: "rgba(155,48,255,0.35)",
    glow: "rgba(155,48,255,0.3)",
  },
  gold: {
    color: "#ffb800",
    bg: "rgba(255,184,0,0.12)",
    border: "rgba(255,184,0,0.35)",
    glow: "rgba(255,184,0,0.3)",
  },
};

function ServiceCard({ icon, title, desc, accent }: (typeof SERVICES)[0]) {
  const [hov, setHov] = useState(false);
  const a = ACCENT[accent];
  return (
    <div
      className="rounded-2xl p-6 cursor-default transition-all duration-300"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        border: hov
          ? `1px solid ${a.border}`
          : "1px solid rgba(255,255,255,0.1)",
        boxShadow: hov
          ? `0 0 30px ${a.glow}, 0 20px 40px rgba(0,0,0,0.4)`
          : "0 4px 24px rgba(0,0,0,0.3)",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
        style={{ background: a.bg, border: `1px solid ${a.border}` }}
      >
        {icon}
      </div>
      <h3
        className="font-bold text-base mb-2"
        style={{
          fontFamily: "'Syne', sans-serif",
          color: hov ? a.color : "#f8f8f8",
        }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "rgba(248,248,248,0.55)" }}
      >
        {desc}
      </p>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        data-ocid="seo.faq.toggle"
        style={{ touchAction: "manipulation" }}
      >
        <span
          className="font-semibold text-base text-white/90"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg transition-transform duration-300"
          style={{
            background: "rgba(0,102,255,0.15)",
            color: "#0066ff",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          className="pb-5 text-sm leading-relaxed"
          style={{
            color: "rgba(248,248,248,0.6)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function ServiceSEO() {
  useEffect(() => {
    document.title = "SEO Services in India | BrandHype Solutions Mumbai";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const goContact = () => {
    navigateTo("/");
    setTimeout(
      () =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" }),
      120,
    );
  };
  const goResults = () => {
    navigateTo("/");
    setTimeout(
      () =>
        document
          .getElementById("case-studies")
          ?.scrollIntoView({ behavior: "smooth" }),
      120,
    );
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: "#0a0a0a", color: "#f8f8f8" }}
    >
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #0a0a0a 0%, #080a14 60%, #0a0a0a 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
            style={{
              background: "radial-gradient(circle, #0066ff, transparent)",
            }}
          />
          <div
            className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10"
            style={{
              background: "radial-gradient(circle, #9b30ff, transparent)",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <button
            type="button"
            onClick={() => navigateTo("/")}
            className="inline-flex items-center gap-2 mb-6 text-sm transition-smooth"
            style={{
              color: "rgba(248,248,248,0.45)",
              fontFamily: "'Inter', sans-serif",
            }}
            data-ocid="seo.back_button"
          >
            ← Back to Home
          </button>
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{
              color: "#0066ff",
              background: "rgba(0,102,255,0.12)",
              border: "1px solid rgba(0,102,255,0.3)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            SEO Services India
          </span>
          <h1 className="section-heading text-white mb-6">
            SEO Services in India That{" "}
            <span className="gradient-text-blue-purple">Actually Rank</span>
          </h1>
          <p
            className="text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8"
            style={{
              color: "rgba(248,248,248,0.6)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Stop guessing why you're on page 3. We build SEO strategies for
            Indian brands that compound — more traffic, more leads, more revenue
            — month after month.
          </p>
          <p
            className="text-sm sm:text-base mb-10 max-w-2xl mx-auto"
            style={{
              color: "rgba(248,248,248,0.5)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            BrandHype Solutions is a results-first SEO agency based in Mumbai,
            India. We've helped D2C brands, SaaS companies, and consumer
            businesses rank for the keywords their customers actually use — not
            just the ones that look impressive in a report.
          </p>
          <button
            type="button"
            onClick={goContact}
            data-ocid="seo.hero_cta_button"
            className="inline-flex items-center gap-2 min-h-[52px] px-8 py-3.5 rounded-full font-semibold text-base"
            style={{
              background: "linear-gradient(135deg, #0066ff, #9b30ff)",
              color: "#fff",
              fontFamily: "'Syne', sans-serif",
              boxShadow:
                "0 0 30px rgba(0,102,255,0.4), 0 0 60px rgba(155,48,255,0.2)",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              touchAction: "manipulation",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(0,102,255,0.6), 0 0 80px rgba(155,48,255,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(0,102,255,0.4), 0 0 60px rgba(155,48,255,0.2)";
            }}
          >
            Get Your Free SEO Audit →
          </button>
        </div>
      </section>

      {/* Problems */}
      <section
        className="section-padding px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #0d0a1a 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-white mb-3 text-center">
            What's Holding Your{" "}
            <span className="gradient-text-blue-purple">Website Back?</span>
          </h2>
          <p
            className="text-center mb-8"
            style={{
              color: "rgba(248,248,248,0.55)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Most Indian brand websites we audit have the same 5 problems:
          </p>
          <div
            className="rounded-2xl p-6 sm:p-8 space-y-4"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {[
              {
                id: "kw",
                text: "No India-specific keyword strategy (targeting generic global terms nobody searches here)",
              },
              {
                id: "sp",
                text: "Service pages that don't answer what potential customers in India actually type",
              },
              {
                id: "mobile",
                text: "Slow page speed on mobile — where 80%+ of Indian web traffic comes from",
              },
              {
                id: "local",
                text: "No local SEO setup — invisible on Google Maps and 'near me' searches",
              },
              {
                id: "links",
                text: "Zero backlinks from credible Indian publications and directories",
              },
            ].map((prob, i) => (
              <div key={prob.id} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{
                    background: "rgba(0,102,255,0.2)",
                    color: "#0066ff",
                    border: "1px solid rgba(0,102,255,0.4)",
                  }}
                >
                  {i + 1}
                </span>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(248,248,248,0.7)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {prob.text}
                </p>
              </div>
            ))}
            <p
              className="font-semibold text-base pt-2"
              style={{ color: "#0066ff", fontFamily: "'Syne', sans-serif" }}
            >
              Sound familiar? That's exactly what we fix.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading text-white text-center mb-3">
            Our <span className="gradient-text-blue-purple">SEO Services</span>
          </h2>
          <p
            className="text-center mb-10"
            style={{
              color: "rgba(248,248,248,0.55)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            End-to-end SEO built for the Indian market.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section
        className="section-padding px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #0d0a1a 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-white text-center mb-8">
            Case Study <span className="gradient-text-gold">Highlight</span>
          </h2>
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,184,0,0.07), rgba(0,102,255,0.07))",
              border: "1px solid rgba(255,184,0,0.25)",
              boxShadow: "0 0 40px rgba(255,184,0,0.08)",
            }}
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">📈</span>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{
                  color: "rgba(248,248,248,0.75)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                A Mumbai-based D2C skincare brand came to us ranking on page 4
                for their primary keyword. Within 14 weeks, they were ranking #2
                in India, driving 3,400 new monthly organic visitors and
                reducing paid acquisition spend by 40%.
              </p>
            </div>
            <button
              type="button"
              onClick={goResults}
              data-ocid="seo.case_study_link"
              className="font-semibold text-sm transition-smooth"
              style={{ color: "#ffb800", fontFamily: "'Syne', sans-serif" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              See Full Results →
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-white text-center mb-3">
            SEO Pricing{" "}
            <span className="gradient-text-blue-purple">— India</span>
          </h2>
          <p
            className="text-center mb-10"
            style={{
              color: "rgba(248,248,248,0.55)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Three engagement models based on your stage and goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {PRICING.map((p) => {
              const a = ACCENT[p.accent];
              return (
                <div
                  key={p.tier}
                  className="rounded-2xl p-6 flex flex-col gap-3 text-center transition-all duration-300"
                  style={{
                    background: p.featured
                      ? `linear-gradient(135deg, ${a.bg}, rgba(255,255,255,0.03))`
                      : "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                    border: `1px solid ${a.border}`,
                    boxShadow: p.featured ? `0 0 30px ${a.glow}` : "none",
                  }}
                >
                  {p.featured && (
                    <span
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: a.color }}
                    >
                      Most Popular
                    </span>
                  )}
                  <h3
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Syne', sans-serif", color: a.color }}
                  >
                    {p.tier}
                  </h3>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "rgba(248,248,248,0.7)" }}
                  >
                    {p.tagline}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(248,248,248,0.45)" }}
                  >
                    {p.details}
                  </p>
                </div>
              );
            })}
          </div>
          <p
            className="text-center text-sm mb-6"
            style={{
              color: "rgba(248,248,248,0.45)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Custom pricing based on industry, competition, and goals. Book a
            free call to get a quote.
          </p>
          <div className="text-center">
            <button
              type="button"
              onClick={goContact}
              data-ocid="seo.pricing_cta_button"
              className="inline-flex items-center gap-2 min-h-[52px] px-8 py-3.5 rounded-full font-semibold text-base"
              style={{
                background: "linear-gradient(135deg, #0066ff, #9b30ff)",
                color: "#fff",
                fontFamily: "'Syne', sans-serif",
                boxShadow: "0 0 30px rgba(0,102,255,0.4)",
                transition: "box-shadow 0.3s, transform 0.3s",
                touchAction: "manipulation",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
              }}
            >
              Get Your Free SEO Audit →
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section-padding px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #0d0a1a 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-white text-center mb-10">
            SEO <span className="gradient-text-blue-purple">FAQ</span>
          </h2>
          <div>
            {FAQS.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      <Footer onAdminClick={() => {}} />
    </div>
  );
}
