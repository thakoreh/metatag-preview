"use client";

import React from "react";

const steps = [
  {
    number: "01",
    title: "Enter Your Details",
    description:
      "Add your page URL, title, description, and OG image URL. Character counters help you stay within optimal limits.",
  },
  {
    number: "02",
    title: "Preview Everywhere",
    description:
      "See real-time previews of how your link will look on Twitter/X, Facebook, Google Search, and Slack unfurls.",
  },
  {
    number: "03",
    title: "Copy & Paste",
    description:
      "Copy the generated meta tags with one click and paste them into your HTML head section. Done!",
  },
];

export function HowItWorks() {
  return (
    <section
      style={{
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
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
          How It Works
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
          Perfect Meta Tags in 3 Steps
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "var(--body)",
            maxWidth: 500,
            margin: "0 auto 60px",
          }}
        >
          No sign-up required. No complicated setup. Just results.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
          data-grid="steps"
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                textAlign: "center",
                padding: 32,
                borderRadius: 16,
                border: "1px solid var(--border)",
                background: "var(--card)",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "var(--primary)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 800,
                  margin: "0 auto 20px",
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--heading)",
                  margin: "0 0 12px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--body)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div
                  style={{
                    display: "none",
                    position: "absolute",
                    right: -18,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "var(--primary)",
                    fontSize: 24,
                  }}
                  className="step-arrow"
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
