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
        color: "var(--body)",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          padding: "0 24px",
          height: 60,
          background: "color-mix(in srgb, var(--card) 90%, transparent)",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
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
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "linear-gradient(135deg, #6366f1, #818cf8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 18,
              fontWeight: 800,
            }}
          >
            M
          </div>
          <span
            style={{
              fontWeight: 700,
              color: "var(--heading)",
              fontSize: 17,
              letterSpacing: "-0.01em",
            }}
          >
            MetaTag Preview
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a
            href="#features"
            className="nav-link-desktop"
            style={{
              color: "var(--body)",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="nav-link-desktop"
            style={{
              color: "var(--body)",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            Pricing
          </a>
          <a
            href="#editor"
            style={{
              padding: "8px 18px",
              borderRadius: 8,
              background: "var(--primary)",
              color: "#fff",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
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
            color: "var(--heading)",
            cursor: "pointer",
          }}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            top: 60,
            left: 0,
            right: 0,
            zIndex: 40,
            background: "var(--card)",
            borderBottom: "1px solid var(--border)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ color: "var(--body)", textDecoration: "none", fontSize: 16, fontWeight: 500, padding: "8px 0" }}>
            Features
          </a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ color: "var(--body)", textDecoration: "none", fontSize: 16, fontWeight: 500, padding: "8px 0" }}>
            Pricing
          </a>
          <a
            href="#editor"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              padding: "12px",
              borderRadius: 8,
              background: "var(--primary)",
              color: "#fff",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Open Editor
          </a>
          <div style={{ padding: "8px 0" }}>
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
          padding: "80px 24px",
          background: "var(--bg-dark)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "var(--primary)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 12,
              }}
            >
              Editor
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                color: "var(--heading)",
                marginBottom: 16,
                letterSpacing: "-0.02em",
              }}
            >
              Craft Your Meta Tags
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "var(--body)",
                maxWidth: 500,
                margin: "0 auto",
              }}
            >
              Fill in the details below and watch the live previews update instantly.
            </p>
          </div>

          <div data-grid="editor" style={{ display: "grid", gridTemplateColumns: "400px 1fr", gap: 24, alignItems: "start" }}>
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
                  background: "var(--card)",
                  borderRadius: 16,
                  border: "1px solid var(--border)",
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--heading)",
                    margin: "0 0 16px",
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
