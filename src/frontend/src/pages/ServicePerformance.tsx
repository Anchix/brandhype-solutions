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
    title: "Google Ads (Search, Display, Shopping, YouTube)",
    desc: "We build Google Ads campaigns that capture high-intent demand in India — people who are already searching for what you sell. From keyword strategy and ad copy to bid management and landing page optimization, we own the full funnel.",
    accent: "blue" as const,
  },
  {
    icon: "📱",
    title: "Meta Ads (Instagram & Facebook)",
    desc: "India has 500M+ Facebook/Instagram users. We help you reach exactly the right ones — through audience research, creative testing, retargeting funnels, and performance-based scaling. We've run Meta campaigns for D2C brands, app installs, lead generation, and ecommerce.",
    accent: "purple" as const,
  },
  {
    icon: "💼",
    title: "LinkedIn Ads (B2B India)",
    desc: "For brands targeting Indian businesses, LinkedIn Ads is the most precise B2B channel available. We run Sponsored Content, Lead Gen Forms, Message Ads, and retargeting — focused on decision-makers in your target accounts.",
    accent: "blue" as const,
  },
  {
    icon: "⚡",
    title: "Conversion Rate Optimisation (CRO)",
    desc: "Getting clicks is only half the job. We audit your landing pages, improve your offer clarity, and A/B test headlines, CTAs, and form designs — so every rupee you spend on ads converts at the highest possible rate.",
    accent: "gold" as const,
  },
  {
    icon: "🔄",
    title: "Remarketing & Retention Campaigns",
    desc: "80% of your website visitors don't convert on their first visit. We build remarketing sequences that bring them back — through Meta Custom Audiences, Google RLSA, and email trigger campaigns.",
    accent: "purple" as const,
  },
];

const WHAT_YOU_GET = [
  {
    id: "manager",
    text: "Dedicated campaign manager — one point of contact who knows your business",
  },
  {
    id: "reports",
    text: "Weekly performance reports in plain language, not agency jargon",
  },
  {
    id: "creative",
    text: "Creative briefs and ad copy included — no extra charge for copy or design",
  },
  {
    id: "calls",
    text: "Monthly strategy calls to review results and plan next-month priorities",
  },
  {
    id: "ownership",
    text: "Full transparency — you own all your ad accounts, always",
  },
];

const FAQS = [
  {
    q: "What's the minimum monthly ad budget you work with?",
    a: "We typically start with a minimum media spend of ₹50,000/month to have enough data for meaningful optimization. Below that, it's hard to reach statistical significance. Our management fee is separate from your media budget.",
  },
  {
    q: "How quickly will I see results from paid ads?",
    a: "Google Search Ads can show results within the first week for high-intent keywords. Meta Ads typically need a 2–4 week learning phase before we start optimizing for scale. You'll see your first meaningful data within 30 days.",
  },
  {
    q: "Do I keep my ad accounts if I stop working with you?",
    a: "Always. We build all campaigns inside your own Google, Meta, and LinkedIn ad accounts. Everything is yours — campaigns, data, creative assets, and audiences. No lock-in.",
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
        data-ocid="perf.faq.toggle"
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

export default function ServicePerformance() {
  useEffect(() => {
    document.title =
      "Performance Marketing Agency India | Google Meta Ads | BrandHype Solutions";
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
            "linear-gradient(180deg, #0a0a0a 0%, #080d14 60%, #0a0a0a 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-15"
            style={{
              background: "radial-gradient(circle, #0066ff, transparent)",
            }}
          />
          <div
            className="absolute bottom-10 right-1/3 w-72 h-72 rounded-full blur-3xl opacity-10"
            style={{
              background: "radial-gradient(circle, #ffb800, transparent)",
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
            data-ocid="perf.back_button"
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
            Performance Marketing India
          </span>
          <h1 className="section-heading text-white mb-6">
            Performance Marketing Agency in India —{" "}
            <span className="gradient-text-blue-purple">
              Every Rupee Tracked, Every Campaign Optimised
            </span>
          </h1>
          <p
            className="text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8"
            style={{
              color: "rgba(248,248,248,0.6)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            We run Google Ads, Meta Ads, and LinkedIn Ads for Indian brands that
            are serious about returns — not just reach.
          </p>
          <p
            className="text-sm sm:text-base mb-10 max-w-2xl mx-auto"
            style={{
              color: "rgba(248,248,248,0.5)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            BrandHype Solutions is a performance marketing agency based in
            Mumbai, India. We manage paid advertising for D2C brands, SaaS
            companies, and consumer businesses with one non-negotiable rule: if
            we can't tie it to revenue, we don't do it.
          </p>
          <button
            type="button"
            onClick={goContact}
            data-ocid="perf.hero_cta_button"
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
            Get a Free Campaign Audit →
          </button>
        </div>
      </section>

      {/* Problem statement */}
      <section
        className="section-padding px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #0d0a1a 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-white mb-6 text-center">
            The Problem with Most{" "}
            <span className="gradient-text-blue-purple">
              Paid Advertising in India
            </span>
          </h2>
          <div
            className="rounded-2xl p-6 sm:p-8 space-y-4"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{
                color: "rgba(248,248,248,0.7)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Most brands running ads in India are burning money on the wrong
              audiences, the wrong creatives, and the wrong objectives — and
              their agency is sending them a report with 'impressions' and
              'reach' as the headline metrics.
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{
                color: "rgba(248,248,248,0.7)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              We obsess over the metrics that matter to your business: cost per
              lead (CPL), cost per acquisition (CPA), return on ad spend (ROAS),
              and lifetime value (LTV). If your ads aren't profitable, they
              aren't working — regardless of how many people saw them.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["CPL", "CPA", "ROAS", "LTV"].map((m) => (
                <span
                  key={m}
                  className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider"
                  style={{
                    background: "rgba(0,102,255,0.15)",
                    color: "#0066ff",
                    border: "1px solid rgba(0,102,255,0.35)",
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading text-white text-center mb-3">
            Our Performance Marketing{" "}
            <span className="gradient-text-blue-purple">Services</span>
          </h2>
          <p
            className="text-center mb-10"
            style={{
              color: "rgba(248,248,248,0.55)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Revenue-linked paid media across every major platform.
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
              <span className="text-2xl">📊</span>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{
                  color: "rgba(248,248,248,0.75)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                A Bangalore-based D2C brand was spending ₹2.5L/month on Meta Ads
                with a 1.1x ROAS. We restructured their campaigns, rebuilt their
                creative library, and tightened audience targeting. Within 45
                days, ROAS was 3.8x on the same budget.
              </p>
            </div>
            <button
              type="button"
              onClick={goResults}
              data-ocid="perf.case_study_link"
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

      {/* What You Get */}
      <section className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-white text-center mb-8">
            What <span className="gradient-text-blue-purple">You Get</span>
          </h2>
          <div className="space-y-3">
            {WHAT_YOU_GET.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 rounded-xl p-4"
                style={{
                  background: "rgba(0,102,255,0.06)",
                  border: "1px solid rgba(0,102,255,0.2)",
                }}
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{
                    background: "rgba(0,102,255,0.2)",
                    color: "#0066ff",
                    border: "1px solid rgba(0,102,255,0.4)",
                  }}
                >
                  ✓
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

      {/* FAQ */}
      <section
        className="section-padding px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #0d0a1a 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-white text-center mb-10">
            Performance Marketing{" "}
            <span className="gradient-text-blue-purple">FAQ</span>
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
              data-ocid="perf.bottom_cta_button"
              className="inline-flex items-center gap-2 min-h-[52px] px-8 py-3.5 rounded-full font-semibold text-base"
              style={{
                background: "linear-gradient(135deg, #0066ff, #9b30ff)",
                color: "#fff",
                fontFamily: "'Syne', sans-serif",
                boxShadow: "0 0 30px rgba(0,102,255,0.4)",
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
              Get a Free Campaign Audit →
            </button>
          </div>
        </div>
      </section>

      <Footer onAdminClick={() => {}} />
    </div>
  );
}
