import { useEffect, useRef } from "react";

const values = ["Innovation", "Integrity", "Transparency"];

function OrbitSphere() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let angle = 0;
    const animate = () => {
      angle += 0.4;
      if (containerRef.current) {
        containerRef.current.style.transform = `rotateY(${angle}deg) rotateX(${angle * 0.3}deg)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const rings = [
    { size: 240, color: "#0066FF", opacity: 0.9, rotX: 0, rotY: 0 },
    { size: 200, color: "#9B30FF", opacity: 0.75, rotX: 60, rotY: 20 },
    { size: 165, color: "#FFB800", opacity: 0.6, rotX: -40, rotY: 60 },
    { size: 130, color: "#0066FF", opacity: 0.5, rotX: 80, rotY: -30 },
    { size: 95, color: "#9B30FF", opacity: 0.4, rotX: -70, rotY: 45 },
  ];

  return (
    <div
      className="flex items-center justify-center w-full"
      style={{ height: 260 }}
    >
      <div
        style={{
          width: 260,
          height: 260,
          position: "relative",
          perspective: 800,
        }}
      >
        <div
          ref={containerRef}
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
          }}
        >
          {rings.map((ring) => (
            <div
              key={`ring-${ring.size}`}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: ring.size,
                height: ring.size,
                marginTop: -ring.size / 2,
                marginLeft: -ring.size / 2,
                borderRadius: "50%",
                border: `2px solid ${ring.color}`,
                opacity: ring.opacity,
                boxShadow: `0 0 15px ${ring.color}60, inset 0 0 15px ${ring.color}20`,
                transform: `rotateX(${ring.rotX}deg) rotateY(${ring.rotY}deg)`,
              }}
            />
          ))}
          {/* Core orb */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 52,
              height: 52,
              marginTop: -26,
              marginLeft: -26,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 35%, #9B30FF, #0066FF)",
              boxShadow: "0 0 30px #9B30FF80, 0 0 60px #0066FF40",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div
        className="absolute top-0 right-0 w-2/3 h-full"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(155,48,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — 3D Sphere (hidden on very small screens, shown from sm) */}
          <div
            className="flex items-center justify-center order-2 lg:order-1 hidden sm:flex"
            data-ocid="about.visual"
          >
            <div className="relative w-full max-w-xs">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, #0066FF 0%, #9B30FF 50%, transparent 70%)",
                }}
              />
              <OrbitSphere />
            </div>
          </div>

          {/* Right — Text */}
          <div className="order-1 lg:order-2" data-ocid="about.content">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 accent-blue font-body">
              About Us
            </span>
            <h2 className="section-heading text-foreground mb-6">
              Strategic Partners,{" "}
              <span className="gradient-text-blue-purple">
                Not Just Vendors
              </span>
            </h2>
            <p
              className="font-body text-sm sm:text-base leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              BrandHype Solutions is a full-service digital marketing agency
              based in Pune, India. We transform businesses into well-recognized
              brands through innovative, data-driven marketing strategies.
            </p>
            <p
              className="font-body text-sm sm:text-base leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Our campaigns are never cookie-cutter. Every brief gets a bespoke
              strategy — from deep brand discovery to precision performance
              marketing.
            </p>

            {/* AI Callout */}
            <div
              className="glass-card p-5 sm:p-6 mb-8 relative overflow-hidden"
              style={{ borderLeft: "4px solid #0066FF" }}
              data-ocid="about.ai_callout"
            >
              <div
                className="absolute top-0 left-0 bottom-0 w-px pointer-events-none"
                style={{ boxShadow: "0 0 12px #0066FF, 0 0 24px #0066FF80" }}
              />
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold font-body tracking-wider"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,102,255,0.2), rgba(155,48,255,0.2))",
                    border: "1px solid rgba(0,102,255,0.4)",
                    color: "#0066FF",
                  }}
                >
                  ✦ AI-Powered Marketing
                </span>
              </div>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                We integrate AI at every stage — from AI-driven brand audits and
                market analysis to AI-personalized campaign execution. Every
                insight is backed by intelligent data, every strategy refined by
                machine precision.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-wrap gap-3" data-ocid="about.values">
              {values.map((value) => (
                <span
                  key={value}
                  className="px-4 py-2 rounded-full text-sm font-semibold font-body transition-smooth cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.85)",
                    touchAction: "manipulation",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLSpanElement;
                    el.style.borderColor = "#9B30FF80";
                    el.style.boxShadow = "0 0 12px #9B30FF40";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLSpanElement;
                    el.style.borderColor = "rgba(255,255,255,0.15)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
