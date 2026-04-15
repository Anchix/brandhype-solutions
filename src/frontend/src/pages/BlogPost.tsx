import { SAMPLE_POSTS, navigateTo, toSlug } from "@/pages/Blog";
import type { BlogPost as BlogPostType } from "@/pages/Blog";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import { useEffect, useState } from "react";

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

const CATEGORY_COLORS: Record<string, string> = {
  Strategy: "#0066FF",
  Branding: "#9B30FF",
  Performance: "#FFB800",
  Influencer: "#FF6B9D",
  "Social Media": "#00C853",
  SEO: "#00D4FF",
  Growth: "#FF7A00",
  "AI Marketing": "#0066FF",
  General: "#9B30FF",
};

function getCategoryColor(cat: string): string {
  return CATEGORY_COLORS[cat] ?? CATEGORY_COLORS.General;
}

function renderContent(content: string) {
  // Simple markdown-like renderer for bold and paragraph breaks
  const paragraphs = content.split(/\n\n+/);
  return paragraphs.map((para) => {
    const stableKey = para.slice(0, 40).replace(/\s+/g, "_");
    if (para.startsWith("**") && para.endsWith("**") && para.length > 4) {
      const text = para.slice(2, -2);
      return (
        <h3
          key={stableKey}
          className="font-display font-bold text-lg sm:text-xl mt-8 mb-3"
          style={{ color: "#f8f8f8" }}
        >
          {text}
        </h3>
      );
    }

    // Inline bold
    const parts = para.split(/\*\*(.+?)\*\*/g);
    const rendered = parts.map((part) =>
      // odd-indexed parts (every 2nd) are bold — split gives [plain, bold, plain, bold, ...]
      parts.indexOf(part) % 2 === 1 ? (
        <strong key={`b_${part.slice(0, 20)}`} style={{ color: "#f0f0f0" }}>
          {part}
        </strong>
      ) : (
        part
      ),
    );

    return (
      <p
        key={stableKey}
        className="leading-relaxed text-sm sm:text-base mb-4"
        style={{ color: "rgba(255,255,255,0.72)" }}
      >
        {rendered}
      </p>
    );
  });
}

export default function BlogPost() {
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const slug = window.location.pathname
      .replace("/blog/", "")
      .replace(/^\/|\/$/g, "");

    // Try localStorage first (admin-published posts)
    let allPosts: BlogPostType[] = SAMPLE_POSTS;
    const stored = localStorage.getItem("bh_blog_posts");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as BackendPost[];
        const published = parsed.filter((p) => p.status === "published");
        if (published.length > 0) {
          allPosts = published.map((p) => ({
            id: p.id,
            title: p.title,
            excerpt: p.excerpt || p.content.slice(0, 200),
            content: p.content,
            author: p.author || "BrandHype Team",
            tags: p.tags
              ? p.tags
                  .split(",")
                  .map((t) => t.trim())
                  .filter(Boolean)
              : [p.category],
            readTime: p.readTime || "5 min read",
            date: p.publishDate,
            category: p.category,
            featuredImage: p.featuredImage || undefined,
          }));
        }
      } catch {
        /* use sample */
      }
    }

    const found = allPosts.find((p) => toSlug(p.title) === slug);
    if (found) {
      setPost(found);
      document.title = `${found.title} | BrandHype Blog`;
    } else {
      setNotFound(true);
    }
  }, []);

  if (notFound) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4 pt-24"
        style={{ background: "#080808" }}
        data-ocid="blogpost.not_found"
      >
        <p
          className="font-display font-black text-4xl mb-4"
          style={{ color: "#f8f8f8" }}
        >
          404
        </p>
        <p className="text-white/40 mb-8">Article not found.</p>
        <button
          type="button"
          onClick={() => navigateTo("/blog")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-200 hover:gap-3"
          style={{ background: "linear-gradient(135deg, #0066FF, #9B30FF)" }}
          data-ocid="blogpost.back_to_blog_button"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </button>
      </div>
    );
  }

  if (!post) {
    return (
      <div
        className="min-h-screen flex items-center justify-center pt-24"
        style={{ background: "#080808" }}
        data-ocid="blogpost.loading_state"
      >
        <div className="w-8 h-8 rounded-full border-2 border-[#0066FF] border-t-transparent animate-spin" />
      </div>
    );
  }

  const categoryColor = getCategoryColor(post.category);

  return (
    <div
      className="min-h-screen"
      style={{ background: "#080808" }}
      data-ocid="blogpost.page"
    >
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "rgba(0,102,255,0.06)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[300px] rounded-full blur-[100px]"
          style={{ background: "rgba(155,48,255,0.04)" }}
        />
        <div className="absolute inset-0 dot-pattern opacity-10" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        {/* Back button */}
        <button
          type="button"
          onClick={() => navigateTo("/blog")}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:gap-3"
          style={{
            background: "rgba(255,255,255,0.05)",
            color: "rgba(255,255,255,0.6)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          data-ocid="blogpost.back_to_blog_button"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </button>

        {/* Category + tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide"
            style={{
              background: `${categoryColor}20`,
              color: categoryColor,
              border: `1px solid ${categoryColor}50`,
            }}
          >
            {post.category}
          </span>
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs"
              style={{
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6"
          style={{ color: "#f8f8f8" }}
          data-ocid="blogpost.title"
        >
          {post.title}
        </h1>

        {/* Meta */}
        <div
          className="flex flex-wrap items-center gap-4 text-xs mb-8 pb-8 border-b"
          style={{
            color: "rgba(255,255,255,0.4)",
            borderColor: "rgba(255,255,255,0.07)",
          }}
        >
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            <span style={{ color: "rgba(255,255,255,0.65)" }}>
              {post.author}
            </span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        {/* Featured image */}
        {post.featuredImage && (
          <div className="rounded-2xl overflow-hidden mb-10 aspect-video">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
              data-ocid="blogpost.featured_image"
            />
          </div>
        )}

        {/* Excerpt */}
        <p
          className="text-base sm:text-lg leading-relaxed mb-8 font-medium"
          style={{ color: "rgba(255,255,255,0.6)" }}
          data-ocid="blogpost.excerpt"
        >
          {post.excerpt}
        </p>

        {/* Divider */}
        <div
          className="w-16 h-1 rounded-full mb-8"
          style={{
            background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor}44)`,
          }}
        />

        {/* Article body */}
        <div className="prose-custom" data-ocid="blogpost.content">
          {post.content ? (
            renderContent(post.content)
          ) : (
            <p style={{ color: "rgba(255,255,255,0.5)" }}>{post.excerpt}</p>
          )}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 rounded-2xl p-8 border relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,102,255,0.07), rgba(155,48,255,0.05))",
            borderColor: "rgba(0,102,255,0.2)",
          }}
          data-ocid="blogpost.cta_section"
        >
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] pointer-events-none"
            style={{ background: "rgba(0,102,255,0.12)" }}
          />
          <div className="relative">
            <h3
              className="font-display font-black text-xl sm:text-2xl mb-3"
              style={{ color: "#f8f8f8" }}
            >
              Ready to scale your brand?
            </h3>
            <p
              className="text-sm sm:text-base mb-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              BrandHype builds the performance marketing systems, creator
              partnerships, and brand strategies that 10x growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  navigateTo("/");
                  setTimeout(() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #0066FF, #9B30FF)",
                  boxShadow: "0 0 20px rgba(0,102,255,0.4)",
                }}
                data-ocid="blogpost.contact_cta_button"
              >
                Let&apos;s Scale Your Brand →
              </button>
              <button
                type="button"
                onClick={() => navigateTo("/blog")}
                className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:text-white"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                data-ocid="blogpost.more_articles_button"
              >
                More Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
