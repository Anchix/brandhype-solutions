import { useState } from "react";

interface ClientData {
  name: string;
  logoUrl: string;
  color: string;
  bg: string;
  initial: string;
}

const clients: ClientData[] = [
  {
    name: "Lenskart",
    logoUrl: "/assets/images/clients/lenskart.svg",
    color: "#0066FF",
    bg: "rgba(0,102,255,0.12)",
    initial: "L",
  },
  {
    name: "Unstop",
    logoUrl: "/assets/images/clients/unstop.svg",
    color: "#6C3DE1",
    bg: "rgba(108,61,225,0.12)",
    initial: "U",
  },
  {
    name: "Swiggy",
    logoUrl: "/assets/images/clients/swiggy.svg",
    color: "#FC8019",
    bg: "rgba(252,128,25,0.12)",
    initial: "S",
  },
  {
    name: "Arata",
    logoUrl: "/assets/images/clients/arata.svg",
    color: "#00C853",
    bg: "rgba(0,200,83,0.12)",
    initial: "A",
  },
  {
    name: "Solura Cosmetic",
    logoUrl: "/assets/images/clients/solura.svg",
    color: "#20BFA9",
    bg: "rgba(32,191,169,0.12)",
    initial: "SC",
  },
  {
    name: "Snitch",
    logoUrl: "/assets/images/clients/snitch.svg",
    color: "#FF1744",
    bg: "rgba(255,23,68,0.12)",
    initial: "SN",
  },
];

function ClientLogo({ client }: { client: ClientData }) {
  const [imgError, setImgError] = useState(false);
  const showFallback = !client.logoUrl || imgError;

  return (
    <div
      className="flex flex-col items-center gap-2.5 mx-6 sm:mx-8 cursor-default select-none group"
      style={{
        filter: "grayscale(1) brightness(0.7)",
        transition: "filter 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.filter = "grayscale(0) brightness(1)";
        el.style.transform = "scale(1.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.filter = "grayscale(1) brightness(0.7)";
        el.style.transform = "scale(1)";
      }}
    >
      {/* Logo container */}
      <div
        className="w-20 h-16 sm:w-24 sm:h-18 rounded-xl flex items-center justify-center overflow-hidden border"
        style={{
          backgroundColor: showFallback ? client.bg : "rgba(255,255,255,0.04)",
          borderColor: showFallback
            ? `${client.color}40`
            : "rgba(255,255,255,0.08)",
          boxShadow: `0 0 0px ${client.color}00`,
          transition: "box-shadow 0.3s ease, border-color 0.3s ease",
          padding: showFallback ? "0" : "8px",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.boxShadow = `0 0 20px ${client.color}40`;
          el.style.borderColor = `${client.color}60`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.boxShadow = `0 0 0px ${client.color}00`;
          el.style.borderColor = showFallback
            ? `${client.color}40`
            : "rgba(255,255,255,0.08)";
        }}
      >
        {showFallback ? (
          /* Styled text fallback */
          <div
            className="w-full h-full flex items-center justify-center font-display font-bold text-lg"
            style={{ color: client.color }}
          >
            {client.initial}
          </div>
        ) : (
          <img
            src={client.logoUrl}
            alt={`${client.name} logo`}
            className="max-h-10 sm:max-h-12 max-w-full object-contain"
            onError={() => setImgError(true)}
            loading="lazy"
            crossOrigin="anonymous"
          />
        )}
      </div>

      {/* Brand name */}
      <span
        className="text-xs font-body font-medium text-center leading-tight whitespace-nowrap"
        style={{ color: "rgba(255,255,255,0.7)" }}
      >
        {client.name}
      </span>
    </div>
  );
}

export default function Clients() {
  const tripled = [...clients, ...clients, ...clients].map((c, i) => ({
    ...c,
    key: `r1-${i}`,
  }));
  const tripledRev = [
    ...[...clients].reverse(),
    ...[...clients].reverse(),
    ...[...clients].reverse(),
  ].map((c, i) => ({ ...c, key: `r2-${i}` }));

  return (
    <section id="clients" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(155,48,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 accent-purple font-body">
            Our Clients
          </span>
          <h2 className="section-heading text-foreground mb-5">
            Brands We&apos;ve{" "}
            <span className="gradient-text-blue-purple">Scaled</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Trusted by industry leaders across India&apos;s most competitive
            sectors.
          </p>
        </div>
      </div>

      {/* Marquee Row 1 — scrolls left */}
      <div
        className="relative overflow-hidden mb-8"
        data-ocid="clients.marquee_row_1"
      >
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, #0a0a0a 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(270deg, #0a0a0a 0%, transparent 100%)",
          }}
        />
        <div
          className="flex items-center py-4"
          style={{
            animation: "marquee-left 30s linear infinite",
            width: "max-content",
          }}
        >
          {tripled.map((client) => (
            <ClientLogo key={client.key} client={client} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — scrolls right */}
      <div
        className="relative overflow-hidden"
        data-ocid="clients.marquee_row_2"
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, #0a0a0a 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(270deg, #0a0a0a 0%, transparent 100%)",
          }}
        />
        <div
          className="flex items-center py-4"
          style={{
            animation: "marquee-right 36s linear infinite",
            width: "max-content",
          }}
        >
          {tripledRev.map((client) => (
            <ClientLogo key={client.key} client={client} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
