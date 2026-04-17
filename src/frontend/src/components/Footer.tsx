import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Zap,
} from "lucide-react";

function navigateTo(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("routechange"));
}

interface ServiceItem {
  label: string;
  path?: string;
}

const SERVICES: ServiceItem[] = [
  { label: "SEO Services India", path: "/seo-services-india" },
  { label: "Social Media Marketing", path: "/social-media-marketing-india" },
  { label: "Performance Marketing", path: "/performance-marketing-india" },
  { label: "Brand Strategy", path: "/brand-strategy-india" },
  { label: "LinkedIn Marketing", path: "/linkedin-marketing-india" },
  { label: "Influencer Marketing" },
  { label: "Content Creation" },
  { label: "Campaign Analytics" },
];

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/thebrandhype",
    color: "hover:text-pink-400",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    href: "https://twitter.com/thebrandhype",
    color: "hover:text-blue-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/brandhype-solutions",
    color: "hover:text-blue-500",
  },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

interface FooterProps {
  onAdminClick?: () => void;
}

export default function Footer({ onAdminClick }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" data-ocid="footer">
      {/* Top gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0 bg-[#080808] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-48 bg-secondary/5 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-14">
          {/* Column 1 — Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              type="button"
              onClick={() => scrollTo("hero")}
              className="inline-block mb-5 min-h-[44px]"
              aria-label="BrandHype Solutions home"
              style={{ touchAction: "manipulation" }}
            >
              {/* Increased footer logo size: h-14 sm:h-16 */}
              <img
                src="/assets/images/brandhype-logo-new.png"
                alt="BrandHype Solutions"
                className="h-14 sm:h-16 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const sibling = e.currentTarget
                    .nextElementSibling as HTMLElement | null;
                  if (sibling) sibling.style.display = "block";
                }}
              />
              <span className="hidden font-display font-bold text-xl gradient-text-blue-purple">
                BrandHype Solutions
              </span>
            </button>

            <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-xs">
              India&apos;s premium marketing agency. We craft data-driven
              campaigns that don&apos;t just market—
              <span className="accent-gold font-semibold"> they scale.</span>
            </p>

            <p className="font-display font-bold text-base gradient-text-blue-purple italic mb-6">
              &ldquo;We Don&apos;t Just Market, We Scale.&rdquo;
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-11 h-11 sm:w-10 sm:h-10 rounded-xl glass-effect flex items-center justify-center text-white/40 ${color} transition-smooth hover:scale-110 hover:border-white/20`}
                  data-ocid={`footer.${label.toLowerCase().replace(/[\s/]+/g, "_")}_link`}
                  style={{ touchAction: "manipulation" }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full inline-block" />
              Our Services
            </h3>
            <ul className="space-y-1.5 sm:space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.label}>
                  {service.path ? (
                    <button
                      type="button"
                      onClick={() => navigateTo(service.path!)}
                      className="text-white/50 hover:text-white text-sm transition-smooth flex items-center gap-2 group text-left min-h-[36px] sm:min-h-0"
                      data-ocid={`footer.service_${service.label.toLowerCase().replace(/[&\s]+/g, "_")}_link`}
                      style={{ touchAction: "manipulation" }}
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/60 group-hover:bg-primary group-hover:scale-125 transition-smooth flex-shrink-0" />
                      {service.label}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => scrollTo("services")}
                      className="text-white/50 hover:text-white text-sm transition-smooth flex items-center gap-2 group text-left min-h-[36px] sm:min-h-0"
                      data-ocid={`footer.service_${service.label.toLowerCase().replace(/[&\s]+/g, "_")}_link`}
                      style={{ touchAction: "manipulation" }}
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/60 group-hover:bg-primary group-hover:scale-125 transition-smooth flex-shrink-0" />
                      {service.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Case Studies quick links */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-accent rounded-full inline-block" />
              Case Studies
            </h3>
            <ul className="space-y-1.5 sm:space-y-2.5">
              {[
                { label: "Lenskart — Meme Marketing", anchor: "case-studies" },
                {
                  label: "Arata — Influencer Marketing",
                  anchor: "case-studies",
                },
                { label: "Unstop — Brand Strategy", anchor: "case-studies" },
                { label: "Swiggy — Brand Awareness", anchor: "case-studies" },
                { label: "Snitch — Digital Marketing", anchor: "case-studies" },
                {
                  label: "Solura — Full-Stack Marketing",
                  anchor: "case-studies",
                },
              ].map(({ label, anchor }) => (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(anchor)}
                    className="text-white/50 hover:text-white text-sm transition-smooth flex items-center gap-2 group text-left min-h-[36px] sm:min-h-0"
                    data-ocid={`footer.case_study_${label.split("—")[0].trim().toLowerCase()}_link`}
                    style={{ touchAction: "manipulation" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/60 group-hover:bg-accent group-hover:scale-125 transition-smooth flex-shrink-0" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-secondary rounded-full inline-block" />
              Get in Touch
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:Founder@TheBrandHype.com"
                  className="flex items-start gap-3 text-white/50 hover:text-white transition-smooth group min-h-[44px]"
                  data-ocid="footer.email_link"
                  style={{ touchAction: "manipulation" }}
                >
                  <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-smooth">
                    <Mail className="w-3.5 h-3.5 accent-blue" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/30 mb-0.5">
                      Email
                    </span>
                    <span className="text-sm break-all">
                      Founder@TheBrandHype.com
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+917857905819"
                  className="flex items-start gap-3 text-white/50 hover:text-white transition-smooth group min-h-[44px]"
                  data-ocid="footer.phone_link"
                  style={{ touchAction: "manipulation" }}
                >
                  <span className="w-9 h-9 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-secondary/20 transition-smooth">
                    <Phone className="w-3.5 h-3.5 accent-purple" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/30 mb-0.5">
                      Phone / WhatsApp
                    </span>
                    <span className="text-sm">+91 7857905819</span>
                  </span>
                </a>
              </li>

              <li>
                <div className="flex items-start gap-3 text-white/50">
                  <span className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 accent-gold" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/30 mb-0.5">
                      Address
                    </span>
                    <span className="text-sm">Pune, India</span>
                  </span>
                </div>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="mt-6 inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/20 transition-smooth"
              data-ocid="footer.contact_cta_button"
              style={{ touchAction: "manipulation" }}
            >
              <Zap className="w-4 h-4" />
              Scale Your Brand
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-white/30 text-sm">
            © {year} BrandHype Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-white/20 text-xs">
              Love From BrandHype Solutions
            </p>
            {/* Hidden admin link */}
            <button
              type="button"
              onClick={onAdminClick}
              className="text-white/10 hover:text-white/30 text-xs transition-smooth"
              data-ocid="footer.admin_link"
              aria-label="Admin"
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
