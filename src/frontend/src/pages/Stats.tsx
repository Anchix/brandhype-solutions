import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  accentColor: string;
}

const stats: StatItem[] = [
  {
    value: 50,
    suffix: "+",
    label: "Successful Campaigns",
    accentColor: "#0066FF",
  },
  { value: 15, suffix: "M+", label: "Reach Generated", accentColor: "#9B30FF" },
  { value: 300, suffix: "%", label: "Average ROI", accentColor: "#FFB800" },
  {
    value: 6,
    suffix: "+",
    label: "Years of Excellence",
    accentColor: "#0066FF",
  },
  { value: 100, suffix: "+", label: "Brands Scaled", accentColor: "#9B30FF" },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    accentColor: "#FFB800",
  },
];

function useCountUp(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return count;
}

function StatCard({ stat, started }: { stat: StatItem; started: boolean }) {
  const count = useCountUp(stat.value, 1800, started);

  return (
    <div
      className="glass-card card-hover relative overflow-hidden p-6 sm:p-8 flex flex-col gap-3 sm:gap-4"
      data-ocid={`stats.card.${stat.label.toLowerCase().replace(/\s+/g, "_")}`}
      style={{ borderTop: `4px solid ${stat.accentColor}` }}
    >
      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${stat.accentColor}80, transparent)`,
          boxShadow: `0 0 12px ${stat.accentColor}`,
        }}
      />
      {/* Background accent glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: stat.accentColor }}
      />

      <div
        className="text-4xl sm:text-5xl font-bold font-display relative z-10"
        style={{ color: stat.accentColor }}
      >
        {count}
        <span>{stat.suffix}</span>
      </div>
      <p
        className="font-body font-medium text-sm sm:text-base relative z-10"
        style={{ color: "rgba(255,255,255,0.7)" }}
      >
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section
      id="results"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#080808" }}
      />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,102,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="text-center mb-8 sm:mb-16"
          data-ocid="stats.section_header"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 accent-gold font-body">
            Impact
          </span>
          <h2 className="section-heading text-foreground mb-5">
            Numbers Don&apos;t{" "}
            <span className="gradient-text-blue-purple">Lie</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto text-sm sm:text-lg">
            Every metric earned through strategy, creativity, and relentless
            execution.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          data-ocid="stats.grid"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
