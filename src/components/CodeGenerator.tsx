"use client";

import { useApp } from "@/context/AppContext";

export default function CodeGenerator() {
  const { generateCode } = useApp();
  const [copied, setCopied] = React.useState(false);
  const code = generateCode();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      style={{
        background: "var(--card)",
        borderRadius: 16,
        border: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 20px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <h3
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "var(--heading)",
            margin: 0,
          }}
        >
          Generated Meta Tags
        </h3>
        <button
          onClick={handleCopy}
          style={{
            padding: "8px 16px",
            borderRadius: 8,
            border: "none",
            background: copied ? "#22c55e" : "var(--primary)",
            color: "#fff",
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 6,
            transition: "all 0.2s",
          }}
        >
          {copied ? (
            <>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy All
            </>
          )}
        </button>
      </div>
      <pre
        style={{
          margin: 0,
          padding: "20px",
          background: "var(--bg-dark)",
          color: "var(--heading)",
          fontSize: 13,
          fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
          overflow: "auto",
          lineHeight: 1.6,
        }}
      >
        {code}
      </pre>
    </div>
  );
}

import React from "react";
