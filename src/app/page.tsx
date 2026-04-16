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

function AppContent() {
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
          padding: "12px 24px",
          background: "var(--card)",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "var(--primary)",
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
              fontSize: 18,
            }}
          >
            MetaTag Preview
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="#editor"
            style={{
              padding: "8px 16px",
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
      </nav>

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
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "380px 1fr",
              gap: 24,
              alignItems: "start",
            }}
            data-grid="editor"
          >
            {/* Left: Editor */}
            <MetaEditor />

            {/* Right: Previews + Code */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
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
