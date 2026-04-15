import {
  ArrowRight,
  BarChart2,
  CheckCircle2,
  type LucideIcon,
  Star,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

const AUDIT_ITEMS = [
  "Profile & Bio optimization score",
  "Content quality & frequency analysis",
  "Engagement rate benchmarking",
  "Top competitor gap analysis",
  "10 custom content ideas",
  "Hashtag strategy report",
];

const GROWTH_ITEMS = [
  "30-day marketing roadmap",
  "Platform priority recommendation",
  "Budget allocation strategy",
  "Content calendar framework",
  "3 quick-win growth tactics",
  "Free 30-min strategy call",
];

const TRUST_BRANDS = [
  { name: "Lenskart", initial: "L", color: "oklch(0.55 0.25 256)" },
  { name: "Snitch", initial: "S", color: "oklch(0.6 0.24 296)" },
  { name: "Swiggy", initial: "Sw", color: "oklch(0.65 0.2 65)" },
  { name: "Arata", initial: "A", color: "oklch(0.55 0.25 256)" },
];

const WA_BASE = "https://wa.me/917857905819?text=";

interface OfferCardProps {
  icon: LucideIcon;
  heading: string;
  description: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
  accentBorderClass: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  tagBg: string;
  glowClass: string;
  index: number;
}

function OfferCard({
  icon: Icon,
  heading,
  description,
  items,
  ctaLabel,
  ctaHref,
  accentBorderClass,
  accentColor,
  gradientFrom,
  gradientTo,
  glowClass,
  index,
}: OfferCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="flex-1 min-w-0"
    >
      <div
        className={`glass-card h-full flex flex-col gap-6 p-7 lg:p-8 relative overflow-hidden ${accentBorderClass}`}
        style={{
          background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
        data-ocid={`lead_magnet.card.${index + 1}`}
      >
        {/* FREE Badge */}
        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-black tracking-widest"
          style={{
            background: accentColor,
            color: "#0a0a0a",
          }}
        >
          FREE
        </div>

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${accentColor}1a` }}
        >
          <Icon className="w-7 h-7" color={accentColor} />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-2xl font-bold text-white pr-16">
            {heading}
          </h3>
          <p className="section-subheading text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* What you get */}
        <div className="flex flex-col gap-2.5 flex-1">
          <p
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: accentColor }}
          >
            What you get:
          </p>
          <ul className="flex flex-col gap-2">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm text-white/80"
              >
                <CheckCircle2
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: accentColor }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-2">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full font-semibold text-sm text-[#0a0a0a] transition-smooth ${glowClass}`}
            style={{
              background: accentColor,
            }}
            data-ocid={`lead_magnet.cta_button.${index + 1}`}
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-center text-xs text-white/40">
            No commitment. No credit card. Just growth.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function LeadMagnet() {
  return (
    <section
      id="lead-magnet"
      className="section-padding relative overflow-hidden"
      data-ocid="lead_magnet.section"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15"
          style={{ background: "oklch(0.55 0.25 256 / 0.5)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-15"
          style={{ background: "oklch(0.65 0.2 65 / 0.5)" }}
        />
        <div className="grid-pattern absolute inset-0 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{
              background: "oklch(0.65 0.2 65 / 0.12)",
              color: "oklch(0.75 0.2 65)",
              border: "1px solid oklch(0.65 0.2 65 / 0.25)",
            }}
          >
            Free Offer — No Catch
          </motion.span>
          <h2 className="section-heading text-white mb-4">
            Get Your{" "}
            <span className="gradient-text-gold">Free Marketing Blueprint</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            No fluff. No sales pitch. Just a data-backed plan to grow your brand
            — for free.
          </p>
        </motion.div>

        {/* Offer cards */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-8 mb-8 md:mb-14">
          <OfferCard
            icon={BarChart2}
            heading="Free Instagram Audit"
            description="We'll analyze your Instagram account — content strategy, engagement rate, audience quality, hashtag performance, and competitor benchmarking. You'll get a personalized PDF report with actionable fixes."
            items={AUDIT_ITEMS}
            ctaLabel="Claim Your Free Audit →"
            ctaHref={`${WA_BASE}${encodeURIComponent("Hi, I'd like to claim my Free Instagram Audit!")}`}
            accentBorderClass="border-glow"
            accentColor="oklch(0.55 0.25 256)"
            gradientFrom="oklch(0.55 0.25 256 / 0.1)"
            gradientTo="oklch(0.55 0.25 256 / 0.02)"
            tagBg="bg-primary/10 text-primary"
            glowClass="glow-blue"
            index={0}
          />
          <OfferCard
            icon={TrendingUp}
            heading="Free Growth Plan"
            description="Tell us about your brand and we'll craft a 30-day custom growth roadmap — covering paid ads, organic content, influencer strategy, and SEO priorities tailored specifically for your niche and budget."
            items={GROWTH_ITEMS}
            ctaLabel="Get Your Free Plan →"
            ctaHref={`${WA_BASE}${encodeURIComponent("Hi, I'd like to get my Free Growth Plan!")}`}
            accentBorderClass="border-glow-gold"
            accentColor="oklch(0.65 0.2 65)"
            gradientFrom="oklch(0.65 0.2 65 / 0.1)"
            gradientTo="oklch(0.65 0.2 65 / 0.02)"
            tagBg="bg-accent/10 text-accent"
            glowClass="glow-gold"
            index={1}
          />
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-5"
          data-ocid="lead_magnet.trust_bar"
        >
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <Star className="w-4 h-4 fill-[oklch(0.65_0.2_65)] text-[oklch(0.65_0.2_65)]" />
            <span>Join 100+ brands who&apos;ve scaled with BrandHype</span>
            <Star className="w-4 h-4 fill-[oklch(0.65_0.2_65)] text-[oklch(0.65_0.2_65)]" />
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {TRUST_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect"
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-[#0a0a0a] flex-shrink-0"
                  style={{ background: brand.color }}
                >
                  {brand.initial}
                </div>
                <span className="text-sm font-medium text-white/70">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
