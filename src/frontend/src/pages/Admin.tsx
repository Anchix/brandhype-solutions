import {
  AlertTriangle,
  ChevronDown,
  Edit2,
  Eye,
  EyeOff,
  FileText,
  LogOut,
  Plus,
  Save,
  Trash2,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface BlogPost {
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

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  submittedAt: string;
}

const ADMIN_PASSWORD = "Anchi828#69";
const AUTH_KEY = "brandhype_admin_auth";

const CATEGORIES = [
  "SEO",
  "Content Marketing",
  "Social Media",
  "Performance Marketing",
  "Influencer Marketing",
  "Branding",
  "Strategy",
  "Growth",
  "AI Marketing",
  "General",
];

const emptyPost: Omit<BlogPost, "id"> = {
  title: "",
  category: "General",
  featuredImage: "",
  content: "",
  excerpt: "",
  author: "BrandHype Team",
  tags: "",
  publishDate: new Date().toISOString().split("T")[0],
  status: "draft",
  readTime: "5 min read",
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 8,
  padding: "10px 14px",
  color: "#f8f8f8",
  fontSize: 14,
  outline: "none",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function LoginGate({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem(AUTH_KEY, "true");
      onLogin();
    } else {
      setError("Incorrect password. Try again.");
      setPassword("");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ background: "#0a0a0a" }}
    >
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[100px]"
          style={{ background: "rgba(0,102,255,0.08)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-[300px] h-[200px] rounded-full blur-[80px]"
          style={{ background: "rgba(155,48,255,0.06)" }}
        />
      </div>

      <div
        className="relative w-full max-w-sm rounded-2xl p-8"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
        }}
        data-ocid="admin.login_panel"
      >
        {/* Logo — increased: h-12 */}
        <div className="text-center mb-8">
          <img
            src="/assets/images/brandhype-logo-new.png"
            alt="BrandHype"
            className="h-12 w-auto object-contain mx-auto mb-4"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <h1
            className="font-display font-black text-xl"
            style={{ color: "#f8f8f8" }}
          >
            Admin Panel
          </h1>
          <p
            className="text-xs mt-1"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Restricted access — BrandHype Solutions
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="admin-password"
              className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Password
            </label>
            <div className="relative">
              <input
                id="admin-password"
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="Enter admin password"
                required
                style={{ ...inputStyle, paddingRight: 44 }}
                data-ocid="admin.password_input"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                aria-label={showPw ? "Hide password" : "Show password"}
              >
                {showPw ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {error && (
              <p
                className="mt-2 text-xs flex items-center gap-1.5"
                style={{ color: "#FF4444" }}
                data-ocid="admin.login_error_state"
              >
                <AlertTriangle className="w-3 h-3" /> {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-display font-bold text-sm text-white transition-colors mt-2"
            style={{
              background: "linear-gradient(135deg, #0066FF, #9B30FF)",
              boxShadow: "0 0 20px rgba(0,102,255,0.35)",
            }}
            data-ocid="admin.login_submit_button"
          >
            Access Admin →
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Blog Post Form ───────────────────────────────────────────────────────────

function BlogPostForm({
  initial,
  onSave,
  onCancel,
  saving,
}: {
  initial: Omit<BlogPost, "id"> & { id?: number };
  onSave: (data: Omit<BlogPost, "id"> & { id?: number }) => void;
  onCancel: () => void;
  saving: boolean;
}) {
  const [form, setForm] = useState(initial);
  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      data-ocid="admin.blog_form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label
            htmlFor="bf-title"
            className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Title *
          </label>
          <input
            id="bf-title"
            type="text"
            value={form.title}
            required
            onChange={(e) => set("title")(e.target.value)}
            style={inputStyle}
            placeholder="Post title"
            data-ocid="admin.blog_title_input"
          />
        </div>

        <div>
          <label
            htmlFor="bf-category"
            className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Category
          </label>
          <div className="relative">
            <select
              id="bf-category"
              value={form.category}
              onChange={(e) => set("category")(e.target.value)}
              style={{
                ...inputStyle,
                appearance: "none",
                paddingRight: 36,
                cursor: "pointer",
              }}
              data-ocid="admin.blog_category_select"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c} style={{ background: "#1a1a1a" }}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
              style={{ color: "rgba(255,255,255,0.3)" }}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="bf-status"
            className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Status
          </label>
          <div className="relative">
            <select
              id="bf-status"
              value={form.status}
              onChange={(e) =>
                set("status")(e.target.value as "draft" | "published")
              }
              style={{
                ...inputStyle,
                appearance: "none",
                paddingRight: 36,
                cursor: "pointer",
              }}
              data-ocid="admin.blog_status_select"
            >
              <option value="draft" style={{ background: "#1a1a1a" }}>
                Draft
              </option>
              <option value="published" style={{ background: "#1a1a1a" }}>
                Published
              </option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
              style={{ color: "rgba(255,255,255,0.3)" }}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="bf-image"
            className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Featured Image URL
          </label>
          <input
            id="bf-image"
            type="url"
            value={form.featuredImage}
            onChange={(e) => set("featuredImage")(e.target.value)}
            style={inputStyle}
            placeholder="https://example.com/image.jpg"
            data-ocid="admin.blog_image_input"
          />
        </div>

        <div>
          <label
            htmlFor="bf-author"
            className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Author
          </label>
          <input
            id="bf-author"
            type="text"
            value={form.author}
            onChange={(e) => set("author")(e.target.value)}
            style={inputStyle}
            placeholder="BrandHype Team"
            data-ocid="admin.blog_author_input"
          />
        </div>

        <div>
          <label
            htmlFor="bf-readtime"
            className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Read Time
          </label>
          <input
            id="bf-readtime"
            type="text"
            value={form.readTime}
            onChange={(e) => set("readTime")(e.target.value)}
            style={inputStyle}
            placeholder="5 min read"
            data-ocid="admin.blog_readtime_input"
          />
        </div>

        <div>
          <label
            htmlFor="bf-date"
            className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Publish Date
          </label>
          <input
            id="bf-date"
            type="date"
            value={form.publishDate}
            onChange={(e) => set("publishDate")(e.target.value)}
            style={{ ...inputStyle, colorScheme: "dark" }}
            data-ocid="admin.blog_date_input"
          />
        </div>

        <div>
          <label
            htmlFor="bf-tags"
            className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Tags (comma-separated)
          </label>
          <input
            id="bf-tags"
            type="text"
            value={form.tags}
            onChange={(e) => set("tags")(e.target.value)}
            style={inputStyle}
            placeholder="AI Marketing, SEO, Growth"
            data-ocid="admin.blog_tags_input"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="bf-excerpt"
            className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Excerpt
          </label>
          <textarea
            id="bf-excerpt"
            value={form.excerpt}
            onChange={(e) => set("excerpt")(e.target.value)}
            rows={3}
            style={{ ...inputStyle, resize: "vertical", minHeight: 80 }}
            placeholder="Short description (1-2 sentences)..."
            data-ocid="admin.blog_excerpt_textarea"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="bf-content"
            className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Content / Body *
          </label>
          <textarea
            id="bf-content"
            value={form.content}
            required
            onChange={(e) => set("content")(e.target.value)}
            rows={8}
            style={{ ...inputStyle, resize: "vertical", minHeight: 200 }}
            placeholder="Full article content..."
            data-ocid="admin.blog_content_textarea"
          />
        </div>
      </div>

      <div className="flex gap-3 pt-2 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.6)",
          }}
          data-ocid="admin.blog_cancel_button"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-colors"
          style={{
            background: "linear-gradient(135deg, #0066FF, #9B30FF)",
            opacity: saving ? 0.7 : 1,
          }}
          data-ocid="admin.blog_save_button"
        >
          <Save className="w-4 h-4" />
          {saving ? "Saving…" : "Save Post"}
        </button>
      </div>
    </form>
  );
}

// ─── Blog Posts Tab ───────────────────────────────────────────────────────────

function BlogPostsTab() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editPost, setEditPost] = useState<BlogPost | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("bh_blog_posts");
    if (stored) {
      try {
        setPosts(JSON.parse(stored) as BlogPost[]);
      } catch {
        /* ignore */
      }
    }
    setLoading(false);
  }, []);

  const savePosts = (updated: BlogPost[]) => {
    setPosts(updated);
    localStorage.setItem("bh_blog_posts", JSON.stringify(updated));
  };

  const handleSave = (data: Omit<BlogPost, "id"> & { id?: number }) => {
    setSaving(true);
    setTimeout(() => {
      if (data.id !== undefined) {
        savePosts(
          posts.map((p) =>
            p.id === data.id ? ({ ...data, id: data.id } as BlogPost) : p,
          ),
        );
      } else {
        const newId =
          posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
        savePosts([{ ...data, id: newId } as BlogPost, ...posts]);
      }
      setSaving(false);
      setFormOpen(false);
      setEditPost(null);
    }, 400);
  };

  const handleDelete = (id: number) => {
    savePosts(posts.filter((p) => p.id !== id));
    setDeleteConfirm(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2
          className="font-display font-bold text-lg"
          style={{ color: "#f8f8f8" }}
        >
          Blog Posts{" "}
          <span
            className="text-sm font-normal"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            ({posts.length})
          </span>
        </h2>
        {!formOpen && (
          <button
            type="button"
            onClick={() => {
              setEditPost(null);
              setFormOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-colors"
            style={{
              background: "linear-gradient(135deg, #0066FF, #9B30FF)",
              boxShadow: "0 0 15px rgba(0,102,255,0.3)",
            }}
            data-ocid="admin.new_post_button"
          >
            <Plus className="w-4 h-4" /> New Post
          </button>
        )}
      </div>

      {formOpen && (
        <div
          className="rounded-2xl p-6 mb-6"
          style={{
            background: "rgba(0,102,255,0.05)",
            border: "1px solid rgba(0,102,255,0.2)",
          }}
          data-ocid="admin.blog_form_panel"
        >
          <h3
            className="font-display font-bold mb-5"
            style={{ color: "#f8f8f8" }}
          >
            {editPost ? "Edit Post" : "New Post"}
          </h3>
          <BlogPostForm
            initial={editPost ? { ...editPost } : { ...emptyPost }}
            onSave={handleSave}
            onCancel={() => {
              setFormOpen(false);
              setEditPost(null);
            }}
            saving={saving}
          />
        </div>
      )}

      {loading ? (
        <div
          className="py-16 text-center"
          data-ocid="admin.posts_loading_state"
        >
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin mx-auto" />
        </div>
      ) : posts.length === 0 && !formOpen ? (
        <div
          className="py-16 text-center rounded-2xl border border-dashed border-white/10"
          data-ocid="admin.posts_empty_state"
        >
          <FileText
            className="w-12 h-12 mx-auto mb-3"
            style={{ color: "rgba(255,255,255,0.15)" }}
          />
          <p
            className="font-display font-semibold"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            No blog posts yet
          </p>
          <p
            className="text-sm mt-1 mb-4"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Create your first post to get started
          </p>
          <button
            type="button"
            onClick={() => setFormOpen(true)}
            className="px-5 py-2.5 rounded-xl text-sm font-bold text-white"
            style={{ background: "linear-gradient(135deg, #0066FF, #9B30FF)" }}
            data-ocid="admin.posts_empty_create_button"
          >
            <Plus className="w-4 h-4 inline mr-1.5" />
            Create Post
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-white/8">
          <table className="w-full text-sm" data-ocid="admin.posts_table">
            <thead>
              <tr
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {[
                  "Title",
                  "Category",
                  "Status",
                  "Publish Date",
                  "Author",
                  "Actions",
                ].map((h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {posts.map((post, i) => (
                <tr
                  key={post.id}
                  className="border-b border-white/5 transition-colors"
                  data-ocid={`admin.post_row.${i + 1}`}
                >
                  <td className="px-4 py-3 max-w-[200px]">
                    <p
                      className="font-medium truncate"
                      style={{ color: "#f8f8f8" }}
                    >
                      {post.title}
                    </p>
                    <p
                      className="text-xs mt-0.5 truncate"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      {post.readTime}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(155,48,255,0.12)",
                        color: "#9B30FF",
                        border: "1px solid rgba(155,48,255,0.25)",
                      }}
                    >
                      {post.category}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={
                        post.status === "published"
                          ? {
                              background: "rgba(0,200,80,0.12)",
                              color: "#00C850",
                              border: "1px solid rgba(0,200,80,0.25)",
                            }
                          : {
                              background: "rgba(255,184,0,0.12)",
                              color: "#FFB800",
                              border: "1px solid rgba(255,184,0,0.25)",
                            }
                      }
                    >
                      {post.status === "published" ? "● Published" : "○ Draft"}
                    </span>
                  </td>
                  <td
                    className="px-4 py-3 text-xs"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {post.publishDate}
                  </td>
                  <td
                    className="px-4 py-3 text-xs"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {post.author}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setEditPost(post);
                          setFormOpen(true);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-blue-500/20"
                        style={{ color: "#0066FF" }}
                        aria-label="Edit post"
                        data-ocid={`admin.post_edit_button.${i + 1}`}
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      {deleteConfirm === post.id ? (
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => handleDelete(post.id)}
                            className="px-2.5 py-1 rounded-lg text-xs font-bold text-white"
                            style={{ background: "#FF4444" }}
                            data-ocid={`admin.post_confirm_delete_button.${i + 1}`}
                          >
                            Delete
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeleteConfirm(null)}
                            className="px-2.5 py-1 rounded-lg text-xs"
                            style={{
                              background: "rgba(255,255,255,0.08)",
                              color: "rgba(255,255,255,0.5)",
                            }}
                            data-ocid={`admin.post_cancel_delete_button.${i + 1}`}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setDeleteConfirm(post.id)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-red-500/20"
                          style={{ color: "rgba(255,80,80,0.7)" }}
                          aria-label="Delete post"
                          data-ocid={`admin.post_delete_button.${i + 1}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ─── Contact Submissions Tab ──────────────────────────────────────────────────

function ContactSubmissionsTab() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("bh_contact_submissions");
    if (stored) {
      try {
        setSubmissions(JSON.parse(stored) as ContactSubmission[]);
      } catch {
        /* ignore */
      }
    }
    setLoading(false);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2
          className="font-display font-bold text-lg"
          style={{ color: "#f8f8f8" }}
        >
          Contact Submissions{" "}
          <span
            className="text-sm font-normal"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            ({submissions.length})
          </span>
        </h2>
      </div>

      {loading ? (
        <div
          className="py-16 text-center"
          data-ocid="admin.submissions_loading_state"
        >
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin mx-auto" />
        </div>
      ) : submissions.length === 0 ? (
        <div
          className="py-16 text-center rounded-2xl border border-dashed border-white/10"
          data-ocid="admin.submissions_empty_state"
        >
          <Users
            className="w-12 h-12 mx-auto mb-3"
            style={{ color: "rgba(255,255,255,0.15)" }}
          />
          <p
            className="font-display font-semibold"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            No submissions yet
          </p>
          <p
            className="text-sm mt-1"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Contact form leads will appear here
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-white/8">
          <table className="w-full text-sm" data-ocid="admin.submissions_table">
            <thead>
              <tr
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {[
                  "Name",
                  "Email",
                  "Phone",
                  "Service Interest",
                  "Message",
                  "Submitted At",
                ].map((h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub, i) => (
                <tr
                  key={sub.id}
                  className="border-b border-white/5 transition-colors"
                  data-ocid={`admin.submission_row.${i + 1}`}
                >
                  <td
                    className="px-4 py-3 font-medium"
                    style={{ color: "#f8f8f8" }}
                  >
                    {sub.name}
                  </td>
                  <td
                    className="px-4 py-3"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    <a
                      href={`mailto:${sub.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {sub.email}
                    </a>
                  </td>
                  <td
                    className="px-4 py-3 text-xs"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {sub.phone || "—"}
                  </td>
                  <td className="px-4 py-3">
                    {sub.service ? (
                      <span
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "rgba(0,102,255,0.12)",
                          color: "#0066FF",
                          border: "1px solid rgba(0,102,255,0.25)",
                        }}
                      >
                        {sub.service}
                      </span>
                    ) : (
                      <span style={{ color: "rgba(255,255,255,0.3)" }}>—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 max-w-[200px]">
                    <p
                      className="text-xs line-clamp-2"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {sub.message || "—"}
                    </p>
                  </td>
                  <td
                    className="px-4 py-3 text-xs"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {sub.submittedAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ─── Admin Main ───────────────────────────────────────────────────────────────

interface AdminProps {
  onClose: () => void;
}

export default function Admin({ onClose }: AdminProps) {
  const [authed, setAuthed] = useState(
    () => localStorage.getItem(AUTH_KEY) === "true",
  );
  const [tab, setTab] = useState<"posts" | "submissions">("posts");
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    setAuthed(false);
  };

  if (!authed) {
    return (
      <div className="fixed inset-0 z-[100]" data-ocid="admin.page">
        <LoginGate onLogin={() => setAuthed(true)} />
      </div>
    );
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] overflow-y-auto"
      style={{ background: "#0a0a0a" }}
      data-ocid="admin.page"
      aria-label="Admin Panel"
    >
      {/* Ambient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[350px] rounded-full blur-[120px]"
          style={{ background: "rgba(0,102,255,0.06)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full blur-[100px]"
          style={{ background: "rgba(155,48,255,0.05)" }}
        />
        <div className="absolute inset-0 dot-pattern opacity-15" />
      </div>

      {/* Sticky header */}
      <div
        className="sticky top-0 z-10 backdrop-blur-xl border-b border-white/5"
        style={{ background: "rgba(10,10,10,0.92)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              {/* Increased admin header logo: h-9 */}
              <img
                src="/assets/images/brandhype-logo-new.png"
                alt="BrandHype"
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="text-white/20 text-sm">|</span>
              <span
                className="font-display font-bold text-sm"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Admin Panel
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors hover:bg-white/10"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                data-ocid="admin.logout_button"
              >
                <LogOut className="w-3.5 h-3.5" /> Logout
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors hover:bg-white/10"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                data-ocid="admin.close_button"
              >
                <X className="w-3.5 h-3.5" /> Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-20">
        {/* Page title */}
        <div className="mb-8">
          <h1
            className="font-display font-black text-2xl sm:text-3xl mb-1"
            style={{
              background: "linear-gradient(135deg, #0066FF, #9B30FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dashboard
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
            Manage blog content and view contact submissions
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-2 mb-8 p-1 rounded-xl w-fit"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
          data-ocid="admin.tabs"
        >
          <button
            type="button"
            onClick={() => setTab("posts")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            style={
              tab === "posts"
                ? {
                    background: "linear-gradient(135deg, #0066FF, #9B30FF)",
                    color: "#fff",
                  }
                : { color: "rgba(255,255,255,0.45)" }
            }
            data-ocid="admin.posts_tab"
          >
            <FileText className="w-4 h-4" /> Blog Posts
          </button>
          <button
            type="button"
            onClick={() => setTab("submissions")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            style={
              tab === "submissions"
                ? {
                    background: "linear-gradient(135deg, #0066FF, #9B30FF)",
                    color: "#fff",
                  }
                : { color: "rgba(255,255,255,0.45)" }
            }
            data-ocid="admin.submissions_tab"
          >
            <Users className="w-4 h-4" /> Contact Submissions
          </button>
        </div>

        {/* Tab panels */}
        <div
          className="rounded-2xl p-6 sm:p-8"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {tab === "posts" ? <BlogPostsTab /> : <ContactSubmissionsTab />}
        </div>
      </div>
    </div>
  );
}
