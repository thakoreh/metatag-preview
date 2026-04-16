"use client";

import React from "react";

export function FinalCTA() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "var(--bg-dark)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: "60px 40px",
          borderRadius: 24,
          border: "1px solid var(--border)",
          background: "var(--card)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 30% 0%, rgba(99,102,241,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 100%, rgba(168,85,247,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 800,
              color: "var(--heading)",
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            Ready to Perfect Your Meta Tags?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--body)",
              maxWidth: 450,
              margin: "0 auto 32px",
              lineHeight: 1.6,
            }}
          >
            Join thousands of developers and marketers who use MetaTag Preview
            to optimize their social sharing.
          </p>
          <a
            href="#editor"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "16px 32px",
              borderRadius: 12,
              background: "var(--primary)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 17,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            Start Previewing Now — It&apos;s Free
          </a>
        </div>
      </div>
    </section>
  );
}
