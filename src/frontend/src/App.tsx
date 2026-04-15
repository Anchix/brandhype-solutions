import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Admin from "@/pages/Admin";
import { Suspense, lazy, useEffect, useState } from "react";

const Hero = lazy(() => import("@/pages/Hero"));
const Services = lazy(() => import("@/pages/Services"));
const NicheDown = lazy(() => import("@/pages/NicheDown"));
const Clients = lazy(() => import("@/pages/Clients"));
const CaseStudies = lazy(() => import("@/pages/CaseStudies"));
const Stats = lazy(() => import("@/pages/Stats"));
const About = lazy(() => import("@/pages/About"));
const Process = lazy(() => import("@/pages/Process"));
const LeadMagnet = lazy(() => import("@/pages/LeadMagnet"));
const Contact = lazy(() => import("@/pages/Contact"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));

function SectionLoader() {
  return (
    <div className="w-full py-32 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

function getRoute() {
  return window.location.pathname;
}

export default function App() {
  const [adminOpen, setAdminOpen] = useState(false);
  const [pathname, setPathname] = useState(getRoute);

  // Listen for custom routechange + popstate to update pathname
  useEffect(() => {
    const update = () => setPathname(getRoute());
    window.addEventListener("routechange", update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("routechange", update);
      window.removeEventListener("popstate", update);
    };
  }, []);

  // Open admin panel when URL hash is #admin
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#admin") {
        setAdminOpen(true);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // Prevent body scroll when admin is open
  useEffect(() => {
    document.body.style.overflow = adminOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [adminOpen]);

  const handleAdminClose = () => {
    setAdminOpen(false);
    if (window.location.hash === "#admin") {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
  };

  // Route: /blog/[slug] → BlogPost detail
  if (pathname.startsWith("/blog/")) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-foreground overflow-x-hidden">
        <Navbar />
        <Suspense fallback={<SectionLoader />}>
          <BlogPost />
        </Suspense>
        <Suspense fallback={null}>
          <WhatsAppButton />
        </Suspense>
        {adminOpen && <Admin onClose={handleAdminClose} />}
      </div>
    );
  }

  // Route: /blog → Blog listing page
  if (pathname === "/blog") {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-foreground overflow-x-hidden">
        <Navbar />
        <Suspense fallback={<SectionLoader />}>
          <Blog />
        </Suspense>
        <Suspense fallback={null}>
          <WhatsAppButton />
        </Suspense>
        {adminOpen && <Admin onClose={handleAdminClose} />}
      </div>
    );
  }

  // Route: / → Main landing page
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <NicheDown />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Clients />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CaseStudies />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <LeadMagnet />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Footer onAdminClick={() => setAdminOpen(true)} />
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
      {adminOpen && <Admin onClose={handleAdminClose} />}
    </div>
  );
}
