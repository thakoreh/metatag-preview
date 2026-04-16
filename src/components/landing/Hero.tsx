"use client";

import React from "react";

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px 80px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(168,85,247,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(59,130,246,0.1) 0%, transparent 50%)",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 16px",
            borderRadius: 20,
            border: "1px solid var(--border)",
            background: "var(--card)",
            fontSize: 13,
            color: "var(--primary)",
            fontWeight: 500,
            marginBottom: 24,
          }}
        >
          Free Meta Tag Preview Tool
        </div>
        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 800,
            color: "var(--heading)",
            lineHeight: 1.1,
            margin: "0 0 20px",
            letterSpacing: "-0.02em",
          }}
        >
          Preview Your Meta Tags{" "}
          <span style={{ color: "var(--primary)" }}>Before You Ship</span>
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "var(--body)",
            maxWidth: 600,
            margin: "0 auto 32px",
            lineHeight: 1.6,
          }}
        >
          See exactly how your website will look on Twitter, Facebook, Google,
          and Slack. Generate perfect meta tags in seconds.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#editor"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "14px 28px",
              borderRadius: 12,
              background: "var(--primary)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            Start Previewing
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ marginLeft: 8 }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="#features"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "14px 28px",
              borderRadius: 12,
              border: "1px solid var(--border)",
              background: "var(--card)",
              color: "var(--heading)",
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Learn More
          </a>
        </div>

        {/* Product Mockup */}
        <div
          style={{
            marginTop: 60,
            borderRadius: 16,
            border: "1px solid var(--border)",
            background: "var(--card)",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              padding: "12px 16px",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#eab308" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
            <div
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: 12,
                color: "var(--body)",
                opacity: 0.6,
              }}
            >
              metatag-preview.app
            </div>
          </div>
          <div style={{ padding: 24 }}>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    height: 14,
                    borderRadius: 4,
                    background: "var(--bg-dark)",
                    marginBottom: 8,
                    width: "40%",
                  }}
                />
                <div
                  style={{
                    height: 36,
                    borderRadius: 6,
                    background: "var(--bg-dark)",
                    marginBottom: 12,
                  }}
                />
                <div
                  style={{
                    height: 14,
                    borderRadius: 4,
                    background: "var(--bg-dark)",
                    marginBottom: 8,
                    width: "50%",
                  }}
                />
                <div
                  style={{
                    height: 60,
                    borderRadius: 6,
                    background: "var(--bg-dark)",
                    marginBottom: 12,
                  }}
                />
                <div
                  style={{
                    height: 14,
                    borderRadius: 4,
                    background: "var(--bg-dark)",
                    marginBottom: 8,
                    width: "35%",
                  }}
                />
                <div
                  style={{
                    height: 36,
                    borderRadius: 6,
                    background: "var(--bg-dark)",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    height: 120,
                    borderRadius: 8,
                    background: "var(--bg-dark)",
                    marginBottom: 12,
                  }}
                />
                <div
                  style={{
                    height: 14,
                    borderRadius: 4,
                    background: "var(--bg-dark)",
                    marginBottom: 6,
                    width: "70%",
                  }}
                />
                <div
                  style={{
                    height: 10,
                    borderRadius: 4,
                    background: "var(--bg-dark)",
                    width: "90%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
