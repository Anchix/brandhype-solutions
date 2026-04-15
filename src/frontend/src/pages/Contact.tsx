import { useState } from "react";

const services = [
  "SEO & Search Marketing",
  "PPC & Paid Advertising",
  "Social Media Marketing",
  "Influencer Marketing",
  "Performance Marketing",
  "Content Marketing",
  "Branding & Identity",
  "Email Marketing",
  "Video Marketing",
  "Affiliate Marketing",
  "AI-Driven Marketing Audits",
  "Full Brand Scaling",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const fieldStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10,
  padding: "14px 16px",
  color: "#f8f8f8",
  fontSize: 15,
  fontFamily: "Inter, sans-serif",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

function focusOn(el: HTMLElement) {
  el.style.borderColor = "rgba(0,102,255,0.6)";
  el.style.boxShadow = "0 0 0 3px rgba(0,102,255,0.15)";
}
function blurOff(el: HTMLElement) {
  el.style.borderColor = "rgba(255,255,255,0.1)";
  el.style.boxShadow = "none";
}

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  submittedAt: string;
}

function saveSubmission(form: FormState) {
  const stored = localStorage.getItem("bh_contact_submissions");
  let list: ContactSubmission[] = [];
  if (stored) {
    try {
      list = JSON.parse(stored) as ContactSubmission[];
    } catch {
      /* ignore */
    }
  }
  const newEntry: ContactSubmission = {
    id: list.length > 0 ? Math.max(...list.map((s) => s.id)) + 1 : 1,
    name: form.name,
    email: form.email,
    phone: form.phone,
    service: form.service,
    message: form.message,
    submittedAt: new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    }),
  };
  list.unshift(newEntry);
  localStorage.setItem("bh_contact_submissions", JSON.stringify(list));
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const setField = (field: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Save to localStorage for admin access
    saveSubmission(form);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,102,255,0.08) 0%, rgba(155,48,255,0.06) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className="text-center mb-8 sm:mb-14"
          data-ocid="contact.section_header"
        >
          <h2 className="section-heading text-foreground mb-5">
            Let&apos;s{" "}
            <span className="gradient-text-blue-purple">Scale Your Brand</span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto text-sm sm:text-lg">
            Ready to transform your brand? Let&apos;s build something
            extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left — Form */}
          <div className="glass-card p-5 sm:p-8" data-ocid="contact.form_panel">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center py-16 gap-6 text-center"
                data-ocid="contact.success_state"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl"
                  style={{
                    background: "rgba(0,102,255,0.15)",
                    border: "2px solid rgba(0,102,255,0.4)",
                    boxShadow: "0 0 30px rgba(0,102,255,0.3)",
                  }}
                >
                  ✓
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">
                  Message Sent!
                </h3>
                <p
                  className="font-body text-base"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Thank you! We'll reach out within 24 hours.
                </p>
                <button
                  type="button"
                  data-ocid="contact.reset_button"
                  onClick={() => {
                    setForm(initialForm);
                    setSubmitted(false);
                  }}
                  className="mt-2 min-h-[48px] px-6 py-3 rounded-full font-semibold font-body text-sm transition-smooth"
                  style={{
                    background: "rgba(0,102,255,0.15)",
                    border: "1px solid rgba(0,102,255,0.4)",
                    color: "#0066FF",
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 sm:gap-5"
              >
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={form.name}
                  required
                  data-ocid="contact.name_input"
                  onChange={(e) => setField("name")(e.target.value)}
                  style={fieldStyle}
                  onFocus={(e) => focusOn(e.target as HTMLElement)}
                  onBlur={(e) => blurOff(e.target as HTMLElement)}
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={form.email}
                  required
                  data-ocid="contact.email_input"
                  onChange={(e) => setField("email")(e.target.value)}
                  style={fieldStyle}
                  onFocus={(e) => focusOn(e.target as HTMLElement)}
                  onBlur={(e) => blurOff(e.target as HTMLElement)}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  data-ocid="contact.phone_input"
                  onChange={(e) => setField("phone")(e.target.value)}
                  style={fieldStyle}
                  onFocus={(e) => focusOn(e.target as HTMLElement)}
                  onBlur={(e) => blurOff(e.target as HTMLElement)}
                />

                <select
                  value={form.service}
                  data-ocid="contact.service_select"
                  onChange={(e) => setField("service")(e.target.value)}
                  style={{
                    ...fieldStyle,
                    appearance: "none",
                    cursor: "pointer",
                  }}
                  onFocus={(e) => focusOn(e.target as HTMLElement)}
                  onBlur={(e) => blurOff(e.target as HTMLElement)}
                >
                  <option value="" style={{ background: "#1a1a1a" }}>
                    Service Interest
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s} style={{ background: "#1a1a1a" }}>
                      {s}
                    </option>
                  ))}
                </select>

                <textarea
                  placeholder="Tell us about your brand & goals..."
                  value={form.message}
                  data-ocid="contact.message_textarea"
                  onChange={(e) => setField("message")(e.target.value)}
                  rows={5}
                  style={{ ...fieldStyle, resize: "vertical", minHeight: 120 }}
                  onFocus={(e) => focusOn(e.target as HTMLElement)}
                  onBlur={(e) => blurOff(e.target as HTMLElement)}
                />

                <button
                  type="submit"
                  disabled={submitting}
                  data-ocid="contact.submit_button"
                  className="w-full min-h-[52px] py-4 rounded-xl font-bold font-display text-base tracking-wide text-white transition-smooth"
                  style={{
                    background: "linear-gradient(135deg, #0066FF, #9B30FF)",
                    boxShadow: "0 0 20px rgba(0,102,255,0.4)",
                    opacity: submitting ? 0.8 : 1,
                    touchAction: "manipulation",
                  }}
                  onMouseEnter={(e) => {
                    if (!submitting) {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.boxShadow =
                        "0 0 30px rgba(0,102,255,0.6), 0 0 60px rgba(155,48,255,0.3)";
                      el.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.boxShadow = "0 0 20px rgba(0,102,255,0.4)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {submitting ? "Sending…" : "Start My Growth Journey →"}
                </button>
              </form>
            )}
          </div>

          {/* Right — Contact Info */}
          <div
            className="flex flex-col gap-4 sm:gap-6"
            data-ocid="contact.info_panel"
          >
            <a
              href="mailto:Founder@TheBrandHype.com"
              className="glass-card p-5 sm:p-6 flex items-center gap-4 sm:gap-5 transition-smooth"
              data-ocid="contact.email_card"
              style={{ textDecoration: "none", touchAction: "manipulation" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(0,102,255,0.4)";
                el.style.boxShadow = "0 0 20px rgba(0,102,255,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "";
                el.style.boxShadow = "";
              }}
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                style={{
                  background: "rgba(0,102,255,0.15)",
                  border: "1px solid rgba(0,102,255,0.3)",
                }}
              >
                ✉
              </div>
              <div className="min-w-0">
                <p
                  className="font-body text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: "#0066FF" }}
                >
                  Email Us
                </p>
                <p
                  className="font-body font-medium text-sm sm:text-base truncate"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  Founder@TheBrandHype.com
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/917857905819"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 sm:p-6 flex items-center gap-4 sm:gap-5 transition-smooth"
              data-ocid="contact.whatsapp_card"
              style={{ textDecoration: "none", touchAction: "manipulation" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(37,211,102,0.4)";
                el.style.boxShadow = "0 0 20px rgba(37,211,102,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "";
                el.style.boxShadow = "";
              }}
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                style={{
                  background: "rgba(37,211,102,0.15)",
                  border: "1px solid rgba(37,211,102,0.3)",
                }}
              >
                💬
              </div>
              <div>
                <p
                  className="font-body text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: "#25D366" }}
                >
                  WhatsApp
                </p>
                <p
                  className="font-body font-medium text-sm sm:text-base"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  +91 7857905819
                </p>
              </div>
            </a>

            <div
              className="glass-card p-5 sm:p-6 flex items-center gap-4 sm:gap-5"
              data-ocid="contact.location_card"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0"
                style={{
                  background: "rgba(255,184,0,0.15)",
                  border: "1px solid rgba(255,184,0,0.3)",
                }}
              >
                📍
              </div>
              <div>
                <p
                  className="font-body text-xs font-semibold tracking-widest uppercase mb-1"
                  style={{ color: "#FFB800" }}
                >
                  Location
                </p>
                <p
                  className="font-body font-medium text-sm sm:text-base"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  Pune, India
                </p>
              </div>
            </div>

            <div
              className="glass-card p-5 sm:p-6"
              data-ocid="contact.social_panel"
            >
              <p
                className="font-body text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Follow Us
              </p>
              <div className="flex gap-4">
                {[
                  {
                    label: "LinkedIn",
                    icon: "in",
                    href: "https://linkedin.com/company/brandhype-solutions",
                    color: "#0A66C2",
                  },
                  {
                    label: "Instagram",
                    icon: "ig",
                    href: "https://instagram.com/brandhype",
                    color: "#E1306C",
                  },
                  {
                    label: "Twitter",
                    icon: "tw",
                    href: "https://twitter.com/brandhype",
                    color: "#1DA1F2",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    data-ocid={`contact.${social.label.toLowerCase()}_link`}
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-bold font-display text-sm transition-smooth"
                    style={{
                      background: `${social.color}20`,
                      border: `1px solid ${social.color}40`,
                      color: social.color,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.boxShadow = `0 0 15px ${social.color}50`;
                      el.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.boxShadow = "";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
