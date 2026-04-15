import {
  ArrowRight,
  Calendar,
  Clock,
  Mail,
  TrendingUp,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BackendPost {
  id: number;
  title: string;
  category: string;
  featuredImage: string;
  content: string;
  excerpt: string;
  author: string;
  tags: string;
  publishDate: string;
  status: "draft" | "published";
  readTime: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  tags: string[];
  readTime: string;
  date: string;
  category: string;
  featuredImage?: string;
  featured?: boolean;
}

// ─── Category config ──────────────────────────────────────────────────────────

const CATEGORY_CONFIG: Record<
  string,
  { color: string; bg: string; border: string; gradient: string }
> = {
  Strategy: {
    color: "#0066FF",
    bg: "rgba(0,102,255,0.12)",
    border: "rgba(0,102,255,0.35)",
    gradient: "from-[#0066FF]/60 to-[#0044CC]/80",
  },
  Branding: {
    color: "#9B30FF",
    bg: "rgba(155,48,255,0.12)",
    border: "rgba(155,48,255,0.35)",
    gradient: "from-[#9B30FF]/60 to-[#7B10DF]/80",
  },
  Performance: {
    color: "#FFB800",
    bg: "rgba(255,184,0,0.12)",
    border: "rgba(255,184,0,0.35)",
    gradient: "from-[#FFB800]/60 to-[#CC9200]/80",
  },
  Influencer: {
    color: "#FF6B9D",
    bg: "rgba(255,107,157,0.12)",
    border: "rgba(255,107,157,0.35)",
    gradient: "from-[#FF6B9D]/60 to-[#CC4477]/80",
  },
  "Social Media": {
    color: "#00C853",
    bg: "rgba(0,200,83,0.12)",
    border: "rgba(0,200,83,0.35)",
    gradient: "from-[#00C853]/60 to-[#009940]/80",
  },
  SEO: {
    color: "#00D4FF",
    bg: "rgba(0,212,255,0.12)",
    border: "rgba(0,212,255,0.35)",
    gradient: "from-[#00D4FF]/60 to-[#00A8CC]/80",
  },
  Growth: {
    color: "#FF7A00",
    bg: "rgba(255,122,0,0.12)",
    border: "rgba(255,122,0,0.35)",
    gradient: "from-[#FF7A00]/60 to-[#CC6200]/80",
  },
  "AI Marketing": {
    color: "#0066FF",
    bg: "rgba(0,102,255,0.12)",
    border: "rgba(0,102,255,0.35)",
    gradient: "from-[#0066FF]/60 to-[#9B30FF]/60",
  },
  General: {
    color: "#9B30FF",
    bg: "rgba(155,48,255,0.12)",
    border: "rgba(155,48,255,0.35)",
    gradient: "from-[#9B30FF]/60 to-[#0066FF]/60",
  },
};

function getCatConfig(cat: string) {
  return CATEGORY_CONFIG[cat] ?? CATEGORY_CONFIG.General;
}

// Fallback gradient backgrounds per category index
const FALLBACK_GRADIENTS = [
  "linear-gradient(135deg, #0066FF22, #9B30FF44)",
  "linear-gradient(135deg, #9B30FF22, #FFB80044)",
  "linear-gradient(135deg, #FFB80022, #0066FF44)",
  "linear-gradient(135deg, #00D4FF22, #9B30FF44)",
  "linear-gradient(135deg, #FF6B9D22, #9B30FF44)",
  "linear-gradient(135deg, #00C85322, #0066FF44)",
];

// ─── Sample Posts ─────────────────────────────────────────────────────────────

const SAMPLE_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "5 Ways AI is Revolutionizing Digital Marketing in 2025",
    excerpt:
      "Artificial intelligence is no longer a buzzword — it's the backbone of every top-performing campaign. From predictive audience targeting to real-time creative optimization, discover how AI-powered strategies are delivering 3x ROI for D2C brands.",
    author: "Aryan Mehta",
    tags: ["AI Marketing", "Performance", "Automation"],
    readTime: "7 min read",
    date: "Apr 10, 2025",
    category: "AI Marketing",
    featured: true,
  },
  {
    id: 2,
    title: "How Influencer Marketing Drives 10x ROI for D2C Brands",
    excerpt:
      "The right creator partnership can 10x your brand awareness overnight. We break down the exact framework BrandHype uses to identify micro and macro influencers that convert followers into loyal customers.",
    author: "Priya Sharma",
    tags: ["Influencer", "D2C", "ROI"],
    readTime: "9 min read",
    date: "Apr 5, 2025",
    category: "Influencer",
  },
  {
    id: 3,
    title: "Performance Marketing Secrets: From Clicks to Conversions",
    excerpt:
      "Clicks are cheap. Conversions are everything. Our performance team reveals the exact funnel architecture, ad creative formulas, and attribution models that transformed campaigns — turning ₹1 into ₹8 in tracked revenue.",
    author: "Rahul Desai",
    tags: ["Performance", "PPC", "Conversions"],
    readTime: "11 min read",
    date: "Mar 28, 2025",
    category: "Performance",
  },
  {
    id: 4,
    title: "Brand Identity in the Digital Age: Beyond the Logo",
    excerpt:
      "Great branding is more than a color palette. It's the entire sensory experience your audience has with your brand — how cohesive brand identity becomes your most powerful growth lever in a crowded market.",
    author: "Neha Kapoor",
    tags: ["Branding", "Strategy", "Identity"],
    readTime: "6 min read",
    date: "Mar 20, 2025",
    category: "Branding",
  },
  {
    id: 5,
    title: "SEO in 2025: How to Dominate Search with AI-Assisted Content",
    excerpt:
      "Google's algorithm updates have fundamentally changed what it takes to rank. Discover our hybrid approach combining AI-driven content planning with expert human storytelling — ranking 400+ commercial keywords in 90 days.",
    author: "Vikram Singh",
    tags: ["SEO", "Content", "AI"],
    readTime: "8 min read",
    date: "Mar 12, 2025",
    category: "SEO",
  },
  {
    id: 6,
    title: "The Scaling Blueprint: Taking a ₹1Cr Brand to ₹10Cr",
    excerpt:
      "Growth doesn't happen by accident. This post unpacks the 5-stage scaling framework BrandHype uses — covering market positioning, growth channel stacking, retention marketing, and the metrics that separate scaling brands.",
    author: "Aryan Mehta",
    tags: ["Growth", "Strategy", "Scale"],
    readTime: "12 min read",
    date: "Mar 5, 2025",
    category: "Growth",
  },
  {
    id: 7,
    title: "Social Media Mastery: Building Communities That Convert",
    excerpt:
      "Social media isn't just about vanity metrics anymore. Learn how BrandHype builds engaged communities for clients through storytelling frameworks, engagement loops, and platform-native content strategies that drive real revenue.",
    author: "Priya Sharma",
    tags: ["Social Media", "Community", "Content"],
    readTime: "7 min read",
    date: "Feb 28, 2025",
    category: "Social Media",
  },
  {
    id: 8,
    title: "Brand Strategy That Sticks: 7 Principles for Market Leaders",
    excerpt:
      "The difference between brands that dominate and those that disappear comes down to strategy. We break down 7 core brand strategy principles our agency applies to every client engagement from day one.",
    author: "Neha Kapoor",
    tags: ["Branding", "Strategy", "Leadership"],
    readTime: "10 min read",
    date: "Feb 20, 2025",
    category: "Strategy",
  },
];

const CATEGORIES = [
  "All",
  "Strategy",
  "Branding",
  "Performance",
  "Influencer",
  "Social Media",
  "SEO",
  "Growth",
  "AI Marketing",
];

function backendToDisplay(post: BackendPost): BlogPost {
  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt || post.content.slice(0, 200),
    author: post.author || "BrandHype Team",
    tags: post.tags
      ? post.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : [post.category],
    readTime: post.readTime || "5 min read",
    date: post.publishDate,
    category: post.category,
    featuredImage: post.featuredImage || undefined,
  };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FeaturedHero({
  post,
  onClose,
}: { post: BlogPost; onClose: () => void }) {
  const cfg = getCatConfig(post.category);
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl mb-8 cursor-pointer group min-h-[400px] sm:min-h-[500px] flex items-end"
      data-ocid="blog.featured_card"
    >
      {/* Background: image or gradient */}
      {post.featuredImage ? (
        <img
          src={post.featuredImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${cfg.gradient.replace("from-[", "").replace("]/60", "").replace(" to-[", ", ").replace("]/80", "")})`,
          }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${cfg.gradient}`}
            style={{ opacity: 0.6 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(8,8,8,0.3)" }}
          />
          {/* Pattern overlay */}
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>
      )}
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" />
      {/* Content */}
      <div className="relative z-10 p-6 sm:p-10 w-full">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
            style={{
              background: cfg.bg,
              color: cfg.color,
              border: `1px solid ${cfg.border}`,
            }}
          >
            {post.category}
          </span>
          <span
            className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
            style={{
              background: "rgba(255,184,0,0.15)",
              color: "#FFB800",
              border: "1px solid rgba(255,184,0,0.4)",
            }}
          >
            ★ Featured
          </span>
        </div>
        <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white leading-tight mb-3 max-w-3xl">
          {post.title}
        </h1>
        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-5 max-w-2xl line-clamp-2 sm:line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-white/50 text-xs mb-6">
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" /> {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 group-hover:gap-3"
          style={{
            background: "linear-gradient(135deg, #0066FF, #9B30FF)",
            boxShadow: "0 0 24px rgba(0,102,255,0.5)",
          }}
          data-ocid="blog.featured_read_button"
        >
          Read Article <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function ArticleCard({ post, index }: { post: BlogPost; index: number }) {
  const cfg = getCatConfig(post.category);
  const fallbackGradient =
    FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length];
  return (
    <article
      className="group rounded-2xl border border-white/8 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{ background: "rgba(255,255,255,0.025)" }}
      data-ocid={`blog.article.${index + 1}`}
    >
      {/* Image / gradient hero */}
      <div className="aspect-video relative overflow-hidden flex-shrink-0">
        {post.featuredImage ? (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: fallbackGradient }}
          >
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <span
              className="relative z-10 font-display font-black text-4xl sm:text-5xl opacity-30"
              style={{ color: cfg.color }}
            >
              {post.category.slice(0, 1)}
            </span>
          </div>
        )}
        {/* Category badge over image */}
        <div className="absolute top-3 left-3">
          <span
            className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide backdrop-blur-sm"
            style={{
              background: cfg.bg,
              color: cfg.color,
              border: `1px solid ${cfg.border}`,
            }}
          >
            {post.category}
          </span>
        </div>
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{
            background: `linear-gradient(90deg, ${cfg.color}, transparent)`,
          }}
        />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-display font-bold text-base leading-snug mb-2 line-clamp-2 transition-colors duration-200 group-hover:text-[#0066FF]"
          style={{ color: "#f8f8f8" }}
        >
          {post.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
          {post.excerpt}
        </p>
        {/* Footer row */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
          <div className="flex items-center gap-2 min-w-0">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-white"
              style={{
                background: `linear-gradient(135deg, ${cfg.color}, ${cfg.color}88)`,
              }}
            >
              {post.author.charAt(0)}
            </div>
            <span className="text-white/40 text-xs truncate">
              {post.author}
            </span>
          </div>
          <div className="flex items-center gap-3 text-white/30 text-xs flex-shrink-0">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
            <span className="hidden sm:block">{post.date}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function Sidebar({
  posts,
  email,
  setEmail,
  subscribed,
  onSubscribe,
}: {
  posts: BlogPost[];
  email: string;
  setEmail: (v: string) => void;
  subscribed: boolean;
  onSubscribe: (e: React.FormEvent) => void;
}) {
  const topStories = posts.slice(0, 5);
  const trending = [...posts].sort(() => 0.5 - Math.random()).slice(0, 5);
  const categoryCounts = posts.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <aside className="flex flex-col gap-6" data-ocid="blog.sidebar">
      {/* Top Stories */}
      <div
        className="rounded-2xl p-5 border border-white/6"
        style={{ background: "rgba(255,255,255,0.02)" }}
        data-ocid="blog.top_stories_panel"
      >
        <h3
          className="font-display font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2 border-l-2 border-[#0066FF] pl-2"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          <TrendingUp className="w-3.5 h-3.5 text-[#0066FF]" /> Top Stories
        </h3>
        <div className="flex flex-col gap-3">
          {topStories.map((post, i) => {
            const cfg = getCatConfig(post.category);
            return (
              <div
                key={post.id}
                className="flex items-start gap-3 group cursor-pointer"
                data-ocid={`blog.top_story.${i + 1}`}
              >
                <span
                  className="font-display font-black text-xl leading-none flex-shrink-0 w-6 text-center"
                  style={{ color: i < 3 ? cfg.color : "rgba(255,255,255,0.2)" }}
                >
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className="text-xs font-medium leading-snug line-clamp-2 group-hover:text-[#0066FF] transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {post.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px]" style={{ color: cfg.color }}>
                      {post.category}
                    </span>
                    <span className="text-[10px] text-white/30">
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trending Now */}
      <div
        className="rounded-2xl p-5 border border-white/6"
        style={{ background: "rgba(255,255,255,0.02)" }}
        data-ocid="blog.trending_panel"
      >
        <h3
          className="font-display font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2 border-l-2 border-[#9B30FF] pl-2"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          🔥 Trending Now
        </h3>
        <div className="flex flex-col gap-3">
          {trending.map((post, i) => {
            const cfg = getCatConfig(post.category);
            return (
              <div
                key={post.id}
                className="flex items-start gap-3 group cursor-pointer"
                data-ocid={`blog.trending.${i + 1}`}
              >
                <span
                  className="font-display font-black text-xl leading-none flex-shrink-0 w-6 text-center"
                  style={{ color: "rgba(255,255,255,0.15)" }}
                >
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className="text-xs font-medium leading-snug line-clamp-2 group-hover:text-[#9B30FF] transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {post.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px]" style={{ color: cfg.color }}>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-0.5 text-[10px] text-white/30">
                      <Clock className="w-2.5 h-2.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Popular Categories */}
      <div
        className="rounded-2xl p-5 border border-white/6"
        style={{ background: "rgba(255,255,255,0.02)" }}
        data-ocid="blog.popular_categories_panel"
      >
        <h3
          className="font-display font-bold text-sm uppercase tracking-widest mb-4 border-l-2 border-[#FFB800] pl-2"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          Popular Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(categoryCounts).map(([cat, count]) => {
            const cfg = getCatConfig(cat);
            return (
              <span
                key={cat}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 hover:scale-105"
                style={{
                  background: cfg.bg,
                  color: cfg.color,
                  border: `1px solid ${cfg.border}`,
                }}
              >
                {cat}
                <span
                  className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold"
                  style={{ background: `${cfg.color}33`, color: cfg.color }}
                >
                  {count}
                </span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div
        className="rounded-2xl p-5 border border-[#FFB800]/20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,184,0,0.08), rgba(155,48,255,0.06))",
        }}
        data-ocid="blog.newsletter_panel"
      >
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] pointer-events-none"
          style={{ background: "rgba(255,184,0,0.15)" }}
        />
        <div className="relative">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
            style={{
              background: "rgba(255,184,0,0.15)",
              border: "1px solid rgba(255,184,0,0.3)",
            }}
          >
            <Mail className="w-4 h-4" style={{ color: "#FFB800" }} />
          </div>
          <h3
            className="font-display font-bold text-base mb-1"
            style={{ color: "#f8f8f8" }}
          >
            Get Marketing Insights
          </h3>
          <p className="text-white/40 text-xs leading-relaxed mb-4">
            Weekly strategies, growth hacks, and campaign breakdowns — straight
            to your inbox.
          </p>
          {subscribed ? (
            <div
              className="flex items-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold"
              style={{
                background: "rgba(0,200,83,0.1)",
                border: "1px solid rgba(0,200,83,0.3)",
                color: "#00C853",
              }}
              data-ocid="blog.newsletter_success_state"
            >
              ✓ You&apos;re on the list!
            </div>
          ) : (
            <form onSubmit={onSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl px-3 py-2.5 text-sm outline-none transition-smooth"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#f8f8f8",
                }}
                data-ocid="blog.newsletter_email_input"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl text-sm font-bold transition-smooth"
                style={{
                  background: "linear-gradient(135deg, #FFB800, #FF8C00)",
                  color: "#0a0a0a",
                }}
                data-ocid="blog.newsletter_submit_button"
              >
                Subscribe Free →
              </button>
            </form>
          )}
        </div>
      </div>
    </aside>
  );
}

// ─── Main Blog Component ──────────────────────────────────────────────────────

interface BlogProps {
  onClose: () => void;
}

export default function Blog({ onClose }: BlogProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>(SAMPLE_POSTS);
  const overlayRef = useRef<HTMLDivElement>(null);
  const categoryBarRef = useRef<HTMLDivElement>(null);

  // Load posts from localStorage (written by Admin)
  useEffect(() => {
    const stored = localStorage.getItem("bh_blog_posts");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as BackendPost[];
        const published = parsed.filter((p) => p.status === "published");
        if (published.length > 0) setPosts(published.map(backendToDisplay));
      } catch {
        /* fallback */
      }
    }
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const featured = posts.find((p) => p.featured) ?? posts[0];

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  // Main grid excludes the featured post when showing All
  const gridPosts =
    activeCategory === "All"
      ? posts.filter((p) => p.id !== featured?.id)
      : filtered;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  // Derive available categories from actual posts
  const availableCategories = [
    "All",
    ...Array.from(new Set(posts.map((p) => p.category))),
  ];
  const displayCategories = CATEGORIES.filter(
    (c) => c === "All" || availableCategories.includes(c),
  );

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] overflow-y-auto"
      style={{ background: "#080808" }}
      data-ocid="blog.page"
      aria-label="Blog"
    >
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "rgba(0,102,255,0.07)" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[400px] h-[300px] rounded-full blur-[100px]"
          style={{ background: "rgba(155,48,255,0.05)" }}
        />
        <div
          className="absolute bottom-0 left-1/2 w-[500px] h-[300px] rounded-full blur-[100px]"
          style={{ background: "rgba(255,184,0,0.04)" }}
        />
        <div className="absolute inset-0 dot-pattern opacity-15" />
      </div>

      {/* ── Sticky Header ── */}
      <div
        className="sticky top-0 z-20 backdrop-blur-xl border-b border-white/5"
        style={{ background: "rgba(8,8,8,0.92)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              {/* Increased blog header logo: h-12 */}
              <img
                src="/assets/images/brandhype-logo-new.png"
                alt="BrandHype Solutions"
                className="h-12 w-auto object-contain max-w-[180px]"
              />
              <span className="text-white/20 text-sm hidden sm:block">|</span>
              <span className="font-display font-bold text-white/70 text-sm tracking-wide hidden sm:block">
                Insights
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white/60 hover:text-white border border-white/10 hover:border-white/25 text-sm transition-smooth"
              data-ocid="blog.close_button"
              aria-label="Close blog"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Site</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Page Content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        {/* Page heading */}
        <div className="mb-6" data-ocid="blog.hero_section">
          <h1
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl mb-2 leading-tight"
            style={{ color: "#f8f8f8" }}
          >
            Marketing{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #0066FF, #9B30FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Insights
            </span>
          </h1>
          <p className="text-white/40 text-sm sm:text-base">
            Strategies, playbooks, and campaign breakdowns from BrandHype&apos;s
            expert team.
          </p>
        </div>

        {/* ── Featured Hero Article ── */}
        {featured && <FeaturedHero post={featured} onClose={onClose} />}

        {/* ── Sticky Category Filter Bar ── */}
        <div
          className="sticky top-16 z-10 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 mb-6"
          style={{
            background: "rgba(8,8,8,0.9)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div
            ref={categoryBarRef}
            className="flex gap-2 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            data-ocid="blog.category_filters"
          >
            {displayCategories.map((cat) => {
              const cfg = getCatConfig(cat);
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(135deg, #0066FF, #9B30FF)",
                          color: "#fff",
                          boxShadow: "0 0 14px rgba(0,102,255,0.35)",
                        }
                      : {
                          background: "rgba(255,255,255,0.05)",
                          color: isActive
                            ? "#fff"
                            : cat === "All"
                              ? "rgba(255,255,255,0.55)"
                              : cfg.color,
                          border: `1px solid ${cat === "All" ? "rgba(255,255,255,0.1)" : cfg.border}`,
                        }
                  }
                  data-ocid={`blog.filter_${cat.toLowerCase().replace(/\s+/g, "_")}_tab`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Main 3-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left+Center — articles */}
          <div className="lg:col-span-2">
            <h2
              className="font-display font-black text-xl mb-6"
              style={{
                background: "linear-gradient(135deg, #0066FF, #9B30FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {activeCategory === "All"
                ? "Latest Articles"
                : `${activeCategory} Articles`}
            </h2>

            {gridPosts.length === 0 ? (
              <div
                className="py-16 text-center rounded-2xl border border-dashed border-white/10"
                data-ocid="blog.articles_empty_state"
              >
                <p className="font-display font-semibold text-white/40">
                  No articles in this category yet.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveCategory("All")}
                  className="mt-3 text-sm text-[#0066FF] underline underline-offset-2"
                >
                  View all articles
                </button>
              </div>
            ) : (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                data-ocid="blog.articles_list"
              >
                {gridPosts.map((post, i) => (
                  <ArticleCard key={post.id} post={post} index={i} />
                ))}
              </div>
            )}
          </div>

          {/* Right sidebar */}
          <Sidebar
            posts={posts}
            email={email}
            setEmail={setEmail}
            subscribed={subscribed}
            onSubscribe={handleSubscribe}
          />
        </div>
      </div>
    </div>
  );
}
