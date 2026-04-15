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

function SectionLoader() {
  return (
    <div className="w-full py-32 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  const [adminOpen, setAdminOpen] = useState(false);

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
    // Clear the hash without page scroll
    if (window.location.hash === "#admin") {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
  };

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

      {/* Admin overlay */}
      {adminOpen && <Admin onClose={handleAdminClose} />}
    </div>
  );
}
