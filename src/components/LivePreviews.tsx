"use client";

import { useApp } from "@/context/AppContext";

function TwitterPreview() {
  const { state } = useApp();
  const { meta } = state;
  const isLarge = meta.twitterCardType === "summary_large_image";
  const domain = meta.url
    ? (() => {
        try {
          return new URL(meta.url).hostname;
        } catch {
          return "example.com";
        }
      })()
    : "example.com";

  if (isLarge) {
    return (
      <div
        style={{
          borderRadius: 14,
          border: "1px solid var(--border)",
          overflow: "hidden",
          background: "var(--card)",
          maxWidth: 500,
        }}
      >
        {meta.ogImageUrl && (
          <div
            style={{
              width: "100%",
              height: 250,
              background: "var(--bg-dark)",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={meta.ogImageUrl}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        )}
        <div style={{ padding: "10px 12px" }}>
          <div
            style={{
              fontSize: 13,
              color: "var(--body)",
              opacity: 0.6,
            }}
          >
            {domain}
          </div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "var(--heading)",
              marginTop: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {meta.title || "Page Title"}
          </div>
          <div
            style={{
              fontSize: 13,
              color: "var(--body)",
              marginTop: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {meta.description || "Page description"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        borderRadius: 14,
        border: "1px solid var(--border)",
        overflow: "hidden",
        background: "var(--card)",
        maxWidth: 500,
      }}
    >
      <div
        style={{
          width: 130,
          minHeight: 130,
          background: "var(--bg-dark)",
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        {meta.ogImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={meta.ogImageUrl}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </div>
      <div
        style={{
          padding: "10px 12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 13,
            color: "var(--body)",
            opacity: 0.6,
          }}
        >
          {domain}
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "var(--heading)",
            marginTop: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {meta.title || "Page Title"}
        </div>
        <div
          style={{
            fontSize: 13,
            color: "var(--body)",
            marginTop: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {meta.description || "Page description"}
        </div>
      </div>
    </div>
  );
}

function FacebookPreview() {
  const { state } = useApp();
  const { meta } = state;
  const domain = meta.url
    ? (() => {
        try {
          return new URL(meta.url).hostname.toUpperCase();
        } catch {
          return "EXAMPLE.COM";
        }
      })()
    : "EXAMPLE.COM";

  return (
    <div
      style={{
        borderRadius: 12,
        border: "1px solid var(--border)",
        overflow: "hidden",
        background: "var(--card)",
        maxWidth: 500,
      }}
    >
      {meta.ogImageUrl && (
        <div
          style={{
            width: "100%",
            height: 254,
            background: "var(--bg-dark)",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={meta.ogImageUrl}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      )}
      <div
        style={{
          padding: "10px 12px",
          background: "var(--bg-dark)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            fontSize: 12,
            color: "var(--body)",
            opacity: 0.6,
            textTransform: "uppercase" as const,
          }}
        >
          {domain}
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "var(--heading)",
            marginTop: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {meta.title || "Page Title"}
        </div>
        <div
          style={{
            fontSize: 14,
            color: "var(--body)",
            marginTop: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {meta.description || "Page description"}
        </div>
      </div>
    </div>
  );
}

function GooglePreview() {
  const { state } = useApp();
  const { meta } = state;
  const url = meta.url || "https://example.com";
  const domain = url
    ? (() => {
        try {
          const u = new URL(url);
          return u.hostname + u.pathname;
        } catch {
          return "example.com";
        }
      })()
    : "example.com";

  return (
    <div
      style={{
        padding: "12px 0",
        maxWidth: 600,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 4,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "var(--bg-dark)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
          }}
        >
          G
        </div>
        <div>
          <div style={{ fontSize: 12, color: "var(--body)" }}>{domain}</div>
        </div>
      </div>
      <div
        style={{
          fontSize: 20,
          color: "#1a0dab",
          fontWeight: 400,
          cursor: "pointer",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {meta.title || "Page Title"}
      </div>
      <div
        style={{
          fontSize: 14,
          color: "var(--body)",
          marginTop: 4,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {meta.description || "Page description will appear here in search results."}
      </div>
    </div>
  );
}

function SlackPreview() {
  const { state } = useApp();
  const { meta } = state;
  const domain = meta.url
    ? (() => {
        try {
          return new URL(meta.url).hostname;
        } catch {
          return "example.com";
        }
      })()
    : "example.com";

  return (
    <div
      style={{
        borderLeft: "4px solid var(--primary)",
        padding: "8px 12px",
        background: "var(--bg-dark)",
        borderRadius: "0 8px 8px 0",
        maxWidth: 500,
      }}
    >
      {meta.ogImageUrl && (
        <div
          style={{
            width: "100%",
            maxHeight: 200,
            borderRadius: 6,
            overflow: "hidden",
            marginBottom: 8,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={meta.ogImageUrl}
            alt=""
            style={{
              width: "100%",
              maxHeight: 200,
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 4,
        }}
      >
        <div
          style={{
            fontSize: 12,
            color: "var(--body)",
            opacity: 0.7,
          }}
        >
          {domain}
        </div>
      </div>
      <div
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: "var(--primary)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {meta.title || "Page Title"}
      </div>
      <div
        style={{
          fontSize: 13,
          color: "var(--body)",
          marginTop: 2,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {meta.description || "Page description"}
      </div>
    </div>
  );
}

const tabs = [
  { id: "twitter", label: "Twitter / X" },
  { id: "facebook", label: "Facebook" },
  { id: "google", label: "Google" },
  { id: "slack", label: "Slack" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function LivePreviews() {
  const [activeTab, setActiveTab] = React.useState<TabId>("twitter");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 4,
          borderBottom: "1px solid var(--border)",
          paddingBottom: 0,
          overflowX: "auto",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "10px 16px",
              background: "transparent",
              border: "none",
              borderBottom:
                activeTab === tab.id
                  ? "2px solid var(--primary)"
                  : "2px solid transparent",
              color:
                activeTab === tab.id ? "var(--primary)" : "var(--body)",
              fontWeight: activeTab === tab.id ? 600 : 400,
              cursor: "pointer",
              fontSize: 14,
              whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ padding: "8px 0" }}>
        {activeTab === "twitter" && <TwitterPreview />}
        {activeTab === "facebook" && <FacebookPreview />}
        {activeTab === "google" && <GooglePreview />}
        {activeTab === "slack" && <SlackPreview />}
      </div>
    </div>
  );
}

import React from "react";
