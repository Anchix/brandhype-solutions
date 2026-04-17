import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

function navigateTo(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("routechange"));
}

const WHO_FOR = [
  {
    id: "founders",
    text: "Founders building a new brand and want to do it right from day one",
  },
  {
    id: "established",
    text: "Established brands that have grown but feel their identity hasn't kept up",
  },
  {
    id: "entering",
    text: "Companies entering new Indian markets or verticals and need positioning clarity",
  },
  {
    id: "d2c",
    text: "D2C brands competing in crowded categories where differentiation is survival",
  },
  {
    id: "capital",
    text: "Businesses raising capital and need a compelling, consistent brand narrative",
  },
];

const SERVICES = [
  {
    icon: "🎯",
    title: "Brand Positioning & Differentiation",
    desc: "We audit your competitive landscape, your customer perceptions, and your internal brand assets — then craft a positioning strategy that makes you the obvious choice in your category. Not 'better than competitors,' but 'different in a way competitors can't copy easily.'",
    accent: "gold" as const,
  },
  {
    icon: "🏗️",
    title: "Brand Architecture",
    desc: "If you have multiple products, services, or sub-brands, you need a clear system that organizes them without confusing your customers. We design brand architectures that scale as your business grows.",
    accent: "blue" as const,
  },
  {
    icon: "🔬",
    title: "Target Audience Mapping",
    desc: "Deep customer personas built for the Indian market — income segments, digital behavior, cultural context, buying triggers, and barriers. The kind of audience clarity that makes every subsequent marketing decision faster and more confident.",
    accent: "purple" as const,
  },
  {
    icon: "🗣️",
    title: "Brand Voice & Messaging Framework",
    desc: "Your brand voice is how you sound on every channel — website, ads, social, pitch decks, customer service. We define your tone, key messages, and a messaging hierarchy so every piece of communication feels like the same brand.",
    accent: "gold" as const,
  },
  {
    icon: "🌏",
    title: "Market Entry Strategy (India)",
    desc: "For international brands entering India or Indian brands expanding to new states or cities — we build go-to-market plans that account for India's incredible diversity in language, culture, purchasing behavior, and competitive context.",
    accent: "blue" as const,
  },
  {
    icon: "📋",
    title: "Brand Audit",
    desc: "A comprehensive review of your existing brand — visual identity, messaging, digital presence, customer perceptions, and competitive position. Delivered as a strategic report with prioritized recommendations and a roadmap.",
    accent: "purple" as const,
  },
];

const TIMELINE = [
  {
    weeks: "Week 1–2",
    phase: "Discovery",
    detail: "Stakeholder interviews, customer research, competitive audit",
  },
  {
    weeks: "Week 3–4",
    phase: "Strategy Development",
    detail: "Positioning options, messaging frameworks, audience maps",
  },
  {
    weeks: "Week 5–6",
    phase: "Refinement",
    detail: "Working sessions, iteration, final strategy documentation",
  },
  {
    weeks: "Week 7+",
    phase: "Activation Support",
    detail: "Helping your team and other agencies execute against the strategy",
  },
];

const FAQS = [
  {
    q: "How is brand strategy different from branding or design?",
    a: "Branding and design are the execution. Brand strategy is the thinking that makes the execution effective. Strategy answers: Who are we for? What do we stand for? Why should anyone choose us? Design answers: What do we look like? How do we speak? You need both — but strategy comes first.",
  },
  {
    q: "Do you also handle the implementation after the strategy?",
    a: "Yes. For clients who want it, we offer an integrated engagement where our performance marketing, SEO, and social media teams execute against the brand strategy we've built together. This ensures perfect alignment across every channel.",
  },
  {
    q: "What kind of results can I expect from brand strategy work?",
    a: "Brand strategy is a foundational investment — the results show up across every other marketing activity you do. Clients typically see improvements in: ad click-through rates (clearer messaging), sales conversion rates (stronger positioning), and hiring quality (better employer brand). The full ROI compounds over 12–24 months.",
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
        data-ocid="brand.faq.toggle"
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
            background: "rgba(255,184,0,0.15)",
            color: "#ffb800",
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

export default function ServiceBrandStrategy() {
  useEffect(() => {
    document.title =
      "Brand Strategy Agency India | Premium Brand Positioning | BrandHype Solutions";
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

      {/* Hero — Premium positioning */}
      <section
        className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #0a0a0a 0%, #0e0b08 60%, #0a0a0a 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-12"
            style={{
              background: "radial-gradient(circle, #ffb800, transparent)",
            }}
          />
          <div
            className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-10"
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
            data-ocid="brand.back_button"
          >
            ← Back to Home
          </button>
          {/* Premium badge */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
              style={{
                color: "#ffb800",
                background: "rgba(255,184,0,0.12)",
                border: "1px solid rgba(255,184,0,0.3)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Premium · Retainer-Based · Limited Spots
            </span>
          </div>
          <h1 className="section-heading text-white mb-6">
            Brand Strategy Agency in India —{" "}
            <span className="gradient-text-gold">
              For Brands Ready to Own Their Category
            </span>
          </h1>
          <p
            className="text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8"
            style={{
              color: "rgba(248,248,248,0.6)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Positioning. Architecture. Market entry. We help ambitious Indian
            brands build the strategic foundation that makes every marketing
            rupee work harder.
          </p>
          <div
            className="max-w-2xl mx-auto mb-10 rounded-2xl p-5"
            style={{
              background: "rgba(255,184,0,0.05)",
              border: "1px solid rgba(255,184,0,0.2)",
            }}
          >
            <p
              className="text-sm leading-relaxed mb-3"
              style={{
                color: "rgba(248,248,248,0.65)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Brand strategy is not a logo refresh. It's the blueprint that
              determines how your brand is perceived, who it speaks to, what it
              stands for, and why it wins. BrandHype Solutions works with
              founders, CMOs, and leadership teams on engagements that transform
              how a brand occupies space in the Indian market.
            </p>
            <p
              className="text-sm font-medium"
              style={{
                color: "rgba(255,184,0,0.8)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              This is a premium, retainer-based engagement. We work with a small
              number of brand strategy clients at a time to ensure depth of
              focus.
            </p>
          </div>
          <button
            type="button"
            onClick={goContact}
            data-ocid="brand.hero_cta_button"
            className="inline-flex items-center gap-2 min-h-[52px] px-8 py-3.5 rounded-full font-semibold text-base"
            style={{
              background: "linear-gradient(135deg, #ffb800, #ff7b00)",
              color: "#0a0a0a",
              fontFamily: "'Syne', sans-serif",
              boxShadow:
                "0 0 30px rgba(255,184,0,0.4), 0 0 60px rgba(255,184,0,0.2)",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              touchAction: "manipulation",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(255,184,0,0.6), 0 0 80px rgba(255,184,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(255,184,0,0.4), 0 0 60px rgba(255,184,0,0.2)";
            }}
          >
            Book a Discovery Call →
          </button>
        </div>
      </section>

      {/* Who This Is For */}
      <section
        className="section-padding px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #0e0b08 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-white mb-8 text-center">
            Who This <span className="gradient-text-gold">Is For</span>
          </h2>
          <div className="space-y-3">
            {WHO_FOR.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 rounded-xl p-4"
                style={{
                  background: "rgba(255,184,0,0.05)",
                  border: "1px solid rgba(255,184,0,0.2)",
                }}
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{
                    background: "rgba(255,184,0,0.2)",
                    color: "#ffb800",
                    border: "1px solid rgba(255,184,0,0.4)",
                  }}
                >
                  ◆
                </span>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(248,248,248,0.75)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading text-white text-center mb-3">
            Our Brand Strategy{" "}
            <span className="gradient-text-gold">Services</span>
          </h2>
          <p
            className="text-center mb-10"
            style={{
              color: "rgba(248,248,248,0.55)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Strategic engagements built for brands that play to win.
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
          background: "linear-gradient(180deg, #0a0a0a 0%, #0e0b08 100%)",
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
                "linear-gradient(135deg, rgba(255,184,0,0.08), rgba(155,48,255,0.06))",
              border: "1px solid rgba(255,184,0,0.3)",
              boxShadow: "0 0 40px rgba(255,184,0,0.1)",
            }}
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">🏆</span>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{
                  color: "rgba(248,248,248,0.75)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                A Series A SaaS startup was struggling to differentiate in a
                crowded market. After a 6-week brand strategy engagement, they
                had a clear positioning, a new messaging framework, and a
                go-to-market narrative that helped them close their next round
                and triple inbound demo requests.
              </p>
            </div>
            <button
              type="button"
              onClick={goResults}
              data-ocid="brand.case_study_link"
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

      {/* Engagement Timeline */}
      <section className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-white text-center mb-10">
            How We <span className="gradient-text-gold">Engage</span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-5 top-6 bottom-6 w-px"
              style={{
                background: "linear-gradient(180deg, #ffb800, #9b30ff)",
              }}
            />
            <div className="space-y-6">
              {TIMELINE.map((t, idx) => (
                <div
                  key={t.weeks}
                  className="relative flex items-start gap-6 pl-14"
                >
                  <div
                    className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,184,0,0.2), rgba(155,48,255,0.2))",
                      border: "1px solid rgba(255,184,0,0.4)",
                      color: "#ffb800",
                    }}
                  >
                    {idx + 1}
                  </div>
                  <div
                    className="flex-1 rounded-2xl p-5"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <span
                      className="text-xs font-bold tracking-widest uppercase"
                      style={{
                        color: "#ffb800",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {t.weeks}
                    </span>
                    <h3
                      className="font-bold text-base mt-1 mb-1"
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        color: "#f8f8f8",
                      }}
                    >
                      {t.phase}
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        color: "rgba(248,248,248,0.55)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {t.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p
            className="mt-8 text-sm text-center"
            style={{
              color: "rgba(248,248,248,0.5)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Engagements are structured as retainers or project-based depending
            on scope. Pricing is shared after a 30-minute discovery call where
            we understand your specific needs.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section-padding px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #0e0b08 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-white text-center mb-10">
            Brand Strategy <span className="gradient-text-gold">FAQ</span>
          </h2>
          <div>
            {FAQS.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={goContact}
              data-ocid="brand.final_cta_button"
              className="inline-flex items-center gap-2 min-h-[52px] px-8 py-3.5 rounded-full font-semibold text-base"
              style={{
                background: "linear-gradient(135deg, #ffb800, #ff7b00)",
                color: "#0a0a0a",
                fontFamily: "'Syne', sans-serif",
                boxShadow: "0 0 30px rgba(255,184,0,0.4)",
                transition: "transform 0.3s",
                touchAction: "manipulation",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
              }}
            >
              Book Your Discovery Call — Limited Spots Available →
            </button>
          </div>
        </div>
      </section>

      <Footer onAdminClick={() => {}} />
    </div>
  );
}
