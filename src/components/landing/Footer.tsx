"use client";

import React from "react";

export function Footer() {
  return (
    <footer
      style={{
        padding: "48px 24px 32px",
        borderTop: "1px solid var(--border)",
        background: "var(--bg-dark)",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            marginBottom: 40,
          }}
          data-grid="footer"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #6366f1, #818cf8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 800,
                }}
              >
                M
              </div>
              <span
                style={{
                  fontWeight: 700,
                  color: "var(--heading)",
                  fontSize: 16,
                }}
              >
                MetaTag Preview
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                color: "var(--body)",
                lineHeight: 1.6,
                margin: 0,
                maxWidth: 260,
              }}
            >
              Preview and generate perfect meta tags for Twitter, Facebook, Google, and Slack. Free, no sign-up required.
            </p>
          </div>

          {/* Product */}
          <div>
            <div
              style={{
                fontWeight: 600,
                color: "var(--heading)",
                fontSize: 14,
                marginBottom: 12,
              }}
            >
              Product
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {[
                { label: "Editor", href: "#editor" },
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "var(--body)",
                    textDecoration: "none",
                    fontSize: 14,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div
              style={{
                fontWeight: 600,
                color: "var(--heading)",
                fontSize: 14,
                marginBottom: 12,
              }}
            >
              Legal
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <a
                href="#"
                style={{
                  color: "var(--body)",
                  textDecoration: "none",
                  fontSize: 14,
                }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                style={{
                  color: "var(--body)",
                  textDecoration: "none",
                  fontSize: 14,
                }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "var(--body)",
              opacity: 0.6,
            }}
          >
            &copy; {new Date().getFullYear()} MetaTag Preview. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {/* Twitter/X */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--body)", opacity: 0.5 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--body)", opacity: 0.5 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
