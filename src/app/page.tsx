"use client";

import React from "react";
import { AppProvider } from "@/context/AppContext";
import ThemeToggle from "@/components/ThemeToggle";
import MetaEditor from "@/components/MetaEditor";
import LivePreviews from "@/components/LivePreviews";
import CodeGenerator from "@/components/CodeGenerator";
import SavedSets from "@/components/SavedSets";
import { Hero } from "@/components/landing/Hero";
import { StatsBar } from "@/components/landing/StatsBar";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { useState } from "react";

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "#525f7f",
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontWeight: 400,
        lineHeight: 1.6,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          height: 64,
          padding: "0 32px",
          background: "rgba(255, 255, 255, 0.92)",
          borderBottom: "1px solid #e3e8ee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maxWidth: "100%",
        }}
      >
        {/* Logo */}
        <a
          href="/metatag-preview/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              background: "linear-gradient(135deg, #533afd 0%, #7a5afd 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            M
          </div>
          <span
            style={{
              fontWeight: 600,
              color: "#0a2540",
              fontSize: 15,
              letterSpacing: "-0.025em",
            }}
          >
            MetaTag Preview
          </span>
        </a>

        {/* Desktop nav links */}
        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: 24 }}
        >
          <a
            href="#features"
            className="nav-link-desktop"
            style={{
              color: "#525f7f",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              transition: "color 0.15s ease",
            }}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="nav-link-desktop"
            style={{
              color: "#525f7f",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              transition: "color 0.15s ease",
            }}
          >
            Pricing
          </a>
          <a
            href="#editor"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 20px",
              borderRadius: 6,
              background: "#533afd",
              color: "#fff",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1,
              transition: "background 0.15s ease, box-shadow 0.15s ease",
              boxShadow: "0 1px 3px rgba(83, 58, 253, 0.2)",
            }}
          >
            Open Editor
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            padding: 8,
            border: "none",
            background: "transparent",
            color: "#0a2540",
            cursor: "pointer",
            borderRadius: 6,
          }}
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-dropdown"
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            zIndex: 40,
            background: "#ffffff",
            borderBottom: "1px solid #e3e8ee",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
          }}
        >
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: "#525f7f",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 500,
              padding: "10px 12px",
              borderRadius: 6,
              display: "block",
              transition: "background 0.1s ease",
            }}
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: "#525f7f",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 500,
              padding: "10px 12px",
              borderRadius: 6,
              display: "block",
              transition: "background 0.1s ease",
            }}
          >
            Pricing
          </a>
          <a
            href="#editor"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: "block",
              padding: "10px 20px",
              borderRadius: 6,
              background: "#533afd",
              color: "#fff",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              textAlign: "center",
              letterSpacing: "-0.01em",
              marginTop: 4,
            }}
          >
            Open Editor
          </a>
          <div style={{ padding: "8px 12px" }}>
            <ThemeToggle />
          </div>
        </div>
      )}

      {/* Landing Sections */}
      <Hero />
      <StatsBar />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />

      {/* Editor Section */}
      <section
        id="editor"
        style={{
          padding: "96px 24px",
          background: "#f6f9fc",
          borderTop: "1px solid #e3e8ee",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Section heading */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 600,
                color: "#533afd",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 16,
                padding: "4px 12px",
                background: "rgba(83, 58, 253, 0.06)",
                borderRadius: 100,
              }}
            >
              Editor
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 600,
                color: "#0a2540",
                marginBottom: 16,
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
                marginTop: 0,
              }}
            >
              Craft Your Meta Tags
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "#525f7f",
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Fill in the details below and watch the live previews update
              instantly.
            </p>
          </div>

          <div
            data-grid="editor"
            style={{
              display: "grid",
              gridTemplateColumns: "400px 1fr",
              gap: 24,
              alignItems: "start",
            }}
          >
            {/* Left: Editor */}
            <MetaEditor />

            {/* Right: Previews + Code */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
                minWidth: 0,
              }}
            >
              <div
                style={{
                  padding: 24,
                  background: "#ffffff",
                  borderRadius: 8,
                  border: "1px solid #e3e8ee",
                  boxShadow:
                    "0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)",
                }}
              >
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#0a2540",
                    margin: "0 0 16px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Live Previews
                </h3>
                <LivePreviews />
              </div>
              <CodeGenerator />
              <SavedSets />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
