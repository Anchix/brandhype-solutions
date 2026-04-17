import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

// ─── Particle Field ──────────────────────────────────────────────────────────

interface ParticleFieldProps {
  mouseX: number;
  mouseY: number;
}

function ParticleField({ mouseX, mouseY }: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null);
  const timeRef = useRef(0);

  const { positions, colors } = useMemo(() => {
    const count = 2800;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const blue = new THREE.Color("#0066ff");
    const white = new THREE.Color("#c8d8ff");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 28;
      pos[i3 + 1] = (Math.random() - 0.5) * 16;
      pos[i3 + 2] = (Math.random() - 0.5) * 12;
      const isBlue = Math.random() < 0.15;
      const c = isBlue ? blue : white;
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: 0.045,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [],
  );

  useFrame((_, delta) => {
    timeRef.current += delta * 0.35;
    if (!meshRef.current) return;
    const t = timeRef.current;
    meshRef.current.rotation.y = Math.sin(t * 0.12) * 0.18 + mouseX * 0.08;
    meshRef.current.rotation.x = Math.sin(t * 0.08) * 0.1 + mouseY * 0.05;
    const posAttr = meshRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < arr.length; i += 3) {
      arr[i + 1] += Math.sin(t + i * 0.01) * 0.0008;
      arr[i] += Math.cos(t * 0.7 + i * 0.008) * 0.0004;
    }
    posAttr.needsUpdate = true;
  });

  return <points ref={meshRef} geometry={geometry} material={material} />;
}

function CanvasFallback() {
  return <div className="absolute inset-0 bg-[#0a0a0a]" />;
}

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

function FadeUp({ children, delay = 0, className = "" }: FadeUpProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(id);
  }, [delay]);

  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition:
          "opacity 0.75s cubic-bezier(0.4,0,0.2,1), transform 0.75s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {children}
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div
      className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none"
      style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
    >
      <span
        className="text-xs tracking-[0.2em] uppercase font-body hidden sm:block"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        Scroll
      </span>
      <svg
        width="18"
        height="28"
        viewBox="0 0 18 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="16"
          height="26"
          rx="8"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
        />
        <circle
          cx="9"
          cy="8"
          r="2.5"
          fill="rgba(0, 102, 255, 0.85)"
          style={{ animation: "scrollDot 2s ease-in-out infinite" }}
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    setMouse({
      x: (clientX / width - 0.5) * 2,
      y: -(clientY / height - 0.5) * 2,
    });
  }

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes scrollDot {
          0%, 100% { cy: 8; opacity: 1; }
          50% { cy: 16; opacity: 0.4; }
        }
      `}</style>

      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Three.js particle canvas */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Suspense fallback={<CanvasFallback />}>
            <Canvas
              camera={{ position: [0, 0, 8], fov: 70 }}
              dpr={[1, 1.5]}
              gl={{
                antialias: false,
                alpha: true,
                powerPreference: "high-performance",
              }}
              style={{ background: "#0a0a0a" }}
            >
              <ParticleField mouseX={mouse.x} mouseY={mouse.y} />
            </Canvas>
          </Suspense>
        </div>

        {/* Gradient overlays */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          aria-hidden="true"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,102,255,0.07) 0%, transparent 65%),
              radial-gradient(ellipse 60% 40% at 70% 30%, rgba(155,48,255,0.06) 0%, transparent 60%),
              linear-gradient(to bottom, transparent 55%, #0a0a0a 100%)
            `,
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto pt-24 pb-24">
          {/* Eyebrow */}
          <FadeUp delay={100}>
            <p
              className="font-display text-xs sm:text-sm tracking-[0.32em] uppercase mb-5 font-semibold"
              style={{ color: "#0066ff" }}
            >
              BrandHype Solutions
            </p>
          </FadeUp>

          {/* Main headline */}
          <FadeUp delay={300}>
            <h1
              className="section-heading mb-6"
              style={{
                fontSize: "clamp(2.2rem, 7.5vw, 5.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              India&rsquo;s Growth Partner <br className="hidden sm:block" />
              for{" "}
              <span
                className="gradient-text-blue-purple glow-text"
                style={{ display: "inline-block" }}
              >
                Bold Brands.
              </span>
            </h1>
          </FadeUp>

          {/* Subtitle */}
          <FadeUp delay={520}>
            <p
              className="section-subheading max-w-2xl mx-auto mb-10 text-sm sm:text-lg"
              style={{ color: "rgba(255,255,255,0.62)" }}
            >
              Performance marketing, brand strategy, and social media that
              actually converts —{" "}
              <span style={{ color: "rgba(255,255,255,0.85)" }}>
                built for Indian D2C, SaaS, and consumer brands.
              </span>
            </p>
          </FadeUp>

          {/* CTA buttons */}
          <FadeUp delay={720}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
              {/* Primary CTA */}
              <button
                type="button"
                data-ocid="hero.primary_button"
                onClick={() => scrollTo("contact")}
                className="group relative w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-full font-display font-semibold text-sm sm:text-base text-white overflow-hidden transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #0066ff 0%, #4d4dff 100%)",
                  boxShadow:
                    "0 0 24px rgba(0,102,255,0.45), 0 4px 20px rgba(0,102,255,0.25)",
                  touchAction: "manipulation",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.boxShadow =
                    "0 0 40px rgba(0,102,255,0.7), 0 8px 32px rgba(0,102,255,0.4)";
                  el.style.transform = "translateY(-2px) scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.boxShadow =
                    "0 0 24px rgba(0,102,255,0.45), 0 4px 20px rgba(0,102,255,0.25)";
                  el.style.transform = "";
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Your Free Brand Audit
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                data-ocid="hero.secondary_button"
                onClick={() => scrollTo("case-studies")}
                className="group w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-full font-display font-semibold text-sm sm:text-base text-white transition-all duration-300 glass-effect"
                style={{
                  border: "1px solid rgba(255,255,255,0.22)",
                  touchAction: "manipulation",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.borderColor = "rgba(0,102,255,0.6)";
                  el.style.background = "rgba(0,102,255,0.12)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.borderColor = "rgba(255,255,255,0.22)";
                  el.style.background = "";
                  el.style.transform = "";
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  See Our Results
                  <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">
                    ↓
                  </span>
                </span>
              </button>
            </div>
          </FadeUp>

          {/* Trust badge strip */}
          <FadeUp delay={950}>
            <div className="mt-12 sm:mt-14 flex items-center justify-center gap-5 sm:gap-10 flex-wrap">
              {[
                { value: "50+", label: "Campaigns" },
                { value: "6+", label: "Top Brands" },
                { value: "10×", label: "Avg. ROI" },
                { value: "3+", label: "Years" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <span
                    className="font-display text-2xl sm:text-3xl gradient-text-blue-purple"
                    style={{ fontWeight: 800 }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-xs tracking-widest uppercase font-body"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        <ScrollIndicator />
      </section>
    </>
  );
}
