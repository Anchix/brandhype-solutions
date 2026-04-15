import { ArrowRight, Layers, ShoppingBag, User } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useRef } from "react";

const NICHES = [
  {
    icon: ShoppingBag,
    headline: "D2C Brands",
    description:
      "From 0 to ₹1 Crore+ in monthly revenue. We specialize in building profitable D2C brands with performance marketing, influencer-driven awareness, and conversion-first funnels. Lenskart, Snitch, Arata, Solura — we've done it.",
    tags: [
      "Performance Marketing",
      "Influencer Campaigns",
      "D2C Funnels",
      "CAC Optimization",
    ],
    accent: "blue",
    accentColor: "oklch(0.55 0.25 256)",
    accentClass: "accent-blue",
    borderClass: "border-glow",
    glowClass: "glow-blue",
    gradientFrom: "oklch(0.55 0.25 256 / 0.12)",
    gradientTo: "oklch(0.55 0.25 256 / 0.03)",
    tagBg: "bg-[oklch(0.55_0.25_256_/_0.15)] text-[oklch(0.7_0.2_256)]",
    iconBg: "bg-[oklch(0.55_0.25_256_/_0.12)] text-[oklch(0.65_0.25_256)]",
  },
  {
    icon: User,
    headline: "Personal Brands",
    description:
      "Founders, creators, and thought leaders — we build personal brands that command authority and attract the right audience. From LinkedIn dominance to Instagram authority, we make you the category leader.",
    tags: [
      "LinkedIn Strategy",
      "Content Marketing",
      "Brand Positioning",
      "Audience Growth",
    ],
    accent: "purple",
    accentColor: "oklch(0.6 0.24 296)",
    accentClass: "accent-purple",
    borderClass: "border-glow-purple",
    glowClass: "glow-purple",
    gradientFrom: "oklch(0.6 0.24 296 / 0.12)",
    gradientTo: "oklch(0.6 0.24 296 / 0.03)",
    tagBg: "bg-[oklch(0.6_0.24_296_/_0.15)] text-[oklch(0.75_0.2_296)]",
    iconBg: "bg-[oklch(0.6_0.24_296_/_0.12)] text-[oklch(0.7_0.22_296)]",
  },
  {
    icon: Layers,
    headline: "SaaS Businesses",
    description:
      "Reduce CAC, improve MRR, and build a brand that sells itself. We help SaaS companies create demand through thought leadership, community building, and full-funnel digital strategies that compound over time.",
    tags: [
      "MRR Growth",
      "Demand Generation",
      "B2B Marketing",
      "Community Building",
    ],
    accent: "gold",
    accentColor: "oklch(0.65 0.2 65)",
    accentClass: "accent-gold",
    borderClass: "border-glow-gold",
    glowClass: "glow-gold",
    gradientFrom: "oklch(0.65 0.2 65 / 0.12)",
    gradientTo: "oklch(0.65 0.2 65 / 0.03)",
    tagBg: "bg-[oklch(0.65_0.2_65_/_0.15)] text-[oklch(0.75_0.18_65)]",
    iconBg: "bg-[oklch(0.65_0.2_65_/_0.12)] text-[oklch(0.7_0.2_65)]",
  },
];

function NicheCard({
  niche,
  index,
}: {
  niche: (typeof NICHES)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(10px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
    }
  }, []);

  const Icon = niche.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="flex-1 min-w-0"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`glass-card h-full flex flex-col gap-6 p-7 lg:p-8 cursor-default ${niche.borderClass} transition-all duration-300 hover:scale-[1.02]`}
        style={{
          transition: "transform 0.15s ease, box-shadow 0.3s ease",
          background: `linear-gradient(135deg, ${niche.gradientFrom}, ${niche.gradientTo})`,
        }}
        data-ocid={`niche.card.${index + 1}`}
      >
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${niche.iconBg} flex-shrink-0`}
        >
          <Icon className="w-7 h-7" style={{ color: niche.accentColor }} />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 flex-1">
          <h3
            className={`font-display text-2xl font-bold ${niche.accentClass}`}
          >
            {niche.headline}
          </h3>
          <p className="section-subheading text-sm leading-relaxed flex-1">
            {niche.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {niche.tags.map((tag) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 + 0.3 }}
              className={`px-3 py-1 rounded-full text-xs font-semibold ${niche.tagBg}`}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function NicheDown() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="niche"
      className="section-padding relative overflow-hidden"
      data-ocid="niche.section"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
          style={{ background: "oklch(0.55 0.25 256 / 0.4)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15"
          style={{ background: "oklch(0.65 0.2 65 / 0.4)" }}
        />
        <div className="dot-pattern absolute inset-0 opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{
              background: "oklch(0.55 0.25 256 / 0.12)",
              color: "oklch(0.65 0.25 256)",
              border: "1px solid oklch(0.55 0.25 256 / 0.25)",
            }}
          >
            Who We Work With
          </motion.span>
          <h2 className="section-heading text-white mb-4">
            Built For Brands{" "}
            <span className="gradient-text-blue-purple">
              That Mean Business
            </span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            We don&apos;t work with everyone — we work with the right ones.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-8 mb-8 md:mb-14">
          {NICHES.map((niche, i) => (
            <NicheCard key={niche.headline} niche={niche} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <button
            type="button"
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm transition-smooth glow-blue"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.25 256), oklch(0.6 0.24 296))",
            }}
            data-ocid="niche.work_with_us_button"
          >
            Work With Us
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
