import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

function navigateTo(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("routechange"));
}

const SERVICES = [
  {
    icon: "📊",
    title: "Social Media Strategy & Audit",
    desc: "Before we post a single thing, we audit your current channels, analyze your competitors, and map out a 90-day content and growth strategy. Every content pillar is tied to a specific audience segment and business outcome.",
    accent: "blue" as const,
  },
  {
    icon: "🎨",
    title: "Content Creation & Management",
    desc: "Our in-house team handles everything — scripts, design, copywriting, captions, hashtag research, and scheduling. We produce content that's native to each platform and feels like it belongs in the feed, not like an ad.",
    accent: "purple" as const,
  },
  {
    icon: "💬",
    title: "Community Management",
    desc: "Responding to comments and DMs is not a nice-to-have — it's how Indian consumers decide whether to trust a brand. We manage your community like a relationship, not a ticketing system.",
    accent: "gold" as const,
  },
  {
    icon: "📸",
    title: "Instagram Marketing India",
    desc: "Reels strategy, Stories, Collabs, UGC campaigns, and influencer tie-ins — we build Instagram presence for brands looking to dominate visual storytelling in the Indian market.",
    accent: "blue" as const,
  },
  {
    icon: "💼",
    title: "LinkedIn Marketing India",
    desc: "B2B lead generation, founder-led content, company page growth, and LinkedIn Ads — for brands targeting Indian SMBs, startups, and enterprise decision-makers.",
    accent: "purple" as const,
  },
  {
    icon: "🚀",
    title: "Paid Social Amplification",
    desc: "Meta Ads, LinkedIn Ads, and YouTube Ads — we amplify your best organic content and run targeted paid campaigns to reach exactly the right Indian audience at the right moment.",
    accent: "gold" as const,
  },
];

const PLATFORMS = [
  {
    icon: "📸",
    name: "Instagram",
    detail: "Reels, Stories, Feed, Collabs, DMs",
    color: "#E1306C",
  },
  {
    icon: "💼",
    name: "LinkedIn",
    detail: "Company page, founder content, B2B outreach",
    color: "#0077B5",
  },
  {
    icon: "▶️",
    name: "YouTube",
    detail: "Shorts strategy, long-form scripting, SEO for YouTube",
    color: "#FF0000",
  },
  {
    icon: "👥",
    name: "Facebook",
    detail: "Community groups, local targeting, event promotion",
    color: "#1877F2",
  },
  {
    icon: "🐦",
    name: "Twitter/X",
    detail: "Real-time brand voice, industry conversations",
    color: "#1DA1F2",
  },
];

const FAQS = [
  {
    q: "How many posts per week do you publish?",
    a: "It depends on the platform and your goals. Typically: Instagram 4–5x/week (including Reels), LinkedIn 3–4x/week, Facebook 3x/week. We focus on quality and consistency over volume.",
  },
  {
    q: "Do you create the content or do we?",
    a: "We handle everything — concept, design, copy, caption, hashtags. You review and approve before anything goes live. We make revisions until it's exactly right.",
  },
  {
    q: "Can you manage both organic content and paid ads?",
    a: "Yes, and we recommend it. Organic builds trust; paid amplifies reach. Our integrated approach means the same strategy drives both, eliminating the coordination gap most brands struggle with.",
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
        data-ocid="smm.faq.toggle"
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
            background: "rgba(155,48,255,0.15)",
            color: "#9b30ff",
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

export default function ServiceSocialMedia() {
  useEffect(() => {
    document.title =
      "Social Media Marketing Agency India | BrandHype Solutions Mumbai";
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
            "linear-gradient(180deg, #0a0a0a 0%, #0a080e 60%, #0a0a0a 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-12"
            style={{
              background: "radial-gradient(circle, #9b30ff, transparent)",
            }}
          />
          <div
            className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-10"
            style={{
              background: "radial-gradient(circle, #0066ff, transparent)",
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
            data-ocid="smm.back_button"
          >
            ← Back to Home
          </button>
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full"
            style={{
              color: "#9b30ff",
              background: "rgba(155,48,255,0.12)",
              border: "1px solid rgba(155,48,255,0.3)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Social Media Marketing India
          </span>
          <h1 className="section-heading text-white mb-6">
            Social Media Marketing Agency in India —{" "}
            <span className="gradient-text-blue-purple">
              Built for Brands That Want to Be Remembered
            </span>
          </h1>
          <p
            className="text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8"
            style={{
              color: "rgba(248,248,248,0.6)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Not just posts. Not just likes. A content and community system that
            turns your social media into your biggest sales channel.
          </p>
          <p
            className="text-sm sm:text-base mb-10 max-w-2xl mx-auto"
            style={{
              color: "rgba(248,248,248,0.5)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            BrandHype Solutions is a social media marketing agency based in
            Mumbai, India. We manage social media for D2C brands, SaaS
            companies, and consumer businesses across Instagram, LinkedIn,
            YouTube, Facebook, and Twitter/X — with one goal: make your brand
            impossible to scroll past.
          </p>
          <button
            type="button"
            onClick={goContact}
            data-ocid="smm.hero_cta_button"
            className="inline-flex items-center gap-2 min-h-[52px] px-8 py-3.5 rounded-full font-semibold text-base"
            style={{
              background: "linear-gradient(135deg, #9b30ff, #0066ff)",
              color: "#fff",
              fontFamily: "'Syne', sans-serif",
              boxShadow:
                "0 0 30px rgba(155,48,255,0.4), 0 0 60px rgba(0,102,255,0.2)",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
              touchAction: "manipulation",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(155,48,255,0.6), 0 0 80px rgba(0,102,255,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(155,48,255,0.4), 0 0 60px rgba(0,102,255,0.2)";
            }}
          >
            Request a Social Media Audit →
          </button>
        </div>
      </section>

      {/* Differentiators */}
      <section
        className="section-padding px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #0d0a1a 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-white mb-8 text-center">
            What We Do{" "}
            <span className="gradient-text-blue-purple">Differently</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                id: "cultural",
                text: "Content that speaks to Indian audiences: cultural nuance, regional context, trend awareness",
              },
              {
                id: "platform",
                text: "Platform-specific strategy — what works on Instagram won't work on LinkedIn",
              },
              {
                id: "reviews",
                text: "Weekly performance reviews tied to your business goals, not just engagement metrics",
              },
              {
                id: "integrated",
                text: "Integrated paid + organic approach for maximum reach with minimum waste",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 rounded-xl p-4"
                style={{
                  background: "rgba(155,48,255,0.06)",
                  border: "1px solid rgba(155,48,255,0.2)",
                }}
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: "rgba(155,48,255,0.2)",
                    color: "#9b30ff",
                    border: "1px solid rgba(155,48,255,0.4)",
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

      {/* Services */}
      <section className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading text-white text-center mb-3">
            Our Social Media{" "}
            <span className="gradient-text-blue-purple">Services</span>
          </h2>
          <p
            className="text-center mb-10"
            style={{
              color: "rgba(248,248,248,0.55)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Full-service social media management across every platform.
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
                "linear-gradient(135deg, rgba(255,184,0,0.07), rgba(155,48,255,0.07))",
              border: "1px solid rgba(255,184,0,0.25)",
              boxShadow: "0 0 40px rgba(255,184,0,0.08)",
            }}
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">🚀</span>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{
                  color: "rgba(248,248,248,0.75)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                A Mumbai-based consumer brand had 2,100 Instagram followers and
                flat engagement. Within 90 days of working with us, they hit
                18,000 followers, 4.2% engagement rate, and generated ₹8.4L in
                sales directly attributed to Instagram.
              </p>
            </div>
            <button
              type="button"
              onClick={goResults}
              data-ocid="smm.case_study_link"
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

      {/* Platforms */}
      <section className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-white text-center mb-10">
            Platforms{" "}
            <span className="gradient-text-blue-purple">We Manage</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PLATFORMS.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <span className="text-3xl block mb-2">{p.icon}</span>
                <p
                  className="font-bold text-sm mb-1"
                  style={{ fontFamily: "'Syne', sans-serif", color: "#f8f8f8" }}
                >
                  {p.name}
                </p>
                <p
                  className="text-xs leading-snug"
                  style={{ color: "rgba(248,248,248,0.45)" }}
                >
                  {p.detail}
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
            Social Media <span className="gradient-text-blue-purple">FAQ</span>
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
              data-ocid="smm.bottom_cta_button"
              className="inline-flex items-center gap-2 min-h-[52px] px-8 py-3.5 rounded-full font-semibold text-base"
              style={{
                background: "linear-gradient(135deg, #9b30ff, #0066ff)",
                color: "#fff",
                fontFamily: "'Syne', sans-serif",
                boxShadow: "0 0 30px rgba(155,48,255,0.4)",
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
              Request a Social Media Audit →
            </button>
          </div>
        </div>
      </section>

      <Footer onAdminClick={() => {}} />
    </div>
  );
}
