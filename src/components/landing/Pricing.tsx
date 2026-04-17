"use client";

import React from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for personal projects and occasional use.",
    features: [
      "Unlimited meta tag previews",
      "All platform previews",
      "Copy-to-clipboard",
      "Save up to 5 sets",
      "Dark mode support",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For professionals and agencies who need more power.",
    features: [
      "Everything in Free",
      "Unlimited saved sets",
      "Bulk URL analysis",
      "Custom branding removal",
      "API access",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "100px 24px",
        background: "var(--bg-dark)",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
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
          Pricing
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
          Simple, Transparent Pricing
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "var(--body)",
            maxWidth: 450,
            margin: "0 auto 60px",
          }}
        >
          Start free, upgrade when you need more.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
          }}
          data-grid="pricing"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                padding: 32,
                borderRadius: 16,
                border: plan.highlighted
                  ? "2px solid var(--primary)"
                  : "1px solid var(--border)",
                background: "var(--card)",
                textAlign: "left",
                position: "relative",
                transform: plan.highlighted ? "scale(1.02)" : "none",
              }}
            >
              {plan.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "4px 16px",
                    borderRadius: 20,
                    background: "var(--primary)",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Most Popular
                </div>
              )}
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--heading)",
                  marginBottom: 4,
                }}
              >
                {plan.name}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--body)",
                  marginBottom: 20,
                }}
              >
                {plan.description}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 4,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontSize: 40,
                    fontWeight: 800,
                    color: "var(--heading)",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: "var(--body)",
                  }}
                >
                  {plan.period}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 28,
                }}
              >
                {plan.features.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                      color: "var(--body)",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 10,
                  border: "none",
                  background: plan.highlighted
                    ? "var(--primary)"
                    : "var(--bg-dark)",
                  color: plan.highlighted ? "#fff" : "var(--heading)",
                  cursor: "pointer",
                  fontSize: 15,
                  fontWeight: 600,
                  transition: "all 0.2s",
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
