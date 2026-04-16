"use client";

import React from "react";

const testimonials = [
  {
    quote:
      "MetaTag Preview saved me hours of guesswork. Now I can see exactly how my blog posts will look on Twitter before publishing.",
    name: "Sarah Chen",
    role: "Content Marketing Lead",
    avatar: "SC",
  },
  {
    quote:
      "The live preview feature is incredible. I use it for every page on our website. The generated code is always pixel-perfect.",
    name: "Marcus Johnson",
    role: "Senior Frontend Developer",
    avatar: "MJ",
  },
  {
    quote:
      "Finally, a tool that handles all social platforms in one place. No more switching between Twitter Card Validator and Facebook Debugger.",
    name: "Aisha Patel",
    role: "SEO Specialist",
    avatar: "AP",
  },
];

export function Testimonials() {
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
          Testimonials
        </div>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 800,
            color: "var(--heading)",
            marginBottom: 60,
            letterSpacing: "-0.02em",
          }}
        >
          Loved by Developers & Marketers
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          data-grid="testimonials"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                padding: 28,
                borderRadius: 16,
                border: "1px solid var(--border)",
                background: "var(--card)",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg
                    key={s}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#eab308"
                    stroke="#eab308"
                    strokeWidth="1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--body)",
                  lineHeight: 1.6,
                  margin: "0 0 20px",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "var(--primary)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      color: "var(--heading)",
                      fontSize: 14,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--body)",
                      opacity: 0.7,
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
