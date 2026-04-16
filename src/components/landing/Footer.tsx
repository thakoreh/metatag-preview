"use client";

import React from "react";

export function Footer() {
  return (
    <footer
      style={{
        padding: "40px 24px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
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
              width: 28,
              height: 28,
              borderRadius: 8,
              background: "var(--primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 16,
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
        <div
          style={{
            display: "flex",
            gap: 24,
            fontSize: 14,
          }}
        >
          <a
            href="#features"
            style={{ color: "var(--body)", textDecoration: "none" }}
          >
            Features
          </a>
          <a
            href="#editor"
            style={{ color: "var(--body)", textDecoration: "none" }}
          >
            Editor
          </a>
        </div>
        <div
          style={{
            fontSize: 13,
            color: "var(--body)",
            opacity: 0.6,
          }}
        >
          &copy; {new Date().getFullYear()} MetaTag Preview. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
