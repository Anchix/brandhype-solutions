import { Button } from "@/components/ui/button";
import type { NavLink } from "@/types";
import { Menu, X, Zap } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Who We Help", href: "#niche" },
  { label: "Clients", href: "#clients" },
  { label: "Results", href: "#case-studies" },
  { label: "Impact", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function navigateTo(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("routechange"));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Sync path on route change
  useEffect(() => {
    const update = () => setCurrentPath(window.location.pathname);
    window.addEventListener("routechange", update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("routechange", update);
      window.removeEventListener("popstate", update);
    };
  }, []);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    const sections = [
      "hero",
      "services",
      "niche",
      "clients",
      "case-studies",
      "results",
      "about",
      "process",
      "lead-magnet",
      "contact",
    ];
    let current = "hero";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 100) current = id;
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollTo = useCallback(
    (href: string) => {
      setIsOpen(false);
      // If not on main page, navigate home first then scroll
      if (currentPath !== "/") {
        navigateTo("/");
        setTimeout(() => {
          const el = document.getElementById(href.replace("#", ""));
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } else {
        const el = document.getElementById(href.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [currentPath],
  );

  const handleOverlayKey = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape" || e.key === "Enter") setIsOpen(false);
  }, []);

  const handleBlogClick = useCallback(() => {
    setIsOpen(false);
    navigateTo("/blog");
  }, []);

  const isBlogActive = currentPath.startsWith("/blog");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isBlogActive
            ? "bg-[rgba(10,10,10,0.97)] backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
        data-ocid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                if (currentPath !== "/") {
                  navigateTo("/");
                } else {
                  scrollTo("#hero");
                }
              }}
              className="flex items-center gap-2 group flex-shrink-0 min-h-[44px] min-w-[44px]"
              data-ocid="navbar.logo_link"
              aria-label="BrandHype Solutions home"
              style={{ touchAction: "manipulation" }}
            >
              <img
                src="/assets/images/brandhype-logo-new.png"
                alt="BrandHype Solutions"
                className="h-10 sm:h-14 w-auto object-contain max-w-[200px] sm:max-w-[260px]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const sibling = e.currentTarget
                    .nextElementSibling as HTMLElement | null;
                  if (sibling) sibling.style.display = "flex";
                }}
              />
              <span className="hidden items-center gap-1.5">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                  style={{
                    background: "linear-gradient(135deg, #0066FF, #9B30FF)",
                  }}
                >
                  BH
                </span>
                <span className="font-display font-bold text-base gradient-text-blue-purple">
                  BrandHype
                </span>
              </span>
            </button>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-0.5 lg:gap-1"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  currentPath === "/" &&
                  activeSection === link.href.replace("#", "");
                return (
                  <button
                    type="button"
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-smooth relative group ${
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                    data-ocid={`navbar.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                    style={{ touchAction: "manipulation" }}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                    )}
                    <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-smooth" />
                  </button>
                );
              })}
              <button
                type="button"
                onClick={handleBlogClick}
                className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-smooth relative group ${
                  isBlogActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
                data-ocid="navbar.blog_link"
                style={{ touchAction: "manipulation" }}
              >
                Blog
                {isBlogActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                )}
                <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-smooth" />
              </button>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="bg-primary text-white hover:bg-primary/90 px-5 lg:px-6 py-2 rounded-full text-sm font-semibold glow-blue transition-smooth flex items-center gap-2 border-0"
                data-ocid="navbar.cta_button"
                style={{ touchAction: "manipulation" }}
              >
                <Zap className="w-4 h-4" />
                Let&apos;s Scale →
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-smooth"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              data-ocid="navbar.hamburger_toggle"
              style={{ touchAction: "manipulation" }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          role="button"
          tabIndex={0}
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden cursor-default"
          onClick={() => setIsOpen(false)}
          onKeyUp={handleOverlayKey}
          aria-label="Close navigation menu"
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-[min(280px,85vw)] bg-[#0d0d0d] border-l border-white/10 flex flex-col md:hidden transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        data-ocid="navbar.mobile_menu"
        aria-label="Mobile navigation"
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 min-h-[68px]">
          <img
            src="/assets/images/brandhype-logo-new.png"
            alt="BrandHype Solutions"
            className="h-10 w-auto object-contain max-w-[160px]"
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-11 h-11 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-smooth flex-shrink-0"
            aria-label="Close menu"
            data-ocid="navbar.mobile_close_button"
            style={{ touchAction: "manipulation" }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {NAV_LINKS.map((link) => {
            const isActive =
              currentPath === "/" &&
              activeSection === link.href.replace("#", "");
            return (
              <button
                type="button"
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`w-full flex items-center px-4 min-h-[52px] rounded-xl text-sm font-medium transition-smooth ${
                  isActive
                    ? "text-white bg-primary/20 border border-primary/30"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
                data-ocid={`navbar.mobile_${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                style={{ touchAction: "manipulation" }}
              >
                {link.label}
              </button>
            );
          })}
          <button
            type="button"
            onClick={handleBlogClick}
            className={`w-full flex items-center px-4 min-h-[52px] rounded-xl text-sm font-medium transition-smooth ${
              isBlogActive
                ? "text-white bg-primary/20 border border-primary/30"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
            data-ocid="navbar.mobile_blog_link"
            style={{ touchAction: "manipulation" }}
          >
            Blog
          </button>
        </nav>

        {/* Mobile CTA */}
        <div className="p-4 border-t border-white/10">
          <Button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="w-full min-h-[52px] bg-primary text-white hover:bg-primary/90 rounded-full font-semibold glow-blue flex items-center justify-center gap-2 border-0"
            data-ocid="navbar.mobile_cta_button"
            style={{ touchAction: "manipulation" }}
          >
            <Zap className="w-4 h-4" />
            Let&apos;s Scale →
          </Button>
        </div>
      </aside>
    </>
  );
}
